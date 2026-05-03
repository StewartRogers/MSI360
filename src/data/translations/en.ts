import type { Translation } from "../../types";

export const en: Translation = {
  app: {
    title: "MSI360",
    disclosure: "Prototype: your answers stay in this browser unless you choose to download or share your report."
  },
  sections: {
    intro: "About the work",
    symptoms: "Current symptoms",
    contact_stress: "Contact stress",
    force: "Force",
    awkward_postures: "Awkward postures",
    repetition: "Repetition",
    environmental: "Environmental factors",
    organizational: "Work organization"
  },
  questions: {
    role: {
      label: "What is your role in the activity you'd like to assess today?",
      options: {
        worker: "Worker",
        supervisor: "Supervisor",
        manager: "Manager",
        employer: "Employer",
        health_safety_committee: "Member of a H&S Committee"
      }
    },
    time_in_role: {
      label: "How long have you been in this role with your current employer?",
      options: {
        less_than_year: "Less than a year",
        one_to_five: "1 to 5 years",
        six_to_ten: "6 to 10 years",
        more_than_ten: "More than 10 years"
      }
    },
    task_description: {
      label: "What is the task or work activity you'd like to assess?",
      help_text: "Be as descriptive as possible."
    },
    height: {
      label: "Please indicate your height using the options below:",
      options: {
        under_5_4: "Less than 5'4\" (< 1.62 m)",
        "5_4_to_5_9": "5'4\" - 5'9\" (1.62 m - 1.75 m)",
        "5_10_to_6_2": "5'10\" - 6'2\" (1.76 m - 1.88 m)",
        over_6_2: "Over 6'2\" (> 1.88 m)",
        prefer_not_to_say: "Prefer not to say"
      }
    },
    job_setup: {
      label: "How would you summarize the type of job or task being assessed?",
      options: {
        office_clerical: "Office or clerical (desk-based) job or task",
        not_desk_based: "Not based at a desk in an office",
        both_setups: "Both set-ups"
      }
    },
    work_position: {
      label: "Do you typically sit or stand during your workday?",
      options: {
        mostly_sit: "I usually sit for most of the day",
        mostly_stand_move: "I usually stand or move for most of the day",
        sit_and_stand: "I sit and stand throughout the day"
      }
    },
    equipment_feedback: {
      label: "To what extent would you say your employer or supervisor seeks your feedback on tools or equipment before they're purchased?",
      options: {
        great_extent: "To a great extent",
        some_extent: "To some extent",
        rarely: "Rarely",
        not_at_all: "Not at all"
      }
    },
    work_organization_feedback: {
      label: "To what extent would you say your employer or supervisor seeks your feedback on how the work you do should be organized and/or performed?",
      options: {
        great_extent: "To a great extent",
        some_extent: "To some extent",
        rarely: "Rarely",
        not_at_all: "Not at all"
      }
    },
    recent_discomfort: {
      label: "In the last 7 days, have you experienced work-related pain or discomfort?",
      options: {
        yes: "Yes",
        no: "No"
      }
    },
    body_discomfort_areas: {
      label:
        "Using the table below, please indicate the specific body parts where you have experienced work-related pain or discomfort during or after performing the job or task being assessed.\n\nIndicate whether a) one or both sides of your body were involved, and b) the pain lasted for 2 or more days.",
      groups: {
        neck: {
          label: "1. Neck",
          options: {
            one_side: "Pain or discomfort on one side (i.e., left or right side of body)",
            both_sides: "Pain or discomfort on both left and right",
            lasted_two_days: "Pain has lasted for 2 or more days"
          }
        },
        shoulders_upper_arms: {
          label: "2. Shoulder(s) or upper arm(s)",
          options: {
            one_side: "Pain or discomfort on one side (i.e., left or right side of body)",
            both_sides: "Pain or discomfort on both left and right",
            lasted_two_days: "Pain has lasted for 2 or more days"
          }
        },
        elbows_forearms: {
          label: "3. Elbow(s) or forearm(s)",
          options: {
            one_side: "Pain or discomfort on one side (i.e., left or right side of body)",
            both_sides: "Pain or discomfort on both left and right",
            lasted_two_days: "Pain has lasted for 2 or more days"
          }
        },
        wrists_hands_fingers: {
          label: "4. Wrist(s), hand(s), or fingers",
          options: {
            one_side: "Pain or discomfort on one side (i.e., left or right side of body)",
            both_sides: "Pain or discomfort on both left and right",
            lasted_two_days: "Pain has lasted for 2 or more days"
          }
        },
        lower_back: {
          label: "5. Lower back",
          options: {
            one_side: "Pain or discomfort on one side (i.e., left or right side of body)",
            both_sides: "Pain or discomfort on both left and right",
            lasted_two_days: "Pain has lasted for 2 or more days"
          }
        },
        hips_upper_legs: {
          label: "6. Hip(s) or upper leg(s) (thigh)",
          options: {
            one_side: "Pain or discomfort on one side (i.e., left or right side of body)",
            both_sides: "Pain or discomfort on both left and right",
            lasted_two_days: "Pain has lasted for 2 or more days"
          }
        },
        knees_lower_legs: {
          label: "7. Knee(s) or lower leg(s) (calf)",
          options: {
            one_side: "Pain or discomfort on one side (i.e., left or right side of body)",
            both_sides: "Pain or discomfort on both left and right",
            lasted_two_days: "Pain has lasted for 2 or more days"
          }
        },
        ankles_feet: {
          label: "8. Ankle(s) or foot/feet",
          options: {
            one_side: "Pain or discomfort on one side (i.e., left or right side of body)",
            both_sides: "Pain or discomfort on both left and right",
            lasted_two_days: "Pain has lasted for 2 or more days"
          }
        }
      }
    },
    contact_sharp_edges_duration: {
      label:
        "Think about a typical workday - or, if you're assessing a specific task or activity, the part of the workday when you're performing that task. How much time do you spend leaning or resting part of your body on sharp objects or edges?",
      options: {
        less_than_30_min: "Less than 30 minutes a day",
        "30_min_to_1_hour": "30 minutes to 1 hour a day",
        more_than_1_hour: "More than 1 hour a day",
        does_not_apply: "I don't lean on sharp objects or edges at work"
      }
    },
    kneeling_hard_surfaces: {
      label: "How much time do you spend kneeling on hard or rough surfaces without personal protection (e.g., without knee pads)?",
      options: {
        less_than_30_min: "Less than 30 minutes a day",
        "30_min_to_1_hour": "Between 30 minutes to 1 hour a day",
        more_than_1_hour: "More than 1 hour a day",
        does_not_apply: "I don't kneel on hard surfaces without protection at work"
      }
    },
    handheld_tool_contact: {
      label:
        "Please think about the types of tools or objects you hold for more than 30 minutes at a time. Using the list of descriptions below, select all the statements that apply to these items.\n\nThe last option cannot be selected if any other options have been ticked.",
      options: {
        poor_grip_size: "Too large or small to grip properly",
        irregular_unbalanced: "Shaped irregularly or unbalanced",
        sharp_handholds: "Have handholds that are too sharp",
        slippery: "Slippery",
        none: "None of the above"
      }
    },
    body_makeshift_tool: {
      label:
        "Do you use any body part as a makeshift tool to complete your work? (For example, you might use your palm or knee to apply force to a surface.)\n\nThe illustration below is an example of using your body in this way.",
      options: {
        less_than_one_hour: "Yes, for less than 1 hour a day",
        more_than_one_hour: "Yes, for more than 1 hour a day",
        no: "No, I don't use my body as a makeshift tool in my work"
      }
    },
    push_pull_surface_types: {
      label:
        "Think about the types of surfaces you push, pull, or move objects across during the job, task, or work activity you are assessing today. Using the list of descriptions below, select all the statements that apply to these surfaces.",
      options: {
        smooth: "Smooth (e.g., finished surfaces)",
        soft: "Soft (e.g., sand, mud, grass)",
        rough: "Rough (e.g., gravel, tile, granite)",
        does_not_apply: "I don't push or pull objects across any surfaces to complete my work"
      }
    },
    push_pull_heavy_frequency: {
      label: "How often do you push, pull, or move objects that you consider to be heavy without a mechanical aid (e.g., a wheelbarrow or dolly)?",
      options: {
        most: "Most of the time",
        some: "Some of the time",
        never: "Never"
      }
    },
    object_weight: {
      label: "How heavy are the tools or objects you pick up, carry, or support without mechanical assistance?",
      options: {
        less_than_5_lb: "Less than 5 lb / 2 kg",
        "5_to_18_lb": "5 to 18 lb / 2 to 8 kg",
        more_than_18_lb: "More than 18 lb / 8 kg",
        does_not_apply: "I don't pick up, carry, or support any tools or objects at work"
      }
    },
    tool_start_force: {
      label:
        "Do any of the tools and/or equipment you use require a lot of force to start? (e.g., a lawnmower with a cord you need to yank or a pedal you need to firmly depress)",
      options: {
        regularly: "Yes, at least some of the tools or equipment I use regularly require force",
        occasionally: "Yes, at least some of the tools or equipment I use occasionally require force",
        no: "No, none of the tools or equipment I use require force to start"
      }
    },
    push_pull_assistance: {
      label: "When pushing and/or pulling objects that you consider heavy, to what extent do you receive assistance (e.g., from a coworker, by using a dolly or wheelbarrow)?",
      options: {
        great_extent: "To a great extent",
        some_extent: "To some extent",
        do_not_ask: "I do not ask for assistance",
        ask_but_no_assistance: "I ask for but do not receive assistance",
        does_not_apply: "I don't push or pull these kinds of objects during the workday"
      }
    },
    upper_body_posture: {
      label:
        "Think about a typical workday - or, if you're assessing a specific task or activity, the part of the workday when you're performing that task. When either sitting or standing, how often do you work with your upper body leaning forward, backward, or sideways?\n\nPlease select the options that apply to you.",
      groups: {
        forward_backward: {
          label: "I lean forward or backward more than 15 degrees",
          options: {
            most: "Most of the time",
            some: "Some of the time",
            never: "Never"
          }
        },
        sideways: {
          label: "I lean sideways",
          options: {
            most: "Most of the time",
            some: "Some of the time",
            never: "Never"
          }
        }
      }
    },
    torso_twist: {
      label: "When performing your work activities, do you ever twist your upper body to either side without changing the position of your feet while sitting or standing?",
      options: {
        often: "Yes, I do this often during my job, task, or work activity",
        sometimes: "Yes, I do this sometimes during my job, task, or work activity",
        never: "No, I never twist my upper body when working"
      }
    },
    hand_location: {
      label:
        "Thinking about a typical workday - or, if you're assessing a specific task or activity, the part of the workday when you're performing that task. When either sitting or standing, please indicate where your hands are located in relation to your body.\n\nPlease select the options that apply to you.",
      groups: {
        hands_above_shoulders: {
          label: "Hands above shoulders",
          options: {
            most: "Most of the time",
            some: "Some of the time",
            never: "Never"
          }
        },
        hands_floor_to_knee: {
          label: "Hands between floor and knee",
          options: {
            most: "Most of the time",
            some: "Some of the time",
            never: "Never"
          }
        }
      }
    },
    arms_extended_forward: {
      label: "Are one or both of your arms ever fully extended straight forward when you're doing the job, task, or work activity you're assessing today?",
      options: {
        frequently: "Yes, my arms are frequently fully extended straight forward when doing a job, task, or work activity",
        sometimes: "Yes, my arms are sometimes fully extended straight forward when doing a job, task, or work activity",
        never: "No, my arms are never fully extended straight forward when doing a job, task, or work activity"
      }
    },
    outstretched_arm_load: {
      label: "When your arm(s) are outstretched, do you ever hold a tool or move an object?",
      options: {
        less_than_5_lb: "Yes, and it's often less than 5 lb / 2 kg",
        "5_to_10_lb": "Yes, and it's often 5 to 10 lb / 2 to 4.5 kg",
        more_than_10_lb: "Yes, and it's often more than 10 lb / 4.5 kg",
        no: "No, I don't hold tools or objects when my arm(s) are outstretched"
      }
    },
    head_position: {
      label: "How is your head positioned when you're doing the job, task, or work activity you're assessing today?",
      options: {
        neutral: "It's often neutral (directly between shoulders; chin is level)",
        slight_tilt: "It's often tilted up or down less than 15 degrees",
        deep_tilt: "It's often tilted up, down, or to the side more than 15 degrees"
      }
    },
    wrist_bend_degrees: {
      label: "How far do you typically bend your wrist up and down? Please use the image below as a reference.",
      options: {
        "0_to_14": "Usually 0 to 14 degrees up or down",
        "15_to_30": "Usually 15 to 30 degrees",
        more_than_30: "Usually more than 30 degrees"
      }
    },
    wrist_side_angle: {
      label: "How far are you angling your wrist from side to side?",
      options: {
        "0_to_10": "Usually 0 to 10 degrees left or right",
        "10_to_20": "Usually 10 to 20 degrees",
        more_than_20: "Usually more than 20 degrees"
      }
    },
    objects_close_to_body: {
      label: "Is it possible for you to keep all objects you need to push, pull, lift, use, etc. close to your body?",
      options: {
        frequently: "Yes, frequently",
        sometimes: "Yes, sometimes",
        never: "No, never"
      }
    },
    repetitive_movements_duration: {
      label:
        "Think about a typical workday - or, if you're assessing a specific task or activity, the part of the workday when you're performing that task. How much time do you spend performing similar movements over and over?",
      options: {
        less_than_30_min: "Less than 30 minutes a day",
        "30_min_to_2_hours": "30 minutes to 2 hours a day",
        "2_to_4_hours": "2 to 4 hours a day",
        more_than_4_hours: "More than 4 hours a day"
      }
    },
    wrist_bend_duration: {
      label: "How much time do you spend bending your wrist up or down more than 15 degrees? Please use the image below as a reference.",
      options: {
        less_than_1_hour: "Less than 1 hour a day",
        "1_to_2_hours": "1 to 2 hours a day",
        more_than_2_hours: "More than 2 hours a day",
        none: "No time at all"
      }
    },
    wrist_side_duration: {
      label: "How much time do you spend angling your wrist more than 15 degrees to the left or right? Please use the image below as a reference.",
      options: {
        less_than_1_hour: "Less than 1 hour a day",
        "1_to_2_hours": "1 to 2 hours a day",
        more_than_2_hours: "More than 2 hours a day",
        none: "No time at all"
      }
    },
    forceful_exertion_duration: {
      label: "How much time do you spend using forceful muscular exertions (more than 18 pounds / 8 kg with your own strength) when using a tool or handling an object?",
      options: {
        less_than_5_min: "Less than 5 minutes a day",
        "5_to_25_min": "5 to 25 minutes a day",
        "30_min_to_2_5_hours": "30 minutes to 2.5 hours a day",
        "2_5_to_5_5_hours": "2.5 to 5.5 hours a day",
        more_than_5_5_hours: "More than 5.5 hours a day"
      }
    },
    pinch_grip_duration: {
      label:
        "When you grasp an object between your thumb and fingertips, it's called a pinch grip. When you're doing the job, task, or work activity you're assessing today, how much time do you spend using a pinch grip to hold an object that's heavier than 2 pounds / 1 kg?",
      options: {
        less_than_2_hours: "Less than 2 hours a day",
        more_than_2_hours: "More than 2 hours a day",
        none: "No time at all"
      }
    },
    power_grip_duration: {
      label:
        "When you wrap your hand around an object to hold it, it's called a power grip. How much time do you spend using a power grip to hold an object that's heavier than 10 pounds / 4.5 kg?",
      options: {
        less_than_2_hours: "Less than 2 hours a day",
        more_than_2_hours: "More than 2 hours a day",
        none: "No time at all"
      }
    },
    vibration_tools_duration: {
      label: "If you use tools or equipment that cause vibrations in part or all of your body, how much time do you spend using these tools?",
      options: {
        less_than_1_hour: "Less than 1 hour a day",
        "1_to_4_hours": "1 to 4 hours a day",
        more_than_4_hours: "More than 4 hours a day",
        does_not_apply: "I don't use these types of tools or equipment"
      }
    },
    push_pull_rough_soft_heavy_duration: {
      label:
        "If you push or pull any items that are heavier than 80 pounds / 36 kg, how much time do you spend moving these items over rough surfaces (like gravel, tile, or uneven ground) or soft surfaces (like sand, mud, or grass)?",
      options: {
        less_than_5_min: "Less than 5 minutes a day",
        "5_min_to_1_hour": "5 minutes to 1 hour a day",
        more_than_1_hour: "More than 1 hour a day",
        does_not_apply: "I don't move these types of items over rough or soft surfaces"
      }
    },
    noise_distraction: {
      label:
        "Think about a typical workday - or, if you're assessing a specific task or activity, the part of the workday when you're performing that task. Are you ever distracted by noises (sirens, loud talking, traffic, etc.)?",
      options: {
        frequently: "Frequently",
        sometimes: "Sometimes",
        no: "No"
      }
    },
    glare: {
      label: "Are you affected by the sun shining or reflecting into your eyes (aka glare)?",
      options: {
        frequently: "Frequently",
        sometimes: "Sometimes",
        rarely: "Rarely",
        never: "Never"
      }
    },
    fine_details: {
      label: "If your work requires you to look at fine details or read small print, are you able to do this easily?",
      options: {
        frequently: "Frequently",
        sometimes: "Sometimes",
        rarely: "Rarely",
        never: "Never",
        does_not_apply: "My work doesn't require me to do this"
      }
    },
    cold_environment_discomfort: {
      label: "If you work in cold environments, do you feel discomfort in your arms, back, legs, fingers and/or toes?",
      options: {
        yes: "Yes",
        no: "No",
        does_not_apply: "I don't work in cold environments"
      }
    },
    overtime: {
      label: "Considering your work requirements, how often are you asked to work overtime for one hour or longer?",
      options: {
        frequently: "Frequently",
        sometimes: "Sometimes",
        rarely: "Rarely",
        never: "Never"
      }
    },
    tight_deadlines: {
      label: "How often are you asked to work to tight deadlines?",
      options: {
        frequently: "Frequently",
        sometimes: "Sometimes",
        rarely: "Rarely",
        never: "Never"
      }
    }
  }
};
