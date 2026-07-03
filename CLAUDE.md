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

**React 18 / TypeScript 5 / Vite 8 prototype** deployed to Vercel. No database, no router, no state library. All UI state lives in `App.tsx` via `useState`. Gemini API calls are proxied through a Vercel serverless function (`api/gemini.ts`) to keep the API key server-side. The app is a single-page progressive flow: onboarding -> assessment questions -> scoring -> PDF report download.

### Key directories

- **`api/`** -- Vercel serverless functions (`gemini.ts` proxies Gemini API)
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

Gemini API calls go through a Vercel serverless proxy at `api/gemini.ts`. The API key stays server-side. Three workflows:
- **Task interpretation** (`aiTaskInterpretation.ts`): free text -> routing tags + missing details
- **Pre-answering** (`preAnswering.ts`): auto-fill answers at >= 0.9 confidence
- **Report analysis** (`reportAnalysis.ts`): background paragraph for PDF

All AI is optional -- local fallback rules in `taskFallbackRules.ts` handle failures.

The proxy is hardened: same-origin fallback when `ALLOWED_ORIGINS` is unset (fails closed, not open), a 20 req/60s per-IP in-memory rate limit, and an 8000-character prompt cap.

## Key conventions

- Question IDs match source questionnaire (`question-1` through `question-42`)
- `VITE_GEMINI_ENABLED` is a boolean flag only -- the real API key is server-side (`GEMINI_API_KEY`)
- Translations: `en.ts` is the reference; other languages fall back to English
- After changing tests, update `docs/MSI360_Sprint_Test_Cases.md`
- After changing behavior/structure, update `README.md` (including file hierarchy)
- See `AGENTS.md` for development guidelines

## Environment

Client-side (`.env.local`):
```
VITE_GEMINI_ENABLED=true
```

Server-side (Vercel project settings):
```
GEMINI_API_KEY=your_real_key
GEMINI_MODEL=gemini-3.1-flash-lite
ALLOWED_ORIGINS=https://your-domain.vercel.app
```
