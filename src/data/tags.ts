export const riskFactors = ["contact_stress", "force", "awkward_posture", "repetition", "environmental", "symptoms"] as const;

export const tagTaxonomy = [
  // General & Routing
  "start",
  "reported_discomfort",

  // Environment & Work Setting
  "office_computer",
  "outdoor_work",
  "cold_environment",
  "noise_exposure",
  "glare_exposure",
  "poor_lighting",
  "uneven_surfaces",

  // General Posture
  "seated_work",
  "standing_work",
  "walking_moving",
  "static_postures",

  // Force & Manual Handling
  "manual_handling",
  "lifting_lowering",
  "pushing_pulling",
  "carrying",
  "heavy_loads",
  "awkward_loads",
  "no_handles",
  "lack_of_mechanical_aids",

  // Specific Awkward Postures
  "overhead_work",
  "low_work",
  "reaching_forward",
  "twisting",
  "bending_trunk",
  "kneeling_squatting",

  // Upper Extremity & Tool Use
  "tool_use",
  "vibrating_tools",
  "pinch_grip",
  "power_grip",
  "wrist_bending",
  "repetitive_movements",

  // Local Contact Stress
  "sharp_edges",
  "body_as_tool",

  // Office & Computer Specifics
  "mouse_intensive",
  "laptop_tablet_use",
  "dual_monitors",
  "telephone_intensive",
  "fine_visual_work",

  // Organizational Context
  "tight_deadlines",
  "overtime",
  "low_task_variability",
  "fast_work_rate",
  "inadequate_recovery_time"
];
