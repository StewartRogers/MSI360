import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

/**
 * Translator worksheet round trip.
 *
 *   node scripts/translation-sheet.mjs export <lang-code> <out.csv>
 *   node scripts/translation-sheet.mjs import <lang-code> <in.csv> <fileName>
 *
 * `export` writes one CSV row per English string with a "where shown" hint and
 * any existing translation for <lang-code>. A translator fills the
 * `translation` column (in Excel, Google Sheets, or similar) and leaves cells
 * blank where they have no translation.
 *
 * `import` turns that CSV into `src/data/translations/<fileName>.ts`. Blank
 * cells fall back to English through `withEnglishFallback`, so a partially
 * translated sheet still produces a working language. Registering the file in
 * `translations/index.ts` and `languages.ts` stays a manual step.
 */
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const [command, code, csvPath, fileName] = process.argv.slice(2);

if (command === "export" && code && csvPath) {
  const { translations } = await loadTranslations();
  writeFileSync(resolve(csvPath), exportSheet(translations.en, translations[code]));
  console.log(`Wrote ${csvPath}`);
} else if (command === "import" && code && csvPath && fileName) {
  const target = join(root, "src", "data", "translations", `${fileName}.ts`);
  writeFileSync(target, importSheet(readFileSync(resolve(csvPath), "utf8"), fileName));
  console.log(`Wrote ${target}`);
} else {
  console.error("Usage:\n  export <lang-code> <out.csv>\n  import <lang-code> <in.csv> <fileName>");
  process.exit(1);
}

async function loadTranslations() {
  const outDir = join(root, "tmp", "translation-sheet");
  mkdirSync(outDir, { recursive: true });
  const outfile = join(outDir, "translations.mjs");
  await build({ entryPoints: [join(root, "src", "data", "translations", "index.ts")], bundle: true, platform: "node", format: "esm", outfile, logLevel: "error" });
  return import(`${outfile}?t=${Date.now()}`);
}

function exportSheet(en, localized) {
  const rows = [["key", "where_shown", "english", "translation"]];
  const add = (key, where, english, current) => {
    const note = english.includes("{") ? " Keep {placeholders} unchanged." : "";
    rows.push([key, where + note, english, current && current !== english ? current : ""]);
  };

  for (const [key, value] of Object.entries(en.app)) add(`app.${key}`, describeAppKey(key), value, localized?.app[key]);
  for (const [key, value] of Object.entries(en.sections)) add(`sections.${key}`, "Section heading", value, localized?.sections[key]);
  for (const [questionId, question] of Object.entries(en.questions)) {
    const current = localized?.questions[questionId];
    const name = questionId.replace("question-", "Question ");
    add(`questions.${questionId}.label`, `${name}: question text`, question.label, current?.label);
    if (question.help_text) add(`questions.${questionId}.help_text`, `${name}: help text under the question`, question.help_text, current?.help_text);
    for (const [optionId, value] of Object.entries(question.options || {})) {
      add(`questions.${questionId}.options.${optionId}`, `${name}: answer option`, value, current?.options?.[optionId]);
    }
    for (const [groupId, group] of Object.entries(question.groups || {})) {
      const currentGroup = current?.groups?.[groupId];
      add(`questions.${questionId}.groups.${groupId}.label`, `${name}: answer group heading`, group.label, currentGroup?.label);
      for (const [optionId, value] of Object.entries(group.options)) {
        add(`questions.${questionId}.groups.${groupId}.options.${optionId}`, `${name}: answer option in "${group.label}"`, value, currentGroup?.options[optionId]);
      }
    }
  }

  // Byte order mark so Excel opens the file as UTF-8 and keeps diacritics.
  return "﻿" + rows.map((row) => row.map(csvCell).join(",")).join("\r\n") + "\r\n";
}

function describeAppKey(key) {
  const screens = {
    score: "Score summary screen",
    wrap: "Wrap-up tabs",
    email: "Email screen",
    report: "Report ready screen",
    submit: "Submit screen",
    complete: "Completion screen",
    description: "Description screen",
    ai: "AI status message",
    language: "Language screen",
    assessment: "Assessment screen"
  };
  return screens[key.split("_")[0]] || "Shared buttons and labels";
}

function importSheet(text, fileName) {
  const [header, ...rows] = parseCsv(text.replace(/^﻿/, ""));
  const keyIndex = header.indexOf("key");
  const translationIndex = header.indexOf("translation");
  if (keyIndex < 0 || translationIndex < 0) throw new Error("CSV needs 'key' and 'translation' columns.");

  const partial = {};
  for (const row of rows) {
    const key = row[keyIndex];
    const value = (row[translationIndex] || "").trim();
    if (!key || !value) continue;
    setPath(partial, key.split("."), value.normalize("NFC"));
  }

  const variableName = fileName.replace(/[-_](\w)/g, (_, letter) => letter.toUpperCase());
  return [
    'import type { Translation } from "../../types";',
    'import { withEnglishFallback } from "./withEnglishFallback";',
    "",
    `// Generated by scripts/translation-sheet.mjs. Untranslated strings fall back to English.`,
    `export const ${variableName}: Translation = withEnglishFallback(${JSON.stringify(partial, null, 2)});`,
    ""
  ].join("\n");
}

function setPath(target, path, value) {
  let node = target;
  for (const segment of path.slice(0, -1)) node = node[segment] ??= {};
  node[path.at(-1)] = value;
}

function csvCell(value) {
  return /[",\r\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value;
}

/**
 * Minimal RFC 4180 parser: quoted cells, escaped quotes, and embedded newlines.
 */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < text.length; index++) {
    const char = text[index];
    if (quoted) {
      if (char === '"' && text[index + 1] === '"') {
        cell += '"';
        index++;
      } else if (char === '"') {
        quoted = false;
      } else {
        cell += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(cell);
      cell = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && text[index + 1] === "\n") index++;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  if (cell || row.length) rows.push([...row, cell]);
  return rows.filter((items) => items.some((item) => item !== ""));
}
