# MSI360

MSI360 is a client-only React/TypeScript prototype for a mobile-first musculoskeletal injury risk review. It renders questions from local TypeScript data, keeps answers in browser memory, uses Gemini to interpret free-text task descriptions when configured, scores answers from replaceable catalog mappings, and generates an English PDF report in the browser.

There is no backend and no database in this version.

## Tech Stack

- React
- TypeScript
- Vite
- `@react-pdf/renderer` for browser-side PDF generation
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

The automated tests use Node's built-in test runner with an esbuild bundle step. Current automated coverage focuses on the important client logic: routing tags, visible questions, selected-option extraction, scoring aggregation, Gemini-unavailable fallback behavior, PDF report data derivation, a React PDF document bundle smoke check, and a few lightweight assessment-flow integration checks.

The maintained list of automated and manual sprint test cases lives in `docs/MSI360_Sprint_Test_Cases.md`. Update that file whenever automated tests are added, removed, renamed, or materially changed.

## Score Presentation

The on-screen MSI risk summary displays the overall composite score as `X.X out of 4`. Category-specific scores retain the compact `X.X / 4` format.

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
AGENTS.md
docs/
  MSI360_Sprint_Test_Cases.md
public/
  icons/
    ...
  images/
    ...
  worksafebc-logo.png
scripts/
  run-tests.mjs
src/
  App.tsx
  main.tsx
  app/
    questionAssets.ts
    types.ts
  data/
    catalog.ts
    languages.ts
    questions.ts
    sections.ts
    tags.ts
    translations/
      index.ts
      af.ts
      ar.ts
      bn.ts
      ceb.ts
      cs.ts
      da.ts
      de.ts
      el.ts
      en.ts
      es.ts
      fa.ts
      faNos.ts
      fil.ts
      fr.ts
      gu.ts
      hi.ts
      hr.ts
      hu.ts
      id.ts
      ilo.ts
      it.ts
      ja.ts
      ko.ts
      ml.ts
      nan.ts
      nl.ts
      pa.ts
      pl.ts
      prs.ts
      pt.ts
      ro.ts
      ru.ts
      sr.ts
      ta.ts
      tr.ts
      uk.ts
      ur.ts
      vi.ts
      yue.ts
      zhHans.ts
  logic/
    ai.ts
    aiFallbackToast.ts
    answerSelection.ts
    appFlow.ts
    assessmentFlow.ts
    report.ts
    routing.ts
    scoring.ts
    scorePresentation.ts
  report/
    ReportDocument.tsx
    reportAssets.ts
    reportData.ts
    reportGuidance.ts
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
  vite-env.d.ts
tests/
  integration/
    assessment-flow.test.ts
  unit/
    ai.test.ts
    answer-selection.test.ts
    loading-state.test.ts
    report-data.test.ts
    report-document.test.ts
    routing.test.ts
    score-presentation.test.ts
    scoring.test.ts
types/
  node-test.d.ts
index.html
package.json
tsconfig.json
vite.config.ts
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
src/data/translations/*.ts
```

Current non-English files are placeholders that export English text. Replace each file with complete hard-coded translated question text when translations are ready. Add new languages by:

1. Creating a new file in `src/data/translations/`.
2. Exporting a `Translation`.
3. Adding it to `src/data/translations/index.ts`.
4. Adding the language to `languages` in `src/data/catalog.ts`.

During the assessment flow, option selections are treated as draft answers until the worker clicks Continue. Routing tags and follow-up questions are recomputed only after that commit, so choosing an option does not unexpectedly move the worker to another question.

Current symptom/discomfort questions are kept for routing and report context, but they do not contribute to scored risk factors. The scored risk factors are contact stress, force, awkward posture, repetition, and environmental factors.

## Gemini Integration

Gemini is used in:

```text
src/logic/ai.ts
```

The app uses Gemini in two conservative passes after the worker enters the free-text task description. Workers may enter this task description in any language or in mixed languages. English task descriptions are interpreted directly so concrete routing clues are preserved. Non-English or mixed-language descriptions are internally interpreted in English, then routed using the same tag-selection behavior as English descriptions.

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

Only predefined tags from `tagTaxonomy` are accepted. Gemini must return exact canonical tag IDs, never translated tag labels. If Gemini is unavailable or the key is missing, the app falls back to local keyword-based interpretation, which is currently English-focused.

Second, when Gemini is configured, the app sends the worker's original task description plus the currently eligible follow-up questions and valid option IDs. Gemini may suggest questions that are already answered by the worker's text. Even when the worker response is not English, pre-answer values must use the exact canonical question IDs, option IDs, and group IDs from the catalog:

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

If either Gemini call fails or times out after the worker submits the task description, the app continues with its existing fallback behavior and shows a brief semi-transparent red toast at the bottom of the screen. The production app uses a 15-second Gemini request timeout; the automated test bundle uses a shorter 8-second timeout. Task-analysis failures and question-pruning/pre-answering failures use different messages; when both happen, the notices appear one after the other and can be dismissed with the X button.

## Scoring

Scoring is currently prototype-only and lives in:

```text
src/logic/scoring.ts
```

Risk score mappings are attached to options in `src/data/catalog.ts`. They are intentionally isolated so the team can replace them later with the final grading map.

Current aggregation:

- max selected option score per question
- average by risk factor
- average applicable factors for base composite score
- average answered psychosocial values from Q7, Q8, Q41, and Q42
- apply the psychosocial multiplier to the base composite score only, capped at 4

Risk factor interpretation text uses the averaged factor score:

- less than 1.5: currently low risk associated with that factor
- 1.5 to less than 2.4: possible risk of discomfort from that factor
- 2.4 to less than 3.5: likely risk of discomfort from that factor
- 3.5 or higher: known risk of pain and/or injury

Psychosocial scoring is a hidden modifier, not a standalone report category. The current placeholder mappings are:

- Q7/Q8: great extent = 1, some extent = 2, rarely = 3, not at all = 4
- Q41/Q42: never = 1, rarely = 2, sometimes = 3, frequently = 4

The psychosocial score averages whichever of those four questions were answered in the conditional assessment flow. If none were answered, the multiplier is 1. Scores below 1.5 multiply the base composite by 1, scores from 1.5 to less than 2.4 multiply by 1.3, and scores from 2.4 to 4 multiply by 1.6. The adjusted final composite score is capped at 4. Q41 and Q42 still contribute to the environmental factor score in addition to the psychosocial modifier.

## PDF Report

Browser-side PDF download orchestration lives in:

```text
src/logic/report.ts
```

The React PDF document and report data model live in:

```text
src/report/
```

The PDF is generated in the browser with `@react-pdf/renderer` and keeps the existing Download PDF button flow. It includes an intro/about page, overview page, category score summary, category-specific detail pages, and a full English response-record appendix. The five scored categories are always shown in this order: Contact stress, Force, Awkward posture, Repetition, and Environmental factors.

Report icons are centralized in `src/report/reportAssets.ts` and reference files under `public/icons/`; the hierarchy-of-controls image is loaded from `public/images/hierarchy-of-controls.png`. The current body diagram is a replaceable React PDF vector placeholder with symptom callouts, so a final body asset can be swapped in later without changing report data logic.

Category explanations and suggested actions are derived from selected answers that contribute a category risk score of `2` or higher. Scores of `4` count as high priority, `3` as medium priority, and `2` as review priority. When no scored hazard is identified for a category, the PDF displays `0` for that category in the report presentation while leaving the underlying scoring result as `null`.

The response-record appendix uses full English question text from `src/data/translations/en.ts`. Do not shorten question text in that detailed question-and-answer section.

## Current Limitations

- Non-English translation files are placeholders.
- Azure Translator is not wired yet.
- Gemini is called directly from the browser, which exposes the prototype API key.
- Later survey/review/result pages are functional placeholders until final UI designs are supplied.
- Question grading mappings are placeholders.
