import type { Translation } from "../../types";

const bodySideOptions = {
  one_side: "身体一侧疼痛或不适，例如左侧或右侧",
  both_sides: "左右两侧都有疼痛或不适",
  lasted_two_days: "疼痛持续了2天或更久"
};

const extentOptions = {
  great_extent: "很大程度上",
  some_extent: "一定程度上",
  rarely: "很少",
  not_at_all: "完全没有"
};

const mostSomeNeverOptions = {
  most: "大部分时间",
  some: "部分时间",
  never: "从不"
};

const frequencyOptions = {
  frequently: "经常",
  sometimes: "有时",
  rarely: "很少",
  never: "从不"
};

export const zhHans: Translation = {
  app: {
    title: "MSI360",
    disclosure: "原型：除非你选择下载或分享报告，否则你的回答会保留在此浏览器中。",
    continue_button: "继续",
    back_button: "返回",
    processing_button: "处理中",
    analyzing_button: "分析中",
    question_progress: "第 {current} 题，共 {total} 题",
    description_title: "说明",
    description_body:
      "以下问题与你在典型工作日所做的工作有关，或与你今天想评估的特定任务或活动有关。目的是让你告诉 MSI360 你为完成工作所进行的动作。"
  },
  sections: {
    intro: "关于工作",
    symptoms: "当前症状",
    contact_stress: "接触压力",
    force: "用力",
    awkward_postures: "不良姿势",
    repetition: "重复动作",
    environmental: "环境因素",
    organizational: "工作组织"
  },
  questions: {
    "question-1": {
      label: "在你今天想评估的活动中，你的角色是什么？",
      options: {
        worker: "员工",
        supervisor: "主管",
        manager: "经理",
        employer: "雇主",
        health_safety_committee: "健康与安全委员会成员"
      }
    },
    "question-2": {
      label: "你在当前雇主处担任这个角色多久了？",
      options: {
        less_than_year: "少于一年",
        one_to_five: "1至5年",
        six_to_ten: "6至10年",
        more_than_ten: "超过10年"
      }
    },
    "question-3": {
      label: "你想评估哪项任务或工作活动？",
      help_text: "请简要描述你想评估的具体任务或活动，并在适用时包括姿势、不适、工作站人体工学和/或休息时长等细节。"
    },
    "question-4": {
      label: "请使用以下选项说明你的身高：",
      options: {
        under_5_4: "低于5英尺4英寸（< 1.62米）",
        "5_4_to_5_9": "5英尺4英寸至5英尺9英寸（1.62米至1.75米）",
        "5_10_to_6_2": "5英尺10英寸至6英尺2英寸（1.76米至1.88米）",
        over_6_2: "高于6英尺2英寸（> 1.88米）",
        prefer_not_to_say: "不愿回答"
      }
    },
    "question-5": {
      label: "你会如何概括正在评估的工作或任务类型？",
      options: {
        office_clerical: "办公室或文书类、以办公桌为主的工作或任务",
        not_desk_based: "不是以办公室办公桌为主",
        both_setups: "两种情况都有"
      }
    },
    "question-6": {
      label: "你在工作日通常是坐着还是站着？",
      options: {
        mostly_sit: "我通常一天大部分时间坐着",
        mostly_stand_move: "我通常一天大部分时间站着或走动",
        sit_and_stand: "我一天中会坐也会站"
      }
    },
    "question-7": {
      label: "在购买工具或设备前，你的雇主或主管在多大程度上征求你的意见？",
      options: extentOptions
    },
    "question-8": {
      label: "你的雇主或主管在多大程度上征求你对工作应如何组织和/或执行的意见？",
      options: extentOptions
    },
    "question-9": {
      label: "在过去7天内，你是否经历过与工作有关的疼痛或不适？",
      options: {
        yes: "是",
        no: "否"
      }
    },
    "question-10": {
      label:
        "请使用下表说明，在执行正在评估的工作或任务期间或之后，你在哪些具体身体部位经历过与工作有关的疼痛或不适。\n\n请说明 a) 身体一侧或两侧是否受影响，以及 b) 疼痛是否持续2天或更久。",
      groups: {
        neck: { label: "1. 颈部", options: bodySideOptions },
        shoulders_upper_arms: { label: "2. 肩部或上臂", options: bodySideOptions },
        elbows_forearms: { label: "3. 肘部或前臂", options: bodySideOptions },
        wrists_hands_fingers: { label: "4. 手腕、手或手指", options: bodySideOptions },
        lower_back: { label: "5. 下背部", options: bodySideOptions },
        hips_upper_legs: { label: "6. 髋部或大腿", options: bodySideOptions },
        knees_lower_legs: { label: "7. 膝盖或小腿", options: bodySideOptions },
        ankles_feet: { label: "8. 脚踝或脚", options: bodySideOptions }
      }
    },
    "question-11": {
      label:
        "想一想典型工作日，或者如果你正在评估某个具体任务或活动，就想一想你执行该任务的那段工作时间。你有多少时间会把身体某部分靠在或压在尖锐物体或边缘上？",
      options: {
        less_than_30_min: "每天少于30分钟",
        "30_min_to_1_hour": "每天30分钟至1小时",
        more_than_1_hour: "每天超过1小时",
        does_not_apply: "我工作时不会靠在尖锐物体或边缘上"
      }
    },
    "question-12": {
      label: "你有多少时间在没有个人防护（例如没有护膝）的情况下跪在坚硬或粗糙的表面上？",
      options: {
        less_than_30_min: "每天少于30分钟",
        "30_min_to_1_hour": "每天30分钟至1小时之间",
        more_than_1_hour: "每天超过1小时",
        does_not_apply: "我工作时不会在没有防护的情况下跪在坚硬表面上"
      }
    },
    "question-13": {
      label:
        "请想一想你一次会握持超过30分钟的工具或物体类型。请从以下描述中选择所有适用项。\n\n如果已勾选其他选项，则不能选择最后一个选项。",
      options: {
        poor_grip_size: "太大或太小，难以正确抓握",
        irregular_unbalanced: "形状不规则或不平衡",
        sharp_handholds: "手握部位过于尖锐",
        slippery: "容易打滑",
        none: "以上都不是"
      }
    },
    "question-14": {
      label:
        "你是否使用身体某个部位作为临时工具来完成工作？例如，你可能用手掌或膝盖向某个表面施加力量。\n\n下图展示了以这种方式使用身体的例子。",
      options: {
        less_than_one_hour: "是，每天少于1小时",
        more_than_one_hour: "是，每天超过1小时",
        no: "否，我在工作中不会把身体当作临时工具使用"
      }
    },
    "question-15": {
      label:
        "想一想你在今天评估的工作、任务或活动中推动、拉动或移动物体所经过的表面类型。请从以下描述中选择所有适用项。",
      options: {
        smooth: "光滑，例如已完成加工的表面",
        soft: "柔软，例如沙地、泥地、草地",
        rough: "粗糙，例如碎石、瓷砖、花岗岩",
        does_not_apply: "我不会为了完成工作而在任何表面上推或拉物体"
      }
    },
    "question-16": {
      label: "你多久会在没有机械辅助（例如手推车或搬运车）的情况下推动、拉动或移动你认为较重的物体？",
      options: mostSomeNeverOptions
    },
    "question-17": {
      label: "你在没有机械辅助的情况下拿起、搬运或支撑的工具或物体有多重？",
      options: {
        less_than_5_lb: "少于5磅 / 2公斤",
        "5_to_18_lb": "5至18磅 / 2至8公斤",
        more_than_18_lb: "超过18磅 / 8公斤",
        does_not_apply: "我工作时不会拿起、搬运或支撑任何工具或物体"
      }
    },
    "question-18": {
      label: "你使用的任何工具和/或设备是否需要很大力量才能启动？例如需要用力拉绳的割草机，或需要用力踩下的踏板。",
      options: {
        regularly: "是，我经常使用的至少一些工具或设备需要用力",
        occasionally: "是，我偶尔使用的至少一些工具或设备需要用力",
        no: "否，我使用的工具或设备启动时不需要用力"
      }
    },
    "question-19": {
      label: "在推动和/或拉动你认为较重的物体时，你在多大程度上获得帮助，例如同事协助，或使用搬运车、手推车？",
      options: {
        great_extent: "很大程度上",
        some_extent: "一定程度上",
        do_not_ask: "我不寻求帮助",
        ask_but_no_assistance: "我寻求帮助但没有得到帮助",
        does_not_apply: "我在工作日不会推动或拉动这类物体"
      }
    },
    "question-20": {
      label:
        "想一想典型工作日，或者如果你正在评估某个具体任务或活动，就想一想你执行该任务的那段工作时间。坐着或站着时，你多久会让上半身向前、向后或向侧面倾斜来工作？\n\n请选择适用于你的选项。",
      groups: {
        forward_backward: { label: "我向前或向后倾斜超过15度", options: mostSomeNeverOptions },
        sideways: { label: "我向侧面倾斜", options: mostSomeNeverOptions }
      }
    },
    "question-21": {
      label: "进行工作活动时，你是否会在坐着或站着时不改变脚的位置而向任一侧扭转上半身？",
      options: {
        often: "是，我在工作、任务或活动中经常这样做",
        sometimes: "是，我在工作、任务或活动中有时这样做",
        never: "否，我工作时从不扭转上半身"
      }
    },
    "question-22": {
      label:
        "想一想典型工作日，或者如果你正在评估某个具体任务或活动，就想一想你执行该任务的那段工作时间。坐着或站着时，请说明你的手相对于身体的位置。\n\n请选择适用于你的选项。",
      groups: {
        hands_above_shoulders: { label: "双手高于肩部", options: mostSomeNeverOptions },
        hands_floor_to_knee: { label: "双手位于地面和膝盖之间", options: mostSomeNeverOptions }
      }
    },
    "question-23": {
      label: "在进行今天评估的工作、任务或活动时，你的一只或两只手臂是否曾完全向前伸直？",
      options: {
        frequently: "是，我的手臂在进行工作、任务或活动时经常完全向前伸直",
        sometimes: "是，我的手臂在进行工作、任务或活动时有时完全向前伸直",
        never: "否，我的手臂在进行工作、任务或活动时从不完全向前伸直"
      }
    },
    "question-24": {
      label: "当你的手臂伸出时，你是否会握持工具或移动物体？",
      options: {
        less_than_5_lb: "是，而且通常少于5磅 / 2公斤",
        "5_to_10_lb": "是，而且通常为5至10磅 / 2至4.5公斤",
        more_than_10_lb: "是，而且通常超过10磅 / 4.5公斤",
        no: "否，手臂伸出时我不会握持工具或物体"
      }
    },
    "question-25": {
      label: "在进行今天评估的工作、任务或活动时，你的头部位置如何？",
      options: {
        neutral: "通常处于中立位置，位于双肩之间，下巴水平",
        slight_tilt: "通常向上或向下倾斜少于15度",
        deep_tilt: "通常向上、向下或向侧面倾斜超过15度"
      }
    },
    "question-26": {
      label: "你通常会把手腕向上和向下弯曲多少？请参考下图。",
      options: {
        "0_to_14": "通常向上或向下0至14度",
        "15_to_30": "通常15至30度",
        more_than_30: "通常超过30度"
      }
    },
    "question-27": {
      label: "你会把手腕左右偏斜多少？",
      options: {
        "0_to_10": "通常向左或向右0至10度",
        "10_to_20": "通常10至20度",
        more_than_20: "通常超过20度"
      }
    },
    "question-28": {
      label: "你是否能够把需要推动、拉动、搬起、使用等的所有物体都保持在靠近身体的位置？",
      options: {
        frequently: "是，经常",
        sometimes: "是，有时",
        never: "否，从不"
      }
    },
    "question-29": {
      label:
        "想一想典型工作日，或者如果你正在评估某个具体任务或活动，就想一想你执行该任务的那段工作时间。你有多少时间在一遍又一遍地做类似动作？",
      options: {
        less_than_30_min: "每天少于30分钟",
        "30_min_to_2_hours": "每天30分钟至2小时",
        "2_to_4_hours": "每天2至4小时",
        more_than_4_hours: "每天超过4小时"
      }
    },
    "question-30": {
      label: "你有多少时间把手腕向上或向下弯曲超过15度？请参考下图。",
      options: {
        less_than_1_hour: "每天少于1小时",
        "1_to_2_hours": "每天1至2小时",
        more_than_2_hours: "每天超过2小时",
        none: "完全没有"
      }
    },
    "question-31": {
      label: "你有多少时间把手腕向左或向右偏斜超过15度？请参考下图。",
      options: {
        less_than_1_hour: "每天少于1小时",
        "1_to_2_hours": "每天1至2小时",
        more_than_2_hours: "每天超过2小时",
        none: "完全没有"
      }
    },
    "question-32": {
      label: "使用工具或处理物体时，你有多少时间进行强力肌肉用力（用自身力量超过18磅 / 8公斤）？",
      options: {
        less_than_5_min: "每天少于5分钟",
        "5_to_25_min": "每天5至25分钟",
        "30_min_to_2_5_hours": "每天30分钟至2.5小时",
        "2_5_to_5_5_hours": "每天2.5至5.5小时",
        more_than_5_5_hours: "每天超过5.5小时"
      }
    },
    "question-33": {
      label:
        "当你用拇指和指尖夹住物体时，这称为捏握。进行今天评估的工作、任务或活动时，你有多少时间用捏握方式握住超过2磅 / 1公斤的物体？",
      options: {
        less_than_2_hours: "每天少于2小时",
        more_than_2_hours: "每天超过2小时",
        none: "完全没有"
      }
    },
    "question-34": {
      label:
        "当你用手包住物体来握持时，这称为强力握持。你有多少时间用强力握持方式握住超过10磅 / 4.5公斤的物体？",
      options: {
        less_than_2_hours: "每天少于2小时",
        more_than_2_hours: "每天超过2小时",
        none: "完全没有"
      }
    },
    "question-35": {
      label: "如果你使用会使身体部分或全身产生振动的工具或设备，你有多少时间使用这些工具？",
      options: {
        less_than_1_hour: "每天少于1小时",
        "1_to_4_hours": "每天1至4小时",
        more_than_4_hours: "每天超过4小时",
        does_not_apply: "我不使用这类工具或设备"
      }
    },
    "question-36": {
      label:
        "如果你推动或拉动超过80磅 / 36公斤的物品，你有多少时间在粗糙表面（如碎石、瓷砖或不平地面）或柔软表面（如沙地、泥地或草地）上移动这些物品？",
      options: {
        less_than_5_min: "每天少于5分钟",
        "5_min_to_1_hour": "每天5分钟至1小时",
        more_than_1_hour: "每天超过1小时",
        does_not_apply: "我不会在粗糙或柔软表面上移动这类物品"
      }
    },
    "question-37": {
      label:
        "想一想典型工作日，或者如果你正在评估某个具体任务或活动，就想一想你执行该任务的那段工作时间。你是否会被噪音分散注意力，例如警报声、大声说话、交通噪音等？",
      options: {
        frequently: "经常",
        sometimes: "有时",
        no: "不会"
      }
    },
    "question-38": {
      label: "你是否受到阳光直射或反射进眼睛（眩光）的影响？",
      options: frequencyOptions
    },
    "question-39": {
      label: "如果你的工作需要看细节或阅读小字，你能轻松做到吗？",
      options: {
        ...frequencyOptions,
        does_not_apply: "我的工作不需要这样做"
      }
    },
    "question-40": {
      label: "如果你在寒冷环境中工作，你的手臂、背部、腿、手指和/或脚趾是否感到不适？",
      options: {
        yes: "是",
        no: "否",
        does_not_apply: "我不在寒冷环境中工作"
      }
    },
    "question-41": {
      label: "考虑到你的工作要求，你多久会被要求加班一小时或更久？",
      options: frequencyOptions
    },
    "question-42": {
      label: "你多久会被要求在紧迫期限内完成工作？",
      options: frequencyOptions
    }
  }
};
