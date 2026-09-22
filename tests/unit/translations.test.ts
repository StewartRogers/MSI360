/**
 * Unit coverage for translation bundle completeness and language registry
 * alignment.
 */
import test from "node:test";
import assert from "node:assert/strict";
import { languages } from "../../src/data/languages";
import { translations } from "../../src/data/translations";

/**
 * Flattens a nested translation object into dotted key paths with non-empty
 * string values only, so blank strings count as missing.
 */
function collectKeys(value: unknown, prefix = ""): string[] {
  if (typeof value === "string") return value.trim() ? [prefix] : [];
  if (!value || typeof value !== "object") return [];
  return Object.entries(value).flatMap(([key, child]) => collectKeys(child, prefix ? `${prefix}.${key}` : key));
}

const englishKeys = collectKeys(translations.en);

test("every ready language has a translation bundle and every bundle is listed", () => {
  const bundleCodes = Object.keys(translations).sort();
  const readyCodes = languages.filter((language) => language.ready).map((language) => language.code).sort();
  const listedCodes = languages.map((language) => language.code).sort();

  assert.deepEqual(readyCodes.filter((code) => !translations[code]), []);
  assert.deepEqual(bundleCodes.filter((code) => !listedCodes.includes(code)), []);
});

for (const [code, translation] of Object.entries(translations)) {
  if (code === "en") continue;

  test(`${code} translation covers every English key`, () => {
    const keys = new Set(collectKeys(translation));
    assert.deepEqual(englishKeys.filter((key) => !keys.has(key)), []);
  });

  test(`${code} translation has no keys missing from English`, () => {
    const english = new Set(englishKeys);
    assert.deepEqual(collectKeys(translation).filter((key) => !english.has(key)), []);
  });
}

test("partial translations keep localized text and fall back to English elsewhere", () => {
  const halkomelem = translations.hur;

  assert.ok(halkomelem.app.language_title.includes("hən̓q̓əmin̓əm̓"));
  assert.equal(halkomelem.app.language_title, halkomelem.app.language_title.normalize("NFC"));
  assert.equal(halkomelem.app.continue_button, translations.en.app.continue_button);
  assert.deepEqual(halkomelem.questions["question-1"], translations.en.questions["question-1"]);
});
