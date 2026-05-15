import test from "node:test";
import assert from "node:assert/strict";
import { questions, sectionOrder } from "../../src/data/catalog";
import { isRtlLanguage, languages } from "../../src/data/languages";
import { translations } from "../../src/data/translations";
import { getActionButtonLabels, getAnalyzingButtonLabel, getProgressLabel, getQuestionText } from "../../src/data/translationText";
import { interpretTextAnswer } from "../../src/logic/ai";
import { applyAnswer, applyDraftAnswer, findNextAssessmentIndexAfterCommit, getAssessmentQuestions, getDisplayedAssessmentAnswer, isQuestionAnswered } from "../../src/logic/assessmentFlow";
import { getVisibleQuestions, recomputeTags } from "../../src/logic/routing";
import { scoreAssessment } from "../../src/logic/scoring";
import type { AiOutputs, Answer, Answers } from "../../src/types";

test("manual-handling task description routes to the main force and tool follow-up questions", async () => {
  const taskQuestion = questions.find((question) => question.question_id === "question-3");
  assert.ok(taskQuestion);

  const answers: Answers = {
    "question-3": {
      type: "text",
      value: "I repeatedly lift heavy boxes and use a drill."
    }
  };
  const aiOutput = await interpretTextAnswer(taskQuestion, String(answers["question-3"].value));
  const aiOutputs: AiOutputs = { "question-3": aiOutput };
  const tags = recomputeTags(answers, aiOutputs);
  const visibleQuestionIds = getVisibleQuestions(tags).map((question) => question.question_id);

  assert.ok(visibleQuestionIds.includes("question-13"));
  assert.ok(visibleQuestionIds.includes("question-17"));
  assert.ok(visibleQuestionIds.includes("question-32"));
});

test("reported discomfort answer routes to the body discomfort follow-up", () => {
  const answers: Answers = {
    "question-9": { type: "multi_choice", value: "yes" }
  };

  const tags = recomputeTags(answers, {});
  const visibleQuestionIds = getVisibleQuestions(tags).map((question) => question.question_id);

  assert.ok(visibleQuestionIds.includes("question-10"));
});

test("completed high-risk sample answers produce a score summary", () => {
  const answers: Answers = {
    "question-9": { type: "multi_choice", value: "yes" },
    "question-17": { type: "multi_choice", value: "more_than_18_lb" },
    "question-20": {
      type: "grouped_multi_choice",
      value: { forward_backward: "most", sideways: "some" }
    },
    "question-29": { type: "multi_choice", value: "more_than_4_hours" },
    "question-37": { type: "multi_choice", value: "frequently" }
  };

  const result = scoreAssessment(answers);

  assert.equal(result.factors.force.severity, "Known risk");
  assert.equal(result.factors.repetition.severity, "Likely risk");
  assert.ok(typeof result.composite_score === "number");
});

test("auto-answered questions can be hidden from assessment navigation while still being scored", () => {
  const onboardingQuestionIds = new Set(["question-1", "question-2", "question-3", "question-4"]);
  const autoAnsweredQuestionIds = new Set(["question-17"]);
  const answers: Answers = {
    "question-3": { type: "text", value: "I lift boxes that are more than 18 lb." },
    "question-17": { type: "multi_choice", value: "more_than_18_lb" }
  };
  const aiOutputs: AiOutputs = {
    "question-3": {
      normalized_answer_en: "I lift boxes that are more than 18 lb.",
      add_tags: ["manual_handling", "lifting_lowering", "heavy_loads"],
      missing_details: [],
      confidence: 0.9,
      notes: "Test output",
      provider: "test"
    }
  };

  const tags = recomputeTags(answers, aiOutputs);
  const assessmentQuestionIds = getVisibleQuestions(tags)
    .filter((question) => !onboardingQuestionIds.has(question.question_id) && !autoAnsweredQuestionIds.has(question.question_id))
    .map((question) => question.question_id);
  const result = scoreAssessment(answers);

  assert.ok(!assessmentQuestionIds.includes("question-17"));
  assert.equal(result.factors.force.score, 4);
});

test("draft assessment answers do not reroute question 22 until committed", () => {
  const answers = getAnsweredSeatedAssessmentThroughQuestion21();
  const tagsBeforeDraft = recomputeTags(answers, {});
  const questionsBeforeDraft = getVisibleAssessmentQuestions(tagsBeforeDraft, answers);
  const question22Index = questionsBeforeDraft.findIndex((question) => question.question_id === "question-22");
  assert.ok(question22Index >= 0);

  const draftAnswers = applyAnswer({}, "question-22", "grouped_multi_choice", { hands_above_shoulders: "never", hands_floor_to_knee: "some" });
  const displayedAnswer = getDisplayedAssessmentAnswer("question-22", answers, draftAnswers);
  const questionsAfterDraft = getVisibleAssessmentQuestions(tagsBeforeDraft, answers);

  assert.equal(displayedAnswer?.value && typeof displayedAnswer.value === "object" && !Array.isArray(displayedAnswer.value) ? displayedAnswer.value.hands_floor_to_knee : "", "some");
  assert.deepEqual(
    questionsAfterDraft.map((question) => question.question_id),
    questionsBeforeDraft.map((question) => question.question_id)
  );
  assert.equal(questionsAfterDraft[question22Index].question_id, "question-22");

  const committedAnswers = applyAnswer(answers, "question-22", "grouped_multi_choice", displayedAnswer?.value || {});
  const tagsAfterCommit = recomputeTags(committedAnswers, {});
  const questionsAfterCommit = getVisibleAssessmentQuestions(tagsAfterCommit, committedAnswers);
  const nextIndex = findNextAssessmentIndexAfterCommit(questionsBeforeDraft, questionsAfterCommit, "question-22", committedAnswers);

  assert.ok(tagsAfterCommit.includes("low_work"));
  assert.equal(nextIndex === null ? "" : questionsAfterCommit[nextIndex].question_id, "question-12");
});

test("question 22 overhead-work follow-ups appear only after commit", () => {
  const answers = getAnsweredSeatedAssessmentThroughQuestion21();
  const tagsBeforeDraft = recomputeTags(answers, {});
  const questionsBeforeDraft = getVisibleAssessmentQuestions(tagsBeforeDraft, answers);
  const draftAnswers = applyAnswer({}, "question-22", "grouped_multi_choice", { hands_above_shoulders: "some", hands_floor_to_knee: "never" });
  const displayedAnswer = getDisplayedAssessmentAnswer("question-22", answers, draftAnswers);
  const questionsAfterDraft = getVisibleAssessmentQuestions(tagsBeforeDraft, answers);

  assert.ok(!questionsAfterDraft.some((question) => question.question_id === "question-23"));
  assert.ok(!questionsAfterDraft.some((question) => question.question_id === "question-24"));

  const committedAnswers = applyAnswer(answers, "question-22", "grouped_multi_choice", displayedAnswer?.value || {});
  const questionsAfterCommit = getVisibleAssessmentQuestions(recomputeTags(committedAnswers, {}), committedAnswers);
  const nextIndex = findNextAssessmentIndexAfterCommit(questionsBeforeDraft, questionsAfterCommit, "question-22", committedAnswers);

  assert.equal(nextIndex === null ? "" : questionsAfterCommit[nextIndex].question_id, "question-23");
  assert.ok(questionsAfterCommit.some((question) => question.question_id === "question-24"));
});

test("grouped assessment drafts must answer every required group before continuing", () => {
  const question22 = questions.find((question) => question.question_id === "question-22");
  assert.ok(question22);

  const partialDraft: Answer = {
    type: "grouped_multi_choice",
    value: { hands_floor_to_knee: "some" }
  };
  const completeDraft: Answer = {
    type: "grouped_multi_choice",
    value: { hands_above_shoulders: "never", hands_floor_to_knee: "some" }
  };

  assert.equal(isQuestionAnswered(question22, partialDraft), false);
  assert.equal(isQuestionAnswered(question22, completeDraft), true);
});

test("empty drafts override committed assessment answers while editing", () => {
  const question22 = questions.find((question) => question.question_id === "question-22");
  assert.ok(question22);

  const committedAnswers = applyAnswer({}, "question-22", "grouped_multi_choice", { hands_above_shoulders: "never", hands_floor_to_knee: "some" });
  const draftAnswers = applyDraftAnswer({}, "question-22", "grouped_multi_choice", {});
  const displayedAnswer = getDisplayedAssessmentAnswer("question-22", committedAnswers, draftAnswers);

  assert.deepEqual(displayedAnswer?.value, {});
  assert.equal(isQuestionAnswered(question22, displayedAnswer), false);
});

test("draft assessment answers are not scored until committed", () => {
  const answers = getAnsweredSeatedAssessmentThroughQuestion21();
  const draftAnswers = applyAnswer({}, "question-22", "grouped_multi_choice", { hands_above_shoulders: "never", hands_floor_to_knee: "some" });
  const committedScore = scoreAssessment(answers);
  const scoreAfterCommit = scoreAssessment(applyAnswer(answers, "question-22", "grouped_multi_choice", draftAnswers["question-22"].value));

  assert.equal(answers["question-22"], undefined);
  assert.equal(committedScore.factors.awkward_posture.score, 1.3);
  assert.equal(scoreAfterCommit.factors.awkward_posture.score, 1.5);
});

test("every configured question has English display text for its options", () => {
  const englishQuestions = translations.en.questions;

  for (const question of questions) {
    const text = englishQuestions[question.question_id];
    assert.ok(text, `Missing English text for question ${question.question_id}`);
    assert.ok(text.label, `Missing English label for question ${question.question_id}`);

    for (const option of question.options ?? []) {
      assert.ok(text.options?.[option.option_id], `Missing option label for ${question.question_id}.${option.option_id}`);
    }

    for (const group of question.groups ?? []) {
      const groupText = text.groups?.[group.group_id];
      assert.ok(groupText?.label, `Missing group label for ${question.question_id}.${group.group_id}`);
      for (const option of group.options) {
        assert.ok(groupText.options[option.option_id], `Missing grouped option label for ${question.question_id}.${group.group_id}.${option.option_id}`);
      }
    }
  }
});

test("every language has a flag icon code for dropdown rendering", () => {
  for (const language of languages) {
    assert.ok(/^[a-z]{2}$/.test(language.flagCode), `Missing flag icon code for ${language.name}`);
  }
});

test("right-to-left languages are identified for answer control layout", () => {
  assert.equal(isRtlLanguage("ar"), true);
  assert.equal(isRtlLanguage("fa"), true);
  assert.equal(isRtlLanguage("ur"), true);
  assert.equal(isRtlLanguage("prs"), true);
  assert.equal(isRtlLanguage("en"), false);
  assert.equal(isRtlLanguage("pa"), false);
});

test("question text uses selected translations with English field fallback", () => {
  const text = getQuestionText(
    {
      ...translations.en,
      questions: {
        "question-1": {
          label: "Translated role question",
          options: {
            worker: "Translated worker"
          }
        }
      }
    },
    "question-1"
  );

  assert.equal(text?.label, "Translated role question");
  assert.equal(text?.options?.worker, "Translated worker");
  assert.equal(text?.options?.supervisor, "Supervisor");
});

test("Punjabi translation has display text for every configured question option", () => {
  const punjabiQuestions = translations.pa.questions;

  assert.equal(translations.pa.app.description_title, "ਵੇਰਵਾ");
  assert.ok(translations.pa.app.description_body);

  for (const question of questions) {
    const text = punjabiQuestions[question.question_id];
    assert.ok(text, `Missing Punjabi text for question ${question.question_id}`);
    assert.ok(text.label, `Missing Punjabi label for question ${question.question_id}`);

    for (const option of question.options ?? []) {
      assert.ok(text.options?.[option.option_id], `Missing Punjabi option label for ${question.question_id}.${option.option_id}`);
    }

    for (const group of question.groups ?? []) {
      const groupText = text.groups?.[group.group_id];
      assert.ok(groupText?.label, `Missing Punjabi group label for ${question.question_id}.${group.group_id}`);
      for (const option of group.options) {
        assert.ok(groupText.options[option.option_id], `Missing Punjabi grouped option label for ${question.question_id}.${group.group_id}.${option.option_id}`);
      }
    }
  }
});

test("Arabic translation has display text for every configured question option", () => {
  assert.equal(translations.ar.app.description_title, "الوصف");
  assert.ok(translations.ar.app.description_body);
  assertTranslationCoverage("Arabic", translations.ar.questions);
});

test("French, Spanish, and Korean translations have display text for every configured question option", () => {
  assert.equal(translations.fr.app.description_title, "Description");
  assert.equal(translations.es.app.description_title, "Descripción");
  assert.equal(translations.ko.app.description_title, "설명");
  assertTranslationCoverage("French", translations.fr.questions);
  assertTranslationCoverage("Spanish", translations.es.questions);
  assertTranslationCoverage("Korean", translations.ko.questions);
});

test("Mandarin translation has display text for every configured question option", () => {
  assert.equal(translations["zh-Hans"].app.description_title, "说明");
  assertTranslationCoverage("Mandarin", translations["zh-Hans"].questions);
});

test("Cantonese and Tagalog translations have display text for every configured question option", () => {
  assert.equal(translations.yue.app.description_title, "說明");
  assert.equal(translations.fil.app.description_title, "Paglalarawan");
  assertTranslationCoverage("Cantonese", translations.yue.questions);
  assertTranslationCoverage("Tagalog", translations.fil.questions);
});

test("German, Persian, and Hindi translations have display text for every configured question option", () => {
  assert.equal(translations.de.app.description_title, "Beschreibung");
  assert.equal(translations.fa.app.description_title, "توضیح");
  assert.equal(translations.hi.app.description_title, "विवरण");
  assertTranslationCoverage("German", translations.de.questions);
  assertTranslationCoverage("Persian", translations.fa.questions);
  assertTranslationCoverage("Hindi", translations.hi.questions);
});

test("Vietnamese translation has display text for every configured question option", () => {
  assert.equal(translations.vi.app.description_title, "Mô tả");
  assertTranslationCoverage("Vietnamese", translations.vi.questions);
});

test("Russian translation has display text for every configured question option", () => {
  assert.equal(translations.ru.app.description_title, "Описание");
  assertTranslationCoverage("Russian", translations.ru.questions);
});

test("Portuguese (Portugal) translation has display text for every configured question option", () => {
  assert.equal(translations.pt.app.description_title, "Descrição");
  assertTranslationCoverage("Portuguese (Portugal)", translations.pt.questions);
});

test("Japanese translation has display text for every configured question option", () => {
  assert.equal(translations.ja.app.description_title, "説明");
  assertTranslationCoverage("Japanese", translations.ja.questions);
});

test("Italian translation has display text for every configured question option", () => {
  assert.equal(translations.it.app.description_title, "Descrizione");
  assertTranslationCoverage("Italian", translations.it.questions);
});

test("Dutch translation has display text for every configured question option", () => {
  assert.equal(translations.nl.app.description_title, "Beschrijving");
  assertTranslationCoverage("Dutch", translations.nl.questions);
});

test("Polish translation has display text for every configured question option", () => {
  assert.equal(translations.pl.app.description_title, "Opis");
  assertTranslationCoverage("Polish", translations.pl.questions);
});

test("Min Nan, Urdu, and Gujarati translations have display text for every configured question option", () => {
  assert.equal(translations.nan.app.description_title, "說明");
  assert.equal(translations.ur.app.description_title, "تفصیل");
  assert.equal(translations.gu.app.description_title, "વર્ણન");
  assertTranslationCoverage("Min Nan", translations.nan.questions);
  assertTranslationCoverage("Urdu", translations.ur.questions);
  assertTranslationCoverage("Gujarati", translations.gu.questions);
});

test("Romanian translation has display text for every configured question option", () => {
  assert.equal(translations.ro.app.description_title, "Descriere");
  assertTranslationCoverage("Romanian", translations.ro.questions);
});

test("Ukrainian translation has display text for every configured question option", () => {
  assert.equal(translations.uk.app.description_title, "Опис");
  assertTranslationCoverage("Ukrainian", translations.uk.questions);
});

test("Hungarian, Serbian, and Ilocano translations have display text for every configured question option", () => {
  assert.equal(translations.hu.app.description_title, "Leírás");
  assert.equal(translations.sr.app.description_title, "Опис");
  assert.equal(translations.ilo.app.description_title, "Deskripsion");
  assertTranslationCoverage("Hungarian", translations.hu.questions);
  assertTranslationCoverage("Serbian", translations.sr.questions);
  assertTranslationCoverage("Ilocano", translations.ilo.questions);
});

test("Croatian, Dari, and Tamil translations have display text for every configured question option", () => {
  assert.equal(translations.hr.app.description_title, "Opis");
  assert.equal(translations.prs.app.description_title, "توضیح");
  assert.equal(translations.ta.app.description_title, "விளக்கம்");
  assertTranslationCoverage("Croatian", translations.hr.questions);
  assertTranslationCoverage("Dari", translations.prs.questions);
  assertTranslationCoverage("Tamil", translations.ta.questions);
});

test("Greek, Czech, and Persian n.o.s. translations have display text for every configured question option", () => {
  assert.equal(translations.el.app.description_title, "Περιγραφή");
  assert.equal(translations.cs.app.description_title, "Popis");
  assert.equal(translations["fa-x-nos"].app.description_title, "توضیح");
  assertTranslationCoverage("Greek", translations.el.questions);
  assertTranslationCoverage("Czech", translations.cs.questions);
  assertTranslationCoverage("Persian n.o.s.", translations["fa-x-nos"].questions);
});

test("ready translations provide localized shared action button labels", () => {
  assert.deepEqual(getActionButtonLabels(translations.en), { continueLabel: "Continue", backLabel: "Back", busyLabel: "Processing" });
  assert.equal(getActionButtonLabels(translations.fr).continueLabel, "Continuer");
  assert.equal(getActionButtonLabels(translations.es).backLabel, "Atrás");
  assert.equal(getActionButtonLabels(translations.ko).continueLabel, "계속");
  assert.equal(getActionButtonLabels(translations["zh-Hans"]).continueLabel, "继续");
  assert.equal(getActionButtonLabels(translations.yue).continueLabel, "繼續");
  assert.equal(getActionButtonLabels(translations.fil).continueLabel, "Magpatuloy");
  assert.equal(getActionButtonLabels(translations.de).continueLabel, "Weiter");
  assert.equal(getActionButtonLabels(translations.fa).continueLabel, "ادامه");
  assert.equal(getActionButtonLabels(translations.hi).continueLabel, "जारी रखें");
  assert.equal(getActionButtonLabels(translations.vi).continueLabel, "Tiếp tục");
  assert.equal(getActionButtonLabels(translations.ru).continueLabel, "Продолжить");
  assert.equal(getActionButtonLabels(translations.pt).continueLabel, "Continuar");
  assert.equal(getActionButtonLabels(translations.ja).continueLabel, "続行");
  assert.equal(getActionButtonLabels(translations.it).continueLabel, "Continua");
  assert.equal(getActionButtonLabels(translations.nl).continueLabel, "Doorgaan");
  assert.equal(getActionButtonLabels(translations.pl).continueLabel, "Kontynuuj");
  assert.equal(getActionButtonLabels(translations.nan).continueLabel, "繼續");
  assert.equal(getActionButtonLabels(translations.ur).continueLabel, "جاری رکھیں");
  assert.equal(getActionButtonLabels(translations.gu).continueLabel, "ચાલુ રાખો");
  assert.equal(getActionButtonLabels(translations.ro).continueLabel, "Continua");
  assert.equal(getActionButtonLabels(translations.uk).continueLabel, "Продовжити");
  assert.equal(getActionButtonLabels(translations.hu).continueLabel, "Folytatás");
  assert.equal(getActionButtonLabels(translations.sr).continueLabel, "Настави");
  assert.equal(getActionButtonLabels(translations.ilo).continueLabel, "Itultuloy");
  assert.equal(getActionButtonLabels(translations.hr).continueLabel, "Nastavi");
  assert.equal(getActionButtonLabels(translations.prs).continueLabel, "ادامه");
  assert.equal(getActionButtonLabels(translations.ta).continueLabel, "தொடரவும்");
  assert.equal(getActionButtonLabels(translations.el).continueLabel, "Συνέχεια");
  assert.equal(getActionButtonLabels(translations.cs).continueLabel, "Pokračovat");
  assert.equal(getActionButtonLabels(translations["fa-x-nos"]).continueLabel, "ادامه");
  assert.equal(getAnalyzingButtonLabel(translations.ar), "جار التحليل");
});

test("ready translations provide localized question progress labels", () => {
  for (const language of languages.filter((item) => item.ready)) {
    const template = translations[language.code].app.question_progress;
    assert.ok(template, `Missing question progress label for ${language.code}`);
    assert.ok(template.includes("{current}"), `Missing current placeholder for ${language.code}`);
    assert.ok(template.includes("{total}"), `Missing total placeholder for ${language.code}`);

    const label = getProgressLabel(translations[language.code], 2, 10);
    assert.ok(label.includes("2"), `Missing current number in rendered label for ${language.code}`);
    assert.ok(label.includes("10"), `Missing total number in rendered label for ${language.code}`);
    assert.ok(!label.includes("{current}"), `Unresolved current placeholder for ${language.code}`);
    assert.ok(!label.includes("{total}"), `Unresolved total placeholder for ${language.code}`);
  }

  assert.equal(getProgressLabel(translations.fr, 2, 10), "Question 2 sur 10");
  assert.equal(getProgressLabel(translations.ar, 2, 10), "السؤال 2 من 10");
  assert.equal(getProgressLabel(translations["zh-Hans"], 2, 10), "第 2 题，共 10 题");
});

test("ready translations provide localized score summary labels", () => {
  const requiredKeys = [
    "score_summary_title",
    "score_overall_risk",
    "score_download_report",
    "score_not_available",
    "score_out_of_4",
    "score_risk_not_enough",
    "score_risk_low",
    "score_risk_possible",
    "score_risk_likely",
    "score_risk_known",
    "score_factor_not_enough",
    "score_factor_low",
    "score_factor_possible",
    "score_factor_likely",
    "score_factor_known",
    "score_psychosocial_note",
    "score_subject_contact_stress",
    "score_subject_force",
    "score_subject_awkward_postures",
    "score_subject_repetition",
    "score_subject_environmental"
  ];

  for (const language of languages.filter((item) => item.ready)) {
    for (const key of requiredKeys) {
      assert.ok(translations[language.code].app[key], `Missing ${key} for ${language.code}`);
    }
  }
});

test("ready translations provide localized report wrap-up labels", () => {
  const requiredKeys = [
    "wrap_email_copy",
    "wrap_review_results",
    "wrap_submit_report",
    "email_title",
    "email_body",
    "email_next_body",
    "email_address_label",
    "report_ready_title",
    "report_card_title",
    "report_date_label",
    "report_task_label",
    "report_overall_score_label",
    "report_highest_risk",
    "report_no_scored_categories",
    "report_email_copy_requested",
    "report_download_pdf",
    "report_email_report",
    "report_done",
    "submit_title",
    "submit_option_reuse",
    "submit_option_restart",
    "submit_option_no",
    "submit_copy",
    "submit_button",
    "complete_title",
    "complete_body",
    "complete_next_steps_title",
    "complete_next_step_review",
    "complete_next_step_share",
    "complete_next_step_visit",
    "complete_start_new"
  ];

  for (const language of languages.filter((item) => item.ready)) {
    for (const key of requiredKeys) {
      assert.ok(translations[language.code].app[key], `Missing ${key} for ${language.code}`);
    }
  }
});

function assertTranslationCoverage(languageName: string, translatedQuestions: typeof translations.en.questions) {
  for (const question of questions) {
    const text = translatedQuestions[question.question_id];
    assert.ok(text, `Missing ${languageName} text for question ${question.question_id}`);
    assert.ok(text.label, `Missing ${languageName} label for question ${question.question_id}`);

    for (const option of question.options ?? []) {
      assert.ok(text.options?.[option.option_id], `Missing ${languageName} option label for ${question.question_id}.${option.option_id}`);
    }

    for (const group of question.groups ?? []) {
      const groupText = text.groups?.[group.group_id];
      assert.ok(groupText?.label, `Missing ${languageName} group label for ${question.question_id}.${group.group_id}`);
      for (const option of group.options) {
        assert.ok(groupText.options[option.option_id], `Missing ${languageName} grouped option label for ${question.question_id}.${group.group_id}.${option.option_id}`);
      }
    }
  }
}

function getAnsweredSeatedAssessmentThroughQuestion21(): Answers {
  return {
    "question-6": { type: "multi_choice", value: "mostly_sit" },
    "question-8": { type: "multi_choice", value: "not_at_all" },
    "question-9": { type: "multi_choice", value: "no" },
    "question-20": {
      type: "grouped_multi_choice",
      value: { forward_backward: "never", sideways: "never" }
    },
    "question-21": { type: "multi_choice", value: "never" }
  };
}

function getVisibleAssessmentQuestions(activeTags: string[], answers: Answers) {
  const onboardingQuestionIds = new Set(["question-1", "question-2", "question-3", "question-4"]);
  return getAssessmentQuestions(
    getVisibleQuestions(activeTags).sort((a, b) => sectionOrder.indexOf(a.section) - sectionOrder.indexOf(b.section)),
    onboardingQuestionIds,
    []
  ).filter((question) => question.question_id === "question-22" || !isQuestionAnswered(question, answers[question.question_id]));
}
