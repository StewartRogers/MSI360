import { groupImages, optionImages, promptUsesSectionTitle, questionIds, standaloneImages } from "../../app/questionAssets";
import { AppHeader } from "../components/AppHeader";
import { ActionButtons } from "../components/ActionButtons";
import { CheckboxRow, ImageRadioCard, RadioRow } from "../components/AnswerControls";
import { getActionButtonLabels, getQuestionText } from "../../data/translationText";
import { isRecord, splitParagraphs } from "../../logic/appFlow";
import { setGroupAnswerValue, toggleOption, toggleSingleOption } from "../../logic/answerSelection";
import type { Answer, AnswerValue, Question, QuestionText, Translation } from "../../types";

export function AssessmentQuestionScreen(props: {
  question?: Question;
  answer?: Answer;
  progressStep: number;
  totalSteps: number;
  translations: Translation;
  onAnswer: (value: AnswerValue) => void;
  onBack: () => void;
  canContinue: boolean;
  onContinue: () => void;
}) {
  const actionLabels = getActionButtonLabels(props.translations);

  if (!props.question) {
    return (
      <>
        <AppHeader tone="blue" progressStep={props.progressStep} totalSteps={props.totalSteps} compact />
        <section className="page page-with-actions">
          <div className="content-block">
            <h2>No additional questions are needed.</h2>
          </div>
          <ActionButtons {...actionLabels} onBack={props.onBack} canContinue={props.canContinue} onContinue={props.onContinue} />
        </section>
      </>
    );
  }

  return (
    <>
      <AppHeader tone="blue" progressStep={props.progressStep} totalSteps={props.totalSteps} compact />
      <section className={`page page-with-actions question-page question-${props.question.question_id}`}>
        <QuestionContent question={props.question} answer={props.answer} translations={props.translations} onAnswer={props.onAnswer} />
        <ActionButtons {...actionLabels} onBack={props.onBack} canContinue={props.canContinue} onContinue={props.onContinue} />
      </section>
    </>
  );
}

function QuestionContent({ question, answer, translations: t, onAnswer }: { question: Question; answer?: Answer; translations: Translation; onAnswer: (value: AnswerValue) => void }) {
  const text = getQuestionText(t, question.question_id);
  if (!text) return null;

  return (
    <div className="content-block">
      <QuestionPrompt question={question} text={text} sectionTitle={t.sections[question.section] || question.section} />
      {standaloneImages[question.question_id] && <img className="question-illustration" src={standaloneImages[question.question_id]} alt="" />}
      <QuestionAnswer question={question} text={text} answer={answer} onAnswer={onAnswer} />
    </div>
  );
}

function QuestionPrompt({ question, text, sectionTitle }: { question: Question; text: QuestionText; sectionTitle: string }) {
  const paragraphs = splitParagraphs(text.label);

  if (promptUsesSectionTitle.has(question.question_id) || (question.section !== "intro" && paragraphs[0]?.length > 130)) {
    return (
      <div className="prompt-block">
        <h2>{sectionTitle}</h2>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="question-copy">
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  if (question.question_id === questionIds.bodyDiscomfortAreas) {
    return (
      <div className="prompt-block prompt-as-title">
        {paragraphs.map((paragraph) => (
          <h2 key={paragraph}>{paragraph}</h2>
        ))}
      </div>
    );
  }

  return (
    <div className="prompt-block">
      <h2>{paragraphs[0]}</h2>
      {paragraphs.slice(1).map((paragraph) => (
        <p key={paragraph} className="question-copy">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function QuestionAnswer({ question, text, answer, onAnswer }: { question: Question; text: QuestionText; answer?: Answer; onAnswer: (value: AnswerValue) => void }) {
  if (question.type === "multi_choice" && question.options && text.options) {
    const selected = typeof answer?.value === "string" ? answer.value : "";
    const images = optionImages[question.question_id];

    if (images) {
      return (
        <div className="image-radio-list">
          {question.options.map((option) => (
            <ImageRadioCard
              key={option.option_id}
              name={question.question_id}
              checked={selected === option.option_id}
              label={text.options?.[option.option_id] || option.option_id}
              image={images[option.option_id]}
              onChange={() => onAnswer(toggleSingleOption(selected, option.option_id))}
            />
          ))}
        </div>
      );
    }

    return (
      <div className="answer-list">
        {question.options.map((option) => (
          <RadioRow
            key={option.option_id}
            name={question.question_id}
            checked={selected === option.option_id}
            label={text.options?.[option.option_id] || option.option_id}
            onChange={() => onAnswer(toggleSingleOption(selected, option.option_id))}
          />
        ))}
      </div>
    );
  }

  if (question.type === "select_all" && question.options && text.options) {
    const selected = Array.isArray(answer?.value) ? answer.value : [];
    const hasExclusive = question.options.some((option) => option.exclusive && selected.includes(option.option_id));
    const hasNonExclusive = question.options.some((option) => !option.exclusive && selected.includes(option.option_id));

    return (
      <div className="answer-list">
        {question.options.map((option) => (
          <CheckboxRow
            key={option.option_id}
            checked={selected.includes(option.option_id)}
            disabled={(Boolean(option.exclusive) && hasNonExclusive) || (!option.exclusive && hasExclusive)}
            label={text.options?.[option.option_id] || option.option_id}
            onChange={() => onAnswer(toggleOption(selected, option.option_id, Boolean(option.exclusive)))}
          />
        ))}
      </div>
    );
  }

  if (question.type === "grouped_multi_choice" && question.groups && text.groups) {
    const value = isRecord(answer?.value) ? answer.value : {};
    const images = groupImages[question.question_id] || {};

    return (
      <div className="group-card-list">
        {question.groups.map((group) => {
          const groupAnswer = value[group.group_id];
          const selected = typeof groupAnswer === "string" ? groupAnswer : "";
          return (
            <section key={group.group_id} className="question-card">
              <h3>{text.groups?.[group.group_id]?.label || group.group_id}</h3>
              {images[group.group_id] && <img className="card-image" src={images[group.group_id]} alt="" />}
              <div className="answer-list compact">
                {group.options.map((option) => (
                  <RadioRow
                    key={option.option_id}
                    name={`${question.question_id}-${group.group_id}`}
                    checked={selected === option.option_id}
                    label={text.groups?.[group.group_id]?.options[option.option_id] || option.option_id}
                    onChange={() => onAnswer(setGroupAnswerValue(value, group.group_id, toggleSingleOption(selected, option.option_id)))}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    );
  }

  if (question.type === "grouped_select_all" && question.groups && text.groups) {
    const value = isRecord(answer?.value) ? answer.value : {};

    return (
      <div className="group-card-list">
        {question.groups.map((group) => {
          const groupValue = Array.isArray(value[group.group_id]) ? (value[group.group_id] as string[]) : [];
          return (
            <section key={group.group_id} className="question-card body-part-card">
              <h3>{text.groups?.[group.group_id]?.label || group.group_id}</h3>
              <div className="answer-list compact">
                {group.options.map((option) => (
                  <CheckboxRow
                    key={option.option_id}
                    checked={groupValue.includes(option.option_id)}
                    label={text.groups?.[group.group_id]?.options[option.option_id] || option.option_id}
                    onChange={() => onAnswer(setGroupAnswerValue(value, group.group_id, toggleOption(groupValue, option.option_id, Boolean(option.exclusive))))}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    );
  }

  return null;
}
