import type { Translation } from "../../types";

export const nan: Translation = {
  app: {
    title: "MSI360",
    disclosure: "原型：除非你選擇下載或分享報告，答案會留佇這个瀏覽器內。",
    continue_button: "繼續",
    back_button: "倒轉",
    processing_button: "處理中",
    analyzing_button: "分析中",
    question_progress: "第 {current} 題，共 {total} 題",
    score_summary_title: "你的 MSI 風險摘要",
    score_overall_risk: "整體 MSI 風險",
    score_download_report: "下載報告",
    score_not_available: "N/A",
    score_out_of_4: "{score} / 4",
    score_risk_not_enough: "資料無夠",
    score_risk_low: "低風險",
    score_risk_possible: "可能風險",
    score_risk_likely: "較可能風險",
    score_risk_known: "已知風險",
    score_factor_not_enough: "資料無夠，袂當判讀 {factor}。",
    score_factor_low: "目前和 {factor} 相關的風險較低。",
    score_factor_possible: "{factor} 可能造成不適風險。",
    score_factor_likely: "{factor} 較可能造成不適風險。",
    score_factor_known: "有疼痛和/或受傷的已知風險。",
    score_psychosocial_note: "心理社會因素對整體 MSI 風險分數有負面影響（{multiplier}）。",
    score_subject_contact_stress: "接觸壓力",
    score_subject_force: "力量",
    score_subject_awkward_postures: "彆扭姿勢",
    score_subject_repetition: "重複動作",
    score_subject_environmental: "環境因素",
    wrap_email_copy: "電郵副本",
    wrap_review_results: "查看結果",
    wrap_submit_report: "提交報告",
    email_title: "用電郵收報告",
    email_body: "若你欲收著這份報告副本，請輸入電郵地址。這可能需要最多 15 分鐘。若收件匣看無，請檢查垃圾郵件。",
    email_next_body: "你會佇下一頁看著最終報告。",
    email_address_label: "電郵地址",
    report_ready_title: "你的報告已經準備好",
    report_card_title: "MSI 風險報告",
    report_date_label: "日期",
    report_task_label: "已分析的工作/任務：",
    report_overall_score_label: "整體分數：",
    report_highest_risk: "最高風險類別：",
    report_no_scored_categories: "目前猶未有已評分的風險類別",
    report_email_copy_requested: "已要求寄送電郵副本到 {email}。",
    report_download_pdf: "下載 PDF",
    report_email_report: "用電郵寄報告",
    report_done: "完成",
    submit_title: "你欲閣完成另一份 ErgoCheck 評估嗎？",
    submit_option_reuse: "欲，我欲用原本提供的資料完成另一份報告，並按需要修改。",
    submit_option_restart: "欲，我欲用新資料重新開始",
    submit_option_no: "毋，這馬毋免",
    submit_copy: "多謝，請按下面的按鈕完成問卷。",
    submit_button: "提交",
    complete_title: "多謝你完成 MSI 360 問卷",
    complete_body: "你的回答有助找出工作場所內和 MSI 相關的危害，並幫助大家有較安全的工作環境。",
    complete_next_steps_title: "下一步：",
    complete_next_step_review: "查看你的報告和建議",
    complete_next_step_share: "若合適，和主管分享結果",
    complete_next_step_visit: "到 worksafebc.com 看更多資源",
    complete_start_new: "開始新評估",
    description_title: "說明",
    description_body: "下面的問題是關於你平常工作日做的工作，或你今日欲評估的特定任務或活動。目的就是予你向 MSI360 說明你為完成工作所做的動作。",
    ai_loading_task_description: "咧分析你的工作描述...",
    ai_task_analysis_fallback_toast: "AI 工作分析回應逾時。改用本機備援。",
    ai_question_pruning_fallback_toast: "AI 問題篩選回應逾時。改用備援追問問題。",
    ai_fallback_toast_dismiss: "關閉 AI 備援通知"
  },
  sections: {
    intro: "關於工作",
    symptoms: "目前症狀",
    contact_stress: "接觸壓力",
    force: "力量",
    awkward_postures: "彆扭姿勢",
    repetition: "重複動作",
    environmental: "環境因素",
    organizational: "工作安排"
  },
  questions: {
    "question-1": {
      label: "你今日欲評估的活動中，你的角色是啥物？",
      options: {
        worker: "工作者",
        supervisor: "主管",
        manager: "經理",
        employer: "雇主",
        health_safety_committee: "職安委員會成員"
      }
    },
    "question-2": {
      label: "你佇目前雇主這个角色做偌久矣？",
      options: {
        less_than_year: "未滿一年",
        one_to_five: "1 至 5 年",
        six_to_ten: "6 至 10 年",
        more_than_ten: "超過 10 年"
      }
    },
    "question-3": {
      label: "你欲評估的任務或工作活動是啥物？",
      help_text: "請簡短描述你欲評估的特定任務或活動；若適用，包含姿勢、不適、工作站人體工學和/或休息時間。"
    },
    "question-4": {
      label: "請用下面選項表示你的身高：",
      options: {
        under_5_4: "低於 5'4\"（< 1.62 m）",
        "5_4_to_5_9": "5'4\" - 5'9\"（1.62 m - 1.75 m）",
        "5_10_to_6_2": "5'10\" - 6'2\"（1.76 m - 1.88 m）",
        over_6_2: "超過 6'2\"（> 1.88 m）",
        prefer_not_to_say: "不想回答"
      }
    },
    // skipping this question for now, as it was made redundant by the task_description question.
    // we're leaving this in the code in case it is used in the future
    "question-5": {
      label: "你會按怎概述這个工作或任務類型？",
      options: {
        office_clerical: "辦公室或文書（桌面）工作/任務",
        not_desk_based: "不是辦公室桌面工作",
        both_setups: "兩者都有"
      }
    },
    "question-6": {
      label: "你工作日通常是坐咧抑是徛咧？",
      options: {
        mostly_sit: "我通常大部分時間坐著",
        mostly_stand_move: "我通常大部分時間徛著或走動",
        sit_and_stand: "我一日中坐和徛都有"
      }
    },
    "question-7": {
      label: "購買工具或設備前，雇主或主管會徵詢你的意見到啥物程度？",
      options: {
        great_extent: "很大程度",
        some_extent: "某程度",
        rarely: "少有",
        not_at_all: "完全無"
      }
    },
    "question-8": {
      label: "雇主或主管會徵詢你對工作應如何安排和/或執行的意見到啥物程度？",
      options: {
        great_extent: "很大程度",
        some_extent: "某程度",
        rarely: "少有",
        not_at_all: "完全無"
      }
    },
    "question-9": {
      label: "過去 7 日，你有無和工作相關的疼痛或不適？",
      options: {
        yes: "有",
        no: "無"
      }
    },
    "question-10": {
      label: "請用下面表格指出你佇做這个工作或任務時/後，身體佗位有工作相關疼痛或不適；也請指出是單邊抑雙邊，以及疼痛是否持續 2 日以上。",
      groups: {
        neck: {
          label: "1. 頷頸",
          options: {
            one_side: "身體單邊疼痛或不適",
            both_sides: "左右兩邊都有疼痛或不適",
            lasted_two_days: "疼痛持續 2 日或以上"
          }
        },
        shoulders_upper_arms: {
          label: "2. 肩膀或上臂",
          options: {
            one_side: "身體單邊疼痛或不適",
            both_sides: "左右兩邊都有疼痛或不適",
            lasted_two_days: "疼痛持續 2 日或以上"
          }
        },
        elbows_forearms: {
          label: "3. 手肘或前臂",
          options: {
            one_side: "身體單邊疼痛或不適",
            both_sides: "左右兩邊都有疼痛或不適",
            lasted_two_days: "疼痛持續 2 日或以上"
          }
        },
        wrists_hands_fingers: {
          label: "4. 手腕、手或手指",
          options: {
            one_side: "身體單邊疼痛或不適",
            both_sides: "左右兩邊都有疼痛或不適",
            lasted_two_days: "疼痛持續 2 日或以上"
          }
        },
        lower_back: {
          label: "5. 下背",
          options: {
            one_side: "身體單邊疼痛或不適",
            both_sides: "左右兩邊都有疼痛或不適",
            lasted_two_days: "疼痛持續 2 日或以上"
          }
        },
        hips_upper_legs: {
          label: "6. 臀部或大腿",
          options: {
            one_side: "身體單邊疼痛或不適",
            both_sides: "左右兩邊都有疼痛或不適",
            lasted_two_days: "疼痛持續 2 日或以上"
          }
        },
        knees_lower_legs: {
          label: "7. 膝頭或小腿",
          options: {
            one_side: "身體單邊疼痛或不適",
            both_sides: "左右兩邊都有疼痛或不適",
            lasted_two_days: "疼痛持續 2 日或以上"
          }
        },
        ankles_feet: {
          label: "8. 腳踝或腳",
          options: {
            one_side: "身體單邊疼痛或不適",
            both_sides: "左右兩邊都有疼痛或不適",
            lasted_two_days: "疼痛持續 2 日或以上"
          }
        }
      }
    },
    "question-11": {
      label: "想一個平常工作日，或做這項任務的時段。你花偌濟時間將身體一部分倚或靠佇尖銳物件或邊緣？",
      options: {
        less_than_30_min: "每日少於 30 分鐘",
        "30_min_to_1_hour": "每日 30 分鐘至 1 小時",
        more_than_1_hour: "每日超過 1 小時",
        does_not_apply: "不適用"
      }
    },
    "question-12": {
      label: "你花偌濟時間無個人防護（例如無護膝）跪佇硬或粗糙表面？",
      options: {
        less_than_30_min: "每日少於 30 分鐘",
        "30_min_to_1_hour": "每日 30 分鐘至 1 小時",
        more_than_1_hour: "每日超過 1 小時",
        does_not_apply: "不適用"
      }
    },
    "question-13": {
      label: "想你一次握超過 30 分鐘的工具或物件。請選出所有適用的描述。若選其他項，最後一項袂當選。",
      options: {
        poor_grip_size: "太大或太細，袂好握",
        irregular_unbalanced: "形狀不規則或不平衡",
        sharp_handholds: "握把太尖銳",
        slippery: "會滑",
        none: "完全無"
      }
    },
    "question-14": {
      label: "你有用身體某部分當臨時工具完成工作嗎？例如用手掌或膝頭對表面施力。",
      options: {
        less_than_one_hour: "有，每日少於 1 小時",
        more_than_one_hour: "有，每日超過 1 小時",
        no: "無"
      }
    },
    "question-15": {
      label: "想你今日評估的工作中推、拉或移動物件經過的表面。請選出所有適用描述。",
      options: {
        smooth: "平滑表面",
        soft: "柔軟表面，例如沙、泥、草",
        rough: "粗糙表面，例如碎石、磁磚、花崗石",
        does_not_apply: "不適用"
      }
    },
    "question-16": {
      label: "你偌常無機械輔助去推、拉或移動你認為重的物件？",
      options: {
        most: "大部分時間",
        some: "部分時間",
        never: "從未"
      }
    },
    "question-17": {
      label: "你無機械輔助時拿起、搬運或支撐的工具或物件有偌重？",
      options: {
        less_than_5_lb: "少於 5 磅 / 2 公斤",
        "5_to_18_lb": "5 至 18 磅 / 2 至 8 公斤",
        more_than_18_lb: "超過 18 磅 / 8 公斤",
        does_not_apply: "不適用"
      }
    },
    "question-18": {
      label: "你使用的工具和/或設備，有需要真大力才會啟動的嗎？",
      options: {
        regularly: "有，經常使用的工具或設備至少有一些需要用力",
        occasionally: "有，偶爾使用的工具或設備至少有一些需要用力",
        no: "無"
      }
    },
    "question-19": {
      label: "推和/或拉重物時，你得到協助的程度如何？",
      options: {
        great_extent: "很大程度",
        some_extent: "某程度",
        do_not_ask: "我無要求協助",
        ask_but_no_assistance: "我有要求但無得到協助",
        does_not_apply: "不適用"
      }
    },
    "question-20": {
      label: "想平常工作日，坐著或徛著時，你偌常上半身向前、向後或向側邊傾斜？",
      groups: {
        forward_backward: {
          label: "我向前或向後傾斜超過 15 度",
          options: {
            most: "大部分時間",
            some: "部分時間",
            never: "從未"
          }
        },
        sideways: {
          label: "我向側邊傾斜",
          options: {
            most: "大部分時間",
            some: "部分時間",
            never: "從未"
          }
        }
      }
    },
    "question-21": {
      label: "工作時，你會無移動腳的位置，就將上半身扭向一邊嗎？",
      options: {
        often: "有，我工作時常常這樣做",
        sometimes: "有，我工作時有時這樣做",
        never: "從未"
      }
    },
    "question-22": {
      label: "想平常工作日，坐著或徛著時，請指出你的手相對身體的位置。",
      groups: {
        hands_above_shoulders: {
          label: "手高過肩膀",
          options: {
            most: "大部分時間",
            some: "部分時間",
            never: "從未"
          }
        },
        hands_floor_to_knee: {
          label: "手佇地面和膝頭之間",
          options: {
            most: "大部分時間",
            some: "部分時間",
            never: "從未"
          }
        }
      }
    },
    "question-23": {
      label: "做今日評估的工作時，你一隻或兩隻手臂會完全向前伸直嗎？",
      options: {
        frequently: "經常",
        sometimes: "有，我工作時有時這樣做",
        never: "從未"
      }
    },
    "question-24": {
      label: "手臂伸出去時，你會拿工具或移動物件嗎？",
      options: {
        less_than_5_lb: "少於 5 磅 / 2 公斤",
        "5_to_10_lb": "5 至 10 磅 / 2 至 4.5 公斤",
        more_than_10_lb: "超過 10 磅 / 4.5 公斤",
        no: "無"
      }
    },
    "question-25": {
      label: "做今日評估的工作時，你的頭部位置如何？",
      options: {
        neutral: "通常中立，頭佇肩膀中間，下巴水平",
        slight_tilt: "通常上下傾斜少於 15 度",
        deep_tilt: "通常上下或側邊傾斜超過 15 度"
      }
    },
    "question-26": {
      label: "你通常手腕向上或向下彎偌濟？請參考下面圖片。",
      options: {
        "0_to_14": "通常上下 0 至 14 度",
        "15_to_30": "通常 15 至 30 度",
        more_than_30: "通常超過 30 度"
      }
    },
    "question-27": {
      label: "你的手腕通常向左或向右偏偌濟？",
      options: {
        "0_to_10": "通常左右 0 至 10 度",
        "10_to_20": "通常 10 至 20 度",
        more_than_20: "通常超過 20 度"
      }
    },
    "question-28": {
      label: "你需要推、拉、抬、使用等的所有物件，是否可能保持靠近身體？",
      options: {
        frequently: "經常",
        sometimes: "有，我工作時有時這樣做",
        never: "從未"
      }
    },
    "question-29": {
      label: "想平常工作日或任務時段。你花偌濟時間一再做相似動作？",
      options: {
        less_than_30_min: "每日少於 30 分鐘",
        "30_min_to_2_hours": "每日 30 分鐘至 2 小時",
        "2_to_4_hours": "每日 2 至 4 小時",
        more_than_4_hours: "每日超過 4 小時"
      }
    },
    "question-30": {
      label: "你花偌濟時間將手腕向上或向下彎超過 15 度？",
      options: {
        less_than_1_hour: "每日少於 1 小時",
        "1_to_2_hours": "每日 1 至 2 小時",
        more_than_2_hours: "每日超過 2 小時",
        none: "完全無"
      }
    },
    "question-31": {
      label: "你花偌濟時間將手腕向左或向右偏超過 15 度？",
      options: {
        less_than_1_hour: "每日少於 1 小時",
        "1_to_2_hours": "每日 1 至 2 小時",
        more_than_2_hours: "每日超過 2 小時",
        none: "完全無"
      }
    },
    "question-32": {
      label: "使用工具或處理物件時，你花偌濟時間用很大的肌力（超過 18 磅/8 公斤）？",
      options: {
        less_than_5_min: "每日少於 5 分鐘",
        "5_to_25_min": "每日 5 至 25 分鐘",
        "30_min_to_2_5_hours": "每日 30 分鐘至 2.5 小時",
        "2_5_to_5_5_hours": "每日 2.5 至 5.5 小時",
        more_than_5_5_hours: "每日超過 5.5 小時"
      }
    },
    "question-33": {
      label: "用拇指和指尖夾住物件叫做捏握。你花偌濟時間用捏握拿超過 2 磅/1 公斤的物件？",
      options: {
        less_than_2_hours: "每日少於 2 小時",
        more_than_2_hours: "每日超過 2 小時",
        none: "完全無"
      }
    },
    "question-34": {
      label: "用手包住物件叫做力量握。你花偌濟時間用力量握拿超過 10 磅/4.5 公斤的物件？",
      options: {
        less_than_2_hours: "每日少於 2 小時",
        more_than_2_hours: "每日超過 2 小時",
        none: "完全無"
      }
    },
    "question-35": {
      label: "若你使用會造成身體部分或全身震動的工具或設備，你花偌濟時間使用？",
      options: {
        less_than_1_hour: "每日少於 1 小時",
        "1_to_4_hours": "每日 1 至 4 小時",
        more_than_4_hours: "每日超過 4 小時",
        does_not_apply: "不適用"
      }
    },
    "question-36": {
      label: "若你推或拉超過 80 磅/36 公斤的物件，花偌濟時間將它們移過粗糙或柔軟表面？",
      options: {
        less_than_5_min: "每日少於 5 分鐘",
        "5_min_to_1_hour": "每日 5 分鐘至 1 小時",
        more_than_1_hour: "每日超過 1 小時",
        does_not_apply: "不適用"
      }
    },
    "question-37": {
      label: "想平常工作日或任務時段。你會受噪音分心嗎，例如警報、吵雜談話、交通聲等？",
      options: {
        frequently: "經常",
        sometimes: "有，我工作時有時這樣做",
        no: "無"
      }
    },
    "question-38": {
      label: "日光照入或反射入眼睛（眩光）會影響你嗎？",
      options: {
        frequently: "經常",
        sometimes: "有，我工作時有時這樣做",
        rarely: "少有",
        never: "從未"
      }
    },
    "question-39": {
      label: "若工作需要看細節或讀小字，你做得到容易嗎？",
      options: {
        frequently: "經常",
        sometimes: "有，我工作時有時這樣做",
        rarely: "少有",
        never: "從未",
        does_not_apply: "不適用"
      }
    },
    "question-40": {
      label: "若你在寒冷環境工作，手臂、背、腳、手指和/或腳趾會不舒服嗎？",
      options: {
        yes: "有",
        no: "無",
        does_not_apply: "不適用"
      }
    },
    "question-41": {
      label: "按你的工作要求，你偌常被要求加班一小時或以上？",
      options: {
        frequently: "經常",
        sometimes: "有，我工作時有時這樣做",
        rarely: "少有",
        never: "從未"
      }
    },
    "question-42": {
      label: "你偌常被要求趕很緊的期限？",
      options: {
        frequently: "經常",
        sometimes: "有，我工作時有時這樣做",
        rarely: "少有",
        never: "從未"
      }
    }
  }
};
