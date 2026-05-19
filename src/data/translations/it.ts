import type { Translation } from "../../types";

export const it: Translation = {
  app: {
    title: "MSI360",
    disclosure: "Prototipo: le tue risposte restano in questo browser a meno che tu scelga di scaricare o condividere il report.",
    continue_button: "Continua",
    back_button: "Indietro",
    processing_button: "Elaborazione",
    analyzing_button: "Analisi in corso",
    question_progress: "Domanda {current} di {total}",
    score_summary_title: "Riepilogo del rischio MSI",
    score_overall_risk: "Rischio MSI complessivo",
    score_download_report: "Scarica report",
    score_not_available: "N/D",
    score_out_of_4: "{score} su 4",
    score_risk_not_enough: "Dati insufficienti",
    score_risk_low: "Rischio basso",
    score_risk_possible: "Rischio possibile",
    score_risk_likely: "Rischio probabile",
    score_risk_known: "Rischio noto",
    score_factor_not_enough: "Dati insufficienti per interpretare {factor}.",
    score_factor_low: "Rischio attualmente basso associato a {factor}.",
    score_factor_possible: "Possibile rischio di fastidio dovuto a {factor}.",
    score_factor_likely: "Probabile rischio di fastidio dovuto a {factor}.",
    score_factor_known: "Rischio noto di dolore e/o lesione.",
    score_psychosocial_note: "I fattori psicosociali hanno influenzato negativamente il punteggio complessivo di rischio MSI ({multiplier}).",
    score_subject_contact_stress: "stress da contatto",
    score_subject_force: "forza",
    score_subject_awkward_postures: "posture incongrue",
    score_subject_repetition: "ripetizione",
    score_subject_environmental: "fattori ambientali",
    wrap_email_copy: "Copia via email",
    wrap_review_results: "Rivedi risultati",
    wrap_submit_report: "Invia report",
    email_title: "Ricevi il report via email",
    email_body: "Inserisci il tuo indirizzo email se desideri ricevere una copia di questo report. Potrebbero essere necessari fino a 15 minuti. Controlla la cartella posta indesiderata o spam se non vedi l'email nella posta in arrivo.",
    email_next_body: "Vedrai il report finale nella schermata successiva.",
    email_address_label: "Indirizzo email",
    report_ready_title: "Il tuo report e pronto",
    report_card_title: "Report rischio MSI",
    report_date_label: "Data",
    report_task_label: "Lavoro/attivita analizzata:",
    report_overall_score_label: "Punteggio complessivo:",
    report_highest_risk: "Categorie con rischio piu elevato:",
    report_no_scored_categories: "Non ci sono ancora categorie di rischio con punteggio",
    report_email_copy_requested: "Copia via email richiesta per {email}.",
    report_download_pdf: "Scarica PDF",
    report_email_report: "Invia report via email",
    report_done: "Fine",
    submit_title: "Vuoi completare un'altra valutazione ErgoCheck?",
    submit_option_reuse: "Si, vorrei completare un altro report usando le stesse informazioni fornite inizialmente, con la possibilita di modificarle se necessario.",
    submit_option_restart: "Si, vorrei ricominciare con nuove informazioni",
    submit_option_no: "No, non adesso",
    submit_copy: "Grazie, premi il pulsante qui sotto per terminare il sondaggio.",
    submit_button: "Invia",
    complete_title: "Grazie per aver completato il sondaggio MSI 360",
    complete_body: "Le tue risposte aiutano a identificare i pericoli correlati agli MSI nel tuo luogo di lavoro e contribuiscono a un ambiente piu sicuro per tutti.",
    complete_next_steps_title: "Prossimi passi:",
    complete_next_step_review: "Rivedi il report e le raccomandazioni",
    complete_next_step_share: "Condividi i risultati con il tuo supervisore, se appropriato",
    complete_next_step_visit: "Visita worksafebc.com per ulteriori risorse",
    complete_start_new: "Inizia nuova valutazione",
    description_title: "Descrizione",
    description_body: "Le domande seguenti riguardano il lavoro che svolgi durante una giornata lavorativa tipica, oppure mentre completi l'attivita o il compito specifico che desideri valutare oggi. L'intento e comunicare a MSI360 le azioni che esegui per portare a termine il tuo lavoro.",
    ai_loading_task_description: "Analisi della descrizione dell'attività...",
    ai_task_analysis_fallback_toast: "La risposta dell'analisi attività AI è scaduta. Viene usato il fallback locale.",
    ai_question_pruning_fallback_toast: "La risposta della selezione domande AI è scaduta. Vengono usate domande di follow-up di fallback.",
    ai_fallback_toast_dismiss: "Chiudi avviso di fallback AI"
  },
  sections: {
    intro: "Informazioni sul lavoro",
    symptoms: "Sintomi attuali",
    contact_stress: "Stress da contatto",
    force: "Forza",
    awkward_postures: "Posture incongrue",
    repetition: "Ripetizione",
    environmental: "Fattori ambientali",
    organizational: "Organizzazione del lavoro"
  },
  questions: {
    "question-1": {
      label: "Qual e il tuo ruolo nell'attivita che desideri valutare oggi?",
      options: {
        worker: "Lavoratore",
        supervisor: "Supervisore",
        manager: "Manager",
        employer: "Datore di lavoro",
        health_safety_committee: "Membro di un comitato salute e sicurezza"
      }
    },
    "question-2": {
      label: "Da quanto tempo ricopri questo ruolo presso il tuo attuale datore di lavoro?",
      options: {
        less_than_year: "Meno di un anno",
        one_to_five: "Da 1 a 5 anni",
        six_to_ten: "Da 6 a 10 anni",
        more_than_ten: "Piu di 10 anni"
      }
    },
    "question-3": {
      label: "Qual e il compito o l'attivita lavorativa che desideri valutare?",
      help_text: "Fornisci una breve descrizione del compito o dell'attivita specifica che desideri valutare, includendo dettagli come postura, fastidio, ergonomia della postazione e/o durata delle pause, se applicabile."
    },
    "question-4": {
      label: "Indica la tua altezza usando le opzioni seguenti:",
      options: {
        under_5_4: "Meno di 5'4\" (< 1,62 m)",
        "5_4_to_5_9": "5'4\" - 5'9\" (1,62 m - 1,75 m)",
        "5_10_to_6_2": "5'10\" - 6'2\" (1,76 m - 1,88 m)",
        over_6_2: "Oltre 6'2\" (> 1,88 m)",
        prefer_not_to_say: "Preferisco non rispondere"
      }
    },
    // skipping this question for now, as it was made redundant by the task_description question.
    // we're leaving this in the code in case it is used in the future
    "question-5": {
      label: "Come riassumeresti il tipo di lavoro o compito valutato?",
      options: {
        office_clerical: "Lavoro o compito d'ufficio o amministrativo basato alla scrivania",
        not_desk_based: "Non basato su una scrivania in ufficio",
        both_setups: "Entrambe le situazioni"
      }
    },
    "question-6": {
      label: "Durante la giornata lavorativa di solito stai seduto o in piedi?",
      options: {
        mostly_sit: "Di solito sto seduto per la maggior parte della giornata",
        mostly_stand_move: "Di solito sto in piedi o mi muovo per la maggior parte della giornata",
        sit_and_stand: "Mi siedo e sto in piedi durante la giornata"
      }
    },
    "question-7": {
      label: "In che misura il tuo datore di lavoro o supervisore chiede il tuo feedback su strumenti o attrezzature prima dell'acquisto?",
      options: {
        great_extent: "In larga misura",
        some_extent: "In una certa misura",
        rarely: "Raramente",
        not_at_all: "Per niente"
      }
    },
    "question-8": {
      label: "In che misura il tuo datore di lavoro o supervisore chiede il tuo feedback su come il lavoro dovrebbe essere organizzato e/o svolto?",
      options: {
        great_extent: "In larga misura",
        some_extent: "In una certa misura",
        rarely: "Raramente",
        not_at_all: "Per niente"
      }
    },
    "question-9": {
      label: "Negli ultimi 7 giorni hai avuto dolore o fastidio correlato al lavoro?",
      options: {
        yes: "Si",
        no: "No"
      }
    },
    "question-10": {
      label: "Usando la tabella seguente, indica le parti specifiche del corpo in cui hai provato dolore o fastidio correlato al lavoro durante o dopo il lavoro o compito valutato.\n\nIndica se a) era coinvolto uno o entrambi i lati del corpo, e b) il dolore e durato 2 giorni o piu.",
      groups: {
        neck: {
          label: "1. Collo",
          options: {
            one_side: "Dolore o fastidio su un lato del corpo, ad esempio lato sinistro o destro",
            both_sides: "Dolore o fastidio sia a sinistra sia a destra",
            lasted_two_days: "Il dolore e durato 2 giorni o piu"
          }
        },
        shoulders_upper_arms: {
          label: "2. Spalle o parte superiore delle braccia",
          options: {
            one_side: "Dolore o fastidio su un lato del corpo, ad esempio lato sinistro o destro",
            both_sides: "Dolore o fastidio sia a sinistra sia a destra",
            lasted_two_days: "Il dolore e durato 2 giorni o piu"
          }
        },
        elbows_forearms: {
          label: "3. Gomiti o avambracci",
          options: {
            one_side: "Dolore o fastidio su un lato del corpo, ad esempio lato sinistro o destro",
            both_sides: "Dolore o fastidio sia a sinistra sia a destra",
            lasted_two_days: "Il dolore e durato 2 giorni o piu"
          }
        },
        wrists_hands_fingers: {
          label: "4. Polsi, mani o dita",
          options: {
            one_side: "Dolore o fastidio su un lato del corpo, ad esempio lato sinistro o destro",
            both_sides: "Dolore o fastidio sia a sinistra sia a destra",
            lasted_two_days: "Il dolore e durato 2 giorni o piu"
          }
        },
        lower_back: {
          label: "5. Parte bassa della schiena",
          options: {
            one_side: "Dolore o fastidio su un lato del corpo, ad esempio lato sinistro o destro",
            both_sides: "Dolore o fastidio sia a sinistra sia a destra",
            lasted_two_days: "Il dolore e durato 2 giorni o piu"
          }
        },
        hips_upper_legs: {
          label: "6. Anche o parte superiore delle gambe",
          options: {
            one_side: "Dolore o fastidio su un lato del corpo, ad esempio lato sinistro o destro",
            both_sides: "Dolore o fastidio sia a sinistra sia a destra",
            lasted_two_days: "Il dolore e durato 2 giorni o piu"
          }
        },
        knees_lower_legs: {
          label: "7. Ginocchia o parte inferiore delle gambe",
          options: {
            one_side: "Dolore o fastidio su un lato del corpo, ad esempio lato sinistro o destro",
            both_sides: "Dolore o fastidio sia a sinistra sia a destra",
            lasted_two_days: "Il dolore e durato 2 giorni o piu"
          }
        },
        ankles_feet: {
          label: "8. Caviglie o piedi",
          options: {
            one_side: "Dolore o fastidio su un lato del corpo, ad esempio lato sinistro o destro",
            both_sides: "Dolore o fastidio sia a sinistra sia a destra",
            lasted_two_days: "Il dolore e durato 2 giorni o piu"
          }
        }
      }
    },
    "question-11": {
      label: "Pensa a una giornata lavorativa tipica, oppure alla parte della giornata in cui svolgi il compito specifico che stai valutando. Quanto tempo passi appoggiando o premendo una parte del corpo su oggetti o bordi taglienti?",
      options: {
        less_than_30_min: "Meno di 30 minuti al giorno",
        "30_min_to_1_hour": "Da 30 minuti a 1 ora al giorno",
        more_than_1_hour: "Piu di 1 ora al giorno",
        does_not_apply: "Non mi appoggio a oggetti o bordi taglienti al lavoro"
      }
    },
    "question-12": {
      label: "Quanto tempo passi inginocchiato su superfici dure o ruvide senza protezione personale, ad esempio senza ginocchiere?",
      options: {
        less_than_30_min: "Meno di 30 minuti al giorno",
        "30_min_to_1_hour": "Da 30 minuti a 1 ora al giorno",
        more_than_1_hour: "Piu di 1 ora al giorno",
        does_not_apply: "Non mi inginocchio su superfici dure senza protezione al lavoro"
      }
    },
    "question-13": {
      label: "Pensa ai tipi di strumenti o oggetti che tieni in mano per piu di 30 minuti alla volta. Dall'elenco seguente, seleziona tutte le descrizioni applicabili.\n\nL'ultima opzione non puo essere selezionata se e stata selezionata qualsiasi altra opzione.",
      options: {
        poor_grip_size: "Troppo grandi o piccoli per una presa corretta",
        irregular_unbalanced: "Di forma irregolare o sbilanciati",
        sharp_handholds: "Con impugnature troppo taglienti",
        slippery: "Scivolosi",
        none: "Nessuna delle precedenti"
      }
    },
    "question-14": {
      label: "Usi una parte del corpo come strumento improvvisato per completare il lavoro? Per esempio, potresti usare il palmo o il ginocchio per applicare forza su una superficie.\n\nL'immagine sotto mostra un esempio di questo tipo di uso del corpo.",
      options: {
        less_than_one_hour: "Si, per meno di 1 ora al giorno",
        more_than_one_hour: "Si, per piu di 1 ora al giorno",
        no: "No, non uso il corpo come strumento improvvisato nel mio lavoro"
      }
    },
    "question-15": {
      label: "Pensa ai tipi di superfici su cui spingi, tiri o sposti oggetti durante il lavoro, compito o attivita che stai valutando oggi. Seleziona tutte le descrizioni applicabili.",
      options: {
        smooth: "Liscia, ad esempio superfici rifinite",
        soft: "Morbida, ad esempio sabbia, fango, erba",
        rough: "Ruvida, ad esempio ghiaia, piastrelle, granito",
        does_not_apply: "Non spingo ne tiro oggetti su superfici per completare il mio lavoro"
      }
    },
    "question-16": {
      label: "Quanto spesso spingi, tiri o sposti oggetti che consideri pesanti senza un ausilio meccanico, ad esempio carriola o carrello?",
      options: {
        most: "Per la maggior parte del tempo",
        some: "Per parte del tempo",
        never: "Mai"
      }
    },
    "question-17": {
      label: "Quanto pesano gli strumenti o oggetti che sollevi, trasporti o sostieni senza assistenza meccanica?",
      options: {
        less_than_5_lb: "Meno di 5 lb / 2 kg",
        "5_to_18_lb": "Da 5 a 18 lb / da 2 a 8 kg",
        more_than_18_lb: "Piu di 18 lb / 8 kg",
        does_not_apply: "Non sollevo, trasporto o sostengo strumenti o oggetti al lavoro"
      }
    },
    "question-18": {
      label: "Alcuni strumenti e/o attrezzature che usi richiedono molta forza per essere avviati? Ad esempio un tagliaerba con corda da tirare o un pedale da premere con decisione.",
      options: {
        regularly: "Si, almeno alcuni strumenti o attrezzature che uso regolarmente richiedono forza",
        occasionally: "Si, almeno alcuni strumenti o attrezzature che uso occasionalmente richiedono forza",
        no: "No, nessuno strumento o attrezzatura che uso richiede forza per l'avvio"
      }
    },
    "question-19": {
      label: "Quando spingi e/o tiri oggetti che consideri pesanti, in che misura ricevi assistenza, ad esempio da un collega o usando un carrello?",
      options: {
        great_extent: "In larga misura",
        some_extent: "In una certa misura",
        do_not_ask: "Non chiedo assistenza",
        ask_but_no_assistance: "Chiedo assistenza ma non la ricevo",
        does_not_apply: "Non spingo ne tiro questi tipi di oggetti durante la giornata lavorativa"
      }
    },
    "question-20": {
      label: "Pensa a una giornata lavorativa tipica, oppure alla parte della giornata in cui svolgi il compito specifico che stai valutando. Quando sei seduto o in piedi, quanto spesso lavori con la parte superiore del corpo inclinata in avanti, indietro o lateralmente?\n\nSeleziona le opzioni applicabili.",
      groups: {
        forward_backward: {
          label: "Mi inclino in avanti o indietro di oltre 15 gradi",
          options: {
            most: "Per la maggior parte del tempo",
            some: "Per parte del tempo",
            never: "Mai"
          }
        },
        sideways: {
          label: "Mi inclino lateralmente",
          options: {
            most: "Per la maggior parte del tempo",
            some: "Per parte del tempo",
            never: "Mai"
          }
        }
      }
    },
    "question-21": {
      label: "Durante le attivita lavorative, ruoti mai la parte superiore del corpo da un lato senza cambiare la posizione dei piedi mentre sei seduto o in piedi?",
      options: {
        often: "Si, lo faccio spesso durante il lavoro, compito o attivita",
        sometimes: "Si, lo faccio a volte durante il lavoro, compito o attivita",
        never: "No, non ruoto mai la parte superiore del corpo mentre lavoro"
      }
    },
    "question-22": {
      label: "Pensa a una giornata lavorativa tipica, oppure alla parte della giornata in cui svolgi il compito specifico che stai valutando. Quando sei seduto o in piedi, indica dove si trovano le mani rispetto al corpo.\n\nSeleziona le opzioni applicabili.",
      groups: {
        hands_above_shoulders: {
          label: "Mani sopra le spalle",
          options: {
            most: "Per la maggior parte del tempo",
            some: "Per parte del tempo",
            never: "Mai"
          }
        },
        hands_floor_to_knee: {
          label: "Mani tra il pavimento e il ginocchio",
          options: {
            most: "Per la maggior parte del tempo",
            some: "Per parte del tempo",
            never: "Mai"
          }
        }
      }
    },
    "question-23": {
      label: "Una o entrambe le braccia sono mai completamente estese in avanti durante il lavoro, compito o attivita che stai valutando oggi?",
      options: {
        frequently: "Si, le braccia sono spesso completamente estese in avanti",
        sometimes: "Si, le braccia sono a volte completamente estese in avanti",
        never: "No, le braccia non sono mai completamente estese in avanti"
      }
    },
    "question-24": {
      label: "Quando le braccia sono distese, tieni mai uno strumento o sposti un oggetto?",
      options: {
        less_than_5_lb: "Si, e spesso pesa meno di 5 lb / 2 kg",
        "5_to_10_lb": "Si, e spesso pesa da 5 a 10 lb / da 2 a 4,5 kg",
        more_than_10_lb: "Si, e spesso pesa piu di 10 lb / 4,5 kg",
        no: "No, non tengo strumenti o oggetti quando le braccia sono distese"
      }
    },
    "question-25": {
      label: "Com'e posizionata la testa mentre svolgi il lavoro, compito o attivita che stai valutando oggi?",
      options: {
        neutral: "Spesso e neutra, direttamente tra le spalle, con il mento in piano",
        slight_tilt: "Spesso e inclinata in alto o in basso meno di 15 gradi",
        deep_tilt: "Spesso e inclinata in alto, in basso o di lato piu di 15 gradi"
      }
    },
    "question-26": {
      label: "Quanto pieghi di solito il polso verso l'alto o verso il basso? Usa l'immagine sotto come riferimento.",
      options: {
        "0_to_14": "Di solito da 0 a 14 gradi in alto o in basso",
        "15_to_30": "Di solito da 15 a 30 gradi",
        more_than_30: "Di solito piu di 30 gradi"
      }
    },
    "question-27": {
      label: "Quanto inclini il polso da un lato all'altro?",
      options: {
        "0_to_10": "Di solito da 0 a 10 gradi a sinistra o destra",
        "10_to_20": "Di solito da 10 a 20 gradi",
        more_than_20: "Di solito piu di 20 gradi"
      }
    },
    "question-28": {
      label: "Ti e possibile tenere vicino al corpo tutti gli oggetti che devi spingere, tirare, sollevare, usare, ecc.?",
      options: {
        frequently: "Si, frequentemente",
        sometimes: "Si, a volte",
        never: "No, mai"
      }
    },
    "question-29": {
      label: "Pensa a una giornata lavorativa tipica, oppure alla parte della giornata in cui svolgi il compito specifico che stai valutando. Quanto tempo passi a eseguire movimenti simili ripetutamente?",
      options: {
        less_than_30_min: "Meno di 30 minuti al giorno",
        "30_min_to_2_hours": "Da 30 minuti a 2 ore al giorno",
        "2_to_4_hours": "Da 2 a 4 ore al giorno",
        more_than_4_hours: "Piu di 4 ore al giorno"
      }
    },
    "question-30": {
      label: "Quanto tempo passi piegando il polso verso l'alto o verso il basso piu di 15 gradi? Usa l'immagine sotto come riferimento.",
      options: {
        less_than_1_hour: "Meno di 1 ora al giorno",
        "1_to_2_hours": "Da 1 a 2 ore al giorno",
        more_than_2_hours: "Piu di 2 ore al giorno",
        none: "Nessun tempo"
      }
    },
    "question-31": {
      label: "Quanto tempo passi inclinando il polso piu di 15 gradi verso sinistra o destra? Usa l'immagine sotto come riferimento.",
      options: {
        less_than_1_hour: "Meno di 1 ora al giorno",
        "1_to_2_hours": "Da 1 a 2 ore al giorno",
        more_than_2_hours: "Piu di 2 ore al giorno",
        none: "Nessun tempo"
      }
    },
    "question-32": {
      label: "Quanto tempo passi usando sforzi muscolari intensi, superiori a 18 libbre / 8 kg con la tua forza, quando usi uno strumento o maneggi un oggetto?",
      options: {
        less_than_5_min: "Meno di 5 minuti al giorno",
        "5_to_25_min": "Da 5 a 25 minuti al giorno",
        "30_min_to_2_5_hours": "Da 30 minuti a 2,5 ore al giorno",
        "2_5_to_5_5_hours": "Da 2,5 a 5,5 ore al giorno",
        more_than_5_5_hours: "Piu di 5,5 ore al giorno"
      }
    },
    "question-33": {
      label: "Quando afferri un oggetto tra pollice e punte delle dita, si chiama presa a pinza. Durante il lavoro, compito o attivita che stai valutando oggi, quanto tempo passi usando una presa a pinza per tenere un oggetto piu pesante di 2 libbre / 1 kg?",
      options: {
        less_than_2_hours: "Meno di 2 ore al giorno",
        more_than_2_hours: "Piu di 2 ore al giorno",
        none: "Nessun tempo"
      }
    },
    "question-34": {
      label: "Quando avvolgi la mano attorno a un oggetto per tenerlo, si chiama presa di forza. Quanto tempo passi usando una presa di forza per tenere un oggetto piu pesante di 10 libbre / 4,5 kg?",
      options: {
        less_than_2_hours: "Meno di 2 ore al giorno",
        more_than_2_hours: "Piu di 2 ore al giorno",
        none: "Nessun tempo"
      }
    },
    "question-35": {
      label: "Se usi strumenti o attrezzature che causano vibrazioni in parte o in tutto il corpo, quanto tempo passi usando questi strumenti?",
      options: {
        less_than_1_hour: "Meno di 1 ora al giorno",
        "1_to_4_hours": "Da 1 a 4 ore al giorno",
        more_than_4_hours: "Piu di 4 ore al giorno",
        does_not_apply: "Non uso questi tipi di strumenti o attrezzature"
      }
    },
    "question-36": {
      label: "Se spingi o tiri oggetti piu pesanti di 80 libbre / 36 kg, quanto tempo passi a spostarli su superfici ruvide, come ghiaia, piastrelle o terreno irregolare, oppure morbide, come sabbia, fango o erba?",
      options: {
        less_than_5_min: "Meno di 5 minuti al giorno",
        "5_min_to_1_hour": "Da 5 minuti a 1 ora al giorno",
        more_than_1_hour: "Piu di 1 ora al giorno",
        does_not_apply: "Non sposto questi tipi di oggetti su superfici ruvide o morbide"
      }
    },
    "question-37": {
      label: "Pensa a una giornata lavorativa tipica, oppure alla parte della giornata in cui svolgi il compito specifico che stai valutando. Ti capita di essere distratto da rumori, come sirene, conversazioni ad alto volume, traffico, ecc.?",
      options: {
        frequently: "Frequentemente",
        sometimes: "A volte",
        no: "No"
      }
    },
    "question-38": {
      label: "Sei disturbato dal sole che entra o si riflette negli occhi, cioe dall'abbagliamento?",
      options: {
        frequently: "Frequentemente",
        sometimes: "A volte",
        rarely: "Raramente",
        never: "Mai"
      }
    },
    "question-39": {
      label: "Se il tuo lavoro richiede di osservare dettagli fini o leggere caratteri piccoli, riesci a farlo facilmente?",
      options: {
        frequently: "Frequentemente",
        sometimes: "A volte",
        rarely: "Raramente",
        never: "Mai",
        does_not_apply: "Il mio lavoro non richiede questa attivita"
      }
    },
    "question-40": {
      label: "Se lavori in ambienti freddi, provi fastidio a braccia, schiena, gambe, dita e/o piedi?",
      options: {
        yes: "Si",
        no: "No",
        does_not_apply: "Non lavoro in ambienti freddi"
      }
    },
    "question-41": {
      label: "Considerando le richieste del tuo lavoro, quanto spesso ti viene chiesto di fare straordinari per un'ora o piu?",
      options: {
        frequently: "Frequentemente",
        sometimes: "A volte",
        rarely: "Raramente",
        never: "Mai"
      }
    },
    "question-42": {
      label: "Quanto spesso ti viene chiesto di lavorare con scadenze strette?",
      options: {
        frequently: "Frequentemente",
        sometimes: "A volte",
        rarely: "Raramente",
        never: "Mai"
      }
    }
  }
};
