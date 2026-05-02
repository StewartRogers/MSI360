import type { Language, Question } from "../types";

export const riskFactors = ["contact_stress", "force", "awkward_posture", "repetition", "environmental", "symptoms"] as const;

export const sectionOrder = [
  "intro",
  "symptoms",
  "contact_stress",
  "force",
  "awkward_postures",
  "repetition",
  "environmental",
  "organizational"
];

export const tagTaxonomy = [
  "start",
  "office_computer",
  "desk_based",
  "seated_work",
  "standing_work",
  "walking_moving",
  "manual_handling",
  "lifting_carrying",
  "pushing_pulling",
  "heavy_loads",
  "tool_use",
  "powered_tools",
  "vibrating_tools",
  "kneeling_floor_work",
  "sharp_edges",
  "body_as_tool",
  "gripping",
  "pinch_grip",
  "power_grip",
  "wrist_hand_work",
  "repetitive_work",
  "reaching_forward",
  "overhead_work",
  "low_work",
  "twisting",
  "bending_trunk",
  "fine_visual_work",
  "screen_work",
  "glare_exposure",
  "outdoor_work",
  "cold_environment",
  "noise_exposure",
  "tight_deadlines",
  "overtime",
  "low_task_variability",
  "reported_discomfort",
  "organizational_context"
];

export const languages: Language[] = [
  { code: "en", name: "English", flag: "🇨🇦", ready: true },
  { code: "fr", name: "French", flag: "🇫🇷", ready: false },
  { code: "zh-Hans", name: "Chinese", flag: "🇨🇳", ready: false },
  { code: "es", name: "Spanish", flag: "🇪🇸", ready: false },
  { code: "ko", name: "Korean", flag: "🇰🇷", ready: false },
  { code: "vi", name: "Vietnamese", flag: "🇻🇳", ready: false }
];

export const questions: Question[] = [
  {
    question_id: "role",
    section: "intro",
    display_condition_tags: [],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "worker", risk_scores: {} },
      { option_id: "supervisor", risk_scores: {}, add_tags: ["organizational_context"] },
      { option_id: "manager", risk_scores: {}, add_tags: ["organizational_context"] },
      { option_id: "employer", risk_scores: {}, add_tags: ["organizational_context"] },
      { option_id: "health_safety_committee", risk_scores: {}, add_tags: ["organizational_context"] }
    ]
  },
  {
    question_id: "time_in_role",
    section: "intro",
    display_condition_tags: [],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "less_than_year", risk_scores: {} },
      { option_id: "one_to_five", risk_scores: {} },
      { option_id: "six_to_ten", risk_scores: {} },
      { option_id: "more_than_ten", risk_scores: {} }
    ]
  },
  {
    question_id: "task_description",
    section: "intro",
    display_condition_tags: [],
    required: true,
    type: "text",
    ai_instructions: {
      purpose: "extract_task_tags",
      prompt: "Identify MSI risk factor tags from the worker's description of the task being assessed.",
      allowed_add_tags: tagTaxonomy,
      expected_fields: ["task_summary_en", "loads", "frequency", "duration", "postures", "tools", "environment"],
      confidence_threshold: 0.7
    }
  },
  {
    question_id: "height",
    section: "intro",
    display_condition_tags: [],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "under_5_4", risk_scores: {} },
      { option_id: "5_4_to_5_9", risk_scores: {} },
      { option_id: "5_10_to_6_2", risk_scores: {} },
      { option_id: "over_6_2", risk_scores: {} },
      { option_id: "prefer_not_to_say", risk_scores: {} }
    ]
  },
  {
    question_id: "job_setup",
    section: "intro",
    display_condition_tags: [],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "office_clerical", risk_scores: {}, add_tags: ["office_computer", "desk_based", "seated_work", "screen_work"] },
      { option_id: "not_desk_based", risk_scores: {}, add_tags: ["standing_work", "walking_moving", "manual_handling"] },
      { option_id: "both_setups", risk_scores: {}, add_tags: ["office_computer", "standing_work", "walking_moving", "manual_handling"] }
    ]
  },
  {
    question_id: "recent_discomfort",
    section: "symptoms",
    display_condition_tags: [],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "yes", risk_scores: { symptoms: 3 }, add_tags: ["reported_discomfort"] },
      { option_id: "no", risk_scores: { symptoms: 1 } }
    ]
  },
  {
    question_id: "object_weight",
    section: "force",
    display_condition_tags: ["manual_handling", "lifting_carrying", "heavy_loads", "tool_use"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "less_than_5_lb", risk_scores: { force: 1 } },
      { option_id: "5_to_18_lb", risk_scores: { force: 2 }, add_tags: ["lifting_carrying"] },
      { option_id: "more_than_18_lb", risk_scores: { force: 3 }, add_tags: ["heavy_loads", "lifting_carrying"] },
      { option_id: "does_not_apply", risk_scores: {} }
    ]
  },
  {
    question_id: "repetitive_movements_duration",
    section: "repetition",
    display_condition_tags: ["repetitive_work", "office_computer", "manual_handling", "wrist_hand_work"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "less_than_30_min", risk_scores: { repetition: 1 } },
      { option_id: "30_min_to_2_hours", risk_scores: { repetition: 2 }, add_tags: ["repetitive_work"] },
      { option_id: "2_to_4_hours", risk_scores: { repetition: 3 }, add_tags: ["repetitive_work"] },
      { option_id: "more_than_4_hours", risk_scores: { repetition: 4 }, add_tags: ["repetitive_work"] }
    ]
  },
  {
    question_id: "environmental_conditions",
    section: "environmental",
    display_condition_tags: [],
    required: true,
    type: "grouped_multi_choice",
    groups: [
      {
        group_id: "noise_distraction",
        options: [
          { option_id: "frequently", risk_scores: { environmental: 3 }, add_tags: ["noise_exposure"] },
          { option_id: "sometimes", risk_scores: { environmental: 2 } },
          { option_id: "no", risk_scores: {} }
        ]
      },
      {
        group_id: "tight_deadlines",
        options: [
          { option_id: "frequently", risk_scores: { environmental: 3 }, add_tags: ["tight_deadlines"] },
          { option_id: "sometimes", risk_scores: { environmental: 2 } },
          { option_id: "rarely", risk_scores: { environmental: 1 } },
          { option_id: "never", risk_scores: {} }
        ]
      }
    ]
  }
];
