import type { Translation } from "../../types";

const bodySideOptions = {
  one_side: "Dolor o molestia en un lado, por ejemplo el lado izquierdo o derecho del cuerpo",
  both_sides: "Dolor o molestia en ambos lados, izquierdo y derecho",
  lasted_two_days: "El dolor ha durado 2 días o más"
};

const extentOptions = {
  great_extent: "En gran medida",
  some_extent: "En cierta medida",
  rarely: "Rara vez",
  not_at_all: "En absoluto"
};

const mostSomeNeverOptions = {
  most: "La mayor parte del tiempo",
  some: "Parte del tiempo",
  never: "Nunca"
};

const frequencyOptions = {
  frequently: "Frecuentemente",
  sometimes: "A veces",
  rarely: "Rara vez",
  never: "Nunca"
};

export const es: Translation = {
  app: {
    title: "MSI360",
    disclosure: "Prototipo: tus respuestas permanecen en este navegador a menos que elijas descargar o compartir tu informe.",
    description_title: "Descripción",
    description_body:
      "Las siguientes preguntas tratan sobre el trabajo que realizas durante un día laboral típico o cuando completas la tarea o actividad específica que deseas evaluar hoy. La intención es que le cuentes a MSI360 las acciones que realizas para hacer tu trabajo."
  },
  sections: {
    intro: "Sobre el trabajo",
    symptoms: "Síntomas actuales",
    contact_stress: "Estrés por contacto",
    force: "Fuerza",
    awkward_postures: "Posturas incómodas",
    repetition: "Repetición",
    environmental: "Factores ambientales",
    organizational: "Organización del trabajo"
  },
  questions: {
    "question-1": {
      label: "¿Cuál es tu rol en la actividad que deseas evaluar hoy?",
      options: {
        worker: "Trabajador",
        supervisor: "Supervisor",
        manager: "Gerente",
        employer: "Empleador",
        health_safety_committee: "Miembro de un comité de salud y seguridad"
      }
    },
    "question-2": {
      label: "¿Cuánto tiempo llevas en este rol con tu empleador actual?",
      options: {
        less_than_year: "Menos de un año",
        one_to_five: "De 1 a 5 años",
        six_to_ten: "De 6 a 10 años",
        more_than_ten: "Más de 10 años"
      }
    },
    "question-3": {
      label: "¿Cuál es la tarea o actividad laboral que deseas evaluar?",
      help_text:
        "Proporciona una breve descripción de la tarea o actividad específica que deseas evaluar, incluyendo detalles como postura, molestias, ergonomía del puesto de trabajo y/o duración de los descansos cuando corresponda."
    },
    "question-4": {
      label: "Indica tu estatura usando las opciones a continuación:",
      options: {
        under_5_4: "Menos de 5'4\" (< 1.62 m)",
        "5_4_to_5_9": "5'4\" - 5'9\" (1.62 m - 1.75 m)",
        "5_10_to_6_2": "5'10\" - 6'2\" (1.76 m - 1.88 m)",
        over_6_2: "Más de 6'2\" (> 1.88 m)",
        prefer_not_to_say: "Prefiero no responder"
      }
    },
    "question-5": {
      label: "¿Cómo resumirías el tipo de trabajo o tarea que se está evaluando?",
      options: {
        office_clerical: "Trabajo o tarea de oficina o administrativa, basada en escritorio",
        not_desk_based: "No basada en un escritorio en una oficina",
        both_setups: "Ambas situaciones"
      }
    },
    "question-6": {
      label: "¿Normalmente te sientas o estás de pie durante tu jornada laboral?",
      options: {
        mostly_sit: "Normalmente estoy sentado la mayor parte del día",
        mostly_stand_move: "Normalmente estoy de pie o me muevo la mayor parte del día",
        sit_and_stand: "Me siento y estoy de pie durante el día"
      }
    },
    "question-7": {
      label: "¿En qué medida tu empleador o supervisor pide tu opinión sobre herramientas o equipos antes de comprarlos?",
      options: extentOptions
    },
    "question-8": {
      label: "¿En qué medida tu empleador o supervisor pide tu opinión sobre cómo debe organizarse y/o realizarse el trabajo que haces?",
      options: extentOptions
    },
    "question-9": {
      label: "En los últimos 7 días, ¿has tenido dolor o molestia relacionados con el trabajo?",
      options: {
        yes: "Sí",
        no: "No"
      }
    },
    "question-10": {
      label:
        "Usando la tabla a continuación, indica las partes específicas del cuerpo donde has tenido dolor o molestia relacionados con el trabajo durante o después de realizar el trabajo o la tarea que se está evaluando.\n\nIndica si a) estuvo afectado uno o ambos lados del cuerpo, y b) el dolor duró 2 días o más.",
      groups: {
        neck: { label: "1. Cuello", options: bodySideOptions },
        shoulders_upper_arms: { label: "2. Hombros o parte superior de los brazos", options: bodySideOptions },
        elbows_forearms: { label: "3. Codos o antebrazos", options: bodySideOptions },
        wrists_hands_fingers: { label: "4. Muñecas, manos o dedos", options: bodySideOptions },
        lower_back: { label: "5. Parte baja de la espalda", options: bodySideOptions },
        hips_upper_legs: { label: "6. Caderas o parte superior de las piernas, muslos", options: bodySideOptions },
        knees_lower_legs: { label: "7. Rodillas o parte inferior de las piernas, pantorrillas", options: bodySideOptions },
        ankles_feet: { label: "8. Tobillos o pies", options: bodySideOptions }
      }
    },
    "question-11": {
      label:
        "Piensa en un día laboral típico o, si estás evaluando una tarea o actividad específica, en la parte del día en que realizas esa tarea. ¿Cuánto tiempo pasas inclinándote o apoyando parte de tu cuerpo sobre objetos o bordes afilados?",
      options: {
        less_than_30_min: "Menos de 30 minutos al día",
        "30_min_to_1_hour": "De 30 minutos a 1 hora al día",
        more_than_1_hour: "Más de 1 hora al día",
        does_not_apply: "No me apoyo en objetos o bordes afilados en el trabajo"
      }
    },
    "question-12": {
      label: "¿Cuánto tiempo pasas arrodillado sobre superficies duras o ásperas sin protección personal, por ejemplo sin rodilleras?",
      options: {
        less_than_30_min: "Menos de 30 minutos al día",
        "30_min_to_1_hour": "Entre 30 minutos y 1 hora al día",
        more_than_1_hour: "Más de 1 hora al día",
        does_not_apply: "No me arrodillo sobre superficies duras sin protección en el trabajo"
      }
    },
    "question-13": {
      label:
        "Piensa en los tipos de herramientas u objetos que sostienes durante más de 30 minutos seguidos. Usando la lista de descripciones a continuación, selecciona todas las afirmaciones que correspondan a estos elementos.\n\nLa última opción no puede seleccionarse si se marcó alguna otra opción.",
      options: {
        poor_grip_size: "Demasiado grandes o pequeños para sujetarlos correctamente",
        irregular_unbalanced: "De forma irregular o desequilibrados",
        sharp_handholds: "Tienen zonas de agarre demasiado afiladas",
        slippery: "Resbaladizos",
        none: "Ninguna de las anteriores"
      }
    },
    "question-14": {
      label:
        "¿Usas alguna parte de tu cuerpo como herramienta improvisada para completar tu trabajo? Por ejemplo, podrías usar la palma de la mano o la rodilla para aplicar fuerza sobre una superficie.\n\nLa ilustración a continuación muestra un ejemplo de usar el cuerpo de esta manera.",
      options: {
        less_than_one_hour: "Sí, por menos de 1 hora al día",
        more_than_one_hour: "Sí, por más de 1 hora al día",
        no: "No, no uso mi cuerpo como herramienta improvisada en mi trabajo"
      }
    },
    "question-15": {
      label:
        "Piensa en los tipos de superficies sobre las que empujas, jalas o mueves objetos durante el trabajo, tarea o actividad laboral que estás evaluando hoy. Usando la lista de descripciones a continuación, selecciona todas las afirmaciones que correspondan a estas superficies.",
      options: {
        smooth: "Lisas, por ejemplo superficies acabadas",
        soft: "Blandas, por ejemplo arena, lodo, césped",
        rough: "Ásperas, por ejemplo grava, baldosa, granito",
        does_not_apply: "No empujo ni jalo objetos sobre superficies para completar mi trabajo"
      }
    },
    "question-16": {
      label: "¿Con qué frecuencia empujas, jalas o mueves objetos que consideras pesados sin ayuda mecánica, por ejemplo una carretilla o plataforma rodante?",
      options: mostSomeNeverOptions
    },
    "question-17": {
      label: "¿Qué tan pesadas son las herramientas u objetos que levantas, transportas o sostienes sin asistencia mecánica?",
      options: {
        less_than_5_lb: "Menos de 5 lb / 2 kg",
        "5_to_18_lb": "De 5 a 18 lb / de 2 a 8 kg",
        more_than_18_lb: "Más de 18 lb / 8 kg",
        does_not_apply: "No levanto, transporto ni sostengo herramientas u objetos en el trabajo"
      }
    },
    "question-18": {
      label: "¿Alguna de las herramientas y/o equipos que usas requiere mucha fuerza para arrancar, por ejemplo una cortadora de césped con cuerda que debes jalar o un pedal que debes presionar con firmeza?",
      options: {
        regularly: "Sí, al menos algunas herramientas o equipos que uso regularmente requieren fuerza",
        occasionally: "Sí, al menos algunas herramientas o equipos que uso ocasionalmente requieren fuerza",
        no: "No, ninguna herramienta o equipo que uso requiere fuerza para arrancar"
      }
    },
    "question-19": {
      label: "Al empujar y/o jalar objetos que consideras pesados, ¿en qué medida recibes ayuda, por ejemplo de un compañero de trabajo o usando una plataforma rodante o carretilla?",
      options: {
        great_extent: "En gran medida",
        some_extent: "En cierta medida",
        do_not_ask: "No pido ayuda",
        ask_but_no_assistance: "Pido ayuda pero no la recibo",
        does_not_apply: "No empujo ni jalo este tipo de objetos durante la jornada laboral"
      }
    },
    "question-20": {
      label:
        "Piensa en un día laboral típico o, si estás evaluando una tarea o actividad específica, en la parte del día en que realizas esa tarea. Al estar sentado o de pie, ¿con qué frecuencia trabajas con la parte superior del cuerpo inclinada hacia adelante, hacia atrás o hacia un lado?\n\nSelecciona las opciones que correspondan.",
      groups: {
        forward_backward: { label: "Me inclino hacia adelante o hacia atrás más de 15 grados", options: mostSomeNeverOptions },
        sideways: { label: "Me inclino hacia un lado", options: mostSomeNeverOptions }
      }
    },
    "question-21": {
      label: "Al realizar tus actividades laborales, ¿alguna vez giras la parte superior del cuerpo hacia un lado sin cambiar la posición de los pies mientras estás sentado o de pie?",
      options: {
        often: "Sí, hago esto con frecuencia durante mi trabajo, tarea o actividad laboral",
        sometimes: "Sí, hago esto a veces durante mi trabajo, tarea o actividad laboral",
        never: "No, nunca giro la parte superior del cuerpo cuando trabajo"
      }
    },
    "question-22": {
      label:
        "Piensa en un día laboral típico o, si estás evaluando una tarea o actividad específica, en la parte del día en que realizas esa tarea. Al estar sentado o de pie, indica dónde se encuentran tus manos en relación con tu cuerpo.\n\nSelecciona las opciones que correspondan.",
      groups: {
        hands_above_shoulders: { label: "Manos por encima de los hombros", options: mostSomeNeverOptions },
        hands_floor_to_knee: { label: "Manos entre el piso y la rodilla", options: mostSomeNeverOptions }
      }
    },
    "question-23": {
      label: "¿Alguna vez tienes uno o ambos brazos completamente extendidos hacia adelante cuando haces el trabajo, tarea o actividad laboral que estás evaluando hoy?",
      options: {
        frequently: "Sí, mis brazos están frecuentemente completamente extendidos hacia adelante al hacer un trabajo, tarea o actividad laboral",
        sometimes: "Sí, mis brazos están a veces completamente extendidos hacia adelante al hacer un trabajo, tarea o actividad laboral",
        never: "No, mis brazos nunca están completamente extendidos hacia adelante al hacer un trabajo, tarea o actividad laboral"
      }
    },
    "question-24": {
      label: "Cuando tus brazos están extendidos, ¿alguna vez sostienes una herramienta o mueves un objeto?",
      options: {
        less_than_5_lb: "Sí, y a menudo pesa menos de 5 lb / 2 kg",
        "5_to_10_lb": "Sí, y a menudo pesa de 5 a 10 lb / de 2 a 4.5 kg",
        more_than_10_lb: "Sí, y a menudo pesa más de 10 lb / 4.5 kg",
        no: "No, no sostengo herramientas ni objetos cuando mis brazos están extendidos"
      }
    },
    "question-25": {
      label: "¿Cómo está posicionada tu cabeza cuando haces el trabajo, tarea o actividad laboral que estás evaluando hoy?",
      options: {
        neutral: "A menudo está neutral, directamente entre los hombros y con la barbilla nivelada",
        slight_tilt: "A menudo está inclinada hacia arriba o abajo menos de 15 grados",
        deep_tilt: "A menudo está inclinada hacia arriba, abajo o hacia un lado más de 15 grados"
      }
    },
    "question-26": {
      label: "¿Cuánto sueles doblar la muñeca hacia arriba y hacia abajo? Usa la imagen de abajo como referencia.",
      options: {
        "0_to_14": "Normalmente de 0 a 14 grados hacia arriba o hacia abajo",
        "15_to_30": "Normalmente de 15 a 30 grados",
        more_than_30: "Normalmente más de 30 grados"
      }
    },
    "question-27": {
      label: "¿Cuánto inclinas la muñeca de lado a lado?",
      options: {
        "0_to_10": "Normalmente de 0 a 10 grados a la izquierda o derecha",
        "10_to_20": "Normalmente de 10 a 20 grados",
        more_than_20: "Normalmente más de 20 grados"
      }
    },
    "question-28": {
      label: "¿Es posible mantener cerca de tu cuerpo todos los objetos que necesitas empujar, jalar, levantar, usar, etc.?",
      options: {
        frequently: "Sí, frecuentemente",
        sometimes: "Sí, a veces",
        never: "No, nunca"
      }
    },
    "question-29": {
      label:
        "Piensa en un día laboral típico o, si estás evaluando una tarea o actividad específica, en la parte del día en que realizas esa tarea. ¿Cuánto tiempo pasas realizando movimientos similares una y otra vez?",
      options: {
        less_than_30_min: "Menos de 30 minutos al día",
        "30_min_to_2_hours": "De 30 minutos a 2 horas al día",
        "2_to_4_hours": "De 2 a 4 horas al día",
        more_than_4_hours: "Más de 4 horas al día"
      }
    },
    "question-30": {
      label: "¿Cuánto tiempo pasas doblando la muñeca hacia arriba o hacia abajo más de 15 grados? Usa la imagen de abajo como referencia.",
      options: {
        less_than_1_hour: "Menos de 1 hora al día",
        "1_to_2_hours": "De 1 a 2 horas al día",
        more_than_2_hours: "Más de 2 horas al día",
        none: "Nada de tiempo"
      }
    },
    "question-31": {
      label: "¿Cuánto tiempo pasas inclinando la muñeca más de 15 grados hacia la izquierda o la derecha? Usa la imagen de abajo como referencia.",
      options: {
        less_than_1_hour: "Menos de 1 hora al día",
        "1_to_2_hours": "De 1 a 2 horas al día",
        more_than_2_hours: "Más de 2 horas al día",
        none: "Nada de tiempo"
      }
    },
    "question-32": {
      label: "¿Cuánto tiempo pasas usando esfuerzos musculares intensos, más de 18 libras / 8 kg con tu propia fuerza, al usar una herramienta o manipular un objeto?",
      options: {
        less_than_5_min: "Menos de 5 minutos al día",
        "5_to_25_min": "De 5 a 25 minutos al día",
        "30_min_to_2_5_hours": "De 30 minutos a 2.5 horas al día",
        "2_5_to_5_5_hours": "De 2.5 a 5.5 horas al día",
        more_than_5_5_hours: "Más de 5.5 horas al día"
      }
    },
    "question-33": {
      label:
        "Cuando sujetas un objeto entre el pulgar y las puntas de los dedos, se llama agarre de pinza. Al hacer el trabajo, tarea o actividad laboral que estás evaluando hoy, ¿cuánto tiempo pasas usando un agarre de pinza para sostener un objeto que pesa más de 2 lb / 1 kg?",
      options: {
        less_than_2_hours: "Menos de 2 horas al día",
        more_than_2_hours: "Más de 2 horas al día",
        none: "Nada de tiempo"
      }
    },
    "question-34": {
      label:
        "Cuando rodeas un objeto con la mano para sostenerlo, se llama agarre de fuerza. ¿Cuánto tiempo pasas usando un agarre de fuerza para sostener un objeto que pesa más de 10 lb / 4.5 kg?",
      options: {
        less_than_2_hours: "Menos de 2 horas al día",
        more_than_2_hours: "Más de 2 horas al día",
        none: "Nada de tiempo"
      }
    },
    "question-35": {
      label: "Si usas herramientas o equipos que causan vibraciones en parte o en todo tu cuerpo, ¿cuánto tiempo pasas usando estas herramientas?",
      options: {
        less_than_1_hour: "Menos de 1 hora al día",
        "1_to_4_hours": "De 1 a 4 horas al día",
        more_than_4_hours: "Más de 4 horas al día",
        does_not_apply: "No uso este tipo de herramientas o equipos"
      }
    },
    "question-36": {
      label:
        "Si empujas o jalas objetos que pesan más de 80 lb / 36 kg, ¿cuánto tiempo pasas moviéndolos sobre superficies ásperas, como grava, baldosa o terreno irregular, o superficies blandas, como arena, lodo o césped?",
      options: {
        less_than_5_min: "Menos de 5 minutos al día",
        "5_min_to_1_hour": "De 5 minutos a 1 hora al día",
        more_than_1_hour: "Más de 1 hora al día",
        does_not_apply: "No muevo este tipo de objetos sobre superficies ásperas o blandas"
      }
    },
    "question-37": {
      label:
        "Piensa en un día laboral típico o, si estás evaluando una tarea o actividad específica, en la parte del día en que realizas esa tarea. ¿Alguna vez te distraen ruidos, como sirenas, conversaciones fuertes, tráfico, etc.?",
      options: {
        frequently: "Frecuentemente",
        sometimes: "A veces",
        no: "No"
      }
    },
    "question-38": {
      label: "¿Te afecta que el sol brille o se refleje en tus ojos, es decir, el resplandor?",
      options: frequencyOptions
    },
    "question-39": {
      label: "Si tu trabajo requiere mirar detalles finos o leer letra pequeña, ¿puedes hacerlo fácilmente?",
      options: {
        ...frequencyOptions,
        does_not_apply: "Mi trabajo no requiere que haga esto"
      }
    },
    "question-40": {
      label: "Si trabajas en ambientes fríos, ¿sientes molestia en los brazos, la espalda, las piernas, los dedos de las manos y/o los dedos de los pies?",
      options: {
        yes: "Sí",
        no: "No",
        does_not_apply: "No trabajo en ambientes fríos"
      }
    },
    "question-41": {
      label: "Considerando los requisitos de tu trabajo, ¿con qué frecuencia te piden trabajar horas extra durante una hora o más?",
      options: frequencyOptions
    },
    "question-42": {
      label: "¿Con qué frecuencia te piden trabajar con plazos ajustados?",
      options: frequencyOptions
    }
  }
};
