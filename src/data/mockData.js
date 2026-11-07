// Dados fictícios demonstrativos para a plataforma MOVIMENTO GROWTH
// Empresa: Academia Movimento | Planaltina-DF | @ac.movimentopl

export const ACADEMY_INFO = {
  name: "Academia Movimento",
  conceptName: "MOVIMENTO GROWTH",
  tagline: "Plataforma Inteligente de Captação e Recuperação de Alunos",
  location: "Planaltina - DF",
  instagram: "@ac.movimentopl",
  experience: "Mais de 30 anos de tradição e saúde",
  followers: "Aprox. 12,8 mil seguidores",
  phone: "(61) 98452-1144",
  whatsapp: "(61) 98452-1144",
  disclaimer: "Projeto demonstrativo desenvolvido por Davi Anderson. Esta apresentação é conceitual e não representa uma plataforma oficial da Academia Movimento."
};

export const INITIAL_LEADS = [
  {
    id: "lead-1",
    name: "Mariana Albuquerque",
    phone: "(61) 99124-8831",
    interest: "Natação Adulto",
    plan: "Natação Adulto (2x/sem)",
    origin: "Instagram @ac.movimentopl",
    firstContact: "2026-11-05",
    status: "Aguardando resposta",
    nextAction: "Enviar simulação de horários da piscina",
    lastInteraction: "2026-11-06 14:20",
    daysInactive: 1,
    recoveryStage: "Orçamento enviado",
    notes: "Procura horários noturnos após as 19h. Demonstrou interesse no plano trimestral."
  },
  {
    id: "lead-2",
    name: "Carlos Eduardo Mendes",
    phone: "(61) 98411-9022",
    interest: "Musculação & Hipertrofia",
    plan: "Plano Anual Movimento VIP",
    origin: "WhatsApp Recepção",
    firstContact: "2026-11-04",
    status: "Aula experimental agendada",
    nextAction: "Lembrete automático 2h antes da aula",
    lastInteraction: "2026-11-06 18:00",
    daysInactive: 0,
    recoveryStage: "Agendado",
    notes: "Quer treinar às 06h da manhã. Já treinou musculação antes."
  },
  {
    id: "lead-3",
    name: "Juliana Beatriz Santos",
    phone: "(61) 99345-1278",
    interest: "Combo Musculação + Natação",
    plan: "Combo Musculação + Natação",
    origin: "Indicação de Aluno",
    firstContact: "2026-10-31",
    status: "Aula realizada",
    nextAction: "Follow-up de matrícula pós-aula experimental",
    lastInteraction: "2026-11-02 11:30",
    daysInactive: 5,
    recoveryStage: "Pós-experimental sem retorno",
    notes: "Adorou a estrutura da piscina aquecida. Estava avaliando com o marido."
  },
  {
    id: "lead-4",
    name: "Rafael Nogueira",
    phone: "(61) 98177-4409",
    interest: "Musculação Livre",
    plan: "Musculação Livre",
    origin: "Google Meu Negócio",
    firstContact: "2026-10-28",
    status: "Em negociação",
    nextAction: "Apresentar condição especial de isenção de matrícula",
    lastInteraction: "2026-11-01 16:45",
    daysInactive: 6,
    recoveryStage: "Proposta enviada",
    notes: "Dúvida sobre taxa de adesão e forma de pagamento no cartão recorrente."
  },
  {
    id: "lead-5",
    name: "Beatriz Cristina Lopes",
    phone: "(61) 99655-3312",
    interest: "Hidroginástica",
    plan: "Hidroginástica (3x/sem)",
    origin: "Passante / Balcão Planaltina",
    firstContact: "2026-11-06",
    status: "Novo interessado",
    nextAction: "Qualificar interesse e agendar aula experimental",
    lastInteraction: "2026-11-06 09:15",
    daysInactive: 0,
    recoveryStage: "Primeiro contato",
    notes: "Indicação médica para fortalecimento articular. Prefere turno matutino."
  },
  {
    id: "lead-6",
    name: "Rodrigo Vasconcelos",
    phone: "(61) 98566-7789",
    interest: "Funcional & CrossMov",
    plan: "Funcional & CrossMov",
    origin: "Instagram @ac.movimentopl",
    firstContact: "2026-10-25",
    status: "Matrícula concluída",
    nextAction: "Boas-vindas e agendamento da avaliação física",
    lastInteraction: "2026-11-03 10:00",
    daysInactive: 4,
    recoveryStage: "Convertido",
    notes: "Matrícula semestral concluída via link de pagamento WhatsApp."
  },
  {
    id: "lead-7",
    name: "Fernanda Ribeiro Gomes",
    phone: "(61) 99233-6655",
    interest: "Natação Infantil",
    plan: "Natação Infantil (2x/sem)",
    origin: "Instagram @ac.movimentopl",
    firstContact: "2026-10-29",
    status: "Aguardando resposta",
    nextAction: "Disparar mensagem de recuperação autorizada",
    lastInteraction: "2026-11-03 15:10",
    daysInactive: 4,
    recoveryStage: "Sem resposta após tabela de valores",
    notes: "Para o filho de 6 anos. Pediu tabela de turmas da tarde."
  },
  {
    id: "lead-8",
    name: "Lucas Gabriel Ferreira",
    phone: "(61) 98211-9988",
    interest: "Musculação Livre",
    plan: "Plano Anual Movimento VIP",
    origin: "WhatsApp Recepção",
    firstContact: "2026-10-22",
    status: "Sem interesse",
    nextAction: "Encerrar ciclo e arquivar contato",
    lastInteraction: "2026-10-26 12:00",
    daysInactive: 12,
    recoveryStage: "Desistência por mudança de cidade",
    notes: "Vai se mudar para Sobradinho no fim do mês."
  }
];

export const INITIAL_EXPERIMENTAL_CLASSES = [
  {
    id: "exp-1",
    leadName: "Carlos Eduardo Mendes",
    phone: "(61) 98411-9022",
    modality: "Musculação",
    date: "2026-11-08",
    time: "07:00",
    instructor: "Prof. Marcos Vinícius",
    status: "Confirmada",
    attended: null,
    notes: "Foco em condicionamento e retorno aos treinos."
  },
  {
    id: "exp-2",
    leadName: "Juliana Beatriz Santos",
    phone: "(61) 99345-1278",
    modality: "Natação Adulto",
    date: "2026-11-02",
    time: "19:00",
    instructor: "Profa. Amanda Natação",
    status: "Realizada",
    attended: true,
    converted: false,
    notes: "Aula excelente, gostou da água aquecida. Falta assinar matrícula."
  },
  {
    id: "exp-3",
    leadName: "Patrícia Antunes Lima",
    phone: "(61) 98899-2233",
    modality: "Hidroginástica",
    date: "2026-11-04",
    time: "08:30",
    instructor: "Profa. Amanda Natação",
    status: "Não compareceu",
    attended: false,
    converted: false,
    notes: "Teve imprevisto no trânsito. Precisa remarcar."
  },
  {
    id: "exp-4",
    leadName: "Tiago Henrique Barbosa",
    phone: "(61) 99188-7711",
    modality: "Funcional & CrossMov",
    date: "2026-11-07",
    time: "18:30",
    instructor: "Prof. Diego Santos",
    status: "Confirmada",
    attended: null,
    notes: "Primeira experiência com treino em circuito."
  },
  {
    id: "exp-5",
    leadName: "Clara Mendonça",
    phone: "(61) 99455-8822",
    modality: "Natação Infantil",
    date: "2026-11-01",
    time: "15:00",
    instructor: "Prof. Leandro Silva",
    status: "Realizada",
    attended: true,
    converted: true,
    notes: "Mãe fechou plano semestral logo após a aula."
  }
];

export const INITIAL_EX_STUDENTS = [
  {
    id: "ex-1",
    name: "Gustavo Morais Vieira",
    phone: "(61) 99677-1234",
    lastPlan: "Musculação Anual Recorrente",
    lastEnrollment: "2026-06-15",
    monthsInactive: 5,
    reason: "Pausa por trabalho e rotina",
    totalStayMonths: 18,
    status: "Não contatado",
    suggestedCampaign: "Campanha Volta ao Treino - Sem taxa de matrícula",
    lastContactDate: "Nenhum contato recente"
  },
  {
    id: "ex-2",
    name: "Ana Paula Diniz",
    phone: "(61) 98122-3344",
    lastPlan: "Natação Adulto + Musculação",
    lastEnrollment: "2026-08-20",
    monthsInactive: 3,
    reason: "Viagem de férias / pausa de inverno",
    totalStayMonths: 24,
    status: "Campanha enviada",
    suggestedCampaign: "Campanha Aquecimento de Verão Movimento",
    lastContactDate: "2026-11-03 11:20"
  },
  {
    id: "ex-3",
    name: "Danilo Soares de Oliveira",
    phone: "(61) 98455-6677",
    lastPlan: "Musculação Livre",
    lastEnrollment: "2026-03-10",
    monthsInactive: 8,
    reason: "Lesão fora da academia",
    totalStayMonths: 12,
    status: "Demonstrou interesse",
    suggestedCampaign: "Convite para avaliação com nosso fisioterapeuta parceiro",
    lastContactDate: "2026-11-05 16:40"
  },
  {
    id: "ex-4",
    name: "Camila Guimarães Costa",
    phone: "(61) 99311-8899",
    lastPlan: "Hidroginástica (3x/sem)",
    lastEnrollment: "2026-05-30",
    monthsInactive: 6,
    reason: "Reforma de horários",
    totalStayMonths: 36,
    status: "Retorno agendado",
    suggestedCampaign: "Turmas exclusivas matutinas",
    lastContactDate: "2026-11-06 10:15"
  },
  {
    id: "ex-5",
    name: "Marcelo Tavares",
    phone: "(61) 98233-4455",
    lastPlan: "Funcional & CrossMov",
    lastEnrollment: "2026-09-01",
    monthsInactive: 2,
    reason: "Vencimento de plano trimestral",
    totalStayMonths: 9,
    status: "Reativado!",
    suggestedCampaign: "Upgrade Anual com desconto",
    lastContactDate: "2026-11-04 14:00"
  }
];

export const INITIAL_AUTOMATIONS = [
  {
    id: "auto-1",
    name: "Recuperação de Interessados sem Resposta (D+1)",
    trigger: "Lead sem resposta após envio de valores",
    delay: "24 horas",
    active: true,
    category: "Recuperação",
    template: "Olá, {primeiro_nome}! Tudo bem? Você demonstrou interesse em conhecer os planos da Academia Movimento e gostaríamos de saber se ainda podemos te ajudar. Nossa equipe está à disposição para tirar qualquer dúvida sobre nossos horários e estrutura!",
    lgpdNote: "Respeita opt-out: Digite PARAR para cancelar.",
    conversionsCount: 23
  },
  {
    id: "auto-2",
    name: "Lembrete de Aula Experimental (D-1 e D-2h)",
    trigger: "Aula experimental agendada",
    delay: "24h antes e 2h antes",
    active: true,
    category: "Aulas Experimentais",
    template: "Oi {primeiro_nome}! Seu treino experimental na Academia Movimento está confirmado para {data_aula} às {horario_aula} ({modalidade}). Prepare sua garrafinha, toalha e venha com energia! Estamos te esperando.",
    lgpdNote: "Mensagem transacional de confirmação.",
    conversionsCount: 47
  },
  {
    id: "auto-3",
    name: "Follow-up Pós-Aula Experimental",
    trigger: "Aula experimental marcada como Realizada",
    delay: "2 horas após a aula",
    active: true,
    category: "Conversão",
    template: "Oi {primeiro_nome}! Como foi sua aula experimental de {modalidade} hoje com o professor {instrutor}? Adoramos receber você! Se você fechar sua matrícula até amanhã, garantimos isenção total da taxa de matrícula. Vamos começar?",
    lgpdNote: "Gatilho condicionado ao comparecimento.",
    conversionsCount: 31
  },
  {
    id: "auto-4",
    name: "Reativação de Ex-Alunos (D+60 de ausência)",
    trigger: "Aluno com vínculo encerrado há 60 dias",
    delay: "60 dias",
    active: true,
    category: "Reativação",
    template: "Olá {primeiro_nome}, sentimos sua falta aqui na Academia Movimento! Preparamos uma condição super especial de retorno para nossos alunos tradicionais de Planaltina. Gostaria de conhecer?",
    lgpdNote: "Segmentação de base inativa autorizada com opt-out.",
    conversionsCount: 18
  },
  {
    id: "auto-5",
    name: "Recuperação de No-Show (Falta na Aula Experimental)",
    trigger: "Aula marcada como 'Não compareceu'",
    delay: "3 horas após o horário",
    active: true,
    category: "Aulas Experimentais",
    template: "Oi {primeiro_nome}, tudo bem? Notamos que você não conseguiu comparecer à sua aula experimental hoje. Sabemos que imprevistos acontecem! Quer remarcar para outro dia e horário que fique melhor para sua rotina?",
    lgpdNote: "Tentativa única de reagendamento cordial.",
    conversionsCount: 14
  }
];

export const INITIAL_CONVERSATIONS = [
  {
    id: "chat-1",
    contactName: "Mariana Albuquerque",
    phone: "(61) 99124-8831",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    unread: 1,
    status: "Aguardando resposta",
    plan: "Natação Adulto (2x/sem)",
    messages: [
      { id: "m1", sender: "lead", text: "Olá! Vi no Instagram @ac.movimentopl que vocês têm natação para adultos. Como funcionam os horários e valores?", time: "Ontem 14:15" },
      { id: "m2", sender: "bot", text: "Olá, Mariana! Que ótimo ter seu contato. A Academia Movimento possui piscina semiolímpica aquecida e tratada com ozônio. Temos turmas de natação às 06h, 07h, 18h e 19h30.", time: "Ontem 14:16", isAutomated: true },
      { id: "m3", sender: "bot", text: "O plano 2x na semana fica R$ 189,90/mês. Gostaria de agendar uma aula experimental gratuita para você conhecer a piscina e os professores?", time: "Ontem 14:17", isAutomated: true },
      { id: "m4", sender: "lead", text: "Legal! Vou ver meus horários e te falo.", time: "Ontem 14:20" },
      { id: "m5", sender: "recovery", text: "Olá! Tudo bem? Você demonstrou interesse em conhecer nossos planos e gostaríamos de saber se ainda podemos ajudar. Nossa equipe está à disposição para tirar suas dúvidas!", time: "Hoje 10:30", isAutomated: true }
    ]
  },
  {
    id: "chat-2",
    contactName: "Carlos Eduardo Mendes",
    phone: "(61) 98411-9022",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    unread: 0,
    status: "Aula experimental agendada",
    plan: "Plano Anual Movimento VIP",
    messages: [
      { id: "m201", sender: "lead", text: "Bom dia! Gostaria de agendar uma experimental de musculação para amanhã bem cedo, por volta de 07h.", time: "18:00" },
      { id: "m202", sender: "staff", text: "Perfeito, Carlos! Seu treino está reservado para amanhã (08/11) às 07h com o Prof. Marcos Vinícius. Recomendamos chegar 10 minutos antes.", time: "18:05" },
      { id: "m203", sender: "lead", text: "Combinado! Obrigado pelo atendimento rápido.", time: "18:06" }
    ]
  },
  {
    id: "chat-3",
    contactName: "Juliana Beatriz Santos",
    phone: "(61) 99345-1278",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    unread: 2,
    status: "Aula realizada",
    plan: "Combo Musculação + Natação",
    messages: [
      { id: "m301", sender: "lead", text: "Fiz a aula na terça-feira e adorei a piscina!", time: "02/11 11:30" },
      { id: "m302", sender: "bot", text: "Ficamos muito felizes em receber você, Juliana! Conseguimos segurar sua condição com isenção de matrícula até essa semana. Vamos garantir sua vaga no Combo?", time: "03/11 09:00", isAutomated: true }
    ]
  }
];

export const PLANS_CATALOG = [
  {
    id: "plan-1",
    name: "Musculação Livre",
    price: "R$ 119,90",
    period: "/mês",
    description: "Acesso total à sala de musculação, aparelhos modernos e orientação profissional em todos os horários.",
    features: ["Acesso ilimitado de seg a sáb", "Ficha de treino personalizada", "Acompanhamento de instrutores", "Vestiários completos"]
  },
  {
    id: "plan-2",
    name: "Natação Adulto / Infantil",
    price: "R$ 189,90",
    period: "/mês (2x/sem)",
    description: "Piscina aquecida e coberta, metodologia exclusiva com mais de 30 anos de excelência em Planaltina.",
    features: ["Piscina semiolímpica aquecida", "Tratamento de água moderno", "Turmas divididas por nível", "Professores especialistas"]
  },
  {
    id: "plan-3",
    name: "Combo Musculação + Natação",
    price: "R$ 249,90",
    period: "/mês",
    badge: "Mais Popular",
    description: "A combinação perfeita para saúde cardiovascular, fortalecimento muscular e máxima queima calórica.",
    features: ["Musculação livre todos os dias", "Natação 2x por semana", "Avaliação bioimpedância", "Acesso a eventos e desafios"]
  },
  {
    id: "plan-4",
    name: "Plano Anual Movimento VIP",
    price: "R$ 99,90",
    period: "/mês recorrente",
    badge: "Melhor Custo-Benefício",
    description: "Compromisso de longo prazo com seu bem-estar, sem ocupar o limite total do cartão de crédito.",
    features: ["Débito recorrente mensal", "Isenção de taxa de matrícula", "Direito a 30 dias de trancamento", "2 convites mensais para amigos"]
  }
];

export const KPI_METRICS = {
  totalLeads: 342,
  waitingReply: 48,
  experimentalClassesCompleted: 162,
  convertedEnrollments: 124,
  reactivatedExStudents: 29,
  potentialRevenueRecovered: "R$ 48.720,00",
  conversionRate: "36.3%",
  experimentalShowUpRate: "81.8%",
  averageResponseTime: "14 min"
};
