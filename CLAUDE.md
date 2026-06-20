# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # Vite dev server at http://127.0.0.1:5173/
npm run build            # tsc + vite build (run before commits)
npm test                 # typecheck + automated tests
npm run typecheck        # TypeScript only
npm run test:automated   # Node test runner + esbuild (no Jest/Vitest)
```

No linter is configured. Code quality relies on TypeScript strict mode and tests.

## Architecture

**Client-only React 18 / TypeScript 5 / Vite 8 prototype.** No backend, no database, no router, no state library. All state lives in `App.tsx` via `useState`. The app is a single-page progressive flow: onboarding -> assessment questions -> scoring -> PDF report download.

### Key directories

- **`src/data/`** -- Question catalog (`catalog.ts`), tag taxonomy (`tags.ts`), 30+ translation files (`translations/`)
- **`src/logic/`** -- Business logic: `questionnaire/` (routing, AI interpretation, pre-answering), `scoring/` (risk calculation), `ai/` (Gemini client)
- **`src/report/`** -- PDF generation with `@react-pdf/renderer`. Entry: `reportActions.ts` -> `ReportDocument.tsx`
- **`src/config/`** -- Tunable constants: AI thresholds (`aiConfig.ts`), scoring bands (`scoringConfig.ts`), UI timing (`uiConfig.ts`)
- **`src/ui/`** -- React screens and components
- **`tests/`** -- Unit and integration tests using Node built-in `test` module

### Core data flow

1. User answers are drafted, then committed on Continue click (draft/commit separation in `answerSelection.ts`)
2. Committed answers recompute routing tags -> new questions become visible (`questionRouting.ts`)
3. After task description (Q3), Gemini interprets text into routing tags + pre-fills high-confidence answers
4. Scoring averages per-factor question scores, applies psychosocial multiplier, caps at 4 (`scoreAssessment.ts`)
5. PDF report assembles scores + guidance + AI analysis into downloadable document

### AI integration

Gemini API is called directly from browser (no backend proxy). Three workflows:
- **Task interpretation** (`aiTaskInterpretation.ts`): free text -> routing tags + missing details
- **Pre-answering** (`preAnswering.ts`): auto-fill answers at >= 0.9 confidence
- **Report analysis** (`reportAnalysis.ts`): background paragraph for PDF

All AI is optional -- local fallback rules in `taskFallbackRules.ts` handle failures.

## Key conventions

- Question IDs match source questionnaire (`question-1` through `question-42`)
- All `VITE_` env vars are browser-visible -- use test API keys only
- Translations: `en.ts` is the reference; other languages fall back to English
- After changing tests, update `docs/MSI360_Sprint_Test_Cases.md`
- After changing behavior/structure, update `README.md` (including file hierarchy)
- See `AGENTS.md` for development guidelines

## Environment

Create `.env.local`:
```
VITE_GEMINI_API_KEY=your_key
VITE_GEMINI_MODEL=gemini-2.5-flash
```
