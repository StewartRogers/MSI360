import type { Translation } from "../../types";

const bodySideOptions = {
  one_side: "Douleur ou inconfort d'un seul côté, par exemple le côté gauche ou droit du corps",
  both_sides: "Douleur ou inconfort des deux côtés, gauche et droit",
  lasted_two_days: "La douleur a duré 2 jours ou plus"
};

const extentOptions = {
  great_extent: "Dans une grande mesure",
  some_extent: "Dans une certaine mesure",
  rarely: "Rarement",
  not_at_all: "Pas du tout"
};

const mostSomeNeverOptions = {
  most: "La plupart du temps",
  some: "Une partie du temps",
  never: "Jamais"
};

const frequencyOptions = {
  frequently: "Fréquemment",
  sometimes: "Parfois",
  rarely: "Rarement",
  never: "Jamais"
};

export const fr: Translation = {
  app: {
    title: "MSI360",
    disclosure: "Prototype : vos réponses restent dans ce navigateur, sauf si vous choisissez de télécharger ou de partager votre rapport.",
    continue_button: "Continuer",
    back_button: "Retour",
    processing_button: "Traitement en cours",
    analyzing_button: "Analyse en cours",
    question_progress: "Question {current} sur {total}",
    score_summary_title: "Votre résumé du risque de TMS",
    score_overall_risk: "Risque global de TMS",
    score_download_report: "Télécharger le rapport",
    score_not_available: "S. O.",
    score_out_of_4: "{score} sur 4",
    score_risk_not_enough: "Données insuffisantes",
    score_risk_low: "Risque faible",
    score_risk_possible: "Risque possible",
    score_risk_likely: "Risque probable",
    score_risk_known: "Risque connu",
    score_factor_not_enough: "Données insuffisantes pour interpréter {factor}.",
    score_factor_low: "Risque actuellement faible associé à {factor}.",
    score_factor_possible: "Risque possible d'inconfort lié à {factor}.",
    score_factor_likely: "Risque probable d'inconfort lié à {factor}.",
    score_factor_known: "Risque connu de douleur et/ou de blessure.",
    score_psychosocial_note: "Les facteurs psychosociaux ont influencé négativement le score global de risque de TMS ({multiplier}).",
    score_subject_contact_stress: "la pression de contact",
    score_subject_force: "l'effort",
    score_subject_awkward_postures: "les postures contraignantes",
    score_subject_repetition: "la répétition",
    score_subject_environmental: "les facteurs environnementaux",
    wrap_email_copy: "Copie par courriel",
    wrap_review_results: "Revoir les résultats",
    wrap_submit_report: "Soumettre le rapport",
    email_title: "Recevoir votre rapport par courriel",
    email_body: "Entrez votre adresse courriel si vous souhaitez recevoir une copie de ce rapport. Cela peut prendre jusqu'à 15 minutes. Vérifiez votre dossier de courrier indésirable si vous ne voyez pas le courriel dans votre boîte de réception.",
    email_next_body: "Vous verrez le rapport final à l'écran suivant.",
    email_address_label: "Adresse courriel",
    report_ready_title: "Votre rapport est prêt",
    report_card_title: "Rapport de risque MSI",
    report_date_label: "Date",
    report_task_label: "Emploi/tâche analysé :",
    report_overall_score_label: "Score global :",
    report_highest_risk: "Catégories de risque les plus élevées :",
    report_no_scored_categories: "Aucune catégorie de risque cotée pour l'instant",
    report_email_copy_requested: "Copie par courriel demandée pour {email}.",
    report_download_pdf: "Télécharger le PDF",
    report_email_report: "Envoyer le rapport par courriel",
    report_done: "Terminé",
    submit_title: "Souhaitez-vous compléter une autre évaluation ErgoCheck ?",
    submit_option_reuse: "Oui, et je souhaite compléter un autre rapport avec les mêmes renseignements fournis au départ, en les modifiant au besoin.",
    submit_option_restart: "Oui, et je souhaite recommencer avec de nouveaux renseignements",
    submit_option_no: "Non, pas maintenant",
    submit_copy: "Merci, appuyez sur le bouton ci-dessous pour terminer le sondage.",
    submit_button: "Soumettre",
    complete_title: "Merci d'avoir complété le sondage MSI 360",
    complete_body: "Vos réponses aident à repérer les dangers liés aux MSI dans votre milieu de travail et contribuent à un environnement plus sûr pour tous.",
    complete_next_steps_title: "Prochaines étapes :",
    complete_next_step_review: "Passez en revue votre rapport et vos recommandations",
    complete_next_step_share: "Partagez les résultats avec votre superviseur si approprié",
    complete_next_step_visit: "Visitez worksafebc.com pour obtenir des ressources supplémentaires",
    complete_start_new: "Commencer une nouvelle évaluation",    description_title: "Description",
    description_body:
      "Les questions suivantes portent sur le travail que vous effectuez pendant une journée de travail typique ou lorsque vous réalisez la tâche ou l'activité précise que vous souhaitez évaluer aujourd'hui. L'objectif est que vous indiquiez à MSI360 les gestes que vous effectuez pour accomplir votre travail."
  },
  sections: {
    intro: "À propos du travail",
    symptoms: "Symptômes actuels",
    contact_stress: "Pression de contact",
    force: "Force",
    awkward_postures: "Postures contraignantes",
    repetition: "Répétition",
    environmental: "Facteurs environnementaux",
    organizational: "Organisation du travail"
  },
  questions: {
    "question-1": {
      label: "Quel est votre rôle dans l'activité que vous souhaitez évaluer aujourd'hui?",
      options: {
        worker: "Travailleur",
        supervisor: "Superviseur",
        manager: "Gestionnaire",
        employer: "Employeur",
        health_safety_committee: "Membre d'un comité de santé et sécurité"
      }
    },
    "question-2": {
      label: "Depuis combien de temps occupez-vous ce rôle chez votre employeur actuel?",
      options: {
        less_than_year: "Moins d'un an",
        one_to_five: "1 à 5 ans",
        six_to_ten: "6 à 10 ans",
        more_than_ten: "Plus de 10 ans"
      }
    },
    "question-3": {
      label: "Quelle tâche ou activité de travail souhaitez-vous évaluer?",
      help_text:
        "Veuillez fournir une brève description de la tâche ou de l'activité précise que vous souhaitez évaluer, y compris, s'il y a lieu, des détails sur la posture, l'inconfort, l'ergonomie du poste de travail et/ou la durée des pauses."
    },
    "question-4": {
      label: "Veuillez indiquer votre taille à l'aide des options ci-dessous :",
      options: {
        under_5_4: "Moins de 5 pi 4 po (< 1,62 m)",
        "5_4_to_5_9": "5 pi 4 po à 5 pi 9 po (1,62 m à 1,75 m)",
        "5_10_to_6_2": "5 pi 10 po à 6 pi 2 po (1,76 m à 1,88 m)",
        over_6_2: "Plus de 6 pi 2 po (> 1,88 m)",
        prefer_not_to_say: "Je préfère ne pas répondre"
      }
    },
    "question-5": {
      label: "Comment résumeriez-vous le type d'emploi ou de tâche évalué?",
      options: {
        office_clerical: "Emploi ou tâche de bureau ou de soutien administratif, basé à un poste de travail",
        not_desk_based: "Non basé à un bureau dans un environnement de bureau",
        both_setups: "Les deux situations"
      }
    },
    "question-6": {
      label: "Êtes-vous habituellement assis ou debout pendant votre journée de travail?",
      options: {
        mostly_sit: "Je suis habituellement assis la majeure partie de la journée",
        mostly_stand_move: "Je suis habituellement debout ou en mouvement la majeure partie de la journée",
        sit_and_stand: "Je suis assis et debout au cours de la journée"
      }
    },
    "question-7": {
      label: "Dans quelle mesure votre employeur ou votre superviseur vous demande-t-il votre avis sur les outils ou l'équipement avant leur achat?",
      options: extentOptions
    },
    "question-8": {
      label: "Dans quelle mesure votre employeur ou votre superviseur vous demande-t-il votre avis sur la façon dont votre travail devrait être organisé et/ou effectué?",
      options: extentOptions
    },
    "question-9": {
      label: "Au cours des 7 derniers jours, avez-vous ressenti une douleur ou un inconfort lié au travail?",
      options: {
        yes: "Oui",
        no: "Non"
      }
    },
    "question-10": {
      label:
        "À l'aide du tableau ci-dessous, veuillez indiquer les parties du corps où vous avez ressenti une douleur ou un inconfort lié au travail pendant ou après l'exécution de l'emploi ou de la tâche évalué.\n\nIndiquez si a) un seul côté ou les deux côtés de votre corps étaient touchés, et b) si la douleur a duré 2 jours ou plus.",
      groups: {
        neck: { label: "1. Cou", options: bodySideOptions },
        shoulders_upper_arms: { label: "2. Épaules ou haut des bras", options: bodySideOptions },
        elbows_forearms: { label: "3. Coudes ou avant-bras", options: bodySideOptions },
        wrists_hands_fingers: { label: "4. Poignets, mains ou doigts", options: bodySideOptions },
        lower_back: { label: "5. Bas du dos", options: bodySideOptions },
        hips_upper_legs: { label: "6. Hanches ou haut des jambes, cuisses", options: bodySideOptions },
        knees_lower_legs: { label: "7. Genoux ou bas des jambes, mollets", options: bodySideOptions },
        ankles_feet: { label: "8. Chevilles ou pieds", options: bodySideOptions }
      }
    },
    "question-11": {
      label:
        "Pensez à une journée de travail typique ou, si vous évaluez une tâche ou une activité précise, à la partie de la journée où vous l'effectuez. Combien de temps passez-vous à appuyer ou à reposer une partie de votre corps sur des objets ou des bords tranchants?",
      options: {
        less_than_30_min: "Moins de 30 minutes par jour",
        "30_min_to_1_hour": "30 minutes à 1 heure par jour",
        more_than_1_hour: "Plus de 1 heure par jour",
        does_not_apply: "Je ne m'appuie pas sur des objets ou des bords tranchants au travail"
      }
    },
    "question-12": {
      label: "Combien de temps passez-vous à vous agenouiller sur des surfaces dures ou rugueuses sans protection personnelle, par exemple sans genouillères?",
      options: {
        less_than_30_min: "Moins de 30 minutes par jour",
        "30_min_to_1_hour": "Entre 30 minutes et 1 heure par jour",
        more_than_1_hour: "Plus de 1 heure par jour",
        does_not_apply: "Je ne m'agenouille pas sur des surfaces dures sans protection au travail"
      }
    },
    "question-13": {
      label:
        "Veuillez penser aux types d'outils ou d'objets que vous tenez pendant plus de 30 minutes à la fois. Dans la liste ci-dessous, sélectionnez toutes les descriptions qui s'appliquent à ces objets.\n\nLa dernière option ne peut pas être sélectionnée si d'autres options ont été cochées.",
      options: {
        poor_grip_size: "Trop grands ou trop petits pour être bien saisis",
        irregular_unbalanced: "De forme irrégulière ou déséquilibrés",
        sharp_handholds: "Ont des prises trop tranchantes",
        slippery: "Glissants",
        none: "Aucune de ces réponses"
      }
    },
    "question-14": {
      label:
        "Utilisez-vous une partie de votre corps comme outil de fortune pour accomplir votre travail? Par exemple, vous pourriez utiliser votre paume ou votre genou pour appliquer une force sur une surface.\n\nL'illustration ci-dessous montre un exemple de cette utilisation du corps.",
      options: {
        less_than_one_hour: "Oui, moins de 1 heure par jour",
        more_than_one_hour: "Oui, plus de 1 heure par jour",
        no: "Non, je n'utilise pas mon corps comme outil de fortune dans mon travail"
      }
    },
    "question-15": {
      label:
        "Pensez aux types de surfaces sur lesquelles vous poussez, tirez ou déplacez des objets pendant l'emploi, la tâche ou l'activité de travail que vous évaluez aujourd'hui. Dans la liste ci-dessous, sélectionnez toutes les descriptions qui s'appliquent à ces surfaces.",
      options: {
        smooth: "Lisses, par exemple des surfaces finies",
        soft: "Molles, par exemple sable, boue, gazon",
        rough: "Rugueuses, par exemple gravier, tuile, granit",
        does_not_apply: "Je ne pousse ni ne tire d'objets sur des surfaces pour accomplir mon travail"
      }
    },
    "question-16": {
      label: "À quelle fréquence poussez-vous, tirez-vous ou déplacez-vous des objets que vous jugez lourds sans aide mécanique, par exemple une brouette ou un chariot?",
      options: mostSomeNeverOptions
    },
    "question-17": {
      label: "Quel est le poids des outils ou des objets que vous soulevez, transportez ou soutenez sans assistance mécanique?",
      options: {
        less_than_5_lb: "Moins de 5 lb / 2 kg",
        "5_to_18_lb": "5 à 18 lb / 2 à 8 kg",
        more_than_18_lb: "Plus de 18 lb / 8 kg",
        does_not_apply: "Je ne soulève, ne transporte ni ne soutiens d'outils ou d'objets au travail"
      }
    },
    "question-18": {
      label: "Certains des outils et/ou équipements que vous utilisez exigent-ils beaucoup de force pour démarrer, par exemple une tondeuse à corde à tirer ou une pédale à enfoncer fermement?",
      options: {
        regularly: "Oui, au moins certains des outils ou équipements que j'utilise régulièrement exigent de la force",
        occasionally: "Oui, au moins certains des outils ou équipements que j'utilise occasionnellement exigent de la force",
        no: "Non, aucun des outils ou équipements que j'utilise n'exige de force pour démarrer"
      }
    },
    "question-19": {
      label: "Lorsque vous poussez et/ou tirez des objets que vous jugez lourds, dans quelle mesure recevez-vous de l'aide, par exemple d'un collègue ou au moyen d'un chariot ou d'une brouette?",
      options: {
        great_extent: "Dans une grande mesure",
        some_extent: "Dans une certaine mesure",
        do_not_ask: "Je ne demande pas d'aide",
        ask_but_no_assistance: "Je demande de l'aide, mais je n'en reçois pas",
        does_not_apply: "Je ne pousse ni ne tire ce type d'objets pendant la journée de travail"
      }
    },
    "question-20": {
      label:
        "Pensez à une journée de travail typique ou, si vous évaluez une tâche ou une activité précise, à la partie de la journée où vous l'effectuez. Lorsque vous êtes assis ou debout, à quelle fréquence travaillez-vous avec le haut du corps penché vers l'avant, vers l'arrière ou sur le côté?\n\nVeuillez sélectionner les options qui s'appliquent à vous.",
      groups: {
        forward_backward: { label: "Je me penche vers l'avant ou vers l'arrière de plus de 15 degrés", options: mostSomeNeverOptions },
        sideways: { label: "Je me penche sur le côté", options: mostSomeNeverOptions }
      }
    },
    "question-21": {
      label: "Lorsque vous effectuez vos activités de travail, vous arrive-t-il de tourner le haut de votre corps d'un côté ou de l'autre sans changer la position de vos pieds, en position assise ou debout?",
      options: {
        often: "Oui, je le fais souvent pendant mon emploi, ma tâche ou mon activité de travail",
        sometimes: "Oui, je le fais parfois pendant mon emploi, ma tâche ou mon activité de travail",
        never: "Non, je ne tourne jamais le haut de mon corps pendant que je travaille"
      }
    },
    "question-22": {
      label:
        "Pensez à une journée de travail typique ou, si vous évaluez une tâche ou une activité précise, à la partie de la journée où vous l'effectuez. Lorsque vous êtes assis ou debout, veuillez indiquer où se trouvent vos mains par rapport à votre corps.\n\nVeuillez sélectionner les options qui s'appliquent à vous.",
      groups: {
        hands_above_shoulders: { label: "Mains au-dessus des épaules", options: mostSomeNeverOptions },
        hands_floor_to_knee: { label: "Mains entre le sol et le genou", options: mostSomeNeverOptions }
      }
    },
    "question-23": {
      label: "L'un de vos bras ou les deux sont-ils parfois complètement tendus vers l'avant lorsque vous effectuez l'emploi, la tâche ou l'activité de travail que vous évaluez aujourd'hui?",
      options: {
        frequently: "Oui, mes bras sont fréquemment complètement tendus vers l'avant pendant une tâche ou une activité de travail",
        sometimes: "Oui, mes bras sont parfois complètement tendus vers l'avant pendant une tâche ou une activité de travail",
        never: "Non, mes bras ne sont jamais complètement tendus vers l'avant pendant une tâche ou une activité de travail"
      }
    },
    "question-24": {
      label: "Lorsque votre ou vos bras sont tendus, vous arrive-t-il de tenir un outil ou de déplacer un objet?",
      options: {
        less_than_5_lb: "Oui, et il pèse souvent moins de 5 lb / 2 kg",
        "5_to_10_lb": "Oui, et il pèse souvent de 5 à 10 lb / 2 à 4,5 kg",
        more_than_10_lb: "Oui, et il pèse souvent plus de 10 lb / 4,5 kg",
        no: "Non, je ne tiens pas d'outils ou d'objets lorsque mon ou mes bras sont tendus"
      }
    },
    "question-25": {
      label: "Quelle est la position de votre tête lorsque vous effectuez l'emploi, la tâche ou l'activité de travail que vous évaluez aujourd'hui?",
      options: {
        neutral: "Elle est souvent neutre, directement entre les épaules, le menton à niveau",
        slight_tilt: "Elle est souvent inclinée vers le haut ou le bas de moins de 15 degrés",
        deep_tilt: "Elle est souvent inclinée vers le haut, le bas ou le côté de plus de 15 degrés"
      }
    },
    "question-26": {
      label: "Jusqu'à quel point pliez-vous habituellement votre poignet vers le haut et vers le bas? Veuillez utiliser l'image ci-dessous comme référence.",
      options: {
        "0_to_14": "Habituellement de 0 à 14 degrés vers le haut ou vers le bas",
        "15_to_30": "Habituellement de 15 à 30 degrés",
        more_than_30: "Habituellement plus de 30 degrés"
      }
    },
    "question-27": {
      label: "Jusqu'à quel point inclinez-vous votre poignet d'un côté à l'autre?",
      options: {
        "0_to_10": "Habituellement de 0 à 10 degrés vers la gauche ou la droite",
        "10_to_20": "Habituellement de 10 à 20 degrés",
        more_than_20: "Habituellement plus de 20 degrés"
      }
    },
    "question-28": {
      label: "Vous est-il possible de garder près de votre corps tous les objets que vous devez pousser, tirer, soulever, utiliser, etc.?",
      options: {
        frequently: "Oui, fréquemment",
        sometimes: "Oui, parfois",
        never: "Non, jamais"
      }
    },
    "question-29": {
      label:
        "Pensez à une journée de travail typique ou, si vous évaluez une tâche ou une activité précise, à la partie de la journée où vous l'effectuez. Combien de temps passez-vous à effectuer des mouvements semblables encore et encore?",
      options: {
        less_than_30_min: "Moins de 30 minutes par jour",
        "30_min_to_2_hours": "30 minutes à 2 heures par jour",
        "2_to_4_hours": "2 à 4 heures par jour",
        more_than_4_hours: "Plus de 4 heures par jour"
      }
    },
    "question-30": {
      label: "Combien de temps passez-vous à plier votre poignet vers le haut ou vers le bas de plus de 15 degrés? Veuillez utiliser l'image ci-dessous comme référence.",
      options: {
        less_than_1_hour: "Moins de 1 heure par jour",
        "1_to_2_hours": "1 à 2 heures par jour",
        more_than_2_hours: "Plus de 2 heures par jour",
        none: "Aucun temps"
      }
    },
    "question-31": {
      label: "Combien de temps passez-vous à incliner votre poignet de plus de 15 degrés vers la gauche ou la droite? Veuillez utiliser l'image ci-dessous comme référence.",
      options: {
        less_than_1_hour: "Moins de 1 heure par jour",
        "1_to_2_hours": "1 à 2 heures par jour",
        more_than_2_hours: "Plus de 2 heures par jour",
        none: "Aucun temps"
      }
    },
    "question-32": {
      label: "Combien de temps passez-vous à exercer des efforts musculaires importants, plus de 18 lb / 8 kg avec votre propre force, lorsque vous utilisez un outil ou manipulez un objet?",
      options: {
        less_than_5_min: "Moins de 5 minutes par jour",
        "5_to_25_min": "5 à 25 minutes par jour",
        "30_min_to_2_5_hours": "30 minutes à 2,5 heures par jour",
        "2_5_to_5_5_hours": "2,5 à 5,5 heures par jour",
        more_than_5_5_hours: "Plus de 5,5 heures par jour"
      }
    },
    "question-33": {
      label:
        "Lorsque vous saisissez un objet entre votre pouce et le bout de vos doigts, on appelle cela une prise en pince. Lorsque vous effectuez l'emploi, la tâche ou l'activité de travail que vous évaluez aujourd'hui, combien de temps passez-vous à utiliser une prise en pince pour tenir un objet de plus de 2 lb / 1 kg?",
      options: {
        less_than_2_hours: "Moins de 2 heures par jour",
        more_than_2_hours: "Plus de 2 heures par jour",
        none: "Aucun temps"
      }
    },
    "question-34": {
      label:
        "Lorsque vous enroulez votre main autour d'un objet pour le tenir, on appelle cela une prise de force. Combien de temps passez-vous à utiliser une prise de force pour tenir un objet de plus de 10 lb / 4,5 kg?",
      options: {
        less_than_2_hours: "Moins de 2 heures par jour",
        more_than_2_hours: "Plus de 2 heures par jour",
        none: "Aucun temps"
      }
    },
    "question-35": {
      label: "Si vous utilisez des outils ou de l'équipement qui causent des vibrations dans une partie ou l'ensemble de votre corps, combien de temps passez-vous à les utiliser?",
      options: {
        less_than_1_hour: "Moins de 1 heure par jour",
        "1_to_4_hours": "1 à 4 heures par jour",
        more_than_4_hours: "Plus de 4 heures par jour",
        does_not_apply: "Je n'utilise pas ce type d'outils ou d'équipement"
      }
    },
    "question-36": {
      label:
        "Si vous poussez ou tirez des articles de plus de 80 lb / 36 kg, combien de temps passez-vous à les déplacer sur des surfaces rugueuses, comme du gravier, de la tuile ou un sol inégal, ou sur des surfaces molles, comme du sable, de la boue ou du gazon?",
      options: {
        less_than_5_min: "Moins de 5 minutes par jour",
        "5_min_to_1_hour": "5 minutes à 1 heure par jour",
        more_than_1_hour: "Plus de 1 heure par jour",
        does_not_apply: "Je ne déplace pas ce type d'articles sur des surfaces rugueuses ou molles"
      }
    },
    "question-37": {
      label:
        "Pensez à une journée de travail typique ou, si vous évaluez une tâche ou une activité précise, à la partie de la journée où vous l'effectuez. Êtes-vous parfois distrait par des bruits, comme des sirènes, des conversations fortes, la circulation, etc.?",
      options: {
        frequently: "Fréquemment",
        sometimes: "Parfois",
        no: "Non"
      }
    },
    "question-38": {
      label: "Êtes-vous affecté par le soleil qui brille ou se reflète dans vos yeux, c'est-à-dire par l'éblouissement?",
      options: frequencyOptions
    },
    "question-39": {
      label: "Si votre travail exige de regarder de petits détails ou de lire de petits caractères, pouvez-vous le faire facilement?",
      options: {
        ...frequencyOptions,
        does_not_apply: "Mon travail ne m'oblige pas à le faire"
      }
    },
    "question-40": {
      label: "Si vous travaillez dans des environnements froids, ressentez-vous de l'inconfort dans les bras, le dos, les jambes, les doigts et/ou les orteils?",
      options: {
        yes: "Oui",
        no: "Non",
        does_not_apply: "Je ne travaille pas dans des environnements froids"
      }
    },
    "question-41": {
      label: "Compte tenu des exigences de votre travail, à quelle fréquence vous demande-t-on de faire des heures supplémentaires pendant une heure ou plus?",
      options: frequencyOptions
    },
    "question-42": {
      label: "À quelle fréquence vous demande-t-on de travailler avec des échéances serrées?",
      options: frequencyOptions
    }
  }
};


