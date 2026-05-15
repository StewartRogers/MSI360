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
| AT-14 | `tests/unit/ai.test.ts` | Unit test | `buildInterpretTextPrompt` preserves English tag-selection behavior while supporting multilingual text and canonical tags. | Prompt tells Gemini to interpret English directly, interpret non-English into the same English tag-selection behavior, preserve concrete routing clues, and return allowed tag IDs. |
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
| AT-51 | `tests/unit/report-data.test.ts` | Unit test | Report data maps responder context, task, worker height, symptoms, and job-specific notes. | Q1, Q2, Q3, Q4, Q9, Q10, and AI routing tags are reflected in the generated report data; non-worker responder context includes a worker-confirmation note, and body symptoms retain canonical IDs plus display labels. |
| AT-52 | `tests/unit/report-data.test.ts` | Unit test | Report data computes category priority counts from selected answer scores. | Scores of 4, 3, and 2 count as high, medium, and review priority respectively. |
| AT-53 | `tests/unit/report-data.test.ts` | Unit test | Report data uses answer-driven suggested actions and clean low-risk fallback text. | Risk-driving answers produce relevant explanations/actions, and categories with no scored hazard use safe fallback guidance. |
| AT-54 | `tests/unit/report-document.test.ts` | Bundle smoke test | React PDF report document can be bundled for browser rendering. | The report document and React PDF renderer bundle successfully for the browser target. |
| AT-55 | `tests/unit/routing.test.ts` | Unit test | Office computer AI tags preserve the full desk-work routing path. | Office/computer, seated, static, mouse-intensive, and repetitive tags are retained and route to the expected 22-question office path. |
| AT-56 | `tests/unit/routing.test.ts` | Unit test | Manual-handling AI tags route lifting, carrying, force, and repetition follow-ups. | Manual handling, lifting/lowering, carrying, and heavy-load tags are retained and relevant force/repetition questions appear. |
| AT-57 | `tests/unit/routing.test.ts` | Unit test | Tool-use AI tags route grip, start-force, vibration, and posture follow-ups. | Tool-use, vibrating-tool, and power-grip tags are retained and relevant tool, posture, and repetition questions appear. |
| AT-58 | `tests/unit/routing.test.ts` | Unit test | Environment AI tags route noise, glare, and cold follow-ups. | Outdoor, cold, glare, and noise tags are retained and the environmental follow-up questions appear. |
| AT-59 | `tests/unit/ai.test.ts` | Unit test | `buildReportAnalysisPrompt` limits Gemini report analysis to the first four onboarding questions and required sources. | Prompt excludes later answers, avoids category-score references, includes Q1-Q4 context, and includes Institute for Work & Health plus WorkSafeBC OHS Regulation Part 4 source guidance. |
| AT-60 | `tests/unit/ai.test.ts` | Unit test | `validateReportAnalysisOutput` accepts only a clean AI report-analysis paragraph. | Valid paragraphs are normalized and tagged as Gemini output, while empty or malformed outputs are rejected. |
| AT-61 | `tests/unit/report-data.test.ts` | Unit test | Report data includes available AI-generated analysis with disclaimer and source links. | Background AI analysis is wrapped with the fixed Q1-Q4 disclaimer and Institute for Work & Health plus WorkSafeBC source links before PDF rendering. |
| AT-62 | `tests/integration/assessment-flow.test.ts` | Integration/data test | Language dropdown displays each language name in that language. | Every configured language label uses the expected native-language display name, including a distinct Persian n.o.s. label. |
| AT-63 | `tests/integration/assessment-flow.test.ts` | Integration/data test | Right-to-left languages are identified for answer control layout. | Arabic, Persian, Persian n.o.s., Dari, and Urdu are treated as RTL; English and Punjabi are not. |
| AT-64 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | Vietnamese translation has display text for every configured question option. | Vietnamese question labels, option labels, and grouped labels are complete. |
| AT-65 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | Russian translation has display text for every configured question option. | Russian question labels, option labels, and grouped labels are complete. |
| AT-66 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | Portuguese (Portugal) translation has display text for every configured question option. | Portuguese question labels, option labels, and grouped labels are complete. |
| AT-67 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | Japanese translation has display text for every configured question option. | Japanese question labels, option labels, and grouped labels are complete. |
| AT-68 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | Italian translation has display text for every configured question option. | Italian question labels, option labels, and grouped labels are complete. |
| AT-69 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | Dutch translation has display text for every configured question option. | Dutch question labels, option labels, and grouped labels are complete. |
| AT-70 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | Polish translation has display text for every configured question option. | Polish question labels, option labels, and grouped labels are complete. |
| AT-71 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | Min Nan, Urdu, and Gujarati translations have display text for every configured question option. | Min Nan, Urdu, and Gujarati question labels, option labels, and grouped labels are complete. |
| AT-72 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | Romanian translation has display text for every configured question option. | Romanian question labels, option labels, and grouped labels are complete. |
| AT-73 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | Ukrainian translation has display text for every configured question option. | Ukrainian question labels, option labels, and grouped labels are complete. |
| AT-74 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | Hungarian, Serbian, and Ilocano translations have display text for every configured question option. | Hungarian, Serbian, and Ilocano question labels, option labels, and grouped labels are complete. |
| AT-75 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | Croatian, Dari, and Tamil translations have display text for every configured question option. | Croatian, Dari, and Tamil question labels, option labels, and grouped labels are complete. |
| AT-76 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | Greek, Czech, and Persian n.o.s. translations have display text for every configured question option. | Greek, Czech, and Persian n.o.s. question labels, option labels, and grouped labels are complete. |
| AT-77 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | Malayalam, Bengali, and Turkish translations have display text for every configured question option. | Malayalam, Bengali, and Turkish question labels, option labels, and grouped labels are complete. |
| AT-78 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | Cebuano, Indonesian, Afrikaans, and Danish translations have display text for every configured question option. | Cebuano, Indonesian, Afrikaans, and Danish question labels, option labels, and grouped labels are complete. |
| AT-79 | `tests/integration/assessment-flow.test.ts` | Localization test | Ready translations provide localized AI loading and fallback labels. | Each ready language defines AI loading, fallback toast, and fallback dismissal strings. |
| AT-80 | `tests/integration/assessment-flow.test.ts` | Localization test | Ready translations provide localized question progress labels. | Progress templates include and render current and total placeholders. |
| AT-81 | `tests/integration/assessment-flow.test.ts` | Localization test | Ready translations provide localized score summary labels. | Score title, risk labels, factor descriptions, subjects, and psychosocial note labels are present. |
| AT-82 | `tests/integration/assessment-flow.test.ts` | Localization test | Ready translations provide localized report wrap-up labels. | Email, report-ready, submit, and completion screen labels are present. |
| AT-83 | `tests/unit/ai.test.ts` | Unit test | Equivalent English and translated task descriptions return the same routing tags. | English and Spanish fallback descriptions for the same work task produce matching canonical tags. |
| AT-84 | `tests/unit/ai.test.ts` | Unit test | Translated task descriptions with Spanish units and frequency do not request missing details. | Spanish weight and frequency terms satisfy the local fallback missing-detail checks. |
| AT-85 | `tests/unit/loading-state.test.ts` | Unit test | AI loading and fallback toast messages use selected translations. | Loading and toast copy resolve from the active translation. |
| AT-86 | `tests/unit/score-presentation.test.ts` | Unit test | Score presentation helpers use selected translations. | Overall score, risk labels, factor descriptions, and factor names localize from the active translation. |
| AT-87 | `tests/unit/score-presentation.test.ts` | Component rendering test | Score screen renders the localized overall score instead of hardcoded English. | Languages with different score word order render via the localized score template. |
| AT-88 | `tests/integration/assessment-flow.test.ts` | Integration/data test | Every language has a flag icon code for dropdown rendering. | Each configured language has a two-letter flag icon code. |
| AT-89 | `tests/integration/assessment-flow.test.ts` | Integration/data test | Question text uses selected translations with English field fallback. | Missing localized question fields fall back to English text. |
| AT-90 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | Punjabi translation has display text for every configured question option. | Punjabi question labels, option labels, grouped labels, and description copy are complete. |
| AT-91 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | Arabic translation has display text for every configured question option. | Arabic question labels, option labels, grouped labels, and description copy are complete. |
| AT-92 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | French, Spanish, and Korean translations have display text for every configured question option. | French, Spanish, and Korean question labels, option labels, grouped labels, and description titles are complete. |
| AT-93 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | Chinese (Simplified) translation has display text for every configured question option. | Simplified Chinese question labels, option labels, grouped labels, and description title are complete. |
| AT-94 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | Chinese (Traditional) and Tagalog translations have display text for every configured question option. | Traditional Chinese and Tagalog question labels, option labels, grouped labels, and description titles are complete. |
| AT-95 | `tests/integration/assessment-flow.test.ts` | Translation coverage test | German, Persian, and Hindi translations have display text for every configured question option. | German, Persian, and Hindi question labels, option labels, grouped labels, and description titles are complete. |
| AT-96 | `tests/integration/assessment-flow.test.ts` | Localization test | Ready translations provide localized shared action button labels. | Continue, Back, Processing, and Analyzing labels resolve from ready translations. |

## Manual Test Cases

Each team member will spend one hour per week running manual tests from this checklist.

| ID | Area | Test Type | Steps | Expected Result |
| --- | --- | --- | --- | --- |
| MT-01 | Intro and language | Acceptance test | Open the app, select Start, choose a language, and continue. | Language names appear in their own language, selection works, and the next required question appears. |
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
| MT-20 | AI-generated report analysis | API/manual integration test | With Gemini configured, answer Q1-Q4, continue through the assessment, wait briefly on the report-ready screen, then download the PDF. | The overview page shows an "AI-generated analysis" block beside "Job-specific note"; it includes the fixed Q1-Q4 AI disclaimer and source links to Institute for Work & Health and WorkSafeBC OHS Regulation Part 4. |
| MT-21 | AI report-analysis fallback | API/manual integration test | Disable or remove the Gemini key, complete the same flow, and download the PDF. | PDF generation still succeeds without blocking; the "AI-generated analysis" block is omitted and the rest of the report remains complete. |
| MT-22 | Responder/tenure AI context | Manual review test | With Gemini configured, run one scenario as Worker with less than a year in role and another as Supervisor/Manager with the same task. Compare the AI-generated analysis paragraphs. | Worker output treats the answer as directly task-relevant; non-worker output recommends review with a worker, and short-tenure output references elevated new-worker injury risk without changing category scores. |
