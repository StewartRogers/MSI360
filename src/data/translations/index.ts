import type { Translation } from "../../types";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { ko } from "./ko";
import { vi } from "./vi";
import { zhHans } from "./zhHans";

export const translations: Record<string, Translation> = {
  en,
  fr,
  "zh-Hans": zhHans,
  es,
  ko,
  vi
};
