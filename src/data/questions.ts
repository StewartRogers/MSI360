import type { Question } from "../types";
import { tagTaxonomy } from "./tags";

export const questions: Question[] = [
  {
    question_id: "question-1",
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
    question_id: "question-2",
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
    question_id: "question-3",
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
    question_id: "question-4",
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
  // removing this question for now, as it was made redundant by the task_description question
  // {
  //   question_id: "question-5",
  //   section: "intro",
  //   display_condition_tags: [],
  //   required: true,
  //   type: "multi_choice",
  //   options: [
  //     { option_id: "office_clerical", risk_scores: {}, add_tags: ["office_computer", "desk_based", "seated_work", "screen_work"] },
  //     { option_id: "not_desk_based", risk_scores: {}, add_tags: ["standing_work", "walking_moving", "manual_handling"] },
  //     { option_id: "both_setups", risk_scores: {}, add_tags: ["office_computer", "standing_work", "walking_moving", "manual_handling"] }
  //   ]
  // },
  {
    question_id: "question-6",
    section: "intro",
    display_condition_tags: [],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "mostly_sit", risk_scores: {}, add_tags: ["seated_work", "desk_based"] },
      { option_id: "mostly_stand_move", risk_scores: {}, add_tags: ["standing_work", "walking_moving", "manual_handling"] },
      { option_id: "sit_and_stand", risk_scores: {}, add_tags: ["seated_work", "standing_work", "walking_moving"] }
    ]
  },
  {
    question_id: "question-7",
    section: "organizational",
    display_condition_tags: ["office_computer", "manual_handling", "tool_use", "vibrating_tools", "lack_of_mechanical_aids", "no_handles", "awkward_loads"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "great_extent", risk_scores: {} },
      { option_id: "some_extent", risk_scores: {} },
      { option_id: "rarely", risk_scores: {} },
      { option_id: "not_at_all", risk_scores: {} }
    ]
  },
  {
    question_id: "question-8",
    section: "organizational",
    display_condition_tags: ["office_computer", "manual_handling", "seated_work", "standing_work", "walking_moving", "low_task_variability", "fast_work_rate", "inadequate_recovery_time"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "great_extent", risk_scores: {} },
      { option_id: "some_extent", risk_scores: {} },
      { option_id: "rarely", risk_scores: {} },
      { option_id: "not_at_all", risk_scores: {} }
    ]
  },
  {
    question_id: "question-9",
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
    question_id: "question-10",
    section: "symptoms",
    display_condition_tags: ["reported_discomfort"],
    required: true,
    type: "grouped_select_all",
    groups: [
      {
        group_id: "neck",
        options: [
          { option_id: "one_side", risk_scores: { symptoms: 2 } },
          { option_id: "both_sides", risk_scores: { symptoms: 3 } },
          { option_id: "lasted_two_days", risk_scores: { symptoms: 3 } }
        ]
      },
      {
        group_id: "shoulders_upper_arms",
        options: [
          { option_id: "one_side", risk_scores: { symptoms: 2 } },
          { option_id: "both_sides", risk_scores: { symptoms: 3 } },
          { option_id: "lasted_two_days", risk_scores: { symptoms: 3 } }
        ]
      },
      {
        group_id: "elbows_forearms",
        options: [
          { option_id: "one_side", risk_scores: { symptoms: 2 } },
          { option_id: "both_sides", risk_scores: { symptoms: 3 } },
          { option_id: "lasted_two_days", risk_scores: { symptoms: 3 } }
        ]
      },
      {
        group_id: "wrists_hands_fingers",
        options: [
          { option_id: "one_side", risk_scores: { symptoms: 2 } },
          { option_id: "both_sides", risk_scores: { symptoms: 3 } },
          { option_id: "lasted_two_days", risk_scores: { symptoms: 3 } }
        ]
      },
      {
        group_id: "lower_back",
        options: [
          { option_id: "one_side", risk_scores: { symptoms: 2 } },
          { option_id: "both_sides", risk_scores: { symptoms: 3 } },
          { option_id: "lasted_two_days", risk_scores: { symptoms: 3 } }
        ]
      },
      {
        group_id: "hips_upper_legs",
        options: [
          { option_id: "one_side", risk_scores: { symptoms: 2 } },
          { option_id: "both_sides", risk_scores: { symptoms: 3 } },
          { option_id: "lasted_two_days", risk_scores: { symptoms: 3 } }
        ]
      },
      {
        group_id: "knees_lower_legs",
        options: [
          { option_id: "one_side", risk_scores: { symptoms: 2 } },
          { option_id: "both_sides", risk_scores: { symptoms: 3 } },
          { option_id: "lasted_two_days", risk_scores: { symptoms: 3 } }
        ]
      },
      {
        group_id: "ankles_feet",
        options: [
          { option_id: "one_side", risk_scores: { symptoms: 2 } },
          { option_id: "both_sides", risk_scores: { symptoms: 3 } },
          { option_id: "lasted_two_days", risk_scores: { symptoms: 3 } }
        ]
      }
    ]
  },
  {
    question_id: "question-11",
    section: "contact_stress",
    display_condition_tags: ["office_computer", "manual_handling", "tool_use", "sharp_edges", "wrist_bending", "no_handles", "awkward_loads"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "less_than_30_min", risk_scores: { contact_stress: 1 } },
      { option_id: "30_min_to_1_hour", risk_scores: { contact_stress: 2 }, add_tags: ["sharp_edges"] },
      { option_id: "more_than_1_hour", risk_scores: { contact_stress: 3 }, add_tags: ["sharp_edges"] },
      { option_id: "does_not_apply", risk_scores: {} }
    ]
  },
  {
    question_id: "question-12",
    section: "contact_stress",
    display_condition_tags: ["kneeling_squatting", "low_work", "manual_handling"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "less_than_30_min", risk_scores: { contact_stress: 1 } },
      { option_id: "30_min_to_1_hour", risk_scores: { contact_stress: 2 }, add_tags: ["kneeling_floor_work"] },
      { option_id: "more_than_1_hour", risk_scores: { contact_stress: 3 }, add_tags: ["kneeling_floor_work"] },
      { option_id: "does_not_apply", risk_scores: {} }
    ]
  },
  {
    question_id: "question-13",
    section: "contact_stress",
    display_condition_tags: ["manual_handling", "tool_use", "pinch_grip", "power_grip", "no_handles", "awkward_loads"],
    required: true,
    type: "select_all",
    options: [
      { option_id: "poor_grip_size", risk_scores: { contact_stress: 3 }, add_tags: ["gripping"] },
      { option_id: "irregular_unbalanced", risk_scores: { contact_stress: 2 } },
      { option_id: "sharp_handholds", risk_scores: { contact_stress: 3 }, add_tags: ["sharp_edges"] },
      { option_id: "slippery", risk_scores: { contact_stress: 2 }, add_tags: ["gripping"] },
      { option_id: "none", risk_scores: {}, exclusive: true }
    ]
  },
  {
    question_id: "question-14",
    section: "contact_stress",
    display_condition_tags: ["manual_handling", "tool_use", "body_as_tool"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "less_than_one_hour", risk_scores: { contact_stress: 2 }, add_tags: ["body_as_tool"] },
      { option_id: "more_than_one_hour", risk_scores: { contact_stress: 3 }, add_tags: ["body_as_tool"] },
      { option_id: "no", risk_scores: {} }
    ]
  },
  {
    question_id: "question-15",
    section: "force",
    display_condition_tags: ["pushing_pulling", "walking_moving", "uneven_surfaces"],
    required: true,
    type: "select_all",
    options: [
      { option_id: "smooth", risk_scores: { force: 1 }, add_tags: ["pushing_pulling"] },
      { option_id: "soft", risk_scores: { force: 3 }, add_tags: ["pushing_pulling"] },
      { option_id: "rough", risk_scores: { force: 3 }, add_tags: ["pushing_pulling"] },
      { option_id: "does_not_apply", risk_scores: {}, exclusive: true }
    ]
  },
  {
    question_id: "question-16",
    section: "force",
    display_condition_tags: ["pushing_pulling", "lack_of_mechanical_aids"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "most", risk_scores: { force: 3 }, add_tags: ["heavy_loads", "pushing_pulling"] },
      { option_id: "some", risk_scores: { force: 2 }, add_tags: ["pushing_pulling"] },
      { option_id: "never", risk_scores: {} }
    ]
  },
  {
    question_id: "question-17",
    section: "force",
    display_condition_tags: ["manual_handling", "lifting_lowering", "carrying", "heavy_loads", "tool_use", "awkward_loads"],
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
    question_id: "question-18",
    section: "force",
    display_condition_tags: ["tool_use", "vibrating_tools"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "regularly", risk_scores: { force: 3 }, add_tags: ["powered_tools"] },
      { option_id: "occasionally", risk_scores: { force: 2 }, add_tags: ["powered_tools"] },
      { option_id: "no", risk_scores: {} }
    ]
  },
  {
    question_id: "question-19",
    section: "force",
    display_condition_tags: ["pushing_pulling", "lack_of_mechanical_aids"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "great_extent", risk_scores: { force: 1 } },
      { option_id: "some_extent", risk_scores: { force: 2 } },
      { option_id: "do_not_ask", risk_scores: { force: 3 } },
      { option_id: "ask_but_no_assistance", risk_scores: { force: 4 } },
      { option_id: "does_not_apply", risk_scores: {} }
    ]
  },
  {
    question_id: "question-20",
    section: "awkward_postures",
    display_condition_tags: ["office_computer", "manual_handling", "seated_work", "standing_work", "static_postures", "reaching_forward", "twisting", "bending_trunk"],
    required: true,
    type: "grouped_multi_choice",
    groups: [
      {
        group_id: "forward_backward",
        options: [
          { option_id: "most", risk_scores: { awkward_posture: 3 }, add_tags: ["bending_trunk"] },
          { option_id: "some", risk_scores: { awkward_posture: 2 }, add_tags: ["bending_trunk"] },
          { option_id: "never", risk_scores: {} }
        ]
      },
      {
        group_id: "sideways",
        options: [
          { option_id: "most", risk_scores: { awkward_posture: 3 }, add_tags: ["twisting"] },
          { option_id: "some", risk_scores: { awkward_posture: 2 }, add_tags: ["twisting"] },
          { option_id: "never", risk_scores: {} }
        ]
      }
    ]
  },
  {
    question_id: "question-21",
    section: "awkward_postures",
    display_condition_tags: ["twisting", "seated_work", "standing_work", "manual_handling", "office_computer", "tool_use", "bending_trunk"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "often", risk_scores: { awkward_posture: 3 }, add_tags: ["twisting"] },
      { option_id: "sometimes", risk_scores: { awkward_posture: 2 }, add_tags: ["twisting"] },
      { option_id: "never", risk_scores: {} }
    ]
  },
  {
    question_id: "question-22",
    section: "awkward_postures",
    display_condition_tags: ["seated_work", "standing_work", "manual_handling", "office_computer", "tool_use", "overhead_work", "low_work", "reaching_forward"],
    required: true,
    type: "grouped_multi_choice",
    groups: [
      {
        group_id: "hands_above_shoulders",
        options: [
          { option_id: "most", risk_scores: { awkward_posture: 3 }, add_tags: ["overhead_work"] },
          { option_id: "some", risk_scores: { awkward_posture: 2 }, add_tags: ["overhead_work"] },
          { option_id: "never", risk_scores: {} }
        ]
      },
      {
        group_id: "hands_floor_to_knee",
        options: [
          { option_id: "most", risk_scores: { awkward_posture: 3 }, add_tags: ["low_work"] },
          { option_id: "some", risk_scores: { awkward_posture: 2 }, add_tags: ["low_work"] },
          { option_id: "never", risk_scores: {} }
        ]
      }
    ]
  },
  {
    question_id: "question-23",
    section: "awkward_postures",
    display_condition_tags: ["reaching_forward", "manual_handling", "office_computer", "standing_work", "tool_use", "overhead_work"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "frequently", risk_scores: { awkward_posture: 3 }, add_tags: ["reaching_forward"] },
      { option_id: "sometimes", risk_scores: { awkward_posture: 2 }, add_tags: ["reaching_forward"] },
      { option_id: "never", risk_scores: {} }
    ]
  },
  {
    question_id: "question-24",
    section: "awkward_postures",
    display_condition_tags: ["reaching_forward", "overhead_work"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "less_than_5_lb", risk_scores: { awkward_posture: 2, force: 1 } },
      { option_id: "5_to_10_lb", risk_scores: { awkward_posture: 3, force: 2 } },
      { option_id: "more_than_10_lb", risk_scores: { awkward_posture: 4, force: 3 }, add_tags: ["heavy_loads"] },
      { option_id: "no", risk_scores: {} }
    ]
  },
  {
    question_id: "question-25",
    section: "awkward_postures",
    display_condition_tags: ["office_computer", "manual_handling", "seated_work", "standing_work", "static_postures", "fine_visual_work", "overhead_work", "low_work"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "neutral", risk_scores: { awkward_posture: 1 } },
      { option_id: "slight_tilt", risk_scores: { awkward_posture: 2 } },
      { option_id: "deep_tilt", risk_scores: { awkward_posture: 3 }, add_tags: ["fine_visual_work"] }
    ]
  },
  {
    question_id: "question-26",
    section: "awkward_postures",
    display_condition_tags: ["wrist_bending", "office_computer", "tool_use", "repetitive_movements", "mouse_intensive", "pinch_grip", "power_grip"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "0_to_14", risk_scores: { awkward_posture: 1 } },
      { option_id: "15_to_30", risk_scores: { awkward_posture: 2 }, add_tags: ["wrist_hand_work"] },
      { option_id: "more_than_30", risk_scores: { awkward_posture: 3 }, add_tags: ["wrist_hand_work"] }
    ]
  },
  {
    question_id: "question-27",
    section: "awkward_postures",
    display_condition_tags: ["wrist_bending", "office_computer", "tool_use", "repetitive_movements", "mouse_intensive", "pinch_grip", "power_grip"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "0_to_10", risk_scores: { awkward_posture: 1 } },
      { option_id: "10_to_20", risk_scores: { awkward_posture: 2 }, add_tags: ["wrist_hand_work"] },
      { option_id: "more_than_20", risk_scores: { awkward_posture: 3 }, add_tags: ["wrist_hand_work"] }
    ]
  },
  {
    question_id: "question-28",
    section: "awkward_postures",
    display_condition_tags: ["manual_handling", "lifting_lowering", "carrying", "pushing_pulling", "reaching_forward", "tool_use", "awkward_loads", "no_handles"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "frequently", risk_scores: { awkward_posture: 1 } },
      { option_id: "sometimes", risk_scores: { awkward_posture: 2 } },
      { option_id: "never", risk_scores: { awkward_posture: 3 }, add_tags: ["reaching_forward"] }
    ]
  },
  {
    question_id: "question-29",
    section: "repetition",
    display_condition_tags: ["repetitive_movements", "office_computer", "manual_handling", "wrist_bending", "mouse_intensive", "low_task_variability", "fast_work_rate"],
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
    question_id: "question-30",
    section: "repetition",
    display_condition_tags: ["wrist_bending", "repetitive_movements", "office_computer", "tool_use", "mouse_intensive", "pinch_grip", "power_grip"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "less_than_1_hour", risk_scores: { repetition: 1, awkward_posture: 1 } },
      { option_id: "1_to_2_hours", risk_scores: { repetition: 2, awkward_posture: 2 }, add_tags: ["wrist_hand_work"] },
      { option_id: "more_than_2_hours", risk_scores: { repetition: 3, awkward_posture: 3 }, add_tags: ["wrist_hand_work"] },
      { option_id: "none", risk_scores: {} }
    ]
  },
  {
    question_id: "question-31",
    section: "repetition",
    display_condition_tags: ["wrist_bending", "repetitive_movements", "office_computer", "tool_use", "mouse_intensive", "pinch_grip", "power_grip"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "less_than_1_hour", risk_scores: { repetition: 1, awkward_posture: 1 } },
      { option_id: "1_to_2_hours", risk_scores: { repetition: 2, awkward_posture: 2 }, add_tags: ["wrist_hand_work"] },
      { option_id: "more_than_2_hours", risk_scores: { repetition: 3, awkward_posture: 3 }, add_tags: ["wrist_hand_work"] },
      { option_id: "none", risk_scores: {} }
    ]
  },
  {
    question_id: "question-32",
    section: "repetition",
    display_condition_tags: ["heavy_loads", "manual_handling", "tool_use", "power_grip", "lifting_lowering", "carrying"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "less_than_5_min", risk_scores: { repetition: 1, force: 1 } },
      { option_id: "5_to_25_min", risk_scores: { repetition: 2, force: 2 } },
      { option_id: "30_min_to_2_5_hours", risk_scores: { repetition: 3, force: 3 }, add_tags: ["heavy_loads"] },
      { option_id: "2_5_to_5_5_hours", risk_scores: { repetition: 4, force: 4 }, add_tags: ["heavy_loads"] },
      { option_id: "more_than_5_5_hours", risk_scores: { repetition: 4, force: 4 }, add_tags: ["heavy_loads"] }
    ]
  },
  {
    question_id: "question-33",
    section: "repetition",
    display_condition_tags: ["pinch_grip", "tool_use", "manual_handling", "no_handles", "awkward_loads"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "less_than_2_hours", risk_scores: { repetition: 2, force: 2 }, add_tags: ["pinch_grip"] },
      { option_id: "more_than_2_hours", risk_scores: { repetition: 3, force: 3 }, add_tags: ["pinch_grip"] },
      { option_id: "none", risk_scores: {} }
    ]
  },
  {
    question_id: "question-34",
    section: "repetition",
    display_condition_tags: ["power_grip", "tool_use", "manual_handling", "carrying", "pushing_pulling"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "less_than_2_hours", risk_scores: { repetition: 2, force: 2 }, add_tags: ["power_grip"] },
      { option_id: "more_than_2_hours", risk_scores: { repetition: 3, force: 3 }, add_tags: ["power_grip"] },
      { option_id: "none", risk_scores: {} }
    ]
  },
  {
    question_id: "question-35",
    section: "repetition",
    display_condition_tags: ["vibrating_tools", "tool_use"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "less_than_1_hour", risk_scores: { repetition: 1, force: 1 }, add_tags: ["vibrating_tools"] },
      { option_id: "1_to_4_hours", risk_scores: { repetition: 2, force: 2 }, add_tags: ["vibrating_tools"] },
      { option_id: "more_than_4_hours", risk_scores: { repetition: 3, force: 3 }, add_tags: ["vibrating_tools"] },
      { option_id: "does_not_apply", risk_scores: {} }
    ]
  },
  {
    question_id: "question-36",
    section: "repetition",
    display_condition_tags: ["pushing_pulling", "uneven_surfaces"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "less_than_5_min", risk_scores: { repetition: 1, force: 1 } },
      { option_id: "5_min_to_1_hour", risk_scores: { repetition: 2, force: 2 } },
      { option_id: "more_than_1_hour", risk_scores: { repetition: 3, force: 3 } },
      { option_id: "does_not_apply", risk_scores: {} }
    ]
  },
  {
    question_id: "question-37",
    section: "environmental",
    display_condition_tags: ["noise_exposure", "outdoor_work", "office_computer", "standing_work", "walking_moving", "tool_use"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "frequently", risk_scores: { environmental: 3 }, add_tags: ["noise_exposure"] },
      { option_id: "sometimes", risk_scores: { environmental: 2 } },
      { option_id: "no", risk_scores: {} }
    ]
  },
  {
    question_id: "question-38",
    section: "environmental",
    display_condition_tags: ["glare_exposure", "outdoor_work", "poor_lighting", "office_computer", "laptop_tablet_use", "dual_monitors", "fine_visual_work"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "frequently", risk_scores: { environmental: 3 }, add_tags: ["glare_exposure"] },
      { option_id: "sometimes", risk_scores: { environmental: 2 }, add_tags: ["glare_exposure"] },
      { option_id: "rarely", risk_scores: { environmental: 1 } },
      { option_id: "never", risk_scores: {} }
    ]
  },
  {
    question_id: "question-39",
    section: "environmental",
    display_condition_tags: ["fine_visual_work", "poor_lighting", "office_computer", "laptop_tablet_use", "dual_monitors"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "frequently", risk_scores: {} },
      { option_id: "sometimes", risk_scores: { environmental: 1 } },
      { option_id: "rarely", risk_scores: { environmental: 2 }, add_tags: ["fine_visual_work"] },
      { option_id: "never", risk_scores: { environmental: 3 }, add_tags: ["fine_visual_work"] },
      { option_id: "does_not_apply", risk_scores: {} }
    ]
  },
  {
    question_id: "question-40",
    section: "environmental",
    display_condition_tags: ["cold_environment", "outdoor_work"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "yes", risk_scores: { environmental: 3 }, add_tags: ["cold_environment"] },
      { option_id: "no", risk_scores: { environmental: 1 } },
      { option_id: "does_not_apply", risk_scores: {} }
    ]
  },
  {
    question_id: "question-41",
    section: "environmental",
    display_condition_tags: ["overtime", "tight_deadlines", "low_task_variability", "fast_work_rate", "inadequate_recovery_time"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "frequently", risk_scores: { environmental: 3 }, add_tags: ["overtime"] },
      { option_id: "sometimes", risk_scores: { environmental: 2 }, add_tags: ["overtime"] },
      { option_id: "rarely", risk_scores: { environmental: 1 } },
      { option_id: "never", risk_scores: {} }
    ]
  },
  {
    question_id: "question-42",
    section: "environmental",
    display_condition_tags: ["tight_deadlines", "fast_work_rate", "low_task_variability", "inadequate_recovery_time", "overtime"],
    required: true,
    type: "multi_choice",
    options: [
      { option_id: "frequently", risk_scores: { environmental: 3 }, add_tags: ["tight_deadlines"] },
      { option_id: "sometimes", risk_scores: { environmental: 2 }, add_tags: ["tight_deadlines"] },
      { option_id: "rarely", risk_scores: { environmental: 1 } },
      { option_id: "never", risk_scores: {} }
    ]
  }
];
