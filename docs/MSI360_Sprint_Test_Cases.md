# MSI360 Sprint Test Cases

## Automated Test Cases

Run the main automated suite with:

```bash
npm test
```

Run the build smoke test with:

```bash
npm run build
```

Run only the automated test files with:

```bash
npm run test:automated
```

| ID | Source | Test Type | Test Case | Expected Result |
| --- | --- | --- | --- | --- |
| AT-01 | `npm run typecheck` | Build/type check | TypeScript project check | TypeScript completes without errors. |
| AT-02 | `npm run build` | Build smoke test | Production build check | Vite production build completes successfully. |
| AT-03 | `tests/unit/routing.test.ts` | Unit test | Base routing shows always-visible questions and hides conditional follow-ups. | Base questions such as role and recent discomfort are visible; conditional questions such as body discomfort areas and object weight are hidden until relevant tags are present. |
| AT-04 | `tests/unit/routing.test.ts` | Unit test | Recompute tags combines selected option tags and allowed AI tags. | Valid selected-option and AI tags are included; invalid AI tags are ignored. |
| AT-05 | `tests/unit/routing.test.ts` | Unit test | Selected option extraction reads grouped question answers. | Grouped answers return the expected selected options and risk scores. |
| AT-06 | `tests/unit/scoring.test.ts` | Unit test | Empty assessment returns unscored results. | Composite, physical, and environmental scores are `null`; factor applicable question counts start at zero. |
| AT-07 | `tests/unit/scoring.test.ts` | Unit test | High-risk sample answers use max selected option score per question and average by factor. | Contact stress, force, awkward posture, repetition, environmental, symptoms, grouped, and composite scores match expected values. |
| AT-08 | `tests/unit/ai.test.ts` | Unit test | Gemini-unavailable task interpretation uses local fallback. | Fallback returns useful routing tags for heavy lifting/tool use and missing-detail prompts for object weight and duration. |
| AT-09 | `tests/integration/assessment-flow.test.ts` | Integration test | Manual-handling task description routes to force and tool follow-up questions. | Object weight, handheld tool contact, and repetitive movement questions become visible. |
| AT-10 | `tests/integration/assessment-flow.test.ts` | Integration test | Reported discomfort answer routes to body discomfort follow-up. | Body discomfort area question becomes visible after answering recent discomfort as yes. |
| AT-11 | `tests/integration/assessment-flow.test.ts` | Integration test | Completed high-risk sample answers produce a score summary. | Force and repetition severities are high enough for the selected sample, and a composite score exists. |
| AT-12 | `tests/integration/assessment-flow.test.ts` | Integration/data test | Every configured question has English display text for its options. | Each question, option, group, and grouped option has the English label needed for the UI/report. |

## Manual Test Cases

Each team member will spend one hour per week running manual tests from this checklist.

| ID | Area | Test Type | Steps | Expected Result |
| --- | --- | --- | --- | --- |
| MT-01 | Intro and language | Acceptance test | Open the app, select Start, choose a language, and continue. | Language selection works and the next required question appears. |
| MT-02 | Required answers | Acceptance test | Try to continue past role, time in role, task description, height, and assessment questions without answering. | Continue button is disabled until the required answer is provided. |
| MT-03 | Low-risk office scenario | Exploratory/acceptance test | Enter an office computer task and answer low-risk options through the report screen. | User reaches report-ready screen with no blocking errors. |
| MT-04 | High-risk lifting scenario | Exploratory/acceptance test | Enter a repeated heavy lifting task and answer higher-risk force/posture/repetition options. | Relevant follow-up questions appear and the score summary reflects higher risk. |
| MT-05 | Tool-use scenario | Exploratory test | Enter a task involving tools, gripping, or drilling. | Tool/contact/repetition questions appear where expected. |
| MT-06 | Reported discomfort scenario | Acceptance test | Answer "Yes" to recent discomfort and select body areas. | Body discomfort follow-up appears and can be completed. |
| MT-07 | Back navigation | Regression test | Move through several screens and use Back repeatedly. | Previous screens appear correctly and existing answers are preserved. |
| MT-08 | PDF report | Acceptance test | Complete an assessment and select Download PDF. | PDF downloads and includes the score overview and answered questions. |
| MT-09 | Restart | Regression test | Complete an assessment and start a new one. | App returns to the intro screen and prior answers are cleared. |
| MT-10 | Mobile layout | Responsive test | Run the main flow around 390px wide. | Text, buttons, progress, images, and answer rows do not overlap or clip. |
| MT-11 | Tablet layout | Responsive test | Run the main flow around 768px wide. | Layout remains readable and controls are easy to use. |
| MT-12 | Browser check | Compatibility test | Run a representative flow in Chrome and Safari. | Main flow works in both browsers without console errors. |
| MT-13 | Usability | Usability test | Ask a classmate to complete a simple scenario without coaching. | User can understand the questions, score summary, and report actions; feedback is recorded. |
| MT-14 | Gemini optional check | API/manual integration test | If a restricted Gemini key is configured, enter a detailed task description. | App continues normally and asks relevant follow-up questions. |
