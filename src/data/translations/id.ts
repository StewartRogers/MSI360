import type { Translation } from "../../types";

export const id: Translation = {
  "app": {
    "title": "MSI360",
    "disclosure": "Prototipe: jawaban Anda tetap berada di browser ini kecuali Anda memilih untuk mengunduh atau membagikan laporan.",
    "continue_button": "Lanjutkan",
    "back_button": "Kembali",
    "processing_button": "Memproses",
    "analyzing_button": "Menganalisis",
    "question_progress": "Pertanyaan {current} dari {total}",
    "score_summary_title": "Ringkasan risiko MSI Anda",
    "score_overall_risk": "Risiko MSI keseluruhan",
    "score_download_report": "Unduh laporan",
    "score_not_available": "N/A",
    "score_out_of_4": "{score} dari 4",
    "score_risk_not_enough": "Data belum cukup",
    "score_risk_low": "Risiko rendah",
    "score_risk_possible": "Risiko mungkin ada",
    "score_risk_likely": "Risiko kemungkinan besar ada",
    "score_risk_known": "Risiko diketahui",
    "score_factor_not_enough": "Data belum cukup untuk menafsirkan {factor}.",
    "score_factor_low": "Saat ini risiko terkait {factor} rendah.",
    "score_factor_possible": "Kemungkinan risiko ketidaknyamanan akibat {factor}.",
    "score_factor_likely": "Risiko ketidaknyamanan yang kemungkinan besar akibat {factor}.",
    "score_factor_known": "Risiko nyeri dan/atau cedera yang diketahui.",
    "score_psychosocial_note": "Faktor psikososial berdampak negatif pada skor risiko MSI keseluruhan ({multiplier}).",
    "score_subject_contact_stress": "tekanan kontak",
    "score_subject_force": "gaya",
    "score_subject_awkward_postures": "postur canggung",
    "score_subject_repetition": "pengulangan",
    "score_subject_environmental": "faktor lingkungan",
    "wrap_email_copy": "Salinan email",
    "wrap_review_results": "Tinjau hasil",
    "wrap_submit_report": "Kirim laporan",
    "email_title": "Dapatkan laporan melalui email",
    "email_body": "Masukkan alamat email jika Anda ingin menerima salinan laporan ini. Proses ini dapat memakan waktu hingga 15 menit. Periksa folder junk atau spam jika email tidak terlihat di kotak masuk.",
    "email_next_body": "Anda akan melihat laporan akhir di layar berikutnya.",
    "email_address_label": "Alamat email",
    "report_ready_title": "Laporan Anda siap",
    "report_card_title": "Laporan risiko MSI",
    "report_date_label": "Tanggal",
    "report_task_label": "Pekerjaan/tugas yang dianalisis:",
    "report_overall_score_label": "Skor keseluruhan:",
    "report_highest_risk": "Kategori risiko tertinggi:",
    "report_no_scored_categories": "Belum ada kategori risiko yang diberi skor",
    "report_email_copy_requested": "Salinan email diminta untuk {email}.",
    "report_download_pdf": "Unduh PDF",
    "report_email_report": "Email laporan",
    "report_done": "Selesai",
    "submit_title": "Apakah Anda ingin menyelesaikan penilaian ErgoCheck lain?",
    "submit_option_reuse": "Ya, saya ingin menyelesaikan laporan lain menggunakan informasi awal yang sama dan mengeditnya bila perlu.",
    "submit_option_restart": "Ya, saya ingin memulai kembali dengan informasi baru",
    "submit_option_no": "Tidak, belum sekarang",
    "submit_copy": "Terima kasih, tekan tombol di bawah untuk menyelesaikan survei.",
    "submit_button": "Kirim",
    "complete_title": "Terima kasih telah menyelesaikan survei MSI 360",
    "complete_body": "Jawaban Anda membantu mengidentifikasi bahaya terkait MSI di tempat kerja dan berkontribusi pada lingkungan kerja yang lebih aman bagi semua orang.",
    "complete_next_steps_title": "Langkah berikutnya:",
    "complete_next_step_review": "Tinjau laporan dan rekomendasi Anda",
    "complete_next_step_share": "Bagikan temuan dengan supervisor Anda bila sesuai",
    "complete_next_step_visit": "Kunjungi worksafebc.com untuk sumber daya tambahan",
    "complete_start_new": "Mulai penilaian baru",
    "description_title": "Deskripsi",
    "description_body": "Pertanyaan berikut adalah tentang pekerjaan yang Anda lakukan pada hari kerja biasa atau saat menyelesaikan tugas atau aktivitas tertentu yang ingin Anda nilai hari ini. Tujuannya adalah agar Anda memberi tahu MSI360 tindakan apa yang Anda lakukan untuk menyelesaikan pekerjaan.",
    "ai_loading_task_description": "Menganalisis deskripsi tugas Anda...",
    "ai_task_analysis_fallback_toast": "Respons analisis tugas AI kehabisan waktu. Fallback lokal sedang digunakan.",
    "ai_question_pruning_fallback_toast": "Respons penyaringan pertanyaan AI kehabisan waktu. Pertanyaan lanjutan fallback sedang digunakan.",
    "ai_fallback_toast_dismiss": "Tutup pemberitahuan fallback AI"
  },
  "sections": {
    "intro": "Tentang pekerjaan",
    "symptoms": "Gejala saat ini",
    "contact_stress": "Tekanan kontak",
    "force": "Gaya",
    "awkward_postures": "Postur canggung",
    "repetition": "Pengulangan",
    "environmental": "Faktor lingkungan",
    "organizational": "Organisasi kerja"
  },
  "questions": {
    "question-1": {
      "label": "Apa peran Anda dalam aktivitas yang ingin Anda nilai hari ini?",
      "options": {
        "worker": "Pekerja",
        "supervisor": "Supervisor",
        "manager": "Manajer",
        "employer": "Pemberi kerja",
        "health_safety_committee": "Anggota komite kesehatan dan keselamatan"
      }
    },
    "question-2": {
      "label": "Sudah berapa lama Anda berada dalam peran ini dengan pemberi kerja saat ini?",
      "options": {
        "less_than_year": "Kurang dari satu tahun",
        "one_to_five": "1 hingga 5 tahun",
        "six_to_ten": "6 hingga 10 tahun",
        "more_than_ten": "Lebih dari 10 tahun"
      }
    },
    "question-3": {
      "label": "Apa tugas atau aktivitas kerja yang ingin Anda nilai?",
      "help_text": "Berikan deskripsi singkat tentang tugas atau aktivitas tertentu yang ingin Anda nilai; sertakan detail seperti postur, ketidaknyamanan, ergonomi stasiun kerja, dan/atau lama istirahat jika relevan."
    },
    "question-4": {
      "label": "Silakan pilih tinggi badan Anda menggunakan opsi di bawah:",
      "options": {
        "under_5_4": "Kurang dari 5'4\" (< 1,62 m)",
        "5_4_to_5_9": "5'4\" - 5'9\" (1,62 m - 1,75 m)",
        "5_10_to_6_2": "5'10\" - 6'2\" (1,76 m - 1,88 m)",
        "over_6_2": "Lebih dari 6'2\" (> 1,88 m)",
        "prefer_not_to_say": "Memilih untuk tidak menjawab"
      }
    },
    // skipping this question for now, as it was made redundant by the task_description question.
    // we're leaving this in the code in case it is used in the future
    "question-5": {
      "label": "Bagaimana Anda merangkum jenis pekerjaan atau tugas yang sedang dinilai?",
      "options": {
        "office_clerical": "Pekerjaan/tugas kantor atau administrasi berbasis meja",
        "not_desk_based": "Tidak berbasis meja di kantor",
        "both_setups": "Keduanya"
      }
    },
    "question-6": {
      "label": "Apakah Anda biasanya duduk atau berdiri selama hari kerja?",
      "options": {
        "mostly_sit": "Saya biasanya duduk hampir sepanjang hari",
        "mostly_stand_move": "Saya biasanya berdiri atau bergerak hampir sepanjang hari",
        "sit_and_stand": "Saya duduk dan berdiri sepanjang hari"
      }
    },
    "question-7": {
      "label": "Sejauh mana pemberi kerja atau supervisor meminta masukan Anda tentang alat atau peralatan sebelum dibeli?",
      "options": {
        "great_extent": "Sangat besar",
        "some_extent": "Cukup",
        "rarely": "Jarang",
        "not_at_all": "Tidak sama sekali"
      }
    },
    "question-8": {
      "label": "Sejauh mana pemberi kerja atau supervisor meminta masukan Anda tentang bagaimana pekerjaan Anda harus diatur dan/atau dilakukan?",
      "options": {
        "great_extent": "Sangat besar",
        "some_extent": "Cukup",
        "rarely": "Jarang",
        "not_at_all": "Tidak sama sekali"
      }
    },
    "question-9": {
      "label": "Dalam 7 hari terakhir, apakah Anda mengalami nyeri atau ketidaknyamanan terkait pekerjaan?",
      "options": {
        "yes": "Ya",
        "no": "Tidak"
      }
    },
    "question-10": {
      "label": "Dengan tabel di bawah, tandai bagian tubuh tertentu tempat Anda mengalami nyeri atau ketidaknyamanan terkait pekerjaan selama atau setelah melakukan pekerjaan atau tugas yang dinilai. Tandai juga apakah satu atau kedua sisi tubuh terlibat, dan apakah nyeri berlangsung 2 hari atau lebih.",
      "groups": {
        "neck": {
          "label": "1. Leher",
          "options": {
            "one_side": "Nyeri atau tidak nyaman di satu sisi tubuh",
            "both_sides": "Nyeri atau tidak nyaman di kedua sisi",
            "lasted_two_days": "Nyeri berlangsung 2 hari atau lebih"
          }
        },
        "shoulders_upper_arms": {
          "label": "2. Bahu atau lengan atas",
          "options": {
            "one_side": "Nyeri atau tidak nyaman di satu sisi tubuh",
            "both_sides": "Nyeri atau tidak nyaman di kedua sisi",
            "lasted_two_days": "Nyeri berlangsung 2 hari atau lebih"
          }
        },
        "elbows_forearms": {
          "label": "3. Siku atau lengan bawah",
          "options": {
            "one_side": "Nyeri atau tidak nyaman di satu sisi tubuh",
            "both_sides": "Nyeri atau tidak nyaman di kedua sisi",
            "lasted_two_days": "Nyeri berlangsung 2 hari atau lebih"
          }
        },
        "wrists_hands_fingers": {
          "label": "4. Pergelangan tangan, tangan, atau jari",
          "options": {
            "one_side": "Nyeri atau tidak nyaman di satu sisi tubuh",
            "both_sides": "Nyeri atau tidak nyaman di kedua sisi",
            "lasted_two_days": "Nyeri berlangsung 2 hari atau lebih"
          }
        },
        "lower_back": {
          "label": "5. Punggung bawah",
          "options": {
            "one_side": "Nyeri atau tidak nyaman di satu sisi tubuh",
            "both_sides": "Nyeri atau tidak nyaman di kedua sisi",
            "lasted_two_days": "Nyeri berlangsung 2 hari atau lebih"
          }
        },
        "hips_upper_legs": {
          "label": "6. Pinggul atau paha",
          "options": {
            "one_side": "Nyeri atau tidak nyaman di satu sisi tubuh",
            "both_sides": "Nyeri atau tidak nyaman di kedua sisi",
            "lasted_two_days": "Nyeri berlangsung 2 hari atau lebih"
          }
        },
        "knees_lower_legs": {
          "label": "7. Lutut atau tungkai bawah",
          "options": {
            "one_side": "Nyeri atau tidak nyaman di satu sisi tubuh",
            "both_sides": "Nyeri atau tidak nyaman di kedua sisi",
            "lasted_two_days": "Nyeri berlangsung 2 hari atau lebih"
          }
        },
        "ankles_feet": {
          "label": "8. Pergelangan kaki atau kaki",
          "options": {
            "one_side": "Nyeri atau tidak nyaman di satu sisi tubuh",
            "both_sides": "Nyeri atau tidak nyaman di kedua sisi",
            "lasted_two_days": "Nyeri berlangsung 2 hari atau lebih"
          }
        }
      }
    },
    "question-11": {
      "label": "Pikirkan hari kerja biasa atau bagian hari saat Anda melakukan tugas tertentu. Berapa lama Anda menyandarkan bagian tubuh pada benda atau tepi yang tajam?",
      "options": {
        "less_than_30_min": "Kurang dari 30 menit per hari",
        "30_min_to_1_hour": "30 menit hingga 1 jam per hari",
        "more_than_1_hour": "Lebih dari 1 jam per hari",
        "does_not_apply": "Tidak berlaku"
      }
    },
    "question-12": {
      "label": "Berapa lama Anda berlutut di permukaan keras atau kasar tanpa pelindung pribadi, misalnya tanpa bantalan lutut?",
      "options": {
        "less_than_30_min": "Kurang dari 30 menit per hari",
        "30_min_to_1_hour": "30 menit hingga 1 jam per hari",
        "more_than_1_hour": "Lebih dari 1 jam per hari",
        "does_not_apply": "Tidak berlaku"
      }
    },
    "question-13": {
      "label": "Pikirkan jenis alat atau benda yang Anda pegang lebih dari 30 menit sekaligus. Pilih semua pernyataan yang sesuai. Opsi terakhir tidak dapat dipilih jika opsi lain dicentang.",
      "options": {
        "poor_grip_size": "Terlalu besar atau kecil untuk digenggam dengan baik",
        "irregular_unbalanced": "Bentuk tidak teratur atau tidak seimbang",
        "sharp_handholds": "Pegangan terlalu tajam",
        "slippery": "Licin",
        "none": "Tidak satu pun di atas"
      }
    },
    "question-14": {
      "label": "Apakah Anda menggunakan bagian tubuh sebagai alat sementara untuk menyelesaikan pekerjaan?",
      "options": {
        "less_than_one_hour": "Ya, kurang dari 1 jam per hari",
        "more_than_one_hour": "Ya, lebih dari 1 jam per hari",
        "no": "Tidak"
      }
    },
    "question-15": {
      "label": "Pikirkan permukaan tempat Anda mendorong, menarik, atau memindahkan benda selama pekerjaan yang dinilai hari ini. Pilih semua deskripsi yang sesuai.",
      "options": {
        "smooth": "Halus",
        "soft": "Lunak, misalnya pasir, lumpur, rumput",
        "rough": "Kasar, misalnya kerikil, ubin, granit",
        "does_not_apply": "Tidak berlaku"
      }
    },
    "question-16": {
      "label": "Seberapa sering Anda mendorong, menarik, atau memindahkan benda yang Anda anggap berat tanpa alat bantu mekanis?",
      "options": {
        "most": "Sebagian besar waktu",
        "some": "Sebagian waktu",
        "never": "Tidak pernah"
      }
    },
    "question-17": {
      "label": "Seberapa berat alat atau benda yang Anda angkat, bawa, atau topang tanpa bantuan mekanis?",
      "options": {
        "less_than_5_lb": "Kurang dari 5 lb / 2 kg",
        "5_to_18_lb": "5 hingga 18 lb / 2 hingga 8 kg",
        "more_than_18_lb": "Lebih dari 18 lb / 8 kg",
        "does_not_apply": "Tidak berlaku"
      }
    },
    "question-18": {
      "label": "Apakah ada alat dan/atau peralatan yang Anda gunakan membutuhkan banyak gaya untuk dinyalakan?",
      "options": {
        "regularly": "Ya, beberapa alat atau peralatan yang saya gunakan secara rutin membutuhkan gaya",
        "occasionally": "Ya, beberapa alat atau peralatan yang saya gunakan sesekali membutuhkan gaya",
        "no": "Tidak"
      }
    },
    "question-19": {
      "label": "Saat mendorong dan/atau menarik benda yang Anda anggap berat, sejauh mana Anda menerima bantuan?",
      "options": {
        "great_extent": "Sangat besar",
        "some_extent": "Cukup",
        "do_not_ask": "Saya tidak meminta bantuan",
        "ask_but_no_assistance": "Saya meminta bantuan tetapi tidak menerimanya",
        "does_not_apply": "Tidak berlaku"
      }
    },
    "question-20": {
      "label": "Pikirkan hari kerja biasa atau bagian hari saat melakukan tugas. Saat duduk atau berdiri, seberapa sering Anda bekerja dengan tubuh bagian atas condong ke depan, belakang, atau samping?",
      "groups": {
        "forward_backward": {
          "label": "Saya condong ke depan atau belakang lebih dari 15 derajat",
          "options": {
            "most": "Sebagian besar waktu",
            "some": "Sebagian waktu",
            "never": "Tidak pernah"
          }
        },
        "sideways": {
          "label": "Saya condong ke samping",
          "options": {
            "most": "Sebagian besar waktu",
            "some": "Sebagian waktu",
            "never": "Tidak pernah"
          }
        }
      }
    },
    "question-21": {
      "label": "Saat melakukan aktivitas kerja, apakah Anda pernah memutar tubuh bagian atas ke samping tanpa mengubah posisi kaki?",
      "options": {
        "often": "Ya, saya sering melakukan ini saat bekerja",
        "sometimes": "Ya, saya kadang melakukan ini saat bekerja",
        "never": "Tidak pernah"
      }
    },
    "question-22": {
      "label": "Pikirkan hari kerja biasa. Saat duduk atau berdiri, tunjukkan letak tangan Anda terhadap tubuh.",
      "groups": {
        "hands_above_shoulders": {
          "label": "Tangan di atas bahu",
          "options": {
            "most": "Sebagian besar waktu",
            "some": "Sebagian waktu",
            "never": "Tidak pernah"
          }
        },
        "hands_floor_to_knee": {
          "label": "Tangan di antara lantai dan lutut",
          "options": {
            "most": "Sebagian besar waktu",
            "some": "Sebagian waktu",
            "never": "Tidak pernah"
          }
        }
      }
    },
    "question-23": {
      "label": "Apakah satu atau kedua lengan Anda pernah sepenuhnya terentang lurus ke depan saat melakukan pekerjaan atau tugas yang dinilai hari ini?",
      "options": {
        "frequently": "Sering",
        "sometimes": "Ya, saya kadang melakukan ini saat bekerja",
        "never": "Tidak pernah"
      }
    },
    "question-24": {
      "label": "Saat lengan terentang, apakah Anda pernah memegang alat atau memindahkan benda?",
      "options": {
        "less_than_5_lb": "Kurang dari 5 lb / 2 kg",
        "5_to_10_lb": "5 hingga 10 lb / 2 hingga 4,5 kg",
        "more_than_10_lb": "Lebih dari 10 lb / 4,5 kg",
        "no": "Tidak"
      }
    },
    "question-25": {
      "label": "Bagaimana posisi kepala Anda saat melakukan pekerjaan atau tugas yang dinilai hari ini?",
      "options": {
        "neutral": "Sering netral, tepat di antara bahu, dagu sejajar",
        "slight_tilt": "Sering miring ke atas atau bawah kurang dari 15 derajat",
        "deep_tilt": "Sering miring ke atas, bawah, atau samping lebih dari 15 derajat"
      }
    },
    "question-26": {
      "label": "Seberapa jauh biasanya Anda menekuk pergelangan tangan ke atas dan bawah? Gunakan gambar di bawah sebagai referensi.",
      "options": {
        "0_to_14": "Biasanya 0 hingga 14 derajat ke atas atau bawah",
        "15_to_30": "Biasanya 15 hingga 30 derajat",
        "more_than_30": "Biasanya lebih dari 30 derajat"
      }
    },
    "question-27": {
      "label": "Seberapa jauh Anda memiringkan pergelangan tangan dari sisi ke sisi?",
      "options": {
        "0_to_10": "Biasanya 0 hingga 10 derajat kiri atau kanan",
        "10_to_20": "Biasanya 10 hingga 20 derajat",
        "more_than_20": "Biasanya lebih dari 20 derajat"
      }
    },
    "question-28": {
      "label": "Apakah mungkin menjaga semua benda yang perlu Anda dorong, tarik, angkat, gunakan, dan sebagainya tetap dekat dengan tubuh?",
      "options": {
        "frequently": "Sering",
        "sometimes": "Ya, saya kadang melakukan ini saat bekerja",
        "never": "Tidak pernah"
      }
    },
    "question-29": {
      "label": "Pikirkan hari kerja biasa atau bagian hari saat melakukan tugas. Berapa lama Anda melakukan gerakan serupa berulang-ulang?",
      "options": {
        "less_than_30_min": "Kurang dari 30 menit per hari",
        "30_min_to_2_hours": "30 menit hingga 2 jam per hari",
        "2_to_4_hours": "2 hingga 4 jam per hari",
        "more_than_4_hours": "Lebih dari 4 jam per hari"
      }
    },
    "question-30": {
      "label": "Berapa lama Anda menekuk pergelangan tangan ke atas atau bawah lebih dari 15 derajat?",
      "options": {
        "less_than_1_hour": "Kurang dari 1 jam per hari",
        "1_to_2_hours": "1 hingga 2 jam per hari",
        "more_than_2_hours": "Lebih dari 2 jam per hari",
        "none": "Tidak satu pun di atas"
      }
    },
    "question-31": {
      "label": "Berapa lama Anda memiringkan pergelangan tangan lebih dari 15 derajat ke kiri atau kanan?",
      "options": {
        "less_than_1_hour": "Kurang dari 1 jam per hari",
        "1_to_2_hours": "1 hingga 2 jam per hari",
        "more_than_2_hours": "Lebih dari 2 jam per hari",
        "none": "Tidak satu pun di atas"
      }
    },
    "question-32": {
      "label": "Berapa lama Anda menggunakan pengerahan otot yang kuat, lebih dari 18 pon / 8 kg dengan kekuatan sendiri, saat menggunakan alat atau menangani benda?",
      "options": {
        "less_than_5_min": "Kurang dari 5 menit per hari",
        "5_to_25_min": "5 hingga 25 menit per hari",
        "30_min_to_2_5_hours": "30 menit hingga 2,5 jam per hari",
        "2_5_to_5_5_hours": "2,5 hingga 5,5 jam per hari",
        "more_than_5_5_hours": "Lebih dari 5,5 jam per hari"
      }
    },
    "question-33": {
      "label": "Saat menggenggam benda antara ibu jari dan ujung jari, itu disebut pinch grip. Berapa lama Anda menggunakan pinch grip untuk menahan benda lebih berat dari 2 pon / 1 kg?",
      "options": {
        "less_than_2_hours": "Kurang dari 2 jam per hari",
        "more_than_2_hours": "Lebih dari 2 jam per hari",
        "none": "Tidak satu pun di atas"
      }
    },
    "question-34": {
      "label": "Saat melingkarkan tangan di sekitar benda untuk memegangnya, itu disebut power grip. Berapa lama Anda menggunakan power grip untuk menahan benda lebih berat dari 10 pon / 4,5 kg?",
      "options": {
        "less_than_2_hours": "Kurang dari 2 jam per hari",
        "more_than_2_hours": "Lebih dari 2 jam per hari",
        "none": "Tidak satu pun di atas"
      }
    },
    "question-35": {
      "label": "Jika Anda menggunakan alat atau peralatan yang menyebabkan getaran pada sebagian atau seluruh tubuh, berapa lama Anda menggunakannya?",
      "options": {
        "less_than_1_hour": "Kurang dari 1 jam per hari",
        "1_to_4_hours": "1 hingga 4 jam per hari",
        "more_than_4_hours": "Lebih dari 4 jam per hari",
        "does_not_apply": "Tidak berlaku"
      }
    },
    "question-36": {
      "label": "Jika Anda mendorong atau menarik benda lebih berat dari 80 pon / 36 kg, berapa lama Anda memindahkannya di permukaan kasar atau lunak?",
      "options": {
        "less_than_5_min": "Kurang dari 5 menit per hari",
        "5_min_to_1_hour": "5 menit hingga 1 jam per hari",
        "more_than_1_hour": "Lebih dari 1 jam per hari",
        "does_not_apply": "Tidak berlaku"
      }
    },
    "question-37": {
      "label": "Pikirkan hari kerja biasa. Apakah Anda pernah terganggu oleh suara seperti sirene, pembicaraan keras, lalu lintas, dan sebagainya?",
      "options": {
        "frequently": "Sering",
        "sometimes": "Ya, saya kadang melakukan ini saat bekerja",
        "no": "Tidak"
      }
    },
    "question-38": {
      "label": "Apakah sinar matahari yang menyinari atau memantul ke mata, yaitu silau, memengaruhi Anda?",
      "options": {
        "frequently": "Sering",
        "sometimes": "Ya, saya kadang melakukan ini saat bekerja",
        "rarely": "Jarang",
        "never": "Tidak pernah"
      }
    },
    "question-39": {
      "label": "Jika pekerjaan Anda mengharuskan melihat detail halus atau membaca tulisan kecil, apakah Anda dapat melakukannya dengan mudah?",
      "options": {
        "frequently": "Sering",
        "sometimes": "Ya, saya kadang melakukan ini saat bekerja",
        "rarely": "Jarang",
        "never": "Tidak pernah",
        "does_not_apply": "Tidak berlaku"
      }
    },
    "question-40": {
      "label": "Jika Anda bekerja di lingkungan dingin, apakah Anda merasakan ketidaknyamanan pada lengan, punggung, kaki, jari tangan, dan/atau jari kaki?",
      "options": {
        "yes": "Ya",
        "no": "Tidak",
        "does_not_apply": "Tidak berlaku"
      }
    },
    "question-41": {
      "label": "Dengan mempertimbangkan persyaratan kerja, seberapa sering Anda diminta bekerja lembur selama satu jam atau lebih?",
      "options": {
        "frequently": "Sering",
        "sometimes": "Ya, saya kadang melakukan ini saat bekerja",
        "rarely": "Jarang",
        "never": "Tidak pernah"
      }
    },
    "question-42": {
      "label": "Seberapa sering Anda diminta bekerja dengan tenggat waktu ketat?",
      "options": {
        "frequently": "Sering",
        "sometimes": "Ya, saya kadang melakukan ini saat bekerja",
        "rarely": "Jarang",
        "never": "Tidak pernah"
      }
    }
  }
};
