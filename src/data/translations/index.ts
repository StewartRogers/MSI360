import type { Translation } from "../../types";
import { af } from "./af";
import { ar } from "./ar";
import { bn } from "./bn";
import { ceb } from "./ceb";
import { cs } from "./cs";
import { da } from "./da";
import { de } from "./de";
import { el } from "./el";
import { en } from "./en";
import { es } from "./es";
import { fa } from "./fa";
import { faNos } from "./faNos";
import { fil } from "./fil";
import { fr } from "./fr";
import { gu } from "./gu";
import { hi } from "./hi";
import { hr } from "./hr";
import { hu } from "./hu";
import { id } from "./id";
import { ilo } from "./ilo";
import { it } from "./it";
import { ja } from "./ja";
import { ko } from "./ko";
import { ml } from "./ml";
import { nan } from "./nan";
import { nl } from "./nl";
import { pa } from "./pa";
import { pl } from "./pl";
import { prs } from "./prs";
import { pt } from "./pt";
import { ro } from "./ro";
import { ru } from "./ru";
import { sr } from "./sr";
import { ta } from "./ta";
import { tr } from "./tr";
import { uk } from "./uk";
import { ur } from "./ur";
import { vi } from "./vi";
import { yue } from "./yue";
import { zhHans } from "./zhHans";

export const translations: Record<string, Translation> = {
  en,
  pa,
  "zh-Hans": zhHans,
  yue,
  fil,
  fr,
  es,
  ko,
  de,
  fa,
  hi,
  vi,
  ru,
  ar,
  pt,
  ja,
  it,
  nl,
  pl,
  nan,
  ur,
  gu,
  ro,
  uk,
  hu,
  sr,
  ilo,
  hr,
  prs,
  ta,
  el,
  cs,
  "fa-x-nos": faNos,
  ml,
  bn,
  tr,
  ceb,
  id,
  af,
  da
};
