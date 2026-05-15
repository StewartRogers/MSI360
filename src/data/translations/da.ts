import type { Translation } from "../../types";

export const da: Translation = {
  "app": {
    "title": "MSI360",
    "disclosure": "Prototype: dine svar bliver i denne browser, medmindre du vælger at downloade eller dele din rapport.",
    "continue_button": "Fortsæt",
    "back_button": "Tilbage",
    "processing_button": "Behandler",
    "analyzing_button": "Analyserer",
    "question_progress": "Spørgsmål {current} af {total}",
    "score_summary_title": "Din MSI-risikooversigt",
    "score_overall_risk": "Samlet MSI-risiko",
    "score_download_report": "Download rapport",
    "score_not_available": "N/A",
    "score_out_of_4": "{score} ud af 4",
    "score_risk_not_enough": "Ikke nok data",
    "score_risk_low": "Lav risiko",
    "score_risk_possible": "Mulig risiko",
    "score_risk_likely": "Sandsynlig risiko",
    "score_risk_known": "Kendt risiko",
    "score_factor_not_enough": "Der er ikke nok data til at fortolke {factor}.",
    "score_factor_low": "Aktuelt lav risiko forbundet med {factor}.",
    "score_factor_possible": "Mulig risiko for ubehag fra {factor}.",
    "score_factor_likely": "Sandsynlig risiko for ubehag fra {factor}.",
    "score_factor_known": "Kendt risiko for smerte og/eller skade.",
    "score_psychosocial_note": "Psykosociale faktorer påvirkede den samlede MSI-risikoscore negativt ({multiplier}).",
    "score_subject_contact_stress": "kontakttryk",
    "score_subject_force": "kraft",
    "score_subject_awkward_postures": "akavede arbejdsstillinger",
    "score_subject_repetition": "gentagelse",
    "score_subject_environmental": "miljøfaktorer",
    "wrap_email_copy": "E-mailkopi",
    "wrap_review_results": "Gennemgå resultater",
    "wrap_submit_report": "Indsend rapport",
    "email_title": "Få din rapport via e-mail",
    "email_body": "Indtast din e-mailadresse, hvis du vil modtage en kopi af denne rapport. Det kan tage op til 15 minutter. Tjek junk- eller spam-mappen, hvis du ikke ser e-mailen i indbakken.",
    "email_next_body": "Du vil se den endelige rapport på næste skærm.",
    "email_address_label": "E-mailadresse",
    "report_ready_title": "Din rapport er klar",
    "report_card_title": "MSI-risikorapport",
    "report_date_label": "Dato",
    "report_task_label": "Analyseret job/opgave:",
    "report_overall_score_label": "Samlet score:",
    "report_highest_risk": "Kategorier med højest risiko:",
    "report_no_scored_categories": "Ingen scorede risikokategorier endnu",
    "report_email_copy_requested": "E-mailkopi anmodet for {email}.",
    "report_download_pdf": "Download PDF",
    "report_email_report": "Send rapport via e-mail",
    "report_done": "Færdig",
    "submit_title": "Vil du gennemføre endnu en ErgoCheck-vurdering?",
    "submit_option_reuse": "Ja, jeg vil gennemføre endnu en rapport med de samme oprindelige oplysninger og redigere dem efter behov.",
    "submit_option_restart": "Ja, jeg vil starte forfra med nye oplysninger",
    "submit_option_no": "Nej, ikke lige nu",
    "submit_copy": "Tak, tryk på knappen nedenfor for at afslutte undersøgelsen.",
    "submit_button": "Indsend",
    "complete_title": "Tak, fordi du gennemførte MSI 360-undersøgelsen",
    "complete_body": "Dine svar hjælper med at identificere MSI-relaterede farer på arbejdspladsen og bidrager til et sikrere arbejdsmiljø for alle.",
    "complete_next_steps_title": "Næste trin:",
    "complete_next_step_review": "Gennemgå din rapport og anbefalinger",
    "complete_next_step_share": "Del resultater med din supervisor, hvis det er relevant",
    "complete_next_step_visit": "Besøg worksafebc.com for yderligere ressourcer",
    "complete_start_new": "Start ny vurdering",
    "description_title": "Beskrivelse",
    "description_body": "De følgende spørgsmål handler om det arbejde, du udfører på en typisk arbejdsdag, eller den specifikke opgave eller aktivitet, du gerne vil vurdere i dag. Formålet er, at du fortæller MSI360 om de handlinger, du udfører for at få dit arbejde gjort.",
    "ai_loading_task_description": "Analyserer din opgavebeskrivelse...",
    "ai_task_analysis_fallback_toast": "AI-opgaveanalysen fik timeout. Lokal fallback bruges i stedet.",
    "ai_question_pruning_fallback_toast": "AI-spørgsmålsfiltreringen fik timeout. Fallback-opfølgende spørgsmål bruges i stedet.",
    "ai_fallback_toast_dismiss": "Luk AI-fallbackbesked"
  },
  "sections": {
    "intro": "Om arbejdet",
    "symptoms": "Nuværende symptomer",
    "contact_stress": "Kontakttryk",
    "force": "Kraft",
    "awkward_postures": "Akavede arbejdsstillinger",
    "repetition": "Gentagelse",
    "environmental": "Miljøfaktorer",
    "organizational": "Arbejdsorganisering"
  },
  "questions": {
    "question-1": {
      "label": "Hvad er din rolle i den aktivitet, du gerne vil vurdere i dag?",
      "options": {
        "worker": "Arbejder",
        "supervisor": "Supervisor",
        "manager": "Leder",
        "employer": "Arbejdsgiver",
        "health_safety_committee": "Medlem af arbejdsmiljøudvalg"
      }
    },
    "question-2": {
      "label": "Hvor længe har du været i denne rolle hos din nuværende arbejdsgiver?",
      "options": {
        "less_than_year": "Mindre end et år",
        "one_to_five": "1 til 5 år",
        "six_to_ten": "6 til 10 år",
        "more_than_ten": "Mere end 10 år"
      }
    },
    "question-3": {
      "label": "Hvilken opgave eller arbejdsaktivitet vil du gerne vurdere?",
      "help_text": "Giv en kort beskrivelse af den specifikke opgave eller aktivitet, du gerne vil vurdere; medtag detaljer som kropsholdning, ubehag, arbejdsstationens ergonomi og/eller pausens længde, hvor det er relevant."
    },
    "question-4": {
      "label": "Angiv venligst din højde med valgmulighederne nedenfor:",
      "options": {
        "under_5_4": "Under 5'4\" (< 1,62 m)",
        "5_4_to_5_9": "5'4\" - 5'9\" (1,62 m - 1,75 m)",
        "5_10_to_6_2": "5'10\" - 6'2\" (1,76 m - 1,88 m)",
        "over_6_2": "Over 6'2\" (> 1,88 m)",
        "prefer_not_to_say": "Foretrækker ikke at sige det"
      }
    },
    // skipping this question for now, as it was made redundant by the task_description question.
    // we're leaving this in the code in case it is used in the future
    "question-5": {
      "label": "Hvordan vil du opsummere typen af job eller opgave, der vurderes?",
      "options": {
        "office_clerical": "Kontor- eller administrativt, skrivebordsbaseret job/opgave",
        "not_desk_based": "Ikke baseret ved et skrivebord på et kontor",
        "both_setups": "Begge opsætninger"
      }
    },
    "question-6": {
      "label": "Sidder eller står du typisk i løbet af din arbejdsdag?",
      "options": {
        "mostly_sit": "Jeg sidder normalt det meste af dagen",
        "mostly_stand_move": "Jeg står eller bevæger mig normalt det meste af dagen",
        "sit_and_stand": "Jeg sidder og står i løbet af dagen"
      }
    },
    "question-7": {
      "label": "I hvilket omfang beder din arbejdsgiver eller supervisor om din feedback om værktøj eller udstyr, før det købes?",
      "options": {
        "great_extent": "I høj grad",
        "some_extent": "I nogen grad",
        "rarely": "Sjældent",
        "not_at_all": "Slet ikke"
      }
    },
    "question-8": {
      "label": "I hvilket omfang beder din arbejdsgiver eller supervisor om din feedback om, hvordan dit arbejde bør organiseres og/eller udføres?",
      "options": {
        "great_extent": "I høj grad",
        "some_extent": "I nogen grad",
        "rarely": "Sjældent",
        "not_at_all": "Slet ikke"
      }
    },
    "question-9": {
      "label": "Har du i de sidste 7 dage oplevet arbejdsrelateret smerte eller ubehag?",
      "options": {
        "yes": "Ja",
        "no": "Nej"
      }
    },
    "question-10": {
      "label": "Brug tabellen nedenfor til at angive de specifikke kropsdele, hvor du har oplevet arbejdsrelateret smerte eller ubehag under eller efter udførelsen af det job eller den opgave, der vurderes. Angiv også, om den ene eller begge sider af kroppen var involveret, og om smerten varede 2 dage eller mere.",
      "groups": {
        "neck": {
          "label": "1. Nakke",
          "options": {
            "one_side": "Smerte eller ubehag i én side af kroppen",
            "both_sides": "Smerte eller ubehag i begge sider",
            "lasted_two_days": "Smerten varede 2 dage eller mere"
          }
        },
        "shoulders_upper_arms": {
          "label": "2. Skuldre eller overarme",
          "options": {
            "one_side": "Smerte eller ubehag i én side af kroppen",
            "both_sides": "Smerte eller ubehag i begge sider",
            "lasted_two_days": "Smerten varede 2 dage eller mere"
          }
        },
        "elbows_forearms": {
          "label": "3. Albuer eller underarme",
          "options": {
            "one_side": "Smerte eller ubehag i én side af kroppen",
            "both_sides": "Smerte eller ubehag i begge sider",
            "lasted_two_days": "Smerten varede 2 dage eller mere"
          }
        },
        "wrists_hands_fingers": {
          "label": "4. Håndled, hænder eller fingre",
          "options": {
            "one_side": "Smerte eller ubehag i én side af kroppen",
            "both_sides": "Smerte eller ubehag i begge sider",
            "lasted_two_days": "Smerten varede 2 dage eller mere"
          }
        },
        "lower_back": {
          "label": "5. Lænd",
          "options": {
            "one_side": "Smerte eller ubehag i én side af kroppen",
            "both_sides": "Smerte eller ubehag i begge sider",
            "lasted_two_days": "Smerten varede 2 dage eller mere"
          }
        },
        "hips_upper_legs": {
          "label": "6. Hofter eller lår",
          "options": {
            "one_side": "Smerte eller ubehag i én side af kroppen",
            "both_sides": "Smerte eller ubehag i begge sider",
            "lasted_two_days": "Smerten varede 2 dage eller mere"
          }
        },
        "knees_lower_legs": {
          "label": "7. Knæ eller underben",
          "options": {
            "one_side": "Smerte eller ubehag i én side af kroppen",
            "both_sides": "Smerte eller ubehag i begge sider",
            "lasted_two_days": "Smerten varede 2 dage eller mere"
          }
        },
        "ankles_feet": {
          "label": "8. Ankler eller fødder",
          "options": {
            "one_side": "Smerte eller ubehag i én side af kroppen",
            "both_sides": "Smerte eller ubehag i begge sider",
            "lasted_two_days": "Smerten varede 2 dage eller mere"
          }
        }
      }
    },
    "question-11": {
      "label": "Tænk på en typisk arbejdsdag eller den del af dagen, hvor du udfører opgaven. Hvor meget tid bruger du på at læne eller hvile en kropsdel mod skarpe genstande eller kanter?",
      "options": {
        "less_than_30_min": "Mindre end 30 minutter om dagen",
        "30_min_to_1_hour": "30 minutter til 1 time om dagen",
        "more_than_1_hour": "Mere end 1 time om dagen",
        "does_not_apply": "Gælder ikke"
      }
    },
    "question-12": {
      "label": "Hvor meget tid bruger du på at knæle på hårde eller ru overflader uden personlig beskyttelse, f.eks. uden knæpuder?",
      "options": {
        "less_than_30_min": "Mindre end 30 minutter om dagen",
        "30_min_to_1_hour": "30 minutter til 1 time om dagen",
        "more_than_1_hour": "Mere end 1 time om dagen",
        "does_not_apply": "Gælder ikke"
      }
    },
    "question-13": {
      "label": "Tænk på de typer værktøj eller genstande, du holder i mere end 30 minutter ad gangen. Vælg alle udsagn, der passer. Den sidste mulighed kan ikke vælges, hvis andre muligheder er markeret.",
      "options": {
        "poor_grip_size": "For stor eller lille til at gribe korrekt",
        "irregular_unbalanced": "Uregelmæssig form eller ubalanceret",
        "sharp_handholds": "Har for skarpe håndgreb",
        "slippery": "Glat",
        "none": "Ingen af ovenstående"
      }
    },
    "question-14": {
      "label": "Bruger du nogen kropsdel som et midlertidigt værktøj til at fuldføre dit arbejde?",
      "options": {
        "less_than_one_hour": "Ja, mindre end 1 time om dagen",
        "more_than_one_hour": "Ja, mere end 1 time om dagen",
        "no": "Nej"
      }
    },
    "question-15": {
      "label": "Tænk på de overflader, du skubber, trækker eller flytter genstande hen over under det job, der vurderes i dag. Vælg alle beskrivelser, der passer.",
      "options": {
        "smooth": "Glatte",
        "soft": "Bløde, f.eks. sand, mudder, græs",
        "rough": "Ru, f.eks. grus, fliser, granit",
        "does_not_apply": "Gælder ikke"
      }
    },
    "question-16": {
      "label": "Hvor ofte skubber, trækker eller flytter du genstande, som du anser for tunge, uden mekanisk hjælp?",
      "options": {
        "most": "Det meste af tiden",
        "some": "Noget af tiden",
        "never": "Aldrig"
      }
    },
    "question-17": {
      "label": "Hvor tunge er de værktøjer eller genstande, du løfter, bærer eller støtter uden mekanisk hjælp?",
      "options": {
        "less_than_5_lb": "Mindre end 5 lb / 2 kg",
        "5_to_18_lb": "5 til 18 lb / 2 til 8 kg",
        "more_than_18_lb": "Mere end 18 lb / 8 kg",
        "does_not_apply": "Gælder ikke"
      }
    },
    "question-18": {
      "label": "Kræver noget af det værktøj og/eller udstyr, du bruger, meget kraft for at starte?",
      "options": {
        "regularly": "Ja, mindst noget værktøj eller udstyr, jeg bruger regelmæssigt, kræver kraft",
        "occasionally": "Ja, mindst noget værktøj eller udstyr, jeg bruger lejlighedsvis, kræver kraft",
        "no": "Nej"
      }
    },
    "question-19": {
      "label": "Når du skubber og/eller trækker genstande, som du anser for tunge, i hvilket omfang får du hjælp?",
      "options": {
        "great_extent": "I høj grad",
        "some_extent": "I nogen grad",
        "do_not_ask": "Jeg beder ikke om hjælp",
        "ask_but_no_assistance": "Jeg beder om hjælp, men får den ikke",
        "does_not_apply": "Gælder ikke"
      }
    },
    "question-20": {
      "label": "Tænk på en typisk arbejdsdag eller den del af dagen, hvor du udfører opgaven. Når du sidder eller står, hvor ofte arbejder du med overkroppen bøjet fremad, bagud eller til siden?",
      "groups": {
        "forward_backward": {
          "label": "Jeg bøjer mig frem eller tilbage mere end 15 grader",
          "options": {
            "most": "Det meste af tiden",
            "some": "Noget af tiden",
            "never": "Aldrig"
          }
        },
        "sideways": {
          "label": "Jeg bøjer mig til siden",
          "options": {
            "most": "Det meste af tiden",
            "some": "Noget af tiden",
            "never": "Aldrig"
          }
        }
      }
    },
    "question-21": {
      "label": "Når du udfører dit arbejde, vrider du så nogensinde overkroppen til siden uden at ændre føddernes position?",
      "options": {
        "often": "Ja, jeg gør det ofte under arbejdet",
        "sometimes": "Ja, jeg gør det nogle gange under arbejdet",
        "never": "Aldrig"
      }
    },
    "question-22": {
      "label": "Tænk på en typisk arbejdsdag. Når du sidder eller står, angiv hvor dine hænder er placeret i forhold til kroppen.",
      "groups": {
        "hands_above_shoulders": {
          "label": "Hænder over skuldre",
          "options": {
            "most": "Det meste af tiden",
            "some": "Noget af tiden",
            "never": "Aldrig"
          }
        },
        "hands_floor_to_knee": {
          "label": "Hænder mellem gulv og knæ",
          "options": {
            "most": "Det meste af tiden",
            "some": "Noget af tiden",
            "never": "Aldrig"
          }
        }
      }
    },
    "question-23": {
      "label": "Er en eller begge dine arme nogensinde helt strakt lige frem, når du udfører det job eller den opgave, du vurderer i dag?",
      "options": {
        "frequently": "Ofte",
        "sometimes": "Ja, jeg gør det nogle gange under arbejdet",
        "never": "Aldrig"
      }
    },
    "question-24": {
      "label": "Når dine arme er strakt ud, holder du så nogensinde et værktøj eller flytter en genstand?",
      "options": {
        "less_than_5_lb": "Mindre end 5 lb / 2 kg",
        "5_to_10_lb": "5 til 10 lb / 2 til 4,5 kg",
        "more_than_10_lb": "Mere end 10 lb / 4,5 kg",
        "no": "Nej"
      }
    },
    "question-25": {
      "label": "Hvordan er dit hoved placeret, når du udfører det job eller den opgave, du vurderer i dag?",
      "options": {
        "neutral": "Ofte neutral, direkte mellem skuldrene, hagen vandret",
        "slight_tilt": "Ofte bøjet op eller ned mindre end 15 grader",
        "deep_tilt": "Ofte bøjet op, ned eller til siden mere end 15 grader"
      }
    },
    "question-26": {
      "label": "Hvor meget bøjer du typisk håndleddet op og ned? Brug billedet nedenfor som reference.",
      "options": {
        "0_to_14": "Normalt 0 til 14 grader op eller ned",
        "15_to_30": "Normalt 15 til 30 grader",
        "more_than_30": "Normalt mere end 30 grader"
      }
    },
    "question-27": {
      "label": "Hvor meget vinkler du håndleddet fra side til side?",
      "options": {
        "0_to_10": "Normalt 0 til 10 grader venstre eller højre",
        "10_to_20": "Normalt 10 til 20 grader",
        "more_than_20": "Normalt mere end 20 grader"
      }
    },
    "question-28": {
      "label": "Er det muligt for dig at holde alle genstande, du skal skubbe, trække, løfte, bruge osv., tæt på kroppen?",
      "options": {
        "frequently": "Ofte",
        "sometimes": "Ja, jeg gør det nogle gange under arbejdet",
        "never": "Aldrig"
      }
    },
    "question-29": {
      "label": "Tænk på en typisk arbejdsdag eller den del af dagen, hvor du udfører opgaven. Hvor meget tid bruger du på at udføre lignende bevægelser igen og igen?",
      "options": {
        "less_than_30_min": "Mindre end 30 minutter om dagen",
        "30_min_to_2_hours": "30 minutter til 2 timer om dagen",
        "2_to_4_hours": "2 til 4 timer om dagen",
        "more_than_4_hours": "Mere end 4 timer om dagen"
      }
    },
    "question-30": {
      "label": "Hvor meget tid bruger du på at bøje håndleddet op eller ned mere end 15 grader?",
      "options": {
        "less_than_1_hour": "Mindre end 1 time om dagen",
        "1_to_2_hours": "1 til 2 timer om dagen",
        "more_than_2_hours": "Mere end 2 timer om dagen",
        "none": "Ingen af ovenstående"
      }
    },
    "question-31": {
      "label": "Hvor meget tid bruger du på at vinkle håndleddet mere end 15 grader til venstre eller højre?",
      "options": {
        "less_than_1_hour": "Mindre end 1 time om dagen",
        "1_to_2_hours": "1 til 2 timer om dagen",
        "more_than_2_hours": "Mere end 2 timer om dagen",
        "none": "Ingen af ovenstående"
      }
    },
    "question-32": {
      "label": "Hvor meget tid bruger du på kraftig muskelanstrengelse, mere end 18 pund / 8 kg med egen styrke, når du bruger et værktøj eller håndterer en genstand?",
      "options": {
        "less_than_5_min": "Mindre end 5 minutter om dagen",
        "5_to_25_min": "5 til 25 minutter om dagen",
        "30_min_to_2_5_hours": "30 minutter til 2,5 timer om dagen",
        "2_5_to_5_5_hours": "2,5 til 5,5 timer om dagen",
        "more_than_5_5_hours": "Mere end 5,5 timer om dagen"
      }
    },
    "question-33": {
      "label": "Når du griber en genstand mellem tommelfingeren og fingerspidserne, kaldes det et pincetgreb. Hvor meget tid bruger du et pincetgreb til at holde en genstand, der er tungere end 2 pund / 1 kg?",
      "options": {
        "less_than_2_hours": "Mindre end 2 timer om dagen",
        "more_than_2_hours": "Mere end 2 timer om dagen",
        "none": "Ingen af ovenstående"
      }
    },
    "question-34": {
      "label": "Når du omslutter en genstand med hånden, kaldes det et kraftgreb. Hvor meget tid bruger du et kraftgreb til at holde en genstand, der er tungere end 10 pund / 4,5 kg?",
      "options": {
        "less_than_2_hours": "Mindre end 2 timer om dagen",
        "more_than_2_hours": "Mere end 2 timer om dagen",
        "none": "Ingen af ovenstående"
      }
    },
    "question-35": {
      "label": "Hvis du bruger værktøj eller udstyr, der forårsager vibrationer i en del af eller hele kroppen, hvor meget tid bruger du det?",
      "options": {
        "less_than_1_hour": "Mindre end 1 time om dagen",
        "1_to_4_hours": "1 til 4 timer om dagen",
        "more_than_4_hours": "Mere end 4 timer om dagen",
        "does_not_apply": "Gælder ikke"
      }
    },
    "question-36": {
      "label": "Hvis du skubber eller trækker genstande, der er tungere end 80 pund / 36 kg, hvor meget tid bruger du på at flytte dem over ru eller bløde overflader?",
      "options": {
        "less_than_5_min": "Mindre end 5 minutter om dagen",
        "5_min_to_1_hour": "5 minutter til 1 time om dagen",
        "more_than_1_hour": "Mere end 1 time om dagen",
        "does_not_apply": "Gælder ikke"
      }
    },
    "question-37": {
      "label": "Tænk på en typisk arbejdsdag. Bliver du nogensinde distraheret af lyde som sirener, høj tale, trafik osv.?",
      "options": {
        "frequently": "Ofte",
        "sometimes": "Ja, jeg gør det nogle gange under arbejdet",
        "no": "Nej"
      }
    },
    "question-38": {
      "label": "Bliver du påvirket af sollys, der skinner eller reflekteres ind i dine øjne, altså blænding?",
      "options": {
        "frequently": "Ofte",
        "sometimes": "Ja, jeg gør det nogle gange under arbejdet",
        "rarely": "Sjældent",
        "never": "Aldrig"
      }
    },
    "question-39": {
      "label": "Hvis dit arbejde kræver, at du ser fine detaljer eller læser småt skrift, kan du gøre det let?",
      "options": {
        "frequently": "Ofte",
        "sometimes": "Ja, jeg gør det nogle gange under arbejdet",
        "rarely": "Sjældent",
        "never": "Aldrig",
        "does_not_apply": "Gælder ikke"
      }
    },
    "question-40": {
      "label": "Hvis du arbejder i kolde omgivelser, føler du ubehag i arme, ryg, ben, fingre og/eller tæer?",
      "options": {
        "yes": "Ja",
        "no": "Nej",
        "does_not_apply": "Gælder ikke"
      }
    },
    "question-41": {
      "label": "Set i forhold til arbejdskravene, hvor ofte bliver du bedt om at arbejde overtid i en time eller mere?",
      "options": {
        "frequently": "Ofte",
        "sometimes": "Ja, jeg gør det nogle gange under arbejdet",
        "rarely": "Sjældent",
        "never": "Aldrig"
      }
    },
    "question-42": {
      "label": "Hvor ofte bliver du bedt om at arbejde med stramme deadlines?",
      "options": {
        "frequently": "Ofte",
        "sometimes": "Ja, jeg gør det nogle gange under arbejdet",
        "rarely": "Sjældent",
        "never": "Aldrig"
      }
    }
  }
};
