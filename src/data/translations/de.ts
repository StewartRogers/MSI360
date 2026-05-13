import type { Translation } from "../../types";

const bodySideOptions = {
  one_side: "Schmerzen oder Beschwerden auf einer Körperseite, z. B. links oder rechts",
  both_sides: "Schmerzen oder Beschwerden auf der linken und rechten Seite",
  lasted_two_days: "Die Schmerzen dauerten 2 oder mehr Tage an"
};

const extentOptions = {
  great_extent: "In hohem Maße",
  some_extent: "In gewissem Maße",
  rarely: "Selten",
  not_at_all: "Überhaupt nicht"
};

const mostSomeNeverOptions = {
  most: "Die meiste Zeit",
  some: "Einen Teil der Zeit",
  never: "Nie"
};

const frequencyOptions = {
  frequently: "Häufig",
  sometimes: "Manchmal",
  rarely: "Selten",
  never: "Nie"
};

export const de: Translation = {
  app: {
    title: "MSI360",
    disclosure: "Prototyp: Ihre Antworten bleiben in diesem Browser, sofern Sie Ihren Bericht nicht herunterladen oder teilen.",
    continue_button: "Weiter",
    back_button: "Zurück",
    processing_button: "Wird verarbeitet",
    analyzing_button: "Wird analysiert",
    description_title: "Beschreibung",
    description_body:
      "Die folgenden Fragen beziehen sich auf die Arbeit, die Sie an einem typischen Arbeitstag ausführen, oder auf die konkrete Aufgabe oder Tätigkeit, die Sie heute bewerten möchten. Ziel ist, dass Sie MSI360 mitteilen, welche Handlungen Sie ausführen, um Ihre Arbeit zu erledigen."
  },
  sections: {
    intro: "Über die Arbeit",
    symptoms: "Aktuelle Symptome",
    contact_stress: "Kontaktbelastung",
    force: "Kraft",
    awkward_postures: "Ungünstige Körperhaltungen",
    repetition: "Wiederholung",
    environmental: "Umgebungsfaktoren",
    organizational: "Arbeitsorganisation"
  },
  questions: {
    "question-1": {
      label: "Welche Rolle haben Sie bei der Tätigkeit, die Sie heute bewerten möchten?",
      options: {
        worker: "Beschäftigte/r",
        supervisor: "Vorgesetzte/r",
        manager: "Manager/in",
        employer: "Arbeitgeber/in",
        health_safety_committee: "Mitglied eines Arbeitsschutzausschusses"
      }
    },
    "question-2": {
      label: "Wie lange sind Sie bei Ihrem aktuellen Arbeitgeber bereits in dieser Rolle tätig?",
      options: {
        less_than_year: "Weniger als ein Jahr",
        one_to_five: "1 bis 5 Jahre",
        six_to_ten: "6 bis 10 Jahre",
        more_than_ten: "Mehr als 10 Jahre"
      }
    },
    "question-3": {
      label: "Welche Aufgabe oder Arbeitstätigkeit möchten Sie bewerten?",
      help_text: "Bitte beschreiben Sie kurz die konkrete Aufgabe oder Tätigkeit, die Sie bewerten möchten. Geben Sie, falls zutreffend, Details zu Körperhaltung, Beschwerden, Arbeitsplatzergonomie und/oder Pausenlänge an."
    },
    "question-4": {
      label: "Bitte geben Sie Ihre Körpergröße anhand der folgenden Optionen an:",
      options: {
        under_5_4: "Unter 5'4\" (< 1,62 m)",
        "5_4_to_5_9": "5'4\" - 5'9\" (1,62 m - 1,75 m)",
        "5_10_to_6_2": "5'10\" - 6'2\" (1,76 m - 1,88 m)",
        over_6_2: "Über 6'2\" (> 1,88 m)",
        prefer_not_to_say: "Möchte ich nicht angeben"
      }
    },
    "question-5": {
      label: "Wie würden Sie die Art der zu bewertenden Arbeit oder Aufgabe zusammenfassen?",
      options: {
        office_clerical: "Büro- oder Verwaltungstätigkeit, überwiegend am Schreibtisch",
        not_desk_based: "Nicht an einen Schreibtisch im Büro gebunden",
        both_setups: "Beide Arbeitsformen"
      }
    },
    "question-6": {
      label: "Sitzen oder stehen Sie typischerweise während Ihres Arbeitstags?",
      options: {
        mostly_sit: "Ich sitze normalerweise den größten Teil des Tages",
        mostly_stand_move: "Ich stehe oder bewege mich normalerweise den größten Teil des Tages",
        sit_and_stand: "Ich sitze und stehe im Laufe des Tages"
      }
    },
    "question-7": {
      label: "In welchem Ausmaß holt Ihr Arbeitgeber oder Ihre vorgesetzte Person Ihr Feedback zu Werkzeugen oder Ausrüstung ein, bevor diese gekauft werden?",
      options: extentOptions
    },
    "question-8": {
      label: "In welchem Ausmaß holt Ihr Arbeitgeber oder Ihre vorgesetzte Person Ihr Feedback dazu ein, wie Ihre Arbeit organisiert und/oder ausgeführt werden sollte?",
      options: extentOptions
    },
    "question-9": {
      label: "Hatten Sie in den letzten 7 Tagen arbeitsbedingte Schmerzen oder Beschwerden?",
      options: {
        yes: "Ja",
        no: "Nein"
      }
    },
    "question-10": {
      label:
        "Bitte geben Sie in der folgenden Tabelle die Körperbereiche an, in denen Sie während oder nach der zu bewertenden Arbeit oder Aufgabe arbeitsbedingte Schmerzen oder Beschwerden hatten.\n\nGeben Sie an, ob a) eine oder beide Körperseiten betroffen waren und b) die Schmerzen 2 oder mehr Tage anhielten.",
      groups: {
        neck: { label: "1. Nacken", options: bodySideOptions },
        shoulders_upper_arms: { label: "2. Schulter(n) oder Oberarm/Oberarme", options: bodySideOptions },
        elbows_forearms: { label: "3. Ellbogen oder Unterarm/Unterarme", options: bodySideOptions },
        wrists_hands_fingers: { label: "4. Handgelenk(e), Hand/Hände oder Finger", options: bodySideOptions },
        lower_back: { label: "5. Unterer Rücken", options: bodySideOptions },
        hips_upper_legs: { label: "6. Hüfte(n) oder Oberschenkel", options: bodySideOptions },
        knees_lower_legs: { label: "7. Knie oder Unterschenkel", options: bodySideOptions },
        ankles_feet: { label: "8. Knöchel oder Fuß/Füße", options: bodySideOptions }
      }
    },
    "question-11": {
      label:
        "Denken Sie an einen typischen Arbeitstag oder, wenn Sie eine konkrete Aufgabe oder Tätigkeit bewerten, an den Teil des Arbeitstags, in dem Sie diese Aufgabe ausführen. Wie viel Zeit verbringen Sie damit, einen Körperteil auf scharfe Gegenstände oder Kanten zu lehnen oder darauf abzustützen?",
      options: {
        less_than_30_min: "Weniger als 30 Minuten pro Tag",
        "30_min_to_1_hour": "30 Minuten bis 1 Stunde pro Tag",
        more_than_1_hour: "Mehr als 1 Stunde pro Tag",
        does_not_apply: "Ich lehne mich bei der Arbeit nicht auf scharfe Gegenstände oder Kanten"
      }
    },
    "question-12": {
      label: "Wie viel Zeit verbringen Sie damit, ohne persönlichen Schutz (z. B. ohne Knieschoner) auf harten oder rauen Oberflächen zu knien?",
      options: {
        less_than_30_min: "Weniger als 30 Minuten pro Tag",
        "30_min_to_1_hour": "30 Minuten bis 1 Stunde pro Tag",
        more_than_1_hour: "Mehr als 1 Stunde pro Tag",
        does_not_apply: "Ich knie bei der Arbeit nicht ohne Schutz auf harten Oberflächen"
      }
    },
    "question-13": {
      label:
        "Denken Sie an die Arten von Werkzeugen oder Gegenständen, die Sie jeweils länger als 30 Minuten halten. Wählen Sie aus der folgenden Liste alle Aussagen aus, die auf diese Gegenstände zutreffen.\n\nDie letzte Option kann nicht ausgewählt werden, wenn eine andere Option angekreuzt wurde.",
      options: {
        poor_grip_size: "Zu groß oder zu klein, um sie richtig zu greifen",
        irregular_unbalanced: "Unregelmäßig geformt oder unausgewogen",
        sharp_handholds: "Haben zu scharfe Griffstellen",
        slippery: "Rutschig",
        none: "Nichts davon"
      }
    },
    "question-14": {
      label:
        "Verwenden Sie irgendeinen Körperteil als behelfsmäßiges Werkzeug, um Ihre Arbeit zu erledigen? Zum Beispiel könnten Sie mit Ihrer Handfläche oder Ihrem Knie Kraft auf eine Oberfläche ausüben.\n\nDie folgende Abbildung zeigt ein Beispiel für diese Art der Körpernutzung.",
      options: {
        less_than_one_hour: "Ja, weniger als 1 Stunde pro Tag",
        more_than_one_hour: "Ja, mehr als 1 Stunde pro Tag",
        no: "Nein, ich benutze meinen Körper bei der Arbeit nicht als behelfsmäßiges Werkzeug"
      }
    },
    "question-15": {
      label:
        "Denken Sie an die Arten von Oberflächen, über die Sie während der heute bewerteten Arbeit, Aufgabe oder Tätigkeit Gegenstände schieben, ziehen oder bewegen. Wählen Sie aus der folgenden Liste alle Aussagen aus, die auf diese Oberflächen zutreffen.",
      options: {
        smooth: "Glatt (z. B. fertige Oberflächen)",
        soft: "Weich (z. B. Sand, Schlamm, Gras)",
        rough: "Rau (z. B. Kies, Fliesen, Granit)",
        does_not_apply: "Ich schiebe oder ziehe keine Gegenstände über Oberflächen, um meine Arbeit zu erledigen"
      }
    },
    "question-16": {
      label: "Wie oft schieben, ziehen oder bewegen Sie Gegenstände, die Sie als schwer empfinden, ohne mechanische Hilfe (z. B. Schubkarre oder Transportroller)?",
      options: mostSomeNeverOptions
    },
    "question-17": {
      label: "Wie schwer sind die Werkzeuge oder Gegenstände, die Sie ohne mechanische Unterstützung anheben, tragen oder halten?",
      options: {
        less_than_5_lb: "Weniger als 5 lb / 2 kg",
        "5_to_18_lb": "5 bis 18 lb / 2 bis 8 kg",
        more_than_18_lb: "Mehr als 18 lb / 8 kg",
        does_not_apply: "Ich hebe, trage oder halte bei der Arbeit keine Werkzeuge oder Gegenstände"
      }
    },
    "question-18": {
      label: "Benötigen Werkzeuge und/oder Geräte, die Sie verwenden, viel Kraft zum Starten? (z. B. ein Rasenmäher mit Zugseil oder ein Pedal, das fest gedrückt werden muss)",
      options: {
        regularly: "Ja, zumindest einige Werkzeuge oder Geräte, die ich regelmäßig benutze, erfordern Kraft",
        occasionally: "Ja, zumindest einige Werkzeuge oder Geräte, die ich gelegentlich benutze, erfordern Kraft",
        no: "Nein, keines der Werkzeuge oder Geräte, die ich benutze, erfordert Kraft zum Starten"
      }
    },
    "question-19": {
      label: "Wenn Sie Gegenstände schieben und/oder ziehen, die Sie als schwer empfinden, in welchem Ausmaß erhalten Sie Unterstützung (z. B. durch eine Kollegin/einen Kollegen oder durch einen Transportroller/eine Schubkarre)?",
      options: {
        great_extent: "In hohem Maße",
        some_extent: "In gewissem Maße",
        do_not_ask: "Ich bitte nicht um Unterstützung",
        ask_but_no_assistance: "Ich bitte um Unterstützung, erhalte sie aber nicht",
        does_not_apply: "Ich schiebe oder ziehe diese Art von Gegenständen während des Arbeitstags nicht"
      }
    },
    "question-20": {
      label:
        "Denken Sie an einen typischen Arbeitstag oder, wenn Sie eine konkrete Aufgabe oder Tätigkeit bewerten, an den Teil des Arbeitstags, in dem Sie diese Aufgabe ausführen. Wie oft arbeiten Sie im Sitzen oder Stehen mit nach vorne, hinten oder zur Seite geneigtem Oberkörper?\n\nBitte wählen Sie die Optionen aus, die auf Sie zutreffen.",
      groups: {
        forward_backward: { label: "Ich neige mich mehr als 15 Grad nach vorne oder hinten", options: mostSomeNeverOptions },
        sideways: { label: "Ich neige mich zur Seite", options: mostSomeNeverOptions }
      }
    },
    "question-21": {
      label: "Drehen Sie bei Ihren Arbeitstätigkeiten manchmal Ihren Oberkörper zu einer Seite, ohne die Position Ihrer Füße zu verändern, während Sie sitzen oder stehen?",
      options: {
        often: "Ja, ich mache das häufig während meiner Arbeit, Aufgabe oder Tätigkeit",
        sometimes: "Ja, ich mache das manchmal während meiner Arbeit, Aufgabe oder Tätigkeit",
        never: "Nein, ich drehe meinen Oberkörper bei der Arbeit nie"
      }
    },
    "question-22": {
      label:
        "Denken Sie an einen typischen Arbeitstag oder, wenn Sie eine konkrete Aufgabe oder Tätigkeit bewerten, an den Teil des Arbeitstags, in dem Sie diese Aufgabe ausführen. Geben Sie beim Sitzen oder Stehen an, wo sich Ihre Hände im Verhältnis zu Ihrem Körper befinden.\n\nBitte wählen Sie die Optionen aus, die auf Sie zutreffen.",
      groups: {
        hands_above_shoulders: { label: "Hände oberhalb der Schultern", options: mostSomeNeverOptions },
        hands_floor_to_knee: { label: "Hände zwischen Boden und Knie", options: mostSomeNeverOptions }
      }
    },
    "question-23": {
      label: "Sind einer oder beide Arme bei der heute bewerteten Arbeit, Aufgabe oder Tätigkeit manchmal vollständig gerade nach vorne ausgestreckt?",
      options: {
        frequently: "Ja, meine Arme sind bei der Arbeit, Aufgabe oder Tätigkeit häufig vollständig gerade nach vorne ausgestreckt",
        sometimes: "Ja, meine Arme sind bei der Arbeit, Aufgabe oder Tätigkeit manchmal vollständig gerade nach vorne ausgestreckt",
        never: "Nein, meine Arme sind bei der Arbeit, Aufgabe oder Tätigkeit nie vollständig gerade nach vorne ausgestreckt"
      }
    },
    "question-24": {
      label: "Halten Sie ein Werkzeug oder bewegen Sie einen Gegenstand, wenn Ihr Arm/Ihre Arme ausgestreckt sind?",
      options: {
        less_than_5_lb: "Ja, und es ist oft weniger als 5 lb / 2 kg",
        "5_to_10_lb": "Ja, und es ist oft 5 bis 10 lb / 2 bis 4,5 kg",
        more_than_10_lb: "Ja, und es ist oft mehr als 10 lb / 4,5 kg",
        no: "Nein, ich halte keine Werkzeuge oder Gegenstände, wenn mein Arm/meine Arme ausgestreckt sind"
      }
    },
    "question-25": {
      label: "Wie ist Ihr Kopf positioniert, wenn Sie die heute bewertete Arbeit, Aufgabe oder Tätigkeit ausführen?",
      options: {
        neutral: "Er ist häufig neutral (direkt zwischen den Schultern; Kinn waagerecht)",
        slight_tilt: "Er ist häufig weniger als 15 Grad nach oben oder unten geneigt",
        deep_tilt: "Er ist häufig mehr als 15 Grad nach oben, unten oder zur Seite geneigt"
      }
    },
    "question-26": {
      label: "Wie weit beugen Sie Ihr Handgelenk typischerweise nach oben und unten? Bitte verwenden Sie das Bild unten als Referenz.",
      options: {
        "0_to_14": "Normalerweise 0 bis 14 Grad nach oben oder unten",
        "15_to_30": "Normalerweise 15 bis 30 Grad",
        more_than_30: "Normalerweise mehr als 30 Grad"
      }
    },
    "question-27": {
      label: "Wie weit winkeln Sie Ihr Handgelenk von Seite zu Seite ab?",
      options: {
        "0_to_10": "Normalerweise 0 bis 10 Grad nach links oder rechts",
        "10_to_20": "Normalerweise 10 bis 20 Grad",
        more_than_20: "Normalerweise mehr als 20 Grad"
      }
    },
    "question-28": {
      label: "Ist es Ihnen möglich, alle Gegenstände, die Sie schieben, ziehen, heben, benutzen usw. müssen, nahe am Körper zu halten?",
      options: {
        frequently: "Ja, häufig",
        sometimes: "Ja, manchmal",
        never: "Nein, nie"
      }
    },
    "question-29": {
      label:
        "Denken Sie an einen typischen Arbeitstag oder, wenn Sie eine konkrete Aufgabe oder Tätigkeit bewerten, an den Teil des Arbeitstags, in dem Sie diese Aufgabe ausführen. Wie viel Zeit verbringen Sie mit wiederholten ähnlichen Bewegungen?",
      options: {
        less_than_30_min: "Weniger als 30 Minuten pro Tag",
        "30_min_to_2_hours": "30 Minuten bis 2 Stunden pro Tag",
        "2_to_4_hours": "2 bis 4 Stunden pro Tag",
        more_than_4_hours: "Mehr als 4 Stunden pro Tag"
      }
    },
    "question-30": {
      label: "Wie viel Zeit verbringen Sie damit, Ihr Handgelenk mehr als 15 Grad nach oben oder unten zu beugen? Bitte verwenden Sie das Bild unten als Referenz.",
      options: {
        less_than_1_hour: "Weniger als 1 Stunde pro Tag",
        "1_to_2_hours": "1 bis 2 Stunden pro Tag",
        more_than_2_hours: "Mehr als 2 Stunden pro Tag",
        none: "Gar keine Zeit"
      }
    },
    "question-31": {
      label: "Wie viel Zeit verbringen Sie damit, Ihr Handgelenk mehr als 15 Grad nach links oder rechts abzuwinkeln? Bitte verwenden Sie das Bild unten als Referenz.",
      options: {
        less_than_1_hour: "Weniger als 1 Stunde pro Tag",
        "1_to_2_hours": "1 bis 2 Stunden pro Tag",
        more_than_2_hours: "Mehr als 2 Stunden pro Tag",
        none: "Gar keine Zeit"
      }
    },
    "question-32": {
      label: "Wie viel Zeit verbringen Sie mit kraftvollen Muskelanstrengungen (mehr als 18 Pfund / 8 kg mit eigener Kraft), wenn Sie ein Werkzeug benutzen oder einen Gegenstand handhaben?",
      options: {
        less_than_5_min: "Weniger als 5 Minuten pro Tag",
        "5_to_25_min": "5 bis 25 Minuten pro Tag",
        "30_min_to_2_5_hours": "30 Minuten bis 2,5 Stunden pro Tag",
        "2_5_to_5_5_hours": "2,5 bis 5,5 Stunden pro Tag",
        more_than_5_5_hours: "Mehr als 5,5 Stunden pro Tag"
      }
    },
    "question-33": {
      label:
        "Wenn Sie einen Gegenstand zwischen Daumen und Fingerspitzen greifen, nennt man das Pinzettengriff. Wie viel Zeit verbringen Sie bei der heute bewerteten Arbeit, Aufgabe oder Tätigkeit damit, einen Gegenstand, der schwerer als 2 Pfund / 1 kg ist, mit einem Pinzettengriff zu halten?",
      options: {
        less_than_2_hours: "Weniger als 2 Stunden pro Tag",
        more_than_2_hours: "Mehr als 2 Stunden pro Tag",
        none: "Gar keine Zeit"
      }
    },
    "question-34": {
      label: "Wenn Sie Ihre Hand um einen Gegenstand legen, um ihn zu halten, nennt man das Kraftgriff. Wie viel Zeit verbringen Sie damit, einen Gegenstand, der schwerer als 10 Pfund / 4,5 kg ist, mit einem Kraftgriff zu halten?",
      options: {
        less_than_2_hours: "Weniger als 2 Stunden pro Tag",
        more_than_2_hours: "Mehr als 2 Stunden pro Tag",
        none: "Gar keine Zeit"
      }
    },
    "question-35": {
      label: "Wenn Sie Werkzeuge oder Geräte verwenden, die Vibrationen in einem Teil oder im ganzen Körper verursachen, wie viel Zeit verbringen Sie mit der Nutzung dieser Werkzeuge?",
      options: {
        less_than_1_hour: "Weniger als 1 Stunde pro Tag",
        "1_to_4_hours": "1 bis 4 Stunden pro Tag",
        more_than_4_hours: "Mehr als 4 Stunden pro Tag",
        does_not_apply: "Ich verwende diese Art von Werkzeugen oder Geräten nicht"
      }
    },
    "question-36": {
      label: "Wenn Sie Gegenstände schieben oder ziehen, die schwerer als 80 Pfund / 36 kg sind, wie viel Zeit verbringen Sie damit, diese Gegenstände über raue Oberflächen (wie Kies, Fliesen oder unebenen Boden) oder weiche Oberflächen (wie Sand, Schlamm oder Gras) zu bewegen?",
      options: {
        less_than_5_min: "Weniger als 5 Minuten pro Tag",
        "5_min_to_1_hour": "5 Minuten bis 1 Stunde pro Tag",
        more_than_1_hour: "Mehr als 1 Stunde pro Tag",
        does_not_apply: "Ich bewege diese Art von Gegenständen nicht über raue oder weiche Oberflächen"
      }
    },
    "question-37": {
      label:
        "Denken Sie an einen typischen Arbeitstag oder, wenn Sie eine konkrete Aufgabe oder Tätigkeit bewerten, an den Teil des Arbeitstags, in dem Sie diese Aufgabe ausführen. Werden Sie manchmal durch Geräusche abgelenkt (Sirenen, lautes Sprechen, Verkehr usw.)?",
      options: {
        frequently: "Häufig",
        sometimes: "Manchmal",
        no: "Nein"
      }
    },
    "question-38": {
      label: "Werden Sie durch Sonnenlicht oder Reflexionen in Ihren Augen beeinträchtigt (Blendung)?",
      options: frequencyOptions
    },
    "question-39": {
      label: "Wenn Ihre Arbeit erfordert, dass Sie feine Details erkennen oder Kleingedrucktes lesen, können Sie das problemlos tun?",
      options: {
        ...frequencyOptions,
        does_not_apply: "Meine Arbeit erfordert das nicht"
      }
    },
    "question-40": {
      label: "Wenn Sie in kalten Umgebungen arbeiten, verspüren Sie Beschwerden in Armen, Rücken, Beinen, Fingern und/oder Zehen?",
      options: {
        yes: "Ja",
        no: "Nein",
        does_not_apply: "Ich arbeite nicht in kalten Umgebungen"
      }
    },
    "question-41": {
      label: "Wie oft werden Sie angesichts Ihrer Arbeitsanforderungen gebeten, eine Stunde oder länger Überstunden zu machen?",
      options: frequencyOptions
    },
    "question-42": {
      label: "Wie oft werden Sie gebeten, unter engen Fristen zu arbeiten?",
      options: frequencyOptions
    }
  }
};
