import type { Translation } from "../../types";

export const ko: Translation = {
  "app": {
    "title": "MSI360",
    "disclosure": "프로토타입: 보고서를 다운로드하거나 공유하기로 선택하지 않는 한 답변은 이 브라우저에 남아 있습니다.",
    "continue_button": "계속",
    "back_button": "뒤로",
    "processing_button": "처리 중",
    "analyzing_button": "분석 중",
    "question_progress": "질문 {current}/{total}",
    "score_summary_title": "MSI 위험 요약",
    "score_overall_risk": "전체 MSI 위험",
    "score_download_report": "보고서 다운로드",
    "score_not_available": "해당 없음",
    "score_out_of_4": "4점 만점에 {score}",
    "score_risk_not_enough": "데이터가 충분하지 않음",
    "score_risk_low": "낮은 위험",
    "score_risk_possible": "가능성 있는 위험",
    "score_risk_likely": "높은 가능성의 위험",
    "score_risk_known": "확인된 위험",
    "score_factor_not_enough": "{factor}을(를) 해석할 데이터가 충분하지 않습니다.",
    "score_factor_low": "현재 {factor}와(과) 관련된 위험은 낮습니다.",
    "score_factor_possible": "{factor}로 인한 불편 위험 가능성이 있습니다.",
    "score_factor_likely": "{factor}로 인한 불편 위험이 있을 가능성이 높습니다.",
    "score_factor_known": "통증 및/또는 부상의 확인된 위험이 있습니다.",
    "score_psychosocial_note": "심리사회적 요인이 전체 MSI 위험 점수에 부정적인 영향을 주었습니다({multiplier}).",
    "score_subject_contact_stress": "접촉 스트레스",
    "score_subject_force": "힘 사용",
    "score_subject_awkward_postures": "불편한 자세",
    "score_subject_repetition": "반복 동작",
    "score_subject_environmental": "환경 요인",
    "wrap_email_copy": "이메일 사본",
    "wrap_review_results": "결과 검토",
    "wrap_submit_report": "보고서 제출",
    "email_title": "이메일로 보고서 받기",
    "email_body": "이 보고서 사본을 받고 싶다면 이메일 주소를 입력하세요. 최대 15분이 걸릴 수 있습니다. 받은 편지함에 이메일이 보이지 않으면 정크 또는 스팸 폴더를 확인하세요.",
    "email_next_body": "다음 화면에서 최종 보고서를 볼 수 있습니다.",
    "email_address_label": "이메일 주소",
    "report_ready_title": "보고서가 준비되었습니다",
    "report_card_title": "MSI 위험 보고서",
    "report_date_label": "날짜",
    "report_task_label": "분석한 직무/작업:",
    "report_overall_score_label": "전체 점수:",
    "report_highest_risk": "가장 높은 위험 범주:",
    "report_no_scored_categories": "아직 점수화된 위험 범주가 없습니다",
    "report_email_copy_requested": "{email}로 이메일 사본을 요청했습니다.",
    "report_download_pdf": "PDF 다운로드",
    "report_email_report": "보고서 이메일 보내기",
    "report_done": "완료",
    "submit_title": "다른 ErgoCheck 평가를 완료하시겠습니까?",
    "submit_option_reuse": "예. 처음 제공한 동일한 정보를 사용하고 필요에 따라 수정하여 다른 보고서를 작성하고 싶습니다.",
    "submit_option_restart": "예. 새로운 정보로 처음부터 다시 시작하고 싶습니다",
    "submit_option_no": "아니요, 지금은 아닙니다",
    "submit_copy": "감사합니다. 설문을 마치려면 아래 버튼을 누르세요.",
    "submit_button": "제출",
    "complete_title": "MSI 360 설문을 완료해 주셔서 감사합니다",
    "complete_body": "귀하의 응답은 작업장의 MSI 관련 위험을 파악하고 모두에게 더 안전한 작업 환경을 만드는 데 도움이 됩니다.",
    "complete_next_steps_title": "다음 단계:",
    "complete_next_step_review": "보고서와 권장 사항을 검토하세요",
    "complete_next_step_share": "적절한 경우 결과를 감독자와 공유하세요",
    "complete_next_step_visit": "추가 자료는 worksafebc.com을 방문하세요",
    "complete_start_new": "새 평가 시작",
    "description_title": "설명",
    "description_body": "다음 질문은 일반적인 근무일 동안 수행하는 작업 또는 오늘 평가하려는 특정 업무나 활동을 수행할 때의 작업에 관한 것입니다. 목적은 업무를 완료하기 위해 수행하는 동작을 MSI360에 알려주는 것입니다."
  },
  "sections": {
    "intro": "작업 정보",
    "symptoms": "현재 증상",
    "contact_stress": "접촉 스트레스",
    "force": "힘",
    "awkward_postures": "불편한 자세",
    "repetition": "반복",
    "environmental": "환경 요인",
    "organizational": "작업 조직"
  },
  "questions": {
    "question-1": {
      "label": "오늘 평가하려는 활동에서 귀하의 역할은 무엇입니까?",
      "options": {
        "worker": "근로자",
        "supervisor": "감독자",
        "manager": "관리자",
        "employer": "고용주",
        "health_safety_committee": "보건안전위원회 구성원"
      }
    },
    "question-2": {
      "label": "현재 고용주와 함께 이 역할을 맡은 지 얼마나 되었습니까?",
      "options": {
        "less_than_year": "1년 미만",
        "one_to_five": "1년에서 5년",
        "six_to_ten": "6년에서 10년",
        "more_than_ten": "10년 초과"
      }
    },
    "question-3": {
      "label": "평가하려는 업무 또는 작업 활동은 무엇입니까?",
      "help_text": "평가하려는 특정 업무 또는 활동을 간단히 설명해 주세요. 해당되는 경우 자세, 불편함, 작업대 인체공학, 휴식 시간 등의 세부 정보를 포함해 주세요."
    },
    "question-4": {
      "label": "아래 옵션 중에서 키를 선택해 주세요.",
      "options": {
        "under_5_4": "5피트 4인치 미만 (< 1.62m)",
        "5_4_to_5_9": "5피트 4인치 - 5피트 9인치 (1.62m - 1.75m)",
        "5_10_to_6_2": "5피트 10인치 - 6피트 2인치 (1.76m - 1.88m)",
        "over_6_2": "6피트 2인치 초과 (> 1.88m)",
        "prefer_not_to_say": "응답하지 않음"
      }
    },
    "question-5": {
      "label": "평가 중인 직무 또는 업무 유형을 어떻게 요약하시겠습니까?",
      "options": {
        "office_clerical": "사무 또는 행정, 책상 기반 직무 또는 업무",
        "not_desk_based": "사무실 책상 기반이 아님",
        "both_setups": "두 가지 모두"
      }
    },
    "question-6": {
      "label": "근무일 동안 보통 앉아서 일합니까, 아니면 서서 일합니까?",
      "options": {
        "mostly_sit": "대부분의 날을 앉아서 보냅니다",
        "mostly_stand_move": "대부분의 날을 서 있거나 움직이며 보냅니다",
        "sit_and_stand": "하루 동안 앉기도 하고 서기도 합니다"
      }
    },
    "question-7": {
      "label": "도구나 장비를 구매하기 전에 고용주 또는 감독자가 귀하의 의견을 어느 정도 구합니까?",
      "options": {
        "great_extent": "매우 많이",
        "some_extent": "어느 정도",
        "rarely": "드물게",
        "not_at_all": "전혀 아님"
      }
    },
    "question-8": {
      "label": "고용주 또는 감독자가 귀하가 하는 작업을 어떻게 조직하거나 수행해야 하는지에 대해 귀하의 의견을 어느 정도 구합니까?",
      "options": {
        "great_extent": "매우 많이",
        "some_extent": "어느 정도",
        "rarely": "드물게",
        "not_at_all": "전혀 아님"
      }
    },
    "question-9": {
      "label": "지난 7일 동안 업무와 관련된 통증이나 불편함을 경험한 적이 있습니까?",
      "options": {
        "yes": "예",
        "no": "아니요"
      }
    },
    "question-10": {
      "label": "아래 표를 사용하여 평가 중인 직무 또는 업무를 수행하는 동안 또는 수행한 후 업무와 관련된 통증이나 불편함을 경험한 특정 신체 부위를 표시해 주세요.\n\na) 몸의 한쪽 또는 양쪽이 관련되었는지, b) 통증이 2일 이상 지속되었는지 표시해 주세요.",
      "groups": {
        "neck": {
          "label": "1. 목",
          "options": {
            "one_side": "한쪽, 예를 들어 몸의 왼쪽 또는 오른쪽에 통증이나 불편함이 있음",
            "both_sides": "왼쪽과 오른쪽 양쪽에 통증이나 불편함이 있음",
            "lasted_two_days": "통증이 2일 이상 지속됨"
          }
        },
        "shoulders_upper_arms": {
          "label": "2. 어깨 또는 상완",
          "options": {
            "one_side": "한쪽, 예를 들어 몸의 왼쪽 또는 오른쪽에 통증이나 불편함이 있음",
            "both_sides": "왼쪽과 오른쪽 양쪽에 통증이나 불편함이 있음",
            "lasted_two_days": "통증이 2일 이상 지속됨"
          }
        },
        "elbows_forearms": {
          "label": "3. 팔꿈치 또는 전완",
          "options": {
            "one_side": "한쪽, 예를 들어 몸의 왼쪽 또는 오른쪽에 통증이나 불편함이 있음",
            "both_sides": "왼쪽과 오른쪽 양쪽에 통증이나 불편함이 있음",
            "lasted_two_days": "통증이 2일 이상 지속됨"
          }
        },
        "wrists_hands_fingers": {
          "label": "4. 손목, 손 또는 손가락",
          "options": {
            "one_side": "한쪽, 예를 들어 몸의 왼쪽 또는 오른쪽에 통증이나 불편함이 있음",
            "both_sides": "왼쪽과 오른쪽 양쪽에 통증이나 불편함이 있음",
            "lasted_two_days": "통증이 2일 이상 지속됨"
          }
        },
        "lower_back": {
          "label": "5. 허리",
          "options": {
            "one_side": "한쪽, 예를 들어 몸의 왼쪽 또는 오른쪽에 통증이나 불편함이 있음",
            "both_sides": "왼쪽과 오른쪽 양쪽에 통증이나 불편함이 있음",
            "lasted_two_days": "통증이 2일 이상 지속됨"
          }
        },
        "hips_upper_legs": {
          "label": "6. 엉덩이 또는 허벅지",
          "options": {
            "one_side": "한쪽, 예를 들어 몸의 왼쪽 또는 오른쪽에 통증이나 불편함이 있음",
            "both_sides": "왼쪽과 오른쪽 양쪽에 통증이나 불편함이 있음",
            "lasted_two_days": "통증이 2일 이상 지속됨"
          }
        },
        "knees_lower_legs": {
          "label": "7. 무릎 또는 종아리",
          "options": {
            "one_side": "한쪽, 예를 들어 몸의 왼쪽 또는 오른쪽에 통증이나 불편함이 있음",
            "both_sides": "왼쪽과 오른쪽 양쪽에 통증이나 불편함이 있음",
            "lasted_two_days": "통증이 2일 이상 지속됨"
          }
        },
        "ankles_feet": {
          "label": "8. 발목 또는 발",
          "options": {
            "one_side": "한쪽, 예를 들어 몸의 왼쪽 또는 오른쪽에 통증이나 불편함이 있음",
            "both_sides": "왼쪽과 오른쪽 양쪽에 통증이나 불편함이 있음",
            "lasted_two_days": "통증이 2일 이상 지속됨"
          }
        }
      }
    },
    "question-11": {
      "label": "일반적인 근무일을 생각해 보세요. 또는 특정 업무나 활동을 평가하는 경우 그 업무를 수행하는 근무일의 해당 시간을 생각해 보세요. 날카로운 물체나 모서리에 몸의 일부를 기대거나 올려놓는 시간이 얼마나 됩니까?",
      "options": {
        "less_than_30_min": "하루 30분 미만",
        "30_min_to_1_hour": "하루 30분에서 1시간",
        "more_than_1_hour": "하루 1시간 초과",
        "does_not_apply": "업무 중 날카로운 물체나 모서리에 기대지 않습니다"
      }
    },
    "question-12": {
      "label": "무릎 보호대와 같은 개인 보호구 없이 단단하거나 거친 표면에 무릎을 꿇고 있는 시간이 얼마나 됩니까?",
      "options": {
        "less_than_30_min": "하루 30분 미만",
        "30_min_to_1_hour": "하루 30분에서 1시간 사이",
        "more_than_1_hour": "하루 1시간 초과",
        "does_not_apply": "업무 중 보호구 없이 단단한 표면에 무릎을 꿇지 않습니다"
      }
    },
    "question-13": {
      "label": "한 번에 30분 넘게 잡고 있는 도구나 물체의 유형을 생각해 보세요. 아래 설명 목록에서 해당되는 내용을 모두 선택해 주세요.\n\n다른 옵션이 선택된 경우 마지막 옵션은 선택할 수 없습니다.",
      "options": {
        "poor_grip_size": "제대로 잡기에 너무 크거나 작음",
        "irregular_unbalanced": "모양이 불규칙하거나 균형이 맞지 않음",
        "sharp_handholds": "손잡이 부분이 너무 날카로움",
        "slippery": "미끄러움",
        "none": "해당 없음"
      }
    },
    "question-14": {
      "label": "업무를 완료하기 위해 신체 일부를 임시 도구처럼 사용합니까? 예를 들어 손바닥이나 무릎으로 표면에 힘을 가할 수 있습니다.\n\n아래 그림은 이런 방식으로 몸을 사용하는 예입니다.",
      "options": {
        "less_than_one_hour": "예, 하루 1시간 미만",
        "more_than_one_hour": "예, 하루 1시간 초과",
        "no": "아니요, 업무에서 몸을 임시 도구로 사용하지 않습니다"
      }
    },
    "question-15": {
      "label": "오늘 평가하는 직무, 업무 또는 작업 활동 중 물체를 밀거나 당기거나 이동시키는 표면의 종류를 생각해 보세요. 아래 설명 목록에서 해당되는 내용을 모두 선택해 주세요.",
      "options": {
        "smooth": "매끄러움, 예: 마감된 표면",
        "soft": "부드러움, 예: 모래, 진흙, 잔디",
        "rough": "거침, 예: 자갈, 타일, 화강암",
        "does_not_apply": "업무를 완료하기 위해 어떤 표면 위에서도 물체를 밀거나 당기지 않습니다"
      }
    },
    "question-16": {
      "label": "손수레나 운반대 같은 기계적 보조 없이 무겁다고 생각되는 물체를 얼마나 자주 밀거나 당기거나 이동합니까?",
      "options": {
        "most": "대부분의 시간",
        "some": "일부 시간",
        "never": "전혀 없음"
      }
    },
    "question-17": {
      "label": "기계적 도움 없이 들어 올리거나 운반하거나 지지하는 도구나 물체의 무게는 어느 정도입니까?",
      "options": {
        "less_than_5_lb": "5파운드 / 2kg 미만",
        "5_to_18_lb": "5에서 18파운드 / 2에서 8kg",
        "more_than_18_lb": "18파운드 / 8kg 초과",
        "does_not_apply": "업무 중 도구나 물체를 들어 올리거나 운반하거나 지지하지 않습니다"
      }
    },
    "question-18": {
      "label": "사용하는 도구 및/또는 장비 중 시동을 걸 때 많은 힘이 필요한 것이 있습니까? 예를 들어 줄을 세게 당겨야 하는 잔디깎이나 강하게 밟아야 하는 페달이 있습니다.",
      "options": {
        "regularly": "예, 정기적으로 사용하는 도구나 장비 중 일부는 힘이 필요합니다",
        "occasionally": "예, 가끔 사용하는 도구나 장비 중 일부는 힘이 필요합니다",
        "no": "아니요, 사용하는 도구나 장비는 시동에 힘이 필요하지 않습니다"
      }
    },
    "question-19": {
      "label": "무겁다고 생각되는 물체를 밀거나 당길 때 동료의 도움이나 운반대, 손수레 사용 등 어느 정도 도움을 받습니까?",
      "options": {
        "great_extent": "매우 많이",
        "some_extent": "어느 정도",
        "do_not_ask": "도움을 요청하지 않습니다",
        "ask_but_no_assistance": "도움을 요청하지만 받지 못합니다",
        "does_not_apply": "근무일 동안 이런 종류의 물체를 밀거나 당기지 않습니다"
      }
    },
    "question-20": {
      "label": "일반적인 근무일을 생각해 보세요. 또는 특정 업무나 활동을 평가하는 경우 그 업무를 수행하는 근무일의 해당 시간을 생각해 보세요. 앉거나 서 있을 때 상체를 앞으로, 뒤로 또는 옆으로 기울인 상태로 얼마나 자주 작업합니까?\n\n해당되는 옵션을 선택해 주세요.",
      "groups": {
        "forward_backward": {
          "label": "앞이나 뒤로 15도 이상 기울입니다",
          "options": {
            "most": "대부분의 시간",
            "some": "일부 시간",
            "never": "전혀 없음"
          }
        },
        "sideways": {
          "label": "옆으로 기울입니다",
          "options": {
            "most": "대부분의 시간",
            "some": "일부 시간",
            "never": "전혀 없음"
          }
        }
      }
    },
    "question-21": {
      "label": "작업 활동을 수행할 때 앉거나 서 있는 상태에서 발의 위치를 바꾸지 않고 상체를 어느 한쪽으로 비트는 경우가 있습니까?",
      "options": {
        "often": "예, 직무, 업무 또는 작업 활동 중 자주 합니다",
        "sometimes": "예, 직무, 업무 또는 작업 활동 중 가끔 합니다",
        "never": "아니요, 작업 중 상체를 비틀지 않습니다"
      }
    },
    "question-22": {
      "label": "일반적인 근무일을 생각해 보세요. 또는 특정 업무나 활동을 평가하는 경우 그 업무를 수행하는 근무일의 해당 시간을 생각해 보세요. 앉거나 서 있을 때 손이 몸에 비해 어디에 위치하는지 표시해 주세요.\n\n해당되는 옵션을 선택해 주세요.",
      "groups": {
        "hands_above_shoulders": {
          "label": "손이 어깨보다 위에 있음",
          "options": {
            "most": "대부분의 시간",
            "some": "일부 시간",
            "never": "전혀 없음"
          }
        },
        "hands_floor_to_knee": {
          "label": "손이 바닥과 무릎 사이에 있음",
          "options": {
            "most": "대부분의 시간",
            "some": "일부 시간",
            "never": "전혀 없음"
          }
        }
      }
    },
    "question-23": {
      "label": "오늘 평가하는 직무, 업무 또는 작업 활동을 할 때 한쪽 또는 양쪽 팔을 앞으로 완전히 뻗는 경우가 있습니까?",
      "options": {
        "frequently": "예, 직무, 업무 또는 작업 활동 중 팔을 앞으로 완전히 뻗는 경우가 자주 있습니다",
        "sometimes": "예, 직무, 업무 또는 작업 활동 중 팔을 앞으로 완전히 뻗는 경우가 가끔 있습니다",
        "never": "아니요, 직무, 업무 또는 작업 활동 중 팔을 앞으로 완전히 뻗지 않습니다"
      }
    },
    "question-24": {
      "label": "팔을 뻗은 상태에서 도구를 잡거나 물체를 움직이는 경우가 있습니까?",
      "options": {
        "less_than_5_lb": "예, 대개 5파운드 / 2kg 미만입니다",
        "5_to_10_lb": "예, 대개 5에서 10파운드 / 2에서 4.5kg입니다",
        "more_than_10_lb": "예, 대개 10파운드 / 4.5kg 초과입니다",
        "no": "아니요, 팔을 뻗은 상태에서 도구나 물체를 잡지 않습니다"
      }
    },
    "question-25": {
      "label": "오늘 평가하는 직무, 업무 또는 작업 활동을 할 때 머리는 어떤 위치에 있습니까?",
      "options": {
        "neutral": "대개 중립 자세입니다. 어깨 사이에 바로 있고 턱이 수평입니다",
        "slight_tilt": "대개 위나 아래로 15도 미만 기울어져 있습니다",
        "deep_tilt": "대개 위, 아래 또는 옆으로 15도 이상 기울어져 있습니다"
      }
    },
    "question-26": {
      "label": "손목을 위아래로 보통 얼마나 굽힙니까? 아래 이미지를 참고해 주세요.",
      "options": {
        "0_to_14": "보통 위나 아래로 0에서 14도",
        "15_to_30": "보통 15에서 30도",
        "more_than_30": "보통 30도 초과"
      }
    },
    "question-27": {
      "label": "손목을 좌우로 얼마나 기울입니까?",
      "options": {
        "0_to_10": "보통 왼쪽 또는 오른쪽으로 0에서 10도",
        "10_to_20": "보통 10에서 20도",
        "more_than_20": "보통 20도 초과"
      }
    },
    "question-28": {
      "label": "밀거나 당기거나 들어 올리거나 사용하는 모든 물체를 몸 가까이에 둘 수 있습니까?",
      "options": {
        "frequently": "예, 자주",
        "sometimes": "예, 가끔",
        "never": "아니요, 전혀 없음"
      }
    },
    "question-29": {
      "label": "일반적인 근무일을 생각해 보세요. 또는 특정 업무나 활동을 평가하는 경우 그 업무를 수행하는 근무일의 해당 시간을 생각해 보세요. 비슷한 동작을 반복해서 수행하는 데 얼마나 많은 시간을 보냅니까?",
      "options": {
        "less_than_30_min": "하루 30분 미만",
        "30_min_to_2_hours": "하루 30분에서 2시간",
        "2_to_4_hours": "하루 2에서 4시간",
        "more_than_4_hours": "하루 4시간 초과"
      }
    },
    "question-30": {
      "label": "손목을 위나 아래로 15도 이상 굽히는 데 얼마나 많은 시간을 보냅니까? 아래 이미지를 참고해 주세요.",
      "options": {
        "less_than_1_hour": "하루 1시간 미만",
        "1_to_2_hours": "하루 1에서 2시간",
        "more_than_2_hours": "하루 2시간 초과",
        "none": "전혀 없음"
      }
    },
    "question-31": {
      "label": "손목을 왼쪽이나 오른쪽으로 15도 이상 기울이는 데 얼마나 많은 시간을 보냅니까? 아래 이미지를 참고해 주세요.",
      "options": {
        "less_than_1_hour": "하루 1시간 미만",
        "1_to_2_hours": "하루 1에서 2시간",
        "more_than_2_hours": "하루 2시간 초과",
        "none": "전혀 없음"
      }
    },
    "question-32": {
      "label": "도구를 사용하거나 물체를 다룰 때 자신의 힘으로 18파운드 / 8kg을 초과하는 강한 근육 힘을 쓰는 시간이 얼마나 됩니까?",
      "options": {
        "less_than_5_min": "하루 5분 미만",
        "5_to_25_min": "하루 5에서 25분",
        "30_min_to_2_5_hours": "하루 30분에서 2.5시간",
        "2_5_to_5_5_hours": "하루 2.5에서 5.5시간",
        "more_than_5_5_hours": "하루 5.5시간 초과"
      }
    },
    "question-33": {
      "label": "엄지와 손끝 사이로 물체를 잡는 것을 핀치 그립이라고 합니다. 오늘 평가하는 직무, 업무 또는 작업 활동 중 2파운드 / 1kg보다 무거운 물체를 핀치 그립으로 잡는 시간이 얼마나 됩니까?",
      "options": {
        "less_than_2_hours": "하루 2시간 미만",
        "more_than_2_hours": "하루 2시간 초과",
        "none": "전혀 없음"
      }
    },
    "question-34": {
      "label": "손으로 물체를 감싸 쥐는 것을 파워 그립이라고 합니다. 10파운드 / 4.5kg보다 무거운 물체를 파워 그립으로 잡는 시간이 얼마나 됩니까?",
      "options": {
        "less_than_2_hours": "하루 2시간 미만",
        "more_than_2_hours": "하루 2시간 초과",
        "none": "전혀 없음"
      }
    },
    "question-35": {
      "label": "신체 일부 또는 전체에 진동을 일으키는 도구나 장비를 사용하는 경우, 이러한 도구를 사용하는 시간이 얼마나 됩니까?",
      "options": {
        "less_than_1_hour": "하루 1시간 미만",
        "1_to_4_hours": "하루 1에서 4시간",
        "more_than_4_hours": "하루 4시간 초과",
        "does_not_apply": "이러한 유형의 도구나 장비를 사용하지 않습니다"
      }
    },
    "question-36": {
      "label": "80파운드 / 36kg보다 무거운 물건을 밀거나 당기는 경우, 자갈, 타일, 고르지 않은 지면 같은 거친 표면이나 모래, 진흙, 잔디 같은 부드러운 표면 위에서 이러한 물건을 이동하는 시간이 얼마나 됩니까?",
      "options": {
        "less_than_5_min": "하루 5분 미만",
        "5_min_to_1_hour": "하루 5분에서 1시간",
        "more_than_1_hour": "하루 1시간 초과",
        "does_not_apply": "이러한 물건을 거친 표면이나 부드러운 표면 위에서 이동하지 않습니다"
      }
    },
    "question-37": {
      "label": "일반적인 근무일을 생각해 보세요. 또는 특정 업무나 활동을 평가하는 경우 그 업무를 수행하는 근무일의 해당 시간을 생각해 보세요. 사이렌, 큰 대화 소리, 교통 소음 등으로 주의가 산만해지는 경우가 있습니까?",
      "options": {
        "frequently": "자주",
        "sometimes": "가끔",
        "no": "아니요"
      }
    },
    "question-38": {
      "label": "햇빛이 눈에 직접 들어오거나 반사되어 생기는 눈부심의 영향을 받습니까?",
      "options": {
        "frequently": "자주",
        "sometimes": "가끔",
        "rarely": "드물게",
        "never": "전혀 없음"
      }
    },
    "question-39": {
      "label": "작업상 세부적인 것을 보거나 작은 글씨를 읽어야 한다면, 이를 쉽게 할 수 있습니까?",
      "options": {
        "frequently": "자주",
        "sometimes": "가끔",
        "rarely": "드물게",
        "never": "전혀 없음",
        "does_not_apply": "내 작업에는 이것이 필요하지 않습니다"
      }
    },
    "question-40": {
      "label": "추운 환경에서 일하는 경우, 팔, 등, 다리, 손가락 및/또는 발가락에 불편함을 느낍니까?",
      "options": {
        "yes": "예",
        "no": "아니요",
        "does_not_apply": "추운 환경에서 일하지 않습니다"
      }
    },
    "question-41": {
      "label": "업무 요구 사항을 고려할 때, 1시간 이상 초과 근무를 요청받는 빈도는 얼마나 됩니까?",
      "options": {
        "frequently": "자주",
        "sometimes": "가끔",
        "rarely": "드물게",
        "never": "전혀 없음"
      }
    },
    "question-42": {
      "label": "촉박한 마감 기한에 맞춰 일하라는 요청을 얼마나 자주 받습니까?",
      "options": {
        "frequently": "자주",
        "sometimes": "가끔",
        "rarely": "드물게",
        "never": "전혀 없음"
      }
    }
  }
};
