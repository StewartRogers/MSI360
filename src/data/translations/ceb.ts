import type { Translation } from "../../types";

export const ceb: Translation = {
  app: {
    title: "MSI360",
    disclosure: "Prototype: ang imong mga tubag magpabilin niining browser gawas kung mopili ka nga i-download o ipaambit ang report.",
    continue_button: "Padayon",
    back_button: "Balik",
    processing_button: "Giproseso",
    analyzing_button: "Gianalisar",
    question_progress: "Pangutana {current} sa {total}",
    score_summary_title: "Katingbanan sa imong MSI risk",
    score_overall_risk: "Kinatibuk-ang MSI risk",
    score_download_report: "I-download ang report",
    score_not_available: "N/A",
    score_out_of_4: "{score} sa 4",
    score_risk_not_enough: "Kulang ang datos",
    score_risk_low: "Ubos nga risk",
    score_risk_possible: "Posibleng risk",
    score_risk_likely: "Lagmit nga risk",
    score_risk_known: "Nailhan nga risk",
    score_factor_not_enough: "Kulang ang datos aron masabtan ang {factor}.",
    score_factor_low: "Sa pagkakaron ubos ang risk nga may kalabotan sa {factor}.",
    score_factor_possible: "Posibleng risk sa kasamok o discomfort tungod sa {factor}.",
    score_factor_likely: "Lagmit nga risk sa discomfort tungod sa {factor}.",
    score_factor_known: "Nailhan nga risk sa kasakit ug/o kadaot.",
    score_psychosocial_note: "Ang psychosocial factors negatibong nakaapekto sa kinatibuk-ang MSI risk score ({multiplier}).",
    score_subject_contact_stress: "contact stress",
    score_subject_force: "kusog",
    score_subject_awkward_postures: "lisod nga postura",
    score_subject_repetition: "pagbalik-balik",
    score_subject_environmental: "environmental factors",
    wrap_email_copy: "Kopya sa email",
    wrap_review_results: "Ribyuha ang resulta",
    wrap_submit_report: "Isumiter ang report",
    email_title: "Kuhaa ang report pinaagi sa email",
    email_body: "Isulod ang imong email address kung gusto ka makadawat ug kopya niini nga report. Mahimong molungtad hangtod 15 minutos. Tan-awa ang junk o spam folder kung dili nimo makita ang email sa inbox.",
    email_next_body: "Makita nimo ang final report sa sunod nga screen.",
    email_address_label: "Email address",
    report_ready_title: "Andam na ang imong report",
    report_card_title: "MSI risk report",
    report_date_label: "Petsa",
    report_task_label: "Gi-analisar nga trabaho/buluhaton:",
    report_overall_score_label: "Kinatibuk-ang score:",
    report_highest_risk: "Pinakataas nga risk categories:",
    report_no_scored_categories: "Wala pay scored risk categories",
    report_email_copy_requested: "Gihangyo ang email copy para sa {email}.",
    report_download_pdf: "I-download ang PDF",
    report_email_report: "I-email ang report",
    report_done: "Human",
    submit_title: "Gusto ka bang mokompleto ug laing ErgoCheck assessment?",
    submit_option_reuse: "Oo, gusto ko mokompleto ug laing report gamit ang parehas nga impormasyon nga akong gihatag sa sinugdan, ug ma-edit kung kinahanglan.",
    submit_option_restart: "Oo, gusto ko magsugod pag-usab gamit ang bag-ong impormasyon",
    submit_option_no: "Dili, dili karon",
    submit_copy: "Salamat, pindota ang button sa ubos aron mahuman ang survey.",
    submit_button: "Isumiter",
    complete_title: "Salamat sa pagkompleto sa MSI 360 Survey",
    complete_body: "Ang imong mga tubag makatabang sa pag-ila sa MSI-related hazards sa trabahoan ug makatampo sa mas luwas nga palibot sa trabaho para sa tanan.",
    complete_next_steps_title: "Sunod nga mga lakang:",
    complete_next_step_review: "Ribyuha ang imong report ug rekomendasyon",
    complete_next_step_share: "Ipaambit ang findings sa imong supervisor kung angay",
    complete_next_step_visit: "Bisitaha ang worksafebc.com para sa dugang resources",
    complete_start_new: "Sugdi ang bag-ong assessment",
    description_title: "Deskripsyon",
    description_body: "Ang mosunod nga mga pangutana mahitungod sa trabaho nga imong ginabuhat sa kasagarang adlaw sa trabaho o sa espesipikong buluhaton o aktibidad nga gusto nimo i-assess karon. Ang tuyo mao nga isulti nimo sa MSI360 ang mga aksyon nga imong ginabuhat aron mahuman ang imong trabaho.",
    ai_loading_task_description: "Gianalisa ang imong paghulagway sa buluhaton...",
    ai_task_analysis_fallback_toast: "Ni-time out ang tubag sa AI task analysis. Gigamit ang lokal nga fallback.",
    ai_question_pruning_fallback_toast: "Ni-time out ang tubag sa AI question pruning. Gigamit ang fallback nga follow-up questions.",
    ai_fallback_toast_dismiss: "Isira ang AI fallback notice"
  },
  sections: {
    intro: "Mahitungod sa trabaho",
    symptoms: "Kasamtangang sintomas",
    contact_stress: "Contact stress",
    force: "Kusog",
    awkward_postures: "Lisod nga postura",
    repetition: "Pagbalik-balik",
    environmental: "Environmental factors",
    organizational: "Organisasyon sa trabaho"
  },
  questions: {
    "question-1": {
      label: "Unsa ang imong papel sa aktibidad nga gusto nimo i-assess karon?",
      options: {
        worker: "Trabahante",
        supervisor: "Supervisor",
        manager: "Manager",
        employer: "Employer",
        health_safety_committee: "Miyembro sa health and safety committee"
      }
    },
    "question-2": {
      label: "Unsa na kadugay ka niini nga papel sa imong kasamtangang employer?",
      options: {
        less_than_year: "Ubos sa usa ka tuig",
        one_to_five: "1 hangtod 5 ka tuig",
        six_to_ten: "6 hangtod 10 ka tuig",
        more_than_ten: "Labaw sa 10 ka tuig"
      }
    },
    "question-3": {
      label: "Unsa ang buluhaton o work activity nga gusto nimo i-assess?",
      help_text: "Palihug paghatag ug mubo nga deskripsyon sa espesipikong task o aktibidad nga gusto nimo i-assess; apila ang detalye sama sa posture, discomfort, workstation ergonomics, ug/o gitas-on sa break kung angay."
    },
    "question-4": {
      label: "Palihug ipakita ang imong height gamit ang mga opsyon sa ubos:",
      options: {
        under_5_4: "Ubos sa 5'4\" (< 1.62 m)",
        "5_4_to_5_9": "5'4\" - 5'9\" (1.62 m - 1.75 m)",
        "5_10_to_6_2": "5'10\" - 6'2\" (1.76 m - 1.88 m)",
        over_6_2: "Labaw sa 6'2\" (> 1.88 m)",
        prefer_not_to_say: "Dili ko gusto mosulti"
      }
    },
    // skipping this question for now, as it was made redundant by the task_description question.
    // we're leaving this in the code in case it is used in the future
    "question-5": {
      label: "Unsaon nimo pag-summarize ang klase sa trabaho o buluhaton nga gi-assess?",
      options: {
        office_clerical: "Opisina o clerical, desk-based nga trabaho/task",
        not_desk_based: "Dili desk-based sa opisina",
        both_setups: "Parehong setup"
      }
    },
    "question-6": {
      label: "Kasagaran ba nga naglingkod ka o nagbarog sa imong workday?",
      options: {
        mostly_sit: "Kasagaran naglingkod ko sa kadaghanan sa adlaw",
        mostly_stand_move: "Kasagaran nagbarog o naglihok ko sa kadaghanan sa adlaw",
        sit_and_stand: "Naglingkod ug nagbarog ko sa tibuok adlaw"
      }
    },
    "question-7": {
      label: "Hangtod asa mangayo ang employer o supervisor sa imong feedback bahin sa tools o equipment sa dili pa paliton?",
      options: {
        great_extent: "Sa dako nga sukod",
        some_extent: "Sa pipila ka sukod",
        rarely: "Talagsa",
        not_at_all: "Dili gyud"
      }
    },
    "question-8": {
      label: "Hangtod asa mangayo ang employer o supervisor sa imong feedback bahin kung unsaon pag-organisar ug/o pagbuhat sa imong trabaho?",
      options: {
        great_extent: "Sa dako nga sukod",
        some_extent: "Sa pipila ka sukod",
        rarely: "Talagsa",
        not_at_all: "Dili gyud"
      }
    },
    "question-9": {
      label: "Sa miaging 7 ka adlaw, nakasinati ka ba ug kasakit o discomfort nga may kalabotan sa trabaho?",
      options: {
        yes: "Oo",
        no: "Dili"
      }
    },
    "question-10": {
      label: "Gamit ang table sa ubos, ipakita ang specific body parts diin nakasinati ka ug work-related pain o discomfort samtang o human sa trabaho nga gi-assess. Ipakita usab kung usa o duha ka kilid sa lawas ang naapektuhan, ug kung ang kasakit milungtad ug 2 o labaw pa ka adlaw.",
      groups: {
        neck: {
          label: "1. Liog",
          options: {
            one_side: "Kasakit o discomfort sa usa ka kilid sa lawas",
            both_sides: "Kasakit o discomfort sa duha ka kilid",
            lasted_two_days: "Ang kasakit milungtad ug 2 o labaw pa ka adlaw"
          }
        },
        shoulders_upper_arms: {
          label: "2. Abaga o taas nga bukton",
          options: {
            one_side: "Kasakit o discomfort sa usa ka kilid sa lawas",
            both_sides: "Kasakit o discomfort sa duha ka kilid",
            lasted_two_days: "Ang kasakit milungtad ug 2 o labaw pa ka adlaw"
          }
        },
        elbows_forearms: {
          label: "3. Siko o forearm",
          options: {
            one_side: "Kasakit o discomfort sa usa ka kilid sa lawas",
            both_sides: "Kasakit o discomfort sa duha ka kilid",
            lasted_two_days: "Ang kasakit milungtad ug 2 o labaw pa ka adlaw"
          }
        },
        wrists_hands_fingers: {
          label: "4. Pulso, kamot, o tudlo",
          options: {
            one_side: "Kasakit o discomfort sa usa ka kilid sa lawas",
            both_sides: "Kasakit o discomfort sa duha ka kilid",
            lasted_two_days: "Ang kasakit milungtad ug 2 o labaw pa ka adlaw"
          }
        },
        lower_back: {
          label: "5. Ubos nga likod",
          options: {
            one_side: "Kasakit o discomfort sa usa ka kilid sa lawas",
            both_sides: "Kasakit o discomfort sa duha ka kilid",
            lasted_two_days: "Ang kasakit milungtad ug 2 o labaw pa ka adlaw"
          }
        },
        hips_upper_legs: {
          label: "6. Hips o paa",
          options: {
            one_side: "Kasakit o discomfort sa usa ka kilid sa lawas",
            both_sides: "Kasakit o discomfort sa duha ka kilid",
            lasted_two_days: "Ang kasakit milungtad ug 2 o labaw pa ka adlaw"
          }
        },
        knees_lower_legs: {
          label: "7. Tuhod o ubos nga bitiis",
          options: {
            one_side: "Kasakit o discomfort sa usa ka kilid sa lawas",
            both_sides: "Kasakit o discomfort sa duha ka kilid",
            lasted_two_days: "Ang kasakit milungtad ug 2 o labaw pa ka adlaw"
          }
        },
        ankles_feet: {
          label: "8. Ankle o tiil",
          options: {
            one_side: "Kasakit o discomfort sa usa ka kilid sa lawas",
            both_sides: "Kasakit o discomfort sa duha ka kilid",
            lasted_two_days: "Ang kasakit milungtad ug 2 o labaw pa ka adlaw"
          }
        }
      }
    },
    "question-11": {
      label: "Hunahunaa ang kasagarang workday o ang parte sa adlaw nga nagbuhat ka sa task. Pila ka oras ang imong gigahin sa pagsandig o pagpahuway sa parte sa lawas sa hait nga butang o edges?",
      options: {
        less_than_30_min: "Ubos sa 30 minutos kada adlaw",
        "30_min_to_1_hour": "30 minutos hangtod 1 oras kada adlaw",
        more_than_1_hour: "Labaw sa 1 oras kada adlaw",
        does_not_apply: "Dili applicable"
      }
    },
    "question-12": {
      label: "Pila ka oras ka nagluhod sa gahi o rough nga surfaces nga walay personal protection sama sa knee pads?",
      options: {
        less_than_30_min: "Ubos sa 30 minutos kada adlaw",
        "30_min_to_1_hour": "30 minutos hangtod 1 oras kada adlaw",
        more_than_1_hour: "Labaw sa 1 oras kada adlaw",
        does_not_apply: "Dili applicable"
      }
    },
    "question-13": {
      label: "Hunahunaa ang tools o objects nga imong ginakaptan labaw sa 30 minutos matag higayon. Pilia ang tanang statements nga mohaum. Ang katapusang opsyon dili mapili kung naay laing napili.",
      options: {
        poor_grip_size: "Dako ra o gamay ra para makuptan og tarong",
        irregular_unbalanced: "Irregular ang porma o dili balanse",
        sharp_handholds: "Sobra kahait ang handholds",
        slippery: "Madulas",
        none: "Wala sa ibabaw"
      }
    },
    "question-14": {
      label: "Gigamit ba nimo ang bisan unsang parte sa lawas isip temporaryong tool aron mahuman ang trabaho?",
      options: {
        less_than_one_hour: "Oo, ubos sa 1 oras kada adlaw",
        more_than_one_hour: "Oo, labaw sa 1 oras kada adlaw",
        no: "Dili"
      }
    },
    "question-15": {
      label: "Hunahunaa ang mga surface diin imong gitulod, gibira, o gibalhin ang objects sa trabaho nga gi-assess karon. Pilia ang tanang deskripsyon nga mohaum.",
      options: {
        smooth: "Hamis",
        soft: "Humok, sama sa balas, lapok, sagbot",
        rough: "Rough, sama sa graba, tile, granite",
        does_not_apply: "Dili applicable"
      }
    },
    "question-16": {
      label: "Unsa ka kanunay nimo itulod, ibira, o ibalhin ang objects nga imong giisip nga bug-at nga walay mechanical aid?",
      options: {
        most: "Kadaghanan sa oras",
        some: "Pipila ka oras",
        never: "Wala gyud"
      }
    },
    "question-17": {
      label: "Unsa ka bug-at ang tools o objects nga imong alsahon, dad-on, o suportahan nga walay mechanical assistance?",
      options: {
        less_than_5_lb: "Ubos sa 5 lb / 2 kg",
        "5_to_18_lb": "5 hangtod 18 lb / 2 hangtod 8 kg",
        more_than_18_lb: "Labaw sa 18 lb / 8 kg",
        does_not_apply: "Dili applicable"
      }
    },
    "question-18": {
      label: "Aduna bay tools ug/o equipment nga imong gigamit nga nanginahanglan ug dakong kusog aron sugdan?",
      options: {
        regularly: "Oo, naay tools o equipment nga regular nakong gamit nga nanginahanglan kusog",
        occasionally: "Oo, naay tools o equipment nga panagsa nakong gamit nga nanginahanglan kusog",
        no: "Dili"
      }
    },
    "question-19": {
      label: "Kung magtulod ug/o magbira ka sa objects nga imong giisip bug-at, unsa kadako ang tabang nga imong madawat?",
      options: {
        great_extent: "Sa dako nga sukod",
        some_extent: "Sa pipila ka sukod",
        do_not_ask: "Dili ko mangayo ug tabang",
        ask_but_no_assistance: "Mangayo ko ug tabang pero dili ko makadawat",
        does_not_apply: "Dili applicable"
      }
    },
    "question-20": {
      label: "Hunahunaa ang kasagarang workday o ang panahon sa task. Kung naglingkod o nagbarog, unsa ka kanunay ka magtrabaho nga ang ibabaw nga lawas nakaduko paunahan, paatras, o padaplin?",
      groups: {
        forward_backward: {
          label: "Moduko ko paunahan o paatras labaw sa 15 degrees",
          options: {
            most: "Kadaghanan sa oras",
            some: "Pipila ka oras",
            never: "Wala gyud"
          }
        },
        sideways: {
          label: "Moduko ko padaplin",
          options: {
            most: "Kadaghanan sa oras",
            some: "Pipila ka oras",
            never: "Wala gyud"
          }
        }
      }
    },
    "question-21": {
      label: "Sa pagbuhat sa work activities, motuyok ba nimo ang ibabaw nga lawas padaplin nga dili usbon ang posisyon sa tiil?",
      options: {
        often: "Oo, kasagaran nako kini buhaton sa trabaho",
        sometimes: "Oo, usahay nako kini buhaton sa trabaho",
        never: "Wala gyud"
      }
    },
    "question-22": {
      label: "Hunahunaa ang kasagarang workday. Kung naglingkod o nagbarog, ipakita kung asa ang imong mga kamot in relation sa lawas.",
      groups: {
        hands_above_shoulders: {
          label: "Kamot ibabaw sa abaga",
          options: {
            most: "Kadaghanan sa oras",
            some: "Pipila ka oras",
            never: "Wala gyud"
          }
        },
        hands_floor_to_knee: {
          label: "Kamot tali sa salog ug tuhod",
          options: {
            most: "Kadaghanan sa oras",
            some: "Pipila ka oras",
            never: "Wala gyud"
          }
        }
      }
    },
    "question-23": {
      label: "Aduna bay higayon nga usa o duha ka bukton hingpit nga naunat diretso paunahan samtang nagbuhat sa trabaho nga gi-assess karon?",
      options: {
        frequently: "Kanunay",
        sometimes: "Oo, usahay nako kini buhaton sa trabaho",
        never: "Wala gyud"
      }
    },
    "question-24": {
      label: "Kung naunat ang imong bukton, mokupot ba ka ug tool o mobalhin ug object?",
      options: {
        less_than_5_lb: "Ubos sa 5 lb / 2 kg",
        "5_to_10_lb": "5 hangtod 10 lb / 2 hangtod 4.5 kg",
        more_than_10_lb: "Labaw sa 10 lb / 4.5 kg",
        no: "Dili"
      }
    },
    "question-25": {
      label: "Giunsa pagposisyon ang imong ulo samtang nagbuhat sa trabaho nga gi-assess karon?",
      options: {
        neutral: "Kasagaran neutral, diretso tali sa abaga, level ang baba",
        slight_tilt: "Kasagaran nakatilid pataas o paubos ubos sa 15 degrees",
        deep_tilt: "Kasagaran nakatilid pataas, paubos, o padaplin labaw sa 15 degrees"
      }
    },
    "question-26": {
      label: "Unsa ka layo kasagaran nimo balukton ang pulso pataas ug paubos? Gamita ang hulagway sa ubos isip reference.",
      options: {
        "0_to_14": "Kasagaran 0 hangtod 14 degrees pataas o paubos",
        "15_to_30": "Kasagaran 15 hangtod 30 degrees",
        more_than_30: "Kasagaran labaw sa 30 degrees"
      }
    },
    "question-27": {
      label: "Unsa ka layo nimo i-angle ang pulso gikan sa usa ka kilid ngadto sa pikas?",
      options: {
        "0_to_10": "Kasagaran 0 hangtod 10 degrees wala o tuo",
        "10_to_20": "Kasagaran 10 hangtod 20 degrees",
        more_than_20: "Kasagaran labaw sa 20 degrees"
      }
    },
    "question-28": {
      label: "Posible ba nga ipabilin duol sa lawas ang tanang objects nga kinahanglan nimo itulod, ibira, alsahon, gamiton, ug uban pa?",
      options: {
        frequently: "Kanunay",
        sometimes: "Oo, usahay nako kini buhaton sa trabaho",
        never: "Wala gyud"
      }
    },
    "question-29": {
      label: "Hunahunaa ang kasagarang workday o panahon sa task. Pila ka oras ang imong gigahin sa pagbuhat sa parehas nga lihok balik-balik?",
      options: {
        less_than_30_min: "Ubos sa 30 minutos kada adlaw",
        "30_min_to_2_hours": "30 minutos hangtod 2 oras kada adlaw",
        "2_to_4_hours": "2 hangtod 4 oras kada adlaw",
        more_than_4_hours: "Labaw sa 4 oras kada adlaw"
      }
    },
    "question-30": {
      label: "Pila ka oras nimo balukton ang pulso pataas o paubos labaw sa 15 degrees?",
      options: {
        less_than_1_hour: "Ubos sa 1 oras kada adlaw",
        "1_to_2_hours": "1 hangtod 2 oras kada adlaw",
        more_than_2_hours: "Labaw sa 2 oras kada adlaw",
        none: "Wala sa ibabaw"
      }
    },
    "question-31": {
      label: "Pila ka oras nimo i-angle ang pulso labaw sa 15 degrees pa-left o pa-right?",
      options: {
        less_than_1_hour: "Ubos sa 1 oras kada adlaw",
        "1_to_2_hours": "1 hangtod 2 oras kada adlaw",
        more_than_2_hours: "Labaw sa 2 oras kada adlaw",
        none: "Wala sa ibabaw"
      }
    },
    "question-32": {
      label: "Pila ka oras ka mogamit ug kusgan nga muscle exertion, labaw sa 18 pounds / 8 kg gamit ang kaugalingong kusog, kung mogamit ug tool o mohandle ug object?",
      options: {
        less_than_5_min: "Ubos sa 5 minutos kada adlaw",
        "5_to_25_min": "5 hangtod 25 minutos kada adlaw",
        "30_min_to_2_5_hours": "30 minutos hangtod 2.5 oras kada adlaw",
        "2_5_to_5_5_hours": "2.5 hangtod 5.5 oras kada adlaw",
        more_than_5_5_hours: "Labaw sa 5.5 oras kada adlaw"
      }
    },
    "question-33": {
      label: "Kung kuptan nimo ang object tali sa thumb ug fingertips, gitawag kini ug pinch grip. Pila ka oras nimo gamiton ang pinch grip sa pagkupot sa object nga mas bug-at sa 2 pounds / 1 kg?",
      options: {
        less_than_2_hours: "Ubos sa 2 oras kada adlaw",
        more_than_2_hours: "Labaw sa 2 oras kada adlaw",
        none: "Wala sa ibabaw"
      }
    },
    "question-34": {
      label: "Kung palibutan nimo sa kamot ang object aron kuptan, gitawag kini ug power grip. Pila ka oras nimo gamiton ang power grip sa object nga mas bug-at sa 10 pounds / 4.5 kg?",
      options: {
        less_than_2_hours: "Ubos sa 2 oras kada adlaw",
        more_than_2_hours: "Labaw sa 2 oras kada adlaw",
        none: "Wala sa ibabaw"
      }
    },
    "question-35": {
      label: "Kung mogamit ka ug tools o equipment nga hinungdan sa vibration sa parte o tibuok lawas, pila ka oras nimo kini gamiton?",
      options: {
        less_than_1_hour: "Ubos sa 1 oras kada adlaw",
        "1_to_4_hours": "1 hangtod 4 oras kada adlaw",
        more_than_4_hours: "Labaw sa 4 oras kada adlaw",
        does_not_apply: "Dili applicable"
      }
    },
    "question-36": {
      label: "Kung magtulod o magbira ka ug items nga mas bug-at sa 80 pounds / 36 kg, pila ka oras nimo kini ibalhin sa rough o soft surfaces?",
      options: {
        less_than_5_min: "Ubos sa 5 minutos kada adlaw",
        "5_min_to_1_hour": "5 minutos hangtod 1 oras kada adlaw",
        more_than_1_hour: "Labaw sa 1 oras kada adlaw",
        does_not_apply: "Dili applicable"
      }
    },
    "question-37": {
      label: "Hunahunaa ang kasagarang workday. Madistract ba ka sa kasaba sama sa siren, kusog nga storya, traffic, ug uban pa?",
      options: {
        frequently: "Kanunay",
        sometimes: "Oo, usahay nako kini buhaton sa trabaho",
        no: "Dili"
      }
    },
    "question-38": {
      label: "Maapektuhan ba ka sa adlaw nga mosidlak o moreflect sa imong mata, o glare?",
      options: {
        frequently: "Kanunay",
        sometimes: "Oo, usahay nako kini buhaton sa trabaho",
        rarely: "Talagsa",
        never: "Wala gyud"
      }
    },
    "question-39": {
      label: "Kung ang imong trabaho nagkinahanglan nga motan-aw sa fine details o mobasa ug gamay nga letra, kaya ba nimo kini nga sayon?",
      options: {
        frequently: "Kanunay",
        sometimes: "Oo, usahay nako kini buhaton sa trabaho",
        rarely: "Talagsa",
        never: "Wala gyud",
        does_not_apply: "Dili applicable"
      }
    },
    "question-40": {
      label: "Kung nagtrabaho ka sa bugnaw nga palibot, mobati ba ka ug discomfort sa bukton, likod, tiil, tudlo, ug/o tudlo sa tiil?",
      options: {
        yes: "Oo",
        no: "Dili",
        does_not_apply: "Dili applicable"
      }
    },
    "question-41": {
      label: "Base sa work requirements, unsa ka kanunay ka pangayoon nga mag-overtime ug usa ka oras o labaw pa?",
      options: {
        frequently: "Kanunay",
        sometimes: "Oo, usahay nako kini buhaton sa trabaho",
        rarely: "Talagsa",
        never: "Wala gyud"
      }
    },
    "question-42": {
      label: "Unsa ka kanunay ka pangayoon nga motrabaho sa tight deadlines?",
      options: {
        frequently: "Kanunay",
        sometimes: "Oo, usahay nako kini buhaton sa trabaho",
        rarely: "Talagsa",
        never: "Wala gyud"
      }
    }
  }
};
