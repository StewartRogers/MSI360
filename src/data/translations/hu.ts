import type { QuestionText, Translation } from "../../types";
import { en } from "./en";

const app: Translation["app"] = {
  title: "MSI360",
  disclosure: "Prototípus: válaszai ebben a böngészőben maradnak, hacsak nem választja a jelentés letöltését vagy megosztását.",
  continue_button: "Folytatás",
  back_button: "Vissza",
  processing_button: "Feldolgozás",
  analyzing_button: "Elemzés",
  question_progress: "{current}. kérdés / {total}",
  score_summary_title: "Az Ön MSI-kockázati összefoglalója",
  score_overall_risk: "Általános MSI-kockázat",
  score_download_report: "Jelentés letöltése",
  score_not_available: "N/A",
  score_out_of_4: "{score} / 4",
  score_risk_not_enough: "Nincs elég adat",
  score_risk_low: "Alacsony kockázat",
  score_risk_possible: "Lehetséges kockázat",
  score_risk_likely: "Valószínű kockázat",
  score_risk_known: "Ismert kockázat",
  score_factor_not_enough: "Nincs elég adat a(z) {factor} értelmezéséhez.",
  score_factor_low: "Jelenleg alacsony a(z) {factor} miatti kockázat.",
  score_factor_possible: "Lehetséges kellemetlenségi kockázat a(z) {factor} miatt.",
  score_factor_likely: "Valószínű kellemetlenségi kockázat a(z) {factor} miatt.",
  score_factor_known: "Ismert fájdalom- és/vagy sérüléskockázat.",
  score_psychosocial_note: "A pszichoszociális tényezők negatívan befolyásolták az általános MSI-kockázati pontszámot ({multiplier}).",
  score_subject_contact_stress: "érintkezési nyomás",
  score_subject_force: "erőkifejtés",
  score_subject_awkward_postures: "kényelmetlen testhelyzetek",
  score_subject_repetition: "ismétlődés",
  score_subject_environmental: "környezeti tényezők",
  wrap_email_copy: "E-mail másolat",
  wrap_review_results: "Eredmények áttekintése",
  wrap_submit_report: "Jelentés beküldése",
  email_title: "Jelentés kérése e-mailben",
  email_body: "Adja meg e-mail címét, ha szeretne másolatot kapni erről a jelentésről. Ez akár 15 percet is igénybe vehet. Ha nem látja az e-mailt a beérkezett üzenetek között, ellenőrizze a levélszemét vagy spam mappát.",
  email_next_body: "A végleges jelentést a következő képernyőn fogja látni.",
  email_address_label: "E-mail cím",
  report_ready_title: "A jelentése elkészült",
  report_card_title: "MSI-kockázati jelentés",
  report_date_label: "Dátum",
  report_task_label: "Elemzett munka/feladat:",
  report_overall_score_label: "Összpontszám:",
  report_highest_risk: "Legmagasabb kockázatú kategóriák:",
  report_no_scored_categories: "Még nincs pontozott kockázati kategória",
  report_email_copy_requested: "E-mail másolat kérve ide: {email}.",
  report_download_pdf: "PDF letöltése",
  report_email_report: "Jelentés küldése e-mailben",
  report_done: "Kész",
  submit_title: "Szeretne kitölteni egy újabb ErgoCheck felmérést?",
  submit_option_reuse: "Igen, szeretnék egy újabb jelentést készíteni a korábban megadott információk felhasználásával, amelyeket szükség esetén módosíthatok.",
  submit_option_restart: "Igen, új információkkal szeretném újrakezdeni",
  submit_option_no: "Nem, most nem",
  submit_copy: "Köszönjük, a felmérés befejezéséhez nyomja meg az alábbi gombot.",
  submit_button: "Beküldés",
  complete_title: "Köszönjük, hogy kitöltötte az MSI 360 felmérést",
  complete_body: "Válaszai segítenek az MSI-vel kapcsolatos munkahelyi veszélyek azonosításában, és hozzájárulnak mindenki biztonságosabb munkakörnyezetéhez.",
  complete_next_steps_title: "Következő lépések:",
  complete_next_step_review: "Tekintse át jelentését és az ajánlásokat",
  complete_next_step_share: "Ha megfelelő, ossza meg a megállapításokat a felettesével",
  complete_next_step_visit: "További forrásokért látogasson el a worksafebc.com oldalra",
  complete_start_new: "Új felmérés indítása",
  description_title: "Leírás",
  description_body:
    "A következő kérdések arra a munkára vonatkoznak, amelyet egy átlagos munkanapon végez, vagy arra a konkrét feladatra vagy tevékenységre, amelyet ma értékelni szeretne. A cél az, hogy elmondja az MSI360-nak, milyen műveleteket végez a munkája elvégzéséhez."
};

const sections: Translation["sections"] = {
  intro: "A munkáról",
  symptoms: "Jelenlegi tünetek",
  contact_stress: "Érintkezési nyomás",
  force: "Erőkifejtés",
  awkward_postures: "Kényelmetlen testhelyzetek",
  repetition: "Ismétlődés",
  environmental: "Környezeti tényezők",
  organizational: "Munkaszervezés"
};

const questionLabels: Record<string, string> = {
  "question-1": "Mi az Ön szerepe abban a tevékenységben, amelyet ma értékelni szeretne?",
  "question-2": "Mióta dolgozik ebben a szerepben jelenlegi munkáltatójánál?",
  "question-3": "Melyik feladatot vagy munkatevékenységet szeretné értékelni?",
  "question-4": "Kérjük, jelölje meg a magasságát az alábbi lehetőségek segítségével:",
  "question-5": "Hogyan foglalná össze az értékelt munka vagy feladat típusát?",
  "question-6": "Általában ül vagy áll a munkanap során?",
  "question-7": "Milyen mértékben kéri ki munkáltatója vagy felettese a véleményét az eszközök vagy berendezések megvásárlása előtt?",
  "question-8": "Milyen mértékben kéri ki munkáltatója vagy felettese a véleményét arról, hogyan kellene a munkáját megszervezni és/vagy elvégezni?",
  "question-9": "Az elmúlt 7 napban tapasztalt munkával kapcsolatos fájdalmat vagy kellemetlenséget?",
  "question-10": "Az alábbi táblázat segítségével jelölje meg, mely testrészeken tapasztalt munkával kapcsolatos fájdalmat vagy kellemetlenséget az értékelt munka vagy feladat közben vagy után. Jelezze azt is, hogy a test egyik vagy mindkét oldala érintett volt-e, és hogy a fájdalom 2 vagy több napig tartott-e.",
  "question-11": "Gondoljon egy átlagos munkanapra, vagy arra az időszakra, amikor a konkrét feladatot végzi. Mennyi időt tölt azzal, hogy testének egy részét éles tárgyakra vagy élekre támasztja?",
  "question-12": "Mennyi időt tölt térdelve kemény vagy érdes felületeken személyi védelem, például térdvédő nélkül?",
  "question-13": "Gondoljon azokra az eszközökre vagy tárgyakra, amelyeket egyszerre több mint 30 percig tart. Válassza ki az összes vonatkozó állítást. Az utolsó lehetőség nem választható, ha bármely másik be van jelölve.",
  "question-14": "Használja valamelyik testrészét rögtönzött eszközként a munkája elvégzéséhez?",
  "question-15": "Gondoljon azokra a felületekre, amelyeken tárgyakat tol, húz vagy mozgat a ma értékelt munka során. Válassza ki az összes vonatkozó leírást.",
  "question-16": "Milyen gyakran tol, húz vagy mozgat olyan tárgyakat, amelyeket nehéznek tart, mechanikus segítség nélkül?",
  "question-17": "Milyen nehezek azok az eszközök vagy tárgyak, amelyeket mechanikus segítség nélkül emel fel, visz vagy tart meg?",
  "question-18": "Igényelnek-e az Ön által használt eszközök és/vagy berendezések nagy erőt az elindításhoz?",
  "question-19": "Amikor nehéznek tartott tárgyakat tol és/vagy húz, milyen mértékben kap segítséget?",
  "question-20": "Gondoljon egy átlagos munkanapra vagy a feladat végzésének időszakára. Ülve vagy állva milyen gyakran dolgozik úgy, hogy felsőteste előre, hátra vagy oldalra dől?",
  "question-21": "Munkavégzés közben előfordul, hogy felsőtestét oldalra csavarja anélkül, hogy a lábai helyzetét megváltoztatná?",
  "question-22": "Gondoljon egy átlagos munkanapra vagy a feladat végzésének időszakára. Ülve vagy állva jelölje meg, hol helyezkednek el a kezei a testéhez képest.",
  "question-23": "Előfordul, hogy egyik vagy mindkét karja teljesen előrenyújtva van, amikor a ma értékelt munkát vagy feladatot végzi?",
  "question-24": "Amikor a karja(i) kinyújtva vannak, tart-e valaha eszközt vagy mozgat-e tárgyat?",
  "question-25": "Hogyan helyezkedik el a feje, amikor a ma értékelt munkát vagy feladatot végzi?",
  "question-26": "Általában milyen mértékben hajlítja a csuklóját felfelé és lefelé? Használja az alábbi képet útmutatóként.",
  "question-27": "Milyen mértékben dönti a csuklóját egyik oldalról a másikra?",
  "question-28": "Lehetséges-e minden olyan tárgyat a testéhez közel tartani, amelyet tolnia, húznia, emelnie, használnia stb. kell?",
  "question-29": "Gondoljon egy átlagos munkanapra vagy a feladat végzésének időszakára. Mennyi időt tölt hasonló mozdulatok ismételt végzésével?",
  "question-30": "Mennyi időt tölt azzal, hogy csuklóját 15 foknál nagyobb mértékben felfelé vagy lefelé hajlítja?",
  "question-31": "Mennyi időt tölt azzal, hogy csuklóját 15 foknál nagyobb mértékben balra vagy jobbra dönti?",
  "question-32": "Mennyi időt tölt nagy izomerő kifejtésével, több mint 18 font / 8 kg saját erővel, amikor eszközt használ vagy tárgyat kezel?",
  "question-33": "Amikor egy tárgyat a hüvelykujja és ujjbegyei között fog meg, azt csípőfogásnak nevezzük. Mennyi időt tölt csípőfogással 2 fontnál / 1 kg-nál nehezebb tárgy tartására?",
  "question-34": "Amikor a kezét egy tárgy köré zárja, azt erőfogásnak nevezzük. Mennyi időt tölt erőfogással 10 fontnál / 4,5 kg-nál nehezebb tárgy tartására?",
  "question-35": "Ha olyan eszközöket vagy berendezéseket használ, amelyek testének egy részében vagy egészében rezgést okoznak, mennyi időt tölt ezek használatával?",
  "question-36": "Ha 80 fontnál / 36 kg-nál nehezebb tárgyakat tol vagy húz, mennyi időt tölt ezek mozgatásával érdes vagy puha felületeken?",
  "question-37": "Gondoljon egy átlagos munkanapra vagy a feladat végzésének időszakára. Elvonják-e valaha a figyelmét zajok, például szirénák, hangos beszéd vagy forgalom?",
  "question-38": "Befolyásolja-e Önt a szemébe sütő vagy visszaverődő napfény, vagyis a vakító fény?",
  "question-39": "Ha munkája apró részletek megfigyelését vagy kis betűk olvasását igényli, ezt könnyen meg tudja tenni?",
  "question-40": "Ha hideg környezetben dolgozik, érez-e kellemetlenséget a karjaiban, hátában, lábaiban, ujjaiban és/vagy lábujjaiban?",
  "question-41": "A munkakövetelmények alapján milyen gyakran kérik Önt egy órás vagy hosszabb túlórára?",
  "question-42": "Milyen gyakran kérik Önt szoros határidők melletti munkavégzésre?"
};

const helpText: Record<string, string> = {
  "question-3": "Kérjük, röviden írja le az értékelni kívánt konkrét feladatot vagy tevékenységet; ahol releváns, adjon meg részleteket a testhelyzetről, kellemetlenségről, munkaállomás ergonómiájáról és/vagy a szünetek hosszáról."
};

const optionLabels: Record<string, string> = {
  worker: "Dolgozó", supervisor: "Felettes", manager: "Vezető", employer: "Munkáltató", health_safety_committee: "Egészségvédelmi és biztonsági bizottság tagja",
  less_than_year: "Kevesebb mint egy éve", one_to_five: "1-5 éve", six_to_ten: "6-10 éve", more_than_ten: "Több mint 10 éve",
  under_5_4: "5'4\" alatt (< 1,62 m)", "5_4_to_5_9": "5'4\" - 5'9\" (1,62 m - 1,75 m)", "5_10_to_6_2": "5'10\" - 6'2\" (1,76 m - 1,88 m)", over_6_2: "6'2\" felett (> 1,88 m)", prefer_not_to_say: "Nem szeretnék válaszolni",
  office_clerical: "Irodai vagy adminisztratív, asztalnál végzett munka/feladat", not_desk_based: "Nem irodai asztalnál végzett munka", both_setups: "Mindkettő",
  mostly_sit: "Általában a nap nagy részében ülök", mostly_stand_move: "Általában a nap nagy részében állok vagy mozgok", sit_and_stand: "A nap során ülök és állok is",
  great_extent: "Nagy mértékben", some_extent: "Bizonyos mértékben", rarely: "Ritkán", not_at_all: "Egyáltalán nem",
  yes: "Igen", no: "Nem", one_side: "Fájdalom vagy kellemetlenség a test egyik oldalán", both_sides: "Fájdalom vagy kellemetlenség mindkét oldalon", lasted_two_days: "A fájdalom 2 vagy több napig tartott",
  less_than_30_min: "Kevesebb mint 30 perc naponta", "30_min_to_1_hour": "30 perc - 1 óra naponta", more_than_1_hour: "Több mint 1 óra naponta",
  does_not_apply: "Nem vonatkozik rám", poor_grip_size: "Túl nagy vagy túl kicsi a megfelelő fogáshoz", irregular_unbalanced: "Szabálytalan alakú vagy kiegyensúlyozatlan", sharp_handholds: "Túl éles fogórészekkel rendelkezik", slippery: "Csúszós", none: "A fentiek egyike sem",
  less_than_one_hour: "Igen, kevesebb mint napi 1 órát", more_than_one_hour: "Igen, több mint napi 1 órát",
  smooth: "Sima, például kész felületek", soft: "Puha, például homok, sár, fű", rough: "Érdes, például kavics, csempe, gránit",
  most: "Az idő nagy részében", some: "Az idő egy részében", never: "Soha",
  less_than_5_lb: "Kevesebb mint 5 font / 2 kg", "5_to_18_lb": "5-18 font / 2-8 kg", more_than_18_lb: "Több mint 18 font / 8 kg",
  regularly: "Igen, legalább néhány rendszeresen használt eszköz vagy berendezés erőt igényel", occasionally: "Igen, legalább néhány alkalmanként használt eszköz vagy berendezés erőt igényel",
  do_not_ask: "Nem kérek segítséget", ask_but_no_assistance: "Kérek segítséget, de nem kapok",
  often: "Igen, ezt gyakran teszem munka közben", sometimes: "Igen, ezt néha teszem munka közben",
  frequently: "Gyakran", less_than_5_min: "Kevesebb mint 5 perc naponta", "5_to_25_min": "5-25 perc naponta",
  "30_min_to_2_5_hours": "30 perc - 2,5 óra naponta", "2_5_to_5_5_hours": "2,5-5,5 óra naponta", more_than_5_5_hours: "Több mint 5,5 óra naponta",
  "5_to_10_lb": "5-10 font / 2-4,5 kg", more_than_10_lb: "Több mint 10 font / 4,5 kg",
  neutral: "Gyakran semleges, közvetlenül a vállak között, az áll vízszintes", slight_tilt: "Gyakran kevesebb mint 15 fokkal felfelé vagy lefelé döntött", deep_tilt: "Gyakran több mint 15 fokkal felfelé, lefelé vagy oldalra döntött",
  "0_to_14": "Általában 0-14 fokkal felfelé vagy lefelé", "15_to_30": "Általában 15-30 fokkal", more_than_30: "Általában több mint 30 fokkal",
  "0_to_10": "Általában 0-10 fokkal balra vagy jobbra", "10_to_20": "Általában 10-20 fokkal", more_than_20: "Általában több mint 20 fokkal",
  "30_min_to_2_hours": "30 perc - 2 óra naponta", "2_to_4_hours": "2-4 óra naponta", more_than_4_hours: "Több mint 4 óra naponta",
  less_than_1_hour: "Kevesebb mint 1 óra naponta", "1_to_2_hours": "1-2 óra naponta", more_than_2_hours: "Több mint 2 óra naponta",
  less_than_2_hours: "Kevesebb mint 2 óra naponta", "1_to_4_hours": "1-4 óra naponta", "5_min_to_1_hour": "5 perc - 1 óra naponta"
};

const groupLabels: Record<string, string> = {
  neck: "1. Nyak", shoulders_upper_arms: "2. Vállak vagy felkarok", elbows_forearms: "3. Könyökök vagy alkarok", wrists_hands_fingers: "4. Csuklók, kezek vagy ujjak",
  lower_back: "5. Derék", hips_upper_legs: "6. Csípő vagy comb", knees_lower_legs: "7. Térd vagy lábszár", ankles_feet: "8. Boka vagy lábfej",
  forward_backward: "Több mint 15 fokkal előre vagy hátra dőlök", sideways: "Oldalra dőlök", hands_above_shoulders: "Kezek váll fölött", hands_floor_to_knee: "Kezek a padló és a térd között"
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

export const hu: Translation = { app, sections, questions };
