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
      label: "What is your role?",
      options: {
        worker: "I'm a worker",
        supervisor: "I'm a supervisor",
        manager: "I'm a manager",
        employer: "I'm an employer",
        health_safety_committee: "I'm a member of a H&S Committee"
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
      label: "What is the job, task, or work activity you'd like to assess?",
      help_text: "Briefly describe what you do, including loads, tools, posture, frequency, and duration if you know them."
    },
    height: {
      label: "Please indicate your height using the options below:",
      options: {
        under_5_4: "Less than 5'4\"(< 1.62m)",
        "5_4_to_5_9": "5'4\" - 5'9\" (1.62m - 1.75m)",
        "5_10_to_6_2": "5'10\" - 6'2\" (1.76m - 1.88m)",
        over_6_2: "Over 6'2\" (> 1.88m)",
        prefer_not_to_say: "Prefer not to say"
      }
    },
    job_setup: {
      label: "How would you summarize the type of job or task being assessed?",
      options: {
        office_clerical: "Office or clerical (desk-based) job or task",
        not_desk_based: "Not based at a desk in an office",
        both_setups: "Both setups"
      }
    },
    recent_discomfort: {
      label: "In the last 7 days, have you experienced work-related pain or discomfort?",
      options: {
        yes: "Yes",
        no: "No"
      }
    },
    object_weight: {
      label: "How heavy are the tools or objects you pick up, carry, or support without mechanical assistance?",
      options: {
        less_than_5_lb: "Less than 5 lb / 2 kg",
        "5_to_18_lb": "5 to 18 lb / 2 to 8 kg",
        more_than_18_lb: "More than 18 lb / 8 kg",
        does_not_apply: "I do not pick up, carry, or support any tools or objects at work"
      }
    },
    repetitive_movements_duration: {
      label: "How much time do you spend performing similar movements over and over?",
      options: {
        less_than_30_min: "Less than 30 minutes a day",
        "30_min_to_2_hours": "30 minutes to 2 hours a day",
        "2_to_4_hours": "2 to 4 hours a day",
        more_than_4_hours: "More than 4 hours a day"
      }
    },
    environmental_conditions: {
      label: "Answer the following questions about environmental factors that may affect the work.",
      groups: {
        noise_distraction: {
          label: "Are you ever distracted by noises such as sirens, loud talking, or traffic?",
          options: {
            frequently: "Frequently",
            sometimes: "Sometimes",
            no: "No"
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
    }
  }
};
