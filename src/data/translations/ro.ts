import type { Translation } from "../../types";

export const ro: Translation = {
  "app": {
    "title": "MSI360",
    "disclosure": "Prototip: raspunsurile tale raman in acest browser daca nu alegi sa descarci sau sa partajezi raportul.",
    "continue_button": "Continua",
    "back_button": "Inapoi",
    "processing_button": "Se proceseaza",
    "analyzing_button": "Se analizeaza",
    "question_progress": "Intrebarea {current} din {total}",
    "score_summary_title": "Rezumatul riscului MSI",
    "score_overall_risk": "Risc MSI general",
    "score_download_report": "Descarca raportul",
    "score_not_available": "N/A",
    "score_out_of_4": "{score} din 4",
    "score_risk_not_enough": "Date insuficiente",
    "score_risk_low": "Risc scazut",
    "score_risk_possible": "Risc posibil",
    "score_risk_likely": "Risc probabil",
    "score_risk_known": "Risc cunoscut",
    "score_factor_not_enough": "Date insuficiente pentru a interpreta {factor}.",
    "score_factor_low": "In prezent, risc scazut asociat cu {factor}.",
    "score_factor_possible": "Risc posibil de disconfort din cauza {factor}.",
    "score_factor_likely": "Risc probabil de disconfort din cauza {factor}.",
    "score_factor_known": "Risc cunoscut de durere si/sau vatamare.",
    "score_psychosocial_note": "Factorii psihosociali au influentat negativ scorul general de risc MSI ({multiplier}).",
    "score_subject_contact_stress": "presiunea de contact",
    "score_subject_force": "forta",
    "score_subject_awkward_postures": "posturile incomode",
    "score_subject_repetition": "repetitia",
    "score_subject_environmental": "factorii de mediu",
    "wrap_email_copy": "Copie prin e-mail",
    "wrap_review_results": "Revizuieste rezultatele",
    "wrap_submit_report": "Trimite raportul",
    "email_title": "Primeste raportul prin e-mail",
    "email_body": "Introdu adresa de e-mail daca doresti sa primesti o copie a acestui raport. Poate dura pana la 15 minute. Verifica folderul junk sau spam daca nu vezi e-mailul in inbox.",
    "email_next_body": "Vei vedea raportul final pe ecranul urmator.",
    "email_address_label": "Adresa de e-mail",
    "report_ready_title": "Raportul tau este gata",
    "report_card_title": "Raport de risc MSI",
    "report_date_label": "Data",
    "report_task_label": "Post/sarcina analizata:",
    "report_overall_score_label": "Scor general:",
    "report_highest_risk": "Categorii cu cel mai mare risc:",
    "report_no_scored_categories": "Nu exista inca categorii de risc punctate",
    "report_email_copy_requested": "Copie prin e-mail solicitata pentru {email}.",
    "report_download_pdf": "Descarca PDF",
    "report_email_report": "Trimite raportul prin e-mail",
    "report_done": "Gata",
    "submit_title": "Doresti sa completezi o alta evaluare ErgoCheck?",
    "submit_option_reuse": "Da, si doresc sa completez un alt raport folosind aceleasi informatii furnizate initial, cu posibilitatea de a le edita dupa nevoie.",
    "submit_option_restart": "Da, doresc sa incep din nou cu informatii noi",
    "submit_option_no": "Nu, nu acum",
    "submit_copy": "Multumim, apasa butonul de mai jos pentru a finaliza sondajul.",
    "submit_button": "Trimite",
    "complete_title": "Multumim ca ai completat sondajul MSI 360",
    "complete_body": "Raspunsurile tale ajuta la identificarea pericolelor legate de MSI la locul de munca si contribuie la un mediu de lucru mai sigur pentru toti.",
    "complete_next_steps_title": "Pasii urmatori:",
    "complete_next_step_review": "Revizuieste raportul si recomandarile",
    "complete_next_step_share": "Partajeaza constatarile cu supervizorul, daca este potrivit",
    "complete_next_step_visit": "Viziteaza worksafebc.com pentru resurse suplimentare",
    "complete_start_new": "Incepe o evaluare noua",
    "description_title": "Descriere",
    "description_body": "Urmatoarele intrebari sunt despre munca pe care o faci intr-o zi obisnuita de lucru sau atunci cand finalizezi sarcina ori activitatea specifica pe care doresti sa o evaluezi astazi. Scopul este sa ii spui MSI360 ce actiuni faci pentru a-ti realiza munca."
  },
  "sections": {
    "intro": "Despre munca",
    "symptoms": "Simptome actuale",
    "contact_stress": "Presiune de contact",
    "force": "Forta",
    "awkward_postures": "Posturi incomode",
    "repetition": "Repetitie",
    "environmental": "Factori de mediu",
    "organizational": "Organizarea muncii"
  },
  "questions": {
    "question-1": {
      "label": "Care este rolul tau in activitatea pe care doresti sa o evaluezi astazi?",
      "options": {
        "worker": "Lucrator",
        "supervisor": "Supervizor",
        "manager": "Manager",
        "employer": "Angajator",
        "health_safety_committee": "Membru al unui comitet de sanatate si securitate"
      }
    },
    "question-2": {
      "label": "De cat timp esti in acest rol la angajatorul actual?",
      "options": {
        "less_than_year": "Mai putin de un an",
        "one_to_five": "1 pana la 5 ani",
        "six_to_ten": "6 pana la 10 ani",
        "more_than_ten": "Mai mult de 10 ani"
      }
    },
    "question-3": {
      "label": "Care este sarcina sau activitatea de lucru pe care doresti sa o evaluezi?",
      "help_text": "Ofera o scurta descriere a sarcinii sau activitatii specifice pe care doresti sa o evaluezi. Include detalii precum postura, disconfortul, ergonomia postului de lucru si/sau durata pauzelor, unde este cazul."
    },
    "question-4": {
      "label": "Indica inaltimea ta folosind optiunile de mai jos:",
      "options": {
        "under_5_4": "Mai putin de 5'4\" (< 1,62 m)",
        "5_4_to_5_9": "5'4\" - 5'9\" (1,62 m - 1,75 m)",
        "5_10_to_6_2": "5'10\" - 6'2\" (1,76 m - 1,88 m)",
        "over_6_2": "Peste 6'2\" (> 1,88 m)",
        "prefer_not_to_say": "Prefer sa nu spun"
      }
    },
    "question-5": {
      "label": "Cum ai rezuma tipul de post sau sarcina evaluata?",
      "options": {
        "office_clerical": "Post sau sarcina de birou/administrativa, bazata la birou",
        "not_desk_based": "Nu este bazata la un birou intr-un spatiu de birouri",
        "both_setups": "Ambele situatii"
      }
    },
    "question-6": {
      "label": "De obicei stai jos sau in picioare in timpul zilei de lucru?",
      "options": {
        "mostly_sit": "De obicei stau jos cea mai mare parte a zilei",
        "mostly_stand_move": "De obicei stau in picioare sau ma misc cea mai mare parte a zilei",
        "sit_and_stand": "Stau jos si in picioare pe parcursul zilei"
      }
    },
    "question-7": {
      "label": "In ce masura angajatorul sau supervizorul iti cere parerea despre unelte sau echipamente inainte de achizitie?",
      "options": {
        "great_extent": "In mare masura",
        "some_extent": "Intr-o anumita masura",
        "rarely": "Rar",
        "not_at_all": "Deloc"
      }
    },
    "question-8": {
      "label": "In ce masura angajatorul sau supervizorul iti cere parerea despre cum ar trebui organizata si/sau efectuata munca ta?",
      "options": {
        "great_extent": "In mare masura",
        "some_extent": "Intr-o anumita masura",
        "rarely": "Rar",
        "not_at_all": "Deloc"
      }
    },
    "question-9": {
      "label": "In ultimele 7 zile, ai avut durere sau disconfort legat de munca?",
      "options": {
        "yes": "Da",
        "no": "Nu"
      }
    },
    "question-10": {
      "label": "Folosind tabelul de mai jos, indica partile specifice ale corpului unde ai avut durere sau disconfort legat de munca in timpul sau dupa efectuarea postului ori sarcinii evaluate.\n\nIndica daca a) a fost implicata una sau ambele parti ale corpului si b) durerea a durat 2 zile sau mai mult.",
      "groups": {
        "neck": {
          "label": "1. Gat",
          "options": {
            "one_side": "Durere sau disconfort pe o parte a corpului, de exemplu partea stanga sau dreapta",
            "both_sides": "Durere sau disconfort atat pe partea stanga, cat si pe partea dreapta",
            "lasted_two_days": "Durerea a durat 2 zile sau mai mult"
          }
        },
        "shoulders_upper_arms": {
          "label": "2. Umeri sau brate superioare",
          "options": {
            "one_side": "Durere sau disconfort pe o parte a corpului, de exemplu partea stanga sau dreapta",
            "both_sides": "Durere sau disconfort atat pe partea stanga, cat si pe partea dreapta",
            "lasted_two_days": "Durerea a durat 2 zile sau mai mult"
          }
        },
        "elbows_forearms": {
          "label": "3. Coate sau antebrate",
          "options": {
            "one_side": "Durere sau disconfort pe o parte a corpului, de exemplu partea stanga sau dreapta",
            "both_sides": "Durere sau disconfort atat pe partea stanga, cat si pe partea dreapta",
            "lasted_two_days": "Durerea a durat 2 zile sau mai mult"
          }
        },
        "wrists_hands_fingers": {
          "label": "4. Incheieturi, maini sau degete",
          "options": {
            "one_side": "Durere sau disconfort pe o parte a corpului, de exemplu partea stanga sau dreapta",
            "both_sides": "Durere sau disconfort atat pe partea stanga, cat si pe partea dreapta",
            "lasted_two_days": "Durerea a durat 2 zile sau mai mult"
          }
        },
        "lower_back": {
          "label": "5. Partea inferioara a spatelui",
          "options": {
            "one_side": "Durere sau disconfort pe o parte a corpului, de exemplu partea stanga sau dreapta",
            "both_sides": "Durere sau disconfort atat pe partea stanga, cat si pe partea dreapta",
            "lasted_two_days": "Durerea a durat 2 zile sau mai mult"
          }
        },
        "hips_upper_legs": {
          "label": "6. Solduri sau coapse",
          "options": {
            "one_side": "Durere sau disconfort pe o parte a corpului, de exemplu partea stanga sau dreapta",
            "both_sides": "Durere sau disconfort atat pe partea stanga, cat si pe partea dreapta",
            "lasted_two_days": "Durerea a durat 2 zile sau mai mult"
          }
        },
        "knees_lower_legs": {
          "label": "7. Genunchi sau gambe",
          "options": {
            "one_side": "Durere sau disconfort pe o parte a corpului, de exemplu partea stanga sau dreapta",
            "both_sides": "Durere sau disconfort atat pe partea stanga, cat si pe partea dreapta",
            "lasted_two_days": "Durerea a durat 2 zile sau mai mult"
          }
        },
        "ankles_feet": {
          "label": "8. Glezne sau picioare",
          "options": {
            "one_side": "Durere sau disconfort pe o parte a corpului, de exemplu partea stanga sau dreapta",
            "both_sides": "Durere sau disconfort atat pe partea stanga, cat si pe partea dreapta",
            "lasted_two_days": "Durerea a durat 2 zile sau mai mult"
          }
        }
      }
    },
    "question-11": {
      "label": "Gandeste-te la o zi obisnuita de lucru sau, daca evaluezi o sarcina specifica, la partea zilei in care o faci. Cat timp petreci sprijinind sau rezemand o parte a corpului pe obiecte ori margini ascutite?",
      "options": {
        "less_than_30_min": "Mai putin de 30 de minute pe zi",
        "30_min_to_1_hour": "30 de minute pana la 1 ora pe zi",
        "more_than_1_hour": "Mai mult de 1 ora pe zi",
        "does_not_apply": "Nu ma sprijin pe obiecte sau margini ascutite la munca"
      }
    },
    "question-12": {
      "label": "Cat timp petreci ingenuncheat pe suprafete dure sau aspre fara protectie personala, de exemplu fara genunchiere?",
      "options": {
        "less_than_30_min": "Mai putin de 30 de minute pe zi",
        "30_min_to_1_hour": "30 de minute pana la 1 ora pe zi",
        "more_than_1_hour": "Mai mult de 1 ora pe zi",
        "does_not_apply": "Nu ingenunchez pe suprafete dure fara protectie la munca"
      }
    },
    "question-13": {
      "label": "Gandeste-te la tipurile de unelte sau obiecte pe care le tii in mana mai mult de 30 de minute odata. Din lista de mai jos, selecteaza toate afirmatiile care se aplica.\n\nUltima optiune nu poate fi selectata daca a fost bifata orice alta optiune.",
      "options": {
        "poor_grip_size": "Prea mari sau prea mici pentru a fi prinse corect",
        "irregular_unbalanced": "Au forma neregulata sau sunt dezechilibrate",
        "sharp_handholds": "Au manere prea ascutite",
        "slippery": "Alunecoase",
        "none": "Niciuna dintre cele de mai sus"
      }
    },
    "question-14": {
      "label": "Folosesti vreo parte a corpului ca unealta improvizata pentru a-ti finaliza munca? De exemplu, ai putea folosi palma sau genunchiul pentru a aplica forta pe o suprafata.\n\nImaginea de mai jos este un exemplu de folosire a corpului in acest fel.",
      "options": {
        "less_than_one_hour": "Da, mai putin de 1 ora pe zi",
        "more_than_one_hour": "Da, mai mult de 1 ora pe zi",
        "no": "Nu, nu imi folosesc corpul ca unealta improvizata in munca"
      }
    },
    "question-15": {
      "label": "Gandeste-te la tipurile de suprafete peste care impingi, tragi sau deplasezi obiecte in timpul postului, sarcinii sau activitatii evaluate astazi. Selecteaza toate descrierile care se aplica.",
      "options": {
        "smooth": "Netede, de exemplu suprafete finisate",
        "soft": "Moi, de exemplu nisip, noroi, iarba",
        "rough": "Aspre, de exemplu pietris, gresie, granit",
        "does_not_apply": "Nu imping si nu trag obiecte peste suprafete pentru a-mi finaliza munca"
      }
    },
    "question-16": {
      "label": "Cat de des impingi, tragi sau deplasezi obiecte pe care le consideri grele fara ajutor mecanic, de exemplu o roaba sau un carucior?",
      "options": {
        "most": "De cele mai multe ori",
        "some": "Uneori",
        "never": "Niciodata"
      }
    },
    "question-17": {
      "label": "Cat de grele sunt uneltele sau obiectele pe care le ridici, le transporti sau le sustii fara asistenta mecanica?",
      "options": {
        "less_than_5_lb": "Mai putin de 5 lb / 2 kg",
        "5_to_18_lb": "5 pana la 18 lb / 2 pana la 8 kg",
        "more_than_18_lb": "Mai mult de 18 lb / 8 kg",
        "does_not_apply": "Nu ridic, transport sau sustin unelte ori obiecte la munca"
      }
    },
    "question-18": {
      "label": "Oricare dintre uneltele si/sau echipamentele pe care le folosesti necesita multa forta pentru a porni? De exemplu, o masina de tuns iarba cu snur de tras sau o pedala care trebuie apasata ferm.",
      "options": {
        "regularly": "Da, cel putin unele unelte sau echipamente pe care le folosesc regulat necesita forta",
        "occasionally": "Da, cel putin unele unelte sau echipamente pe care le folosesc ocazional necesita forta",
        "no": "Nu, niciuna dintre uneltele sau echipamentele pe care le folosesc nu necesita forta pentru a porni"
      }
    },
    "question-19": {
      "label": "Cand impingi si/sau tragi obiecte pe care le consideri grele, in ce masura primesti asistenta, de exemplu de la un coleg sau folosind un carucior?",
      "options": {
        "great_extent": "In mare masura",
        "some_extent": "Intr-o anumita masura",
        "do_not_ask": "Nu cer asistenta",
        "ask_but_no_assistance": "Cer asistenta, dar nu o primesc",
        "does_not_apply": "Nu imping si nu trag astfel de obiecte in timpul zilei de lucru"
      }
    },
    "question-20": {
      "label": "Gandeste-te la o zi obisnuita de lucru sau la partea zilei in care faci sarcina evaluata. Cand stai jos sau in picioare, cat de des lucrezi cu partea superioara a corpului aplecata inainte, inapoi sau lateral?\n\nSelecteaza optiunile care ti se aplica.",
      "groups": {
        "forward_backward": {
          "label": "Ma aplec inainte sau inapoi mai mult de 15 grade",
          "options": {
            "most": "De cele mai multe ori",
            "some": "Uneori",
            "never": "Niciodata"
          }
        },
        "sideways": {
          "label": "Ma aplec lateral",
          "options": {
            "most": "De cele mai multe ori",
            "some": "Uneori",
            "never": "Niciodata"
          }
        }
      }
    },
    "question-21": {
      "label": "Cand iti faci activitatile de lucru, iti rasucesti vreodata partea superioara a corpului intr-o parte fara sa schimbi pozitia picioarelor, stand jos sau in picioare?",
      "options": {
        "often": "Da, fac asta des in timpul postului, sarcinii sau activitatii",
        "sometimes": "Da, fac asta uneori in timpul postului, sarcinii sau activitatii",
        "never": "Nu, nu imi rasucesc niciodata partea superioara a corpului cand lucrez"
      }
    },
    "question-22": {
      "label": "Gandeste-te la o zi obisnuita de lucru sau la partea zilei in care faci sarcina evaluata. Cand stai jos sau in picioare, indica unde se afla mainile in raport cu corpul.\n\nSelecteaza optiunile care ti se aplica.",
      "groups": {
        "hands_above_shoulders": {
          "label": "Mainile deasupra umerilor",
          "options": {
            "most": "De cele mai multe ori",
            "some": "Uneori",
            "never": "Niciodata"
          }
        },
        "hands_floor_to_knee": {
          "label": "Mainile intre podea si genunchi",
          "options": {
            "most": "De cele mai multe ori",
            "some": "Uneori",
            "never": "Niciodata"
          }
        }
      }
    },
    "question-23": {
      "label": "Una sau ambele brate sunt vreodata complet intinse drept in fata cand faci postul, sarcina sau activitatea evaluata astazi?",
      "options": {
        "frequently": "Da, bratele mele sunt frecvent complet intinse drept in fata",
        "sometimes": "Da, bratele mele sunt uneori complet intinse drept in fata",
        "never": "Nu, bratele mele nu sunt niciodata complet intinse drept in fata"
      }
    },
    "question-24": {
      "label": "Cand bratul/bratele sunt intinse, tii vreodata o unealta sau muti un obiect?",
      "options": {
        "less_than_5_lb": "Da, si adesea are mai putin de 5 lb / 2 kg",
        "5_to_10_lb": "Da, si adesea are 5 pana la 10 lb / 2 pana la 4,5 kg",
        "more_than_10_lb": "Da, si adesea are mai mult de 10 lb / 4,5 kg",
        "no": "Nu, nu tin unelte sau obiecte cand bratul/bratele sunt intinse"
      }
    },
    "question-25": {
      "label": "Cum este pozitionat capul tau cand faci postul, sarcina sau activitatea evaluata astazi?",
      "options": {
        "neutral": "Adesea este neutru, direct intre umeri, cu barbia la nivel",
        "slight_tilt": "Adesea este inclinat in sus sau in jos mai putin de 15 grade",
        "deep_tilt": "Adesea este inclinat in sus, in jos sau lateral mai mult de 15 grade"
      }
    },
    "question-26": {
      "label": "Cat de mult iti indoi de obicei incheietura in sus si in jos? Foloseste imaginea de mai jos ca reper.",
      "options": {
        "0_to_14": "De obicei 0 pana la 14 grade in sus sau in jos",
        "15_to_30": "De obicei 15 pana la 30 de grade",
        "more_than_30": "De obicei mai mult de 30 de grade"
      }
    },
    "question-27": {
      "label": "Cat de mult iti inclini incheietura dintr-o parte in alta?",
      "options": {
        "0_to_10": "De obicei 0 pana la 10 grade la stanga sau dreapta",
        "10_to_20": "De obicei 10 pana la 20 de grade",
        "more_than_20": "De obicei mai mult de 20 de grade"
      }
    },
    "question-28": {
      "label": "Este posibil sa tii aproape de corp toate obiectele pe care trebuie sa le impingi, tragi, ridici, folosesti etc.?",
      "options": {
        "frequently": "Da, frecvent",
        "sometimes": "Da, uneori",
        "never": "Nu, niciodata"
      }
    },
    "question-29": {
      "label": "Gandeste-te la o zi obisnuita de lucru sau la partea zilei in care faci sarcina evaluata. Cat timp petreci efectuand miscari similare in mod repetat?",
      "options": {
        "less_than_30_min": "Mai putin de 30 de minute pe zi",
        "30_min_to_2_hours": "30 de minute pana la 2 ore pe zi",
        "2_to_4_hours": "2 pana la 4 ore pe zi",
        "more_than_4_hours": "Mai mult de 4 ore pe zi"
      }
    },
    "question-30": {
      "label": "Cat timp petreci indoind incheietura in sus sau in jos mai mult de 15 grade? Foloseste imaginea de mai jos ca reper.",
      "options": {
        "less_than_1_hour": "Mai putin de 1 ora pe zi",
        "1_to_2_hours": "1 pana la 2 ore pe zi",
        "more_than_2_hours": "Mai mult de 2 ore pe zi",
        "none": "Deloc"
      }
    },
    "question-31": {
      "label": "Cat timp petreci inclinandu-ti incheietura mai mult de 15 grade la stanga sau dreapta? Foloseste imaginea de mai jos ca reper.",
      "options": {
        "less_than_1_hour": "Mai putin de 1 ora pe zi",
        "1_to_2_hours": "1 pana la 2 ore pe zi",
        "more_than_2_hours": "Mai mult de 2 ore pe zi",
        "none": "Deloc"
      }
    },
    "question-32": {
      "label": "Cat timp petreci folosind efort muscular puternic, mai mult de 18 livre / 8 kg cu propria forta, cand folosesti o unealta sau manipulezi un obiect?",
      "options": {
        "less_than_5_min": "Mai putin de 5 minute pe zi",
        "5_to_25_min": "5 pana la 25 de minute pe zi",
        "30_min_to_2_5_hours": "30 de minute pana la 2,5 ore pe zi",
        "2_5_to_5_5_hours": "2,5 pana la 5,5 ore pe zi",
        "more_than_5_5_hours": "Mai mult de 5,5 ore pe zi"
      }
    },
    "question-33": {
      "label": "Cand prinzi un obiect intre degetul mare si varfurile degetelor, se numeste prindere in penseta. In timpul postului, sarcinii sau activitatii evaluate astazi, cat timp petreci folosind o prindere in penseta pentru a tine un obiect mai greu de 2 livre / 1 kg?",
      "options": {
        "less_than_2_hours": "Mai putin de 2 ore pe zi",
        "more_than_2_hours": "Mai mult de 2 ore pe zi",
        "none": "Deloc"
      }
    },
    "question-34": {
      "label": "Cand iti infasori mana in jurul unui obiect pentru a-l tine, se numeste prindere de forta. Cat timp petreci folosind o prindere de forta pentru a tine un obiect mai greu de 10 livre / 4,5 kg?",
      "options": {
        "less_than_2_hours": "Mai putin de 2 ore pe zi",
        "more_than_2_hours": "Mai mult de 2 ore pe zi",
        "none": "Deloc"
      }
    },
    "question-35": {
      "label": "Daca folosesti unelte sau echipamente care provoaca vibratii in parte sau in intregul corp, cat timp petreci folosind aceste unelte?",
      "options": {
        "less_than_1_hour": "Mai putin de 1 ora pe zi",
        "1_to_4_hours": "1 pana la 4 ore pe zi",
        "more_than_4_hours": "Mai mult de 4 ore pe zi",
        "does_not_apply": "Nu folosesc aceste tipuri de unelte sau echipamente"
      }
    },
    "question-36": {
      "label": "Daca impingi sau tragi obiecte mai grele de 80 lb / 36 kg, cat timp petreci mutand aceste obiecte peste suprafete aspre, cum ar fi pietris, gresie sau teren denivelat, ori peste suprafete moi, cum ar fi nisip, noroi sau iarba?",
      "options": {
        "less_than_5_min": "Mai putin de 5 minute pe zi",
        "5_min_to_1_hour": "5 minute pana la 1 ora pe zi",
        "more_than_1_hour": "Mai mult de 1 ora pe zi",
        "does_not_apply": "Nu mut aceste tipuri de obiecte peste suprafete aspre sau moi"
      }
    },
    "question-37": {
      "label": "Gandeste-te la o zi obisnuita de lucru sau la partea zilei in care faci sarcina evaluata. Esti vreodata distras de zgomote, cum ar fi sirene, vorbit tare, trafic etc.?",
      "options": {
        "frequently": "Frecvent",
        "sometimes": "Uneori",
        "no": "Nu"
      }
    },
    "question-38": {
      "label": "Esti afectat de lumina soarelui care iti intra sau se reflecta in ochi, adica de stralucire?",
      "options": {
        "frequently": "Frecvent",
        "sometimes": "Uneori",
        "rarely": "Rar",
        "never": "Niciodata"
      }
    },
    "question-39": {
      "label": "Daca munca ta necesita sa privesti detalii fine sau sa citesti caractere mici, poti face acest lucru usor?",
      "options": {
        "frequently": "Frecvent",
        "sometimes": "Uneori",
        "rarely": "Rar",
        "never": "Niciodata",
        "does_not_apply": "Munca mea nu necesita acest lucru"
      }
    },
    "question-40": {
      "label": "Daca lucrezi in medii reci, simti disconfort in brate, spate, picioare, degete si/sau degetele de la picioare?",
      "options": {
        "yes": "Da",
        "no": "Nu",
        "does_not_apply": "Nu lucrez in medii reci"
      }
    },
    "question-41": {
      "label": "Avand in vedere cerintele muncii, cat de des ti se cere sa lucrezi peste program timp de o ora sau mai mult?",
      "options": {
        "frequently": "Frecvent",
        "sometimes": "Uneori",
        "rarely": "Rar",
        "never": "Niciodata"
      }
    },
    "question-42": {
      "label": "Cat de des ti se cere sa lucrezi cu termene limita stranse?",
      "options": {
        "frequently": "Frecvent",
        "sometimes": "Uneori",
        "rarely": "Rar",
        "never": "Niciodata"
      }
    }
  }
};
