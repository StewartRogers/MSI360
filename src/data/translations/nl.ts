import type { Translation } from "../../types";

export const nl: Translation = {
  app: {
    title: "MSI360",
    disclosure: "Prototype: je antwoorden blijven in deze browser tenzij je ervoor kiest je rapport te downloaden of te delen.",
    continue_button: "Doorgaan",
    back_button: "Terug",
    processing_button: "Bezig met verwerken",
    analyzing_button: "Bezig met analyseren",
    question_progress: "Vraag {current} van {total}",
    score_summary_title: "Samenvatting van je MSI-risico",
    score_overall_risk: "Algemeen MSI-risico",
    score_download_report: "Rapport downloaden",
    score_not_available: "N.v.t.",
    score_out_of_4: "{score} van 4",
    score_risk_not_enough: "Onvoldoende gegevens",
    score_risk_low: "Laag risico",
    score_risk_possible: "Mogelijk risico",
    score_risk_likely: "Waarschijnlijk risico",
    score_risk_known: "Bekend risico",
    score_factor_not_enough: "Onvoldoende gegevens om {factor} te interpreteren.",
    score_factor_low: "Momenteel laag risico in verband met {factor}.",
    score_factor_possible: "Mogelijk risico op ongemak door {factor}.",
    score_factor_likely: "Waarschijnlijk risico op ongemak door {factor}.",
    score_factor_known: "Bekend risico op pijn en/of letsel.",
    score_psychosocial_note: "Psychosociale factoren hebben de algemene MSI-risicoscore negatief beinvloed ({multiplier}).",
    score_subject_contact_stress: "contactdruk",
    score_subject_force: "kracht",
    score_subject_awkward_postures: "ongunstige houdingen",
    score_subject_repetition: "herhaling",
    score_subject_environmental: "omgevingsfactoren",
    wrap_email_copy: "E-mailkopie",
    wrap_review_results: "Resultaten bekijken",
    wrap_submit_report: "Rapport indienen",
    email_title: "Ontvang je rapport per e-mail",
    email_body: "Voer je e-mailadres in als je een kopie van dit rapport wilt ontvangen. Dit kan tot 15 minuten duren. Controleer je map met ongewenste e-mail of spam als je de e-mail niet in je inbox ziet.",
    email_next_body: "Je ziet het definitieve rapport op het volgende scherm.",
    email_address_label: "E-mailadres",
    report_ready_title: "Je rapport is klaar",
    report_card_title: "MSI-risicorapport",
    report_date_label: "Datum",
    report_task_label: "Geanalyseerde functie/taak:",
    report_overall_score_label: "Algemene score:",
    report_highest_risk: "Categorieen met het hoogste risico:",
    report_no_scored_categories: "Nog geen gescoorde risicocategorieen",
    report_email_copy_requested: "E-mailkopie aangevraagd voor {email}.",
    report_download_pdf: "PDF downloaden",
    report_email_report: "Rapport e-mailen",
    report_done: "Gereed",
    submit_title: "Wil je nog een ErgoCheck-beoordeling invullen?",
    submit_option_reuse: "Ja, ik wil nog een rapport invullen met dezelfde informatie die ik eerst heb gegeven, met mogelijkheid om waar nodig te bewerken.",
    submit_option_restart: "Ja, ik wil opnieuw beginnen met nieuwe informatie",
    submit_option_no: "Nee, nu niet",
    submit_copy: "Dank je, druk op de knop hieronder om de vragenlijst af te ronden.",
    submit_button: "Indienen",
    complete_title: "Bedankt voor het invullen van de MSI 360-vragenlijst",
    complete_body: "Je antwoorden helpen MSI-gerelateerde gevaren op je werkplek te identificeren en dragen bij aan een veiligere werkomgeving voor iedereen.",
    complete_next_steps_title: "Volgende stappen:",
    complete_next_step_review: "Bekijk je rapport en aanbevelingen",
    complete_next_step_share: "Deel bevindingen met je leidinggevende als dat passend is",
    complete_next_step_visit: "Ga naar worksafebc.com voor aanvullende bronnen",
    complete_start_new: "Nieuwe beoordeling starten",
    description_title: "Beschrijving",
    description_body: "De volgende vragen gaan over het werk dat je doet tijdens een typische werkdag, of wanneer je de specifieke taak of activiteit uitvoert die je vandaag wilt beoordelen. Het doel is dat je MSI360 vertelt welke handelingen je uitvoert om je werk gedaan te krijgen.",
    ai_loading_task_description: "Uw taakbeschrijving wordt geanalyseerd...",
    ai_task_analysis_fallback_toast: "De AI-taakanalyse reageerde niet op tijd. De lokale fallback wordt gebruikt.",
    ai_question_pruning_fallback_toast: "De AI-vraagselectie reageerde niet op tijd. Fallback-vervolgvragen worden gebruikt.",
    ai_fallback_toast_dismiss: "AI-fallbackmelding sluiten"
  },
  sections: {
    intro: "Over het werk",
    symptoms: "Huidige symptomen",
    contact_stress: "Contactdruk",
    force: "Kracht",
    awkward_postures: "Ongunstige houdingen",
    repetition: "Herhaling",
    environmental: "Omgevingsfactoren",
    organizational: "Werkorganisatie"
  },
  questions: {
    "question-1": {
      label: "Wat is je rol in de activiteit die je vandaag wilt beoordelen?",
      options: {
        worker: "Werknemer",
        supervisor: "Leidinggevende",
        manager: "Manager",
        employer: "Werkgever",
        health_safety_committee: "Lid van een gezondheids- en veiligheidscommissie"
      }
    },
    "question-2": {
      label: "Hoe lang werk je in deze rol bij je huidige werkgever?",
      options: {
        less_than_year: "Minder dan een jaar",
        one_to_five: "1 tot 5 jaar",
        six_to_ten: "6 tot 10 jaar",
        more_than_ten: "Meer dan 10 jaar"
      }
    },
    "question-3": {
      label: "Welke taak of werkactiviteit wil je beoordelen?",
      help_text: "Geef een korte beschrijving van de specifieke taak of activiteit die je wilt beoordelen. Vermeld waar van toepassing details zoals houding, ongemak, ergonomie van de werkplek en/of duur van pauzes."
    },
    "question-4": {
      label: "Geef je lengte aan met de onderstaande opties:",
      options: {
        under_5_4: "Minder dan 5'4\" (< 1,62 m)",
        "5_4_to_5_9": "5'4\" - 5'9\" (1,62 m - 1,75 m)",
        "5_10_to_6_2": "5'10\" - 6'2\" (1,76 m - 1,88 m)",
        over_6_2: "Meer dan 6'2\" (> 1,88 m)",
        prefer_not_to_say: "Zeg ik liever niet"
      }
    },
    // skipping this question for now, as it was made redundant by the task_description question.
    // we're leaving this in the code in case it is used in the future
    "question-5": {
      label: "Hoe zou je het soort werk of de taak die wordt beoordeeld samenvatten?",
      options: {
        office_clerical: "Kantoor- of administratieve taak, vooral aan een bureau",
        not_desk_based: "Niet gebaseerd aan een bureau op kantoor",
        both_setups: "Beide situaties"
      }
    },
    "question-6": {
      label: "Zit of sta je meestal tijdens je werkdag?",
      options: {
        mostly_sit: "Ik zit meestal het grootste deel van de dag",
        mostly_stand_move: "Ik sta of beweeg meestal het grootste deel van de dag",
        sit_and_stand: "Ik zit en sta verspreid over de dag"
      }
    },
    "question-7": {
      label: "In welke mate vraagt je werkgever of leidinggevende je feedback over gereedschap of apparatuur voordat deze worden aangeschaft?",
      options: {
        great_extent: "In grote mate",
        some_extent: "In zekere mate",
        rarely: "Zelden",
        not_at_all: "Helemaal niet"
      }
    },
    "question-8": {
      label: "In welke mate vraagt je werkgever of leidinggevende je feedback over hoe je werk georganiseerd en/of uitgevoerd moet worden?",
      options: {
        great_extent: "In grote mate",
        some_extent: "In zekere mate",
        rarely: "Zelden",
        not_at_all: "Helemaal niet"
      }
    },
    "question-9": {
      label: "Heb je in de afgelopen 7 dagen werkgerelateerde pijn of ongemak ervaren?",
      options: {
        yes: "Ja",
        no: "Nee"
      }
    },
    "question-10": {
      label: "Geef met de onderstaande tabel aan in welke specifieke lichaamsdelen je werkgerelateerde pijn of ongemak hebt ervaren tijdens of na het uitvoeren van de beoordeelde functie of taak.\n\nGeef aan of a) een of beide zijden van je lichaam betrokken waren, en b) de pijn 2 dagen of langer duurde.",
      groups: {
        neck: {
          label: "1. Nek",
          options: {
            one_side: "Pijn of ongemak aan een kant van het lichaam, bijvoorbeeld links of rechts",
            both_sides: "Pijn of ongemak aan zowel de linker- als rechterkant",
            lasted_two_days: "De pijn duurde 2 dagen of langer"
          }
        },
        shoulders_upper_arms: {
          label: "2. Schouders of bovenarmen",
          options: {
            one_side: "Pijn of ongemak aan een kant van het lichaam, bijvoorbeeld links of rechts",
            both_sides: "Pijn of ongemak aan zowel de linker- als rechterkant",
            lasted_two_days: "De pijn duurde 2 dagen of langer"
          }
        },
        elbows_forearms: {
          label: "3. Ellebogen of onderarmen",
          options: {
            one_side: "Pijn of ongemak aan een kant van het lichaam, bijvoorbeeld links of rechts",
            both_sides: "Pijn of ongemak aan zowel de linker- als rechterkant",
            lasted_two_days: "De pijn duurde 2 dagen of langer"
          }
        },
        wrists_hands_fingers: {
          label: "4. Polsen, handen of vingers",
          options: {
            one_side: "Pijn of ongemak aan een kant van het lichaam, bijvoorbeeld links of rechts",
            both_sides: "Pijn of ongemak aan zowel de linker- als rechterkant",
            lasted_two_days: "De pijn duurde 2 dagen of langer"
          }
        },
        lower_back: {
          label: "5. Onderrug",
          options: {
            one_side: "Pijn of ongemak aan een kant van het lichaam, bijvoorbeeld links of rechts",
            both_sides: "Pijn of ongemak aan zowel de linker- als rechterkant",
            lasted_two_days: "De pijn duurde 2 dagen of langer"
          }
        },
        hips_upper_legs: {
          label: "6. Heupen of bovenbenen",
          options: {
            one_side: "Pijn of ongemak aan een kant van het lichaam, bijvoorbeeld links of rechts",
            both_sides: "Pijn of ongemak aan zowel de linker- als rechterkant",
            lasted_two_days: "De pijn duurde 2 dagen of langer"
          }
        },
        knees_lower_legs: {
          label: "7. Knieen of onderbenen",
          options: {
            one_side: "Pijn of ongemak aan een kant van het lichaam, bijvoorbeeld links of rechts",
            both_sides: "Pijn of ongemak aan zowel de linker- als rechterkant",
            lasted_two_days: "De pijn duurde 2 dagen of langer"
          }
        },
        ankles_feet: {
          label: "8. Enkels of voeten",
          options: {
            one_side: "Pijn of ongemak aan een kant van het lichaam, bijvoorbeeld links of rechts",
            both_sides: "Pijn of ongemak aan zowel de linker- als rechterkant",
            lasted_two_days: "De pijn duurde 2 dagen of langer"
          }
        }
      }
    },
    "question-11": {
      label: "Denk aan een typische werkdag, of aan het deel van de werkdag waarin je de specifieke taak uitvoert die je beoordeelt. Hoeveel tijd besteed je aan leunen of rusten met een deel van je lichaam op scherpe voorwerpen of randen?",
      options: {
        less_than_30_min: "Minder dan 30 minuten per dag",
        "30_min_to_1_hour": "30 minuten tot 1 uur per dag",
        more_than_1_hour: "Meer dan 1 uur per dag",
        does_not_apply: "Ik leun op het werk niet op scherpe voorwerpen of randen"
      }
    },
    "question-12": {
      label: "Hoeveel tijd besteed je aan knielen op harde of ruwe oppervlakken zonder persoonlijke bescherming, bijvoorbeeld zonder kniebeschermers?",
      options: {
        less_than_30_min: "Minder dan 30 minuten per dag",
        "30_min_to_1_hour": "30 minuten tot 1 uur per dag",
        more_than_1_hour: "Meer dan 1 uur per dag",
        does_not_apply: "Ik kniel op het werk niet zonder bescherming op harde oppervlakken"
      }
    },
    "question-13": {
      label: "Denk aan de soorten gereedschap of voorwerpen die je langer dan 30 minuten achter elkaar vasthoudt. Selecteer uit de onderstaande beschrijvingen alles wat van toepassing is.\n\nDe laatste optie kan niet worden gekozen als een andere optie is aangevinkt.",
      options: {
        poor_grip_size: "Te groot of te klein om goed vast te pakken",
        irregular_unbalanced: "Onregelmatig gevormd of uit balans",
        sharp_handholds: "Met te scherpe handgrepen",
        slippery: "Glad",
        none: "Geen van bovenstaande"
      }
    },
    "question-14": {
      label: "Gebruik je een lichaamsdeel als hulpmiddel om je werk af te maken? Je kunt bijvoorbeeld je handpalm of knie gebruiken om kracht op een oppervlak uit te oefenen.\n\nDe afbeelding hieronder toont een voorbeeld van dit soort gebruik van je lichaam.",
      options: {
        less_than_one_hour: "Ja, minder dan 1 uur per dag",
        more_than_one_hour: "Ja, meer dan 1 uur per dag",
        no: "Nee, ik gebruik mijn lichaam niet als hulpmiddel in mijn werk"
      }
    },
    "question-15": {
      label: "Denk aan de soorten oppervlakken waarover je voorwerpen duwt, trekt of verplaatst tijdens de functie, taak of werkactiviteit die je vandaag beoordeelt. Selecteer alle beschrijvingen die van toepassing zijn.",
      options: {
        smooth: "Glad, bijvoorbeeld afgewerkte oppervlakken",
        soft: "Zacht, bijvoorbeeld zand, modder, gras",
        rough: "Ruw, bijvoorbeeld grind, tegels, graniet",
        does_not_apply: "Ik duw of trek geen voorwerpen over oppervlakken om mijn werk te doen"
      }
    },
    "question-16": {
      label: "Hoe vaak duw, trek of verplaats je voorwerpen die je zwaar vindt zonder mechanisch hulpmiddel, zoals een kruiwagen of steekwagen?",
      options: {
        most: "Meestal",
        some: "Soms",
        never: "Nooit"
      }
    },
    "question-17": {
      label: "Hoe zwaar zijn de gereedschappen of voorwerpen die je zonder mechanische hulp optilt, draagt of ondersteunt?",
      options: {
        less_than_5_lb: "Minder dan 5 lb / 2 kg",
        "5_to_18_lb": "5 tot 18 lb / 2 tot 8 kg",
        more_than_18_lb: "Meer dan 18 lb / 8 kg",
        does_not_apply: "Ik til, draag of ondersteun geen gereedschappen of voorwerpen op het werk"
      }
    },
    "question-18": {
      label: "Vereisen sommige gereedschappen en/of apparatuur die je gebruikt veel kracht om te starten? Bijvoorbeeld een grasmaaier met een koord waaraan je hard moet trekken, of een pedaal dat je stevig moet indrukken.",
      options: {
        regularly: "Ja, minstens enkele gereedschappen of apparaten die ik regelmatig gebruik vereisen kracht",
        occasionally: "Ja, minstens enkele gereedschappen of apparaten die ik af en toe gebruik vereisen kracht",
        no: "Nee, geen van de gereedschappen of apparaten die ik gebruik vereist kracht om te starten"
      }
    },
    "question-19": {
      label: "Wanneer je voorwerpen duwt en/of trekt die je zwaar vindt, in welke mate krijg je hulp, bijvoorbeeld van een collega of door een steekwagen of kruiwagen te gebruiken?",
      options: {
        great_extent: "In grote mate",
        some_extent: "In zekere mate",
        do_not_ask: "Ik vraag niet om hulp",
        ask_but_no_assistance: "Ik vraag om hulp maar krijg die niet",
        does_not_apply: "Ik duw of trek dit soort voorwerpen niet tijdens de werkdag"
      }
    },
    "question-20": {
      label: "Denk aan een typische werkdag, of aan het deel van de werkdag waarin je de specifieke taak uitvoert die je beoordeelt. Hoe vaak werk je zittend of staand met je bovenlichaam naar voren, naar achteren of zijwaarts gebogen?\n\nSelecteer de opties die op jou van toepassing zijn.",
      groups: {
        forward_backward: {
          label: "Ik buig meer dan 15 graden naar voren of naar achteren",
          options: {
            most: "Meestal",
            some: "Soms",
            never: "Nooit"
          }
        },
        sideways: {
          label: "Ik buig zijwaarts",
          options: {
            most: "Meestal",
            some: "Soms",
            never: "Nooit"
          }
        }
      }
    },
    "question-21": {
      label: "Draai je tijdens je werkzaamheden ooit je bovenlichaam naar een kant zonder je voeten te verplaatsen, terwijl je zit of staat?",
      options: {
        often: "Ja, ik doe dit vaak tijdens mijn functie, taak of werkactiviteit",
        sometimes: "Ja, ik doe dit soms tijdens mijn functie, taak of werkactiviteit",
        never: "Nee, ik draai mijn bovenlichaam nooit tijdens het werk"
      }
    },
    "question-22": {
      label: "Denk aan een typische werkdag, of aan het deel van de werkdag waarin je de specifieke taak uitvoert die je beoordeelt. Geef aan waar je handen zich bevinden ten opzichte van je lichaam wanneer je zit of staat.\n\nSelecteer de opties die op jou van toepassing zijn.",
      groups: {
        hands_above_shoulders: {
          label: "Handen boven schouderhoogte",
          options: {
            most: "Meestal",
            some: "Soms",
            never: "Nooit"
          }
        },
        hands_floor_to_knee: {
          label: "Handen tussen vloer en knie",
          options: {
            most: "Meestal",
            some: "Soms",
            never: "Nooit"
          }
        }
      }
    },
    "question-23": {
      label: "Zijn een of beide armen ooit volledig recht naar voren gestrekt wanneer je de functie, taak of werkactiviteit uitvoert die je vandaag beoordeelt?",
      options: {
        frequently: "Ja, mijn armen zijn vaak volledig recht naar voren gestrekt",
        sometimes: "Ja, mijn armen zijn soms volledig recht naar voren gestrekt",
        never: "Nee, mijn armen zijn nooit volledig recht naar voren gestrekt"
      }
    },
    "question-24": {
      label: "Houd je, wanneer je arm(en) gestrekt zijn, ooit gereedschap vast of verplaats je een object?",
      options: {
        less_than_5_lb: "Ja, en het is vaak minder dan 5 lb / 2 kg",
        "5_to_10_lb": "Ja, en het is vaak 5 tot 10 lb / 2 tot 4,5 kg",
        more_than_10_lb: "Ja, en het is vaak meer dan 10 lb / 4,5 kg",
        no: "Nee, ik houd geen gereedschap of voorwerpen vast wanneer mijn arm(en) gestrekt zijn"
      }
    },
    "question-25": {
      label: "Hoe is je hoofd gepositioneerd wanneer je de functie, taak of werkactiviteit uitvoert die je vandaag beoordeelt?",
      options: {
        neutral: "Vaak neutraal, recht tussen de schouders, met de kin horizontaal",
        slight_tilt: "Vaak minder dan 15 graden omhoog of omlaag gekanteld",
        deep_tilt: "Vaak meer dan 15 graden omhoog, omlaag of zijwaarts gekanteld"
      }
    },
    "question-26": {
      label: "Hoe ver buig je je pols meestal omhoog en omlaag? Gebruik de afbeelding hieronder als referentie.",
      options: {
        "0_to_14": "Meestal 0 tot 14 graden omhoog of omlaag",
        "15_to_30": "Meestal 15 tot 30 graden",
        more_than_30: "Meestal meer dan 30 graden"
      }
    },
    "question-27": {
      label: "Hoe ver kantel je je pols van links naar rechts?",
      options: {
        "0_to_10": "Meestal 0 tot 10 graden links of rechts",
        "10_to_20": "Meestal 10 tot 20 graden",
        more_than_20: "Meestal meer dan 20 graden"
      }
    },
    "question-28": {
      label: "Is het mogelijk om alle voorwerpen die je moet duwen, trekken, tillen, gebruiken, enz. dicht bij je lichaam te houden?",
      options: {
        frequently: "Ja, vaak",
        sometimes: "Ja, soms",
        never: "Nee, nooit"
      }
    },
    "question-29": {
      label: "Denk aan een typische werkdag, of aan het deel van de werkdag waarin je de specifieke taak uitvoert die je beoordeelt. Hoeveel tijd besteed je aan het steeds opnieuw uitvoeren van vergelijkbare bewegingen?",
      options: {
        less_than_30_min: "Minder dan 30 minuten per dag",
        "30_min_to_2_hours": "30 minuten tot 2 uur per dag",
        "2_to_4_hours": "2 tot 4 uur per dag",
        more_than_4_hours: "Meer dan 4 uur per dag"
      }
    },
    "question-30": {
      label: "Hoeveel tijd besteed je aan het buigen van je pols meer dan 15 graden omhoog of omlaag? Gebruik de afbeelding hieronder als referentie.",
      options: {
        less_than_1_hour: "Minder dan 1 uur per dag",
        "1_to_2_hours": "1 tot 2 uur per dag",
        more_than_2_hours: "Meer dan 2 uur per dag",
        none: "Helemaal geen tijd"
      }
    },
    "question-31": {
      label: "Hoeveel tijd besteed je aan het kantelen van je pols meer dan 15 graden naar links of rechts? Gebruik de afbeelding hieronder als referentie.",
      options: {
        less_than_1_hour: "Minder dan 1 uur per dag",
        "1_to_2_hours": "1 tot 2 uur per dag",
        more_than_2_hours: "Meer dan 2 uur per dag",
        none: "Helemaal geen tijd"
      }
    },
    "question-32": {
      label: "Hoeveel tijd besteed je aan krachtige spierinspanning, meer dan 18 pond / 8 kg met je eigen kracht, wanneer je gereedschap gebruikt of een object hanteert?",
      options: {
        less_than_5_min: "Minder dan 5 minuten per dag",
        "5_to_25_min": "5 tot 25 minuten per dag",
        "30_min_to_2_5_hours": "30 minuten tot 2,5 uur per dag",
        "2_5_to_5_5_hours": "2,5 tot 5,5 uur per dag",
        more_than_5_5_hours: "Meer dan 5,5 uur per dag"
      }
    },
    "question-33": {
      label: "Wanneer je een voorwerp tussen je duim en vingertoppen vastpakt, heet dat een pincetgreep. Hoeveel tijd besteed je tijdens de functie, taak of werkactiviteit die je vandaag beoordeelt aan het gebruiken van een pincetgreep om een object vast te houden dat zwaarder is dan 2 pond / 1 kg?",
      options: {
        less_than_2_hours: "Minder dan 2 uur per dag",
        more_than_2_hours: "Meer dan 2 uur per dag",
        none: "Helemaal geen tijd"
      }
    },
    "question-34": {
      label: "Wanneer je je hand om een object heen sluit om het vast te houden, heet dat een krachtgreep. Hoeveel tijd besteed je aan het gebruiken van een krachtgreep om een object vast te houden dat zwaarder is dan 10 pond / 4,5 kg?",
      options: {
        less_than_2_hours: "Minder dan 2 uur per dag",
        more_than_2_hours: "Meer dan 2 uur per dag",
        none: "Helemaal geen tijd"
      }
    },
    "question-35": {
      label: "Als je gereedschap of apparatuur gebruikt die trillingen in een deel van of je hele lichaam veroorzaakt, hoeveel tijd besteed je aan het gebruik ervan?",
      options: {
        less_than_1_hour: "Minder dan 1 uur per dag",
        "1_to_4_hours": "1 tot 4 uur per dag",
        more_than_4_hours: "Meer dan 4 uur per dag",
        does_not_apply: "Ik gebruik dit soort gereedschap of apparatuur niet"
      }
    },
    "question-36": {
      label: "Als je voorwerpen duwt of trekt die zwaarder zijn dan 80 pond / 36 kg, hoeveel tijd besteed je aan het verplaatsen ervan over ruwe oppervlakken, zoals grind, tegels of ongelijke grond, of zachte oppervlakken, zoals zand, modder of gras?",
      options: {
        less_than_5_min: "Minder dan 5 minuten per dag",
        "5_min_to_1_hour": "5 minuten tot 1 uur per dag",
        more_than_1_hour: "Meer dan 1 uur per dag",
        does_not_apply: "Ik verplaats dit soort voorwerpen niet over ruwe of zachte oppervlakken"
      }
    },
    "question-37": {
      label: "Denk aan een typische werkdag, of aan het deel van de werkdag waarin je de specifieke taak uitvoert die je beoordeelt. Word je ooit afgeleid door geluiden, zoals sirenes, hard praten, verkeer, enz.?",
      options: {
        frequently: "Vaak",
        sometimes: "Soms",
        no: "Nee"
      }
    },
    "question-38": {
      label: "Heb je last van zonlicht dat in je ogen schijnt of weerkaatst, oftewel schittering?",
      options: {
        frequently: "Vaak",
        sometimes: "Soms",
        rarely: "Zelden",
        never: "Nooit"
      }
    },
    "question-39": {
      label: "Als je werk vereist dat je fijne details bekijkt of kleine letters leest, kun je dit dan gemakkelijk doen?",
      options: {
        frequently: "Vaak",
        sometimes: "Soms",
        rarely: "Zelden",
        never: "Nooit",
        does_not_apply: "Mijn werk vereist dit niet"
      }
    },
    "question-40": {
      label: "Als je in koude omgevingen werkt, voel je dan ongemak in je armen, rug, benen, vingers en/of tenen?",
      options: {
        yes: "Ja",
        no: "Nee",
        does_not_apply: "Ik werk niet in koude omgevingen"
      }
    },
    "question-41": {
      label: "Gezien je werkvereisten, hoe vaak wordt je gevraagd om een uur of langer over te werken?",
      options: {
        frequently: "Vaak",
        sometimes: "Soms",
        rarely: "Zelden",
        never: "Nooit"
      }
    },
    "question-42": {
      label: "Hoe vaak wordt je gevraagd om met strakke deadlines te werken?",
      options: {
        frequently: "Vaak",
        sometimes: "Soms",
        rarely: "Zelden",
        never: "Nooit"
      }
    }
  }
};
