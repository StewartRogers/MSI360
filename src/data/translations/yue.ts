import type { Translation } from "../../types";

const bodySideOptions = {
  one_side: "身體一邊疼痛或唔舒服，例如左邊或右邊",
  both_sides: "左右兩邊都有疼痛或唔舒服",
  lasted_two_days: "疼痛持續咗2日或以上"
};

const extentOptions = {
  great_extent: "好大程度",
  some_extent: "某程度上",
  rarely: "好少",
  not_at_all: "完全冇"
};

const mostSomeNeverOptions = {
  most: "大部分時間",
  some: "部分時間",
  never: "從來冇"
};

const frequencyOptions = {
  frequently: "經常",
  sometimes: "有時",
  rarely: "好少",
  never: "從來冇"
};

export const yue: Translation = {
  app: {
    title: "MSI360",
    disclosure: "原型：除非你選擇下載或分享報告，否則你嘅答案只會留喺呢個瀏覽器入面。",
    continue_button: "繼續",
    back_button: "返回",
    processing_button: "處理中",
    analyzing_button: "分析中",
    question_progress: "第 {current} 題，共 {total} 題",
    description_title: "說明",
    description_body:
      "以下問題係關於你喺一般工作日所做嘅工作，或者你今日想評估嘅特定任務或活動。目的係俾你話俾 MSI360 知，你為咗完成工作會做啲咩動作。"
  },
  sections: {
    intro: "關於工作",
    symptoms: "目前症狀",
    contact_stress: "接觸壓力",
    force: "用力",
    awkward_postures: "不良姿勢",
    repetition: "重複動作",
    environmental: "環境因素",
    organizational: "工作安排"
  },
  questions: {
    "question-1": {
      label: "你今日想評估嘅活動入面，你嘅角色係咩？",
      options: {
        worker: "員工",
        supervisor: "主管",
        manager: "經理",
        employer: "僱主",
        health_safety_committee: "健康及安全委員會成員"
      }
    },
    "question-2": {
      label: "你喺而家僱主度做呢個角色做咗幾耐？",
      options: {
        less_than_year: "少過一年",
        one_to_five: "1至5年",
        six_to_ten: "6至10年",
        more_than_ten: "超過10年"
      }
    },
    "question-3": {
      label: "你想評估邊項任務或工作活動？",
      help_text: "請簡短描述你想評估嘅特定任務或活動；如適用，請包括姿勢、不適、工作站人體工學同/或休息時間等資料。"
    },
    "question-4": {
      label: "請用以下選項指出你嘅身高：",
      options: {
        under_5_4: "低過5呎4吋（< 1.62米）",
        "5_4_to_5_9": "5呎4吋至5呎9吋（1.62米至1.75米）",
        "5_10_to_6_2": "5呎10吋至6呎2吋（1.76米至1.88米）",
        over_6_2: "高過6呎2吋（> 1.88米）",
        prefer_not_to_say: "唔想講"
      }
    },
    "question-5": {
      label: "你會點概括今次評估嘅工作或任務類型？",
      options: {
        office_clerical: "辦公室或文書（以枱面工作為主）工作或任務",
        not_desk_based: "唔係喺辦公室枱面為主",
        both_setups: "兩種情況都有"
      }
    },
    "question-6": {
      label: "你工作日通常係坐定企？",
      options: {
        mostly_sit: "我通常一日大部分時間都坐住",
        mostly_stand_move: "我通常一日大部分時間都企住或行動",
        sit_and_stand: "我一日之中會坐亦會企"
      }
    },
    "question-7": {
      label: "喺購買工具或設備之前，你嘅僱主或主管有幾多程度會徵求你嘅意見？",
      options: extentOptions
    },
    "question-8": {
      label: "你嘅僱主或主管有幾多程度會徵求你對工作應該點安排同/或點執行嘅意見？",
      options: extentOptions
    },
    "question-9": {
      label: "過去7日，你有冇試過同工作有關嘅疼痛或不適？",
      options: {
        yes: "有",
        no: "冇"
      }
    },
    "question-10": {
      label:
        "請用下面表格指出，喺做緊或做完今次評估嘅工作或任務期間，你邊啲身體部位有同工作有關嘅疼痛或不適。\n\n請指出 a) 身體一邊或兩邊有冇受影響，以及 b) 疼痛有冇持續2日或以上。",
      groups: {
        neck: { label: "1. 頸", options: bodySideOptions },
        shoulders_upper_arms: { label: "2. 肩膀或上臂", options: bodySideOptions },
        elbows_forearms: { label: "3. 手肘或前臂", options: bodySideOptions },
        wrists_hands_fingers: { label: "4. 手腕、手或手指", options: bodySideOptions },
        lower_back: { label: "5. 下背", options: bodySideOptions },
        hips_upper_legs: { label: "6. 髖部或大腿", options: bodySideOptions },
        knees_lower_legs: { label: "7. 膝頭或小腿", options: bodySideOptions },
        ankles_feet: { label: "8. 腳踝或腳", options: bodySideOptions }
      }
    },
    "question-11": {
      label:
        "諗一諗一般工作日，或者如果你評估緊特定任務或活動，就諗你做嗰項任務嗰段工作時間。你有幾多時間會將身體某部分靠住或壓喺尖銳物件或邊緣上？",
      options: {
        less_than_30_min: "每日少過30分鐘",
        "30_min_to_1_hour": "每日30分鐘至1小時",
        more_than_1_hour: "每日超過1小時",
        does_not_apply: "我工作時唔會靠住尖銳物件或邊緣"
      }
    },
    "question-12": {
      label: "你有幾多時間會喺冇個人防護（例如冇護膝）嘅情況下跪喺硬或粗糙表面上？",
      options: {
        less_than_30_min: "每日少過30分鐘",
        "30_min_to_1_hour": "每日30分鐘至1小時之間",
        more_than_1_hour: "每日超過1小時",
        does_not_apply: "我工作時唔會冇防護跪喺硬表面上"
      }
    },
    "question-13": {
      label:
        "請諗一諗你一次會握住超過30分鐘嘅工具或物件種類。請由以下描述中揀晒所有適用項。\n\n如果已經剔選任何其他選項，就唔可以揀最後一個選項。",
      options: {
        poor_grip_size: "太大或太細，唔容易正確握實",
        irregular_unbalanced: "形狀唔規則或唔平衡",
        sharp_handholds: "手握位置太尖銳",
        slippery: "容易跣手",
        none: "以上都唔係"
      }
    },
    "question-14": {
      label:
        "你會唔會用身體某個部位當臨時工具去完成工作？例如，你可能會用手掌或膝頭向某個表面施力。\n\n下面插圖係用身體做呢種動作嘅例子。",
      options: {
        less_than_one_hour: "會，每日少過1小時",
        more_than_one_hour: "會，每日超過1小時",
        no: "唔會，我工作時唔會用身體當臨時工具"
      }
    },
    "question-15": {
      label:
        "諗一諗你今日評估嘅工作、任務或工作活動入面，需要推、拉或移動物件經過嘅表面類型。請由以下描述中揀晒所有適用項。",
      options: {
        smooth: "光滑（例如已完成加工嘅表面）",
        soft: "柔軟（例如沙、泥、草地）",
        rough: "粗糙（例如碎石、瓷磚、花崗岩）",
        does_not_apply: "我唔需要喺任何表面上推或拉物件嚟完成工作"
      }
    },
    "question-16": {
      label: "你幾常會喺冇機械輔助（例如手推車或搬運車）嘅情況下推、拉或移動你認為重嘅物件？",
      options: mostSomeNeverOptions
    },
    "question-17": {
      label: "你喺冇機械協助嘅情況下拿起、搬運或支撐嘅工具或物件有幾重？",
      options: {
        less_than_5_lb: "少過5磅 / 2公斤",
        "5_to_18_lb": "5至18磅 / 2至8公斤",
        more_than_18_lb: "超過18磅 / 8公斤",
        does_not_apply: "我工作時唔會拿起、搬運或支撐任何工具或物件"
      }
    },
    "question-18": {
      label: "你使用嘅任何工具同/或設備，啟動時係咪需要好大力？例如要用力拉繩嘅割草機，或者要用力踩落去嘅踏板。",
      options: {
        regularly: "係，我經常使用嘅至少部分工具或設備需要用力",
        occasionally: "係，我偶爾使用嘅至少部分工具或設備需要用力",
        no: "唔係，我使用嘅工具或設備啟動時唔需要用力"
      }
    },
    "question-19": {
      label: "當你推同/或拉你認為重嘅物件時，你有幾多程度得到協助（例如同事幫手，或使用搬運車/手推車）？",
      options: {
        great_extent: "好大程度",
        some_extent: "某程度上",
        do_not_ask: "我唔會要求協助",
        ask_but_no_assistance: "我有要求協助，但冇得到協助",
        does_not_apply: "我工作日唔會推或拉呢類物件"
      }
    },
    "question-20": {
      label:
        "諗一諗一般工作日，或者如果你評估緊特定任務或活動，就諗你做嗰項任務嗰段工作時間。坐住或企住時，你幾常會上身向前、向後或向側邊傾嚟工作？\n\n請選擇適用於你嘅選項。",
      groups: {
        forward_backward: { label: "我向前或向後傾超過15度", options: mostSomeNeverOptions },
        sideways: { label: "我向側邊傾", options: mostSomeNeverOptions }
      }
    },
    "question-21": {
      label: "做工作活動時，你會唔會坐住或企住而唔郁腳位，將上身扭向任何一邊？",
      options: {
        often: "會，我工作、任務或活動中經常咁做",
        sometimes: "會，我工作、任務或活動中有時咁做",
        never: "唔會，我工作時從來唔會扭轉上身"
      }
    },
    "question-22": {
      label:
        "諗一諗一般工作日，或者如果你評估緊特定任務或活動，就諗你做嗰項任務嗰段工作時間。坐住或企住時，請指出你雙手相對身體嘅位置。\n\n請選擇適用於你嘅選項。",
      groups: {
        hands_above_shoulders: { label: "雙手高過肩膀", options: mostSomeNeverOptions },
        hands_floor_to_knee: { label: "雙手喺地面同膝頭之間", options: mostSomeNeverOptions }
      }
    },
    "question-23": {
      label: "做你今日評估嘅工作、任務或工作活動時，你一隻或兩隻手臂會唔會完全向前伸直？",
      options: {
        frequently: "會，我做工作、任務或工作活動時手臂經常完全向前伸直",
        sometimes: "會，我做工作、任務或工作活動時手臂有時完全向前伸直",
        never: "唔會，我做工作、任務或工作活動時手臂從來唔會完全向前伸直"
      }
    },
    "question-24": {
      label: "當你手臂伸出去時，你會唔會握住工具或移動物件？",
      options: {
        less_than_5_lb: "會，而且通常少過5磅 / 2公斤",
        "5_to_10_lb": "會，而且通常係5至10磅 / 2至4.5公斤",
        more_than_10_lb: "會，而且通常超過10磅 / 4.5公斤",
        no: "唔會，我手臂伸出去時唔會握工具或物件"
      }
    },
    "question-25": {
      label: "做你今日評估嘅工作、任務或工作活動時，你嘅頭部位置係點？",
      options: {
        neutral: "通常係中立位置（喺雙肩之間；下巴水平）",
        slight_tilt: "通常向上或向下傾少過15度",
        deep_tilt: "通常向上、向下或向側邊傾超過15度"
      }
    },
    "question-26": {
      label: "你通常會將手腕向上同向下屈曲幾多？請參考下面圖片。",
      options: {
        "0_to_14": "通常向上或向下0至14度",
        "15_to_30": "通常15至30度",
        more_than_30: "通常超過30度"
      }
    },
    "question-27": {
      label: "你會將手腕左右偏斜幾多？",
      options: {
        "0_to_10": "通常向左或向右0至10度",
        "10_to_20": "通常10至20度",
        more_than_20: "通常超過20度"
      }
    },
    "question-28": {
      label: "你係咪可以將所有需要推、拉、提起、使用等等嘅物件保持喺貼近身體嘅位置？",
      options: {
        frequently: "可以，經常",
        sometimes: "可以，有時",
        never: "唔可以，從來冇"
      }
    },
    "question-29": {
      label:
        "諗一諗一般工作日，或者如果你評估緊特定任務或活動，就諗你做嗰項任務嗰段工作時間。你有幾多時間會重複又重複做相似動作？",
      options: {
        less_than_30_min: "每日少過30分鐘",
        "30_min_to_2_hours": "每日30分鐘至2小時",
        "2_to_4_hours": "每日2至4小時",
        more_than_4_hours: "每日超過4小時"
      }
    },
    "question-30": {
      label: "你有幾多時間會將手腕向上或向下屈曲超過15度？請參考下面圖片。",
      options: {
        less_than_1_hour: "每日少過1小時",
        "1_to_2_hours": "每日1至2小時",
        more_than_2_hours: "每日超過2小時",
        none: "完全冇"
      }
    },
    "question-31": {
      label: "你有幾多時間會將手腕向左或向右偏斜超過15度？請參考下面圖片。",
      options: {
        less_than_1_hour: "每日少過1小時",
        "1_to_2_hours": "每日1至2小時",
        more_than_2_hours: "每日超過2小時",
        none: "完全冇"
      }
    },
    "question-32": {
      label: "使用工具或處理物件時，你有幾多時間會用自己力量作出強力肌肉用力（超過18磅 / 8公斤）？",
      options: {
        less_than_5_min: "每日少過5分鐘",
        "5_to_25_min": "每日5至25分鐘",
        "30_min_to_2_5_hours": "每日30分鐘至2.5小時",
        "2_5_to_5_5_hours": "每日2.5至5.5小時",
        more_than_5_5_hours: "每日超過5.5小時"
      }
    },
    "question-33": {
      label:
        "當你用拇指同指尖夾住物件，呢個叫捏握。做你今日評估嘅工作、任務或工作活動時，你有幾多時間會用捏握方式握住超過2磅 / 1公斤嘅物件？",
      options: {
        less_than_2_hours: "每日少過2小時",
        more_than_2_hours: "每日超過2小時",
        none: "完全冇"
      }
    },
    "question-34": {
      label: "當你用手包住物件嚟握住，呢個叫強力握持。你有幾多時間會用強力握持方式握住超過10磅 / 4.5公斤嘅物件？",
      options: {
        less_than_2_hours: "每日少過2小時",
        more_than_2_hours: "每日超過2小時",
        none: "完全冇"
      }
    },
    "question-35": {
      label: "如果你使用會令身體部分或全身震動嘅工具或設備，你有幾多時間會使用呢啲工具？",
      options: {
        less_than_1_hour: "每日少過1小時",
        "1_to_4_hours": "每日1至4小時",
        more_than_4_hours: "每日超過4小時",
        does_not_apply: "我唔會使用呢類工具或設備"
      }
    },
    "question-36": {
      label: "如果你推或拉超過80磅 / 36公斤嘅物件，你有幾多時間會喺粗糙表面（例如碎石、瓷磚或不平地面）或柔軟表面（例如沙、泥或草地）上移動呢啲物件？",
      options: {
        less_than_5_min: "每日少過5分鐘",
        "5_min_to_1_hour": "每日5分鐘至1小時",
        more_than_1_hour: "每日超過1小時",
        does_not_apply: "我唔會喺粗糙或柔軟表面上移動呢類物件"
      }
    },
    "question-37": {
      label:
        "諗一諗一般工作日，或者如果你評估緊特定任務或活動，就諗你做嗰項任務嗰段工作時間。你會唔會俾噪音分散注意力（警號、大聲講嘢、交通聲等等）？",
      options: {
        frequently: "經常",
        sometimes: "有時",
        no: "唔會"
      }
    },
    "question-38": {
      label: "你會唔會受太陽直射或反光入眼（即眩光）影響？",
      options: frequencyOptions
    },
    "question-39": {
      label: "如果你嘅工作需要睇細節或讀細字，你係咪可以輕易做到？",
      options: {
        ...frequencyOptions,
        does_not_apply: "我嘅工作唔需要咁做"
      }
    },
    "question-40": {
      label: "如果你喺寒冷環境工作，你嘅手臂、背、腳、手指同/或腳趾會唔會唔舒服？",
      options: {
        yes: "會",
        no: "唔會",
        does_not_apply: "我唔喺寒冷環境工作"
      }
    },
    "question-41": {
      label: "考慮到你嘅工作要求，你幾常會被要求加班一小時或更耐？",
      options: frequencyOptions
    },
    "question-42": {
      label: "你幾常會被要求喺緊迫限期內完成工作？",
      options: frequencyOptions
    }
  }
};
