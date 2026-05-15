import type { QuestionText, Translation } from "../../types";
import { en } from "./en";

const app: Translation["app"] = {
  title: "MSI360",
  disclosure: "Prototyp: vaše odpovědi zůstanou v tomto prohlížeči, pokud se nerozhodnete zprávu stáhnout nebo sdílet.",
  continue_button: "Pokračovat",
  back_button: "Zpět",
  processing_button: "Zpracování",
  analyzing_button: "Analýza",
  question_progress: "Otázka {current} z {total}",
  score_summary_title: "Souhrn vašeho rizika MSI",
  score_overall_risk: "Celkové riziko MSI",
  score_download_report: "Stáhnout zprávu",
  score_not_available: "N/A",
  score_out_of_4: "{score} ze 4",
  score_risk_not_enough: "Nedostatek údajů",
  score_risk_low: "Nízké riziko",
  score_risk_possible: "Možné riziko",
  score_risk_likely: "Pravděpodobné riziko",
  score_risk_known: "Známé riziko",
  score_factor_not_enough: "Nedostatek údajů k interpretaci {factor}.",
  score_factor_low: "V současnosti nízké riziko spojené s {factor}.",
  score_factor_possible: "Možné riziko nepohodlí způsobené {factor}.",
  score_factor_likely: "Pravděpodobné riziko nepohodlí způsobené {factor}.",
  score_factor_known: "Známé riziko bolesti a/nebo zranění.",
  score_psychosocial_note: "Psychosociální faktory negativně ovlivnily celkové skóre rizika MSI ({multiplier}).",
  score_subject_contact_stress: "kontaktní tlak",
  score_subject_force: "síla",
  score_subject_awkward_postures: "nepohodlné polohy",
  score_subject_repetition: "opakování",
  score_subject_environmental: "environmentální faktory",
  wrap_email_copy: "Kopie e-mailem",
  wrap_review_results: "Zkontrolovat výsledky",
  wrap_submit_report: "Odeslat zprávu",
  email_title: "Získejte zprávu e-mailem",
  email_body: "Zadejte svou e-mailovou adresu, pokud chcete obdržet kopii této zprávy. Může to trvat až 15 minut. Pokud e-mail nevidíte v doručené poště, zkontrolujte složku nevyžádané pošty nebo spamu.",
  email_next_body: "Konečnou zprávu uvidíte na další obrazovce.",
  email_address_label: "E-mailová adresa",
  report_ready_title: "Vaše zpráva je připravena",
  report_card_title: "Zpráva o riziku MSI",
  report_date_label: "Datum",
  report_task_label: "Analyzovaná práce/úkol:",
  report_overall_score_label: "Celkové skóre:",
  report_highest_risk: "Kategorie s nejvyšším rizikem:",
  report_no_scored_categories: "Zatím žádné ohodnocené kategorie rizika",
  report_email_copy_requested: "Byla vyžádána kopie e-mailem pro {email}.",
  report_download_pdf: "Stáhnout PDF",
  report_email_report: "Poslat zprávu e-mailem",
  report_done: "Hotovo",
  submit_title: "Chcete dokončit další hodnocení ErgoCheck?",
  submit_option_reuse: "Ano, chci dokončit další zprávu se stejnými původními informacemi a podle potřeby je upravit.",
  submit_option_restart: "Ano, chci začít znovu s novými informacemi",
  submit_option_no: "Ne, teď ne",
  submit_copy: "Děkujeme, stiskněte níže uvedené tlačítko pro dokončení dotazníku.",
  submit_button: "Odeslat",
  complete_title: "Děkujeme za dokončení dotazníku MSI 360",
  complete_body: "Vaše odpovědi pomáhají identifikovat rizika související s MSI na pracovišti a přispívají k bezpečnějšímu pracovnímu prostředí pro všechny.",
  complete_next_steps_title: "Další kroky:",
  complete_next_step_review: "Zkontrolujte svou zprávu a doporučení",
  complete_next_step_share: "Pokud je to vhodné, sdílejte zjištění se svým nadřízeným",
  complete_next_step_visit: "Navštivte worksafebc.com pro další zdroje",
  complete_start_new: "Začít nové hodnocení",
  description_title: "Popis",
  description_body:
    "Následující otázky se týkají práce, kterou vykonáváte během běžného pracovního dne, nebo konkrétního úkolu či činnosti, které chcete dnes posoudit. Cílem je sdělit MSI360, jaké činnosti provádíte, abyste svou práci dokončili."
};

const sections: Translation["sections"] = {
  intro: "O práci",
  symptoms: "Současné příznaky",
  contact_stress: "Kontaktní tlak",
  force: "Síla",
  awkward_postures: "Nepohodlné polohy",
  repetition: "Opakování",
  environmental: "Environmentální faktory",
  organizational: "Organizace práce"
};

const questionLabels: Record<string, string> = {
  "question-1": "Jaká je vaše role v činnosti, kterou chcete dnes posoudit?",
  "question-2": "Jak dlouho jste v této roli u současného zaměstnavatele?",
  "question-3": "Jaký úkol nebo pracovní činnost chcete posoudit?",
  "question-4": "Uveďte prosím svou výšku pomocí níže uvedených možností:",
  "question-5": "Jak byste shrnuli typ práce nebo úkolu, který je posuzován?",
  "question-6": "Během pracovního dne obvykle sedíte nebo stojíte?",
  "question-7": "Do jaké míry se váš zaměstnavatel nebo nadřízený ptá na váš názor na nástroje nebo vybavení před jejich nákupem?",
  "question-8": "Do jaké míry se váš zaměstnavatel nebo nadřízený ptá na váš názor na to, jak by měla být vaše práce organizována a/nebo vykonávána?",
  "question-9": "Za posledních 7 dní jste pociťovali bolest nebo nepohodlí související s prací?",
  "question-10": "Pomocí níže uvedené tabulky uveďte konkrétní části těla, kde jste pociťovali bolest nebo nepohodlí související s prací během nebo po provádění posuzované práce či úkolu. Uveďte také, zda byla zasažena jedna nebo obě strany těla a zda bolest trvala 2 nebo více dní.",
  "question-11": "Přemýšlejte o běžném pracovním dni nebo části dne, kdy vykonáváte konkrétní úkol. Kolik času trávíte opíráním nebo pokládáním části těla na ostré předměty nebo hrany?",
  "question-12": "Kolik času trávíte klečením na tvrdých nebo drsných površích bez osobní ochrany, například bez chráničů kolen?",
  "question-13": "Přemýšlejte o nástrojích nebo předmětech, které držíte déle než 30 minut v kuse. Vyberte všechna tvrzení, která platí. Poslední možnost nelze vybrat, pokud je zaškrtnuta jiná možnost.",
  "question-14": "Používáte některou část těla jako provizorní nástroj k dokončení práce?",
  "question-15": "Přemýšlejte o površích, po kterých při dnes posuzované práci tlačíte, táhnete nebo přesouváte předměty. Vyberte všechny odpovídající popisy.",
  "question-16": "Jak často tlačíte, táhnete nebo přesouváte předměty, které považujete za těžké, bez mechanické pomoci?",
  "question-17": "Jak těžké jsou nástroje nebo předměty, které zvedáte, nosíte nebo podpíráte bez mechanické pomoci?",
  "question-18": "Vyžadují některé nástroje a/nebo vybavení, které používáte, velkou sílu ke spuštění?",
  "question-19": "Když tlačíte a/nebo táhnete předměty, které považujete za těžké, do jaké míry dostáváte pomoc?",
  "question-20": "Přemýšlejte o běžném pracovním dni nebo části dne, kdy vykonáváte úkol. Když sedíte nebo stojíte, jak často pracujete s horní částí těla nakloněnou dopředu, dozadu nebo do strany?",
  "question-21": "Při pracovních činnostech někdy otáčíte horní část těla do strany, aniž byste změnili polohu chodidel?",
  "question-22": "Přemýšlejte o běžném pracovním dni. Když sedíte nebo stojíte, uveďte, kde se vaše ruce nacházejí ve vztahu k tělu.",
  "question-23": "Jsou jedna nebo obě vaše paže někdy plně natažené přímo dopředu, když vykonáváte práci nebo úkol, který dnes posuzujete?",
  "question-24": "Když máte paže natažené, držíte někdy nástroj nebo přesouváte předmět?",
  "question-25": "Jak je umístěna vaše hlava, když vykonáváte práci nebo úkol, který dnes posuzujete?",
  "question-26": "Jak moc obvykle ohýbáte zápěstí nahoru a dolů? Použijte obrázek níže jako vodítko.",
  "question-27": "Jak moc nakláníte zápěstí ze strany na stranu?",
  "question-28": "Je možné držet blízko těla všechny předměty, které potřebujete tlačit, táhnout, zvedat, používat atd.?",
  "question-29": "Přemýšlejte o běžném pracovním dni nebo části dne, kdy vykonáváte úkol. Kolik času trávíte opakováním podobných pohybů stále dokola?",
  "question-30": "Kolik času trávíte ohýbáním zápěstí nahoru nebo dolů o více než 15 stupňů?",
  "question-31": "Kolik času trávíte nakláněním zápěstí o více než 15 stupňů doleva nebo doprava?",
  "question-32": "Kolik času trávíte silným svalovým úsilím, více než 18 liber / 8 kg vlastní silou, při používání nástroje nebo manipulaci s předmětem?",
  "question-33": "Když uchopíte předmět mezi palec a konečky prstů, nazývá se to špetkový úchop. Kolik času používáte špetkový úchop k držení předmětu těžšího než 2 libry / 1 kg?",
  "question-34": "Když obemknete rukou předmět, nazývá se to silový úchop. Kolik času používáte silový úchop k držení předmětu těžšího než 10 liber / 4,5 kg?",
  "question-35": "Pokud používáte nástroje nebo vybavení, které způsobují vibrace části nebo celého těla, kolik času je používáte?",
  "question-36": "Pokud tlačíte nebo táhnete předměty těžší než 80 liber / 36 kg, kolik času je přesouváte po drsných nebo měkkých površích?",
  "question-37": "Přemýšlejte o běžném pracovním dni. Rozptylují vás někdy zvuky, jako jsou sirény, hlasitý hovor, doprava apod.?",
  "question-38": "Ovlivňuje vás slunce svítící nebo odrážející se do očí, tedy oslnění?",
  "question-39": "Pokud vaše práce vyžaduje sledování jemných detailů nebo čtení malého písma, zvládáte to snadno?",
  "question-40": "Pokud pracujete v chladném prostředí, cítíte nepohodlí v pažích, zádech, nohách, prstech rukou a/nebo nohou?",
  "question-41": "S ohledem na požadavky práce, jak často jste požádáni o práci přesčas po dobu jedné hodiny nebo déle?",
  "question-42": "Jak často jste požádáni o práci v krátkých termínech?"
};

const helpText: Record<string, string> = {
  "question-3": "Uveďte prosím stručný popis konkrétního úkolu nebo činnosti, kterou chcete posoudit; kde je to vhodné, zahrňte podrobnosti jako poloha těla, nepohodlí, ergonomie pracoviště a/nebo délka přestávek."
};

const optionLabels: Record<string, string> = {
  worker: "Pracovník", supervisor: "Nadřízený", manager: "Manažer", employer: "Zaměstnavatel", health_safety_committee: "Člen výboru pro zdraví a bezpečnost",
  less_than_year: "Méně než rok", one_to_five: "1 až 5 let", six_to_ten: "6 až 10 let", more_than_ten: "Více než 10 let",
  under_5_4: "Méně než 5'4\" (< 1,62 m)", "5_4_to_5_9": "5'4\" - 5'9\" (1,62 m - 1,75 m)", "5_10_to_6_2": "5'10\" - 6'2\" (1,76 m - 1,88 m)", over_6_2: "Více než 6'2\" (> 1,88 m)", prefer_not_to_say: "Raději neuvádět",
  office_clerical: "Kancelářská nebo administrativní práce/úkol u stolu", not_desk_based: "Není založeno na práci u stolu v kanceláři", both_setups: "Obě možnosti",
  mostly_sit: "Obvykle většinu dne sedím", mostly_stand_move: "Obvykle většinu dne stojím nebo se pohybuji", sit_and_stand: "Během dne sedím i stojím",
  great_extent: "Do velké míry", some_extent: "Do určité míry", rarely: "Zřídka", not_at_all: "Vůbec ne",
  yes: "Ano", no: "Ne", one_side: "Bolest nebo nepohodlí na jedné straně těla", both_sides: "Bolest nebo nepohodlí na obou stranách", lasted_two_days: "Bolest trvala 2 nebo více dní",
  less_than_30_min: "Méně než 30 minut denně", "30_min_to_1_hour": "30 minut až 1 hodina denně", more_than_1_hour: "Více než 1 hodina denně",
  does_not_apply: "Nevztahuje se", poor_grip_size: "Příliš velké nebo malé pro správný úchop", irregular_unbalanced: "Nepravidelného tvaru nebo nevyvážené", sharp_handholds: "Mají příliš ostrá místa pro uchopení", slippery: "Kluzké", none: "Nic z výše uvedeného",
  less_than_one_hour: "Ano, méně než 1 hodinu denně", more_than_one_hour: "Ano, více než 1 hodinu denně",
  smooth: "Hladké, např. dokončené povrchy", soft: "Měkké, např. písek, bláto, tráva", rough: "Drsné, např. štěrk, dlaždice, žula",
  most: "Většinu času", some: "Část času", never: "Nikdy",
  less_than_5_lb: "Méně než 5 lb / 2 kg", "5_to_18_lb": "5 až 18 lb / 2 až 8 kg", more_than_18_lb: "Více než 18 lb / 8 kg",
  regularly: "Ano, alespoň některé nástroje nebo vybavení, které používám pravidelně, vyžadují sílu", occasionally: "Ano, alespoň některé nástroje nebo vybavení, které používám občas, vyžadují sílu",
  do_not_ask: "Nežádám o pomoc", ask_but_no_assistance: "Žádám o pomoc, ale nedostávám ji",
  often: "Ano, dělám to při práci často", sometimes: "Ano, dělám to při práci někdy",
  frequently: "Často", less_than_5_min: "Méně než 5 minut denně", "5_to_25_min": "5 až 25 minut denně",
  "30_min_to_2_5_hours": "30 minut až 2,5 hodiny denně", "2_5_to_5_5_hours": "2,5 až 5,5 hodiny denně", more_than_5_5_hours: "Více než 5,5 hodiny denně",
  "5_to_10_lb": "5 až 10 lb / 2 až 4,5 kg", more_than_10_lb: "Více než 10 lb / 4,5 kg",
  neutral: "Často neutrální, přímo mezi rameny, brada vodorovně", slight_tilt: "Často nakloněná nahoru nebo dolů méně než 15 stupňů", deep_tilt: "Často nakloněná nahoru, dolů nebo do strany více než 15 stupňů",
  "0_to_14": "Obvykle 0 až 14 stupňů nahoru nebo dolů", "15_to_30": "Obvykle 15 až 30 stupňů", more_than_30: "Obvykle více než 30 stupňů",
  "0_to_10": "Obvykle 0 až 10 stupňů doleva nebo doprava", "10_to_20": "Obvykle 10 až 20 stupňů", more_than_20: "Obvykle více než 20 stupňů",
  "30_min_to_2_hours": "30 minut až 2 hodiny denně", "2_to_4_hours": "2 až 4 hodiny denně", more_than_4_hours: "Více než 4 hodiny denně",
  less_than_1_hour: "Méně než 1 hodina denně", "1_to_2_hours": "1 až 2 hodiny denně", more_than_2_hours: "Více než 2 hodiny denně",
  less_than_2_hours: "Méně než 2 hodiny denně", "1_to_4_hours": "1 až 4 hodiny denně", "5_min_to_1_hour": "5 minut až 1 hodina denně"
};

const groupLabels: Record<string, string> = {
  neck: "1. Krk", shoulders_upper_arms: "2. Ramena nebo horní části paží", elbows_forearms: "3. Lokty nebo předloktí", wrists_hands_fingers: "4. Zápěstí, ruce nebo prsty",
  lower_back: "5. Dolní část zad", hips_upper_legs: "6. Kyčle nebo stehna", knees_lower_legs: "7. Kolena nebo lýtka", ankles_feet: "8. Kotníky nebo chodidla",
  forward_backward: "Nakláním se dopředu nebo dozadu více než 15 stupňů", sideways: "Nakláním se do strany", hands_above_shoulders: "Ruce nad rameny", hands_floor_to_knee: "Ruce mezi podlahou a kolenem"
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

export const cs: Translation = { app, sections, questions };
