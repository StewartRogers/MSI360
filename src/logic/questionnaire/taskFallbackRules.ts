import { taskFallbackConfidence, taskFallbackMissingDetails } from "../../config/aiConfig";
import { tagTaxonomy } from "../../data/tags";
import type { AiOutput } from "../../types";

type FallbackRule = {
  id: string;
  tags: string[];
  patterns: Array<string | RegExp>;
  specificity: "occupation" | "task";
};

const allowedTags = new Set<string>(tagTaxonomy);

const fallbackRules: FallbackRule[] = [
  {
    id: "office-computer-occupations",
    specificity: "occupation",
    tags: ["office_computer", "seated_work", "static_postures", "repetitive_movements", "mouse_intensive"],
    patterns: [
      /\bsoftware developer\b/,
      /\bsoftware engineer\b/,
      /\bprogrammer\b/,
      /\bcoder\b/,
      /\bweb developer\b/,
      /\bdata analyst\b/,
      /\baccountant\b/,
      /\bbookkeeper\b/,
      /\badministrative assistant\b/,
      /\badmin\b/,
      /\bclerical\b/,
      /\breceptionist\b/,
      /\boffice worker\b/,
      /\bdata entry\b/,
      /\bwork from home\b/,
      /\bremote work\b/,
      /\bremote worker\b/
    ]
  },
  {
    id: "office-computer-tasks",
    specificity: "task",
    tags: ["office_computer", "seated_work", "static_postures", "repetitive_movements", "mouse_intensive"],
    patterns: [
      /\bcomputer\b/,
      /\bkeyboard\b/,
      /\bmouse\b/,
      /\bdesk\b/,
      /\bscreen\b/,
      /\bmonitor\b/,
      /\btyping\b/,
      /\bemail\b/,
      /\bspreadsheet\b/,
      /\blaptop\b/
    ]
  },
  {
    id: "telephone-intensive",
    specificity: "task",
    tags: ["office_computer", "seated_work", "static_postures", "telephone_intensive"],
    patterns: [/\bcall center\b/, /\bphone calls?\b/, /\btelephone\b/, /\bheadset\b/, /\bcustomer service\b/, /\bdispatcher\b/]
  },
  {
    id: "laptop-tablet",
    specificity: "task",
    tags: ["office_computer", "laptop_tablet_use", "seated_work", "static_postures"],
    patterns: [/\blaptop\b/, /\btablet\b/, /\bi ?pad\b/]
  },
  {
    id: "dual-monitors",
    specificity: "task",
    tags: ["office_computer", "dual_monitors"],
    patterns: [/\bdual monitors?\b/, /\btwo monitors?\b/, /\bmultiple monitors?\b/]
  },
  {
    id: "warehouse-material-handling",
    specificity: "occupation",
    tags: ["manual_handling", "standing_work", "walking_moving"],
    patterns: [
      /\bwarehouse\b/,
      /\bstocker\b/,
      /\bstocking\b/,
      /\bshipping\b/,
      /\breceiving\b/,
      /\border picker\b/,
      /\bmaterial handler\b/,
      /\bbaggage handler\b/,
      /\bmover\b/
    ]
  },
  {
    id: "lifting-lowering",
    specificity: "task",
    tags: ["manual_handling", "lifting_lowering"],
    patterns: [/\blift(ing|s|ed)?\b/, /\blower(ing|s|ed)?\b/, /\bunload(ing|s|ed)?\b/, /\bload(ing|s|ed)?\b/]
  },
  {
    id: "carrying",
    specificity: "task",
    tags: ["manual_handling", "carrying"],
    patterns: [/\bcarry(ing|ies|ied)?\b/, /\btransport(ing|s|ed)?\b/, /\bmove boxes\b/, /\bpackages?\b/, /\bboxes\b/, /\bcrates?\b/, /\btotes?\b/]
  },
  {
    id: "heavy-loads",
    specificity: "task",
    tags: ["heavy_loads"],
    patterns: [/\bheavy\b/, /\b\d+(\.\d+)?\s?(lb|lbs|pound|pounds|kg|kgs|kilogram|kilograms)\b/]
  },
  {
    id: "pushing-pulling",
    specificity: "task",
    tags: ["pushing_pulling"],
    patterns: [/\bpush(ing|es|ed)?\b/, /\bpull(ing|s|ed)?\b/, /\bcart\b/, /\bdolly\b/, /\bpallet jack\b/, /\bwheelbarrow\b/, /\bdrag(ging|s|ged)?\b/]
  },
  {
    id: "awkward-or-hard-loads",
    specificity: "task",
    tags: ["awkward_loads"],
    patterns: [/\bawkward load\b/, /\bbulky\b/, /\boversized\b/, /\bodd shaped\b/, /\buneven load\b/]
  },
  {
    id: "load-handles",
    specificity: "task",
    tags: ["no_handles"],
    patterns: [/\bno handles?\b/, /\bwithout handles?\b/, /\bhard to grip\b/]
  },
  {
    id: "mechanical-aids",
    specificity: "task",
    tags: ["lack_of_mechanical_aids"],
    patterns: [/\bno hoist\b/, /\bno lift assist\b/, /\bno mechanical aid\b/]
  },
  {
    id: "trades-and-maintenance",
    specificity: "occupation",
    tags: ["tool_use", "standing_work", "walking_moving"],
    patterns: [
      /\bconstruction\b/,
      /\bcarpenter\b/,
      /\bplumber\b/,
      /\belectrician\b/,
      /\bmechanic\b/,
      /\bmaintenance\b/,
      /\brepair\b/,
      /\binstaller\b/,
      /\binstallation\b/
    ]
  },
  {
    id: "tool-use",
    specificity: "task",
    tags: ["tool_use"],
    patterns: [
      /\btool(s)?\b/,
      /\bdrill(s|ing|ed)?\b/,
      /\bhammer\b/,
      /\bwrench\b/,
      /\bscrewdriver\b/,
      /\bsaw\b/,
      /\bgrinder\b/,
      /\bsander\b/,
      /\bequipment\b/,
      /\bmachine\b/,
      /\blawnmower\b/,
      /\bknife\b/
    ]
  },
  {
    id: "vibrating-tools",
    specificity: "task",
    tags: ["tool_use", "vibrating_tools"],
    patterns: [/\bvibrat(ing|ion|e|es)\b/, /\bjackhammer\b/, /\bimpact wrench\b/, /\bpneumatic\b/, /\bgrinder\b/, /\bsander\b/, /\bchainsaw\b/]
  },
  {
    id: "grip-force",
    specificity: "task",
    tags: ["power_grip"],
    patterns: [/\bpower grip\b/, /\bfirm grip\b/, /\bgrip handle\b/, /\bsqueeze trigger\b/, /\bwrap my hand\b/, /\bwrap hand\b/]
  },
  {
    id: "pinch-grip",
    specificity: "task",
    tags: ["pinch_grip"],
    patterns: [/\bpinch\b/, /\btweezers?\b/, /\bsmall parts?\b/, /\bfine assembly\b/]
  },
  {
    id: "wrist-posture",
    specificity: "task",
    tags: ["wrist_bending"],
    patterns: [/\bwrist\b/, /\bbend my hand\b/, /\bawkward hand\b/, /\bhand position\b/]
  },
  {
    id: "healthcare-caregiving",
    specificity: "occupation",
    tags: ["standing_work", "walking_moving", "manual_handling"],
    patterns: [/\bnurse\b/, /\bcare aide\b/, /\bcaregiver\b/, /\bhealthcare\b/, /\bhospital\b/, /\blong term care\b/, /\bpatient care\b/]
  },
  {
    id: "patient-handling",
    specificity: "task",
    tags: ["manual_handling", "lifting_lowering", "pushing_pulling"],
    patterns: [/\bpatient transfer\b/, /\btransfer(s|ring|red)? patients?\b/, /\blift(s|ing|ed)? patients?\b/, /\breposition(s|ing|ed)? patients?\b/, /\bwheelchair\b/, /\bgurney\b/]
  },
  {
    id: "cleaning",
    specificity: "occupation",
    tags: ["standing_work", "walking_moving", "repetitive_movements", "bending_trunk", "tool_use"],
    patterns: [/\bjanitor\b/, /\bcleaner\b/, /\bcleaning\b/, /\bmop(ping)?\b/, /\bsweep(ing)?\b/, /\bvacuum(ing)?\b/, /\bscrub(bing)?\b/]
  },
  {
    id: "food-service",
    specificity: "occupation",
    tags: ["standing_work", "walking_moving", "repetitive_movements"],
    patterns: [/\bfood service\b/, /\bcook\b/, /\bkitchen\b/, /\bserver\b/, /\bdishwasher\b/, /\bfood prep\b/, /\bprep cook\b/]
  },
  {
    id: "retail",
    specificity: "occupation",
    tags: ["standing_work", "walking_moving", "repetitive_movements", "reaching_forward"],
    patterns: [/\bretail\b/, /\bcashier\b/, /\bsales associate\b/, /\bshelf\b/, /\bscan items?\b/]
  },
  {
    id: "manufacturing",
    specificity: "occupation",
    tags: ["standing_work", "static_postures", "repetitive_movements", "tool_use"],
    patterns: [/\bmanufacturing\b/, /\bassembly line\b/, /\bproduction line\b/, /\bpacking\b/, /\bsorting\b/, /\bmachine operator\b/, /\bassembly\b/]
  },
  {
    id: "repetitive-work",
    specificity: "task",
    tags: ["repetitive_movements"],
    patterns: [/\brepeat(ed|edly|ing|s)?\b/, /\brepetitive\b/, /\btyping\b/, /\bscan items?\b/, /\bassembly\b/]
  },
  {
    id: "landscaping",
    specificity: "occupation",
    tags: ["outdoor_work", "walking_moving", "tool_use", "manual_handling", "repetitive_movements", "bending_trunk"],
    patterns: [/\blandscap(ing|er)\b/, /\bgardening\b/, /\bmowing\b/, /\bshovel(ing)?\b/, /\brak(e|ing)\b/, /\bweed whacker\b/]
  },
  {
    id: "driving-equipment",
    specificity: "occupation",
    tags: ["seated_work", "static_postures", "tool_use"],
    patterns: [/\bdriver\b/, /\bdriving\b/, /\btruck\b/, /\bforklift\b/, /\bloader\b/, /\btractor\b/, /\bdelivery\b/]
  },
  {
    id: "overhead-work",
    specificity: "task",
    tags: ["overhead_work"],
    patterns: [/\boverhead\b/, /\babove shoulder\b/, /\bceiling\b/, /\bhigh shelf\b/]
  },
  {
    id: "reaching-forward",
    specificity: "task",
    tags: ["reaching_forward"],
    patterns: [/\breach(ing|es|ed)?\b/, /\boutstretched\b/, /\bextended arm\b/]
  },
  {
    id: "low-kneeling-work",
    specificity: "task",
    tags: ["low_work", "kneeling_squatting"],
    patterns: [/\bkneel(ing|s|ed)?\b/, /\bsquat(ting|s|ted)?\b/, /\bcrouch(ing|es|ed)?\b/, /\bfloors?\b/, /\blow shelf\b/, /\bbelow knee\b/]
  },
  {
    id: "bending-trunk",
    specificity: "task",
    tags: ["bending_trunk"],
    patterns: [/\bbend(ing|s|ed)?\b/, /\blean(ing|s|ed)?\b/, /\bstoop(ing|s|ed)?\b/]
  },
  {
    id: "twisting",
    specificity: "task",
    tags: ["twisting"],
    patterns: [/\btwist(ing|s|ed)?\b/, /\brotate(ing|s|d)?\b/, /\bturn my torso\b/]
  },
  {
    id: "static-standing-sitting",
    specificity: "task",
    tags: ["static_postures"],
    patterns: [/\bsit(ting)? all day\b/, /\bstand(ing)? all day\b/, /\blong periods?\b/, /\bsame position\b/, /\bstationary\b/]
  },
  {
    id: "standing-moving",
    specificity: "task",
    tags: ["standing_work", "walking_moving"],
    patterns: [/\bstand(ing)?\b/, /\bwalking\b/, /\bwalk around\b/, /\bon my feet\b/, /\bmoving around\b/]
  },
  {
    id: "sharp-edge-contact",
    specificity: "task",
    tags: ["sharp_edges"],
    patterns: [/\bsharp edges?\b/, /\bhard edges?\b/, /\bcounter edge\b/]
  },
  {
    id: "body-as-tool",
    specificity: "task",
    tags: ["body_as_tool"],
    patterns: [/\buse my palm\b/, /\buse my knee\b/, /\bhand as a hammer\b/, /\bbody as a tool\b/]
  },
  {
    id: "fine-visual-work",
    specificity: "task",
    tags: ["fine_visual_work"],
    patterns: [/\binspect(ing|ion|or|ors|s)?\b/, /\bquality control\b/, /\bfine detail\b/, /\bsmall print\b/, /\bmicroscope\b/, /\bsolder(ing)?\b/]
  },
  {
    id: "outdoor-work",
    specificity: "task",
    tags: ["outdoor_work"],
    patterns: [/\boutdoor(s)?\b/, /\boutside\b/]
  },
  {
    id: "cold-environment",
    specificity: "task",
    tags: ["cold_environment"],
    patterns: [/\bcold\b/, /\bfreezer\b/, /\brefrigerated\b/]
  },
  {
    id: "noise-exposure",
    specificity: "task",
    tags: ["noise_exposure"],
    patterns: [/\bnoise\b/, /\bloud\b/]
  },
  {
    id: "glare-exposure",
    specificity: "task",
    tags: ["glare_exposure"],
    patterns: [/\bglare\b/, /\bsun\b/, /\breflection\b/]
  },
  {
    id: "poor-lighting",
    specificity: "task",
    tags: ["poor_lighting"],
    patterns: [/\bpoor lighting\b/, /\bdim\b/, /\bdark\b/]
  },
  {
    id: "uneven-surfaces",
    specificity: "task",
    tags: ["uneven_surfaces"],
    patterns: [/\brough ground\b/, /\buneven surfaces?\b/, /\buneven ground\b/, /\bgravel\b/]
  },
  {
    id: "tight-deadlines",
    specificity: "task",
    tags: ["tight_deadlines"],
    patterns: [/\bdeadline(s)?\b/, /\brush(ed|ing)?\b/]
  },
  {
    id: "fast-work-rate",
    specificity: "task",
    tags: ["fast_work_rate"],
    patterns: [/\bquota(s)?\b/, /\bfast pace(d)?\b/, /\bpiece rate\b/]
  },
  {
    id: "overtime",
    specificity: "task",
    tags: ["overtime"],
    patterns: [/\bovertime\b/]
  },
  {
    id: "low-task-variability",
    specificity: "task",
    tags: ["low_task_variability"],
    patterns: [/\bsame task\b/, /\blow variety\b/]
  },
  {
    id: "inadequate-recovery",
    specificity: "task",
    tags: ["inadequate_recovery_time"],
    patterns: [/\bno breaks?\b/, /\bnot enough breaks?\b/]
  }
];

/**
 * English-only local fallback used when Gemini cannot interpret Q3.
 *
 * The rules intentionally add routing tags only. They do not score, answer, or
 * hide questions; downstream code still filters against the question's allowed
 * tags before committing the output.
 */
export function interpretTaskDescriptionFallback(text: string): Omit<AiOutput, "provider"> {
  const normalizedText = normalizeTaskText(text);
  const matchedRules = fallbackRules.filter((rule) => matchesRule(normalizedText, rule));
  const tags = uniqueAllowedTags(matchedRules.flatMap((rule) => rule.tags));
  const missingDetails = buildMissingDetails(text, normalizedText, tags, matchedRules);

  return {
    normalized_answer_en: text,
    add_tags: tags,
    missing_details: missingDetails,
    confidence: getFallbackConfidence(tags, matchedRules),
    notes: getFallbackNotes(tags, matchedRules)
  };
}

function matchesRule(normalizedText: string, rule: FallbackRule) {
  return rule.patterns.some((pattern) => (typeof pattern === "string" ? includesPhrase(normalizedText, pattern) : pattern.test(normalizedText)));
}

function includesPhrase(normalizedText: string, phrase: string) {
  return ` ${normalizedText} `.includes(` ${normalizeTaskText(phrase)} `);
}

function uniqueAllowedTags(tags: string[]) {
  return [...new Set(tags)].filter((tag) => allowedTags.has(tag));
}

function buildMissingDetails(originalText: string, normalizedText: string, tags: string[], matchedRules: FallbackRule[]) {
  const details: string[] = [];

  const needsLoadDetail =
    hasAnyTag(tags, ["lifting_lowering", "carrying", "pushing_pulling", "heavy_loads", "awkward_loads", "no_handles", "lack_of_mechanical_aids"]) ||
    (tags.includes("manual_handling") && hasLoadCue(normalizedText));
  if (needsLoadDetail && !hasWeightDetail(originalText)) details.push(taskFallbackMissingDetails.objectWeight);

  const needsDurationDetail = hasAnyTag(tags, [
    "repetitive_movements",
    "static_postures",
    "tool_use",
    "vibrating_tools",
    "cold_environment",
    "noise_exposure",
    "glare_exposure",
    "poor_lighting",
    "overtime",
    "tight_deadlines",
    "fast_work_rate",
    "inadequate_recovery_time"
  ]);
  if (needsDurationDetail && !hasFrequencyOrDurationDetail(originalText)) details.push(taskFallbackMissingDetails.frequencyOrDuration);

  if (matchedRules.length > 0 && matchedRules.every((rule) => rule.specificity === "occupation")) {
    details.push(taskFallbackMissingDetails.taskSpecifics);
  }

  return [...new Set(details)];
}

function hasAnyTag(tags: string[], candidates: string[]) {
  return candidates.some((candidate) => tags.includes(candidate));
}

function hasLoadCue(normalizedText: string) {
  return /\b(load|loads|box|boxes|package|packages|crate|crates|cart|dolly|pallet|patient|material|stock)\b/.test(normalizedText);
}

function hasWeightDetail(text: string) {
  return /\b\d+(\.\d+)?\s?(lb|lbs|pound|pounds|kg|kgs|kilogram|kilograms|kilo|kilos)\b/i.test(text);
}

function hasFrequencyOrDurationDetail(text: string) {
  return /\b(hour|hours|minute|minutes|daily|shift|shifts|day|days|all day|every|times|constantly|throughout|weekly|month|months)\b/i.test(text);
}

function getFallbackConfidence(tags: string[], matchedRules: FallbackRule[]) {
  if (!tags.length) return taskFallbackConfidence.none;
  return matchedRules.some((rule) => rule.specificity === "task") ? taskFallbackConfidence.taskCue : taskFallbackConfidence.occupationOnly;
}

function getFallbackNotes(tags: string[], matchedRules: FallbackRule[]) {
  if (!tags.length) return "No clear English MSI tags detected.";
  if (matchedRules.every((rule) => rule.specificity === "occupation")) return "Local English fallback inferred broad MSI routing tags from the job or work setting.";
  return "Local English fallback detected likely MSI routing tags.";
}

function normalizeTaskText(text: string) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/'/g, "")
    .replace(/[-_/]/g, " ")
    .replace(/[^a-z0-9.+#\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
