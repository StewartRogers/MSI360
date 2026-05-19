import type { Translation } from "../../types";

export const ja: Translation = {
  app: {
    title: "MSI360",
    disclosure: "プロトタイプ: レポートをダウンロードまたは共有しない限り、回答はこのブラウザー内に保存されます。",
    continue_button: "続行",
    back_button: "戻る",
    processing_button: "処理中",
    analyzing_button: "分析中",
    question_progress: "{total} 問中 {current} 問目",
    score_summary_title: "MSIリスクの概要",
    score_overall_risk: "全体のMSIリスク",
    score_download_report: "レポートをダウンロード",
    score_not_available: "該当なし",
    score_out_of_4: "4点中{score}",
    score_risk_not_enough: "データが不足しています",
    score_risk_low: "低リスク",
    score_risk_possible: "リスクの可能性あり",
    score_risk_likely: "リスクの可能性が高い",
    score_risk_known: "既知のリスク",
    score_factor_not_enough: "{factor}を解釈するためのデータが不足しています。",
    score_factor_low: "{factor}に関連する現在のリスクは低いです。",
    score_factor_possible: "{factor}による不快感のリスクの可能性があります。",
    score_factor_likely: "{factor}による不快感のリスクの可能性が高いです。",
    score_factor_known: "痛みおよび/またはけがの既知のリスクがあります。",
    score_psychosocial_note: "心理社会的要因が全体のMSIリスクスコアに悪影響を与えました（{multiplier}）。",
    score_subject_contact_stress: "接触ストレス",
    score_subject_force: "力の使用",
    score_subject_awkward_postures: "無理な姿勢",
    score_subject_repetition: "反復動作",
    score_subject_environmental: "環境要因",
    wrap_email_copy: "メールコピー",
    wrap_review_results: "結果を確認",
    wrap_submit_report: "レポートを送信",
    email_title: "レポートをメールで受け取る",
    email_body: "このレポートのコピーを受け取りたい場合は、メールアドレスを入力してください。最大15分かかる場合があります。受信トレイにメールが見当たらない場合は、迷惑メールフォルダーを確認してください。",
    email_next_body: "次の画面で最終レポートを確認できます。",
    email_address_label: "メールアドレス",
    report_ready_title: "レポートの準備ができました",
    report_card_title: "MSIリスクレポート",
    report_date_label: "日付",
    report_task_label: "分析した仕事/作業:",
    report_overall_score_label: "全体スコア:",
    report_highest_risk: "最も高いリスクカテゴリ:",
    report_no_scored_categories: "スコア付きのリスクカテゴリはまだありません",
    report_email_copy_requested: "{email} へのメールコピーをリクエストしました。",
    report_download_pdf: "PDFをダウンロード",
    report_email_report: "レポートをメール送信",
    report_done: "完了",
    submit_title: "別のErgoCheck評価を完了しますか？",
    submit_option_reuse: "はい。最初に提供した同じ情報を使用し、必要に応じて編集しながら別のレポートを作成したいです。",
    submit_option_restart: "はい。新しい情報で最初からやり直したいです",
    submit_option_no: "いいえ、今はしません",
    submit_copy: "ありがとうございます。アンケートを終了するには、下のボタンを押してください。",
    submit_button: "送信",
    complete_title: "MSI 360アンケートへのご回答ありがとうございました",
    complete_body: "あなたの回答は、職場のMSI関連ハザードを特定し、すべての人にとってより安全な作業環境づくりに役立ちます。",
    complete_next_steps_title: "次のステップ:",
    complete_next_step_review: "レポートと推奨事項を確認する",
    complete_next_step_share: "必要に応じて、結果を監督者と共有する",
    complete_next_step_visit: "追加リソースについてはworksafebc.comをご覧ください",
    complete_start_new: "新しい評価を開始",
    description_title: "説明",
    description_body: "以下の質問は、通常の勤務日、または今日評価したい特定の作業や活動を行うときの仕事内容について尋ねるものです。MSI360に、仕事を完了するために行っている動作を伝えることが目的です。",
    ai_loading_task_description: "作業内容を分析しています...",
    ai_task_analysis_fallback_toast: "AIによる作業分析の応答がタイムアウトしました。代わりにローカルの代替処理を使用しています。",
    ai_question_pruning_fallback_toast: "AIによる質問絞り込みの応答がタイムアウトしました。代替のフォローアップ質問を使用しています。",
    ai_fallback_toast_dismiss: "AI代替通知を閉じる"
  },
  sections: {
    intro: "作業について",
    symptoms: "現在の症状",
    contact_stress: "接触ストレス",
    force: "力の使用",
    awkward_postures: "無理な姿勢",
    repetition: "反復動作",
    environmental: "環境要因",
    organizational: "作業組織"
  },
  questions: {
    "question-1": {
      label: "今日評価したい活動におけるあなたの役割は何ですか？",
      options: {
        worker: "作業者",
        supervisor: "監督者",
        manager: "管理者",
        employer: "雇用主",
        health_safety_committee: "安全衛生委員会のメンバー"
      }
    },
    "question-2": {
      label: "現在の雇用主のもとで、この役割に就いてどのくらいですか？",
      options: {
        less_than_year: "1年未満",
        one_to_five: "1〜5年",
        six_to_ten: "6〜10年",
        more_than_ten: "10年以上"
      }
    },
    "question-3": {
      label: "評価したい作業または作業活動は何ですか？",
      help_text: "評価したい具体的な作業または活動を簡単に説明してください。該当する場合は、姿勢、不快感、作業ステーションの人間工学、休憩時間などの詳細も含めてください。"
    },
    "question-4": {
      label: "以下の選択肢から身長を選んでください:",
      options: {
        under_5_4: "5フィート4インチ未満（< 1.62 m）",
        "5_4_to_5_9": "5フィート4インチ〜5フィート9インチ（1.62 m〜1.75 m）",
        "5_10_to_6_2": "5フィート10インチ〜6フィート2インチ（1.76 m〜1.88 m）",
        over_6_2: "6フィート2インチ超（> 1.88 m）",
        prefer_not_to_say: "回答しない"
      }
    },
    // skipping this question for now, as it was made redundant by the task_description question.
    // we're leaving this in the code in case it is used in the future
    "question-5": {
      label: "評価対象の仕事または作業の種類をどのように要約しますか？",
      options: {
        office_clerical: "事務またはデスク中心の仕事・作業",
        not_desk_based: "オフィスのデスクを中心としない仕事",
        both_setups: "両方の環境がある"
      }
    },
    "question-6": {
      label: "勤務中は通常、座っていますか、それとも立っていますか？",
      options: {
        mostly_sit: "一日の大半は座っている",
        mostly_stand_move: "一日の大半は立っている、または動き回っている",
        sit_and_stand: "一日の中で座ったり立ったりする"
      }
    },
    "question-7": {
      label: "工具や設備を購入する前に、雇用主または監督者はあなたの意見をどの程度求めますか？",
      options: {
        great_extent: "大いに",
        some_extent: "ある程度",
        rarely: "まれに",
        not_at_all: "まったくない"
      }
    },
    "question-8": {
      label: "雇用主または監督者は、あなたの作業の編成方法や実施方法について、あなたの意見をどの程度求めますか？",
      options: {
        great_extent: "大いに",
        some_extent: "ある程度",
        rarely: "まれに",
        not_at_all: "まったくない"
      }
    },
    "question-9": {
      label: "過去7日間に、仕事に関連した痛みや不快感を経験しましたか？",
      options: {
        yes: "はい",
        no: "いいえ"
      }
    },
    "question-10": {
      label: "下の表を使って、評価対象の仕事または作業を行っている最中または後に、仕事に関連した痛みや不快感を経験した体の部位を示してください。\n\na) 体の片側または両側が関係していたか、b) 痛みが2日以上続いたかを示してください。",
      groups: {
        neck: {
          label: "1. é¦–",
          options: {
            one_side: "体の片側、たとえば左側または右側に痛みや不快感がある",
            both_sides: "左右両側に痛みや不快感がある",
            lasted_two_days: "痛みが2日以上続いた"
          }
        },
        shoulders_upper_arms: {
          label: "2. 肩または上腕",
          options: {
            one_side: "体の片側、たとえば左側または右側に痛みや不快感がある",
            both_sides: "左右両側に痛みや不快感がある",
            lasted_two_days: "痛みが2日以上続いた"
          }
        },
        elbows_forearms: {
          label: "3. 肘または前腕",
          options: {
            one_side: "体の片側、たとえば左側または右側に痛みや不快感がある",
            both_sides: "左右両側に痛みや不快感がある",
            lasted_two_days: "痛みが2日以上続いた"
          }
        },
        wrists_hands_fingers: {
          label: "4. 手首、手、または指",
          options: {
            one_side: "体の片側、たとえば左側または右側に痛みや不快感がある",
            both_sides: "左右両側に痛みや不快感がある",
            lasted_two_days: "痛みが2日以上続いた"
          }
        },
        lower_back: {
          label: "5. 腰",
          options: {
            one_side: "体の片側、たとえば左側または右側に痛みや不快感がある",
            both_sides: "左右両側に痛みや不快感がある",
            lasted_two_days: "痛みが2日以上続いた"
          }
        },
        hips_upper_legs: {
          label: "6. 股関節または太もも",
          options: {
            one_side: "体の片側、たとえば左側または右側に痛みや不快感がある",
            both_sides: "左右両側に痛みや不快感がある",
            lasted_two_days: "痛みが2日以上続いた"
          }
        },
        knees_lower_legs: {
          label: "7. 膝または下腿",
          options: {
            one_side: "体の片側、たとえば左側または右側に痛みや不快感がある",
            both_sides: "左右両側に痛みや不快感がある",
            lasted_two_days: "痛みが2日以上続いた"
          }
        },
        ankles_feet: {
          label: "8. 足首または足",
          options: {
            one_side: "体の片側、たとえば左側または右側に痛みや不快感がある",
            both_sides: "左右両側に痛みや不快感がある",
            lasted_two_days: "痛みが2日以上続いた"
          }
        }
      }
    },
    "question-11": {
      label: "通常の勤務日、または特定の作業や活動を評価している場合はその作業を行う時間帯を考えてください。体の一部を鋭い物や端に寄りかけたり、もたれかけたりする時間はどのくらいありますか？",
      options: {
        less_than_30_min: "1日30分未満",
        "30_min_to_1_hour": "1日30分〜1時間",
        more_than_1_hour: "1日1時間超",
        does_not_apply: "仕事中に鋭い物や端にもたれることはない"
      }
    },
    "question-12": {
      label: "個人用保護具なしで、硬い面やざらざらした面に膝をつく時間はどのくらいありますか（例: 膝当てなし）？",
      options: {
        less_than_30_min: "1日30分未満",
        "30_min_to_1_hour": "1日30分〜1時間",
        more_than_1_hour: "1日1時間超",
        does_not_apply: "仕事中に保護具なしで硬い面に膝をつくことはない"
      }
    },
    "question-13": {
      label: "一度に30分を超えて持つ工具や物の種類を考えてください。以下の説明のうち、該当するものをすべて選択してください。\n\n他の選択肢にチェックが入っている場合、最後の選択肢は選択できません。",
      options: {
        poor_grip_size: "大きすぎる、または小さすぎて適切につかみにくい",
        irregular_unbalanced: "形が不規則、またはバランスが悪い",
        sharp_handholds: "握る部分が鋭すぎる",
        slippery: "滑りやすい",
        none: "上記のいずれでもない"
      }
    },
    "question-14": {
      label: "作業を完了するために、体の一部を即席の工具のように使うことがありますか？ たとえば、手のひらや膝で表面に力を加える場合などです。\n\n下の図は、このように体を使う例です。",
      options: {
        less_than_one_hour: "はい、1日1時間未満",
        more_than_one_hour: "はい、1日1時間超",
        no: "いいえ、仕事で体を即席の工具として使うことはない"
      }
    },
    "question-15": {
      label: "今日評価している仕事、作業、または活動で、物を押す、引く、移動させる表面の種類を考えてください。以下の説明のうち、該当するものをすべて選択してください。",
      options: {
        smooth: "滑らか（例: 仕上げ面）",
        soft: "柔らかい（例: 砂、泥、草）",
        rough: "粗い（例: 砂利、タイル、花こう岩）",
        does_not_apply: "仕事を完了するために、物を表面上で押したり引いたりしない"
      }
    },
    "question-16": {
      label: "機械的補助具なしで、重いと感じる物を押す、引く、または移動させる頻度はどのくらいですか（例: 手押し車や台車なし）？",
      options: {
        most: "ほとんどの時間",
        some: "一部の時間",
        never: "まったくない"
      }
    },
    "question-17": {
      label: "機械的補助なしで持ち上げる、運ぶ、または支える工具や物の重さはどのくらいですか？",
      options: {
        less_than_5_lb: "5ポンド / 2 kg未満",
        "5_to_18_lb": "5〜18ポンド / 2〜8 kg",
        more_than_18_lb: "18ポンド / 8 kg超",
        does_not_apply: "仕事中に工具や物を持ち上げたり、運んだり、支えたりしない"
      }
    },
    "question-18": {
      label: "使用する工具や設備の中に、始動するために大きな力が必要なものがありますか？（例: 強く引く必要があるコード付き芝刈り機、強く踏み込む必要があるペダル）",
      options: {
        regularly: "はい、日常的に使う工具や設備の少なくとも一部は力が必要",
        occasionally: "はい、ときどき使う工具や設備の少なくとも一部は力が必要",
        no: "いいえ、始動に力が必要な工具や設備はない"
      }
    },
    "question-19": {
      label: "重いと感じる物を押したり引いたりするとき、同僚の助けや台車・手押し車の使用などの補助をどの程度受けていますか？",
      options: {
        great_extent: "大いに",
        some_extent: "ある程度",
        do_not_ask: "補助を求めない",
        ask_but_no_assistance: "補助を求めるが受けられない",
        does_not_apply: "勤務中にこのような物を押したり引いたりしない"
      }
    },
    "question-20": {
      label: "通常の勤務日、または特定の作業や活動を評価している場合はその作業を行う時間帯を考えてください。座っている、または立っているとき、上半身を前、後ろ、または横に傾けて作業する頻度はどのくらいですか？\n\n該当する選択肢を選んでください。",
      groups: {
        forward_backward: {
          label: "上半身を前または後ろに15度以上傾ける",
          options: {
            most: "ほとんどの時間",
            some: "一部の時間",
            never: "まったくない"
          }
        },
        sideways: {
          label: "上半身を横に傾ける",
          options: {
            most: "ほとんどの時間",
            some: "一部の時間",
            never: "まったくない"
          }
        }
      }
    },
    "question-21": {
      label: "作業中、座っているまたは立っている状態で足の位置を変えずに、上半身を左右どちらかにひねることがありますか？",
      options: {
        often: "はい、仕事、作業、または活動中によく行う",
        sometimes: "はい、仕事、作業、または活動中にときどき行う",
        never: "いいえ、作業中に上半身をひねることはない"
      }
    },
    "question-22": {
      label: "通常の勤務日、または特定の作業や活動を評価している場合はその作業を行う時間帯を考えてください。座っている、または立っているとき、手が体に対してどの位置にあるかを示してください。\n\n該当する選択肢を選んでください。",
      groups: {
        hands_above_shoulders: {
          label: "手が肩より上にある",
          options: {
            most: "ほとんどの時間",
            some: "一部の時間",
            never: "まったくない"
          }
        },
        hands_floor_to_knee: {
          label: "手が床から膝の間にある",
          options: {
            most: "ほとんどの時間",
            some: "一部の時間",
            never: "まったくない"
          }
        }
      }
    },
    "question-23": {
      label: "今日評価している仕事、作業、または活動中に、片腕または両腕を前方へまっすぐ完全に伸ばすことがありますか？",
      options: {
        frequently: "はい、仕事、作業、または活動中に腕を前方へ完全に伸ばすことが頻繁にある",
        sometimes: "はい、仕事、作業、または活動中に腕を前方へ完全に伸ばすことがときどきある",
        never: "いいえ、仕事、作業、または活動中に腕を前方へ完全に伸ばすことはない"
      }
    },
    "question-24": {
      label: "腕を伸ばしているとき、工具を持ったり物を動かしたりすることがありますか？",
      options: {
        less_than_5_lb: "はい、多くの場合5ポンド / 2 kg未満",
        "5_to_10_lb": "はい、多くの場合5〜10ポンド / 2〜4.5 kg",
        more_than_10_lb: "はい、多くの場合10ポンド / 4.5 kg超",
        no: "いいえ、腕を伸ばしているときに工具や物を持たない"
      }
    },
    "question-25": {
      label: "今日評価している仕事、作業、または活動中、頭はどのような位置にありますか？",
      options: {
        neutral: "多くの場合、中立位置（肩の真ん中で、あごが水平）",
        slight_tilt: "多くの場合、上下に15度未満傾いている",
        deep_tilt: "多くの場合、上、下、または横に15度を超えて傾いている"
      }
    },
    "question-26": {
      label: "手首を上下に通常どのくらい曲げますか？ 下の画像を参考にしてください。",
      options: {
        "0_to_14": "通常、上下0〜14度",
        "15_to_30": "通常、15〜30度",
        more_than_30: "通常、30度超"
      }
    },
    "question-27": {
      label: "手首を左右に通常どのくらい傾けますか？",
      options: {
        "0_to_10": "通常、左右0〜10度",
        "10_to_20": "通常、10〜20度",
        more_than_20: "通常、20度超"
      }
    },
    "question-28": {
      label: "押す、引く、持ち上げる、使うなど、必要なすべての物を体の近くに保つことはできますか？",
      options: {
        frequently: "はい、頻繁に",
        sometimes: "はい、ときどき",
        never: "いいえ、まったくない"
      }
    },
    "question-29": {
      label: "通常の勤務日、または特定の作業や活動を評価している場合はその作業を行う時間帯を考えてください。同じような動作を何度も繰り返す時間はどのくらいありますか？",
      options: {
        less_than_30_min: "1日30分未満",
        "30_min_to_2_hours": "1日30分〜2時間",
        "2_to_4_hours": "1日2〜4時間",
        more_than_4_hours: "1日4時間超"
      }
    },
    "question-30": {
      label: "手首を上下に15度を超えて曲げる時間はどのくらいありますか？ 下の画像を参考にしてください。",
      options: {
        less_than_1_hour: "1日1時間未満",
        "1_to_2_hours": "1日1〜2時間",
        more_than_2_hours: "1日2時間超",
        none: "まったくない"
      }
    },
    "question-31": {
      label: "手首を左右に15度を超えて傾ける時間はどのくらいありますか？ 下の画像を参考にしてください。",
      options: {
        less_than_1_hour: "1日1時間未満",
        "1_to_2_hours": "1日1〜2時間",
        more_than_2_hours: "1日2時間超",
        none: "まったくない"
      }
    },
    "question-32": {
      label: "工具を使用したり物を扱ったりするとき、自分の力で18ポンド / 8 kgを超える強い筋力を使う時間はどのくらいありますか？",
      options: {
        less_than_5_min: "1日5分未満",
        "5_to_25_min": "1日5〜25分",
        "30_min_to_2_5_hours": "1日30分〜2.5時間",
        "2_5_to_5_5_hours": "1日2.5〜5.5時間",
        more_than_5_5_hours: "1日5.5時間超"
      }
    },
    "question-33": {
      label: "親指と指先で物をつかむことをピンチグリップと呼びます。今日評価している仕事、作業、または活動中に、2ポンド / 1 kgを超える物をピンチグリップで持つ時間はどのくらいありますか？",
      options: {
        less_than_2_hours: "1日2時間未満",
        more_than_2_hours: "1日2時間超",
        none: "まったくない"
      }
    },
    "question-34": {
      label: "手を物の周りに回して持つことをパワーグリップと呼びます。10ポンド / 4.5 kgを超える物をパワーグリップで持つ時間はどのくらいありますか？",
      options: {
        less_than_2_hours: "1日2時間未満",
        more_than_2_hours: "1日2時間超",
        none: "まったくない"
      }
    },
    "question-35": {
      label: "体の一部または全身に振動を生じさせる工具や設備を使用する場合、それらを使用する時間はどのくらいありますか？",
      options: {
        less_than_1_hour: "1日1時間未満",
        "1_to_4_hours": "1日1〜4時間",
        more_than_4_hours: "1日4時間超",
        does_not_apply: "この種類の工具や設備は使用しない"
      }
    },
    "question-36": {
      label: "80ポンド / 36 kgを超える物を押したり引いたりする場合、砂利、タイル、不整地などの粗い表面、または砂、泥、草などの柔らかい表面の上でそれらを移動させる時間はどのくらいありますか？",
      options: {
        less_than_5_min: "1日5分未満",
        "5_min_to_1_hour": "1日5分〜1時間",
        more_than_1_hour: "1日1時間超",
        does_not_apply: "この種類の物を粗い表面や柔らかい表面の上で移動させない"
      }
    },
    "question-37": {
      label: "通常の勤務日、または特定の作業や活動を評価している場合はその作業を行う時間帯を考えてください。騒音（サイレン、大声での会話、交通音など）で気が散ることがありますか？",
      options: {
        frequently: "頻繁に",
        sometimes: "ときどき",
        no: "いいえ"
      }
    },
    "question-38": {
      label: "太陽光が目に入る、または反射して目に入ること（まぶしさ）の影響を受けますか？",
      options: {
        frequently: "頻繁に",
        sometimes: "ときどき",
        rarely: "まれに",
        never: "まったくない"
      }
    },
    "question-39": {
      label: "細かい部分を見る、または小さな文字を読む必要がある仕事の場合、それを簡単に行えますか？",
      options: {
        frequently: "頻繁に",
        sometimes: "ときどき",
        rarely: "まれに",
        never: "まったくない",
        does_not_apply: "私の仕事ではこれを行う必要はない"
      }
    },
    "question-40": {
      label: "寒い環境で働く場合、腕、背中、脚、指、またはつま先に不快感がありますか？",
      options: {
        yes: "はい",
        no: "いいえ",
        does_not_apply: "寒い環境では働かない"
      }
    },
    "question-41": {
      label: "仕事の要件を考えると、1時間以上の残業を求められる頻度はどのくらいですか？",
      options: {
        frequently: "頻繁に",
        sometimes: "ときどき",
        rarely: "まれに",
        never: "まったくない"
      }
    },
    "question-42": {
      label: "厳しい締め切りで働くよう求められる頻度はどのくらいですか？",
      options: {
        frequently: "頻繁に",
        sometimes: "ときどき",
        rarely: "まれに",
        never: "まったくない"
      }
    }
  }
};
