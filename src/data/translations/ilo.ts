import type { QuestionText, Translation } from "../../types";
import { en } from "./en";

const app: Translation["app"] = {
  title: "MSI360",
  disclosure: "Prototype: dagiti sungbatmo ket agtalinaed iti daytoy a browser malaksid no pilienmo nga i-download wenno ibingay ti report.",
  continue_button: "Itultuloy",
  back_button: "Agsubli",
  processing_button: "Maproseso",
  analyzing_button: "Maanalisar",
  question_progress: "Saludsod {current} iti {total}",
  score_summary_title: "Pakabuklan ti MSI risk-mo",
  score_overall_risk: "Pakabuklan a MSI Risk",
  score_download_report: "I-download ti Report",
  score_not_available: "N/A",
  score_out_of_4: "{score} iti 4",
  score_risk_not_enough: "Awan pay umdas a datos",
  score_risk_low: "Nababa a risk",
  score_risk_possible: "Mabalin a risk",
  score_risk_likely: "Nadakdakkel ti posibilidad a risk",
  score_risk_known: "Ammo a risk",
  score_factor_not_enough: "Awan pay umdas a datos tapno maipatarus ti {factor}.",
  score_factor_low: "Iti agdama, nababa ti risk a mainaig iti {factor}.",
  score_factor_possible: "Mabalin a risk ti discomfort manipud iti {factor}.",
  score_factor_likely: "Nadakdakkel ti posibilidad ti discomfort manipud iti {factor}.",
  score_factor_known: "Ammo a risk ti sakit ken/wenno pannakadangran.",
  score_psychosocial_note: "Dagiti psychosocial factors ket negatibo nga nakaapekto iti pakabuklan a MSI risk score ({multiplier}).",
  score_subject_contact_stress: "contact stress",
  score_subject_force: "puersa",
  score_subject_awkward_postures: "narigat a posisyon ti bagi",
  score_subject_repetition: "panagulit-ulit",
  score_subject_environmental: "environmental factors",
  wrap_email_copy: "Kopia babaen ti Email",
  wrap_review_results: "Kitaen manen dagiti Resulta",
  wrap_submit_report: "Isubmitir ti Report",
  email_title: "Alaen ti Report-mo babaen ti Email",
  email_body: "Ikabil ti email address-mo no kayatmo ti makaawat iti kopia daytoy a report. Mabalin nga agbayag agingga 15 minutos. Kitaem ti junk wenno spam folder no saanmo a makita iti inbox.",
  email_next_body: "Makitatom ti final report iti sumaruno a screen.",
  email_address_label: "Email address",
  report_ready_title: "Nakasagana ti Report-mo",
  report_card_title: "MSI Risk Report",
  report_date_label: "Petsa",
  report_task_label: "Na-analisar a trabaho/aramiden:",
  report_overall_score_label: "Pakabuklan a score:",
  report_highest_risk: "Kategoria nga addaan kangatuan a risk:",
  report_no_scored_categories: "Awan pay na-score a risk category",
  report_email_copy_requested: "Na-request ti email copy para iti {email}.",
  report_download_pdf: "I-download ti PDF",
  report_email_report: "I-email ti Report",
  report_done: "Nalpas",
  submit_title: "Kayatmo kadi ti mangkompleto iti sabali pay nga ErgoCheck assessment?",
  submit_option_reuse: "Wen, ken kayatko ti mangkompleto iti sabali pay a report babaen ti isu met laeng nga impormasion nga intedko idi rugi, a mabalin kong i-edit no kasapulan.",
  submit_option_restart: "Wen, kayatko ti mangrugi manen nga addaan baro nga impormasion",
  submit_option_no: "Saan, saan pay ita",
  submit_copy: "Agyaman kami, pindutem ti button iti baba tapno malpas ti survey.",
  submit_button: "Isubmitir",
  complete_title: "Agyaman kami iti panangkompleto iti MSI 360 Survey",
  complete_body: "Dagiti sungbatmo ket tumulong a mangilasin kadagiti MSI-related hazards iti pagtrabahoam ken tumulong iti nasalsalun-at ken natalged a lugar ti trabaho para kadagiti amin.",
  complete_next_steps_title: "Sumaruno a dagiti aramiden:",
  complete_next_step_review: "Kitaem manen ti report ken rekomendasion",
  complete_next_step_share: "Ibingay dagiti nakita iti supervisor-mo no maitutop",
  complete_next_step_visit: "Bisitaen ti worksafebc.com para kadagiti dadduma pay a resources",
  complete_start_new: "Mangrugi iti Baro nga Assessment",
  description_title: "Deskripsion",
  description_body:
    "Dagiti sumaruno a saludsod ket maipapan iti trabahom iti gagangay nga aldaw ti trabaho wenno iti espesipiko nga aramiden wenno aktibidad a kayatmo nga i-assess ita nga aldaw. Ti panggep ket ibagam iti MSI360 dagiti aksion nga ar-aramidem tapno malpas ti trabahom."
};

const sections: Translation["sections"] = {
  intro: "Maipapan iti trabaho",
  symptoms: "Agdama a sintomas",
  contact_stress: "Contact stress",
  force: "Puersa",
  awkward_postures: "Narigat a posisyon ti bagi",
  repetition: "Panagulit-ulit",
  environmental: "Environmental factors",
  organizational: "Panakaorganisar ti trabaho"
};

const questionLabels: Record<string, string> = {
  "question-1": "Ania ti papelmo iti aktibidad a kayatmo nga i-assess ita nga aldaw?",
  "question-2": "Kasano kabayagkan iti daytoy a papel iti agdama nga employer-mo?",
  "question-3": "Ania ti aramiden wenno aktibidad iti trabaho a kayatmo nga i-assess?",
  "question-4": "Ipakitam ti height-mo babaen kadagiti opsion iti baba:",
  "question-5": "Kasano nga ikabuklam ti klase ti trabaho wenno aramiden a ma-assess?",
  "question-6": "Gagangay kadi nga agtugawka wenno agtakderka iti aldaw ti trabaho?",
  "question-7": "Kasano ti kaadu ti panagkiddaw ti employer wenno supervisor iti feedback-mo maipapan kadagiti tools wenno equipment sakbay a gatangen?",
  "question-8": "Kasano ti kaadu ti panagkiddaw ti employer wenno supervisor iti feedback-mo no kasano a maorganisar ken/wenno maaramid ti trabahom?",
  "question-9": "Iti napalabas a 7 nga aldaw, nakaeksperiensia kadi iti sakit wenno discomfort a mainaig iti trabaho?",
  "question-10": "Babaen ti table iti baba, ipakitam dagiti paset ti bagi a nakaeksperiensia iti sakit wenno discomfort a mainaig iti trabaho bayat wenno kalpasan ti panagaramid iti trabaho wenno aramiden a ma-assess. Ipakitam no maysa wenno dua a sikigan ti bagi ti naapektaran, ken no ti sakit ket nagbayag iti 2 wenno ad-adu pay nga aldaw.",
  "question-11": "Panunotem ti gagangay nga aldaw ti trabaho wenno ti paset ti aldaw a pagaramidam iti dayta nga aramiden. Mano a tiempo ti panagsanggir wenno panagipaidda iti paset ti bagim kadagiti natadem a banag wenno edges?",
  "question-12": "Mano a tiempo ti panagparintumengmo iti natangken wenno narugit a surface nga awan personal protection kas iti knee pads?",
  "question-13": "Panunotem dagiti tools wenno banag a pagiggemmo iti nasurok 30 minutos iti maysa a daras. Pilien dagiti amin a statement a maitunos. Ti maudi nga opsion ket saan a mapili no adda sabali a napili.",
  "question-14": "Usarem kadi ti aniaman a paset ti bagim kas temporaryo a tool tapno malpas ti trabahom?",
  "question-15": "Panunotem dagiti surfaces a pakaitulodam, pakaiguyodam, wenno pakaiyalisam kadagiti banag bayat ti trabaho a ma-assess ita nga aldaw. Pilien dagiti amin a maitutop a deskripsion.",
  "question-16": "Kasano kasansan a mangitulod, mangguyod, wenno mangiyaliska kadagiti banag a panunotem a nadagsen nga awan mechanical aid?",
  "question-17": "Kasano kadagsen dagiti tools wenno banag a pagangatmo, ibaklaymo, wenno suportaram nga awan mechanical assistance?",
  "question-18": "Adda kadi kadagiti tools ken/wenno equipment nga usarem ti kasapulan ti adu a puersa tapno mangrugi?",
  "question-19": "No mangitulod ken/wenno mangguyodka kadagiti banag a panunotem a nadagsen, kasano ti kaadu ti tulong a maawatmo?",
  "question-20": "Panunotem ti gagangay nga aldaw ti trabaho wenno paset ti aldaw a pagaramidam iti aramiden. No agtugaw wenno agtakder, kasano kasansan a ti ngato a paset ti bagim ket nakadumog paabante, paatras, wenno pasideg?",
  "question-21": "Bayat ti panagtrabahom, mangilukotka kadi iti ngato a paset ti bagim iti maysa a sikigan nga saan a baliwan ti posision dagiti sakam?",
  "question-22": "Panunotem ti gagangay nga aldaw ti trabaho. No agtugaw wenno agtakder, ipakitam no sadino ti lokasion dagiti imam no ikumpara iti bagim.",
  "question-23": "Adda kadi tiempo a maysa wenno dua a takkiagmo ket naan-anay a naiyunnat nga diretso paabante bayat ti trabaho a ma-assess ita?",
  "question-24": "No naiyunnat dagiti takkiagmo, agiggemka kadi iti tool wenno mangiyaliska iti banag?",
  "question-25": "Kasano ti posision ti ulom bayat ti panagaramid iti trabaho a ma-assess ita?",
  "question-26": "Kasano kaadu a gagangay a ilukotmo ti wrist-mo nga agpangato ken agpababa? Usarem ti ladawan iti baba kas pagbasaran.",
  "question-27": "Kasano kaadu nga i-angle-mo ti wrist-mo manipud iti maysa a sikigan agingga iti sabali?",
  "question-28": "Mabalin kadi a pagtalinaedem aasideg iti bagim amin a banag a kasapulan nga itulod, guyoden, angaten, usaren, ken dadduma pay?",
  "question-29": "Panunotem ti gagangay nga aldaw ti trabaho. Mano a tiempo ti panagaramidmo iti agpada a garaw nga paulit-ulit?",
  "question-30": "Mano a tiempo ti panangilukotmo iti wrist-mo nga agpangato wenno agpababa a nasurok 15 degrees?",
  "question-31": "Mano a tiempo ti panang-angle-mo iti wrist-mo a nasurok 15 degrees paigid wenno paannigid?",
  "question-32": "Mano a tiempo ti panagusarmo iti napigsa a muscular exertion, nasurok 18 pounds / 8 kg babaen iti bukodmo a pigsa, no agusar iti tool wenno mangiggem iti banag?",
  "question-33": "No iggemmo ti banag iti nagbaetan ti thumb ken fingertips, maawagan dayta a pinch grip. Mano a tiempo ti panagusarmo iti pinch grip tapno iggem ti banag a nadagsen ngem 2 pounds / 1 kg?",
  "question-34": "No ikabilmo ti imam iti aglawlaw ti banag tapno iggem, maawagan dayta a power grip. Mano a tiempo ti panagusarmo iti power grip tapno iggem ti banag a nadagsen ngem 10 pounds / 4.5 kg?",
  "question-35": "No agusarka kadagiti tools wenno equipment a mangpataud iti vibrations iti paset wenno amin a bagim, mano a tiempo ti panagusarmo kadagitoy?",
  "question-36": "No mangitulod wenno mangguyodka kadagiti banag a nadagsen ngem 80 pounds / 36 kg, mano a tiempo ti panangiyalis kadagitoy iti narugit wenno nalukneng a surfaces?",
  "question-37": "Panunotem ti gagangay nga aldaw ti trabaho. Maistorboka kadi kadagiti ruido kas siren, napigsa a panagsao, traffic, ken dadduma pay?",
  "question-38": "Maapektaranka kadi iti init ti aldaw a sumilsilnag wenno ag-reflect iti matam, wenno glare?",
  "question-39": "No kasapulan iti trabahom ti kumita kadagiti nainget a detalye wenno agbasa iti babassit a letra, maaramidmo kadi daytoy a nalaka?",
  "question-40": "No agtrabahoka iti nalamiis a lugar, makariknaka kadi iti discomfort iti takiag, likod, saka, ramay, ken/wenno ramay ti saka?",
  "question-41": "No kitaen dagiti kasapulan ti trabahom, kasano kasansan a dawaten kenka ti overtime iti maysa nga oras wenno ad-adu pay?",
  "question-42": "Kasano kasansan a dawaten kenka ti agtrabaho iti narikut a deadline?"
};

const helpText: Record<string, string> = {
  "question-3": "Mangted iti ababa a deskripsion ti espesipiko nga aramiden wenno aktibidad a kayatmo nga i-assess; iraman dagiti detalye kas iti posture, discomfort, workstation ergonomics, ken/wenno kabayag ti break no maitutop."
};

const optionLabels: Record<string, string> = {
  worker: "Trabahador", supervisor: "Supervisor", manager: "Manager", employer: "Employer", health_safety_committee: "Miembre ti Health and Safety Committee",
  less_than_year: "Nababbaba ngem maysa a tawen", one_to_five: "1 agingga 5 a tawen", six_to_ten: "6 agingga 10 a tawen", more_than_ten: "Nasurok 10 a tawen",
  under_5_4: "Nababbaba ngem 5'4\" (< 1.62 m)", "5_4_to_5_9": "5'4\" - 5'9\" (1.62 m - 1.75 m)", "5_10_to_6_2": "5'10\" - 6'2\" (1.76 m - 1.88 m)", over_6_2: "Nasurok 6'2\" (> 1.88 m)", prefer_not_to_say: "Diak kayat ibaga",
  office_clerical: "Opisina wenno clerical a trabaho/aramiden a desk-based", not_desk_based: "Saan a desk-based iti opisina", both_setups: "Agpada a setup",
  mostly_sit: "Gagangay nga agtugawak iti kaaduan ti aldaw", mostly_stand_move: "Gagangay nga agtakderak wenno aggaraw iti kaaduan ti aldaw", sit_and_stand: "Agtugawak ken agtakderak iti unos ti aldaw",
  great_extent: "Iti dakkel a rukod", some_extent: "Iti sumagmamano a rukod", rarely: "Manmano", not_at_all: "Saan pulos",
  yes: "Wen", no: "Saan", one_side: "Sakit wenno discomfort iti maysa a sikigan ti bagi", both_sides: "Sakit wenno discomfort iti agpada a sikigan", lasted_two_days: "Ti sakit ket nagbayag iti 2 wenno ad-adu pay nga aldaw",
  less_than_30_min: "Nababbaba ngem 30 minutos kada aldaw", "30_min_to_1_hour": "30 minutos agingga 1 oras kada aldaw", more_than_1_hour: "Nasurok 1 oras kada aldaw",
  does_not_apply: "Saan a maiyaplikar", poor_grip_size: "Nalabes a dakkel wenno bassit tapno magrip a nasayaat", irregular_unbalanced: "Saan a regular ti porma wenno saan a balanse", sharp_handholds: "Adda pagiggem a nalabes a natadem", slippery: "Nalaslas", none: "Awan kadagiti adda iti ngato",
  less_than_one_hour: "Wen, nababbaba ngem 1 oras kada aldaw", more_than_one_hour: "Wen, nasurok 1 oras kada aldaw",
  smooth: "Nalinis a surface", soft: "Nalukneng, kas iti darat, pitak, ruot", rough: "Narugit, kas iti gravel, tile, granite",
  most: "Kaaduan ti tiempo", some: "Sumagmamano a tiempo", never: "Saan pulos",
  less_than_5_lb: "Nababbaba ngem 5 lb / 2 kg", "5_to_18_lb": "5 agingga 18 lb / 2 agingga 8 kg", more_than_18_lb: "Nasurok 18 lb / 8 kg",
  regularly: "Wen, adda kadagiti tools wenno equipment a regular nga usarek ti agkasapulan ti puersa", occasionally: "Wen, adda kadagiti tools wenno equipment a manmano nga usarek ti agkasapulan ti puersa",
  do_not_ask: "Saanak nga agkiddaw iti tulong", ask_but_no_assistance: "Agkiddawak ngem awan ti maawatko a tulong",
  often: "Wen, masansan nga aramidek daytoy iti trabaho", sometimes: "Wen, no dadduma aramidek daytoy iti trabaho",
  frequently: "Masansan", less_than_5_min: "Nababbaba ngem 5 minutos kada aldaw", "5_to_25_min": "5 agingga 25 minutos kada aldaw",
  "30_min_to_2_5_hours": "30 minutos agingga 2.5 oras kada aldaw", "2_5_to_5_5_hours": "2.5 agingga 5.5 oras kada aldaw", more_than_5_5_hours: "Nasurok 5.5 oras kada aldaw",
  "5_to_10_lb": "5 agingga 10 lb / 2 agingga 4.5 kg", more_than_10_lb: "Nasurok 10 lb / 4.5 kg",
  neutral: "Gagangay a neutral, diretso iti nagbaetan dagiti abaga, pantay ti baba", slight_tilt: "Gagangay a nakatilid agpangato wenno agpababa a nababbaba ngem 15 degrees", deep_tilt: "Gagangay a nakatilid agpangato, agpababa, wenno pasideg a nasurok 15 degrees",
  "0_to_14": "Gagangay a 0 agingga 14 degrees agpangato wenno agpababa", "15_to_30": "Gagangay a 15 agingga 30 degrees", more_than_30: "Gagangay a nasurok 30 degrees",
  "0_to_10": "Gagangay a 0 agingga 10 degrees paigid wenno paannigid", "10_to_20": "Gagangay a 10 agingga 20 degrees", more_than_20: "Gagangay a nasurok 20 degrees",
  "30_min_to_2_hours": "30 minutos agingga 2 oras kada aldaw", "2_to_4_hours": "2 agingga 4 oras kada aldaw", more_than_4_hours: "Nasurok 4 oras kada aldaw",
  less_than_1_hour: "Nababbaba ngem 1 oras kada aldaw", "1_to_2_hours": "1 agingga 2 oras kada aldaw", more_than_2_hours: "Nasurok 2 oras kada aldaw",
  less_than_2_hours: "Nababbaba ngem 2 oras kada aldaw", "1_to_4_hours": "1 agingga 4 oras kada aldaw", "5_min_to_1_hour": "5 minutos agingga 1 oras kada aldaw"
};

const groupLabels: Record<string, string> = {
  neck: "1. Tengnged", shoulders_upper_arms: "2. Abaga wenno ngato a takiag", elbows_forearms: "3. Sikou wenno forearm", wrists_hands_fingers: "4. Wrist, ima, wenno ramay",
  lower_back: "5. Nababa a likod", hips_upper_legs: "6. Hips wenno uppper legs", knees_lower_legs: "7. Tumeng wenno lower legs", ankles_feet: "8. Ankle wenno saka",
  forward_backward: "Agdumogak paabante wenno paatras a nasurok 15 degrees", sideways: "Agdumogak pasideg", hands_above_shoulders: "Ima iti ngato dagiti abaga", hands_floor_to_knee: "Ima iti nagbaetan ti suelo ken tumeng"
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

export const ilo: Translation = { app, sections, questions };
