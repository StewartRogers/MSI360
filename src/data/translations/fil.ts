import type { Translation } from "../../types";

const bodySideOptions = {
  one_side: "Pananakit o hindi komportable sa isang bahagi ng katawan, halimbawa kaliwa o kanan",
  both_sides: "Pananakit o hindi komportable sa parehong kaliwa at kanan",
  lasted_two_days: "Ang pananakit ay tumagal nang 2 araw o higit pa"
};

const extentOptions = {
  great_extent: "Sa malaking antas",
  some_extent: "Sa ilang antas",
  rarely: "Bihira",
  not_at_all: "Hindi kailanman"
};

const mostSomeNeverOptions = {
  most: "Karamihan ng oras",
  some: "Ilang bahagi ng oras",
  never: "Hindi kailanman"
};

const frequencyOptions = {
  frequently: "Madalas",
  sometimes: "Paminsan-minsan",
  rarely: "Bihira",
  never: "Hindi kailanman"
};

export const fil: Translation = {
  app: {
    title: "MSI360",
    disclosure: "Prototype: mananatili sa browser na ito ang iyong mga sagot maliban kung pipiliin mong i-download o ibahagi ang iyong ulat.",
    continue_button: "Magpatuloy",
    back_button: "Bumalik",
    processing_button: "Pinoproseso",
    analyzing_button: "Sinusuri",
    description_title: "Paglalarawan",
    description_body:
      "Ang mga sumusunod na tanong ay tungkol sa trabahong ginagawa mo sa karaniwang araw ng trabaho, o habang ginagawa mo ang partikular na gawain o aktibidad na gusto mong tasahin ngayon. Layunin nitong sabihin mo sa MSI360 ang mga kilos na ginagawa mo para matapos ang iyong trabaho."
  },
  sections: {
    intro: "Tungkol sa trabaho",
    symptoms: "Kasalukuyang sintomas",
    contact_stress: "Presyon mula sa pagkakadikit",
    force: "Puwersa",
    awkward_postures: "Hindi komportableng postura",
    repetition: "Paulit-ulit na galaw",
    environmental: "Mga salik sa kapaligiran",
    organizational: "Pag-aayos ng trabaho"
  },
  questions: {
    "question-1": {
      label: "Ano ang iyong tungkulin sa aktibidad na gusto mong tasahin ngayon?",
      options: {
        worker: "Manggagawa",
        supervisor: "Superbisor",
        manager: "Tagapamahala",
        employer: "Employer",
        health_safety_committee: "Miyembro ng Health and Safety Committee"
      }
    },
    "question-2": {
      label: "Gaano ka na katagal sa tungkuling ito sa kasalukuyan mong employer?",
      options: {
        less_than_year: "Mas mababa sa isang taon",
        one_to_five: "1 hanggang 5 taon",
        six_to_ten: "6 hanggang 10 taon",
        more_than_ten: "Mahigit 10 taon"
      }
    },
    "question-3": {
      label: "Ano ang gawain o aktibidad sa trabaho na gusto mong tasahin?",
      help_text: "Magbigay ng maikling paglalarawan ng partikular na gawain o aktibidad na gusto mong tasahin. Isama ang mga detalye gaya ng postura, hindi komportableng pakiramdam, ergonomics ng workstation, at/o haba ng pahinga kung naaangkop."
    },
    "question-4": {
      label: "Pakisaad ang iyong taas gamit ang mga opsyon sa ibaba:",
      options: {
        under_5_4: "Mas mababa sa 5'4\" (< 1.62 m)",
        "5_4_to_5_9": "5'4\" - 5'9\" (1.62 m - 1.75 m)",
        "5_10_to_6_2": "5'10\" - 6'2\" (1.76 m - 1.88 m)",
        over_6_2: "Higit sa 6'2\" (> 1.88 m)",
        prefer_not_to_say: "Mas pinipiling huwag sabihin"
      }
    },
    "question-5": {
      label: "Paano mo ilalarawan ang uri ng trabaho o gawain na tinatasa?",
      options: {
        office_clerical: "Trabaho o gawaing pang-opisina o klerikal (nakabatay sa desk)",
        not_desk_based: "Hindi nakabatay sa desk sa opisina",
        both_setups: "Parehong set-up"
      }
    },
    "question-6": {
      label: "Karaniwan ka bang nakaupo o nakatayo sa araw ng trabaho?",
      options: {
        mostly_sit: "Karaniwan akong nakaupo sa halos buong araw",
        mostly_stand_move: "Karaniwan akong nakatayo o gumagalaw sa halos buong araw",
        sit_and_stand: "Nakaupo at nakatayo ako sa buong araw"
      }
    },
    "question-7": {
      label: "Hanggang saan humihingi ng iyong feedback ang employer o superbisor mo tungkol sa mga tool o kagamitan bago bilhin ang mga ito?",
      options: extentOptions
    },
    "question-8": {
      label: "Hanggang saan humihingi ng iyong feedback ang employer o superbisor mo tungkol sa kung paano dapat ayusin at/o gawin ang iyong trabaho?",
      options: extentOptions
    },
    "question-9": {
      label: "Sa nakaraang 7 araw, nakaranas ka ba ng pananakit o hindi komportableng pakiramdam na kaugnay ng trabaho?",
      options: {
        yes: "Oo",
        no: "Hindi"
      }
    },
    "question-10": {
      label:
        "Gamit ang talahanayan sa ibaba, pakisaad ang partikular na bahagi ng katawan kung saan ka nakaranas ng pananakit o hindi komportableng pakiramdam na kaugnay ng trabaho habang ginagawa o pagkatapos gawin ang trabahong o gawaing tinatasa.\n\nIsaad kung a) isang bahagi o parehong bahagi ng katawan ang apektado, at b) tumagal ang pananakit nang 2 araw o higit pa.",
      groups: {
        neck: { label: "1. Leeg", options: bodySideOptions },
        shoulders_upper_arms: { label: "2. Balikat o itaas na braso", options: bodySideOptions },
        elbows_forearms: { label: "3. Siko o bisig", options: bodySideOptions },
        wrists_hands_fingers: { label: "4. Pulso, kamay, o mga daliri", options: bodySideOptions },
        lower_back: { label: "5. Ibabang likod", options: bodySideOptions },
        hips_upper_legs: { label: "6. Balakang o itaas na binti", options: bodySideOptions },
        knees_lower_legs: { label: "7. Tuhod o ibabang binti", options: bodySideOptions },
        ankles_feet: { label: "8. Bukung-bukong o paa", options: bodySideOptions }
      }
    },
    "question-11": {
      label:
        "Isipin ang karaniwang araw ng trabaho, o kung tinatasa mo ang isang partikular na gawain o aktibidad, ang bahagi ng araw kung kailan ginagawa mo iyon. Gaano katagal kang nakasandal o nakapatong ang bahagi ng katawan mo sa matutulis na bagay o gilid?",
      options: {
        less_than_30_min: "Mas mababa sa 30 minuto sa isang araw",
        "30_min_to_1_hour": "30 minuto hanggang 1 oras sa isang araw",
        more_than_1_hour: "Mahigit 1 oras sa isang araw",
        does_not_apply: "Hindi ako sumasandal sa matutulis na bagay o gilid sa trabaho"
      }
    },
    "question-12": {
      label: "Gaano katagal kang nakaluhod sa matigas o magaspang na ibabaw nang walang personal na proteksyon (hal., walang knee pads)?",
      options: {
        less_than_30_min: "Mas mababa sa 30 minuto sa isang araw",
        "30_min_to_1_hour": "30 minuto hanggang 1 oras sa isang araw",
        more_than_1_hour: "Mahigit 1 oras sa isang araw",
        does_not_apply: "Hindi ako lumuluhod sa matitigas na ibabaw nang walang proteksyon sa trabaho"
      }
    },
    "question-13": {
      label:
        "Isipin ang mga uri ng tool o bagay na hinahawakan mo nang higit sa 30 minuto sa bawat pagkakataon. Mula sa listahan sa ibaba, piliin ang lahat ng pahayag na naaangkop sa mga item na ito.\n\nHindi maaaring piliin ang huling opsyon kung may iba pang opsyon na na-tick.",
      options: {
        poor_grip_size: "Masyadong malaki o maliit para mahawakan nang maayos",
        irregular_unbalanced: "Hindi regular ang hugis o hindi balanse",
        sharp_handholds: "May mga hawakan na masyadong matulis",
        slippery: "Madulas",
        none: "Wala sa nabanggit"
      }
    },
    "question-14": {
      label:
        "Gumagamit ka ba ng anumang bahagi ng katawan bilang pansamantalang tool para matapos ang trabaho? Halimbawa, maaari mong gamitin ang palad o tuhod para maglapat ng puwersa sa isang ibabaw.\n\nAng ilustrasyon sa ibaba ay halimbawa ng paggamit ng katawan sa ganitong paraan.",
      options: {
        less_than_one_hour: "Oo, mas mababa sa 1 oras sa isang araw",
        more_than_one_hour: "Oo, mahigit 1 oras sa isang araw",
        no: "Hindi, hindi ko ginagamit ang katawan ko bilang pansamantalang tool sa trabaho"
      }
    },
    "question-15": {
      label:
        "Isipin ang mga uri ng ibabaw kung saan ka nagtutulak, humihila, o naglilipat ng mga bagay sa trabahong, gawain, o aktibidad na tinatasa mo ngayon. Mula sa listahan sa ibaba, piliin ang lahat ng pahayag na naaangkop sa mga ibabaw na ito.",
      options: {
        smooth: "Makinis (hal., tapos o finished na mga ibabaw)",
        soft: "Malambot (hal., buhangin, putik, damo)",
        rough: "Magaspang (hal., graba, tile, granite)",
        does_not_apply: "Hindi ako nagtutulak o humihila ng mga bagay sa anumang ibabaw para matapos ang trabaho"
      }
    },
    "question-16": {
      label: "Gaano kadalas kang nagtutulak, humihila, o naglilipat ng mga bagay na itinuturing mong mabigat nang walang mekanikal na tulong (hal., wheelbarrow o dolly)?",
      options: mostSomeNeverOptions
    },
    "question-17": {
      label: "Gaano kabigat ang mga tool o bagay na binubuhat, dinadala, o sinusuportahan mo nang walang mekanikal na tulong?",
      options: {
        less_than_5_lb: "Mas mababa sa 5 lb / 2 kg",
        "5_to_18_lb": "5 hanggang 18 lb / 2 hanggang 8 kg",
        more_than_18_lb: "Mahigit 18 lb / 8 kg",
        does_not_apply: "Hindi ako bumubuhat, nagdadala, o sumusuporta ng anumang tool o bagay sa trabaho"
      }
    },
    "question-18": {
      label: "Mayroon bang alinman sa mga tool at/o kagamitang ginagamit mo na nangangailangan ng malaking puwersa para paandarin? Hal., lawnmower na may lubid na kailangang hatakin, o pedal na kailangang diinang tapakan.",
      options: {
        regularly: "Oo, kahit ilan sa mga tool o kagamitang regular kong ginagamit ay nangangailangan ng puwersa",
        occasionally: "Oo, kahit ilan sa mga tool o kagamitang paminsan-minsan kong ginagamit ay nangangailangan ng puwersa",
        no: "Hindi, wala sa mga tool o kagamitang ginagamit ko ang nangangailangan ng puwersa para paandarin"
      }
    },
    "question-19": {
      label: "Kapag nagtutulak at/o humihila ka ng mga bagay na itinuturing mong mabigat, hanggang saan ka nakatatanggap ng tulong (hal., mula sa katrabaho, o sa paggamit ng dolly o wheelbarrow)?",
      options: {
        great_extent: "Sa malaking antas",
        some_extent: "Sa ilang antas",
        do_not_ask: "Hindi ako humihingi ng tulong",
        ask_but_no_assistance: "Humihingi ako ng tulong pero hindi ako nakatatanggap nito",
        does_not_apply: "Hindi ako nagtutulak o humihila ng ganitong uri ng bagay sa araw ng trabaho"
      }
    },
    "question-20": {
      label:
        "Isipin ang karaniwang araw ng trabaho, o kung tinatasa mo ang isang partikular na gawain o aktibidad, ang bahagi ng araw kung kailan ginagawa mo iyon. Kapag nakaupo o nakatayo, gaano kadalas kang nagtatrabaho na nakahilig ang itaas na bahagi ng katawan mo pasulong, paatras, o patagilid?\n\nPiliin ang mga opsyong naaangkop sa iyo.",
      groups: {
        forward_backward: { label: "Humihilig ako pasulong o paatras nang higit sa 15 degrees", options: mostSomeNeverOptions },
        sideways: { label: "Humihilig ako patagilid", options: mostSomeNeverOptions }
      }
    },
    "question-21": {
      label: "Kapag ginagawa mo ang iyong mga gawain sa trabaho, iniikot mo ba minsan ang itaas na bahagi ng katawan mo sa alinmang panig nang hindi binabago ang posisyon ng mga paa habang nakaupo o nakatayo?",
      options: {
        often: "Oo, madalas ko itong ginagawa sa aking trabaho, gawain, o aktibidad",
        sometimes: "Oo, paminsan-minsan ko itong ginagawa sa aking trabaho, gawain, o aktibidad",
        never: "Hindi, hindi ko kailanman iniikot ang itaas na bahagi ng katawan ko habang nagtatrabaho"
      }
    },
    "question-22": {
      label:
        "Isipin ang karaniwang araw ng trabaho, o kung tinatasa mo ang isang partikular na gawain o aktibidad, ang bahagi ng araw kung kailan ginagawa mo iyon. Kapag nakaupo o nakatayo, pakisaad kung nasaan ang mga kamay mo kaugnay ng katawan mo.\n\nPiliin ang mga opsyong naaangkop sa iyo.",
      groups: {
        hands_above_shoulders: { label: "Mga kamay na nasa taas ng balikat", options: mostSomeNeverOptions },
        hands_floor_to_knee: { label: "Mga kamay na nasa pagitan ng sahig at tuhod", options: mostSomeNeverOptions }
      }
    },
    "question-23": {
      label: "Kapag ginagawa mo ang trabahong, gawain, o aktibidad na tinatasa mo ngayon, ang isa o parehong braso mo ba ay minsang ganap na nakaunat nang tuwid pasulong?",
      options: {
        frequently: "Oo, madalas na ganap na nakaunat nang tuwid pasulong ang mga braso ko kapag gumagawa ng trabaho, gawain, o aktibidad",
        sometimes: "Oo, paminsan-minsan na ganap na nakaunat nang tuwid pasulong ang mga braso ko kapag gumagawa ng trabaho, gawain, o aktibidad",
        never: "Hindi, hindi kailanman ganap na nakaunat nang tuwid pasulong ang mga braso ko kapag gumagawa ng trabaho, gawain, o aktibidad"
      }
    },
    "question-24": {
      label: "Kapag nakaunat ang iyong braso o mga braso, humahawak ka ba ng tool o naglilipat ng bagay?",
      options: {
        less_than_5_lb: "Oo, at kadalasan ay mas mababa sa 5 lb / 2 kg",
        "5_to_10_lb": "Oo, at kadalasan ay 5 hanggang 10 lb / 2 hanggang 4.5 kg",
        more_than_10_lb: "Oo, at kadalasan ay mahigit 10 lb / 4.5 kg",
        no: "Hindi, hindi ako humahawak ng tool o bagay kapag nakaunat ang aking braso o mga braso"
      }
    },
    "question-25": {
      label: "Ano ang posisyon ng ulo mo kapag ginagawa mo ang trabahong, gawain, o aktibidad na tinatasa mo ngayon?",
      options: {
        neutral: "Madalas itong neutral (direkta sa pagitan ng mga balikat; pantay ang baba)",
        slight_tilt: "Madalas itong nakatagilid pataas o pababa nang mas mababa sa 15 degrees",
        deep_tilt: "Madalas itong nakatagilid pataas, pababa, o patagilid nang higit sa 15 degrees"
      }
    },
    "question-26": {
      label: "Gaano kalayo mo karaniwang ibinabaluktot ang pulso mo pataas at pababa? Gamitin ang larawan sa ibaba bilang sanggunian.",
      options: {
        "0_to_14": "Karaniwang 0 hanggang 14 degrees pataas o pababa",
        "15_to_30": "Karaniwang 15 hanggang 30 degrees",
        more_than_30: "Karaniwang higit sa 30 degrees"
      }
    },
    "question-27": {
      label: "Gaano kalayo mo inianggulo ang pulso mo mula kaliwa hanggang kanan?",
      options: {
        "0_to_10": "Karaniwang 0 hanggang 10 degrees pakaliwa o pakanan",
        "10_to_20": "Karaniwang 10 hanggang 20 degrees",
        more_than_20: "Karaniwang higit sa 20 degrees"
      }
    },
    "question-28": {
      label: "Posible ba para sa iyo na panatilihing malapit sa katawan mo ang lahat ng bagay na kailangan mong itulak, hilahin, buhatin, gamitin, atbp.?",
      options: {
        frequently: "Oo, madalas",
        sometimes: "Oo, paminsan-minsan",
        never: "Hindi, kailanman"
      }
    },
    "question-29": {
      label:
        "Isipin ang karaniwang araw ng trabaho, o kung tinatasa mo ang isang partikular na gawain o aktibidad, ang bahagi ng araw kung kailan ginagawa mo iyon. Gaano katagal kang gumagawa ng magkakatulad na galaw nang paulit-ulit?",
      options: {
        less_than_30_min: "Mas mababa sa 30 minuto sa isang araw",
        "30_min_to_2_hours": "30 minuto hanggang 2 oras sa isang araw",
        "2_to_4_hours": "2 hanggang 4 oras sa isang araw",
        more_than_4_hours: "Mahigit 4 na oras sa isang araw"
      }
    },
    "question-30": {
      label: "Gaano katagal mong ibinabaluktot ang pulso mo pataas o pababa nang higit sa 15 degrees? Gamitin ang larawan sa ibaba bilang sanggunian.",
      options: {
        less_than_1_hour: "Mas mababa sa 1 oras sa isang araw",
        "1_to_2_hours": "1 hanggang 2 oras sa isang araw",
        more_than_2_hours: "Mahigit 2 oras sa isang araw",
        none: "Walang oras"
      }
    },
    "question-31": {
      label: "Gaano katagal mong inianggulo ang pulso mo nang higit sa 15 degrees pakaliwa o pakanan? Gamitin ang larawan sa ibaba bilang sanggunian.",
      options: {
        less_than_1_hour: "Mas mababa sa 1 oras sa isang araw",
        "1_to_2_hours": "1 hanggang 2 oras sa isang araw",
        more_than_2_hours: "Mahigit 2 oras sa isang araw",
        none: "Walang oras"
      }
    },
    "question-32": {
      label: "Gaano katagal kang gumagamit ng malakas na pag-igting ng kalamnan (mahigit 18 pounds / 8 kg gamit ang sarili mong lakas) kapag gumagamit ng tool o humahawak ng bagay?",
      options: {
        less_than_5_min: "Mas mababa sa 5 minuto sa isang araw",
        "5_to_25_min": "5 hanggang 25 minuto sa isang araw",
        "30_min_to_2_5_hours": "30 minuto hanggang 2.5 oras sa isang araw",
        "2_5_to_5_5_hours": "2.5 hanggang 5.5 oras sa isang araw",
        more_than_5_5_hours: "Mahigit 5.5 oras sa isang araw"
      }
    },
    "question-33": {
      label:
        "Kapag hinahawakan mo ang isang bagay sa pagitan ng hinlalaki at dulo ng mga daliri, tinatawag itong pinch grip. Kapag ginagawa mo ang trabahong, gawain, o aktibidad na tinatasa mo ngayon, gaano katagal kang gumagamit ng pinch grip para hawakan ang bagay na mas mabigat sa 2 pounds / 1 kg?",
      options: {
        less_than_2_hours: "Mas mababa sa 2 oras sa isang araw",
        more_than_2_hours: "Mahigit 2 oras sa isang araw",
        none: "Walang oras"
      }
    },
    "question-34": {
      label: "Kapag ipinupulupot mo ang kamay sa isang bagay para hawakan ito, tinatawag itong power grip. Gaano katagal kang gumagamit ng power grip para hawakan ang bagay na mas mabigat sa 10 pounds / 4.5 kg?",
      options: {
        less_than_2_hours: "Mas mababa sa 2 oras sa isang araw",
        more_than_2_hours: "Mahigit 2 oras sa isang araw",
        none: "Walang oras"
      }
    },
    "question-35": {
      label: "Kung gumagamit ka ng mga tool o kagamitang nagdudulot ng vibration sa bahagi o buong katawan mo, gaano katagal mong ginagamit ang mga tool na ito?",
      options: {
        less_than_1_hour: "Mas mababa sa 1 oras sa isang araw",
        "1_to_4_hours": "1 hanggang 4 oras sa isang araw",
        more_than_4_hours: "Mahigit 4 na oras sa isang araw",
        does_not_apply: "Hindi ako gumagamit ng ganitong uri ng tool o kagamitan"
      }
    },
    "question-36": {
      label: "Kung nagtutulak o humihila ka ng anumang item na mas mabigat sa 80 pounds / 36 kg, gaano katagal mong inililipat ang mga item na ito sa magaspang na ibabaw (gaya ng graba, tile, o hindi pantay na lupa) o malambot na ibabaw (gaya ng buhangin, putik, o damo)?",
      options: {
        less_than_5_min: "Mas mababa sa 5 minuto sa isang araw",
        "5_min_to_1_hour": "5 minuto hanggang 1 oras sa isang araw",
        more_than_1_hour: "Mahigit 1 oras sa isang araw",
        does_not_apply: "Hindi ko inililipat ang ganitong uri ng item sa magaspang o malambot na ibabaw"
      }
    },
    "question-37": {
      label:
        "Isipin ang karaniwang araw ng trabaho, o kung tinatasa mo ang isang partikular na gawain o aktibidad, ang bahagi ng araw kung kailan ginagawa mo iyon. Nadidistract ka ba minsan ng mga ingay (sirena, malakas na usapan, trapiko, atbp.)?",
      options: {
        frequently: "Madalas",
        sometimes: "Paminsan-minsan",
        no: "Hindi"
      }
    },
    "question-38": {
      label: "Naaapektuhan ka ba ng sikat ng araw o repleksyong tumatama sa iyong mga mata (glare)?",
      options: frequencyOptions
    },
    "question-39": {
      label: "Kung kailangan sa trabaho mo ang tumingin sa maliliit na detalye o magbasa ng maliit na letra, nagagawa mo ba ito nang madali?",
      options: {
        ...frequencyOptions,
        does_not_apply: "Hindi kailangan ng trabaho ko na gawin ito"
      }
    },
    "question-40": {
      label: "Kung nagtatrabaho ka sa malamig na kapaligiran, nakakaramdam ka ba ng hindi komportable sa mga braso, likod, binti, daliri sa kamay, at/o daliri sa paa?",
      options: {
        yes: "Oo",
        no: "Hindi",
        does_not_apply: "Hindi ako nagtatrabaho sa malamig na kapaligiran"
      }
    },
    "question-41": {
      label: "Batay sa mga kinakailangan ng trabaho mo, gaano kadalas kang pinapagtatrabaho ng overtime nang isang oras o higit pa?",
      options: frequencyOptions
    },
    "question-42": {
      label: "Gaano kadalas kang pinapagawa ng trabaho sa masikip na deadline?",
      options: frequencyOptions
    }
  }
};
