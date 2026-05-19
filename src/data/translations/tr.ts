import type { Translation } from "../../types";

export const tr: Translation = {
  app: {
    title: "MSI360",
    disclosure: "Prototip: raporunuzu indirmeyi veya paylaşmayı seçmediğiniz sürece yanıtlarınız bu tarayıcıda kalır.",
    continue_button: "Devam et",
    back_button: "Geri",
    processing_button: "İşleniyor",
    analyzing_button: "Analiz ediliyor",
    question_progress: "Soru {current} / {total}",
    score_summary_title: "MSI risk özetiniz",
    score_overall_risk: "Genel MSI riski",
    score_download_report: "Raporu indir",
    score_not_available: "Yok",
    score_out_of_4: "{score} / 4",
    score_risk_not_enough: "Yeterli veri yok",
    score_risk_low: "Düşük risk",
    score_risk_possible: "Olası risk",
    score_risk_likely: "Muhtemel risk",
    score_risk_known: "Bilinen risk",
    score_factor_not_enough: "{factor} yorumlamak için yeterli veri yok.",
    score_factor_low: "Şu anda {factor} ile ilişkili risk düşük.",
    score_factor_possible: "{factor} nedeniyle olası rahatsızlık riski.",
    score_factor_likely: "{factor} nedeniyle muhtemel rahatsızlık riski.",
    score_factor_known: "Bilinen ağrı ve/veya yaralanma riski.",
    score_psychosocial_note: "Psikososyal faktörler genel MSI risk puanını olumsuz etkiledi ({multiplier}).",
    score_subject_contact_stress: "temas basıncı",
    score_subject_force: "kuvvet",
    score_subject_awkward_postures: "uygunsuz duruşlar",
    score_subject_repetition: "tekrar",
    score_subject_environmental: "çevresel faktörler",
    wrap_email_copy: "E-posta kopyası",
    wrap_review_results: "Sonuçları gözden geçir",
    wrap_submit_report: "Raporu gönder",
    email_title: "Raporunuzu e-posta ile alın",
    email_body: "Bu raporun bir kopyasını almak isterseniz e-posta adresinizi girin. Bu işlem 15 dakikaya kadar sürebilir. E-postayı gelen kutunuzda görmezseniz gereksiz veya spam klasörünü kontrol edin.",
    email_next_body: "Son raporu bir sonraki ekranda göreceksiniz.",
    email_address_label: "E-posta adresi",
    report_ready_title: "Raporunuz hazır",
    report_card_title: "MSI risk raporu",
    report_date_label: "Tarih",
    report_task_label: "Analiz edilen iş/görev:",
    report_overall_score_label: "Genel puan:",
    report_highest_risk: "En yüksek risk kategorileri:",
    report_no_scored_categories: "Henüz puanlanmış risk kategorisi yok",
    report_email_copy_requested: "{email} için e-posta kopyası istendi.",
    report_download_pdf: "PDF indir",
    report_email_report: "Raporu e-posta ile gönder",
    report_done: "Bitti",
    submit_title: "Başka bir ErgoCheck değerlendirmesi tamamlamak ister misiniz?",
    submit_option_reuse: "Evet, başlangıçta verdiğim aynı bilgileri kullanarak ve gerekirse düzenleyerek başka bir rapor tamamlamak istiyorum.",
    submit_option_restart: "Evet, yeni bilgilerle baştan başlamak istiyorum",
    submit_option_no: "Hayır, şu anda değil",
    submit_copy: "Teşekkürler, anketi bitirmek için aşağıdaki düğmeye basın.",
    submit_button: "Gönder",
    complete_title: "MSI 360 anketini tamamladığınız için teşekkür ederiz",
    complete_body: "Yanıtlarınız iş yerinizde MSI ile ilgili tehlikeleri belirlemeye yardımcı olur ve herkes için daha güvenli bir çalışma ortamına katkı sağlar.",
    complete_next_steps_title: "Sonraki adımlar:",
    complete_next_step_review: "Raporunuzu ve önerileri gözden geçirin",
    complete_next_step_share: "Uygunsa bulguları amirinizle paylaşın",
    complete_next_step_visit: "Ek kaynaklar için worksafebc.com adresini ziyaret edin",
    complete_start_new: "Yeni değerlendirme başlat",
    description_title: "Açıklama",
    description_body: "Aşağıdaki sorular, tipik bir iş gününde yaptığınız iş veya bugün değerlendirmek istediğiniz belirli görev ya da faaliyet hakkındadır. Amaç, işinizi tamamlamak için yaptığınız eylemleri MSI360'a anlatmanızdır.",
    ai_loading_task_description: "Görev açıklamanız analiz ediliyor...",
    ai_task_analysis_fallback_toast: "AI görev analizi yanıtı zaman aşımına uğradı. Bunun yerine yerel yedek kullanılıyor.",
    ai_question_pruning_fallback_toast: "AI soru eleme yanıtı zaman aşımına uğradı. Bunun yerine yedek takip soruları kullanılıyor.",
    ai_fallback_toast_dismiss: "AI yedek bildirimini kapat"
  },
  sections: {
    intro: "İş hakkında",
    symptoms: "Mevcut belirtiler",
    contact_stress: "Temas basıncı",
    force: "Kuvvet",
    awkward_postures: "Uygunsuz duruşlar",
    repetition: "Tekrar",
    environmental: "Çevresel faktörler",
    organizational: "İş organizasyonu"
  },
  questions: {
    "question-1": {
      label: "Bugün değerlendirmek istediğiniz faaliyetteki rolünüz nedir?",
      options: {
        worker: "Çalışan",
        supervisor: "Amir",
        manager: "Yönetici",
        employer: "İşveren",
        health_safety_committee: "Sağlık ve güvenlik komitesi üyesi"
      }
    },
    "question-2": {
      label: "Mevcut işvereninizde bu rolde ne kadar süredir çalışıyorsunuz?",
      options: {
        less_than_year: "Bir yıldan az",
        one_to_five: "1 ila 5 yıl",
        six_to_ten: "6 ila 10 yıl",
        more_than_ten: "10 yıldan fazla"
      }
    },
    "question-3": {
      label: "Değerlendirmek istediğiniz görev veya iş faaliyeti nedir?",
      help_text: "Lütfen değerlendirmek istediğiniz belirli görev veya faaliyetin kısa bir açıklamasını yapın; uygun olduğunda duruş, rahatsızlık, iş istasyonu ergonomisi ve/veya mola süresi gibi ayrıntıları ekleyin."
    },
    "question-4": {
      label: "Lütfen aşağıdaki seçenekleri kullanarak boyunuzu belirtin:",
      options: {
        under_5_4: "5'4\" altında (< 1,62 m)",
        "5_4_to_5_9": "5'4\" - 5'9\" (1,62 m - 1,75 m)",
        "5_10_to_6_2": "5'10\" - 6'2\" (1,76 m - 1,88 m)",
        over_6_2: "6'2\" üzerinde (> 1,88 m)",
        prefer_not_to_say: "Söylememeyi tercih ederim"
      }
    },
    // skipping this question for now, as it was made redundant by the task_description question.
    // we're leaving this in the code in case it is used in the future
    "question-5": {
      label: "Değerlendirilen iş veya görevin türünü nasıl özetlersiniz?",
      options: {
        office_clerical: "Ofis veya büro işi, masa başı iş/görev",
        not_desk_based: "Ofiste masa başı değil",
        both_setups: "Her iki düzen"
      }
    },
    "question-6": {
      label: "İş gününüz boyunca genellikle oturur musunuz yoksa ayakta mı durursunuz?",
      options: {
        mostly_sit: "Genellikle günün çoğunda otururum",
        mostly_stand_move: "Genellikle günün çoğunda ayakta durur veya hareket ederim",
        sit_and_stand: "Gün boyunca hem oturur hem ayakta dururum"
      }
    },
    "question-7": {
      label: "İşvereniniz veya amiriniz, araç ya da ekipman satın alınmadan önce görüşünüzü ne ölçüde alır?",
      options: {
        great_extent: "Büyük ölçüde",
        some_extent: "Bir ölçüde",
        rarely: "Nadiren",
        not_at_all: "Hiç"
      }
    },
    "question-8": {
      label: "İşvereniniz veya amiriniz, yaptığınız işin nasıl düzenlenmesi ve/veya yapılması gerektiği konusunda görüşünüzü ne ölçüde alır?",
      options: {
        great_extent: "Büyük ölçüde",
        some_extent: "Bir ölçüde",
        rarely: "Nadiren",
        not_at_all: "Hiç"
      }
    },
    "question-9": {
      label: "Son 7 gün içinde işle ilgili ağrı veya rahatsızlık yaşadınız mı?",
      options: {
        yes: "Evet",
        no: "Hayır"
      }
    },
    "question-10": {
      label: "Aşağıdaki tabloyu kullanarak, değerlendirilen iş veya görevi yaparken ya da yaptıktan sonra işle ilgili ağrı veya rahatsızlık yaşadığınız vücut bölgelerini belirtin. Vücudunuzun bir veya iki tarafının etkilenip etkilenmediğini ve ağrının 2 gün veya daha uzun sürüp sürmediğini de belirtin.",
      groups: {
        neck: {
          label: "1. Boyun",
          options: {
            one_side: "Vücudun bir tarafında ağrı veya rahatsızlık",
            both_sides: "Her iki tarafta ağrı veya rahatsızlık",
            lasted_two_days: "Ağrı 2 gün veya daha uzun sürdü"
          }
        },
        shoulders_upper_arms: {
          label: "2. Omuzlar veya üst kollar",
          options: {
            one_side: "Vücudun bir tarafında ağrı veya rahatsızlık",
            both_sides: "Her iki tarafta ağrı veya rahatsızlık",
            lasted_two_days: "Ağrı 2 gün veya daha uzun sürdü"
          }
        },
        elbows_forearms: {
          label: "3. Dirsekler veya ön kollar",
          options: {
            one_side: "Vücudun bir tarafında ağrı veya rahatsızlık",
            both_sides: "Her iki tarafta ağrı veya rahatsızlık",
            lasted_two_days: "Ağrı 2 gün veya daha uzun sürdü"
          }
        },
        wrists_hands_fingers: {
          label: "4. Bilekler, eller veya parmaklar",
          options: {
            one_side: "Vücudun bir tarafında ağrı veya rahatsızlık",
            both_sides: "Her iki tarafta ağrı veya rahatsızlık",
            lasted_two_days: "Ağrı 2 gün veya daha uzun sürdü"
          }
        },
        lower_back: {
          label: "5. Bel",
          options: {
            one_side: "Vücudun bir tarafında ağrı veya rahatsızlık",
            both_sides: "Her iki tarafta ağrı veya rahatsızlık",
            lasted_two_days: "Ağrı 2 gün veya daha uzun sürdü"
          }
        },
        hips_upper_legs: {
          label: "6. Kalçalar veya üst bacaklar",
          options: {
            one_side: "Vücudun bir tarafında ağrı veya rahatsızlık",
            both_sides: "Her iki tarafta ağrı veya rahatsızlık",
            lasted_two_days: "Ağrı 2 gün veya daha uzun sürdü"
          }
        },
        knees_lower_legs: {
          label: "7. Dizler veya alt bacaklar",
          options: {
            one_side: "Vücudun bir tarafında ağrı veya rahatsızlık",
            both_sides: "Her iki tarafta ağrı veya rahatsızlık",
            lasted_two_days: "Ağrı 2 gün veya daha uzun sürdü"
          }
        },
        ankles_feet: {
          label: "8. Ayak bilekleri veya ayaklar",
          options: {
            one_side: "Vücudun bir tarafında ağrı veya rahatsızlık",
            both_sides: "Her iki tarafta ağrı veya rahatsızlık",
            lasted_two_days: "Ağrı 2 gün veya daha uzun sürdü"
          }
        }
      }
    },
    "question-11": {
      label: "Tipik bir iş gününü veya belirli görevi yaptığınız zamanı düşünün. Vücudunuzun bir bölümünü keskin nesnelere veya kenarlara dayayarak ne kadar zaman geçiriyorsunuz?",
      options: {
        less_than_30_min: "Günde 30 dakikadan az",
        "30_min_to_1_hour": "Günde 30 dakika ila 1 saat",
        more_than_1_hour: "Günde 1 saatten fazla",
        does_not_apply: "Geçerli değil"
      }
    },
    "question-12": {
      label: "Dizlik gibi kişisel koruma olmadan sert veya pürüzlü yüzeylerde diz çökerek ne kadar zaman geçiriyorsunuz?",
      options: {
        less_than_30_min: "Günde 30 dakikadan az",
        "30_min_to_1_hour": "Günde 30 dakika ila 1 saat",
        more_than_1_hour: "Günde 1 saatten fazla",
        does_not_apply: "Geçerli değil"
      }
    },
    "question-13": {
      label: "Bir seferde 30 dakikadan uzun süre tuttuğunuz araçları veya nesneleri düşünün. Geçerli olan tüm ifadeleri seçin. Başka bir seçenek işaretlenmişse son seçenek seçilemez.",
      options: {
        poor_grip_size: "Doğru kavramak için çok büyük veya küçük",
        irregular_unbalanced: "Düzensiz şekilli veya dengesiz",
        sharp_handholds: "Tutma yerleri çok keskin",
        slippery: "Kaygan",
        none: "Yukarıdakilerin hiçbiri"
      }
    },
    "question-14": {
      label: "İşinizi tamamlamak için vücudunuzun herhangi bir bölümünü geçici bir araç olarak kullanıyor musunuz?",
      options: {
        less_than_one_hour: "Evet, günde 1 saatten az",
        more_than_one_hour: "Evet, günde 1 saatten fazla",
        no: "Hayır"
      }
    },
    "question-15": {
      label: "Bugün değerlendirdiğiniz iş sırasında nesneleri ittiğiniz, çektiğiniz veya hareket ettirdiğiniz yüzeyleri düşünün. Geçerli tüm açıklamaları seçin.",
      options: {
        smooth: "Düz, örneğin bitmiş yüzeyler",
        soft: "Yumuşak, örneğin kum, çamur, çim",
        rough: "Pürüzlü, örneğin çakıl, karo, granit",
        does_not_apply: "Geçerli değil"
      }
    },
    "question-16": {
      label: "Ağır olduğunu düşündüğünüz nesneleri mekanik yardım olmadan ne sıklıkla iter, çeker veya hareket ettirirsiniz?",
      options: {
        most: "Çoğu zaman",
        some: "Bazen",
        never: "Asla"
      }
    },
    "question-17": {
      label: "Mekanik yardım olmadan kaldırdığınız, taşıdığınız veya desteklediğiniz araç ya da nesneler ne kadar ağırdır?",
      options: {
        less_than_5_lb: "5 lb / 2 kg'dan az",
        "5_to_18_lb": "5 ila 18 lb / 2 ila 8 kg",
        more_than_18_lb: "18 lb / 8 kg'dan fazla",
        does_not_apply: "Geçerli değil"
      }
    },
    "question-18": {
      label: "Kullandığınız araç veya ekipmanlardan herhangi biri çalıştırmak için çok güç gerektiriyor mu?",
      options: {
        regularly: "Evet, düzenli kullandığım bazı araç veya ekipmanlar güç gerektirir",
        occasionally: "Evet, ara sıra kullandığım bazı araç veya ekipmanlar güç gerektirir",
        no: "Hayır"
      }
    },
    "question-19": {
      label: "Ağır olduğunu düşündüğünüz nesneleri iterken ve/veya çekerken ne ölçüde yardım alırsınız?",
      options: {
        great_extent: "Büyük ölçüde",
        some_extent: "Bir ölçüde",
        do_not_ask: "Yardım istemem",
        ask_but_no_assistance: "Yardım isterim ama alamam",
        does_not_apply: "Geçerli değil"
      }
    },
    "question-20": {
      label: "Tipik bir iş gününü veya görevi yaptığınız zamanı düşünün. Otururken veya ayaktayken üst gövdeniz öne, arkaya veya yana eğilmiş şekilde ne sıklıkla çalışırsınız?",
      groups: {
        forward_backward: {
          label: "15 dereceden fazla öne veya arkaya eğilirim",
          options: {
            most: "Çoğu zaman",
            some: "Bazen",
            never: "Asla"
          }
        },
        sideways: {
          label: "Yana eğilirim",
          options: {
            most: "Çoğu zaman",
            some: "Bazen",
            never: "Asla"
          }
        }
      }
    },
    "question-21": {
      label: "İş faaliyetlerinizi yaparken ayaklarınızın konumunu değiştirmeden üst gövdenizi yana doğru döndürür müsünüz?",
      options: {
        often: "Evet, iş sırasında bunu sık sık yaparım",
        sometimes: "Evet, iş sırasında bunu bazen yaparım",
        never: "Asla"
      }
    },
    "question-22": {
      label: "Tipik bir iş gününü düşünün. Otururken veya ayaktayken ellerinizin vücudunuza göre nerede bulunduğunu belirtin.",
      groups: {
        hands_above_shoulders: {
          label: "Eller omuzların üstünde",
          options: {
            most: "Çoğu zaman",
            some: "Bazen",
            never: "Asla"
          }
        },
        hands_floor_to_knee: {
          label: "Eller zemin ile diz arasında",
          options: {
            most: "Çoğu zaman",
            some: "Bazen",
            never: "Asla"
          }
        }
      }
    },
    "question-23": {
      label: "Bugün değerlendirdiğiniz iş veya görevi yaparken bir veya iki kolunuz hiç tamamen öne doğru uzanır mı?",
      options: {
        frequently: "Sık sık",
        sometimes: "Evet, iş sırasında bunu bazen yaparım",
        never: "Asla"
      }
    },
    "question-24": {
      label: "Kolunuz/kolllarınız uzatılmışken hiç araç tutar veya nesne hareket ettirir misiniz?",
      options: {
        less_than_5_lb: "5 lb / 2 kg'dan az",
        "5_to_10_lb": "5 ila 10 lb / 2 ila 4,5 kg",
        more_than_10_lb: "10 lb / 4,5 kg'dan fazla",
        no: "Hayır"
      }
    },
    "question-25": {
      label: "Bugün değerlendirdiğiniz iş veya görevi yaparken başınız nasıl konumlanır?",
      options: {
        neutral: "Genellikle nötr, omuzların tam arasında, çene düz",
        slight_tilt: "Genellikle 15 dereceden az yukarı veya aşağı eğik",
        deep_tilt: "Genellikle 15 dereceden fazla yukarı, aşağı veya yana eğik"
      }
    },
    "question-26": {
      label: "Bileğinizi genellikle yukarı ve aşağı ne kadar bükersiniz? Aşağıdaki resmi referans olarak kullanın.",
      options: {
        "0_to_14": "Genellikle yukarı veya aşağı 0 ila 14 derece",
        "15_to_30": "Genellikle 15 ila 30 derece",
        more_than_30: "Genellikle 30 dereceden fazla"
      }
    },
    "question-27": {
      label: "Bileğinizi bir yandan diğer yana ne kadar açılı tutarsınız?",
      options: {
        "0_to_10": "Genellikle sola veya sağa 0 ila 10 derece",
        "10_to_20": "Genellikle 10 ila 20 derece",
        more_than_20: "Genellikle 20 dereceden fazla"
      }
    },
    "question-28": {
      label: "İtmeniz, çekmeniz, kaldırmanız, kullanmanız vb. gereken tüm nesneleri vücudunuza yakın tutmanız mümkün mü?",
      options: {
        frequently: "Sık sık",
        sometimes: "Evet, iş sırasında bunu bazen yaparım",
        never: "Asla"
      }
    },
    "question-29": {
      label: "Tipik bir iş gününü veya görevi yaptığınız zamanı düşünün. Benzer hareketleri tekrar tekrar yaparak ne kadar zaman geçirirsiniz?",
      options: {
        less_than_30_min: "Günde 30 dakikadan az",
        "30_min_to_2_hours": "Günde 30 dakika ila 2 saat",
        "2_to_4_hours": "Günde 2 ila 4 saat",
        more_than_4_hours: "Günde 4 saatten fazla"
      }
    },
    "question-30": {
      label: "Bileğinizi 15 dereceden fazla yukarı veya aşağı bükerek ne kadar zaman geçirirsiniz?",
      options: {
        less_than_1_hour: "Günde 1 saatten az",
        "1_to_2_hours": "Günde 1 ila 2 saat",
        more_than_2_hours: "Günde 2 saatten fazla",
        none: "Yukarıdakilerin hiçbiri"
      }
    },
    "question-31": {
      label: "Bileğinizi 15 dereceden fazla sola veya sağa açılı tutarak ne kadar zaman geçirirsiniz?",
      options: {
        less_than_1_hour: "Günde 1 saatten az",
        "1_to_2_hours": "Günde 1 ila 2 saat",
        more_than_2_hours: "Günde 2 saatten fazla",
        none: "Yukarıdakilerin hiçbiri"
      }
    },
    "question-32": {
      label: "Bir araç kullanırken veya nesneyle çalışırken kendi gücünüzle 18 pound / 8 kg'dan fazla güçlü kas eforu kullanarak ne kadar zaman geçirirsiniz?",
      options: {
        less_than_5_min: "Günde 5 dakikadan az",
        "5_to_25_min": "Günde 5 ila 25 dakika",
        "30_min_to_2_5_hours": "Günde 30 dakika ila 2,5 saat",
        "2_5_to_5_5_hours": "Günde 2,5 ila 5,5 saat",
        more_than_5_5_hours: "Günde 5,5 saatten fazla"
      }
    },
    "question-33": {
      label: "Bir nesneyi başparmağınız ve parmak uçlarınız arasında tuttuğunuzda buna çimdik tutuşu denir. 2 pound / 1 kg'dan ağır bir nesneyi tutmak için bu tutuşu ne kadar süre kullanırsınız?",
      options: {
        less_than_2_hours: "Günde 2 saatten az",
        more_than_2_hours: "Günde 2 saatten fazla",
        none: "Yukarıdakilerin hiçbiri"
      }
    },
    "question-34": {
      label: "Elinizi bir nesnenin etrafına sararak tuttuğunuzda buna güç tutuşu denir. 10 pound / 4,5 kg'dan ağır bir nesneyi tutmak için güç tutuşunu ne kadar süre kullanırsınız?",
      options: {
        less_than_2_hours: "Günde 2 saatten az",
        more_than_2_hours: "Günde 2 saatten fazla",
        none: "Yukarıdakilerin hiçbiri"
      }
    },
    "question-35": {
      label: "Vücudunuzun bir bölümünde veya tamamında titreşime neden olan araçlar veya ekipman kullanıyorsanız, bunları ne kadar süre kullanırsınız?",
      options: {
        less_than_1_hour: "Günde 1 saatten az",
        "1_to_4_hours": "Günde 1 ila 4 saat",
        more_than_4_hours: "Günde 4 saatten fazla",
        does_not_apply: "Geçerli değil"
      }
    },
    "question-36": {
      label: "80 pound / 36 kg'dan ağır nesneleri itiyor veya çekiyorsanız, bu nesneleri pürüzlü veya yumuşak yüzeylerde hareket ettirerek ne kadar zaman geçirirsiniz?",
      options: {
        less_than_5_min: "Günde 5 dakikadan az",
        "5_min_to_1_hour": "Günde 5 dakika ila 1 saat",
        more_than_1_hour: "Günde 1 saatten fazla",
        does_not_apply: "Geçerli değil"
      }
    },
    "question-37": {
      label: "Tipik bir iş gününü düşünün. Siren, yüksek sesle konuşma, trafik gibi sesler dikkatinizi hiç dağıtır mı?",
      options: {
        frequently: "Sık sık",
        sometimes: "Evet, iş sırasında bunu bazen yaparım",
        no: "Hayır"
      }
    },
    "question-38": {
      label: "Güneş ışığının gözünüze gelmesi veya yansıması, yani kamaşma, sizi etkiler mi?",
      options: {
        frequently: "Sık sık",
        sometimes: "Evet, iş sırasında bunu bazen yaparım",
        rarely: "Nadiren",
        never: "Asla"
      }
    },
    "question-39": {
      label: "İşiniz ince ayrıntılara bakmayı veya küçük yazıları okumayı gerektiriyorsa, bunu kolayca yapabiliyor musunuz?",
      options: {
        frequently: "Sık sık",
        sometimes: "Evet, iş sırasında bunu bazen yaparım",
        rarely: "Nadiren",
        never: "Asla",
        does_not_apply: "Geçerli değil"
      }
    },
    "question-40": {
      label: "Soğuk ortamlarda çalışıyorsanız kollarınızda, sırtınızda, bacaklarınızda, el parmaklarınızda ve/veya ayak parmaklarınızda rahatsızlık hisseder misiniz?",
      options: {
        yes: "Evet",
        no: "Hayır",
        does_not_apply: "Geçerli değil"
      }
    },
    "question-41": {
      label: "İş gereklilikleriniz göz önüne alındığında, bir saat veya daha uzun süre fazla mesai yapmanız ne sıklıkla istenir?",
      options: {
        frequently: "Sık sık",
        sometimes: "Evet, iş sırasında bunu bazen yaparım",
        rarely: "Nadiren",
        never: "Asla"
      }
    },
    "question-42": {
      label: "Sıkı teslim tarihleriyle çalışmanız ne sıklıkla istenir?",
      options: {
        frequently: "Sık sık",
        sometimes: "Evet, iş sırasında bunu bazen yaparım",
        rarely: "Nadiren",
        never: "Asla"
      }
    }
  }
};
