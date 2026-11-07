import React, { useState } from 'react';
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
  Target,
  Calculator,
  Flame,
  Star,
  Check,
  Building2,
  Sliders,
  DollarSign,
  Award,
  ArrowUpRight,
  Play,
  RotateCcw
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import { IMAGES } from '../data/images';
import { ACADEMY_INFO, PLANS_CATALOG } from '../data/mockData';
import confetti from 'canvas-confetti';

export default function LandingPage({ onOpenDashboard }) {
  // Interactive ROI Calculator State
  const [monthlyLostLeads, setMonthlyLostLeads] = useState(120);
  const [averageTicket, setAverageTicket] = useState(139);

  // Calculated estimates
  const estimatedRecoveredLeads = Math.round(monthlyLostLeads * 0.28);
  const monthlyRevenueGain = estimatedRecoveredLeads * averageTicket;
  const annualRevenueGain = monthlyRevenueGain * 12;

  // Hero Interactive Simulation State
  const [heroStep, setHeroStep] = useState('sent'); // 'sent' | 'typing' | 'replied'

  const handleTriggerHeroSimulation = () => {
    setHeroStep('typing');
    setTimeout(() => {
      setHeroStep('replied');
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }, 1200);
  };

  const handleResetHeroSimulation = () => {
    setHeroStep('sent');
  };

  const opportunities = [
    {
      id: "op-1",
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      badge: "Captação Ativa",
      title: "Perguntas de planos sem matrícula",
      situation: "Pessoas entram em contato pelo Instagram (@ac.movimentopl) ou WhatsApp perguntando horários e preços, mas a conversa esfria sem fechamento.",
      solution: "Registro automático do lead e disparo de régua cordial de acompanhamento em 24h e 48h.",
      gain: "+42% de aproveitamento de contatos",
      color: "emerald"
    },
    {
      id: "op-2",
      icon: <CalendarCheck className="w-5 h-5 text-blue-400" />,
      badge: "Taxa de Presença",
      title: "Aulas experimentais sem retorno",
      situation: "O aluno faz a aula experimental de musculação ou natação, elogia os professores, mas sai da academia sem assinar o plano.",
      solution: "Lembrete automático 2h antes da aula e follow-up estruturado 2h após a aula oferecendo isenção de matrícula.",
      gain: "82% de presença confirmada",
      color: "blue"
    },
    {
      id: "op-3",
      icon: <UserCheck className="w-5 h-5 text-amber-400" />,
      badge: "Reativação de Base",
      title: "Ex-alunos afastados da rotina",
      situation: "Alunos com anos de vínculo que pausaram os treinos por viagens ou trabalho e nunca mais foram convidados a retornar.",
      solution: "Segmentação automática de inativos por tempo (60, 90 e 180 dias) com condições exclusivas de retorno.",
      gain: "Média de 29 retornos/mês",
      color: "amber"
    },
    {
      id: "op-4",
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      badge: "Centralização WhatsApp",
      title: "Contatos perdidos no WhatsApp da recepção",
      situation: "Dezenas de conversas simultâneas no balcão provocam esquecimentos, demora no atendimento e perda de históricos.",
      solution: "Painel único com status comercial de cada contato, histórico de mensagens e lembrete de próxima ação.",
      gain: "Zero interessados sem resposta",
      color: "emerald"
    },
    {
      id: "op-5",
      icon: <BarChart3 className="w-5 h-5 text-purple-400" />,
      badge: "Gestão por Dados",
      title: "Dificuldade em acompanhar resultados",
      situation: "Falta de clareza sobre quais canais (Instagram, indicação, balcão) trazem mais alunos e qual o custo de aquisição.",
      solution: "Métricas consolidadas em tempo real com relatórios de taxa de conversão e faturamento recuperado.",
      gain: "Visão 360° do funil da academia",
      color: "purple"
    }
  ];

  const steps = [
    {
      num: "01",
      title: "CAPTAÇÃO",
      subtitle: "Centralização Inteligente",
      desc: "Captura automática de contatos vindos do Instagram (@ac.movimentopl), WhatsApp, balcão presencial e indicações em Planaltina-DF.",
      icon: <Target className="w-5 h-5 text-blue-400" />,
      tag: "Entrada de Leads"
    },
    {
      num: "02",
      title: "ACOMPANHAMENTO",
      subtitle: "Pipeline & Qualificação",
      desc: "Organização dos interessados por modalidade (Musculação, Natação, Hidroginástica) e status da jornada de decisão.",
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      tag: "Funil Comercial"
    },
    {
      num: "03",
      title: "RECUPERAÇÃO",
      subtitle: "Automações Autorizadas",
      desc: "Réguas de relacionamento cordiais e autorizadas no WhatsApp, respeitando o consentimento e regras da LGPD.",
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      tag: "Automação WhatsApp"
    },
    {
      num: "04",
      title: "CONVERSÃO",
      subtitle: "Matrículas & Faturamento",
      desc: "Conclusão das matrículas com link de pagamento direto no WhatsApp e mensuração da receita recuperada.",
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      tag: "Receita em Caixa"
    }
  ];

  const features = [
    {
      title: "Gestão de Interessados",
      category: "Pipeline Comercial",
      desc: "Tabela e funil Kanban completos com pesquisa instantânea, filtros por modalidade e alteração rápida de status.",
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      badge: "Core CRM"
    },
    {
      title: "Recuperação de Matrículas",
      category: "Retenção Ativa",
      desc: "Resgate de contatos que pararam de responder após receberem a tabela de planos ou visitarem a academia.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      badge: "Gatilho D+1 e D+3"
    },
    {
      title: "Acompanhamento de Experimentais",
      category: "Experiência do Aluno",
      desc: "Gestão de presença nas aulas, lembretes automáticos e redução expressiva de faltas (no-show).",
      icon: <CalendarCheck className="w-6 h-6 text-purple-400" />,
      badge: "Lembrete 2h Antes"
    },
    {
      title: "Reativação de Ex-Alunos",
      category: "Fidelização",
      desc: "Campanhas direcionadas para antigos alunos com base no histórico de vínculo e modalidade preferida.",
      icon: <UserCheck className="w-6 h-6 text-amber-400" />,
      badge: "Safras 60 a 180 dias"
    },
    {
      title: "Automação de WhatsApp",
      category: "Comunicação Humanizada",
      desc: "Modelos de mensagens pré-configurados, cordiais e com opção transparente de cancelamento (opt-out).",
      icon: <MessageSquare className="w-6 h-6 text-emerald-400" />,
      badge: "Consentimento LGPD"
    },
    {
      title: "Relatórios Comerciais",
      category: "Inteligência Estratégica",
      desc: "Dashboards analíticos com taxa de conversão por canal, comparecimento e receita anualizada recuperada.",
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
      badge: "Gráficos em Tempo Real"
    }
  ];

  return (
    <div className="min-h-screen bg-[#04060a] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-black">
      
      {/* Top Professional Authority Header */}
      <div className="bg-gradient-to-r from-[#061124] via-[#081a17] to-[#0a1420] border-b border-white/10 py-2.5 px-4 sm:px-8 text-xs">
        <div className="w-[94%] max-w-[1720px] mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2.5 text-slate-300">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold text-[11px] border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              PROPOSTA EXCLUSIVA
            </span>
            <span className="hidden sm:inline font-medium">Solução de Inteligência Comercial para a <strong>Academia Movimento</strong> • Planaltina-DF</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-[11px] font-mono">
            <span className="flex items-center gap-1 text-slate-300 font-semibold">
              <Building2 className="w-3.5 h-3.5 text-blue-400" /> Mais de 30 anos em Planaltina
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" /> 12,8 mil seguidores @ac.movimentopl
            </span>
            <button
              onClick={onOpenDashboard}
              className="text-white hover:text-emerald-400 font-extrabold underline flex items-center gap-1 cursor-pointer ml-2"
            >
              Acessar Painel <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Island Glass Header (Spans 94% of Screen) */}
      <header className="sticky top-2 z-50 w-[94%] max-w-[1720px] mx-auto my-2 px-6 h-20 rounded-2xl glass-panel flex items-center justify-between border border-white/15 shadow-2xl transition-all duration-300">
        <BrandLogo size="md" />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold text-slate-300 tracking-wider uppercase font-mono">
          <a href="#oportunidades" className="hover:text-emerald-400 transition-colors">Oportunidades</a>
          <a href="#como-funciona" className="hover:text-emerald-400 transition-colors">Como Funciona</a>
          <a href="#calculadora" className="hover:text-emerald-400 transition-colors text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">
            <Calculator className="w-3.5 h-3.5" /> Calculadora ROI
          </a>
          <a href="#recursos" className="hover:text-emerald-400 transition-colors">Recursos</a>
          <a href="#planos" className="hover:text-emerald-400 transition-colors">Planos da Unidade</a>
          <a href="#estrutura" className="hover:text-emerald-400 transition-colors">Estrutura</a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDashboard}
            aria-label="Abrir demonstração do dashboard interativo"
            className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-xs tracking-wider uppercase btn-emerald cursor-pointer shadow-lg"
          >
            <Activity className="w-4 h-4 text-slate-950" />
            <span>Explorar Demonstração</span>
          </button>
        </div>
      </header>

      {/* HERO SECTION — OCCUPYING 90% VIEWPORT HEIGHT & 94% VIEWPORT WIDTH */}
      <section className="relative min-h-[88vh] lg:min-h-[90vh] w-[94%] max-w-[1720px] mx-auto flex flex-col justify-between py-6 lg:py-8 overflow-hidden">
        
        {/* Background Atmospheric Light Beams */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-tr from-blue-700/20 via-emerald-500/20 to-amber-500/15 blur-[160px] pointer-events-none rounded-full"></div>
        <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-emerald-500/15 blur-[140px] pointer-events-none rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/15 blur-[140px] pointer-events-none rounded-full"></div>

        {/* Main 90% Hero Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto">
          
          {/* Left Column (55% width): Typography & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-bold text-emerald-400 shadow-2xl shadow-emerald-950/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>POTÊNCIA COMERCIAL • ACADEMIA MOVIMENTO</span>
              <span className="text-slate-500 font-normal">|</span>
              <span className="text-amber-400 font-mono">+30 ANOS EM PLANALTINA-DF</span>
            </div>

            {/* Massive Athletic Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
              Mais interessados <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 drop-shadow-sm">
                se tornando alunos.
              </span> <br />
              Mais alunos <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400 drop-shadow-sm">
                permanecendo com você.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed">
              Uma plataforma inteligente para organizar contatos, recuperar oportunidades e fortalecer o relacionamento entre sua academia e seus alunos.
            </p>

            {/* CTAs Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenDashboard}
                className="w-full sm:w-auto px-9 py-4 rounded-xl font-black text-sm uppercase tracking-wider btn-emerald flex items-center justify-center gap-3 cursor-pointer group shadow-2xl"
              >
                <span>Explorar Demonstração</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href="#oportunidades"
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-white/15 hover:border-emerald-500/40 transition-all flex items-center justify-center gap-2"
              >
                <span>Conhecer a Plataforma</span>
              </a>

              <a
                href="#calculadora"
                className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>Simular Retorno (ROI)</span>
              </a>
            </div>

            {/* Live KPI HUD Bar inside Hero */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3.5 rounded-2xl glass-card border border-white/10">
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Conversão de Leads</div>
                <div className="text-2xl font-black text-white font-mono mt-0.5">36.3%</div>
                <div className="text-[10px] text-emerald-400 font-bold mt-1">+8.4% vs média</div>
              </div>

              <div className="p-3.5 rounded-2xl glass-card border border-blue-500/30 bg-blue-500/5">
                <div className="text-[10px] font-mono font-bold text-blue-300 uppercase tracking-wider">Resposta WhatsApp</div>
                <div className="text-2xl font-black text-blue-400 font-mono mt-0.5">14 min</div>
                <div className="text-[10px] text-slate-400 mt-1">Automação imediata</div>
              </div>

              <div className="p-3.5 rounded-2xl glass-card border border-white/10">
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Instagram Ativo</div>
                <div className="text-2xl font-black text-white font-mono mt-0.5">12.8k</div>
                <div className="text-[10px] text-emerald-400 font-bold mt-1">@ac.movimentopl</div>
              </div>

              <div className="p-3.5 rounded-2xl glass-card border border-emerald-500/40 bg-emerald-500/5">
                <div className="text-[10px] font-mono font-bold text-emerald-300 uppercase tracking-wider">Receita Resgatada</div>
                <div className="text-2xl font-black text-emerald-400 font-mono mt-0.5">R$ 48.720</div>
                <div className="text-[10px] text-slate-400 mt-1">Projeção anual demo</div>
              </div>
            </div>

          </div>

          {/* Right Column (45% width): High-Definition Live Interactive Cockpit */}
          <div className="lg:col-span-5 relative h-full flex items-center justify-center">
            <div className="w-full h-[520px] lg:h-[580px] xl:h-[620px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black bg-[#080e1a] relative flex flex-col justify-between p-6 group">
              
              {/* Background Fitness Visual */}
              <img
                src={IMAGES.hero.url}
                alt={IMAGES.hero.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 mix-blend-luminosity"
                loading="eager"
              />
              
              {/* Vignette Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060a12] via-[#081020]/80 to-[#0a1426]/90"></div>

              {/* Cockpit Top Bar */}
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-black text-white uppercase font-mono tracking-wider">
                    SIMULADOR AO VIVO • INSTÂNCIA WHATSAPP
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/25 font-bold">
                  AM-PLANALTINA
                </span>
              </div>

              {/* Middle Interactive Simulation Stage */}
              <div className="relative z-10 space-y-4 my-auto">
                
                {/* Simulated Lead Inbound Message */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] bg-slate-900/90 text-slate-200 border border-white/10 rounded-2xl rounded-bl-none p-3.5 text-xs shadow-lg space-y-1">
                    <div className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1">
                      <span>Mariana Albuquerque</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">Instagram @ac.movimentopl</span>
                    </div>
                    <p className="leading-relaxed">
                      "Olá! Vi no Instagram que vocês têm natação e musculação. Gostaria de saber os horários da piscina aquecida e os planos!"
                    </p>
                    <span className="text-[9px] text-slate-500 block text-right">Ontem 14:15</span>
                  </div>
                </div>

                {/* Simulated Automated Recovery Outbound Message */}
                <div className="flex justify-end">
                  <div className="max-w-[90%] bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl rounded-br-none p-3.5 text-xs shadow-xl space-y-1">
                    <div className="text-[10px] text-emerald-200 font-mono font-bold flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      <span>RÉGUA MOVIMENTO GROWTH (D+1)</span>
                    </div>
                    <p className="leading-relaxed font-medium">
                      "Olá! Tudo bem? Você demonstrou interesse em conhecer nossos planos e gostaríamos de saber se ainda podemos ajudar. Nossa equipe está à disposição para tirar suas dúvidas!"
                    </p>
                    <span className="text-[9px] text-emerald-200/80 block text-right font-mono">Hoje 10:30 ✓✓</span>
                  </div>
                </div>

                {/* Dynamic Replied State */}
                {heroStep === 'typing' && (
                  <div className="flex justify-start">
                    <div className="bg-slate-900/90 border border-white/10 rounded-2xl px-4 py-2 text-xs text-slate-400 rounded-bl-none flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                      <span className="text-[11px]">Mariana está digitando...</span>
                    </div>
                  </div>
                )}

                {heroStep === 'replied' && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="max-w-[85%] bg-emerald-950/80 text-emerald-200 border border-emerald-500/40 rounded-2xl rounded-bl-none p-3.5 text-xs shadow-2xl space-y-1">
                      <div className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1">
                        <span>Mariana Albuquerque</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-emerald-300 font-bold">Interesse Confirmado!</span>
                      </div>
                      <p className="leading-relaxed">
                        "Oi! Desculpe a demora, tenho muito interesse sim! Como faço para agendar minha aula experimental gratuita na piscina amanhã às 19h?"
                      </p>
                      <span className="text-[9px] text-emerald-400/80 block text-right font-mono font-bold">Hoje 10:31 • Convertido</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Cockpit Interactive Action Footer */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                {heroStep === 'sent' && (
                  <button
                    onClick={handleTriggerHeroSimulation}
                    className="w-full py-3 rounded-xl btn-emerald font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Play className="w-4 h-4 text-slate-950 fill-slate-950" />
                    <span>Testar Resposta da Aluna ao Vivo</span>
                  </button>
                )}

                {heroStep === 'typing' && (
                  <div className="w-full py-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-spin"></span>
                    <span>Simulando digitação no WhatsApp...</span>
                  </div>
                )}

                {heroStep === 'replied' && (
                  <div className="w-full flex items-center gap-2">
                    <button
                      onClick={onOpenDashboard}
                      className="flex-1 py-3 rounded-xl btn-emerald font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      <CheckCircle2 className="w-4 h-4 text-slate-950" />
                      <span>Ver Lead no Painel</span>
                    </button>
                    <button
                      onClick={handleResetHeroSimulation}
                      className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                      title="Reiniciar Simulação"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* SECTION: INTERACTIVE ROI & REVENUE CALCULATOR */}
      <section id="calculadora" className="py-20 bg-gradient-to-b from-[#05070c] via-[#081120] to-[#05070c] border-y border-white/10 relative">
        <div className="w-[94%] max-w-[1720px] mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 uppercase font-mono tracking-wider">
              <Calculator className="w-3.5 h-3.5" /> Impacto Comercial Estimado
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Quanto a Academia Movimento pode recuperar por ano?
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Arraste os controles abaixo para simular o potencial de faturamento recuperando contatos que pediram informações ou ex-alunos que pararam de treinar:
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-[#0c1628] via-[#09101d] to-[#070b14] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Sliders Column */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Slider 1: Monthly Lost Leads */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-400" />
                      Contatos sem fechamento ou ex-alunos inativos / mês:
                    </label>
                    <span className="text-lg font-black font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                      {monthlyLostLeads} contatos
                    </span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="400"
                    step="10"
                    value={monthlyLostLeads}
                    onChange={(e) => setMonthlyLostLeads(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                    <span>30 contatos</span>
                    <span>150 contatos (médio)</span>
                    <span>400 contatos</span>
                  </div>
                </div>

                {/* Slider 2: Average Ticket */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-emerald-400" />
                      Ticket médio mensal do plano (R$ / aluno):
                    </label>
                    <span className="text-lg font-black font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20">
                      R$ {averageTicket},00 / mês
                    </span>
                  </div>
                  <input
                    type="range"
                    min="89"
                    max="250"
                    step="5"
                    value={averageTicket}
                    onChange={(e) => setAverageTicket(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                    <span>R$ 89 (Anual VIP)</span>
                    <span>R$ 139 (Musculação)</span>
                    <span>R$ 250 (Combo Natação)</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 text-xs text-slate-400 leading-relaxed">
                  💡 <strong>Metodologia de Cálculo:</strong> Considera taxa conservadora de recuperação de <strong>28%</strong> através da combinação de lembretes pós-aula experimental, resposta rápida em 24h e reativação periódica com condições especiais.
                </div>

              </div>

              {/* Live Calculated Output Card */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-[#111e35] to-[#0b1424] border border-emerald-500/40 shadow-xl space-y-5 text-center">
                <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-extrabold">
                  POTENCIAL DE RESGATE COMERCIAL
                </span>

                <div className="space-y-1">
                  <div className="text-xs text-slate-300">Novas Matrículas Estimadas / Mês:</div>
                  <div className="text-3xl font-black text-white font-mono">
                    +{estimatedRecoveredLeads} <span className="text-xs text-emerald-400 font-normal">alunos/mês</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
                  <div className="text-xs text-slate-300">Receita Adicional Mensal:</div>
                  <div className="text-2xl font-black text-emerald-300 font-mono">
                    +R$ {monthlyRevenueGain.toLocaleString('pt-BR')},00
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 space-y-1">
                  <div className="text-xs text-emerald-300 font-bold uppercase tracking-wider">
                    Faturamento Anual Adicional Recuperado:
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono drop-shadow-md">
                    R$ {annualRevenueGain.toLocaleString('pt-BR')},00
                  </div>
                </div>

                <button
                  onClick={onOpenDashboard}
                  className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider btn-emerald cursor-pointer shadow-lg"
                >
                  Ver no Dashboard Como Funciona
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION: OPORTUNIDADES QUE NÃO PODEM SER PERDIDAS */}
      <section id="oportunidades" className="py-20 relative">
        <div className="w-[94%] max-w-[1720px] mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase font-mono tracking-wider">
              Diagnóstico do Mercado Fitness
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Oportunidades que não podem ser perdidas
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Situações comuns do segmento fitness que a plataforma ajuda a gerenciar de forma estruturada e automatizada:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((item) => (
              <div 
                key={item.id}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-white/5">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>

                  <div className="mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold block mb-1">
                      Cenário Típico de Mercado:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.situation}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 mt-2 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                    Como a Movimento Growth Atua:
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.solution}</p>
                  <div className="inline-block text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {item.gain}
                  </div>
                </div>
              </div>
            ))}

            {/* Unique 6th Card: Swimming Pool Authority */}
            <div className="glass-card p-6 rounded-2xl border border-blue-500/40 bg-gradient-to-br from-[#0c1830] via-slate-900 to-[#0c1f1a] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <Waves className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    Diferencial Único
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">Tradição Aquática em Planaltina</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  A natação infantil, adulta e a hidroginástica possuem ciclos de renovação familiar distintos da musculação. A Movimento Growth possui réguas específicas para o público de piscina.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                  Valorização da Marca:
                </span>
                <p className="text-xs text-slate-400">Preserva os 30+ anos de referência e carinho da cidade de Planaltina-DF.</p>
                <button
                  onClick={onOpenDashboard}
                  className="w-full py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold text-xs border border-emerald-500/30 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Ver Funil por Modalidade</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION: COMO FUNCIONA (4 ETAPAS) */}
      <section id="como-funciona" className="py-20 bg-[#070b14] border-y border-white/10 relative">
        <div className="w-[94%] max-w-[1720px] mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 uppercase font-mono tracking-wider">
              Ciclo Operacional Completo
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Como funciona em 4 etapas
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Da primeira mensagem no Instagram até a assinatura do contrato e retenção contínua:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, i) => (
              <div 
                key={i} 
                className="relative glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black font-mono text-slate-600 group-hover:text-emerald-400 transition-colors">
                      {st.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center">
                      {st.icon}
                    </div>
                  </div>

                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 mb-1 font-mono">
                    {st.title}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{st.subtitle}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{st.desc}</p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {st.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION: RECURSOS DA PLATAFORMA */}
      <section id="recursos" className="py-20 relative">
        <div className="w-[94%] max-w-[1720px] mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase font-mono tracking-wider">
              Ecossistema Comercial
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Recursos da plataforma Movimento Growth
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Funcionalidades desenvolvidas especificamente para o modelo de negócios de academias completas:
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
                    <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-white/10 flex items-center justify-center">
                      {feat.icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      {feat.badge}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                    {feat.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">{feat.desc}</p>
                </div>

                <button 
                  onClick={onOpenDashboard}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 hover:text-emerald-300 font-bold text-xs border border-white/5 flex items-center justify-between transition-colors group cursor-pointer"
                >
                  <span>Experimentar no Painel</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION: PLANOS DA ACADEMIA MOVIMENTO */}
      <section id="planos" className="py-20 bg-[#070b14] border-y border-white/10 relative">
        <div className="w-[94%] max-w-[1720px] mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 uppercase font-mono tracking-wider">
              Grade de Modalidades Integradas
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Planos & Modalidades da Academia Movimento
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              O sistema gerencia o pipeline comercial de todas as atividades oferecidas na unidade de Planaltina-DF:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANS_CATALOG.map((pl) => (
              <div 
                key={pl.id}
                className={`glass-card p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  pl.badge ? 'border-emerald-500/50 bg-[#0c1626] shadow-2xl shadow-emerald-950/30' : 'border-white/10'
                }`}
              >
                <div>
                  {pl.badge && (
                    <div className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-slate-950 bg-emerald-400 px-2.5 py-0.5 rounded-full mb-3">
                      {pl.badge}
                    </div>
                  )}
                  <h3 className="text-base font-bold text-white mb-2">{pl.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-3xl font-black text-white font-mono">{pl.price}</span>
                    <span className="text-xs text-slate-400">{pl.period}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">{pl.description}</p>

                  <ul className="space-y-2 mb-6">
                    {pl.features.map((ft, fi) => (
                      <li key={fi} className="text-xs text-slate-300 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{ft}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenDashboard}
                  className="w-full py-2.5 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-white/10 cursor-pointer"
                >
                  Ver Leads Deste Plano
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION: ESTRUTURA PROFISSIONAL REALISTA */}
      <section id="estrutura" className="py-20 relative">
        <div className="w-[94%] max-w-[1720px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase font-mono tracking-wider">
                Infraestrutura Completa
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Ambiente de alta performance para a família toda
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Com piscina coberta e aquecida para natação adulto e infantil, sala de musculação ampla e equipe de profissionais capacitados, a <strong>Academia Movimento</strong> tem autoridade inquestionável em Planaltina-DF.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                A tecnologia <strong>MOVIMENTO GROWTH</strong> potencializa esses diferenciais físicos com uma gestão comercial ativa, convertendo os mais de 12,8 mil seguidores do Instagram em alunos matriculados e fiéis.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">✓</div>
                  <span>Piscina semiolímpica aquecida tratada para adultos e crianças</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">✓</div>
                  <span>Equipamentos modernos de musculação e circuito funcional</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">✓</div>
                  <span>Instrutores qualificados com acompanhamento próximo</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg group">
                  <img src={IMAGES.swimming.url} alt={IMAGES.swimming.alt} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-3 bg-slate-900 text-[11px] text-slate-400">{IMAGES.swimming.caption}</div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg group">
                  <img src={IMAGES.weights.url} alt={IMAGES.weights.alt} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-3 bg-slate-900 text-[11px] text-slate-400">{IMAGES.weights.caption}</div>
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg group">
                  <img src={IMAGES.trainer.url} alt={IMAGES.trainer.alt} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-3 bg-slate-900 text-[11px] text-slate-400">{IMAGES.trainer.caption}</div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg group">
                  <img src={IMAGES.reception.url} alt={IMAGES.reception.alt} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-3 bg-slate-900 text-[11px] text-slate-400">{IMAGES.reception.caption}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: DEMONSTRAÇÃO DO PAINEL (CTA FINAL) */}
      <section className="py-24 relative overflow-hidden">
        <div className="w-[94%] max-w-[1720px] mx-auto px-4 relative z-10 text-center">
          
          <div className="glass-panel p-10 sm:p-16 rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-[#0c1830] via-[#09101d] to-[#05070c] shadow-2xl shadow-black relative overflow-hidden">
            
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-extrabold text-xs tracking-wider uppercase font-mono">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>EXPERIMENTE A PLATAFORMA AO VIVO</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Veja o painel interativo da <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                  Academia Movimento na prática
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Explore a tabela dinâmica e o funil Kanban de interessados, simule mensagens oficiais de WhatsApp, acompanhe aulas experimentais e veja métricas comerciais com dados fictícios prontos para demonstração.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={onOpenDashboard}
                  className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-wider btn-emerald cursor-pointer flex items-center justify-center gap-3 shadow-2xl"
                >
                  <Activity className="w-5 h-5 text-slate-950" />
                  <span>Acessar Painel Movimento Growth</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="pt-6 flex items-center justify-center gap-6 text-xs text-slate-400 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Navegação 100% Funcional
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Funil Kanban + Tabela
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Simulador de Conversas WhatsApp
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
      <footer className="mt-auto bg-[#030508] border-t border-white/5 py-12 text-slate-400 text-sm">
        <div className="w-[94%] max-w-[1720px] mx-auto px-4 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <BrandLogo size="md" />

            <div className="flex items-center gap-6 text-xs text-slate-400">
              <span>Planaltina - DF</span>
              <span>•</span>
              <a href="https://instagram.com/ac.movimentopl" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                @ac.movimentopl
              </a>
              <span>•</span>
              <span>Mais de 30 anos de atuação</span>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 text-center text-xs text-slate-500 space-y-2">
            <p className="font-semibold text-slate-300">
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
