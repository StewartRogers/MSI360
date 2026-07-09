# MSI360

MSI360 is a **React/TypeScript prototype** for a mobile-first musculoskeletal injury (MSI) risk assessment tool, deployed to Vercel. It renders questions from local TypeScript data, keeps answers in browser memory, and uses the Gemini API (via a serverless proxy) for intelligent text-answer interpretation and pre-filling of follow-up questions. The app generates a comprehensive PDF report in the browser with risk scores, category analyses, and actionable guidance, which can optionally be emailed to the worker via Resend.

**There is no database in this version.** Assessment state lives in browser memory. Gemini API calls are proxied through a Vercel serverless function (`api/gemini.ts`) to keep the API key server-side; the PDF report email is sent through a second serverless function (`api/send-report.ts`) using Resend, keeping that API key server-side as well.

## Quick Start

### Prerequisites
- Node.js 20+
- npm

### Development

```bash
npm install
npm run dev
```

Open: `http://127.0.0.1:5173/`

### Production Build

```bash
npm run build
```

### Testing

Run the full test suite (typecheck + automated tests):
```bash
npm test
```

Individual commands:
```bash
npm run typecheck           # TypeScript type checking
npm run test:automated     # Automated unit and integration tests
```

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **TypeScript 5** | Type-safe code |
| **Vite 8** | Fast build tool and dev server |
| **@react-pdf/renderer** | Browser-side PDF generation |
| **Gemini API** | AI text interpretation and pre-answering |
| **Azure Translator** | Planned for future language translation |

## Project Overview

### Architecture

MSI360 follows a component-driven architecture with clear separation of concerns:

- **`src/App.tsx`** — Root component managing the assessment flow state machine and AI coordination
- **`src/ui/screens/`** — Screen-level components (onboarding, assessment, results)
- **`src/ui/components/`** — Reusable UI components (buttons, controls, headers)
- **`src/logic/`** — Core business logic (scoring, routing, AI integration)
- **`src/data/`** — Static question catalog, translations, and configuration
- **`src/report/`** — PDF generation and report data modeling
- **`src/config/`** — Tunable prototype constants

### Assessment Flow

The assessment uses a **single-page progressive flow**:

1. **Intro** → **Language Selection** → **Role** → **Time in Role** → **Task Description**
2. AI interpretation runs after task description
3. **Height** → **Dynamic Assessment Questions** (routed by tags and previous answers)
4. **Score Summary** → **Email Entry** (optionally sends the PDF report via Resend) → **Report Download** → **Submit** → **Complete**

## Environment Variables

### Client-side (`.env.local`)

```env
VITE_GEMINI_ENABLED=true

# Planned for later (not currently integrated)
VITE_AZURE_TRANSLATOR_KEY=your_azure_translator_key_here
VITE_AZURE_TRANSLATOR_REGION=canadacentral
VITE_AZURE_TRANSLATOR_ENDPOINT=https://api.cognitive.microsofttranslator.com
```

### Server-side (Vercel project settings)

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | Yes | Google Gemini API key (never exposed to browser) |
| `GEMINI_MODEL` | Yes | Gemini model ID (e.g. `gemini-3.1-flash-lite`) |
| `ALLOWED_ORIGINS` | No | Comma-separated allowed origins for both proxies (e.g. `https://msi-360.vercel.app`). If unset, the proxies fall back to same-origin-only requests instead of accepting any origin. |
| `RESEND_API_KEY` | Yes (for email) | Resend API key (never exposed to browser) |
| `RESEND_FROM_EMAIL` | Yes (for email) | Sender address, e.g. `"Prototype <onboarding@resend.dev>"` for Resend's shared testing domain, or a `"Name <you@yourdomain.com>"` address on a verified domain in production. While using the shared testing domain, Resend only delivers to the email address on the Resend account itself. |

⚠️ **Important:** The Gemini and Resend API keys are kept server-side in Vercel serverless proxies. `VITE_GEMINI_ENABLED` is a boolean flag only — do not put either real API key in any `VITE_` variable. **Never commit `.env.local`**.

## Project Structure

```
AGENTS.md                              # Development guidelines
README.md                              # This file
CLAUDE.md                              # Claude Code guidance
package.json                           # Dependencies and scripts
tsconfig.json                          # TypeScript configuration
vite.config.ts                         # Vite build configuration
vercel.json                            # Vercel deployment configuration
index.html                             # HTML entry point

api/
  gemini.ts                            # Vercel serverless proxy for Gemini API
  send-report.ts                       # Vercel serverless proxy that emails the PDF report via Resend

docs/
  MSI360_Sprint_Test_Cases.md         # Automated and manual test coverage

public/
  icons/                              # SVG and image icons
  images/
  worksafebc-logo.png

scripts/
  run-tests.mjs                       # Test runner with esbuild

src/
  App.tsx                             # Root component and state coordinator
  main.tsx                            # React entry point
  types.ts                            # Global TypeScript types
  vite-env.d.ts                       # Vite environment types
  
  app/
    questionAssets.ts                 # Onboarding and assessment question IDs
    types.ts                          # App-domain types
  
  config/
    aiConfig.ts                       # Gemini API defaults, timeouts, thresholds
    emailConfig.ts                    # Email report request timeout and subject
    scoringConfig.ts                  # Score interpretation thresholds
    uiConfig.ts                       # UI constants (toast duration, etc.)
  
  data/
    catalog.ts                        # Question structure, options, risk scores
    languages.ts                      # Supported languages and RTL metadata
    questions.ts                      # Question definitions (deprecated in favor of catalog)
    reportReferences.ts               # Report generation reference data
    sections.ts                       # Assessment section groupings
    tags.ts                           # Routing tags and taxonomy
    translations/
      index.ts                        # Translation index
      en.ts                           # English (primary language)
      [other languages].ts            # Additional language translations
  
  logic/
    ai.ts                             # Public AI facade
    ai/
      fallbackToast.ts               # AI fallback notice logic
      geminiClient.ts                # Gemini API request handling
      valueUtils.ts                  # AI response parsing utilities
    
    questionnaire/
      aiTaskInterpretation.ts        # Task description → tags + missing details
      answerSelection.ts             # Answer commit and draft logic
      assessmentFlow.ts              # Assessment progression and routing
      flow.ts                        # Question visibility and progress
      preAnswering.ts                # Pre-fill suggestions from AI
      questionRouting.ts             # Tag-based routing logic
      taskFallbackRules.ts           # Fallback tag rules without AI
    
    scoring/
      scoreAssessment.ts             # Risk score calculation
      scorePresentation.ts           # Score display formatting
  
  report/
    BodyDiagramSvg.tsx              # Body diagram SVG component
    ReportDocument.tsx              # React PDF document structure
    reportActions.ts                # PDF download orchestration
    reportAnalysis.ts               # AI-generated analysis block
    reportAssets.ts                 # Report icons and assets
    reportData.ts                   # Report data model
    reportDocumentComponents.tsx    # PDF layout components
    reportDocumentStyles.ts         # PDF styling
    reportGuidance.ts               # Risk guidance and actions
    sendReportEmail.ts              # Emails the rendered PDF via /api/send-report
  
  ui/
    styles.css                      # Global styles
    styles/
      base.css                      # Base element styles
      components.css                # Component styles
      screens.css                   # Screen layout styles
    components/
      ActionButtons.tsx             # Next/Back/Continue buttons
      AnswerControls.tsx            # Answer input controls
      AppHeader.tsx                 # App header with progress
    screens/
      AssessmentScreen.tsx          # Main assessment question screen
      OnboardingScreens.tsx         # Intro, language, role, task description
      ResultScreens.tsx             # Score, email, report, submit, complete

types/
  node-test.d.ts                     # Node test runner types

tests/
  integration/
    assessment-flow.test.ts         # End-to-end assessment logic
  unit/
    ai.test.ts                      # AI response parsing
    answer-selection.test.ts        # Answer commit logic
    loading-state.test.ts           # Loading state handling
    report-data.test.ts             # Report data generation
    report-document.test.ts         # PDF structure
    routing.test.ts                 # Tag-based routing
    score-presentation.test.ts      # Score display formatting
    scoring.test.ts                 # Risk calculation
    send-report.test.ts             # Email validation, size cap, escaping, rate limiting
```

## Question Data & Localization

### Question Structure

Question definitions live in `src/data/catalog.ts` and include:

- Question IDs (mirrored from source doc: `question-1` through `question-42`)
- Question type (`multi_choice` or `text`)
- Section assignment
- Display condition tags (when to show the question)
- Option IDs and grouped structure
- Placeholder risk score mappings for each option
- AI instructions for text questions

Question IDs stay synchronized with the source questionnaire. When question order or labels change, update both the catalog and this documentation.

### Question Text & Translations

Language-specific content lives in `src/data/translations/*.ts`:

- `en.ts` is the primary reference language
- Other language files export hard-coded localized text for app labels, section names, and questions
- `getQuestionText()` falls back to English for missing fields, but ready languages should be complete

#### Adding a New Language

1. Create `src/data/translations/[lang-code].ts`
2. Export a `Translation` object matching the English structure
3. Add the language to `src/data/translations/index.ts`
4. Add it to `languages` in `src/data/languages.ts` with the native display name

### Assessment Flow & Draft Answers

During the assessment, option selections are treated as **draft answers** until the worker clicks Continue. Routing tags and follow-up questions recompute only after that commit, preventing in-progress selections from triggering unwanted rerouting.

### Scored vs. Context-Only Factors

- **Current symptom/discomfort questions** (Q5, Q6) are kept for routing and report context but do **not** contribute to risk scores
- **Scored risk factors**: contact stress, force, awkward posture, static posture, repetition, vibration, cold, and psychosocial modifiers

## Gemini Integration

Gemini is used in four places:

| Location | Purpose |
|---|---|
| `src/logic/ai.ts` | Public AI facade |
| `src/logic/ai/geminiClient.ts` | Gemini API requests |
| `src/logic/questionnaire/aiTaskInterpretation.ts` | Task description → routing tags |
| `src/logic/questionnaire/preAnswering.ts` | Pre-fill answer suggestions |
| `src/report/reportAnalysis.ts` | Report analysis block |

### Task Description Workflow

After the worker enters a free-text task description (any language or mixed), Gemini processes it in two conservative passes:

#### Pass 1: Tag Extraction

Sends: worker's task description

Returns:
```json
{
  "normalized_answer_en": "string",
  "add_tags": ["manual_handling"],
  "missing_details": ["Approximate object weight"],
  "confidence": 0.8,
  "notes": "short explanation"
}
```

- Only predefined tags from `tagTaxonomy` are accepted (exact canonical IDs, never translated labels)
- High-confidence tags route to relevant follow-up questions
- On API failure or missing key: app uses local fallback rules from `taskFallbackRules.ts`

#### Pass 2: Pre-Answer Suggestions

Sends: worker's original description + eligible follow-up questions + valid option IDs

Returns:
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

- Client accepts only high-confidence matches (≥ threshold from `aiConfig.ts`)
- Suggestions must exactly match catalog question IDs, option IDs, and group IDs
- Evidence must be grounded in the worker's text
- Pre-answers never overwrite user-entered onboarding answers

#### UI Feedback

- After task submission: spinner and disabled nav buttons until both passes complete
- If either call fails/times out: app continues with fallback behavior and shows a semi-transparent toast notice
- Report analysis runs in the background after Q4 (height) and completes independently

### Proxy Hardening (`api/gemini.ts`)

- **Origin check**: requests must match `ALLOWED_ORIGINS` if set, otherwise same-origin only (fail closed, not open)
- **Rate limiting**: in-memory sliding window, 20 requests/60s per client IP; returns `429` with `Retry-After`. Best-effort only — state resets on cold start and isn't shared across instances/regions
- **Prompt size cap**: rejects prompts over 20000 characters with `413` (pre-answer prompts, which embed every eligible follow-up question's label/option text as JSON, routinely run 10-15k characters for a normal task description)

## Email Report Delivery

The worker can optionally enter an email address on the Email screen; on Continue, `src/report/sendReportEmail.ts` renders the same PDF used by "Download PDF", base64-encodes it in the browser, and POSTs it to `api/send-report.ts`, which sends it through Resend. The send is best-effort — if it fails or times out, the app still advances to the report-ready screen (where the PDF can always be downloaded directly) and shows a dismissible toast notice instead of blocking navigation.

### Proxy Hardening (`api/send-report.ts`)

- **Origin check**: same fail-closed logic as `api/gemini.ts`, reusing the `ALLOWED_ORIGINS` env var
- **Rate limiting**: in-memory sliding window, 5 requests/60s per client IP (stricter than the Gemini proxy since sending mail is costlier and more abusable); returns `429` with `Retry-After`
- **Recipient validation**: rejects malformed email addresses with `400`
- **Attachment size cap**: rejects base64 PDF payloads over 4,000,000 characters (~2.9MB raw) with `413`, leaving headroom under Vercel's ~4.5MB request body limit
- **HTML escaping**: task summary, score, and date fields interpolated into the email body are HTML-escaped before use
- **Testing-domain limitation**: while `RESEND_FROM_EMAIL` uses Resend's shared testing domain (`onboarding@resend.dev`), Resend only delivers to the email address on the Resend account itself — verify a custom domain in Resend before sending to arbitrary recipients in production

## Scoring System

### Score Calculation

Risk scores are calculated in `src/logic/scoring/scoreAssessment.ts`:

1. **Per-question:** Max selected option score (if multiple options, take the highest)
2. **Per-risk-factor:** Average of question scores within that factor
3. **Base composite:** Average of all applicable risk factors
4. **Psychosocial adjustment:** Average of Q7, Q8, Q41, Q42 (if answered in conditional flow)
   - Multiplier applied to base composite, capped at 4
5. **Final score:** Base composite × psychosocial multiplier (or ≤ 4)

### Risk Factor Interpretation

Thresholds (in `src/config/scoringConfig.ts`):

| Averaged Factor Score | Interpretation |
|---|---|
| < 1.5 | Currently low risk associated with that factor |
| 1.5–2.4 | Possible risk of discomfort from that factor |
| 2.4–3.5 | Likely risk of discomfort from that factor |
| ≥ 3.5 | Known risk of pain and/or injury |

### Psychosocial Multiplier (Hidden Modifier)

Not a standalone report category, but a hidden score modifier:

- **Q7/Q8 mappings:** great extent = 1, some extent = 2, rarely = 3, not at all = 4
- **Q41/Q42 mappings:** never = 1, rarely = 2, sometimes = 3, frequently = 4
- **Calculation:** Average of whichever four questions were answered; if none answered, multiplier = 1
- **Logic:** Scores below 1.5 multiply the base composite; scores above 1.5 suppress the modifier

### Score Display Format

- **Overall composite:** Displayed as `X.X out of 4` (with "out of 4" text)
- **Category scores:** Compact `X.X / 4` format (slash with no surrounding text)

## PDF Report Generation

### Architecture

- **Orchestration:** `src/report/reportActions.ts` (browser-side download)
- **Document model:** `src/report/ReportDocument.tsx` (React PDF structure)
- **Data model:** `src/report/reportData.ts` and `src/report/reportAnalysis.ts`
- **Components:** `src/report/reportDocumentComponents.tsx` (layout & styling)
- **Styling:** `src/report/reportDocumentStyles.ts` (PDF-specific CSS)
- **Guidance:** `src/report/reportGuidance.ts` (risk explanations & actions)

### Report Sections

1. **Intro Page** — Report context (date, responder, job/task, height) from Q1–Q4
2. **Overview Page** — AI-generated analysis (if available) + worker's job-specific notes
3. **Category Scores** — Visual summary by risk factor
4. **Category Details** — Risk interpretation and suggested actions for scores ≥ 2
5. **Response Record** — Full English question text + selected answers (unshortened)

### Report Context Block

Derived from Q1 (role) and Q2 (time in role):
- Example: "Warehouse worker for 2 years" or "Nursing aide for 6–12 months"

### AI-Generated Analysis Block

- Runs asynchronously after Q4 (height)
- Uses only Q1–Q4 data (role, time, task, height)
- Includes fixed disclaimer about prototype status
- Optional; PDF downloads without it if Gemini is unavailable or fails

### Category Risk Guidance

Derived from selected answers contributing ≥ 2 to a category score:

- Scores of 4 = high priority (red)
- Scores of 3 = medium priority (orange)
- Scores of 2 = emerging risk (yellow)

Guidance references `src/report/reportGuidance.ts` and includes:
- Plain-language risk description
- Suggested workplace controls and modifications
- Links to ergonomic resources

### Report Assets

- Icons are centralized in `src/report/reportAssets.ts`
- Icon files: `public/icons/`
- Hierarchy-of-controls diagram: `public/images/hierarchy-of-controls.png`
- Logo: `public/worksafebc-logo.png`

### Response Record Appendix

- Uses full English question text from `src/data/translations/en.ts`
- Do **not** abbreviate question text in this detailed section

## Configuration & Tuning

Frequently adjusted prototype constants are centralized:

### `src/config/aiConfig.ts`

- Gemini model name and request timeout
- Prompt temperatures and sampling parameters
- Pre-answer confidence threshold (default ≥ 0.9)
- Report-analysis length limits
- Fallback provider IDs and confidence levels

### `src/config/emailConfig.ts`

- Email report request timeout
- Email subject line

### `src/config/scoringConfig.ts`

- Risk factor interpretation thresholds
- Psychosocial multiplier logic
- Default score values

### `src/config/uiConfig.ts`

- AI fallback toast visibility duration
- Progress bar step calculations

**Note:** Question structure, option risk mappings, routing tags, and fallback rules intentionally remain in their domain files (`src/data/`, `src/logic/questionnaire/`) for easier maintenance and testing.

## Testing

### Test Organization

Tests live in `src/tests/` and use Node's built-in test runner with esbuild bundling:

| Test File | Focus |
|---|---|
| `routing.test.ts` | Tag-based routing logic |
| `answer-selection.test.ts` | Answer commit and draft logic |
| `assessment-flow.test.ts` | End-to-end assessment progression |
| `scoring.test.ts` | Risk calculation |
| `score-presentation.test.ts` | Score display formatting |
| `ai.test.ts` | Gemini response parsing |
| `report-data.test.ts` | Report data generation |
| `report-document.test.ts` | PDF structure integrity |
| `loading-state.test.ts` | Loading and async state handling |

### Test Coverage Focus

Current automated tests emphasize:
- Routing tag computation
- Visible question filtering
- Selected option score application
- Answer draft/commit separation
- Score aggregation and interpretation

### Running Tests

```bash
npm test                  # Full test suite
npm run typecheck         # TypeScript type check
npm run test:automated    # Automated tests only
```

### Maintaining Test Coverage

The maintained list of automated and manual sprint test cases lives in **`docs/MSI360_Sprint_Test_Cases.md`**.

**Update that file whenever automated tests are added, removed, renamed, or materially change.**

## Development Guidelines

See **`AGENTS.md`** for detailed development practices:

- Write clear, easy-to-read code following project best practices
- Include thorough comments for future handoff clarity
- Use descriptive variable, function, and class names
- Read the README before making changes
- Update the README when behavior, setup, usage, or project expectations change
- Update README file hierarchy when files are created/removed
- Run full test suite before submitting changes
- Fix all test failures before completing work
- Add or update unit tests for each pull request
- Keep `docs/MSI360_Sprint_Test_Cases.md` accurate after test changes

## Known Limitations

- Non-English translation files are currently placeholders
- Azure Translator API is not yet integrated
- Gemini API calls are proxied through a Vercel serverless function; local dev requires `vercel dev` for AI features
- Later survey/review result pages are functional placeholders pending final UI designs
- Question grading mappings are prototype placeholders (subject to final grading review)

## Language Composition

This repository is **98.7% TypeScript**, 1.2% CSS, and 0.1% other languages.
