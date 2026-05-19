import type { Translation } from "../../types";

export const pt: Translation = {
  app: {
    title: "MSI360",
    disclosure: "Protótipo: as suas respostas permanecem neste navegador, a menos que escolha descarregar ou partilhar o seu relatório.",
    continue_button: "Continuar",
    back_button: "Voltar",
    processing_button: "A processar",
    analyzing_button: "A analisar",
    question_progress: "Pergunta {current} de {total}",
    score_summary_title: "Resumo do seu risco de LMERT",
    score_overall_risk: "Risco global de LMERT",
    score_download_report: "Descarregar relatório",
    score_not_available: "N/D",
    score_out_of_4: "{score} em 4",
    score_risk_not_enough: "Dados insuficientes",
    score_risk_low: "Risco baixo",
    score_risk_possible: "Risco possível",
    score_risk_likely: "Risco provável",
    score_risk_known: "Risco conhecido",
    score_factor_not_enough: "Não há dados suficientes para interpretar {factor}.",
    score_factor_low: "Atualmente há baixo risco associado a {factor}.",
    score_factor_possible: "Possível risco de desconforto devido a {factor}.",
    score_factor_likely: "Risco provável de desconforto devido a {factor}.",
    score_factor_known: "Risco conhecido de dor e/ou lesão.",
    score_psychosocial_note: "Os fatores psicossociais influenciaram negativamente a pontuação global de risco de LMERT ({multiplier}).",
    score_subject_contact_stress: "pressão de contacto",
    score_subject_force: "força",
    score_subject_awkward_postures: "posturas inadequadas",
    score_subject_repetition: "repetição",
    score_subject_environmental: "fatores ambientais",
    wrap_email_copy: "Cópia por email",
    wrap_review_results: "Rever resultados",
    wrap_submit_report: "Submeter relatório",
    email_title: "Receber o relatório por email",
    email_body: "Introduza o seu endereço de email se quiser receber uma cópia deste relatório. Isto pode demorar até 15 minutos. Verifique a pasta de lixo eletrónico ou spam se não vir o email na caixa de entrada.",
    email_next_body: "Verá o relatório final no ecrã seguinte.",
    email_address_label: "Endereço de email",
    report_ready_title: "O seu relatório está pronto",
    report_card_title: "Relatório de risco MSI",
    report_date_label: "Data",
    report_task_label: "Trabalho/tarefa analisado:",
    report_overall_score_label: "Pontuação global:",
    report_highest_risk: "Categorias de maior risco:",
    report_no_scored_categories: "Ainda não existem categorias de risco pontuadas",
    report_email_copy_requested: "Cópia por email solicitada para {email}.",
    report_download_pdf: "Descarregar PDF",
    report_email_report: "Enviar relatório por email",
    report_done: "Concluído",
    submit_title: "Gostaria de completar outra avaliação ErgoCheck?",
    submit_option_reuse: "Sim, e gostaria de completar outro relatório usando as mesmas informações fornecidas inicialmente, podendo editá-las conforme necessário.",
    submit_option_restart: "Sim, e gostaria de recomeçar com novas informações",
    submit_option_no: "Não, agora não",
    submit_copy: "Obrigado, prima o botão abaixo para terminar o inquérito.",
    submit_button: "Submeter",
    complete_title: "Obrigado por completar o inquérito MSI 360",
    complete_body: "As suas respostas ajudam a identificar perigos relacionados com MSI no seu local de trabalho e contribuem para um ambiente mais seguro para todos.",
    complete_next_steps_title: "Próximos passos:",
    complete_next_step_review: "Reveja o seu relatório e recomendações",
    complete_next_step_share: "Partilhe as conclusões com o seu supervisor, se adequado",
    complete_next_step_visit: "Visite worksafebc.com para obter recursos adicionais",
    complete_start_new: "Iniciar nova avaliação",
    description_title: "Descrição",
    description_body: "As perguntas seguintes são sobre o trabalho que realiza durante um dia de trabalho típico ou quando está a concluir a tarefa ou atividade específica que gostaria de avaliar hoje. A intenção é que informe o MSI360 sobre as ações que executa para realizar o seu trabalho.",
    ai_loading_task_description: "A analisar a descrição da sua tarefa...",
    ai_task_analysis_fallback_toast: "A resposta da análise de tarefa por IA excedeu o tempo limite. Está a ser usado o fallback local.",
    ai_question_pruning_fallback_toast: "A resposta da seleção de perguntas por IA excedeu o tempo limite. Estão a ser usadas perguntas de seguimento de fallback.",
    ai_fallback_toast_dismiss: "Fechar aviso de fallback da IA"
  },
  sections: {
    intro: "Sobre o trabalho",
    symptoms: "Sintomas atuais",
    contact_stress: "Pressão de contacto",
    force: "Força",
    awkward_postures: "Posturas desfavoráveis",
    repetition: "Repetição",
    environmental: "Fatores ambientais",
    organizational: "Organização do trabalho"
  },
  questions: {
    "question-1": {
      label: "Qual é o seu papel na atividade que gostaria de avaliar hoje?",
      options: {
        worker: "Trabalhador/a",
        supervisor: "Supervisor/a",
        manager: "Gestor/a",
        employer: "Empregador/a",
        health_safety_committee: "Membro de uma Comissão de Saúde e Segurança"
      }
    },
    "question-2": {
      label: "Há quanto tempo desempenha esta função no seu empregador atual?",
      options: {
        less_than_year: "Menos de um ano",
        one_to_five: "1 a 5 anos",
        six_to_ten: "6 a 10 anos",
        more_than_ten: "Mais de 10 anos"
      }
    },
    "question-3": {
      label: "Qual é a tarefa ou atividade de trabalho que gostaria de avaliar?",
      help_text: "Forneça uma breve descrição da tarefa ou atividade específica que gostaria de avaliar, incluindo detalhes como postura, desconforto, ergonomia do posto de trabalho e/ou duração das pausas, quando aplicável."
    },
    "question-4": {
      label: "Indique a sua altura utilizando as opções abaixo:",
      options: {
        under_5_4: "Menos de 5'4\" (< 1,62 m)",
        "5_4_to_5_9": "5'4\" - 5'9\" (1,62 m - 1,75 m)",
        "5_10_to_6_2": "5'10\" - 6'2\" (1,76 m - 1,88 m)",
        over_6_2: "Mais de 6'2\" (> 1,88 m)",
        prefer_not_to_say: "Prefiro não responder"
      }
    },
    // skipping this question for now, as it was made redundant by the task_description question.
    // we're leaving this in the code in case it is used in the future
    "question-5": {
      label: "Como resumiria o tipo de trabalho ou tarefa que está a ser avaliado?",
      options: {
        office_clerical: "Trabalho ou tarefa de escritório ou administrativa, realizada à secretária",
        not_desk_based: "Não realizado à secretária num escritório",
        both_setups: "Ambas as situações"
      }
    },
    "question-6": {
      label: "Normalmente está sentado/a ou de pé durante o seu dia de trabalho?",
      options: {
        mostly_sit: "Normalmente fico sentado/a durante a maior parte do dia",
        mostly_stand_move: "Normalmente fico de pé ou em movimento durante a maior parte do dia",
        sit_and_stand: "Sento-me e fico de pé ao longo do dia"
      }
    },
    "question-7": {
      label: "Em que medida o seu empregador ou supervisor pede a sua opinião sobre ferramentas ou equipamento antes de os adquirir?",
      options: {
        great_extent: "Em grande medida",
        some_extent: "Até certo ponto",
        rarely: "Raramente",
        not_at_all: "De modo nenhum"
      }
    },
    "question-8": {
      label: "Em que medida o seu empregador ou supervisor pede a sua opinião sobre como o trabalho que faz deve ser organizado e/ou executado?",
      options: {
        great_extent: "Em grande medida",
        some_extent: "Até certo ponto",
        rarely: "Raramente",
        not_at_all: "De modo nenhum"
      }
    },
    "question-9": {
      label: "Nos últimos 7 dias, sentiu dor ou desconforto relacionado com o trabalho?",
      options: {
        yes: "Sim",
        no: "Não"
      }
    },
    "question-10": {
      label: "Utilizando a tabela abaixo, indique as partes específicas do corpo onde sentiu dor ou desconforto relacionado com o trabalho durante ou após a execução do trabalho ou tarefa que está a ser avaliado.\n\nIndique se a) um ou ambos os lados do corpo estiveram envolvidos, e b) a dor durou 2 ou mais dias.",
      groups: {
        neck: {
          label: "1. Pescoço",
          options: {
            one_side: "Dor ou desconforto num lado do corpo, por exemplo, no lado esquerdo ou direito",
            both_sides: "Dor ou desconforto tanto no lado esquerdo como no lado direito",
            lasted_two_days: "A dor durou 2 ou mais dias"
          }
        },
        shoulders_upper_arms: {
          label: "2. Ombro(s) ou braço(s) superior(es)",
          options: {
            one_side: "Dor ou desconforto num lado do corpo, por exemplo, no lado esquerdo ou direito",
            both_sides: "Dor ou desconforto tanto no lado esquerdo como no lado direito",
            lasted_two_days: "A dor durou 2 ou mais dias"
          }
        },
        elbows_forearms: {
          label: "3. Cotovelo(s) ou antebraço(s)",
          options: {
            one_side: "Dor ou desconforto num lado do corpo, por exemplo, no lado esquerdo ou direito",
            both_sides: "Dor ou desconforto tanto no lado esquerdo como no lado direito",
            lasted_two_days: "A dor durou 2 ou mais dias"
          }
        },
        wrists_hands_fingers: {
          label: "4. Pulso(s), mão(s) ou dedos",
          options: {
            one_side: "Dor ou desconforto num lado do corpo, por exemplo, no lado esquerdo ou direito",
            both_sides: "Dor ou desconforto tanto no lado esquerdo como no lado direito",
            lasted_two_days: "A dor durou 2 ou mais dias"
          }
        },
        lower_back: {
          label: "5. Zona lombar",
          options: {
            one_side: "Dor ou desconforto num lado do corpo, por exemplo, no lado esquerdo ou direito",
            both_sides: "Dor ou desconforto tanto no lado esquerdo como no lado direito",
            lasted_two_days: "A dor durou 2 ou mais dias"
          }
        },
        hips_upper_legs: {
          label: "6. Anca(s) ou parte superior da(s) perna(s)",
          options: {
            one_side: "Dor ou desconforto num lado do corpo, por exemplo, no lado esquerdo ou direito",
            both_sides: "Dor ou desconforto tanto no lado esquerdo como no lado direito",
            lasted_two_days: "A dor durou 2 ou mais dias"
          }
        },
        knees_lower_legs: {
          label: "7. Joelho(s) ou parte inferior da(s) perna(s)",
          options: {
            one_side: "Dor ou desconforto num lado do corpo, por exemplo, no lado esquerdo ou direito",
            both_sides: "Dor ou desconforto tanto no lado esquerdo como no lado direito",
            lasted_two_days: "A dor durou 2 ou mais dias"
          }
        },
        ankles_feet: {
          label: "8. Tornozelo(s) ou pé/pés",
          options: {
            one_side: "Dor ou desconforto num lado do corpo, por exemplo, no lado esquerdo ou direito",
            both_sides: "Dor ou desconforto tanto no lado esquerdo como no lado direito",
            lasted_two_days: "A dor durou 2 ou mais dias"
          }
        }
      }
    },
    "question-11": {
      label: "Pense num dia de trabalho típico ou, se estiver a avaliar uma tarefa ou atividade específica, na parte do dia de trabalho em que realiza essa tarefa. Quanto tempo passa inclinado/a ou a apoiar parte do corpo em objetos ou arestas afiadas?",
      options: {
        less_than_30_min: "Menos de 30 minutos por dia",
        "30_min_to_1_hour": "30 minutos a 1 hora por dia",
        more_than_1_hour: "Mais de 1 hora por dia",
        does_not_apply: "Não me apoio em objetos ou arestas afiadas no trabalho"
      }
    },
    "question-12": {
      label: "Quanto tempo passa ajoelhado/a em superfícies duras ou rugosas sem proteção individual, por exemplo, sem joelheiras?",
      options: {
        less_than_30_min: "Menos de 30 minutos por dia",
        "30_min_to_1_hour": "30 minutos a 1 hora por dia",
        more_than_1_hour: "Mais de 1 hora por dia",
        does_not_apply: "Não me ajoelho em superfícies duras sem proteção no trabalho"
      }
    },
    "question-13": {
      label: "Pense nos tipos de ferramentas ou objetos que segura durante mais de 30 minutos de cada vez. Na lista de descrições abaixo, selecione todas as afirmações que se aplicam a estes itens.\n\nA última opção não pode ser selecionada se qualquer outra opção tiver sido assinalada.",
      options: {
        poor_grip_size: "Demasiado grandes ou pequenos para agarrar corretamente",
        irregular_unbalanced: "Com forma irregular ou desequilibrados",
        sharp_handholds: "Têm zonas de pega demasiado afiadas",
        slippery: "Escorregadios",
        none: "Nenhuma das anteriores"
      }
    },
    "question-14": {
      label: "Utiliza alguma parte do corpo como ferramenta improvisada para concluir o seu trabalho? Por exemplo, pode usar a palma da mão ou o joelho para aplicar força numa superfície.\n\nA ilustração abaixo é um exemplo de utilização do corpo desta forma.",
      options: {
        less_than_one_hour: "Sim, durante menos de 1 hora por dia",
        more_than_one_hour: "Sim, durante mais de 1 hora por dia",
        no: "Não, não utilizo o meu corpo como ferramenta improvisada no trabalho"
      }
    },
    "question-15": {
      label: "Pense nos tipos de superfícies sobre as quais empurra, puxa ou move objetos durante o trabalho, tarefa ou atividade que está a avaliar hoje. Na lista de descrições abaixo, selecione todas as afirmações que se aplicam a essas superfícies.",
      options: {
        smooth: "Lisas, por exemplo, superfícies acabadas",
        soft: "Macias, por exemplo, areia, lama, relva",
        rough: "Rugosas, por exemplo, gravilha, mosaico, granito",
        does_not_apply: "Não empurro nem puxo objetos sobre quaisquer superfícies para concluir o meu trabalho"
      }
    },
    "question-16": {
      label: "Com que frequência empurra, puxa ou move objetos que considera pesados sem ajuda mecânica, por exemplo, sem carrinho de mão ou plataforma com rodas?",
      options: {
        most: "Na maior parte do tempo",
        some: "Algum tempo",
        never: "Nunca"
      }
    },
    "question-17": {
      label: "Qual é o peso das ferramentas ou objetos que levanta, transporta ou suporta sem assistência mecânica?",
      options: {
        less_than_5_lb: "Menos de 5 lb / 2 kg",
        "5_to_18_lb": "5 a 18 lb / 2 a 8 kg",
        more_than_18_lb: "Mais de 18 lb / 8 kg",
        does_not_apply: "Não levanto, transporto nem suporto ferramentas ou objetos no trabalho"
      }
    },
    "question-18": {
      label: "Alguma das ferramentas e/ou equipamentos que utiliza exige muita força para arrancar? Por exemplo, um corta-relva com corda que precisa de puxar com força ou um pedal que precisa de carregar firmemente.",
      options: {
        regularly: "Sim, pelo menos algumas ferramentas ou equipamentos que utilizo regularmente exigem força",
        occasionally: "Sim, pelo menos algumas ferramentas ou equipamentos que utilizo ocasionalmente exigem força",
        no: "Não, nenhuma das ferramentas ou equipamentos que utilizo exige força para arrancar"
      }
    },
    "question-19": {
      label: "Ao empurrar e/ou puxar objetos que considera pesados, em que medida recebe ajuda, por exemplo, de um colega ou utilizando um carrinho/plataforma com rodas?",
      options: {
        great_extent: "Em grande medida",
        some_extent: "Até certo ponto",
        do_not_ask: "Não peço ajuda",
        ask_but_no_assistance: "Peço ajuda, mas não a recebo",
        does_not_apply: "Não empurro nem puxo este tipo de objetos durante o dia de trabalho"
      }
    },
    "question-20": {
      label: "Pense num dia de trabalho típico ou, se estiver a avaliar uma tarefa ou atividade específica, na parte do dia de trabalho em que realiza essa tarefa. Quando está sentado/a ou de pé, com que frequência trabalha com a parte superior do corpo inclinada para a frente, para trás ou para o lado?\n\nSelecione as opções que se aplicam a si.",
      groups: {
        forward_backward: {
          label: "Inclino-me para a frente ou para trás mais de 15 graus",
          options: {
            most: "Na maior parte do tempo",
            some: "Algum tempo",
            never: "Nunca"
          }
        },
        sideways: {
          label: "Inclino-me para o lado",
          options: {
            most: "Na maior parte do tempo",
            some: "Algum tempo",
            never: "Nunca"
          }
        }
      }
    },
    "question-21": {
      label: "Ao realizar as suas atividades de trabalho, alguma vez roda a parte superior do corpo para um dos lados sem mudar a posição dos pés, estando sentado/a ou de pé?",
      options: {
        often: "Sim, faço isto frequentemente durante o meu trabalho, tarefa ou atividade",
        sometimes: "Sim, faço isto às vezes durante o meu trabalho, tarefa ou atividade",
        never: "Não, nunca rodo a parte superior do corpo enquanto trabalho"
      }
    },
    "question-22": {
      label: "Pense num dia de trabalho típico ou, se estiver a avaliar uma tarefa ou atividade específica, na parte do dia de trabalho em que realiza essa tarefa. Quando está sentado/a ou de pé, indique onde estão as suas mãos em relação ao corpo.\n\nSelecione as opções que se aplicam a si.",
      groups: {
        hands_above_shoulders: {
          label: "Mãos acima dos ombros",
          options: {
            most: "Na maior parte do tempo",
            some: "Algum tempo",
            never: "Nunca"
          }
        },
        hands_floor_to_knee: {
          label: "Mãos entre o chão e o joelho",
          options: {
            most: "Na maior parte do tempo",
            some: "Algum tempo",
            never: "Nunca"
          }
        }
      }
    },
    "question-23": {
      label: "Um ou ambos os braços ficam alguma vez totalmente estendidos para a frente quando está a realizar o trabalho, tarefa ou atividade que está a avaliar hoje?",
      options: {
        frequently: "Sim, os meus braços ficam frequentemente totalmente estendidos para a frente ao realizar um trabalho, tarefa ou atividade",
        sometimes: "Sim, os meus braços ficam às vezes totalmente estendidos para a frente ao realizar um trabalho, tarefa ou atividade",
        never: "Não, os meus braços nunca ficam totalmente estendidos para a frente ao realizar um trabalho, tarefa ou atividade"
      }
    },
    "question-24": {
      label: "Quando o(s) braço(s) está(ão) estendido(s), alguma vez segura uma ferramenta ou move um objeto?",
      options: {
        less_than_5_lb: "Sim, e muitas vezes pesa menos de 5 lb / 2 kg",
        "5_to_10_lb": "Sim, e muitas vezes pesa 5 a 10 lb / 2 a 4,5 kg",
        more_than_10_lb: "Sim, e muitas vezes pesa mais de 10 lb / 4,5 kg",
        no: "Não, não seguro ferramentas nem objetos quando o(s) braço(s) está(ão) estendido(s)"
      }
    },
    "question-25": {
      label: "Como está posicionada a sua cabeça quando realiza o trabalho, tarefa ou atividade que está a avaliar hoje?",
      options: {
        neutral: "Muitas vezes está neutra, diretamente entre os ombros, com o queixo nivelado",
        slight_tilt: "Muitas vezes está inclinada para cima ou para baixo menos de 15 graus",
        deep_tilt: "Muitas vezes está inclinada para cima, para baixo ou para o lado mais de 15 graus"
      }
    },
    "question-26": {
      label: "Normalmente, até que ponto dobra o pulso para cima e para baixo? Utilize a imagem abaixo como referência.",
      options: {
        "0_to_14": "Normalmente 0 a 14 graus para cima ou para baixo",
        "15_to_30": "Normalmente 15 a 30 graus",
        more_than_30: "Normalmente mais de 30 graus"
      }
    },
    "question-27": {
      label: "Até que ponto inclina o pulso de um lado para o outro?",
      options: {
        "0_to_10": "Normalmente 0 a 10 graus para a esquerda ou direita",
        "10_to_20": "Normalmente 10 a 20 graus",
        more_than_20: "Normalmente mais de 20 graus"
      }
    },
    "question-28": {
      label: "É possível manter todos os objetos que precisa de empurrar, puxar, levantar, usar, etc. perto do corpo?",
      options: {
        frequently: "Sim, frequentemente",
        sometimes: "Sim, às vezes",
        never: "Não, nunca"
      }
    },
    "question-29": {
      label: "Pense num dia de trabalho típico ou, se estiver a avaliar uma tarefa ou atividade específica, na parte do dia de trabalho em que realiza essa tarefa. Quanto tempo passa a executar movimentos semelhantes repetidamente?",
      options: {
        less_than_30_min: "Menos de 30 minutos por dia",
        "30_min_to_2_hours": "30 minutos a 2 horas por dia",
        "2_to_4_hours": "2 a 4 horas por dia",
        more_than_4_hours: "Mais de 4 horas por dia"
      }
    },
    "question-30": {
      label: "Quanto tempo passa a dobrar o pulso para cima ou para baixo mais de 15 graus? Utilize a imagem abaixo como referência.",
      options: {
        less_than_1_hour: "Menos de 1 hora por dia",
        "1_to_2_hours": "1 a 2 horas por dia",
        more_than_2_hours: "Mais de 2 horas por dia",
        none: "Nenhum tempo"
      }
    },
    "question-31": {
      label: "Quanto tempo passa a inclinar o pulso mais de 15 graus para a esquerda ou direita? Utilize a imagem abaixo como referência.",
      options: {
        less_than_1_hour: "Menos de 1 hora por dia",
        "1_to_2_hours": "1 a 2 horas por dia",
        more_than_2_hours: "Mais de 2 horas por dia",
        none: "Nenhum tempo"
      }
    },
    "question-32": {
      label: "Quanto tempo passa a fazer esforços musculares intensos, mais de 18 libras / 8 kg com a sua própria força, ao usar uma ferramenta ou manusear um objeto?",
      options: {
        less_than_5_min: "Menos de 5 minutos por dia",
        "5_to_25_min": "5 a 25 minutos por dia",
        "30_min_to_2_5_hours": "30 minutos a 2,5 horas por dia",
        "2_5_to_5_5_hours": "2,5 a 5,5 horas por dia",
        more_than_5_5_hours: "Mais de 5,5 horas por dia"
      }
    },
    "question-33": {
      label: "Quando segura um objeto entre o polegar e as pontas dos dedos, chama-se pega em pinça. Ao realizar o trabalho, tarefa ou atividade que está a avaliar hoje, quanto tempo passa a usar uma pega em pinça para segurar um objeto com mais de 2 libras / 1 kg?",
      options: {
        less_than_2_hours: "Menos de 2 horas por dia",
        more_than_2_hours: "Mais de 2 horas por dia",
        none: "Nenhum tempo"
      }
    },
    "question-34": {
      label: "Quando envolve a mão à volta de um objeto para o segurar, chama-se pega de força. Quanto tempo passa a usar uma pega de força para segurar um objeto com mais de 10 libras / 4,5 kg?",
      options: {
        less_than_2_hours: "Menos de 2 horas por dia",
        more_than_2_hours: "Mais de 2 horas por dia",
        none: "Nenhum tempo"
      }
    },
    "question-35": {
      label: "Se utiliza ferramentas ou equipamentos que causam vibrações em parte ou em todo o corpo, quanto tempo passa a usar estas ferramentas?",
      options: {
        less_than_1_hour: "Menos de 1 hora por dia",
        "1_to_4_hours": "1 a 4 horas por dia",
        more_than_4_hours: "Mais de 4 horas por dia",
        does_not_apply: "Não utilizo este tipo de ferramentas ou equipamento"
      }
    },
    "question-36": {
      label: "Se empurra ou puxa itens com mais de 80 libras / 36 kg, quanto tempo passa a mover esses itens sobre superfícies rugosas, como gravilha, mosaico ou terreno irregular, ou superfícies macias, como areia, lama ou relva?",
      options: {
        less_than_5_min: "Menos de 5 minutos por dia",
        "5_min_to_1_hour": "5 minutos a 1 hora por dia",
        more_than_1_hour: "Mais de 1 hora por dia",
        does_not_apply: "Não movo este tipo de itens sobre superfícies rugosas ou macias"
      }
    },
    "question-37": {
      label: "Pense num dia de trabalho típico ou, se estiver a avaliar uma tarefa ou atividade específica, na parte do dia de trabalho em que realiza essa tarefa. Alguma vez se distrai com ruídos, como sirenes, conversas altas, trânsito, etc.?",
      options: {
        frequently: "Frequentemente",
        sometimes: "Às vezes",
        no: "Não"
      }
    },
    "question-38": {
      label: "É afetado/a pelo sol a incidir ou a refletir nos seus olhos, ou seja, encandeamento?",
      options: {
        frequently: "Frequentemente",
        sometimes: "Às vezes",
        rarely: "Raramente",
        never: "Nunca"
      }
    },
    "question-39": {
      label: "Se o seu trabalho exige que observe detalhes pequenos ou leia letras pequenas, consegue fazê-lo facilmente?",
      options: {
        frequently: "Frequentemente",
        sometimes: "Às vezes",
        rarely: "Raramente",
        never: "Nunca",
        does_not_apply: "O meu trabalho não exige que faça isto"
      }
    },
    "question-40": {
      label: "Se trabalha em ambientes frios, sente desconforto nos braços, costas, pernas, dedos das mãos e/ou dedos dos pés?",
      options: {
        yes: "Sim",
        no: "Não",
        does_not_apply: "Não trabalho em ambientes frios"
      }
    },
    "question-41": {
      label: "Tendo em conta os requisitos do seu trabalho, com que frequência lhe pedem para fazer horas extraordinárias durante uma hora ou mais?",
      options: {
        frequently: "Frequentemente",
        sometimes: "Às vezes",
        rarely: "Raramente",
        never: "Nunca"
      }
    },
    "question-42": {
      label: "Com que frequência lhe pedem para trabalhar com prazos apertados?",
      options: {
        frequently: "Frequentemente",
        sometimes: "Às vezes",
        rarely: "Raramente",
        never: "Nunca"
      }
    }
  }
};
