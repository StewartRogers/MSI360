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
| AT-03 | `tests/integration/assessment-flow.test.ts` | Integration test | Manual-handling task description routes to the main force and tool follow-up questions. | Object weight, handheld tool, repetitive movement, and related force/tool questions become visible. |
| AT-04 | `tests/integration/assessment-flow.test.ts` | Integration test | Reported discomfort answer routes to the body discomfort follow-up. | Body discomfort area question becomes visible after recent discomfort is answered yes. |
| AT-05 | `tests/integration/assessment-flow.test.ts` | Integration test | Completed high-risk sample answers produce a score summary. | Force and repetition severities are elevated and a composite score exists. |
| AT-06 | `tests/integration/assessment-flow.test.ts` | Integration test | Auto-answered questions can be hidden from assessment navigation while still being scored. | Hidden auto-answered questions are skipped in navigation and still contribute to scoring. |
| AT-07 | `tests/integration/assessment-flow.test.ts` | Integration test | Draft assessment answers do not reroute question 22 until committed. | Draft selections do not change visible routing until Continue commits the answer. |
| AT-08 | `tests/integration/assessment-flow.test.ts` | Integration test | Question 22 overhead-work follow-ups appear only after commit. | Overhead follow-up questions appear only after the overhead answer is committed. |
| AT-09 | `tests/integration/assessment-flow.test.ts` | Integration test | Grouped assessment drafts must answer every required group before continuing. | Continue stays blocked until every required group has a valid draft answer. |
| AT-10 | `tests/integration/assessment-flow.test.ts` | Integration test | Empty drafts override committed assessment answers while editing. | Clearing an answer in draft state makes the displayed answer incomplete while editing. |
| AT-11 | `tests/integration/assessment-flow.test.ts` | Integration test | Draft assessment answers are not scored until committed. | Score calculations ignore draft answers and change only after commit. |
| AT-12 | `tests/integration/assessment-flow.test.ts` | Integration/data test | Every configured question has English display text for its options. | Each question, option, group, and grouped option has the English label needed for the UI/report. |
| AT-13 | `tests/unit/ai.test.ts` | Unit test | `interpretTextAnswer` uses the local fallback and returns allowed routing tags when Gemini is not configured. | Fallback returns useful routing tags for heavy lifting/tool use and missing-detail prompts for object weight and duration. |
| AT-14 | `tests/unit/ai.test.ts` | Unit test | `buildInterpretTextPrompt` instructs Gemini to handle multilingual text and canonical tags. | Prompt includes multilingual guidance, canonical tag instructions, and allowed tag IDs. |
| AT-15 | `tests/unit/ai.test.ts` | Unit test | `buildPreAnswerPrompt` instructs Gemini to handle multilingual text and canonical answer IDs. | Prompt includes multilingual guidance, canonical question/group/option ID rules, and evidence requirements. |
| AT-16 | `tests/unit/ai.test.ts` | Unit test | `filterAllowedAddTags` removes unknown or translated tags and keeps canonical tags. | Only valid canonical tags allowed for the question are returned. |
| AT-17 | `tests/unit/ai.test.ts` | Unit test | `validatePreAnswers` accepts high-confidence answers grounded in the worker text. | A valid high-confidence pre-answer with grounded evidence is accepted. |
| AT-18 | `tests/unit/ai.test.ts` | Unit test | `validatePreAnswers` accepts multilingual evidence when answer values are canonical IDs. | Non-English evidence is accepted when grounded in the response and using canonical values. |
| AT-19 | `tests/unit/ai.test.ts` | Unit test | `validatePreAnswers` rejects low confidence, unknown IDs, invalid values, and overwritten answers. | Invalid or unsafe pre-answers are rejected. |
| AT-20 | `tests/unit/ai.test.ts` | Unit test | `validatePreAnswers` rejects ungrounded evidence. | Pre-answers with evidence absent from the worker response are rejected. |
| AT-21 | `tests/unit/ai.test.ts` | Unit test | `validatePreAnswers` rejects translated option labels instead of canonical option IDs. | Translated labels are not accepted as answer values. |
| AT-22 | `tests/unit/ai.test.ts` | Unit test | `validatePreAnswers` rejects incomplete grouped answers, invalid group IDs, and exclusive conflicts. | Grouped pre-answers must be complete, valid, and conflict-free. |
| AT-23 | `tests/unit/ai.test.ts` | Unit test | `validatePreAnswers` accepts symptom answers with canonical IDs and grounded evidence. | Valid symptom pre-answers are accepted when evidence is grounded in the worker response. |
| AT-24 | `tests/unit/ai.test.ts` | Unit test | `preAnswerQuestions` returns no hidden answers when Gemini is not configured. | Provider reports client no-preanswer and no auto-answers are returned. |
| AT-25 | `tests/unit/answer-selection.test.ts` | Unit test | Single-choice answers toggle on and off. | Selecting the same radio-style option again clears the selected value. |
| AT-26 | `tests/unit/answer-selection.test.ts` | Unit test | Select-all answers respect exclusive options. | Exclusive selections clear other options and non-exclusive selections clear exclusive options. |
| AT-27 | `tests/unit/answer-selection.test.ts` | Unit test | Group answer updates remove empty group values. | Empty grouped values are removed from the grouped answer object. |
| AT-28 | `tests/unit/loading-state.test.ts` | Unit test | Busy action buttons block repeated submits and back navigation. | Continue and Back are disabled while the action is busy. |
| AT-29 | `tests/unit/loading-state.test.ts` | Unit test | Idle action buttons only disable Continue when the current step is incomplete. | Continue follows completion state and Back remains enabled when idle. |
| AT-30 | `tests/unit/loading-state.test.ts` | Unit test | AI fallback toast trigger reports task-analysis and question-pruning failures independently. | Task-analysis, question-pruning, and combined failure cases return the expected toast kinds. |
| AT-31 | `tests/unit/loading-state.test.ts` | Unit test | AI fallback toast trigger ignores configured-off Gemini paths. | Missing-key fallback paths do not trigger API-failure toasts. |
| AT-32 | `tests/unit/routing.test.ts` | Unit test | Base routing shows always-visible questions and hides conditional follow-ups. | Base questions are visible and conditional follow-ups stay hidden until relevant tags are present. |
| AT-33 | `tests/unit/routing.test.ts` | Unit test | `recomputeTags` combines selected option tags and allowed AI tags. | Valid selected-option and AI tags are included; invalid AI tags are ignored. |
| AT-34 | `tests/unit/routing.test.ts` | Unit test | `getSelectedOptions` reads grouped question answers. | Grouped answers return the expected selected options and risk scores. |
| AT-35 | `tests/unit/score-presentation.test.ts` | Unit test | Score presentation helpers preserve existing labels and formatting. | Factor labels exclude Symptoms, category score labels keep `/ 4`, and the overall summary score uses `out of 4`. |
| AT-36 | `tests/unit/score-presentation.test.ts` | Unit test | Risk descriptions match score thresholds. | Composite risk descriptions map to the expected score bands. |
| AT-37 | `tests/unit/score-presentation.test.ts` | Unit test | Factor risk interpretations match score thresholds. | Factor interpretation text maps to the expected score bands. |
| AT-38 | `tests/unit/score-presentation.test.ts` | Unit test | Psychosocial influence message appears only when the final score is negatively influenced. | Psychosocial note is present only when the modifier increases the final score. |
| AT-39 | `tests/unit/scoring.test.ts` | Unit test | `scoreAssessment` returns unscored results when no answers are present. | Composite, grouped, and factor scores are empty or `null` as expected. |
| AT-40 | `tests/unit/scoring.test.ts` | Unit test | `scoreAssessment` uses max selected option score per question and averages by factor. | Factor, grouped, and composite scores match expected values, and no Symptoms factor is returned. |
| AT-41 | `tests/unit/scoring.test.ts` | Unit test | `scoreAssessment` does not score current symptom answers. | Current symptom answers leave factor, grouped, base composite, and final composite scores unchanged. |
| AT-42 | `tests/unit/scoring.test.ts` | Unit test | `scoreAssessment` averages answered psychosocial questions only and applies the modifier to the final score. | Psychosocial score and multiplier are based only on answered psychosocial questions. |
| AT-43 | `tests/unit/scoring.test.ts` | Unit test | Psychosocial multiplier uses the configured thresholds. | Multiplier values match the configured psychosocial score bands. |
| AT-44 | `tests/unit/scoring.test.ts` | Unit test | `scoreAssessment` caps the psychosocial-adjusted composite score at 4. | Final composite score never exceeds 4. |
| AT-45 | `tests/unit/scoring.test.ts` | Unit test | `scoreAssessment` keeps Q41 and Q42 in environmental scoring while using them for psychosocial scoring. | Q41/Q42 contribute to environmental scoring and the psychosocial modifier. |
| AT-46 | `tests/unit/scoring.test.ts` | Unit test | `scoreAssessment` averages contact stress over the number of answered contact stress questions. | Contact stress average changes according to the answered contact-stress question count. |
| AT-47 | `tests/unit/scoring.test.ts` | Unit test | `scoreAssessment` averages force over the number of answered force questions. | Force average changes according to the answered force question count. |
| AT-48 | `tests/unit/scoring.test.ts` | Unit test | `scoreAssessment` averages repetition over the number of answered repetition questions. | Repetition average uses only answered repetition questions. |
| AT-49 | `tests/unit/scoring.test.ts` | Unit test | `scoreAssessment` severity uses the configured risk interpretation boundaries. | Severity labels change at the expected score thresholds. |
| AT-50 | `tests/unit/report-data.test.ts` | Unit/data test | Report data always returns the five MSI categories in the required order and has guidance coverage for all risk-driving answer selections. | Contact stress, Force, Awkward posture, Repetition, and Environmental factors appear once each, and no risk score `>= 2` selection is missing report guidance. |
| AT-51 | `tests/unit/report-data.test.ts` | Unit test | Report data maps task, worker height, symptoms, and job-specific notes. | Q3, Q4, Q9, Q10, and AI routing tags are reflected in the generated report data; body symptoms retain canonical IDs plus display labels. |
| AT-52 | `tests/unit/report-data.test.ts` | Unit test | Report data computes category priority counts from selected answer scores. | Scores of 4, 3, and 2 count as high, medium, and review priority respectively. |
| AT-53 | `tests/unit/report-data.test.ts` | Unit test | Report data uses answer-driven suggested actions and clean low-risk fallback text. | Risk-driving answers produce relevant explanations/actions, and categories with no scored hazard use safe fallback guidance. |
| AT-54 | `tests/unit/report-document.test.ts` | Bundle smoke test | React PDF report document can be bundled for browser rendering. | The report document and React PDF renderer bundle successfully for the browser target. |

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
| MT-08 | PDF report | Acceptance test | Complete an assessment and select Download PDF. | PDF downloads and includes the intro/about page, overview page, five-category score summary, category-specific report pages, and full response record. |
| MT-09 | Restart | Regression test | Complete an assessment and start a new one. | App returns to the intro screen and prior answers are cleared. |
| MT-10 | Mobile layout | Responsive test | Run the main flow around 390px wide. | Text, buttons, progress, images, and answer rows do not overlap or clip. |
| MT-11 | Tablet layout | Responsive test | Run the main flow around 768px wide. | Layout remains readable and controls are easy to use. |
| MT-12 | Browser check | Compatibility test | Run a representative flow in Chrome and Safari. | Main flow works in both browsers without console errors. |
| MT-13 | Usability | Usability test | Ask a classmate to complete a simple scenario without coaching. | User can understand the questions, score summary, and report actions; feedback is recorded. |
| MT-14 | Gemini optional check | API/manual integration test | If a restricted Gemini key is configured, enter a detailed task description. | App continues normally and asks relevant follow-up questions. |
| MT-15 | Spanish translation | Localization test | Select Spanish and complete a representative flow. | In-app text is Spanish; brand names may remain unchanged. Downloaded PDFs remain English. |
| MT-16 | French translation | Localization test | Select French and complete a representative flow. | In-app text is French; brand names may remain unchanged. Downloaded PDFs remain English. |
| MT-17 | Spanish task parity | API/manual integration test | With Gemini configured, enter equivalent English and Spanish lifting task descriptions. | Both runs show the same core lifting/repetition follow-up questions; very small tag variance is acceptable. |
| MT-18 | French task parity | API/manual integration test | With Gemini configured, enter equivalent English and French desk/computer task descriptions. | Both runs show the same core seated/screen/repetition follow-up questions; very small tag variance is acceptable. |
| MT-19 | PDF visual layout | Visual/manual test | Open the downloaded PDF from low-risk and high-risk sample assessments. | Layout resembles the Figma report direction, icons/images render, body diagram placeholder appears, text does not overlap, and all five categories appear without duplicates or omissions. |
