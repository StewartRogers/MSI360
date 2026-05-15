import type { Translation } from "../../types";

export const af: Translation = {
  "app": {
    "title": "MSI360",
    "disclosure": "Prototipe: u antwoorde bly in hierdie blaaier tensy u kies om u verslag af te laai of te deel.",
    "continue_button": "Gaan voort",
    "back_button": "Terug",
    "processing_button": "Verwerk",
    "analyzing_button": "Ontleed",
    "question_progress": "Vraag {current} van {total}",
    "score_summary_title": "U MSI-risiko-opsomming",
    "score_overall_risk": "Algehele MSI-risiko",
    "score_download_report": "Laai verslag af",
    "score_not_available": "N.v.t.",
    "score_out_of_4": "{score} uit 4",
    "score_risk_not_enough": "Nie genoeg data nie",
    "score_risk_low": "Lae risiko",
    "score_risk_possible": "Moontlike risiko",
    "score_risk_likely": "Waarskynlike risiko",
    "score_risk_known": "Bekende risiko",
    "score_factor_not_enough": "Nie genoeg data om {factor} te interpreteer nie.",
    "score_factor_low": "Tans lae risiko wat met {factor} verband hou.",
    "score_factor_possible": "Moontlike risiko van ongemak weens {factor}.",
    "score_factor_likely": "Waarskynlike risiko van ongemak weens {factor}.",
    "score_factor_known": "Bekende risiko van pyn en/of besering.",
    "score_psychosocial_note": "Psigososiale faktore het die algehele MSI-risikotelling negatief beïnvloed ({multiplier}).",
    "score_subject_contact_stress": "kontakdruk",
    "score_subject_force": "krag",
    "score_subject_awkward_postures": "ongemaklike houdings",
    "score_subject_repetition": "herhaling",
    "score_subject_environmental": "omgewingsfaktore",
    "wrap_email_copy": "E-poskopie",
    "wrap_review_results": "Hersien resultate",
    "wrap_submit_report": "Dien verslag in",
    "email_title": "Kry u verslag per e-pos",
    "email_body": "Voer u e-posadres in as u 'n kopie van hierdie verslag wil ontvang. Dit kan tot 15 minute neem. Gaan u gemorspos- of spam-lêergids na as u die e-pos nie in u inkassie sien nie.",
    "email_next_body": "U sal die finale verslag op die volgende skerm sien.",
    "email_address_label": "E-posadres",
    "report_ready_title": "U verslag is gereed",
    "report_card_title": "MSI-risikoverslag",
    "report_date_label": "Datum",
    "report_task_label": "Werk/taak ontleed:",
    "report_overall_score_label": "Algehele telling:",
    "report_highest_risk": "Hoogste risikokategorieë:",
    "report_no_scored_categories": "Nog geen getelde risikokategorieë nie",
    "report_email_copy_requested": "E-poskopie versoek vir {email}.",
    "report_download_pdf": "Laai PDF af",
    "report_email_report": "E-pos verslag",
    "report_done": "Klaar",
    "submit_title": "Wil u nog 'n ErgoCheck-assessering voltooi?",
    "submit_option_reuse": "Ja, ek wil nog 'n verslag voltooi met dieselfde aanvanklike inligting en dit wysig indien nodig.",
    "submit_option_restart": "Ja, ek wil weer met nuwe inligting begin",
    "submit_option_no": "Nee, nie nou nie",
    "submit_copy": "Dankie, druk die knoppie hieronder om die opname te voltooi.",
    "submit_button": "Dien in",
    "complete_title": "Dankie dat u die MSI 360-opname voltooi het",
    "complete_body": "U antwoorde help om MSI-verwante gevare in die werkplek te identifiseer en dra by tot 'n veiliger werksomgewing vir almal.",
    "complete_next_steps_title": "Volgende stappe:",
    "complete_next_step_review": "Hersien u verslag en aanbevelings",
    "complete_next_step_share": "Deel bevindings met u toesighouer indien toepaslik",
    "complete_next_step_visit": "Besoek worksafebc.com vir bykomende hulpbronne",
    "complete_start_new": "Begin nuwe assessering",
    "description_title": "Beskrywing",
    "description_body": "Die volgende vrae handel oor die werk wat u gedurende 'n tipiese werksdag doen, of die spesifieke taak of aktiwiteit wat u vandag wil assesseer. Die doel is dat u vir MSI360 vertel watter handelinge u uitvoer om u werk gedoen te kry."
  },
  "sections": {
    "intro": "Oor die werk",
    "symptoms": "Huidige simptome",
    "contact_stress": "Kontakdruk",
    "force": "Krag",
    "awkward_postures": "Ongemaklike houdings",
    "repetition": "Herhaling",
    "environmental": "Omgewingsfaktore",
    "organizational": "Werkorganisasie"
  },
  "questions": {
    "question-1": {
      "label": "Wat is u rol in die aktiwiteit wat u vandag wil assesseer?",
      "options": {
        "worker": "Werker",
        "supervisor": "Toesighouer",
        "manager": "Bestuurder",
        "employer": "Werkgewer",
        "health_safety_committee": "Lid van 'n gesondheids- en veiligheidskomitee"
      }
    },
    "question-2": {
      "label": "Hoe lank is u al in hierdie rol by u huidige werkgewer?",
      "options": {
        "less_than_year": "Minder as 'n jaar",
        "one_to_five": "1 tot 5 jaar",
        "six_to_ten": "6 tot 10 jaar",
        "more_than_ten": "Meer as 10 jaar"
      }
    },
    "question-3": {
      "label": "Wat is die taak of werksaktiwiteit wat u wil assesseer?",
      "help_text": "Gee asseblief 'n kort beskrywing van die spesifieke taak of aktiwiteit wat u wil assesseer; sluit waar toepaslik besonderhede soos houding, ongemak, werkstasie-ergonomie en/of pouselengte in."
    },
    "question-4": {
      "label": "Dui asseblief u lengte aan met die opsies hieronder:",
      "options": {
        "under_5_4": "Minder as 5'4\" (< 1,62 m)",
        "5_4_to_5_9": "5'4\" - 5'9\" (1,62 m - 1,75 m)",
        "5_10_to_6_2": "5'10\" - 6'2\" (1,76 m - 1,88 m)",
        "over_6_2": "Meer as 6'2\" (> 1,88 m)",
        "prefer_not_to_say": "Verkies om nie te sê nie"
      }
    },
    "question-5": {
      "label": "Hoe sou u die tipe werk of taak wat geassesseer word opsom?",
      "options": {
        "office_clerical": "Kantoor- of klerklike, lessenaargebaseerde werk/taak",
        "not_desk_based": "Nie by 'n lessenaar in 'n kantoor gebaseer nie",
        "both_setups": "Albei opstellings"
      }
    },
    "question-6": {
      "label": "Sit of staan u gewoonlik gedurende u werksdag?",
      "options": {
        "mostly_sit": "Ek sit gewoonlik die meeste van die dag",
        "mostly_stand_move": "Ek staan of beweeg gewoonlik die meeste van die dag",
        "sit_and_stand": "Ek sit en staan deur die dag"
      }
    },
    "question-7": {
      "label": "In watter mate vra u werkgewer of toesighouer u terugvoer oor gereedskap of toerusting voordat dit gekoop word?",
      "options": {
        "great_extent": "In 'n groot mate",
        "some_extent": "In 'n mate",
        "rarely": "Selde",
        "not_at_all": "Glad nie"
      }
    },
    "question-8": {
      "label": "In watter mate vra u werkgewer of toesighouer u terugvoer oor hoe u werk georganiseer en/of uitgevoer behoort te word?",
      "options": {
        "great_extent": "In 'n groot mate",
        "some_extent": "In 'n mate",
        "rarely": "Selde",
        "not_at_all": "Glad nie"
      }
    },
    "question-9": {
      "label": "Het u in die afgelope 7 dae werkverwante pyn of ongemak ervaar?",
      "options": {
        "yes": "Ja",
        "no": "Nee"
      }
    },
    "question-10": {
      "label": "Gebruik die tabel hieronder om die spesifieke liggaamsdele aan te dui waar u werkverwante pyn of ongemak ervaar het tydens of ná die werk of taak wat geassesseer word. Dui ook aan of een of albei kante van u liggaam betrokke was en of die pyn 2 of meer dae geduur het.",
      "groups": {
        "neck": {
          "label": "1. Nek",
          "options": {
            "one_side": "Pyn of ongemak aan een kant van die liggaam",
            "both_sides": "Pyn of ongemak aan albei kante",
            "lasted_two_days": "Pyn het 2 of meer dae geduur"
          }
        },
        "shoulders_upper_arms": {
          "label": "2. Skouers of bo-arms",
          "options": {
            "one_side": "Pyn of ongemak aan een kant van die liggaam",
            "both_sides": "Pyn of ongemak aan albei kante",
            "lasted_two_days": "Pyn het 2 of meer dae geduur"
          }
        },
        "elbows_forearms": {
          "label": "3. Elmboë of voorarms",
          "options": {
            "one_side": "Pyn of ongemak aan een kant van die liggaam",
            "both_sides": "Pyn of ongemak aan albei kante",
            "lasted_two_days": "Pyn het 2 of meer dae geduur"
          }
        },
        "wrists_hands_fingers": {
          "label": "4. Polse, hande of vingers",
          "options": {
            "one_side": "Pyn of ongemak aan een kant van die liggaam",
            "both_sides": "Pyn of ongemak aan albei kante",
            "lasted_two_days": "Pyn het 2 of meer dae geduur"
          }
        },
        "lower_back": {
          "label": "5. Laer rug",
          "options": {
            "one_side": "Pyn of ongemak aan een kant van die liggaam",
            "both_sides": "Pyn of ongemak aan albei kante",
            "lasted_two_days": "Pyn het 2 of meer dae geduur"
          }
        },
        "hips_upper_legs": {
          "label": "6. Heupe of dye",
          "options": {
            "one_side": "Pyn of ongemak aan een kant van die liggaam",
            "both_sides": "Pyn of ongemak aan albei kante",
            "lasted_two_days": "Pyn het 2 of meer dae geduur"
          }
        },
        "knees_lower_legs": {
          "label": "7. Knieë of onderbene",
          "options": {
            "one_side": "Pyn of ongemak aan een kant van die liggaam",
            "both_sides": "Pyn of ongemak aan albei kante",
            "lasted_two_days": "Pyn het 2 of meer dae geduur"
          }
        },
        "ankles_feet": {
          "label": "8. Enkels of voete",
          "options": {
            "one_side": "Pyn of ongemak aan een kant van die liggaam",
            "both_sides": "Pyn of ongemak aan albei kante",
            "lasted_two_days": "Pyn het 2 of meer dae geduur"
          }
        }
      }
    },
    "question-11": {
      "label": "Dink aan 'n tipiese werksdag of die deel van die dag wanneer u die taak uitvoer. Hoeveel tyd spandeer u daaraan om 'n deel van u liggaam op skerp voorwerpe of rande te laat rus?",
      "options": {
        "less_than_30_min": "Minder as 30 minute per dag",
        "30_min_to_1_hour": "30 minute tot 1 uur per dag",
        "more_than_1_hour": "Meer as 1 uur per dag",
        "does_not_apply": "Nie van toepassing nie"
      }
    },
    "question-12": {
      "label": "Hoeveel tyd spandeer u knielend op harde of growwe oppervlaktes sonder persoonlike beskerming, soos kniebeskermers?",
      "options": {
        "less_than_30_min": "Minder as 30 minute per dag",
        "30_min_to_1_hour": "30 minute tot 1 uur per dag",
        "more_than_1_hour": "Meer as 1 uur per dag",
        "does_not_apply": "Nie van toepassing nie"
      }
    },
    "question-13": {
      "label": "Dink aan die gereedskap of voorwerpe wat u langer as 30 minute op 'n slag vashou. Kies alle stellings wat van toepassing is. Die laaste opsie kan nie gekies word as enige ander opsie gemerk is nie.",
      "options": {
        "poor_grip_size": "Te groot of klein om behoorlik vas te gryp",
        "irregular_unbalanced": "Onreëlmatig gevorm of ongebalanseerd",
        "sharp_handholds": "Het te skerp handvatsels",
        "slippery": "Glyerig",
        "none": "Geen van bogenoemde nie"
      }
    },
    "question-14": {
      "label": "Gebruik u enige liggaamsdeel as 'n tydelike hulpmiddel om u werk te voltooi?",
      "options": {
        "less_than_one_hour": "Ja, minder as 1 uur per dag",
        "more_than_one_hour": "Ja, meer as 1 uur per dag",
        "no": "Nee"
      }
    },
    "question-15": {
      "label": "Dink aan die oppervlaktes waaroor u voorwerpe stoot, trek of beweeg tydens die werk wat vandag geassesseer word. Kies alle beskrywings wat van toepassing is.",
      "options": {
        "smooth": "Glad",
        "soft": "Sag, soos sand, modder, gras",
        "rough": "Growwe, soos gruis, teëls, graniet",
        "does_not_apply": "Nie van toepassing nie"
      }
    },
    "question-16": {
      "label": "Hoe gereeld stoot, trek of beweeg u voorwerpe wat u as swaar beskou sonder meganiese hulp?",
      "options": {
        "most": "Meeste van die tyd",
        "some": "Sommige van die tyd",
        "never": "Nooit"
      }
    },
    "question-17": {
      "label": "Hoe swaar is die gereedskap of voorwerpe wat u optel, dra of ondersteun sonder meganiese hulp?",
      "options": {
        "less_than_5_lb": "Minder as 5 lb / 2 kg",
        "5_to_18_lb": "5 tot 18 lb / 2 tot 8 kg",
        "more_than_18_lb": "Meer as 18 lb / 8 kg",
        "does_not_apply": "Nie van toepassing nie"
      }
    },
    "question-18": {
      "label": "Vereis enige gereedskap en/of toerusting wat u gebruik baie krag om te begin?",
      "options": {
        "regularly": "Ja, ten minste sommige gereedskap of toerusting wat ek gereeld gebruik vereis krag",
        "occasionally": "Ja, ten minste sommige gereedskap of toerusting wat ek soms gebruik vereis krag",
        "no": "Nee"
      }
    },
    "question-19": {
      "label": "Wanneer u voorwerpe stoot en/of trek wat u as swaar beskou, in watter mate ontvang u hulp?",
      "options": {
        "great_extent": "In 'n groot mate",
        "some_extent": "In 'n mate",
        "do_not_ask": "Ek vra nie vir hulp nie",
        "ask_but_no_assistance": "Ek vra vir hulp maar ontvang dit nie",
        "does_not_apply": "Nie van toepassing nie"
      }
    },
    "question-20": {
      "label": "Dink aan 'n tipiese werksdag of die deel van die dag wanneer u die taak uitvoer. Wanneer u sit of staan, hoe gereeld werk u met u bolyf vorentoe, agtertoe of sywaarts gebuig?",
      "groups": {
        "forward_backward": {
          "label": "Ek buig meer as 15 grade vorentoe of agtertoe",
          "options": {
            "most": "Meeste van die tyd",
            "some": "Sommige van die tyd",
            "never": "Nooit"
          }
        },
        "sideways": {
          "label": "Ek buig sywaarts",
          "options": {
            "most": "Meeste van die tyd",
            "some": "Sommige van die tyd",
            "never": "Nooit"
          }
        }
      }
    },
    "question-21": {
      "label": "Draai u ooit u bolyf na die kant sonder om die posisie van u voete te verander wanneer u werk?",
      "options": {
        "often": "Ja, ek doen dit gereeld by die werk",
        "sometimes": "Ja, ek doen dit soms by die werk",
        "never": "Nooit"
      }
    },
    "question-22": {
      "label": "Dink aan 'n tipiese werksdag. Wanneer u sit of staan, dui aan waar u hande in verhouding tot u liggaam is.",
      "groups": {
        "hands_above_shoulders": {
          "label": "Hande bo skouers",
          "options": {
            "most": "Meeste van die tyd",
            "some": "Sommige van die tyd",
            "never": "Nooit"
          }
        },
        "hands_floor_to_knee": {
          "label": "Hande tussen vloer en knie",
          "options": {
            "most": "Meeste van die tyd",
            "some": "Sommige van die tyd",
            "never": "Nooit"
          }
        }
      }
    },
    "question-23": {
      "label": "Is een of albei arms ooit heeltemal reguit vorentoe uitgestrek wanneer u die werk of taak doen wat vandag geassesseer word?",
      "options": {
        "frequently": "Gereeld",
        "sometimes": "Ja, ek doen dit soms by die werk",
        "never": "Nooit"
      }
    },
    "question-24": {
      "label": "Wanneer u arm(s) uitgestrek is, hou u ooit 'n gereedskap vas of beweeg u 'n voorwerp?",
      "options": {
        "less_than_5_lb": "Minder as 5 lb / 2 kg",
        "5_to_10_lb": "5 tot 10 lb / 2 tot 4,5 kg",
        "more_than_10_lb": "Meer as 10 lb / 4,5 kg",
        "no": "Nee"
      }
    },
    "question-25": {
      "label": "Hoe is u kop geposisioneer wanneer u die werk of taak doen wat vandag geassesseer word?",
      "options": {
        "neutral": "Dikwels neutraal, direk tussen die skouers, ken gelyk",
        "slight_tilt": "Dikwels minder as 15 grade op of af gekantel",
        "deep_tilt": "Dikwels meer as 15 grade op, af of sywaarts gekantel"
      }
    },
    "question-26": {
      "label": "Hoe ver buig u gewoonlik u pols op en af? Gebruik die prent hieronder as verwysing.",
      "options": {
        "0_to_14": "Gewoonlik 0 tot 14 grade op of af",
        "15_to_30": "Gewoonlik 15 tot 30 grade",
        "more_than_30": "Gewoonlik meer as 30 grade"
      }
    },
    "question-27": {
      "label": "Hoe ver kantel u u pols van kant tot kant?",
      "options": {
        "0_to_10": "Gewoonlik 0 tot 10 grade links of regs",
        "10_to_20": "Gewoonlik 10 tot 20 grade",
        "more_than_20": "Gewoonlik meer as 20 grade"
      }
    },
    "question-28": {
      "label": "Is dit moontlik om alle voorwerpe wat u moet stoot, trek, optel, gebruik, ens. naby u liggaam te hou?",
      "options": {
        "frequently": "Gereeld",
        "sometimes": "Ja, ek doen dit soms by die werk",
        "never": "Nooit"
      }
    },
    "question-29": {
      "label": "Dink aan 'n tipiese werksdag of die deel van die dag wanneer u die taak uitvoer. Hoeveel tyd spandeer u daaraan om soortgelyke bewegings oor en oor te doen?",
      "options": {
        "less_than_30_min": "Minder as 30 minute per dag",
        "30_min_to_2_hours": "30 minute tot 2 uur per dag",
        "2_to_4_hours": "2 tot 4 uur per dag",
        "more_than_4_hours": "Meer as 4 uur per dag"
      }
    },
    "question-30": {
      "label": "Hoeveel tyd spandeer u daaraan om u pols meer as 15 grade op of af te buig?",
      "options": {
        "less_than_1_hour": "Minder as 1 uur per dag",
        "1_to_2_hours": "1 tot 2 uur per dag",
        "more_than_2_hours": "Meer as 2 uur per dag",
        "none": "Geen van bogenoemde nie"
      }
    },
    "question-31": {
      "label": "Hoeveel tyd spandeer u daaraan om u pols meer as 15 grade links of regs te kantel?",
      "options": {
        "less_than_1_hour": "Minder as 1 uur per dag",
        "1_to_2_hours": "1 tot 2 uur per dag",
        "more_than_2_hours": "Meer as 2 uur per dag",
        "none": "Geen van bogenoemde nie"
      }
    },
    "question-32": {
      "label": "Hoeveel tyd spandeer u aan kragtige spierinspanning, meer as 18 pond / 8 kg met u eie krag, wanneer u 'n gereedskap gebruik of 'n voorwerp hanteer?",
      "options": {
        "less_than_5_min": "Minder as 5 minute per dag",
        "5_to_25_min": "5 tot 25 minute per dag",
        "30_min_to_2_5_hours": "30 minute tot 2,5 uur per dag",
        "2_5_to_5_5_hours": "2,5 tot 5,5 uur per dag",
        "more_than_5_5_hours": "Meer as 5,5 uur per dag"
      }
    },
    "question-33": {
      "label": "Wanneer u 'n voorwerp tussen u duim en vingerpunte vasgryp, word dit 'n knypgreep genoem. Hoeveel tyd gebruik u 'n knypgreep om 'n voorwerp swaarder as 2 pond / 1 kg vas te hou?",
      "options": {
        "less_than_2_hours": "Minder as 2 uur per dag",
        "more_than_2_hours": "Meer as 2 uur per dag",
        "none": "Geen van bogenoemde nie"
      }
    },
    "question-34": {
      "label": "Wanneer u u hand om 'n voorwerp draai om dit vas te hou, word dit 'n kraggreep genoem. Hoeveel tyd gebruik u 'n kraggreep om 'n voorwerp swaarder as 10 pond / 4,5 kg vas te hou?",
      "options": {
        "less_than_2_hours": "Minder as 2 uur per dag",
        "more_than_2_hours": "Meer as 2 uur per dag",
        "none": "Geen van bogenoemde nie"
      }
    },
    "question-35": {
      "label": "As u gereedskap of toerusting gebruik wat vibrasies in 'n deel van of u hele liggaam veroorsaak, hoe lank gebruik u dit?",
      "options": {
        "less_than_1_hour": "Minder as 1 uur per dag",
        "1_to_4_hours": "1 tot 4 uur per dag",
        "more_than_4_hours": "Meer as 4 uur per dag",
        "does_not_apply": "Nie van toepassing nie"
      }
    },
    "question-36": {
      "label": "As u voorwerpe swaarder as 80 pond / 36 kg stoot of trek, hoeveel tyd spandeer u om dit oor growwe of sagte oppervlaktes te beweeg?",
      "options": {
        "less_than_5_min": "Minder as 5 minute per dag",
        "5_min_to_1_hour": "5 minute tot 1 uur per dag",
        "more_than_1_hour": "Meer as 1 uur per dag",
        "does_not_apply": "Nie van toepassing nie"
      }
    },
    "question-37": {
      "label": "Dink aan 'n tipiese werksdag. Word u ooit afgelei deur geluide soos sirenes, harde praat, verkeer, ens.?",
      "options": {
        "frequently": "Gereeld",
        "sometimes": "Ja, ek doen dit soms by die werk",
        "no": "Nee"
      }
    },
    "question-38": {
      "label": "Word u beïnvloed deur sonlig wat in u oë skyn of weerkaats, naamlik glans?",
      "options": {
        "frequently": "Gereeld",
        "sometimes": "Ja, ek doen dit soms by die werk",
        "rarely": "Selde",
        "never": "Nooit"
      }
    },
    "question-39": {
      "label": "As u werk vereis dat u fyn besonderhede sien of klein druk lees, kan u dit maklik doen?",
      "options": {
        "frequently": "Gereeld",
        "sometimes": "Ja, ek doen dit soms by die werk",
        "rarely": "Selde",
        "never": "Nooit",
        "does_not_apply": "Nie van toepassing nie"
      }
    },
    "question-40": {
      "label": "As u in koue omgewings werk, voel u ongemak in u arms, rug, bene, vingers en/of tone?",
      "options": {
        "yes": "Ja",
        "no": "Nee",
        "does_not_apply": "Nie van toepassing nie"
      }
    },
    "question-41": {
      "label": "Met inagneming van u werksvereistes, hoe gereeld word u gevra om vir een uur of langer oortyd te werk?",
      "options": {
        "frequently": "Gereeld",
        "sometimes": "Ja, ek doen dit soms by die werk",
        "rarely": "Selde",
        "never": "Nooit"
      }
    },
    "question-42": {
      "label": "Hoe gereeld word u gevra om teen streng sperdatums te werk?",
      "options": {
        "frequently": "Gereeld",
        "sometimes": "Ja, ek doen dit soms by die werk",
        "rarely": "Selde",
        "never": "Nooit"
      }
    }
  }
};
