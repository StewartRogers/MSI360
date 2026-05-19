import type { Translation } from "../../types";

export const pl: Translation = {
  app: {
    title: "MSI360",
    disclosure: "Prototyp: Twoje odpowiedzi pozostaja w tej przegladarce, chyba ze zdecydujesz sie pobrac lub udostepnic raport.",
    continue_button: "Kontynuuj",
    back_button: "Wstecz",
    processing_button: "Przetwarzanie",
    analyzing_button: "Analizowanie",
    question_progress: "Pytanie {current} z {total}",
    score_summary_title: "Podsumowanie ryzyka MSI",
    score_overall_risk: "Ogolne ryzyko MSI",
    score_download_report: "Pobierz raport",
    score_not_available: "N/D",
    score_out_of_4: "{score} z 4",
    score_risk_not_enough: "Za malo danych",
    score_risk_low: "Niskie ryzyko",
    score_risk_possible: "Mozliwe ryzyko",
    score_risk_likely: "Prawdopodobne ryzyko",
    score_risk_known: "Znane ryzyko",
    score_factor_not_enough: "Za malo danych, aby zinterpretowac {factor}.",
    score_factor_low: "Obecnie niskie ryzyko zwiazane z {factor}.",
    score_factor_possible: "Mozliwe ryzyko dyskomfortu z powodu {factor}.",
    score_factor_likely: "Prawdopodobne ryzyko dyskomfortu z powodu {factor}.",
    score_factor_known: "Znane ryzyko bolu i/lub urazu.",
    score_psychosocial_note: "Czynniki psychospoleczne negatywnie wplynely na ogolny wynik ryzyka MSI ({multiplier}).",
    score_subject_contact_stress: "uciskiem kontaktowym",
    score_subject_force: "sila",
    score_subject_awkward_postures: "niewygodnymi pozycjami",
    score_subject_repetition: "powtarzalnoscia",
    score_subject_environmental: "czynnikami srodowiskowymi",
    wrap_email_copy: "Kopia e-mail",
    wrap_review_results: "Przejrzyj wyniki",
    wrap_submit_report: "Wyslij raport",
    email_title: "Otrzymaj raport e-mailem",
    email_body: "Wpisz adres e-mail, jesli chcesz otrzymac kopie tego raportu. Moze to potrwac do 15 minut. Sprawdz folder niechcianej poczty lub spam, jesli nie widzisz wiadomosci w skrzynce odbiorczej.",
    email_next_body: "Ostateczny raport zobaczysz na nastepnym ekranie.",
    email_address_label: "Adres e-mail",
    report_ready_title: "Twoj raport jest gotowy",
    report_card_title: "Raport ryzyka MSI",
    report_date_label: "Data",
    report_task_label: "Przeanalizowana praca/zadanie:",
    report_overall_score_label: "Ogolny wynik:",
    report_highest_risk: "Kategorie najwyzszego ryzyka:",
    report_no_scored_categories: "Brak jeszcze ocenionych kategorii ryzyka",
    report_email_copy_requested: "Poproszono o kopie e-mail dla {email}.",
    report_download_pdf: "Pobierz PDF",
    report_email_report: "Wyslij raport e-mailem",
    report_done: "Gotowe",
    submit_title: "Czy chcesz wypelnic kolejna ocene ErgoCheck?",
    submit_option_reuse: "Tak, chce wypelnic kolejny raport, uzywajac tych samych informacji podanych na poczatku, z mozliwoscia edycji w razie potrzeby.",
    submit_option_restart: "Tak, chce zaczac od nowa z nowymi informacjami",
    submit_option_no: "Nie, nie teraz",
    submit_copy: "Dziekujemy, nacisnij ponizszy przycisk, aby zakonczyc ankiete.",
    submit_button: "Wyslij",
    complete_title: "Dziekujemy za wypelnienie ankiety MSI 360",
    complete_body: "Twoje odpowiedzi pomagaja identyfikowac zagrozenia zwiazane z MSI w miejscu pracy i przyczyniaja sie do bezpieczniejszego srodowiska pracy dla wszystkich.",
    complete_next_steps_title: "Nastepne kroki:",
    complete_next_step_review: "Przejrzyj raport i zalecenia",
    complete_next_step_share: "Udostepnij wyniki przelozonemu, jesli to odpowiednie",
    complete_next_step_visit: "Odwiedz worksafebc.com, aby uzyskac dodatkowe zasoby",
    complete_start_new: "Rozpocznij nowa ocene",
    description_title: "Opis",
    description_body: "Ponizsze pytania dotycza pracy wykonywanej podczas typowego dnia pracy albo podczas wykonywania konkretnego zadania lub czynnosci, ktore chcesz dzis ocenic. Celem jest przekazanie MSI360 informacji o czynnosciach, ktore wykonujesz, aby zrealizowac swoja prace.",
    ai_loading_task_description: "Analizowanie opisu zadania...",
    ai_task_analysis_fallback_toast: "Odpowiedź analizy zadania AI przekroczyła limit czasu. Używana jest lokalna opcja awaryjna.",
    ai_question_pruning_fallback_toast: "Odpowiedź filtrowania pytań AI przekroczyła limit czasu. Używane są awaryjne pytania uzupełniające.",
    ai_fallback_toast_dismiss: "Zamknij powiadomienie awaryjne AI"
  },
  sections: {
    intro: "O pracy",
    symptoms: "Obecne objawy",
    contact_stress: "Ucisk kontaktowy",
    force: "Sila",
    awkward_postures: "Niewygodne pozycje",
    repetition: "Powtarzalnosc",
    environmental: "Czynniki srodowiskowe",
    organizational: "Organizacja pracy"
  },
  questions: {
    "question-1": {
      label: "Jaka jest Twoja rola w czynnosci, ktora chcesz dzis ocenic?",
      options: {
        worker: "Pracownik",
        supervisor: "Przelozony",
        manager: "Kierownik",
        employer: "Pracodawca",
        health_safety_committee: "Czlonek komisji BHP"
      }
    },
    "question-2": {
      label: "Jak dlugo pelnisz te role u obecnego pracodawcy?",
      options: {
        less_than_year: "Mniej niz rok",
        one_to_five: "Od 1 do 5 lat",
        six_to_ten: "Od 6 do 10 lat",
        more_than_ten: "Ponad 10 lat"
      }
    },
    "question-3": {
      label: "Jakie zadanie lub czynnosc w pracy chcesz ocenic?",
      help_text: "Podaj krotki opis konkretnego zadania lub czynnosci, ktore chcesz ocenic. W razie potrzeby uwzglednij szczegoly, takie jak pozycja ciala, dyskomfort, ergonomia stanowiska pracy i/lub dlugosc przerw."
    },
    "question-4": {
      label: "Wskaz swoj wzrost, korzystajac z ponizszych opcji:",
      options: {
        under_5_4: "Mniej niz 5'4\" (< 1,62 m)",
        "5_4_to_5_9": "5'4\" - 5'9\" (1,62 m - 1,75 m)",
        "5_10_to_6_2": "5'10\" - 6'2\" (1,76 m - 1,88 m)",
        over_6_2: "Ponad 6'2\" (> 1,88 m)",
        prefer_not_to_say: "Wole nie odpowiadac"
      }
    },
    // skipping this question for now, as it was made redundant by the task_description question.
    // we're leaving this in the code in case it is used in the future
    "question-5": {
      label: "Jak podsumowalbys rodzaj ocenianej pracy lub zadania?",
      options: {
        office_clerical: "Praca biurowa lub administracyjna przy biurku",
        not_desk_based: "Nie oparta na pracy przy biurku w biurze",
        both_setups: "Oba ustawienia"
      }
    },
    "question-6": {
      label: "Czy zwykle siedzisz czy stoisz podczas dnia pracy?",
      options: {
        mostly_sit: "Zwykle siedze przez wiekszosc dnia",
        mostly_stand_move: "Zwykle stoje lub poruszam sie przez wiekszosc dnia",
        sit_and_stand: "W ciagu dnia siedze i stoje"
      }
    },
    "question-7": {
      label: "W jakim stopniu pracodawca lub przelozony pyta Cie o opinie dotyczaca narzedzi lub sprzetu przed ich zakupem?",
      options: {
        great_extent: "W duzym stopniu",
        some_extent: "W pewnym stopniu",
        rarely: "Rzadko",
        not_at_all: "Wcale"
      }
    },
    "question-8": {
      label: "W jakim stopniu pracodawca lub przelozony pyta Cie o opinie dotyczaca organizacji i/lub sposobu wykonywania Twojej pracy?",
      options: {
        great_extent: "W duzym stopniu",
        some_extent: "W pewnym stopniu",
        rarely: "Rzadko",
        not_at_all: "Wcale"
      }
    },
    "question-9": {
      label: "Czy w ciagu ostatnich 7 dni doswiadczyles bolu lub dyskomfortu zwiazanego z praca?",
      options: {
        yes: "Tak",
        no: "Nie"
      }
    },
    "question-10": {
      label: "Korzystajac z ponizszej tabeli, wskaz konkretne czesci ciala, w ktorych doswiadczyles bolu lub dyskomfortu zwiazanego z praca podczas lub po wykonywaniu ocenianej pracy albo zadania.\n\nWskaz, czy a) dotyczylo to jednej lub obu stron ciala oraz b) czy bol trwal 2 dni lub dluzej.",
      groups: {
        neck: {
          label: "1. Szyja",
          options: {
            one_side: "Bol lub dyskomfort po jednej stronie ciala, na przyklad po lewej lub prawej stronie",
            both_sides: "Bol lub dyskomfort po lewej i prawej stronie",
            lasted_two_days: "Bol trwal 2 dni lub dluzej"
          }
        },
        shoulders_upper_arms: {
          label: "2. Barki lub ramiona",
          options: {
            one_side: "Bol lub dyskomfort po jednej stronie ciala, na przyklad po lewej lub prawej stronie",
            both_sides: "Bol lub dyskomfort po lewej i prawej stronie",
            lasted_two_days: "Bol trwal 2 dni lub dluzej"
          }
        },
        elbows_forearms: {
          label: "3. Lokcie lub przedramiona",
          options: {
            one_side: "Bol lub dyskomfort po jednej stronie ciala, na przyklad po lewej lub prawej stronie",
            both_sides: "Bol lub dyskomfort po lewej i prawej stronie",
            lasted_two_days: "Bol trwal 2 dni lub dluzej"
          }
        },
        wrists_hands_fingers: {
          label: "4. Nadgarstki, dlonie lub palce",
          options: {
            one_side: "Bol lub dyskomfort po jednej stronie ciala, na przyklad po lewej lub prawej stronie",
            both_sides: "Bol lub dyskomfort po lewej i prawej stronie",
            lasted_two_days: "Bol trwal 2 dni lub dluzej"
          }
        },
        lower_back: {
          label: "5. Dolna czesc plecow",
          options: {
            one_side: "Bol lub dyskomfort po jednej stronie ciala, na przyklad po lewej lub prawej stronie",
            both_sides: "Bol lub dyskomfort po lewej i prawej stronie",
            lasted_two_days: "Bol trwal 2 dni lub dluzej"
          }
        },
        hips_upper_legs: {
          label: "6. Biodra lub uda",
          options: {
            one_side: "Bol lub dyskomfort po jednej stronie ciala, na przyklad po lewej lub prawej stronie",
            both_sides: "Bol lub dyskomfort po lewej i prawej stronie",
            lasted_two_days: "Bol trwal 2 dni lub dluzej"
          }
        },
        knees_lower_legs: {
          label: "7. Kolana lub podudzia",
          options: {
            one_side: "Bol lub dyskomfort po jednej stronie ciala, na przyklad po lewej lub prawej stronie",
            both_sides: "Bol lub dyskomfort po lewej i prawej stronie",
            lasted_two_days: "Bol trwal 2 dni lub dluzej"
          }
        },
        ankles_feet: {
          label: "8. Kostki lub stopy",
          options: {
            one_side: "Bol lub dyskomfort po jednej stronie ciala, na przyklad po lewej lub prawej stronie",
            both_sides: "Bol lub dyskomfort po lewej i prawej stronie",
            lasted_two_days: "Bol trwal 2 dni lub dluzej"
          }
        }
      }
    },
    "question-11": {
      label: "Pomysl o typowym dniu pracy albo, jesli oceniasz konkretne zadanie lub czynnosc, o tej czesci dnia, w ktorej je wykonujesz. Ile czasu spedzasz, opierajac czesc ciala o ostre przedmioty lub krawedzie?",
      options: {
        less_than_30_min: "Mniej niz 30 minut dziennie",
        "30_min_to_1_hour": "Od 30 minut do 1 godziny dziennie",
        more_than_1_hour: "Ponad 1 godzine dziennie",
        does_not_apply: "Nie opieram sie o ostre przedmioty ani krawedzie w pracy"
      }
    },
    "question-12": {
      label: "Ile czasu spedzasz, kleczac na twardych lub szorstkich powierzchniach bez ochrony osobistej, np. bez nakolannikow?",
      options: {
        less_than_30_min: "Mniej niz 30 minut dziennie",
        "30_min_to_1_hour": "Od 30 minut do 1 godziny dziennie",
        more_than_1_hour: "Ponad 1 godzine dziennie",
        does_not_apply: "Nie klecze na twardych powierzchniach bez ochrony w pracy"
      }
    },
    "question-13": {
      label: "Pomysl o typach narzedzi lub przedmiotow, ktore trzymasz przez ponad 30 minut naraz. Z ponizszej listy wybierz wszystkie pasujace opisy.\n\nOstatniej opcji nie mozna wybrac, jesli zaznaczono jakakolwiek inna opcje.",
      options: {
        poor_grip_size: "Zbyt duze lub zbyt male, aby prawidlowo uchwycic",
        irregular_unbalanced: "O nieregularnym ksztalcie lub niezrownowazone",
        sharp_handholds: "Maja zbyt ostre uchwyty",
        slippery: "Sliskie",
        none: "Zadne z powyzszych"
      }
    },
    "question-14": {
      label: "Czy uzywasz jakiejkolwiek czesci ciala jako prowizorycznego narzedzia do wykonania pracy? Na przyklad mozesz uzywac dloni lub kolana, aby wywierac nacisk na powierzchnie.\n\nIlustracja ponizej pokazuje przyklad takiego uzycia ciala.",
      options: {
        less_than_one_hour: "Tak, mniej niz 1 godzine dziennie",
        more_than_one_hour: "Tak, ponad 1 godzine dziennie",
        no: "Nie, nie uzywam ciala jako prowizorycznego narzedzia w pracy"
      }
    },
    "question-15": {
      label: "Pomysl o rodzajach powierzchni, po ktorych pchasz, ciagniesz lub przesuwasz przedmioty podczas ocenianej pracy, zadania lub czynnosci. Wybierz wszystkie pasujace opisy.",
      options: {
        smooth: "Gladkie, np. powierzchnie wykonczone",
        soft: "Miekkie, np. piasek, bloto, trawa",
        rough: "Szorstkie, np. zwir, plytki, granit",
        does_not_apply: "Nie pcham ani nie ciagne przedmiotow po powierzchniach, aby wykonac prace"
      }
    },
    "question-16": {
      label: "Jak czesto pchasz, ciagniesz lub przesuwasz przedmioty, ktore uwazasz za ciezkie, bez pomocy mechanicznej, np. taczki lub wozka?",
      options: {
        most: "Przez wiekszosc czasu",
        some: "Przez czesc czasu",
        never: "Nigdy"
      }
    },
    "question-17": {
      label: "Jak ciezkie sa narzedzia lub przedmioty, ktore podnosisz, przenosisz lub podtrzymujesz bez pomocy mechanicznej?",
      options: {
        less_than_5_lb: "Mniej niz 5 lb / 2 kg",
        "5_to_18_lb": "Od 5 do 18 lb / od 2 do 8 kg",
        more_than_18_lb: "Ponad 18 lb / 8 kg",
        does_not_apply: "Nie podnosze, nie przenosze ani nie podtrzymuje zadnych narzedzi ani przedmiotow w pracy"
      }
    },
    "question-18": {
      label: "Czy ktorekolwiek narzedzia i/lub urzadzenia, ktorych uzywasz, wymagaja duzej sily do uruchomienia? Np. kosiarka z linka do mocnego pociagniecia albo pedal, ktory trzeba mocno nacisnac.",
      options: {
        regularly: "Tak, co najmniej niektore narzedzia lub urzadzenia, ktorych uzywam regularnie, wymagaja sily",
        occasionally: "Tak, co najmniej niektore narzedzia lub urzadzenia, ktorych uzywam okazjonalnie, wymagaja sily",
        no: "Nie, zadne narzedzia ani urzadzenia, ktorych uzywam, nie wymagaja sily do uruchomienia"
      }
    },
    "question-19": {
      label: "Gdy pchasz i/lub ciagniesz przedmioty, ktore uwazasz za ciezkie, w jakim stopniu otrzymujesz pomoc, np. od wspolpracownika albo korzystajac z wozka?",
      options: {
        great_extent: "W duzym stopniu",
        some_extent: "W pewnym stopniu",
        do_not_ask: "Nie prosze o pomoc",
        ask_but_no_assistance: "Prosze o pomoc, ale jej nie otrzymuje",
        does_not_apply: "Nie pcham ani nie ciagne takich przedmiotow podczas dnia pracy"
      }
    },
    "question-20": {
      label: "Pomysl o typowym dniu pracy albo o czesci dnia, w ktorej wykonujesz oceniane zadanie. Jak czesto podczas siedzenia lub stania pracujesz z gorna czescia ciala pochylona do przodu, do tylu lub na bok?\n\nWybierz opcje, ktore Ciebie dotycza.",
      groups: {
        forward_backward: {
          label: "Pochylam sie do przodu lub do tylu o ponad 15 stopni",
          options: {
            most: "Przez wiekszosc czasu",
            some: "Przez czesc czasu",
            never: "Nigdy"
          }
        },
        sideways: {
          label: "Pochylam sie na bok",
          options: {
            most: "Przez wiekszosc czasu",
            some: "Przez czesc czasu",
            never: "Nigdy"
          }
        }
      }
    },
    "question-21": {
      label: "Czy podczas wykonywania pracy kiedykolwiek skrecasz gorna czesc ciala w jedna strone bez zmiany ustawienia stop, siedzac lub stojac?",
      options: {
        often: "Tak, robie to czesto podczas pracy, zadania lub czynnosci",
        sometimes: "Tak, robie to czasami podczas pracy, zadania lub czynnosci",
        never: "Nie, nigdy nie skrecam gornej czesci ciala podczas pracy"
      }
    },
    "question-22": {
      label: "Pomysl o typowym dniu pracy albo o czesci dnia, w ktorej wykonujesz oceniane zadanie. Podczas siedzenia lub stania wskaz, gdzie znajduja sie Twoje rece wzgledem ciala.\n\nWybierz opcje, ktore Ciebie dotycza.",
      groups: {
        hands_above_shoulders: {
          label: "Rece powyzej barkow",
          options: {
            most: "Przez wiekszosc czasu",
            some: "Przez czesc czasu",
            never: "Nigdy"
          }
        },
        hands_floor_to_knee: {
          label: "Rece miedzy podloga a kolanem",
          options: {
            most: "Przez wiekszosc czasu",
            some: "Przez czesc czasu",
            never: "Nigdy"
          }
        }
      }
    },
    "question-23": {
      label: "Czy jedna lub obie rece bywaja calkowicie wyprostowane do przodu podczas wykonywania ocenianej pracy, zadania lub czynnosci?",
      options: {
        frequently: "Tak, moje rece sa czesto calkowicie wyprostowane do przodu",
        sometimes: "Tak, moje rece sa czasami calkowicie wyprostowane do przodu",
        never: "Nie, moje rece nigdy nie sa calkowicie wyprostowane do przodu"
      }
    },
    "question-24": {
      label: "Kiedy ramiona sa wyciagniete, czy kiedykolwiek trzymasz narzedzie lub przesuwasz przedmiot?",
      options: {
        less_than_5_lb: "Tak, i czesto jest to mniej niz 5 lb / 2 kg",
        "5_to_10_lb": "Tak, i czesto jest to od 5 do 10 lb / od 2 do 4,5 kg",
        more_than_10_lb: "Tak, i czesto jest to ponad 10 lb / 4,5 kg",
        no: "Nie, nie trzymam narzedzi ani przedmiotow, gdy ramiona sa wyciagniete"
      }
    },
    "question-25": {
      label: "Jak ustawiona jest Twoja glowa podczas wykonywania ocenianej pracy, zadania lub czynnosci?",
      options: {
        neutral: "Czesto neutralnie, bezposrednio miedzy barkami, z broda poziomo",
        slight_tilt: "Czesto pochylona w gore lub w dol mniej niz 15 stopni",
        deep_tilt: "Czesto pochylona w gore, w dol lub na bok o ponad 15 stopni"
      }
    },
    "question-26": {
      label: "Jak bardzo zwykle zginasz nadgarstek w gore i w dol? Uzyj ponizszego obrazu jako odniesienia.",
      options: {
        "0_to_14": "Zwykle od 0 do 14 stopni w gore lub w dol",
        "15_to_30": "Zwykle od 15 do 30 stopni",
        more_than_30: "Zwykle ponad 30 stopni"
      }
    },
    "question-27": {
      label: "Jak bardzo odchylasz nadgarstek z boku na bok?",
      options: {
        "0_to_10": "Zwykle od 0 do 10 stopni w lewo lub w prawo",
        "10_to_20": "Zwykle od 10 do 20 stopni",
        more_than_20: "Zwykle ponad 20 stopni"
      }
    },
    "question-28": {
      label: "Czy mozesz trzymac blisko ciala wszystkie przedmioty, ktore musisz pchac, ciagnac, podnosic, uzywac itd.?",
      options: {
        frequently: "Tak, czesto",
        sometimes: "Tak, czasami",
        never: "Nie, nigdy"
      }
    },
    "question-29": {
      label: "Pomysl o typowym dniu pracy albo o czesci dnia, w ktorej wykonujesz oceniane zadanie. Ile czasu spedzasz na wykonywaniu podobnych ruchow w kolko?",
      options: {
        less_than_30_min: "Mniej niz 30 minut dziennie",
        "30_min_to_2_hours": "Od 30 minut do 2 godzin dziennie",
        "2_to_4_hours": "Od 2 do 4 godzin dziennie",
        more_than_4_hours: "Ponad 4 godziny dziennie"
      }
    },
    "question-30": {
      label: "Ile czasu spedzasz na zginaniu nadgarstka w gore lub w dol o ponad 15 stopni? Uzyj ponizszego obrazu jako odniesienia.",
      options: {
        less_than_1_hour: "Mniej niz 1 godzine dziennie",
        "1_to_2_hours": "Od 1 do 2 godzin dziennie",
        more_than_2_hours: "Ponad 2 godziny dziennie",
        none: "Wcale"
      }
    },
    "question-31": {
      label: "Ile czasu spedzasz na odchylaniu nadgarstka o ponad 15 stopni w lewo lub w prawo? Uzyj ponizszego obrazu jako odniesienia.",
      options: {
        less_than_1_hour: "Mniej niz 1 godzine dziennie",
        "1_to_2_hours": "Od 1 do 2 godzin dziennie",
        more_than_2_hours: "Ponad 2 godziny dziennie",
        none: "Wcale"
      }
    },
    "question-32": {
      label: "Ile czasu spedzasz na uzywaniu silnych wysilkow miesniowych, ponad 18 funtow / 8 kg wlasna sila, podczas uzywania narzedzia lub obslugi przedmiotu?",
      options: {
        less_than_5_min: "Mniej niz 5 minut dziennie",
        "5_to_25_min": "Od 5 do 25 minut dziennie",
        "30_min_to_2_5_hours": "Od 30 minut do 2,5 godziny dziennie",
        "2_5_to_5_5_hours": "Od 2,5 do 5,5 godziny dziennie",
        more_than_5_5_hours: "Ponad 5,5 godziny dziennie"
      }
    },
    "question-33": {
      label: "Gdy chwytasz przedmiot miedzy kciukiem a opuszkami palcow, nazywa sie to chwytem szczypcowym. Podczas ocenianej pracy, zadania lub czynnosci, ile czasu spedzasz, uzywajac chwytu szczypcowego do trzymania przedmiotu ciezszego niz 2 funty / 1 kg?",
      options: {
        less_than_2_hours: "Mniej niz 2 godziny dziennie",
        more_than_2_hours: "Ponad 2 godziny dziennie",
        none: "Wcale"
      }
    },
    "question-34": {
      label: "Gdy obejmujesz dlonia przedmiot, aby go trzymac, nazywa sie to chwytem silowym. Ile czasu spedzasz, uzywajac chwytu silowego do trzymania przedmiotu ciezszego niz 10 funtow / 4,5 kg?",
      options: {
        less_than_2_hours: "Mniej niz 2 godziny dziennie",
        more_than_2_hours: "Ponad 2 godziny dziennie",
        none: "Wcale"
      }
    },
    "question-35": {
      label: "Jesli uzywasz narzedzi lub sprzetu powodujacych drgania czesci albo calego ciala, ile czasu spedzasz, uzywajac tych narzedzi?",
      options: {
        less_than_1_hour: "Mniej niz 1 godzine dziennie",
        "1_to_4_hours": "Od 1 do 4 godzin dziennie",
        more_than_4_hours: "Ponad 4 godziny dziennie",
        does_not_apply: "Nie uzywam tego typu narzedzi ani sprzetu"
      }
    },
    "question-36": {
      label: "Jesli pchasz lub ciagniesz przedmioty ciezsze niz 80 funtow / 36 kg, ile czasu spedzasz na przesuwaniu ich po szorstkich powierzchniach, takich jak zwir, plytki lub nierowny grunt, albo po miekkich powierzchniach, takich jak piasek, bloto lub trawa?",
      options: {
        less_than_5_min: "Mniej niz 5 minut dziennie",
        "5_min_to_1_hour": "Od 5 minut do 1 godziny dziennie",
        more_than_1_hour: "Ponad 1 godzine dziennie",
        does_not_apply: "Nie przesuwam tego typu przedmiotow po szorstkich ani miekkich powierzchniach"
      }
    },
    "question-37": {
      label: "Pomysl o typowym dniu pracy albo o czesci dnia, w ktorej wykonujesz oceniane zadanie. Czy kiedykolwiek rozpraszaja Cie halasy, takie jak syreny, glosne rozmowy, ruch uliczny itd.?",
      options: {
        frequently: "Czesto",
        sometimes: "Czasami",
        no: "Nie"
      }
    },
    "question-38": {
      label: "Czy przeszkadza Ci slonce swiecace lub odbijajace sie w oczy, czyli olsnienie?",
      options: {
        frequently: "Czesto",
        sometimes: "Czasami",
        rarely: "Rzadko",
        never: "Nigdy"
      }
    },
    "question-39": {
      label: "Jesli Twoja praca wymaga patrzenia na drobne szczegoly lub czytania drobnego druku, czy mozesz robic to latwo?",
      options: {
        frequently: "Czesto",
        sometimes: "Czasami",
        rarely: "Rzadko",
        never: "Nigdy",
        does_not_apply: "Moja praca tego nie wymaga"
      }
    },
    "question-40": {
      label: "Jesli pracujesz w zimnym srodowisku, czy odczuwasz dyskomfort w ramionach, plecach, nogach, palcach rak i/lub stopach?",
      options: {
        yes: "Tak",
        no: "Nie",
        does_not_apply: "Nie pracuje w zimnym srodowisku"
      }
    },
    "question-41": {
      label: "Biorac pod uwage wymagania pracy, jak czesto prosza Cie o prace w nadgodzinach przez godzine lub dluzej?",
      options: {
        frequently: "Czesto",
        sometimes: "Czasami",
        rarely: "Rzadko",
        never: "Nigdy"
      }
    },
    "question-42": {
      label: "Jak czesto prosza Cie o prace pod presja krotkich terminow?",
      options: {
        frequently: "Czesto",
        sometimes: "Czasami",
        rarely: "Rzadko",
        never: "Nigdy"
      }
    }
  }
};
