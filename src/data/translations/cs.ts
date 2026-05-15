import type { Translation } from "../../types";

export const cs: Translation = {
  "app": {
    "title": "MSI360",
    "disclosure": "Prototyp: vaše odpovědi zůstanou v tomto prohlížeči, pokud se nerozhodnete zprávu stáhnout nebo sdílet.",
    "continue_button": "Pokračovat",
    "back_button": "Zpět",
    "processing_button": "Zpracování",
    "analyzing_button": "Analýza",
    "question_progress": "Otázka {current} z {total}",
    "score_summary_title": "Souhrn vašeho rizika MSI",
    "score_overall_risk": "Celkové riziko MSI",
    "score_download_report": "Stáhnout zprávu",
    "score_not_available": "N/A",
    "score_out_of_4": "{score} ze 4",
    "score_risk_not_enough": "Nedostatek údajů",
    "score_risk_low": "Nízké riziko",
    "score_risk_possible": "Možné riziko",
    "score_risk_likely": "Pravděpodobné riziko",
    "score_risk_known": "Známé riziko",
    "score_factor_not_enough": "Nedostatek údajů k interpretaci {factor}.",
    "score_factor_low": "V současnosti nízké riziko spojené s {factor}.",
    "score_factor_possible": "Možné riziko nepohodlí způsobené {factor}.",
    "score_factor_likely": "Pravděpodobné riziko nepohodlí způsobené {factor}.",
    "score_factor_known": "Známé riziko bolesti a/nebo zranění.",
    "score_psychosocial_note": "Psychosociální faktory negativně ovlivnily celkové skóre rizika MSI ({multiplier}).",
    "score_subject_contact_stress": "kontaktní tlak",
    "score_subject_force": "síla",
    "score_subject_awkward_postures": "nepohodlné polohy",
    "score_subject_repetition": "opakování",
    "score_subject_environmental": "environmentální faktory",
    "wrap_email_copy": "Kopie e-mailem",
    "wrap_review_results": "Zkontrolovat výsledky",
    "wrap_submit_report": "Odeslat zprávu",
    "email_title": "Získejte zprávu e-mailem",
    "email_body": "Zadejte svou e-mailovou adresu, pokud chcete obdržet kopii této zprávy. Může to trvat až 15 minut. Pokud e-mail nevidíte v doručené poště, zkontrolujte složku nevyžádané pošty nebo spamu.",
    "email_next_body": "Konečnou zprávu uvidíte na další obrazovce.",
    "email_address_label": "E-mailová adresa",
    "report_ready_title": "Vaše zpráva je připravena",
    "report_card_title": "Zpráva o riziku MSI",
    "report_date_label": "Datum",
    "report_task_label": "Analyzovaná práce/úkol:",
    "report_overall_score_label": "Celkové skóre:",
    "report_highest_risk": "Kategorie s nejvyšším rizikem:",
    "report_no_scored_categories": "Zatím žádné ohodnocené kategorie rizika",
    "report_email_copy_requested": "Byla vyžádána kopie e-mailem pro {email}.",
    "report_download_pdf": "Stáhnout PDF",
    "report_email_report": "Poslat zprávu e-mailem",
    "report_done": "Hotovo",
    "submit_title": "Chcete dokončit další hodnocení ErgoCheck?",
    "submit_option_reuse": "Ano, chci dokončit další zprávu se stejnými původními informacemi a podle potřeby je upravit.",
    "submit_option_restart": "Ano, chci začít znovu s novými informacemi",
    "submit_option_no": "Ne, teď ne",
    "submit_copy": "Děkujeme, stiskněte níže uvedené tlačítko pro dokončení dotazníku.",
    "submit_button": "Odeslat",
    "complete_title": "Děkujeme za dokončení dotazníku MSI 360",
    "complete_body": "Vaše odpovědi pomáhají identifikovat rizika související s MSI na pracovišti a přispívají k bezpečnějšímu pracovnímu prostředí pro všechny.",
    "complete_next_steps_title": "Další kroky:",
    "complete_next_step_review": "Zkontrolujte svou zprávu a doporučení",
    "complete_next_step_share": "Pokud je to vhodné, sdílejte zjištění se svým nadřízeným",
    "complete_next_step_visit": "Navštivte worksafebc.com pro další zdroje",
    "complete_start_new": "Začít nové hodnocení",
    "description_title": "Popis",
    "description_body": "Následující otázky se týkají práce, kterou vykonáváte během běžného pracovního dne, nebo konkrétního úkolu či činnosti, které chcete dnes posoudit. Cílem je sdělit MSI360, jaké činnosti provádíte, abyste svou práci dokončili."
  },
  "sections": {
    "intro": "O práci",
    "symptoms": "Současné příznaky",
    "contact_stress": "Kontaktní tlak",
    "force": "Síla",
    "awkward_postures": "Nepohodlné polohy",
    "repetition": "Opakování",
    "environmental": "Environmentální faktory",
    "organizational": "Organizace práce"
  },
  "questions": {
    "question-1": {
      "label": "Jaká je vaše role v činnosti, kterou chcete dnes posoudit?",
      "options": {
        "worker": "Pracovník",
        "supervisor": "Nadřízený",
        "manager": "Manažer",
        "employer": "Zaměstnavatel",
        "health_safety_committee": "Člen výboru pro zdraví a bezpečnost"
      }
    },
    "question-2": {
      "label": "Jak dlouho jste v této roli u současného zaměstnavatele?",
      "options": {
        "less_than_year": "Méně než rok",
        "one_to_five": "1 až 5 let",
        "six_to_ten": "6 až 10 let",
        "more_than_ten": "Více než 10 let"
      }
    },
    "question-3": {
      "label": "Jaký úkol nebo pracovní činnost chcete posoudit?",
      "help_text": "Uveďte prosím stručný popis konkrétního úkolu nebo činnosti, kterou chcete posoudit; kde je to vhodné, zahrňte podrobnosti jako poloha těla, nepohodlí, ergonomie pracoviště a/nebo délka přestávek."
    },
    "question-4": {
      "label": "Uveďte prosím svou výšku pomocí níže uvedených možností:",
      "options": {
        "under_5_4": "Méně než 5'4\" (< 1,62 m)",
        "5_4_to_5_9": "5'4\" - 5'9\" (1,62 m - 1,75 m)",
        "5_10_to_6_2": "5'10\" - 6'2\" (1,76 m - 1,88 m)",
        "over_6_2": "Více než 6'2\" (> 1,88 m)",
        "prefer_not_to_say": "Raději neuvádět"
      }
    },
    "question-5": {
      "label": "Jak byste shrnuli typ práce nebo úkolu, který je posuzován?",
      "options": {
        "office_clerical": "Kancelářská nebo administrativní práce/úkol u stolu",
        "not_desk_based": "Není založeno na práci u stolu v kanceláři",
        "both_setups": "Obě možnosti"
      }
    },
    "question-6": {
      "label": "Během pracovního dne obvykle sedíte nebo stojíte?",
      "options": {
        "mostly_sit": "Obvykle většinu dne sedím",
        "mostly_stand_move": "Obvykle většinu dne stojím nebo se pohybuji",
        "sit_and_stand": "Během dne sedím i stojím"
      }
    },
    "question-7": {
      "label": "Do jaké míry se váš zaměstnavatel nebo nadřízený ptá na váš názor na nástroje nebo vybavení před jejich nákupem?",
      "options": {
        "great_extent": "Do velké míry",
        "some_extent": "Do určité míry",
        "rarely": "Zřídka",
        "not_at_all": "Vůbec ne"
      }
    },
    "question-8": {
      "label": "Do jaké míry se váš zaměstnavatel nebo nadřízený ptá na váš názor na to, jak by měla být vaše práce organizována a/nebo vykonávána?",
      "options": {
        "great_extent": "Do velké míry",
        "some_extent": "Do určité míry",
        "rarely": "Zřídka",
        "not_at_all": "Vůbec ne"
      }
    },
    "question-9": {
      "label": "Za posledních 7 dní jste pociťovali bolest nebo nepohodlí související s prací?",
      "options": {
        "yes": "Ano",
        "no": "Ne"
      }
    },
    "question-10": {
      "label": "Pomocí níže uvedené tabulky uveďte konkrétní části těla, kde jste pociťovali bolest nebo nepohodlí související s prací během nebo po provádění posuzované práce či úkolu. Uveďte také, zda byla zasažena jedna nebo obě strany těla a zda bolest trvala 2 nebo více dní.",
      "groups": {
        "neck": {
          "label": "1. Krk",
          "options": {
            "one_side": "Bolest nebo nepohodlí na jedné straně těla",
            "both_sides": "Bolest nebo nepohodlí na obou stranách",
            "lasted_two_days": "Bolest trvala 2 nebo více dní"
          }
        },
        "shoulders_upper_arms": {
          "label": "2. Ramena nebo horní části paží",
          "options": {
            "one_side": "Bolest nebo nepohodlí na jedné straně těla",
            "both_sides": "Bolest nebo nepohodlí na obou stranách",
            "lasted_two_days": "Bolest trvala 2 nebo více dní"
          }
        },
        "elbows_forearms": {
          "label": "3. Lokty nebo předloktí",
          "options": {
            "one_side": "Bolest nebo nepohodlí na jedné straně těla",
            "both_sides": "Bolest nebo nepohodlí na obou stranách",
            "lasted_two_days": "Bolest trvala 2 nebo více dní"
          }
        },
        "wrists_hands_fingers": {
          "label": "4. Zápěstí, ruce nebo prsty",
          "options": {
            "one_side": "Bolest nebo nepohodlí na jedné straně těla",
            "both_sides": "Bolest nebo nepohodlí na obou stranách",
            "lasted_two_days": "Bolest trvala 2 nebo více dní"
          }
        },
        "lower_back": {
          "label": "5. Dolní část zad",
          "options": {
            "one_side": "Bolest nebo nepohodlí na jedné straně těla",
            "both_sides": "Bolest nebo nepohodlí na obou stranách",
            "lasted_two_days": "Bolest trvala 2 nebo více dní"
          }
        },
        "hips_upper_legs": {
          "label": "6. Kyčle nebo stehna",
          "options": {
            "one_side": "Bolest nebo nepohodlí na jedné straně těla",
            "both_sides": "Bolest nebo nepohodlí na obou stranách",
            "lasted_two_days": "Bolest trvala 2 nebo více dní"
          }
        },
        "knees_lower_legs": {
          "label": "7. Kolena nebo lýtka",
          "options": {
            "one_side": "Bolest nebo nepohodlí na jedné straně těla",
            "both_sides": "Bolest nebo nepohodlí na obou stranách",
            "lasted_two_days": "Bolest trvala 2 nebo více dní"
          }
        },
        "ankles_feet": {
          "label": "8. Kotníky nebo chodidla",
          "options": {
            "one_side": "Bolest nebo nepohodlí na jedné straně těla",
            "both_sides": "Bolest nebo nepohodlí na obou stranách",
            "lasted_two_days": "Bolest trvala 2 nebo více dní"
          }
        }
      }
    },
    "question-11": {
      "label": "Přemýšlejte o běžném pracovním dni nebo části dne, kdy vykonáváte konkrétní úkol. Kolik času trávíte opíráním nebo pokládáním části těla na ostré předměty nebo hrany?",
      "options": {
        "less_than_30_min": "Méně než 30 minut denně",
        "30_min_to_1_hour": "30 minut až 1 hodina denně",
        "more_than_1_hour": "Více než 1 hodina denně",
        "does_not_apply": "Nevztahuje se"
      }
    },
    "question-12": {
      "label": "Kolik času trávíte klečením na tvrdých nebo drsných površích bez osobní ochrany, například bez chráničů kolen?",
      "options": {
        "less_than_30_min": "Méně než 30 minut denně",
        "30_min_to_1_hour": "30 minut až 1 hodina denně",
        "more_than_1_hour": "Více než 1 hodina denně",
        "does_not_apply": "Nevztahuje se"
      }
    },
    "question-13": {
      "label": "Přemýšlejte o nástrojích nebo předmětech, které držíte déle než 30 minut v kuse. Vyberte všechna tvrzení, která platí. Poslední možnost nelze vybrat, pokud je zaškrtnuta jiná možnost.",
      "options": {
        "poor_grip_size": "Příliš velké nebo malé pro správný úchop",
        "irregular_unbalanced": "Nepravidelného tvaru nebo nevyvážené",
        "sharp_handholds": "Mají příliš ostrá místa pro uchopení",
        "slippery": "Kluzké",
        "none": "Nic z výše uvedeného"
      }
    },
    "question-14": {
      "label": "Používáte některou část těla jako provizorní nástroj k dokončení práce?",
      "options": {
        "less_than_one_hour": "Ano, méně než 1 hodinu denně",
        "more_than_one_hour": "Ano, více než 1 hodinu denně",
        "no": "Ne"
      }
    },
    "question-15": {
      "label": "Přemýšlejte o površích, po kterých při dnes posuzované práci tlačíte, táhnete nebo přesouváte předměty. Vyberte všechny odpovídající popisy.",
      "options": {
        "smooth": "Hladké, např. dokončené povrchy",
        "soft": "Měkké, např. písek, bláto, tráva",
        "rough": "Drsné, např. štěrk, dlaždice, žula",
        "does_not_apply": "Nevztahuje se"
      }
    },
    "question-16": {
      "label": "Jak často tlačíte, táhnete nebo přesouváte předměty, které považujete za těžké, bez mechanické pomoci?",
      "options": {
        "most": "Většinu času",
        "some": "Část času",
        "never": "Nikdy"
      }
    },
    "question-17": {
      "label": "Jak těžké jsou nástroje nebo předměty, které zvedáte, nosíte nebo podpíráte bez mechanické pomoci?",
      "options": {
        "less_than_5_lb": "Méně než 5 lb / 2 kg",
        "5_to_18_lb": "5 až 18 lb / 2 až 8 kg",
        "more_than_18_lb": "Více než 18 lb / 8 kg",
        "does_not_apply": "Nevztahuje se"
      }
    },
    "question-18": {
      "label": "Vyžadují některé nástroje a/nebo vybavení, které používáte, velkou sílu ke spuštění?",
      "options": {
        "regularly": "Ano, alespoň některé nástroje nebo vybavení, které používám pravidelně, vyžadují sílu",
        "occasionally": "Ano, alespoň některé nástroje nebo vybavení, které používám občas, vyžadují sílu",
        "no": "Ne"
      }
    },
    "question-19": {
      "label": "Když tlačíte a/nebo táhnete předměty, které považujete za těžké, do jaké míry dostáváte pomoc?",
      "options": {
        "great_extent": "Do velké míry",
        "some_extent": "Do určité míry",
        "do_not_ask": "Nežádám o pomoc",
        "ask_but_no_assistance": "Žádám o pomoc, ale nedostávám ji",
        "does_not_apply": "Nevztahuje se"
      }
    },
    "question-20": {
      "label": "Přemýšlejte o běžném pracovním dni nebo části dne, kdy vykonáváte úkol. Když sedíte nebo stojíte, jak často pracujete s horní částí těla nakloněnou dopředu, dozadu nebo do strany?",
      "groups": {
        "forward_backward": {
          "label": "Nakláním se dopředu nebo dozadu více než 15 stupňů",
          "options": {
            "most": "Většinu času",
            "some": "Část času",
            "never": "Nikdy"
          }
        },
        "sideways": {
          "label": "Nakláním se do strany",
          "options": {
            "most": "Většinu času",
            "some": "Část času",
            "never": "Nikdy"
          }
        }
      }
    },
    "question-21": {
      "label": "Při pracovních činnostech někdy otáčíte horní část těla do strany, aniž byste změnili polohu chodidel?",
      "options": {
        "often": "Ano, dělám to při práci často",
        "sometimes": "Ano, dělám to při práci někdy",
        "never": "Nikdy"
      }
    },
    "question-22": {
      "label": "Přemýšlejte o běžném pracovním dni. Když sedíte nebo stojíte, uveďte, kde se vaše ruce nacházejí ve vztahu k tělu.",
      "groups": {
        "hands_above_shoulders": {
          "label": "Ruce nad rameny",
          "options": {
            "most": "Většinu času",
            "some": "Část času",
            "never": "Nikdy"
          }
        },
        "hands_floor_to_knee": {
          "label": "Ruce mezi podlahou a kolenem",
          "options": {
            "most": "Většinu času",
            "some": "Část času",
            "never": "Nikdy"
          }
        }
      }
    },
    "question-23": {
      "label": "Jsou jedna nebo obě vaše paže někdy plně natažené přímo dopředu, když vykonáváte práci nebo úkol, který dnes posuzujete?",
      "options": {
        "frequently": "Často",
        "sometimes": "Ano, dělám to při práci někdy",
        "never": "Nikdy"
      }
    },
    "question-24": {
      "label": "Když máte paže natažené, držíte někdy nástroj nebo přesouváte předmět?",
      "options": {
        "less_than_5_lb": "Méně než 5 lb / 2 kg",
        "5_to_10_lb": "5 až 10 lb / 2 až 4,5 kg",
        "more_than_10_lb": "Více než 10 lb / 4,5 kg",
        "no": "Ne"
      }
    },
    "question-25": {
      "label": "Jak je umístěna vaše hlava, když vykonáváte práci nebo úkol, který dnes posuzujete?",
      "options": {
        "neutral": "Často neutrální, přímo mezi rameny, brada vodorovně",
        "slight_tilt": "Často nakloněná nahoru nebo dolů méně než 15 stupňů",
        "deep_tilt": "Často nakloněná nahoru, dolů nebo do strany více než 15 stupňů"
      }
    },
    "question-26": {
      "label": "Jak moc obvykle ohýbáte zápěstí nahoru a dolů? Použijte obrázek níže jako vodítko.",
      "options": {
        "0_to_14": "Obvykle 0 až 14 stupňů nahoru nebo dolů",
        "15_to_30": "Obvykle 15 až 30 stupňů",
        "more_than_30": "Obvykle více než 30 stupňů"
      }
    },
    "question-27": {
      "label": "Jak moc nakláníte zápěstí ze strany na stranu?",
      "options": {
        "0_to_10": "Obvykle 0 až 10 stupňů doleva nebo doprava",
        "10_to_20": "Obvykle 10 až 20 stupňů",
        "more_than_20": "Obvykle více než 20 stupňů"
      }
    },
    "question-28": {
      "label": "Je možné držet blízko těla všechny předměty, které potřebujete tlačit, táhnout, zvedat, používat atd.?",
      "options": {
        "frequently": "Často",
        "sometimes": "Ano, dělám to při práci někdy",
        "never": "Nikdy"
      }
    },
    "question-29": {
      "label": "Přemýšlejte o běžném pracovním dni nebo části dne, kdy vykonáváte úkol. Kolik času trávíte opakováním podobných pohybů stále dokola?",
      "options": {
        "less_than_30_min": "Méně než 30 minut denně",
        "30_min_to_2_hours": "30 minut až 2 hodiny denně",
        "2_to_4_hours": "2 až 4 hodiny denně",
        "more_than_4_hours": "Více než 4 hodiny denně"
      }
    },
    "question-30": {
      "label": "Kolik času trávíte ohýbáním zápěstí nahoru nebo dolů o více než 15 stupňů?",
      "options": {
        "less_than_1_hour": "Méně než 1 hodina denně",
        "1_to_2_hours": "1 až 2 hodiny denně",
        "more_than_2_hours": "Více než 2 hodiny denně",
        "none": "Nic z výše uvedeného"
      }
    },
    "question-31": {
      "label": "Kolik času trávíte nakláněním zápěstí o více než 15 stupňů doleva nebo doprava?",
      "options": {
        "less_than_1_hour": "Méně než 1 hodina denně",
        "1_to_2_hours": "1 až 2 hodiny denně",
        "more_than_2_hours": "Více než 2 hodiny denně",
        "none": "Nic z výše uvedeného"
      }
    },
    "question-32": {
      "label": "Kolik času trávíte silným svalovým úsilím, více než 18 liber / 8 kg vlastní silou, při používání nástroje nebo manipulaci s předmětem?",
      "options": {
        "less_than_5_min": "Méně než 5 minut denně",
        "5_to_25_min": "5 až 25 minut denně",
        "30_min_to_2_5_hours": "30 minut až 2,5 hodiny denně",
        "2_5_to_5_5_hours": "2,5 až 5,5 hodiny denně",
        "more_than_5_5_hours": "Více než 5,5 hodiny denně"
      }
    },
    "question-33": {
      "label": "Když uchopíte předmět mezi palec a konečky prstů, nazývá se to špetkový úchop. Kolik času používáte špetkový úchop k držení předmětu těžšího než 2 libry / 1 kg?",
      "options": {
        "less_than_2_hours": "Méně než 2 hodiny denně",
        "more_than_2_hours": "Více než 2 hodiny denně",
        "none": "Nic z výše uvedeného"
      }
    },
    "question-34": {
      "label": "Když obemknete rukou předmět, nazývá se to silový úchop. Kolik času používáte silový úchop k držení předmětu těžšího než 10 liber / 4,5 kg?",
      "options": {
        "less_than_2_hours": "Méně než 2 hodiny denně",
        "more_than_2_hours": "Více než 2 hodiny denně",
        "none": "Nic z výše uvedeného"
      }
    },
    "question-35": {
      "label": "Pokud používáte nástroje nebo vybavení, které způsobují vibrace části nebo celého těla, kolik času je používáte?",
      "options": {
        "less_than_1_hour": "Méně než 1 hodina denně",
        "1_to_4_hours": "1 až 4 hodiny denně",
        "more_than_4_hours": "Více než 4 hodiny denně",
        "does_not_apply": "Nevztahuje se"
      }
    },
    "question-36": {
      "label": "Pokud tlačíte nebo táhnete předměty těžší než 80 liber / 36 kg, kolik času je přesouváte po drsných nebo měkkých površích?",
      "options": {
        "less_than_5_min": "Méně než 5 minut denně",
        "5_min_to_1_hour": "5 minut až 1 hodina denně",
        "more_than_1_hour": "Více než 1 hodina denně",
        "does_not_apply": "Nevztahuje se"
      }
    },
    "question-37": {
      "label": "Přemýšlejte o běžném pracovním dni. Rozptylují vás někdy zvuky, jako jsou sirény, hlasitý hovor, doprava apod.?",
      "options": {
        "frequently": "Často",
        "sometimes": "Ano, dělám to při práci někdy",
        "no": "Ne"
      }
    },
    "question-38": {
      "label": "Ovlivňuje vás slunce svítící nebo odrážející se do očí, tedy oslnění?",
      "options": {
        "frequently": "Často",
        "sometimes": "Ano, dělám to při práci někdy",
        "rarely": "Zřídka",
        "never": "Nikdy"
      }
    },
    "question-39": {
      "label": "Pokud vaše práce vyžaduje sledování jemných detailů nebo čtení malého písma, zvládáte to snadno?",
      "options": {
        "frequently": "Často",
        "sometimes": "Ano, dělám to při práci někdy",
        "rarely": "Zřídka",
        "never": "Nikdy",
        "does_not_apply": "Nevztahuje se"
      }
    },
    "question-40": {
      "label": "Pokud pracujete v chladném prostředí, cítíte nepohodlí v pažích, zádech, nohách, prstech rukou a/nebo nohou?",
      "options": {
        "yes": "Ano",
        "no": "Ne",
        "does_not_apply": "Nevztahuje se"
      }
    },
    "question-41": {
      "label": "S ohledem na požadavky práce, jak často jste požádáni o práci přesčas po dobu jedné hodiny nebo déle?",
      "options": {
        "frequently": "Často",
        "sometimes": "Ano, dělám to při práci někdy",
        "rarely": "Zřídka",
        "never": "Nikdy"
      }
    },
    "question-42": {
      "label": "Jak často jste požádáni o práci v krátkých termínech?",
      "options": {
        "frequently": "Často",
        "sometimes": "Ano, dělám to při práci někdy",
        "rarely": "Zřídka",
        "never": "Nikdy"
      }
    }
  }
};
