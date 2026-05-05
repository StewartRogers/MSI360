const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function readProjectFile(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function stripLineComments(source) {
  return source
    .split(/\r?\n/)
    .filter((line) => !line.trimStart().startsWith("//"))
    .join("\n");
}

const questionsSource = stripLineComments(readProjectFile("src/data/questions.ts"));
const englishSource = readProjectFile("src/data/translations/en.ts");

const expectedQuestionIds = [
  "question-1",
  "question-2",
  "question-3",
  "question-4",
  ...Array.from({ length: 37 }, (_, index) => `question-${index + 6}`)
];
const documentedQuestionIds = Array.from({ length: 42 }, (_, index) => `question-${index + 1}`);

const activeQuestionIds = Array.from(questionsSource.matchAll(/question_id:\s*"([^"]+)"/g), (match) => match[1]);

assert.deepEqual(activeQuestionIds, expectedQuestionIds, "Question IDs must match the source document labels.");

for (const questionId of documentedQuestionIds) {
  assert.match(englishSource, new RegExp(`"${questionId}":\\s*{`), `Missing English question text for ${questionId}.`);
}

const tagArrays = Array.from(questionsSource.matchAll(/(?:display_condition_tags|add_tags):\s*\[([^\]]*)\]/g), (match) => match[1]);

for (const tagArray of tagArrays) {
  for (const match of tagArray.matchAll(/"([^"]+)"/g)) {
    assert.ok(!match[1].startsWith("question-"), `Question ID "${match[1]}" should not be used as a tag.`);
  }
}

console.log("Question data invariants passed.");
