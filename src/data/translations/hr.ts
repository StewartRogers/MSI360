import type { Translation } from "../../types";

export const hr: Translation = {
  app: {
    title: "MSI360",
    disclosure: "Prototip: vaši odgovori ostaju u ovom pregledniku osim ako ne odlučite preuzeti ili podijeliti izvješće.",
    continue_button: "Nastavi",
    back_button: "Natrag",
    processing_button: "Obrada",
    analyzing_button: "Analiza",
    question_progress: "Pitanje {current} od {total}",
    score_summary_title: "Sažetak vašeg MSI rizika",
    score_overall_risk: "Ukupni MSI rizik",
    score_download_report: "Preuzmi izvješće",
    score_not_available: "N/D",
    score_out_of_4: "{score} od 4",
    score_risk_not_enough: "Nema dovoljno podataka",
    score_risk_low: "Nizak rizik",
    score_risk_possible: "Mogući rizik",
    score_risk_likely: "Vjerojatan rizik",
    score_risk_known: "Poznat rizik",
    score_factor_not_enough: "Nema dovoljno podataka za tumačenje {factor}.",
    score_factor_low: "Trenutačno je rizik povezan s {factor} nizak.",
    score_factor_possible: "Mogući rizik od nelagode zbog {factor}.",
    score_factor_likely: "Vjerojatan rizik od nelagode zbog {factor}.",
    score_factor_known: "Poznat rizik od boli i/ili ozljede.",
    score_psychosocial_note: "Psihosocijalni čimbenici negativno su utjecali na ukupni MSI rezultat rizika ({multiplier}).",
    score_subject_contact_stress: "kontaktni pritisak",
    score_subject_force: "sila",
    score_subject_awkward_postures: "neugodni položaji",
    score_subject_repetition: "ponavljanje",
    score_subject_environmental: "okolišni čimbenici",
    wrap_email_copy: "Kopija e-poštom",
    wrap_review_results: "Pregled rezultata",
    wrap_submit_report: "Pošalji izvješće",
    email_title: "Primite izvješće e-poštom",
    email_body: "Unesite adresu e-pošte ako želite primiti kopiju ovog izvješća. To može potrajati do 15 minuta. Provjerite mapu neželjene pošte ako poruku ne vidite u ulaznoj pošti.",
    email_next_body: "Završno izvješće vidjet ćete na sljedećem zaslonu.",
    email_address_label: "Adresa e-pošte",
    report_ready_title: "Vaše izvješće je spremno",
    report_card_title: "Izvješće o MSI riziku",
    report_date_label: "Datum",
    report_task_label: "Analizirani posao/zadatak:",
    report_overall_score_label: "Ukupni rezultat:",
    report_highest_risk: "Kategorije najvećeg rizika:",
    report_no_scored_categories: "Još nema ocijenjenih kategorija rizika",
    report_email_copy_requested: "Zatražena je kopija e-poštom za {email}.",
    report_download_pdf: "Preuzmi PDF",
    report_email_report: "Pošalji izvješće e-poštom",
    report_done: "Gotovo",
    submit_title: "Želite li ispuniti još jednu ErgoCheck procjenu?",
    submit_option_reuse: "Da, želim ispuniti još jedno izvješće koristeći iste početne informacije, uz mogućnost uređivanja po potrebi.",
    submit_option_restart: "Da, želim početi ispočetka s novim informacijama",
    submit_option_no: "Ne, ne sada",
    submit_copy: "Hvala, pritisnite gumb u nastavku kako biste završili anketu.",
    submit_button: "Pošalji",
    complete_title: "Hvala što ste ispunili MSI 360 anketu",
    complete_body: "Vaši odgovori pomažu u prepoznavanju opasnosti povezanih s MSI na radnom mjestu i doprinose sigurnijem radnom okruženju za sve.",
    complete_next_steps_title: "Sljedeći koraci:",
    complete_next_step_review: "Pregledajte svoje izvješće i preporuke",
    complete_next_step_share: "Podijelite nalaze s nadređenim ako je prikladno",
    complete_next_step_visit: "Posjetite worksafebc.com za dodatne resurse",
    complete_start_new: "Započni novu procjenu",
    description_title: "Opis",
    description_body: "Sljedeća pitanja odnose se na posao koji obavljate tijekom tipičnog radnog dana ili na konkretan zadatak ili aktivnost koju danas želite procijeniti. Namjera je da MSI360-u kažete koje radnje obavljate kako biste dovršili svoj posao.",
    ai_loading_task_description: "Analizira se opis vašeg zadatka...",
    ai_task_analysis_fallback_toast: "Odgovor AI analize zadatka je istekao. Umjesto toga koristi se lokalna zamjena.",
    ai_question_pruning_fallback_toast: "Odgovor AI filtriranja pitanja je istekao. Umjesto toga koriste se zamjenska dodatna pitanja.",
    ai_fallback_toast_dismiss: "Zatvori obavijest o AI zamjeni"
  },
  sections: {
    intro: "O poslu",
    symptoms: "Trenutačni simptomi",
    contact_stress: "Kontaktni pritisak",
    force: "Sila",
    awkward_postures: "Neugodni položaji",
    repetition: "Ponavljanje",
    environmental: "Okolišni čimbenici",
    organizational: "Organizacija rada"
  },
  questions: {
    "question-1": {
      label: "Koja je vaša uloga u aktivnosti koju danas želite procijeniti?",
      options: {
        worker: "Radnik",
        supervisor: "Nadređeni",
        manager: "Voditelj",
        employer: "Poslodavac",
        health_safety_committee: "Član odbora za zdravlje i sigurnost"
      }
    },
    "question-2": {
      label: "Koliko dugo ste u toj ulozi kod trenutačnog poslodavca?",
      options: {
        less_than_year: "Manje od godinu dana",
        one_to_five: "1 do 5 godina",
        six_to_ten: "6 do 10 godina",
        more_than_ten: "Više od 10 godina"
      }
    },
    "question-3": {
      label: "Koji zadatak ili radnu aktivnost želite procijeniti?",
      help_text: "Navedite kratak opis konkretnog zadatka ili aktivnosti koju želite procijeniti; gdje je primjenjivo, uključite pojedinosti poput položaja tijela, nelagode, ergonomije radne stanice i/ili duljine pauze."
    },
    "question-4": {
      label: "Navedite svoju visinu koristeći opcije u nastavku:",
      options: {
        under_5_4: "Manje od 5'4\" (< 1,62 m)",
        "5_4_to_5_9": "5'4\" - 5'9\" (1,62 m - 1,75 m)",
        "5_10_to_6_2": "5'10\" - 6'2\" (1,76 m - 1,88 m)",
        over_6_2: "Više od 6'2\" (> 1,88 m)",
        prefer_not_to_say: "Radije ne bih rekao/la"
      }
    },
    // skipping this question for now, as it was made redundant by the task_description question.
    // we're leaving this in the code in case it is used in the future
    "question-5": {
      label: "Kako biste saželi vrstu posla ili zadatka koji se procjenjuje?",
      options: {
        office_clerical: "Uredski ili administrativni posao/zadatak za stolom",
        not_desk_based: "Nije posao za stolom u uredu",
        both_setups: "Obje postavke"
      }
    },
    "question-6": {
      label: "Sjedite li ili stojite obično tijekom radnog dana?",
      options: {
        mostly_sit: "Obično sjedim veći dio dana",
        mostly_stand_move: "Obično stojim ili se krećem veći dio dana",
        sit_and_stand: "Tijekom dana sjedim i stojim"
      }
    },
    "question-7": {
      label: "U kojoj mjeri vaš poslodavac ili nadređeni traži vaše mišljenje o alatima ili opremi prije kupnje?",
      options: {
        great_extent: "U velikoj mjeri",
        some_extent: "U određenoj mjeri",
        rarely: "Rijetko",
        not_at_all: "Nimalo"
      }
    },
    "question-8": {
      label: "U kojoj mjeri vaš poslodavac ili nadređeni traži vaše mišljenje o tome kako vaš rad treba biti organiziran i/ili izveden?",
      options: {
        great_extent: "U velikoj mjeri",
        some_extent: "U određenoj mjeri",
        rarely: "Rijetko",
        not_at_all: "Nimalo"
      }
    },
    "question-9": {
      label: "Jeste li u posljednjih 7 dana imali bol ili nelagodu povezanu s radom?",
      options: {
        yes: "Da",
        no: "Ne"
      }
    },
    "question-10": {
      label: "Pomoću tablice u nastavku navedite dijelove tijela na kojima ste imali bol ili nelagodu povezanu s radom tijekom ili nakon obavljanja posla ili zadatka koji se procjenjuje. Navedite je li bila uključena jedna ili obje strane tijela te je li bol trajala 2 ili više dana.",
      groups: {
        neck: {
          label: "1. Vrat",
          options: {
            one_side: "Bol ili nelagoda na jednoj strani tijela",
            both_sides: "Bol ili nelagoda na obje strane",
            lasted_two_days: "Bol je trajala 2 ili više dana"
          }
        },
        shoulders_upper_arms: {
          label: "2. Ramena ili nadlaktice",
          options: {
            one_side: "Bol ili nelagoda na jednoj strani tijela",
            both_sides: "Bol ili nelagoda na obje strane",
            lasted_two_days: "Bol je trajala 2 ili više dana"
          }
        },
        elbows_forearms: {
          label: "3. Laktovi ili podlaktice",
          options: {
            one_side: "Bol ili nelagoda na jednoj strani tijela",
            both_sides: "Bol ili nelagoda na obje strane",
            lasted_two_days: "Bol je trajala 2 ili više dana"
          }
        },
        wrists_hands_fingers: {
          label: "4. Zapešća, šake ili prsti",
          options: {
            one_side: "Bol ili nelagoda na jednoj strani tijela",
            both_sides: "Bol ili nelagoda na obje strane",
            lasted_two_days: "Bol je trajala 2 ili više dana"
          }
        },
        lower_back: {
          label: "5. Donji dio leđa",
          options: {
            one_side: "Bol ili nelagoda na jednoj strani tijela",
            both_sides: "Bol ili nelagoda na obje strane",
            lasted_two_days: "Bol je trajala 2 ili više dana"
          }
        },
        hips_upper_legs: {
          label: "6. Kukovi ili bedra",
          options: {
            one_side: "Bol ili nelagoda na jednoj strani tijela",
            both_sides: "Bol ili nelagoda na obje strane",
            lasted_two_days: "Bol je trajala 2 ili više dana"
          }
        },
        knees_lower_legs: {
          label: "7. Koljena ili potkoljenice",
          options: {
            one_side: "Bol ili nelagoda na jednoj strani tijela",
            both_sides: "Bol ili nelagoda na obje strane",
            lasted_two_days: "Bol je trajala 2 ili više dana"
          }
        },
        ankles_feet: {
          label: "8. Gležnjevi ili stopala",
          options: {
            one_side: "Bol ili nelagoda na jednoj strani tijela",
            both_sides: "Bol ili nelagoda na obje strane",
            lasted_two_days: "Bol je trajala 2 ili više dana"
          }
        }
      }
    },
    "question-11": {
      label: "Razmislite o tipičnom radnom danu ili dijelu dana kada obavljate određeni zadatak. Koliko vremena provodite oslanjajući dio tijela na oštre predmete ili rubove?",
      options: {
        less_than_30_min: "Manje od 30 minuta dnevno",
        "30_min_to_1_hour": "30 minuta do 1 sat dnevno",
        more_than_1_hour: "Više od 1 sata dnevno",
        does_not_apply: "Ne odnosi se"
      }
    },
    "question-12": {
      label: "Koliko vremena provodite klečeći na tvrdim ili hrapavim površinama bez osobne zaštite, primjerice bez štitnika za koljena?",
      options: {
        less_than_30_min: "Manje od 30 minuta dnevno",
        "30_min_to_1_hour": "30 minuta do 1 sat dnevno",
        more_than_1_hour: "Više od 1 sata dnevno",
        does_not_apply: "Ne odnosi se"
      }
    },
    "question-13": {
      label: "Razmislite o alatima ili predmetima koje držite dulje od 30 minuta odjednom. Odaberite sve tvrdnje koje se odnose na njih. Posljednja opcija ne može se odabrati ako je označena bilo koja druga.",
      options: {
        poor_grip_size: "Preveliki ili premali za pravilan hvat",
        irregular_unbalanced: "Nepravilnog oblika ili neuravnoteženi",
        sharp_handholds: "Imaju preoštre dijelove za držanje",
        slippery: "Skliski",
        none: "Ništa od navedenog"
      }
    },
    "question-14": {
      label: "Koristite li neki dio tijela kao privremeni alat za dovršavanje posla?",
      options: {
        less_than_one_hour: "Da, manje od 1 sata dnevno",
        more_than_one_hour: "Da, više od 1 sata dnevno",
        no: "Ne"
      }
    },
    "question-15": {
      label: "Razmislite o površinama preko kojih gurate, vučete ili pomičete predmete tijekom posla koji danas procjenjujete. Odaberite sve odgovarajuće opise.",
      options: {
        smooth: "Glatke, npr. obrađene površine",
        soft: "Meke, npr. pijesak, blato, trava",
        rough: "Hrapave, npr. šljunak, pločice, granit",
        does_not_apply: "Ne odnosi se"
      }
    },
    "question-16": {
      label: "Koliko često gurate, vučete ili pomičete predmete koje smatrate teškima bez mehaničke pomoći?",
      options: {
        most: "Većinu vremena",
        some: "Dio vremena",
        never: "Nikada"
      }
    },
    "question-17": {
      label: "Koliko su teški alati ili predmeti koje podižete, nosite ili pridržavate bez mehaničke pomoći?",
      options: {
        less_than_5_lb: "Manje od 5 lb / 2 kg",
        "5_to_18_lb": "5 do 18 lb / 2 do 8 kg",
        more_than_18_lb: "Više od 18 lb / 8 kg",
        does_not_apply: "Ne odnosi se"
      }
    },
    "question-18": {
      label: "Zahtijevaju li neki alati i/ili oprema koje koristite mnogo sile za pokretanje?",
      options: {
        regularly: "Da, barem neki alati ili oprema koje redovito koristim zahtijevaju silu",
        occasionally: "Da, barem neki alati ili oprema koje povremeno koristim zahtijevaju silu",
        no: "Ne"
      }
    },
    "question-19": {
      label: "Kada gurate i/ili vučete predmete koje smatrate teškima, u kojoj mjeri dobivate pomoć?",
      options: {
        great_extent: "U velikoj mjeri",
        some_extent: "U određenoj mjeri",
        do_not_ask: "Ne tražim pomoć",
        ask_but_no_assistance: "Tražim pomoć, ali je ne dobijem",
        does_not_apply: "Ne odnosi se"
      }
    },
    "question-20": {
      label: "Razmislite o tipičnom radnom danu ili dijelu dana kada obavljate zadatak. Dok sjedite ili stojite, koliko često radite s gornjim dijelom tijela nagnutim naprijed, natrag ili u stranu?",
      groups: {
        forward_backward: {
          label: "Naginjem se naprijed ili natrag više od 15 stupnjeva",
          options: {
            most: "Većinu vremena",
            some: "Dio vremena",
            never: "Nikada"
          }
        },
        sideways: {
          label: "Naginjem se u stranu",
          options: {
            most: "Većinu vremena",
            some: "Dio vremena",
            never: "Nikada"
          }
        }
      }
    },
    "question-21": {
      label: "Tijekom rada, okrećete li ikada gornji dio tijela u stranu bez promjene položaja stopala?",
      options: {
        often: "Da, to često radim tijekom posla",
        sometimes: "Da, to ponekad radim tijekom posla",
        never: "Nikada"
      }
    },
    "question-22": {
      label: "Razmislite o tipičnom radnom danu ili dijelu dana kada obavljate zadatak. Dok sjedite ili stojite, navedite gdje se vaše ruke nalaze u odnosu na tijelo.",
      groups: {
        hands_above_shoulders: {
          label: "Ruke iznad ramena",
          options: {
            most: "Većinu vremena",
            some: "Dio vremena",
            never: "Nikada"
          }
        },
        hands_floor_to_knee: {
          label: "Ruke između poda i koljena",
          options: {
            most: "Većinu vremena",
            some: "Dio vremena",
            never: "Nikada"
          }
        }
      }
    },
    "question-23": {
      label: "Jesu li vam jedna ili obje ruke ikada potpuno ispružene ravno naprijed dok obavljate posao ili zadatak koji danas procjenjujete?",
      options: {
        frequently: "Često",
        sometimes: "Da, to ponekad radim tijekom posla",
        never: "Nikada"
      }
    },
    "question-24": {
      label: "Kada su vam ruke ispružene, držite li ikada alat ili pomičete predmet?",
      options: {
        less_than_5_lb: "Manje od 5 lb / 2 kg",
        "5_to_10_lb": "5 do 10 lb / 2 do 4,5 kg",
        more_than_10_lb: "Više od 10 lb / 4,5 kg",
        no: "Ne"
      }
    },
    "question-25": {
      label: "Kako je položena vaša glava kada obavljate posao ili zadatak koji danas procjenjujete?",
      options: {
        neutral: "Često neutralna, izravno između ramena, brada ravna",
        slight_tilt: "Često nagnuta gore ili dolje manje od 15 stupnjeva",
        deep_tilt: "Često nagnuta gore, dolje ili u stranu više od 15 stupnjeva"
      }
    },
    "question-26": {
      label: "Koliko obično savijate zapešće gore i dolje? Koristite sliku u nastavku kao referencu.",
      options: {
        "0_to_14": "Obično 0 do 14 stupnjeva gore ili dolje",
        "15_to_30": "Obično 15 do 30 stupnjeva",
        more_than_30: "Obično više od 30 stupnjeva"
      }
    },
    "question-27": {
      label: "Koliko naginjete zapešće s jedne strane na drugu?",
      options: {
        "0_to_10": "Obično 0 do 10 stupnjeva lijevo ili desno",
        "10_to_20": "Obično 10 do 20 stupnjeva",
        more_than_20: "Obično više od 20 stupnjeva"
      }
    },
    "question-28": {
      label: "Je li moguće držati blizu tijela sve predmete koje trebate gurati, vući, podizati, koristiti itd.?",
      options: {
        frequently: "Često",
        sometimes: "Da, to ponekad radim tijekom posla",
        never: "Nikada"
      }
    },
    "question-29": {
      label: "Razmislite o tipičnom radnom danu ili dijelu dana kada obavljate zadatak. Koliko vremena provodite izvodeći slične pokrete iznova i iznova?",
      options: {
        less_than_30_min: "Manje od 30 minuta dnevno",
        "30_min_to_2_hours": "30 minuta do 2 sata dnevno",
        "2_to_4_hours": "2 do 4 sata dnevno",
        more_than_4_hours: "Više od 4 sata dnevno"
      }
    },
    "question-30": {
      label: "Koliko vremena provodite savijajući zapešće gore ili dolje više od 15 stupnjeva?",
      options: {
        less_than_1_hour: "Manje od 1 sata dnevno",
        "1_to_2_hours": "1 do 2 sata dnevno",
        more_than_2_hours: "Više od 2 sata dnevno",
        none: "Ništa od navedenog"
      }
    },
    "question-31": {
      label: "Koliko vremena provodite naginjući zapešće više od 15 stupnjeva lijevo ili desno?",
      options: {
        less_than_1_hour: "Manje od 1 sata dnevno",
        "1_to_2_hours": "1 do 2 sata dnevno",
        more_than_2_hours: "Više od 2 sata dnevno",
        none: "Ništa od navedenog"
      }
    },
    "question-32": {
      label: "Koliko vremena provodite koristeći snažno mišićno naprezanje, više od 18 funti / 8 kg vlastitom snagom, kada koristite alat ili rukujete predmetom?",
      options: {
        less_than_5_min: "Manje od 5 minuta dnevno",
        "5_to_25_min": "5 do 25 minuta dnevno",
        "30_min_to_2_5_hours": "30 minuta do 2,5 sata dnevno",
        "2_5_to_5_5_hours": "2,5 do 5,5 sati dnevno",
        more_than_5_5_hours: "Više od 5,5 sati dnevno"
      }
    },
    "question-33": {
      label: "Kada predmet hvatate između palca i vrhova prstiju, to se zove pincetni hvat. Koliko vremena koristite pincetni hvat za držanje predmeta težeg od 2 funte / 1 kg?",
      options: {
        less_than_2_hours: "Manje od 2 sata dnevno",
        more_than_2_hours: "Više od 2 sata dnevno",
        none: "Ništa od navedenog"
      }
    },
    "question-34": {
      label: "Kada rukom obuhvatite predmet, to se zove snažni hvat. Koliko vremena koristite snažni hvat za držanje predmeta težeg od 10 funti / 4,5 kg?",
      options: {
        less_than_2_hours: "Manje od 2 sata dnevno",
        more_than_2_hours: "Više od 2 sata dnevno",
        none: "Ništa od navedenog"
      }
    },
    "question-35": {
      label: "Ako koristite alate ili opremu koji uzrokuju vibracije u dijelu ili cijelom tijelu, koliko vremena ih koristite?",
      options: {
        less_than_1_hour: "Manje od 1 sata dnevno",
        "1_to_4_hours": "1 do 4 sata dnevno",
        more_than_4_hours: "Više od 4 sata dnevno",
        does_not_apply: "Ne odnosi se"
      }
    },
    "question-36": {
      label: "Ako gurate ili vučete predmete teže od 80 funti / 36 kg, koliko vremena provodite pomičući ih preko hrapavih ili mekih površina?",
      options: {
        less_than_5_min: "Manje od 5 minuta dnevno",
        "5_min_to_1_hour": "5 minuta do 1 sat dnevno",
        more_than_1_hour: "Više od 1 sata dnevno",
        does_not_apply: "Ne odnosi se"
      }
    },
    "question-37": {
      label: "Razmislite o tipičnom radnom danu ili dijelu dana kada obavljate zadatak. Ometaju li vas ikada zvukovi poput sirena, glasnog razgovora, prometa itd.?",
      options: {
        frequently: "Često",
        sometimes: "Da, to ponekad radim tijekom posla",
        no: "Ne"
      }
    },
    "question-38": {
      label: "Utječe li na vas sunčeva svjetlost koja vam sjaji ili se odbija u oči, odnosno odsjaj?",
      options: {
        frequently: "Često",
        sometimes: "Da, to ponekad radim tijekom posla",
        rarely: "Rijetko",
        never: "Nikada"
      }
    },
    "question-39": {
      label: "Ako vaš posao zahtijeva promatranje sitnih detalja ili čitanje sitnog tiska, možete li to lako učiniti?",
      options: {
        frequently: "Često",
        sometimes: "Da, to ponekad radim tijekom posla",
        rarely: "Rijetko",
        never: "Nikada",
        does_not_apply: "Ne odnosi se"
      }
    },
    "question-40": {
      label: "Ako radite u hladnom okruženju, osjećate li nelagodu u rukama, leđima, nogama, prstima i/ili nožnim prstima?",
      options: {
        yes: "Da",
        no: "Ne",
        does_not_apply: "Ne odnosi se"
      }
    },
    "question-41": {
      label: "S obzirom na zahtjeve posla, koliko često se od vas traži prekovremeni rad od jednog sata ili dulje?",
      options: {
        frequently: "Često",
        sometimes: "Da, to ponekad radim tijekom posla",
        rarely: "Rijetko",
        never: "Nikada"
      }
    },
    "question-42": {
      label: "Koliko često se od vas traži rad u kratkim rokovima?",
      options: {
        frequently: "Često",
        sometimes: "Da, to ponekad radim tijekom posla",
        rarely: "Rijetko",
        never: "Nikada"
      }
    }
  }
};
