import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Users, 
  UserCheck, 
  CalendarCheck, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  PhoneCall, 
  BarChart3, 
  Activity, 
  Dumbbell, 
  Waves, 
  Layers, 
  Lock,
  ChevronRight,
  Target
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import { IMAGES } from '../data/images';
import { ACADEMY_INFO, PLANS_CATALOG } from '../data/mockData';

export default function LandingPage({ onOpenDashboard }) {
  const opportunities = [
    {
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      title: "Perguntas de planos sem matrícula",
      situation: "Pessoas entram em contato pelo WhatsApp ou Instagram @ac.movimentopl perguntando sobre valores e horários, mas a conversa esfria sem fechamento.",
      solution: "Registro automático do lead e régua de acompanhamento estruturada em 24h e 48h.",
      highlight: "+42% de retenção no 1º contato"
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-blue-400" />,
      title: "Aulas experimentais sem retorno",
      situation: "O interessado agenda e realiza a aula experimental na musculação ou piscina, elogia a experiência, mas não formaliza o plano nos dias seguintes.",
      solution: "Gatilho pós-aula com mensagem personalizada para esclarecer dúvidas e apresentar condição de entrada.",
      highlight: "82% de presença nas aulas"
    },
    {
      icon: <UserCheck className="w-6 h-6 text-orange-400" />,
      title: "Ex-alunos afastados da rotina",
      situation: "Alunos com histórico de anos na academia que interromperam os treinos por mudanças temporárias de rotina e nunca mais foram contatados.",
      solution: "Segmentação automática da base inativa (60 a 180 dias) com campanhas autorizadas de volta aos treinos.",
      highlight: "Recuperação média de 29 alunos/mês"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-emerald-400" />,
      title: "Contatos perdidos no WhatsApp",
      situation: "Dezenas de conversas simultâneas na recepção física geram acúmulo de mensagens não respondidas ou sem histórico centralizado.",
      solution: "Painel único com status do interessado, histórico de conversas e lembretes de próxima ação comercial.",
      highlight: "Zero contatos esquecidos"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: "Dificuldade em medir resultados",
      situation: "Falta de clareza sobre qual canal traz mais alunos (Instagram, indicação, balcão) e qual a real taxa de conversão das experimentais.",
      solution: "Dashboards analíticos em tempo real com taxa de conversão por canal e faturamento recuperado.",
      highlight: "Visão 360° do funil comercial"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "CAPTAÇÃO",
      subtitle: "Centralização Inteligente",
      desc: "Registra pessoas interessadas vindas do Instagram (@ac.movimentopl), WhatsApp da recepção, indicações e visitas presenciais em Planaltina.",
      icon: <Target className="w-6 h-6 text-blue-400" />,
      tag: "Central de Leads"
    },
    {
      number: "02",
      title: "ACOMPANHAMENTO",
      subtitle: "Organização & Pipeline",
      desc: "Organiza contatos em funil dinâmico e identifica imediatamente quem ainda não realizou a matrícula ou não agendou sua aula.",
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      tag: "Funil Comercial"
    },
    {
      number: "03",
      title: "RECUPERAÇÃO",
      subtitle: "Régua Ativa Autorizada",
      desc: "Realiza acompanhamentos automáticos e autorizados com mensagens humanizadas no momento certo, respeitando a LGPD e preferências do aluno.",
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      tag: "Automação WhatsApp"
    },
    {
      number: "04",
      title: "CONVERSÃO",
      subtitle: "Resultados & Matrículas",
      desc: "Acompanha matrículas formalizadas, receita adicional recuperada e indicadores comerciais para a tomada de decisão da direção.",
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      tag: "Métricas de Sucesso"
    }
  ];

  const features = [
    {
      title: "Gestão de Interessados",
      category: "Pipeline Comercial",
      desc: "Tabela completa com pesquisa, filtros por interesse (Musculação, Natação, Hidroginástica) e status dinâmico de cada contato.",
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      action: "Ver tabela de leads"
    },
    {
      title: "Recuperação de Matrículas",
      category: "Retenção Ativa",
      desc: "Fluxos de resgate para quem pediu orçamento ou esteve na academia mas não fechou o plano nos últimos dias.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      action: "Explorar módulo"
    },
    {
      title: "Acompanhamento de Experimentais",
      category: "Experiência do Aluno",
      desc: "Controle de agendamentos, confirmações com lembrete automático 2h antes e redução drástica de faltas (no-show).",
      icon: <CalendarCheck className="w-6 h-6 text-purple-400" />,
      action: "Ver calendário"
    },
    {
      title: "Reativação de Ex-Alunos",
      category: "Fidelização",
      desc: "Resgate de antigos alunos com base em tempo de ausência (60, 90 ou 180 dias) com condições exclusivas de retorno.",
      icon: <UserCheck className="w-6 h-6 text-orange-400" />,
      action: "Simular campanha"
    },
    {
      title: "Automação de WhatsApp",
      category: "Produtividade",
      desc: "Comunicação padronizada, cordiais e com consentimento, sem sobrecarregar os atendentes da recepção.",
      icon: <MessageSquare className="w-6 h-6 text-emerald-400" />,
      action: "Ver templates"
    },
    {
      title: "Relatórios Comerciais",
      category: "Inteligência de Gestão",
      desc: "Métricas de conversão, comparativo mensal, análise de canais de captação e faturamento potencial recuperado.",
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
      action: "Ver gráficos"
    }
  ];

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-black">
      {/* Top Notification Banner */}
      <div className="bg-gradient-to-r from-blue-900/40 via-emerald-950/40 to-slate-900 border-b border-white/5 py-2 px-4 text-center text-xs sm:text-sm text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold text-[11px] border border-emerald-500/30">
            PROJETO DEMONSTRATIVO
          </span>
          <span>Apresentação conceitual exclusiva para a <strong>Academia Movimento</strong> (Planaltina-DF • +30 anos)</span>
          <button 
            onClick={onOpenDashboard}
            className="text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1 ml-2"
          >
            Abrir Painel <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Modern Header / Navbar */}
      <header className="sticky top-0 z-50 glass-panel border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <BrandLogo size="md" />

          {/* Nav links for desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#oportunidades" className="hover:text-emerald-400 transition-colors">Oportunidades</a>
            <a href="#como-funciona" className="hover:text-emerald-400 transition-colors">Como Funciona</a>
            <a href="#recursos" className="hover:text-emerald-400 transition-colors">Recursos</a>
            <a href="#planos" className="hover:text-emerald-400 transition-colors">Planos da Academia</a>
            <a href="#sobre" className="hover:text-emerald-400 transition-colors">Sobre a Movimento</a>
          </nav>

          {/* Direct CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDashboard}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <Activity className="w-4 h-4 text-slate-950" />
              <span>Explorar Demonstração</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-emerald-500/15 to-transparent blur-[120px] pointer-events-none rounded-full"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 blur-[100px] pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-emerald-400 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
                <span>Gestão Comercial Inteligente • Academia Movimento</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Mais interessados <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">se tornando alunos.</span> <br className="hidden sm:block" />
                Mais alunos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">permanecendo com você.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
                Uma plataforma inteligente para organizar contatos, recuperar oportunidades e fortalecer o relacionamento entre sua academia e seus alunos.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={onOpenDashboard}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Explorar Demonstração</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#oportunidades"
                  className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-base text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Conhecer a Plataforma</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">+30 Anos</div>
                  <div className="text-xs text-slate-400">Tradição em Planaltina-DF</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-emerald-400 font-mono">+12,8k</div>
                  <div className="text-xs text-slate-400">Audiência @ac.movimentopl</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-blue-400 font-mono">100% Foco</div>
                  <div className="text-xs text-slate-400">Captação & Recuperação</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Card with Unsplash Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 bg-slate-900 group">
                <img
                  src={IMAGES.hero.url}
                  alt={IMAGES.hero.alt}
                  className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d15] via-[#090d15]/40 to-transparent"></div>

                {/* Floating Metric 1 */}
                <div className="absolute top-5 right-5 glass-panel px-4 py-3 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3 animate-fade-in">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Taxa de Conversão</div>
                    <div className="text-base font-bold text-white font-mono">36.3% <span className="text-xs text-emerald-400 font-normal">+8.4%</span></div>
                  </div>
                </div>

                {/* Floating Metric 2 */}
                <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-2xl border border-white/15 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span className="text-xs font-semibold text-slate-200">Simulação de Recuperação WhatsApp</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Em Tempo Real</span>
                  </div>
                  <p className="text-xs text-slate-300 italic line-clamp-2">
                    "Olá! Tudo bem? Notamos seu interesse nos planos da Academia Movimento. Gostaria de agendar sua aula experimental gratuita na piscina ou musculação?"
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/10">
                    <span>Lead: Carlos (Planaltina)</span>
                    <span className="text-emerald-400 font-medium">Status: Aula Agendada</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: OPORTUNIDADES QUE NÃO PODEM SER PERDIDAS */}
      <section id="oportunidades" className="py-20 bg-[#090d16] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
              Cenários Comerciais Típicos
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Oportunidades que não podem ser perdidas
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              Em qualquer academia moderna com alto volume de contatos diários, momentos cruciais de decisão acontecem o tempo todo. Veja como a plataforma ajuda a administrar essas situações de forma estruturada:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((item, idx) => (
              <div 
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-wider font-semibold text-rose-400/90 block mb-1">Cenário comum:</span>
                    <p className="text-sm text-slate-300 leading-relaxed">{item.situation}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 mt-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400 block mb-1">Como a Movimento Growth atua:</span>
                  <p className="text-xs text-slate-400 mb-3">{item.solution}</p>
                  <div className="inline-block text-[11px] font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {item.highlight}
                  </div>
                </div>
              </div>
            ))}

            {/* Highlighting the 6th feature as swimming & tradition */}
            <div className="glass-card p-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-blue-950/40 via-slate-900 to-emerald-950/30 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-5">
                  <Waves className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Piscina & Estrutura Completa</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  O público de natação (infantil e adulto) e hidroginástica possui ciclo de matrícula diferente da musculação. A plataforma permite réguas dedicadas para turmas aquáticas.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs uppercase tracking-wider font-semibold text-blue-400 block mb-1">Diferencial Exclusivo:</span>
                <p className="text-xs text-slate-400 mb-3">Valorização dos mais de 30 anos de referência aquática e fitness em Planaltina.</p>
                <button 
                  onClick={onOpenDashboard}
                  className="w-full py-2 px-3 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 font-semibold text-xs border border-emerald-500/30 flex items-center justify-center gap-1.5 transition-all"
                >
                  Ver Gestão por Modalidades <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: COMO FUNCIONA */}
      <section id="como-funciona" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
              Fluxo Estruturado em 4 Etapas
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Como funciona o ciclo Movimento Growth
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              Um processo contínuo que transforma contatos esporádicos em matrículas ativas e alunos fiéis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((st, i) => (
              <div 
                key={i} 
                className="relative glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-mono text-slate-600 group-hover:text-emerald-400 transition-colors">
                    {st.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center">
                    {st.icon}
                  </div>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1 font-mono">
                  {st.title}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{st.subtitle}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{st.desc}</p>

                <div className="inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {st.tag}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive visual workflow preview */}
          <div className="mt-12 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" /> Automação com Respeito à LGPD e Consentimento
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Comunicação humanizada que valoriza a tradição da Academia Movimento
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Sem mensagens intrusivas ou disparos em massa indiscriminados. Cada contato recebe interações pontuais, de acordo com seu estágio real (dúvida sobre plano, aula realizada ou tempo de afastamento), com opção simplificada de cancelamento.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <button
                  onClick={onOpenDashboard}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-colors shadow-lg shadow-emerald-500/20 cursor-pointer flex items-center gap-2"
                >
                  <span>Ver Regras no Painel</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: RECURSOS DA PLATAFORMA */}
      <section id="recursos" className="py-20 bg-[#090d16] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
              Solução Completa de Ponta a Ponta
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Recursos construídos para a gestão comercial
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              Ferramentas específicas para academias que precisam aumentar o número de alunos ativos sem depender de planilhas desorganizadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, index) => (
              <div 
                key={index} 
                className="glass-card glass-card-hover p-7 rounded-2xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center">
                      {feat.icon}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded border border-white/5">
                      {feat.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">{feat.desc}</p>
                </div>

                <button 
                  onClick={onOpenDashboard}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-emerald-400 hover:text-emerald-300 font-semibold text-xs border border-white/5 flex items-center justify-between transition-colors group cursor-pointer"
                >
                  <span>{feat.action}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION: PLANOS DA ACADEMIA MOVIMENTO */}
      <section id="planos" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
              Modalidades Tradicionais em Planaltina-DF
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Planos & Modalidades Integradas ao Sistema
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              A plataforma gerencia o pipeline comercial de todas as modalidades da Academia Movimento, desde a musculação de alta performance até a natação infantil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANS_CATALOG.map((pl) => (
              <div 
                key={pl.id}
                className={`glass-card p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  pl.badge ? 'border-emerald-500/50 bg-slate-900/90 shadow-xl shadow-emerald-950/20' : 'border-white/10'
                }`}
              >
                <div>
                  {pl.badge && (
                    <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 px-2.5 py-0.5 rounded-full mb-3">
                      {pl.badge}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white mb-2">{pl.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-3xl font-extrabold text-white font-mono">{pl.price}</span>
                    <span className="text-xs text-slate-400">{pl.period}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">{pl.description}</p>

                  <ul className="space-y-2 mb-6">
                    {pl.features.map((ft, fi) => (
                      <li key={fi} className="text-xs text-slate-300 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{ft}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenDashboard}
                  className="w-full py-2.5 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-white/10 cursor-pointer"
                >
                  Ver Leads Desta Modalidade
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION: FOTOS E ESTRUTURA REALISTA */}
      <section id="sobre" className="py-20 bg-[#090d16] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
                Experiência de 30+ Anos de Excelência
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Estrutura completa que encanta novos alunos
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Com piscina aquecida para natação e hidroginástica, sala de musculação completa e equipe qualificada, a Academia Movimento já possui a autoridade e o carinho da população de Planaltina.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                A tecnologia <strong>MOVIMENTO GROWTH</strong> é o motor comercial que faltava para garantir que nenhum interessado fique sem resposta e que os mais de 12,8 mil seguidores do Instagram se convertam em alunos regulares na academia.
              </p>

              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</div>
                  <span>Piscina coberta e aquecida para natação adulto e infantil</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</div>
                  <span>Aparelhos modernos de musculação e treinamento funcional</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</div>
                  <span>Instrutores atenciosos que acompanham a evolução individual</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img src={IMAGES.swimming.url} alt={IMAGES.swimming.alt} className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="p-3 bg-slate-900 text-[11px] text-slate-400">{IMAGES.swimming.caption}</div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img src={IMAGES.weights.url} alt={IMAGES.weights.alt} className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="p-3 bg-slate-900 text-[11px] text-slate-400">{IMAGES.weights.caption}</div>
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img src={IMAGES.trainer.url} alt={IMAGES.trainer.alt} className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="p-3 bg-slate-900 text-[11px] text-slate-400">{IMAGES.trainer.caption}</div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img src={IMAGES.reception.url} alt={IMAGES.reception.alt} className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="p-3 bg-slate-900 text-[11px] text-slate-400">{IMAGES.reception.caption}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: DEMONSTRAÇÃO DO PAINEL (CTA FINAL) */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="glass-panel p-10 sm:p-16 rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-[#070b12] shadow-2xl shadow-black relative overflow-hidden">
            
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-xs tracking-wide">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>EXPERIMENTE O SISTEMA EM FUNCIONAMENTO</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Veja o painel interativo da <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Academia Movimento na prática
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Explore a tabela dinâmica de interessados, simule disparos autorizados pelo WhatsApp, gerencie aulas experimentais e acompanhe relatórios comerciais com dados fictícios prontos para demonstração.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={onOpenDashboard}
                  className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-base bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-2xl shadow-emerald-500/30 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer flex items-center justify-center gap-3"
                >
                  <Activity className="w-5 h-5 text-slate-950" />
                  <span>Acessar Painel Movimento Growth</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="pt-6 flex items-center justify-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Navegação 100% Funcional
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Simulador de Conversas
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Gráficos Interativos
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto bg-[#05080e] border-t border-white/5 py-12 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <BrandLogo size="md" />

            <div className="flex items-center gap-6 text-xs text-slate-400">
              <span>Planaltina - DF</span>
              <span>•</span>
              <a href="https://instagram.com/ac.movimentopl" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                @ac.movimentopl
              </a>
              <span>•</span>
              <span>Mais de 30 anos</span>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 text-center text-xs text-slate-500 space-y-2">
            <p className="font-medium text-slate-400">
              Projeto demonstrativo desenvolvido por Davi Anderson. Esta apresentação é conceitual e não representa uma plataforma oficial da Academia Movimento.
            </p>
            <p className="text-[11px] text-slate-600">
              Todos os dados de alunos, telefones e métricas apresentados são puramente fictícios para fins de ilustração de potencial tecnológico.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
