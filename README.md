# MSI360

MSI360 is a client-only React/TypeScript prototype for a mobile-first musculoskeletal injury risk review. It renders questions from local TypeScript data, keeps answers in browser memory, uses Gemini to interpret free-text task descriptions when configured, scores answers from replaceable catalog mappings, and generates an English PDF report in the browser.

There is no backend and no database in this version.

## Tech Stack

- React
- TypeScript
- Vite
- `pdf-lib` for browser-side PDF generation
- Gemini API for text-answer interpretation
- Azure Translator planned for later user-response/report translation work

## Setup

```bash
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:5173/
```

Build:

```bash
npm run build
```

Run the full local quality gate:

```bash
npm test
```

Individual test commands:

```bash
npm run typecheck
npm run test:automated
npm run test:unit
```

The automated tests use Node's built-in test runner with an esbuild bundle step. Current automated coverage focuses on the important client logic: routing tags, visible questions, selected-option extraction, scoring aggregation, Gemini-unavailable fallback behavior, and a few lightweight assessment-flow integration checks.

## Environment Variables

Create `.env.local` in this repo root:

```env
VITE_GEMINI_API_KEY=your_gemini_key_here
VITE_GEMINI_MODEL=gemini-3.1-flash-lite-preview

# Planned for later. Not currently wired into the app.
VITE_AZURE_TRANSLATOR_KEY=your_azure_translator_key_here
VITE_AZURE_TRANSLATOR_REGION=canadacentral
VITE_AZURE_TRANSLATOR_ENDPOINT=https://api.cognitive.microsofttranslator.com
```

Important: this is a client-only app, so every `VITE_` variable is visible in the browser. Use prototype/test keys only, restrict the keys where possible, and do not commit `.env.local`.

## Project Structure

```text
src/
  App.tsx
  app/
    questionAssets.ts
    types.ts
  data/
    catalog.ts
    translations/
      en.ts
      fr.ts
      zhHans.ts
      es.ts
      ko.ts
      vi.ts
      index.ts
  logic/
    ai.ts
    answerSelection.ts
    appFlow.ts
    assessmentFlow.ts
    report.ts
    routing.ts
    scoring.ts
    scorePresentation.ts
  ui/
    components/
      ActionButtons.tsx
      AnswerControls.tsx
      AppHeader.tsx
    screens/
      AssessmentScreen.tsx
      OnboardingScreens.tsx
      ResultScreens.tsx
    styles.css
    styles/
      base.css
      components.css
      screens.css
  types.ts
```

## Question Data

Structural question data lives in:

```text
src/data/catalog.ts
```

This file owns:

- question IDs
- question type
- section
- display-condition tags
- option IDs
- grouped option structure
- placeholder risk score mappings
- AI instructions for text questions

Question IDs mirror the source questionnaire labels and use straight numeric IDs from `question-1` through `question-42`. Keep these IDs aligned with the source document when question order or labels change.

Question text lives in language-specific files:

```text
src/data/translations/en.ts
src/data/translations/fr.ts
src/data/translations/zhHans.ts
src/data/translations/es.ts
src/data/translations/ko.ts
src/data/translations/vi.ts
```

Current non-English files are placeholders that export English text. Replace each file with complete hard-coded translated question text when translations are ready. Add new languages by:

1. Creating a new file in `src/data/translations/`.
2. Exporting a `Translation`.
3. Adding it to `src/data/translations/index.ts`.
4. Adding the language to `languages` in `src/data/catalog.ts`.

During the assessment flow, option selections are treated as draft answers until the worker clicks Continue. Routing tags and follow-up questions are recomputed only after that commit, so choosing an option does not unexpectedly move the worker to another question.

## Gemini Integration

Gemini is used in:

```text
src/logic/ai.ts
```

The app uses Gemini in two conservative passes after the worker enters the free-text task description.

First, it sends the worker's text task description to Gemini, asks for strict JSON, and expects routing tags:

```json
{
  "normalized_answer_en": "string",
  "add_tags": ["manual_handling"],
  "missing_details": ["Approximate object weight"],
  "confidence": 0.8,
  "notes": "short explanation"
}
```

Only predefined tags from `tagTaxonomy` are accepted. If Gemini is unavailable or the key is missing, the app falls back to local keyword-based interpretation.

Second, when Gemini is configured, the app sends the worker's original task description plus the currently eligible follow-up questions and valid option IDs. Gemini may suggest questions that are already answered by the worker's text:

```json
{
  "auto_answers": [
    {
      "question_id": "question-6",
      "value": "mostly_sit",
      "confidence": 0.92,
      "evidence": "Sitting at a desk",
      "notes": "The worker explicitly described sitting at a desk."
    }
  ]
}
```

The client accepts only high-confidence pre-answers that exactly match catalog question IDs, option IDs, and group IDs, include evidence grounded in the worker's text, and do not overwrite user-entered answers. Accepted pre-answers are stored in the normal answer state, hidden from the assessment flow, and included in scoring and PDF reporting. If Gemini is unavailable, malformed, or not confident enough, no questions are hidden.

When the worker continues past the free-text task description, the app shows an analyzing spinner and disables the navigation buttons until tag extraction and pre-answering complete. This prevents duplicate submissions and reassures the worker that their input is still being processed.

## Scoring

Scoring is currently prototype-only and lives in:

```text
src/logic/scoring.ts
```

Risk score mappings are attached to options in `src/data/catalog.ts`. They are intentionally isolated so the team can replace them later with the final grading map.

Current aggregation:

- max selected option score per question
- average by risk factor
- average applicable factors for composite score

Risk factor interpretation text uses the averaged factor score:

- less than 1.5: currently low risk associated with that factor
- 1.5 to less than 2.4: possible risk of discomfort from that factor
- 2.4 to less than 3.5: likely risk of discomfort from that factor
- 3.5 or higher: known risk of pain and/or injury

## PDF Report

Browser-side PDF generation lives in:

```text
src/logic/report.ts
```

The report overview includes the averaged factor scores and their risk interpretation text. It uses full English question text from `src/data/translations/en.ts`. Do not shorten question text in the detailed question-and-answer section.

## Current Limitations

- Non-English translation files are placeholders.
- Azure Translator is not wired yet.
- Gemini is called directly from the browser, which exposes the prototype API key.
- Later survey/review/result pages are functional placeholders until final UI designs are supplied.
- Question grading mappings are placeholders.
