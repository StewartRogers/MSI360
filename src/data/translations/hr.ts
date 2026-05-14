import type { QuestionText, Translation } from "../../types";
import { en } from "./en";

const app: Translation["app"] = {
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
  description_body:
    "Sljedeća pitanja odnose se na posao koji obavljate tijekom tipičnog radnog dana ili na konkretan zadatak ili aktivnost koju danas želite procijeniti. Namjera je da MSI360-u kažete koje radnje obavljate kako biste dovršili svoj posao."
};

const sections: Translation["sections"] = {
  intro: "O poslu",
  symptoms: "Trenutačni simptomi",
  contact_stress: "Kontaktni pritisak",
  force: "Sila",
  awkward_postures: "Neugodni položaji",
  repetition: "Ponavljanje",
  environmental: "Okolišni čimbenici",
  organizational: "Organizacija rada"
};

const questionLabels: Record<string, string> = {
  "question-1": "Koja je vaša uloga u aktivnosti koju danas želite procijeniti?",
  "question-2": "Koliko dugo ste u toj ulozi kod trenutačnog poslodavca?",
  "question-3": "Koji zadatak ili radnu aktivnost želite procijeniti?",
  "question-4": "Navedite svoju visinu koristeći opcije u nastavku:",
  "question-5": "Kako biste saželi vrstu posla ili zadatka koji se procjenjuje?",
  "question-6": "Sjedite li ili stojite obično tijekom radnog dana?",
  "question-7": "U kojoj mjeri vaš poslodavac ili nadređeni traži vaše mišljenje o alatima ili opremi prije kupnje?",
  "question-8": "U kojoj mjeri vaš poslodavac ili nadređeni traži vaše mišljenje o tome kako vaš rad treba biti organiziran i/ili izveden?",
  "question-9": "Jeste li u posljednjih 7 dana imali bol ili nelagodu povezanu s radom?",
  "question-10": "Pomoću tablice u nastavku navedite dijelove tijela na kojima ste imali bol ili nelagodu povezanu s radom tijekom ili nakon obavljanja posla ili zadatka koji se procjenjuje. Navedite je li bila uključena jedna ili obje strane tijela te je li bol trajala 2 ili više dana.",
  "question-11": "Razmislite o tipičnom radnom danu ili dijelu dana kada obavljate određeni zadatak. Koliko vremena provodite oslanjajući dio tijela na oštre predmete ili rubove?",
  "question-12": "Koliko vremena provodite klečeći na tvrdim ili hrapavim površinama bez osobne zaštite, primjerice bez štitnika za koljena?",
  "question-13": "Razmislite o alatima ili predmetima koje držite dulje od 30 minuta odjednom. Odaberite sve tvrdnje koje se odnose na njih. Posljednja opcija ne može se odabrati ako je označena bilo koja druga.",
  "question-14": "Koristite li neki dio tijela kao privremeni alat za dovršavanje posla?",
  "question-15": "Razmislite o površinama preko kojih gurate, vučete ili pomičete predmete tijekom posla koji danas procjenjujete. Odaberite sve odgovarajuće opise.",
  "question-16": "Koliko često gurate, vučete ili pomičete predmete koje smatrate teškima bez mehaničke pomoći?",
  "question-17": "Koliko su teški alati ili predmeti koje podižete, nosite ili pridržavate bez mehaničke pomoći?",
  "question-18": "Zahtijevaju li neki alati i/ili oprema koje koristite mnogo sile za pokretanje?",
  "question-19": "Kada gurate i/ili vučete predmete koje smatrate teškima, u kojoj mjeri dobivate pomoć?",
  "question-20": "Razmislite o tipičnom radnom danu ili dijelu dana kada obavljate zadatak. Dok sjedite ili stojite, koliko često radite s gornjim dijelom tijela nagnutim naprijed, natrag ili u stranu?",
  "question-21": "Tijekom rada, okrećete li ikada gornji dio tijela u stranu bez promjene položaja stopala?",
  "question-22": "Razmislite o tipičnom radnom danu ili dijelu dana kada obavljate zadatak. Dok sjedite ili stojite, navedite gdje se vaše ruke nalaze u odnosu na tijelo.",
  "question-23": "Jesu li vam jedna ili obje ruke ikada potpuno ispružene ravno naprijed dok obavljate posao ili zadatak koji danas procjenjujete?",
  "question-24": "Kada su vam ruke ispružene, držite li ikada alat ili pomičete predmet?",
  "question-25": "Kako je položena vaša glava kada obavljate posao ili zadatak koji danas procjenjujete?",
  "question-26": "Koliko obično savijate zapešće gore i dolje? Koristite sliku u nastavku kao referencu.",
  "question-27": "Koliko naginjete zapešće s jedne strane na drugu?",
  "question-28": "Je li moguće držati blizu tijela sve predmete koje trebate gurati, vući, podizati, koristiti itd.?",
  "question-29": "Razmislite o tipičnom radnom danu ili dijelu dana kada obavljate zadatak. Koliko vremena provodite izvodeći slične pokrete iznova i iznova?",
  "question-30": "Koliko vremena provodite savijajući zapešće gore ili dolje više od 15 stupnjeva?",
  "question-31": "Koliko vremena provodite naginjući zapešće više od 15 stupnjeva lijevo ili desno?",
  "question-32": "Koliko vremena provodite koristeći snažno mišićno naprezanje, više od 18 funti / 8 kg vlastitom snagom, kada koristite alat ili rukujete predmetom?",
  "question-33": "Kada predmet hvatate između palca i vrhova prstiju, to se zove pincetni hvat. Koliko vremena koristite pincetni hvat za držanje predmeta težeg od 2 funte / 1 kg?",
  "question-34": "Kada rukom obuhvatite predmet, to se zove snažni hvat. Koliko vremena koristite snažni hvat za držanje predmeta težeg od 10 funti / 4,5 kg?",
  "question-35": "Ako koristite alate ili opremu koji uzrokuju vibracije u dijelu ili cijelom tijelu, koliko vremena ih koristite?",
  "question-36": "Ako gurate ili vučete predmete teže od 80 funti / 36 kg, koliko vremena provodite pomičući ih preko hrapavih ili mekih površina?",
  "question-37": "Razmislite o tipičnom radnom danu ili dijelu dana kada obavljate zadatak. Ometaju li vas ikada zvukovi poput sirena, glasnog razgovora, prometa itd.?",
  "question-38": "Utječe li na vas sunčeva svjetlost koja vam sjaji ili se odbija u oči, odnosno odsjaj?",
  "question-39": "Ako vaš posao zahtijeva promatranje sitnih detalja ili čitanje sitnog tiska, možete li to lako učiniti?",
  "question-40": "Ako radite u hladnom okruženju, osjećate li nelagodu u rukama, leđima, nogama, prstima i/ili nožnim prstima?",
  "question-41": "S obzirom na zahtjeve posla, koliko često se od vas traži prekovremeni rad od jednog sata ili dulje?",
  "question-42": "Koliko često se od vas traži rad u kratkim rokovima?"
};

const helpText: Record<string, string> = {
  "question-3": "Navedite kratak opis konkretnog zadatka ili aktivnosti koju želite procijeniti; gdje je primjenjivo, uključite pojedinosti poput položaja tijela, nelagode, ergonomije radne stanice i/ili duljine pauze."
};

const optionLabels: Record<string, string> = {
  worker: "Radnik", supervisor: "Nadređeni", manager: "Voditelj", employer: "Poslodavac", health_safety_committee: "Član odbora za zdravlje i sigurnost",
  less_than_year: "Manje od godinu dana", one_to_five: "1 do 5 godina", six_to_ten: "6 do 10 godina", more_than_ten: "Više od 10 godina",
  under_5_4: "Manje od 5'4\" (< 1,62 m)", "5_4_to_5_9": "5'4\" - 5'9\" (1,62 m - 1,75 m)", "5_10_to_6_2": "5'10\" - 6'2\" (1,76 m - 1,88 m)", over_6_2: "Više od 6'2\" (> 1,88 m)", prefer_not_to_say: "Radije ne bih rekao/la",
  office_clerical: "Uredski ili administrativni posao/zadatak za stolom", not_desk_based: "Nije posao za stolom u uredu", both_setups: "Obje postavke",
  mostly_sit: "Obično sjedim veći dio dana", mostly_stand_move: "Obično stojim ili se krećem veći dio dana", sit_and_stand: "Tijekom dana sjedim i stojim",
  great_extent: "U velikoj mjeri", some_extent: "U određenoj mjeri", rarely: "Rijetko", not_at_all: "Nimalo",
  yes: "Da", no: "Ne", one_side: "Bol ili nelagoda na jednoj strani tijela", both_sides: "Bol ili nelagoda na obje strane", lasted_two_days: "Bol je trajala 2 ili više dana",
  less_than_30_min: "Manje od 30 minuta dnevno", "30_min_to_1_hour": "30 minuta do 1 sat dnevno", more_than_1_hour: "Više od 1 sata dnevno",
  does_not_apply: "Ne odnosi se", poor_grip_size: "Preveliki ili premali za pravilan hvat", irregular_unbalanced: "Nepravilnog oblika ili neuravnoteženi", sharp_handholds: "Imaju preoštre dijelove za držanje", slippery: "Skliski", none: "Ništa od navedenog",
  less_than_one_hour: "Da, manje od 1 sata dnevno", more_than_one_hour: "Da, više od 1 sata dnevno",
  smooth: "Glatke, npr. obrađene površine", soft: "Meke, npr. pijesak, blato, trava", rough: "Hrapave, npr. šljunak, pločice, granit",
  most: "Većinu vremena", some: "Dio vremena", never: "Nikada",
  less_than_5_lb: "Manje od 5 lb / 2 kg", "5_to_18_lb": "5 do 18 lb / 2 do 8 kg", more_than_18_lb: "Više od 18 lb / 8 kg",
  regularly: "Da, barem neki alati ili oprema koje redovito koristim zahtijevaju silu", occasionally: "Da, barem neki alati ili oprema koje povremeno koristim zahtijevaju silu",
  do_not_ask: "Ne tražim pomoć", ask_but_no_assistance: "Tražim pomoć, ali je ne dobijem",
  often: "Da, to često radim tijekom posla", sometimes: "Da, to ponekad radim tijekom posla",
  frequently: "Često", less_than_5_min: "Manje od 5 minuta dnevno", "5_to_25_min": "5 do 25 minuta dnevno",
  "30_min_to_2_5_hours": "30 minuta do 2,5 sata dnevno", "2_5_to_5_5_hours": "2,5 do 5,5 sati dnevno", more_than_5_5_hours: "Više od 5,5 sati dnevno",
  "5_to_10_lb": "5 do 10 lb / 2 do 4,5 kg", more_than_10_lb: "Više od 10 lb / 4,5 kg",
  neutral: "Često neutralna, izravno između ramena, brada ravna", slight_tilt: "Često nagnuta gore ili dolje manje od 15 stupnjeva", deep_tilt: "Često nagnuta gore, dolje ili u stranu više od 15 stupnjeva",
  "0_to_14": "Obično 0 do 14 stupnjeva gore ili dolje", "15_to_30": "Obično 15 do 30 stupnjeva", more_than_30: "Obično više od 30 stupnjeva",
  "0_to_10": "Obično 0 do 10 stupnjeva lijevo ili desno", "10_to_20": "Obično 10 do 20 stupnjeva", more_than_20: "Obično više od 20 stupnjeva",
  "30_min_to_2_hours": "30 minuta do 2 sata dnevno", "2_to_4_hours": "2 do 4 sata dnevno", more_than_4_hours: "Više od 4 sata dnevno",
  less_than_1_hour: "Manje od 1 sata dnevno", "1_to_2_hours": "1 do 2 sata dnevno", more_than_2_hours: "Više od 2 sata dnevno",
  less_than_2_hours: "Manje od 2 sata dnevno", "1_to_4_hours": "1 do 4 sata dnevno", "5_min_to_1_hour": "5 minuta do 1 sat dnevno"
};

const groupLabels: Record<string, string> = {
  neck: "1. Vrat", shoulders_upper_arms: "2. Ramena ili nadlaktice", elbows_forearms: "3. Laktovi ili podlaktice", wrists_hands_fingers: "4. Zapešća, šake ili prsti",
  lower_back: "5. Donji dio leđa", hips_upper_legs: "6. Kukovi ili bedra", knees_lower_legs: "7. Koljena ili potkoljenice", ankles_feet: "8. Gležnjevi ili stopala",
  forward_backward: "Naginjem se naprijed ili natrag više od 15 stupnjeva", sideways: "Naginjem se u stranu", hands_above_shoulders: "Ruke iznad ramena", hands_floor_to_knee: "Ruke između poda i koljena"
};

function translateOptions(options?: Record<string, unknown>) {
  if (!options) return undefined;
  return Object.fromEntries(Object.keys(options).map((id) => [id, optionLabels[id] ?? id]));
}

function translateGroups(groups?: QuestionText["groups"]) {
  if (!groups) return undefined;
  return Object.fromEntries(
    Object.entries(groups).map(([groupId, group]) => [
      groupId,
      { label: groupLabels[groupId] ?? group.label, options: Object.fromEntries(Object.keys(group.options).map((optionId) => [optionId, optionLabels[optionId] ?? optionId])) }
    ])
  );
}

const questions = Object.fromEntries(
  Object.entries(en.questions).map(([id, question]) => [
    id,
    {
      label: questionLabels[id] ?? question.label,
      ...(helpText[id] ? { help_text: helpText[id] } : {}),
      ...(question.options ? { options: translateOptions(question.options) } : {}),
      ...(question.groups ? { groups: translateGroups(question.groups) } : {})
    }
  ])
) as Translation["questions"];

export const hr: Translation = { app, sections, questions };
