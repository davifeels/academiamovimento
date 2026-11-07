import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  CheckCircle2,
  UserCheck,
  Megaphone,
  MessageSquare,
  BarChart3,
  Settings,
  Bell,
  Search,
  Plus,
  Filter,
  ArrowUpRight,
  TrendingUp,
  Clock,
  Phone,
  Send,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  AlertTriangle,
  RefreshCw,
  ExternalLink,
  ChevronDown,
  Info,
  Check,
  Eye,
  Menu,
  X,
  FileSpreadsheet,
  Download,
  Dumbbell,
  Waves
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import WhatsAppSimulatorModal from './WhatsAppSimulatorModal';
import AddLeadModal from './AddLeadModal';
import { 
  LeadEvolutionChart, 
  LeadOriginChart, 
  RecoveryComparisonChart, 
  MonthlyEnrollmentChart 
} from './DashboardCharts';
import { 
  ACADEMY_INFO, 
  INITIAL_LEADS, 
  INITIAL_EXPERIMENTAL_CLASSES, 
  INITIAL_EX_STUDENTS, 
  INITIAL_AUTOMATIONS, 
  PLANS_CATALOG, 
  KPI_METRICS 
} from '../data/mockData';
import confetti from 'canvas-confetti';

export default function Dashboard({ onReturnToLanding }) {
  // Navigation active tab
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Leads state with local persistence
  const [leads, setLeads] = useState(() => {
    const saved = localStorage.getItem('movimento_leads');
    return saved ? JSON.parse(saved) : INITIAL_LEADS;
  });

  // Experimental classes state
  const [classes, setClasses] = useState(() => {
    const saved = localStorage.getItem('movimento_classes');
    return saved ? JSON.parse(saved) : INITIAL_EXPERIMENTAL_CLASSES;
  });

  // Ex-students state
  const [exStudents, setExStudents] = useState(() => {
    const saved = localStorage.getItem('movimento_ex_students');
    return saved ? JSON.parse(saved) : INITIAL_EX_STUDENTS;
  });

  // Automations state
  const [automations, setAutomations] = useState(() => {
    const saved = localStorage.getItem('movimento_automations');
    return saved ? JSON.parse(saved) : INITIAL_AUTOMATIONS;
  });

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('movimento_leads', JSON.stringify(leads));
  }, [leads]);

  useEffect(() => {
    localStorage.setItem('movimento_classes', JSON.stringify(classes));
  }, [classes]);

  useEffect(() => {
    localStorage.setItem('movimento_ex_students', JSON.stringify(exStudents));
  }, [exStudents]);

  useEffect(() => {
    localStorage.setItem('movimento_automations', JSON.stringify(automations));
  }, [automations]);

  // Modals state
  const [selectedLeadForWhatsApp, setSelectedLeadForWhatsApp] = useState(null);
  const [isAddLeadModalOpen, setIsAddLeadModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Search & Filter state for Leads table
  const [leadSearch, setLeadSearch] = useState('');
  const [leadStatusFilter, setLeadStatusFilter] = useState('ALL');
  const [leadInterestFilter, setLeadInterestFilter] = useState('ALL');

  // WhatsApp Hub simulated chat state
  const [activeChatLead, setActiveChatLead] = useState(leads[0] || null);
  const [hubInputMessage, setHubInputMessage] = useState('');
  const [hubChatMessages, setHubChatMessages] = useState([
    { id: '1', sender: 'lead', text: 'Olá! Como funciona a matrícula para musculação e natação?', time: '14:20' },
    { id: '2', sender: 'staff', text: 'Olá! A Academia Movimento oferece o plano Combo Musculação + Natação em piscina aquecida por R$ 249,90/mês. Quer agendar uma aula experimental?', time: '14:22' }
  ]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Status badge styling helper
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Novo interessado':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
      case 'Aguardando resposta':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
      case 'Aula experimental agendada':
        return 'bg-purple-500/15 text-purple-400 border-purple-500/30';
      case 'Aula realizada':
        return 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30';
      case 'Em negociação':
        return 'bg-orange-500/15 text-orange-400 border-orange-500/30';
      case 'Matrícula concluída':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 font-bold';
      case 'Sem interesse':
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  // Lead update action
  const handleUpdateLeadStatus = (leadId, newStatus) => {
    setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
    showToast(`Status atualizado para "${newStatus}" com sucesso!`);
  };

  const handleAddLead = (newLead) => {
    setLeads(prev => [newLead, ...prev]);
    showToast(`Novo interessado ${newLead.name} adicionado com sucesso!`);
  };

  // Quick dispatch for Ex-Student campaign
  const handleDispatchExStudentCampaign = (studentId) => {
    setExStudents(prev => prev.map(s => {
      if (s.id === studentId) {
        return {
          ...s,
          status: 'Campanha enviada',
          lastContactDate: 'Hoje às ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        };
      }
      return s;
    }));
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.6 } });
    showToast(`Campanha de retorno enviada via WhatsApp para o ex-aluno!`);
  };

  // Quick toggle automation
  const handleToggleAutomation = (id) => {
    setAutomations(prev => prev.map(a => a.id === id ? { ...a, active: !a.active } : a));
    showToast('Regra de automação atualizada!');
  };

  // Experimental class attendance action
  const handleClassStatus = (classId, newStatus) => {
    setClasses(prev => prev.map(c => c.id === classId ? { ...c, status: newStatus } : c));
    showToast(`Aula experimental marcada como "${newStatus}"!`);
  };

  // Filtered leads
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(leadSearch.toLowerCase()) ||
                          lead.phone.includes(leadSearch) ||
                          lead.interest.toLowerCase().includes(leadSearch.toLowerCase());
    const matchesStatus = leadStatusFilter === 'ALL' || lead.status === leadStatusFilter;
    const matchesInterest = leadInterestFilter === 'ALL' || lead.interest.includes(leadInterestFilter);
    return matchesSearch && matchesStatus && matchesInterest;
  });

  // Recovery leads (leads awaiting reply, after class, or in negotiation)
  const recoveryLeads = leads.filter(l => 
    l.status === 'Aguardando resposta' || 
    l.status === 'Aula realizada' || 
    l.status === 'Em negociação' ||
    l.daysInactive > 1
  );

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 flex flex-col antialiased">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div 
          role="status" 
          aria-live="polite"
          className="fixed top-5 right-5 z-50 glass-panel px-4 py-3 rounded-xl border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-2xl flex items-center gap-2.5 animate-bounce"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Banner: Demonstrative Notice */}
      <aside aria-label="Aviso Institucional" className="bg-[#0b1322] border-b border-white/5 px-4 py-2 flex items-center justify-between text-xs text-slate-400 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true"></span>
          <span className="font-semibold text-slate-200">Painel Movimento Growth</span>
          <span className="hidden sm:inline">• Ambiente Demonstrativo com Dados Fictícios • Planaltina-DF</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
            <ShieldCheck className="w-3.5 h-3.5" /> API WhatsApp Conectada
          </div>
          <button
            onClick={onReturnToLanding}
            aria-label="Voltar para a Landing Page Comercial"
            className="text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 px-2.5 py-1 rounded-lg border border-white/10 transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>Ver Landing Page</span>
            <ExternalLink className="w-3 h-3 text-emerald-400" />
          </button>
        </div>
      </aside>

      <div className="flex-1 flex overflow-hidden">
        
        {/* SIDEBAR NAVIGATION */}
        <aside 
          aria-label="Menu Principal de Navegação"
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#090d16] border-r border-white/10 flex flex-col transition-transform duration-300 lg:static lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Sidebar Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <BrandLogo size="sm" />
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 text-slate-400 hover:text-white"
              aria-label="Fechar menu lateral"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-3 space-y-1 overflow-y-auto text-xs font-medium" aria-label="Seções do Dashboard">
            <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-slate-500">
              Menu Comercial
            </div>

            {[
              { id: 'overview', label: 'Visão Geral', icon: <LayoutDashboard className="w-4 h-4" /> },
              { id: 'leads', label: 'Interessados', icon: <Users className="w-4 h-4" />, badge: leads.length },
              { id: 'classes', label: 'Aulas Experimentais', icon: <CalendarCheck className="w-4 h-4" />, badge: '5' },
              { id: 'enrollments', label: 'Matrículas', icon: <CheckCircle2 className="w-4 h-4" /> },
              { id: 'recovery', label: 'Recuperação de Alunos', icon: <RefreshCw className="w-4 h-4" />, badge: recoveryLeads.length, highlight: true },
              { id: 'reactivation', label: 'Reativação de Ex-Alunos', icon: <UserCheck className="w-4 h-4" /> },
              { id: 'campaigns', label: 'Campanhas', icon: <Megaphone className="w-4 h-4" /> },
              { id: 'conversations', label: 'Conversas (WhatsApp)', icon: <MessageSquare className="w-4 h-4" /> },
              { id: 'reports', label: 'Relatórios Comerciais', icon: <BarChart3 className="w-4 h-4" /> },
              { id: 'automations', label: 'Automações & Regras', icon: <Sparkles className="w-4 h-4" /> },
              { id: 'settings', label: 'Configurações', icon: <Settings className="w-4 h-4" /> }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                aria-current={activeTab === item.id ? 'page' : undefined}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={activeTab === item.id ? 'text-emerald-400' : 'text-slate-400'} aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    item.highlight ? 'bg-orange-500/20 text-orange-400 font-bold' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Sidebar Footer with Client Metadata */}
          <div className="p-3 border-t border-white/10 bg-[#060a10]">
            <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 text-[11px] space-y-1">
              <div className="font-bold text-white flex items-center gap-1.5">
                <span>Academia Movimento</span>
              </div>
              <div className="text-slate-400">Planaltina - DF • 30+ Anos</div>
              <div className="text-[10px] text-emerald-400 font-mono">@ac.movimentopl</div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 flex flex-col min-w-0 overflow-y-auto" id="main-content">
          
          {/* Topbar */}
          <header className="sticky top-0 z-30 bg-[#090d16]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                aria-label="Abrir menu de navegação lateral"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-base sm:text-lg font-bold text-white capitalize">
                  {activeTab === 'overview' && 'Visão Geral & Indicadores'}
                  {activeTab === 'leads' && 'Gestão de Interessados (Pipeline)'}
                  {activeTab === 'classes' && 'Aulas Experimentais Agendadas'}
                  {activeTab === 'enrollments' && 'Matrículas & Conversões'}
                  {activeTab === 'recovery' && 'Recuperação de Interessados'}
                  {activeTab === 'reactivation' && 'Reativação de Ex-Alunos'}
                  {activeTab === 'campaigns' && 'Campanhas & Ações Comerciais'}
                  {activeTab === 'conversations' && 'Central de Conversas WhatsApp'}
                  {activeTab === 'reports' && 'Relatórios de Desempenho Comercial'}
                  {activeTab === 'automations' && 'Régua de Automações & LGPD'}
                  {activeTab === 'settings' && 'Configurações da Unidade'}
                </h1>
                <p className="text-[11px] text-slate-400 hidden sm:block">
                  Plataforma Movimento Growth • Gestão focada em captação e retenção
                </p>
              </div>
            </div>

            {/* Quick Actions in Topbar */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setIsAddLeadModalOpen(true)}
                aria-label="Registrar novo interessado"
                className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Novo Interessado</span>
              </button>
            </div>
          </header>

          {/* VIEW SWITCHER CONTAINER */}
          <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6">
            
            {/* VIEW 1: VISÃO GERAL (OVERVIEW) */}
            {activeTab === 'overview' && (
              <div className="space-y-6 animate-fade-in">
                
                {/* 6 KPI Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                  <div className="glass-card p-4 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Total Interessados
                    </div>
                    <div className="text-2xl font-black text-white font-mono">{KPI_METRICS.totalLeads}</div>
                    <div className="mt-2 text-[10px] text-emerald-400 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +18 este mês
                    </div>
                  </div>

                  <div className="glass-card p-4 rounded-2xl border border-amber-500/30 bg-amber-500/5 hover:border-amber-500/50 transition-all">
                    <div className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider mb-1">
                      Aguardando Retorno
                    </div>
                    <div className="text-2xl font-black text-amber-400 font-mono">{KPI_METRICS.waitingReply}</div>
                    <div className="mt-2 text-[10px] text-slate-400">
                      Oportunidades quentes
                    </div>
                  </div>

                  <div className="glass-card p-4 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Aulas Realizadas
                    </div>
                    <div className="text-2xl font-black text-blue-400 font-mono">{KPI_METRICS.experimentalClassesCompleted}</div>
                    <div className="mt-2 text-[10px] text-emerald-400 font-mono">
                      81.8% presença
                    </div>
                  </div>

                  <div className="glass-card p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/50 transition-all">
                    <div className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider mb-1">
                      Matrículas Convertidas
                    </div>
                    <div className="text-2xl font-black text-emerald-400 font-mono">{KPI_METRICS.convertedEnrollments}</div>
                    <div className="mt-2 text-[10px] text-emerald-400 font-mono">
                      Taxa de 36.3%
                    </div>
                  </div>

                  <div className="glass-card p-4 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Ex-Alunos Reativados
                    </div>
                    <div className="text-2xl font-black text-purple-400 font-mono">{KPI_METRICS.reactivatedExStudents}</div>
                    <div className="mt-2 text-[10px] text-slate-400">
                      Campanhas de volta
                    </div>
                  </div>

                  <div className="glass-card p-4 rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950/20 to-slate-900 hover:border-emerald-500/60 transition-all">
                    <div className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider mb-1">
                      Receita Recuperada
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-emerald-300 font-mono">{KPI_METRICS.potentialRevenueRecovered}</div>
                    <div className="mt-2 text-[10px] text-slate-400">
                      Projeção anualizada
                    </div>
                  </div>
                </div>

                {/* Charts Grid 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8 glass-panel p-5 rounded-2xl border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="text-sm font-bold text-white">Evolução de Interessados e Matrículas</h2>
                        <p className="text-xs text-slate-400">Acompanhamento contínuo dos contatos ao longo dos últimos meses</p>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        Demonstração
                      </span>
                    </div>
                    <div className="h-64">
                      <LeadEvolutionChart />
                    </div>
                  </div>

                  <div className="lg:col-span-4 glass-panel p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-sm font-bold text-white">Origem dos Contatos</h2>
                        <span className="text-[10px] font-mono text-slate-400">342 contatos</span>
                      </div>
                      <p className="text-xs text-slate-400 mb-4">Participação do Instagram @ac.movimentopl e outros canais</p>
                    </div>
                    <div className="h-56 relative flex items-center justify-center">
                      <LeadOriginChart />
                    </div>
                  </div>
                </div>

                {/* Charts Grid 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-6 glass-panel p-5 rounded-2xl border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="text-sm font-bold text-white">Resultados de Recuperação Comercial</h2>
                        <p className="text-xs text-slate-400">Pessoas que esfriaram o contato e foram convertidas após réguas ativas</p>
                      </div>
                    </div>
                    <div className="h-60">
                      <RecoveryComparisonChart />
                    </div>
                  </div>

                  <div className="lg:col-span-6 glass-panel p-5 rounded-2xl border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="text-sm font-bold text-white">Matrículas Totais: Orgânicas vs Recuperadas</h2>
                        <p className="text-xs text-slate-400">O impacto direto da Movimento Growth no faturamento da academia</p>
                      </div>
                    </div>
                    <div className="h-60">
                      <MonthlyEnrollmentChart />
                    </div>
                  </div>
                </div>

                {/* Recent Activity Quick Table */}
                <div className="glass-panel p-5 rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-sm font-bold text-white">Últimos Interessados em Acompanhamento</h2>
                      <p className="text-xs text-slate-400">Contatos recentes necessitando de ação comercial</p>
                    </div>
                    <button
                      onClick={() => setActiveTab('leads')}
                      className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      Ver todos os {leads.length} interessados <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs" aria-label="Últimos interessados da academia">
                      <thead className="bg-slate-800/60 text-slate-400 uppercase tracking-wider font-mono text-[10px]">
                        <tr>
                          <th scope="col" className="py-2.5 px-3">Nome</th>
                          <th scope="col" className="py-2.5 px-3">Interesse / Plano</th>
                          <th scope="col" className="py-2.5 px-3">Origem</th>
                          <th scope="col" className="py-2.5 px-3">Status</th>
                          <th scope="col" className="py-2.5 px-3">Próxima Ação Sugerida</th>
                          <th scope="col" className="py-2.5 px-3 text-right">Ação</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {leads.slice(0, 4).map((l) => (
                          <tr key={l.id} className="hover:bg-white/5 transition-colors">
                            <td className="py-3 px-3 font-semibold text-white">
                              {l.name}
                              <div className="text-[10px] text-slate-400 font-mono font-normal">{l.phone}</div>
                            </td>
                            <td className="py-3 px-3 text-slate-200">
                              {l.interest}
                              <div className="text-[10px] text-slate-400">{l.plan}</div>
                            </td>
                            <td className="py-3 px-3 text-slate-300">{l.origin}</td>
                            <td className="py-3 px-3">
                              <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] border ${getStatusBadge(l.status)}`}>
                                {l.status}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-slate-400 text-[11px]">{l.nextAction}</td>
                            <td className="py-3 px-3 text-right">
                              <button
                                onClick={() => setSelectedLeadForWhatsApp(l)}
                                aria-label={`Iniciar conversa no WhatsApp com ${l.name}`}
                                className="px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 font-semibold text-[11px] border border-emerald-500/30 transition-colors cursor-pointer inline-flex items-center gap-1"
                              >
                                <MessageSquare className="w-3 h-3" />
                                <span>WhatsApp</span>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

            {/* VIEW 2: GESTÃO DE INTERESSADOS */}
            {activeTab === 'leads' && (
              <div className="space-y-5 animate-fade-in">
                
                {/* Search & Filter Toolbar */}
                <div className="glass-panel p-4 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
                  <div className="relative w-full md:w-80">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
                    <input
                      type="text"
                      placeholder="Buscar por nome, telefone ou modalidade..."
                      aria-label="Buscar interessados por nome, telefone ou modalidade"
                      value={leadSearch}
                      onChange={(e) => setLeadSearch(e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-xl pl-9 pr-3.5 py-2 text-xs text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
                    <select
                      value={leadStatusFilter}
                      aria-label="Filtrar interessados por status"
                      onChange={(e) => setLeadStatusFilter(e.target.value)}
                      className="bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-400"
                    >
                      <option value="ALL">Todos os Status ({leads.length})</option>
                      <option value="Novo interessado">Novo interessado</option>
                      <option value="Aguardando resposta">Aguardando resposta</option>
                      <option value="Aula experimental agendada">Aula experimental agendada</option>
                      <option value="Aula realizada">Aula realizada</option>
                      <option value="Em negociação">Em negociação</option>
                      <option value="Matrícula concluída">Matrícula concluída</option>
                      <option value="Sem interesse">Sem interesse</option>
                    </select>

                    <select
                      value={leadInterestFilter}
                      aria-label="Filtrar interessados por modalidade"
                      onChange={(e) => setLeadInterestFilter(e.target.value)}
                      className="bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-400"
                    >
                      <option value="ALL">Todas as Modalidades</option>
                      <option value="Musculação">Musculação</option>
                      <option value="Natação">Natação (Adulto/Infantil)</option>
                      <option value="Hidroginástica">Hidroginástica</option>
                      <option value="Funcional">Funcional & Cross</option>
                    </select>

                    <button
                      onClick={() => setIsAddLeadModalOpen(true)}
                      aria-label="Cadastrar novo interessado"
                      className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs whitespace-nowrap cursor-pointer transition-colors shadow-md flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Cadastrar Lead</span>
                    </button>
                  </div>
                </div>

                {/* Leads Table */}
                <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs" aria-label="Tabela completa de interessados">
                      <thead className="bg-[#121a29] text-slate-400 uppercase tracking-wider font-mono text-[10px] border-b border-white/10">
                        <tr>
                          <th scope="col" className="py-3 px-4">Nome do Interessado</th>
                          <th scope="col" className="py-3 px-4">Telefone (Fictício)</th>
                          <th scope="col" className="py-3 px-4">Interesse / Plano</th>
                          <th scope="col" className="py-3 px-4">Origem</th>
                          <th scope="col" className="py-3 px-4">1º Contato</th>
                          <th scope="col" className="py-3 px-4">Status Atual</th>
                          <th scope="col" className="py-3 px-4">Próxima Ação</th>
                          <th scope="col" className="py-3 px-4 text-center">Ações Rápidas</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {filteredLeads.map((l) => (
                          <tr key={l.id} className="hover:bg-white/5 transition-colors">
                            <td className="py-3 px-4 font-semibold text-white">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xs font-bold text-emerald-400">
                                  {l.name[0]}
                                </div>
                                <span>{l.name}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 font-mono text-slate-300">{l.phone}</td>
                            <td className="py-3 px-4">
                              <div className="text-slate-100 font-medium">{l.interest}</div>
                              <div className="text-[10px] text-slate-400">{l.plan}</div>
                            </td>
                            <td className="py-3 px-4 text-slate-300">{l.origin}</td>
                            <td className="py-3 px-4 font-mono text-slate-400">{l.firstContact}</td>
                            <td className="py-3 px-4">
                              <select
                                value={l.status}
                                aria-label={`Alterar status de ${l.name}`}
                                onChange={(e) => handleUpdateLeadStatus(l.id, e.target.value)}
                                className={`text-[11px] font-semibold rounded-lg px-2 py-1 border focus:outline-none cursor-pointer ${getStatusBadge(l.status)}`}
                              >
                                <option value="Novo interessado">Novo interessado</option>
                                <option value="Aguardando resposta">Aguardando resposta</option>
                                <option value="Aula experimental agendada">Aula experimental agendada</option>
                                <option value="Aula realizada">Aula realizada</option>
                                <option value="Em negociação">Em negociação</option>
                                <option value="Matrícula concluída">Matrícula concluída</option>
                                <option value="Sem interesse">Sem interesse</option>
                              </select>
                            </td>
                            <td className="py-3 px-4 text-slate-300 text-[11px] max-w-xs truncate" title={l.nextAction}>
                              {l.nextAction}
                            </td>
                            <td className="py-3 px-4 text-center">
                              <button
                                onClick={() => setSelectedLeadForWhatsApp(l)}
                                aria-label={`Abrir simulador de WhatsApp para ${l.name}`}
                                className="px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 font-semibold text-[11px] border border-emerald-500/30 transition-colors cursor-pointer flex items-center gap-1 mx-auto"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                                <span>WhatsApp</span>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="p-3 bg-slate-900/60 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span>Exibindo {filteredLeads.length} de {leads.length} contatos</span>
                    <span className="text-[11px]">Dados demonstrativos locais persistidos</span>
                  </div>
                </div>

              </div>
            )}

            {/* VIEW 3: AULAS EXPERIMENTAIS */}
            {activeTab === 'classes' && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div className="glass-card p-4 rounded-xl border border-white/10">
                    <div className="text-xs text-slate-400 uppercase font-mono">Agendadas esta semana</div>
                    <div className="text-2xl font-bold text-white font-mono mt-1">14</div>
                  </div>
                  <div className="glass-card p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
                    <div className="text-xs text-emerald-400 uppercase font-mono">Realizadas</div>
                    <div className="text-2xl font-bold text-emerald-400 font-mono mt-1">11</div>
                  </div>
                  <div className="glass-card p-4 rounded-xl border border-rose-500/30 bg-rose-500/5">
                    <div className="text-xs text-rose-400 uppercase font-mono">Faltas (No-Show)</div>
                    <div className="text-2xl font-bold text-rose-400 font-mono mt-1">2</div>
                  </div>
                  <div className="glass-card p-4 rounded-xl border border-white/10">
                    <div className="text-xs text-slate-400 uppercase font-mono">Taxa de Presença</div>
                    <div className="text-2xl font-bold text-cyan-400 font-mono mt-1">84.6%</div>
                  </div>
                </div>

                <div className="glass-panel p-5 rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-sm font-bold text-white">Controle de Presença & Acompanhamento de Experimentais</h2>
                      <p className="text-xs text-slate-400">Garanta que nenhum aluno saia da aula sem um contato de follow-up da recepção</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {classes.map((cls) => (
                      <div key={cls.id} className="p-4 rounded-xl bg-slate-900 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white text-sm">{cls.leadName}</span>
                            <span className="text-xs font-mono text-slate-400">{cls.phone}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                              cls.status === 'Confirmada' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                              cls.status === 'Realizada' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
                              'bg-rose-500/20 text-rose-400 border-rose-500/30'
                            }`}>
                              {cls.status}
                            </span>
                          </div>
                          <div className="text-xs text-slate-300 flex items-center gap-3">
                            <span className="text-emerald-400 font-semibold">{cls.modality}</span>
                            <span>•</span>
                            <span>Data: <strong>{cls.date}</strong> às <strong>{cls.time}</strong></span>
                            <span>•</span>
                            <span className="text-slate-400">{cls.instructor}</span>
                          </div>
                          <p className="text-[11px] text-slate-400 italic">{cls.notes}</p>
                        </div>

                        <div className="flex items-center gap-2 w-full md:w-auto">
                          <button
                            onClick={() => handleClassStatus(cls.id, 'Realizada')}
                            aria-label={`Marcar aula de ${cls.leadName} como realizada`}
                            className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 font-semibold text-xs border border-emerald-500/30 transition-colors"
                          >
                            ✓ Realizada
                          </button>
                          <button
                            onClick={() => handleClassStatus(cls.id, 'Não compareceu')}
                            aria-label={`Marcar falta (no-show) para ${cls.leadName}`}
                            className="px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 font-semibold text-xs border border-rose-500/30 transition-colors"
                          >
                            ✕ No-Show
                          </button>
                          <button
                            onClick={() => {
                              setSelectedLeadForWhatsApp({
                                id: cls.id,
                                name: cls.leadName,
                                phone: cls.phone,
                                interest: cls.modality,
                                plan: cls.modality,
                                status: cls.status
                              });
                            }}
                            aria-label={`Enviar mensagem WhatsApp para ${cls.leadName}`}
                            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-white/10 transition-colors flex items-center gap-1"
                          >
                            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Mensagem</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* VIEW 4: MATRÍCULAS */}
            {activeTab === 'enrollments' && (
              <div className="space-y-6 animate-fade-in">
                <div className="glass-panel p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-lg font-bold text-white">Matrículas Formalizadas via Movimento Growth</h2>
                      <p className="text-xs text-slate-400">Contratos concluídos após primeiro contato ou recuperação comercial</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-emerald-400 font-mono">124</div>
                      <div className="text-[11px] text-slate-400">Matrículas Totais (Demo)</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-slate-900 border border-white/10">
                      <div className="text-xs text-slate-400">Plano Mais Vendido</div>
                      <div className="text-base font-bold text-white mt-1">Plano Anual Movimento VIP</div>
                      <div className="text-xs text-emerald-400 font-mono mt-1">R$ 99,90/mês no recorrente</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-white/10">
                      <div className="text-xs text-slate-400">Modalidade Aquática Mais Procurada</div>
                      <div className="text-base font-bold text-white mt-1">Natação Adulto (Piscina Aquecida)</div>
                      <div className="text-xs text-blue-400 font-mono mt-1">R$ 189,90/mês</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-white/10">
                      <div className="text-xs text-slate-400">Ticket Médio Mensal</div>
                      <div className="text-base font-bold text-white mt-1">R$ 148,50 / aluno</div>
                      <div className="text-xs text-emerald-400 font-mono mt-1">Recorrente automático</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <div>
                        <div className="text-sm font-bold text-white">Integração de Pagamento com Link WhatsApp</div>
                        <div className="text-xs text-slate-300">Permite enviar link Pix ou cartão recorrente direto na conversa sem filas no balcão.</div>
                      </div>
                    </div>
                    <button
                      onClick={() => showToast('Simulação de link de matrícula gerada!')}
                      aria-label="Gerar link demonstrativo de pagamento"
                      className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors cursor-pointer"
                    >
                      Gerar Link Demonstração
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* VIEW 5: RECUPERAÇÃO DE ALUNOS */}
            {activeTab === 'recovery' && (
              <div className="space-y-6 animate-fade-in">
                <div className="glass-panel p-5 rounded-2xl border border-orange-500/30 bg-gradient-to-r from-orange-950/20 via-slate-900 to-slate-900">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-ping" aria-hidden="true"></span>
                        <h2 className="text-base font-bold text-white">Módulo de Recuperação de Oportunidades</h2>
                      </div>
                      <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                        Pessoas que demonstraram interesse nos planos da Academia Movimento, realizaram aula ou receberam valores, mas pararam de responder. A plataforma sugere a mensagem ideal para reaquecer o contato com consentimento.
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="text-xs text-slate-400">Contatos em Recuperação</div>
                      <div className="text-2xl font-black text-orange-400 font-mono">{recoveryLeads.length} leads</div>
                    </div>
                  </div>
                </div>

                <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs" aria-label="Tabela de contatos para recuperação">
                      <thead className="bg-[#121a29] text-slate-400 uppercase tracking-wider font-mono text-[10px] border-b border-white/10">
                        <tr>
                          <th scope="col" className="py-3 px-4">Nome do Contato</th>
                          <th scope="col" className="py-3 px-4">Última Interação</th>
                          <th scope="col" className="py-3 px-4">Plano de Interesse</th>
                          <th scope="col" className="py-3 px-4">Tempo sem Resposta</th>
                          <th scope="col" className="py-3 px-4">Etapa de Acompanhamento</th>
                          <th scope="col" className="py-3 px-4">Próxima Ação Sugerida</th>
                          <th scope="col" className="py-3 px-4 text-center">Disparar Acompanhamento</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {recoveryLeads.map((rec) => (
                          <tr key={rec.id} className="hover:bg-white/5 transition-colors">
                            <td className="py-3.5 px-4 font-semibold text-white">
                              {rec.name}
                              <div className="text-[10px] text-slate-400 font-mono">{rec.phone}</div>
                            </td>
                            <td className="py-3.5 px-4 text-slate-300 font-mono text-[11px]">{rec.lastInteraction}</td>
                            <td className="py-3.5 px-4">
                              <span className="text-emerald-400 font-semibold">{rec.plan}</span>
                            </td>
                            <td className="py-3.5 px-4">
                              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono font-bold text-[11px] border border-rose-500/30">
                                {rec.daysInactive === 0 ? 'Hoje' : `${rec.daysInactive} dias`}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-slate-300">{rec.recoveryStage}</td>
                            <td className="py-3.5 px-4 text-slate-400 text-[11px] max-w-xs">{rec.nextAction}</td>
                            <td className="py-3.5 px-4 text-center">
                              <button
                                onClick={() => setSelectedLeadForWhatsApp(rec)}
                                aria-label={`Simular mensagem de WhatsApp para ${rec.name}`}
                                className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-1.5 mx-auto cursor-pointer"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                                <span>Simular WhatsApp</span>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Example of simulated message card requested in prompt */}
                <div className="glass-panel p-5 rounded-2xl border border-emerald-500/30 bg-slate-900/80">
                  <div className="flex items-center gap-2 mb-2 text-emerald-400 text-xs font-bold font-mono uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" /> Mensagem Padronizada de Acompanhamento (Requisito Oficial)
                  </div>
                  <div className="p-4 rounded-xl bg-[#090e18] border border-white/10 text-sm text-slate-200 italic leading-relaxed">
                    "Olá! Tudo bem? Você demonstrou interesse em conhecer nossos planos e gostaríamos de saber se ainda podemos ajudar. Nossa equipe está à disposição para tirar suas dúvidas!"
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                    <span>Gatilho: D+1 ou D+3 após envio da tabela de valores sem retorno.</span>
                    <button
                      onClick={() => {
                        if (recoveryLeads[0]) {
                          setSelectedLeadForWhatsApp(recoveryLeads[0]);
                        }
                      }}
                      className="text-emerald-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      Testar Envio com Lead Fictício <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* VIEW 6: REATIVAÇÃO DE EX-ALUNOS */}
            {activeTab === 'reactivation' && (
              <div className="space-y-6 animate-fade-in">
                <div className="glass-panel p-5 rounded-2xl border border-white/10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-base font-bold text-white">Gestão da Base de Antigos Alunos</h2>
                      <p className="text-xs text-slate-400">Campanhas segmentadas por período de ausência (60 a 180 dias) com condições de retorno</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                        29 Alunos Reativados em 2026
                      </span>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs" aria-label="Tabela de reativação de ex-alunos">
                      <thead className="bg-[#121a29] text-slate-400 uppercase tracking-wider font-mono text-[10px] border-b border-white/10">
                        <tr>
                          <th scope="col" className="py-3 px-4">Nome do Ex-Aluno</th>
                          <th scope="col" className="py-3 px-4">Último Plano</th>
                          <th scope="col" className="py-3 px-4">Última Matrícula</th>
                          <th scope="col" className="py-3 px-4">Tempo de Ausência</th>
                          <th scope="col" className="py-3 px-4">Motivo Informado</th>
                          <th scope="col" className="py-3 px-4">Status Reativação</th>
                          <th scope="col" className="py-3 px-4 text-center">Ação Comercial</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {exStudents.map((st) => (
                          <tr key={st.id} className="hover:bg-white/5 transition-colors">
                            <td className="py-3 px-4 font-semibold text-white">
                              {st.name}
                              <div className="text-[10px] text-slate-400 font-mono">{st.phone}</div>
                            </td>
                            <td className="py-3 px-4 text-slate-300">{st.lastPlan}</td>
                            <td className="py-3 px-4 font-mono text-slate-400">{st.lastEnrollment}</td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono font-bold text-[11px] border border-blue-500/30">
                                {st.monthsInactive} meses
                              </span>
                            </td>
                            <td className="py-3 px-4 text-slate-400 text-[11px]">{st.reason}</td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${
                                st.status === 'Reativado!' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
                                st.status === 'Campanha enviada' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                                st.status === 'Demonstrou interesse' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
                                'bg-slate-800 text-slate-400 border-slate-700'
                              }`}>
                                {st.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-center">
                              {st.status !== 'Reativado!' ? (
                                <button
                                  onClick={() => handleDispatchExStudentCampaign(st.id)}
                                  aria-label={`Enviar campanha de reativação para ${st.name}`}
                                  className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 font-semibold text-xs border border-emerald-500/30 transition-colors cursor-pointer flex items-center gap-1 mx-auto"
                                >
                                  <Send className="w-3 h-3" />
                                  <span>Enviar Campanha</span>
                                </button>
                              ) : (
                                <span className="text-[11px] text-emerald-400 font-bold">✓ Aluno Ativo</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

            {/* VIEW 7: CAMPANHAS */}
            {activeTab === 'campaigns' && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Ativa</span>
                        <span className="text-xs text-slate-400 font-mono">Segmentada</span>
                      </div>
                      <h2 className="text-base font-bold text-white mb-2">Campanha Volta ao Treino (Sem Matrícula)</h2>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        Destinada a ex-alunos com 3 a 6 meses de inatividade, oferecendo isenção da taxa de inscrição no retorno.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Conversão: <strong className="text-white">28.4%</strong></span>
                      <button 
                        onClick={() => showToast('Simulação de disparo em lote executada!')}
                        className="text-emerald-400 font-semibold hover:underline cursor-pointer"
                      >
                        Disparar Lote
                      </button>
                    </div>
                  </div>

                  <div className="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">Ativa</span>
                        <span className="text-xs text-slate-400 font-mono">Piscina Aquecida</span>
                      </div>
                      <h2 className="text-base font-bold text-white mb-2">Aquecimento de Verão • Natação & Hidro</h2>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        Divulgação das novas turmas infantis e hidroginástica para contatos do Instagram @ac.movimentopl.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Conversão: <strong className="text-white">34.1%</strong></span>
                      <button 
                        onClick={() => showToast('Simulação de disparo em lote executada!')}
                        className="text-emerald-400 font-semibold hover:underline cursor-pointer"
                      >
                        Disparar Lote
                      </button>
                    </div>
                  </div>

                  <div className="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">Automatizada</span>
                        <span className="text-xs text-slate-400 font-mono">Pós-Experimental</span>
                      </div>
                      <h2 className="text-base font-bold text-white mb-2">Desafio 30 Dias Movimento</h2>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        Incentivo para novos matriculados manterem 12 treinos no primeiro mês e ganharem avaliação física extra.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Retenção M3: <strong className="text-white">89.2%</strong></span>
                      <button 
                        onClick={() => showToast('Simulação de disparo em lote executada!')}
                        className="text-emerald-400 font-semibold hover:underline cursor-pointer"
                      >
                        Disparar Lote
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* VIEW 8: CONVERSAS (WHATSAPP HUB) */}
            {activeTab === 'conversations' && (
              <div className="glass-panel rounded-2xl border border-white/10 h-[640px] flex overflow-hidden animate-fade-in">
                <div className="w-80 bg-[#0c1322] border-r border-white/10 flex flex-col">
                  <div className="p-3 border-b border-white/10 bg-[#121c2e]">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
                      <input
                        type="text"
                        placeholder="Buscar contatos..."
                        aria-label="Buscar contatos de WhatsApp"
                        className="w-full bg-slate-900 border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto divide-y divide-white/5">
                    {leads.map((l) => (
                      <div
                        key={l.id}
                        onClick={() => setActiveChatLead(l)}
                        className={`p-3 transition-colors cursor-pointer flex items-center gap-3 ${
                          activeChatLead?.id === l.id ? 'bg-slate-800/80 border-l-2 border-emerald-400' : 'hover:bg-white/5'
                        }`}
                      >
                        <div className="w-9 h-9 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center font-bold text-xs text-white">
                          {l.name[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-white text-xs truncate">{l.name}</span>
                            <span className="text-[10px] text-slate-400 font-mono">Hoje</span>
                          </div>
                          <div className="text-[11px] text-slate-400 truncate mt-0.5">{l.plan}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 flex flex-col bg-[#080d18]">
                  <div className="p-3 bg-[#131d2e] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                        {activeChatLead?.name[0] || 'A'}
                      </div>
                      <div>
                        <div className="font-bold text-white text-xs">{activeChatLead?.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{activeChatLead?.phone} • {activeChatLead?.interest}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedLeadForWhatsApp(activeChatLead)}
                      className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/30 transition-colors"
                    >
                      Abrir Modal Completo
                    </button>
                  </div>

                  <div className="flex-1 p-4 overflow-y-auto space-y-3">
                    {hubChatMessages.map((m) => (
                      <div key={m.id} className={`flex ${m.sender === 'staff' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[70%] p-3 rounded-xl text-xs ${
                          m.sender === 'staff' ? 'bg-emerald-600 text-white rounded-br-none' : 'bg-slate-800 text-slate-200 rounded-bl-none'
                        }`}>
                          <p>{m.text}</p>
                          <span className="text-[9px] opacity-75 block text-right mt-1">{m.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-[#131d2e] border-t border-white/10 flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Digite sua mensagem de demonstração..."
                      aria-label="Mensagem de demonstração do WhatsApp"
                      value={hubInputMessage}
                      onChange={(e) => setHubInputMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && hubInputMessage.trim()) {
                          setHubChatMessages(prev => [...prev, {
                            id: String(Date.now()),
                            sender: 'staff',
                            text: hubInputMessage,
                            time: 'Agora'
                          }]);
                          setHubInputMessage('');
                        }
                      }}
                      className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-emerald-400"
                    />
                    <button
                      onClick={() => {
                        if (hubInputMessage.trim()) {
                          setHubChatMessages(prev => [...prev, {
                            id: String(Date.now()),
                            sender: 'staff',
                            text: hubInputMessage,
                            time: 'Agora'
                          }]);
                          setHubInputMessage('');
                        }
                      }}
                      aria-label="Enviar mensagem"
                      className="p-2 rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* VIEW 9: RELATÓRIOS COMERCIAIS */}
            {activeTab === 'reports' && (
              <div className="space-y-6 animate-fade-in">
                <div className="glass-panel p-6 rounded-2xl border border-white/10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-base font-bold text-white">Relatório Consolidado de Conversão Comercial</h2>
                      <p className="text-xs text-slate-400">Indicadores detalhados para tomada de decisão da Academia Movimento</p>
                    </div>
                    <button
                      onClick={() => showToast('Relatório fictício exportado com sucesso!')}
                      aria-label="Exportar relatório consolidado"
                      className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-emerald-400" />
                      <span>Exportar Dados</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-slate-900 border border-white/10">
                      <div className="text-xs text-slate-400">Taxa de Conversão Global</div>
                      <div className="text-3xl font-black text-emerald-400 font-mono mt-1">36.3%</div>
                      <div className="text-[10px] text-slate-400 mt-1">124 matrículas / 342 contatos</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-white/10">
                      <div className="text-xs text-slate-400">Comparecimento Experimental</div>
                      <div className="text-3xl font-black text-blue-400 font-mono mt-1">81.8%</div>
                      <div className="text-[10px] text-slate-400 mt-1">162 presenças / 198 agendamentos</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-white/10">
                      <div className="text-xs text-slate-400">Matrículas Recuperadas</div>
                      <div className="text-3xl font-black text-orange-400 font-mono mt-1">38</div>
                      <div className="text-[10px] text-slate-400 mt-1">Fechadas após o resgate</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-white/10">
                      <div className="text-xs text-slate-400">Tempo Médio de 1ª Resposta</div>
                      <div className="text-3xl font-black text-white font-mono mt-1">14 min</div>
                      <div className="text-[10px] text-emerald-400 mt-1">Com automação imediata</div>
                    </div>
                  </div>

                  <div className="h-64">
                    <MonthlyEnrollmentChart />
                  </div>
                </div>

              </div>
            )}

            {/* VIEW 10: AUTOMAÇÕES & LGPD */}
            {activeTab === 'automations' && (
              <div className="space-y-6 animate-fade-in">
                <div className="glass-panel p-5 rounded-2xl border border-white/10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-base font-bold text-white">Régua de Automações & Relacionamento</h2>
                      <p className="text-xs text-slate-400">Gatilhos programados que respeitam consentimento, regras do WhatsApp e LGPD</p>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      5 Réguas Configuradas
                    </span>
                  </div>

                  <div className="space-y-4">
                    {automations.map((auto) => (
                      <div key={auto.id} className="p-5 rounded-xl bg-slate-900 border border-white/10 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true"></span>
                            <h3 className="font-bold text-white text-sm">{auto.name}</h3>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                              {auto.category}
                            </span>
                          </div>

                          <button
                            onClick={() => handleToggleAutomation(auto.id)}
                            aria-label={`Alternar regra ${auto.name}`}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                              auto.active ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {auto.active ? 'Ativa' : 'Pausada'}
                          </button>
                        </div>

                        <div className="text-xs text-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <div><strong>Gatilho:</strong> {auto.trigger}</div>
                          <div><strong>Tempo de espera:</strong> {auto.delay}</div>
                        </div>

                        <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed">
                          {auto.template}
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5">
                          <span className="flex items-center gap-1 text-emerald-400">
                            <ShieldCheck className="w-3.5 h-3.5" /> {auto.lgpdNote}
                          </span>
                          <span>Conversões atribuídas: <strong>{auto.conversionsCount}</strong></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* VIEW 11: CONFIGURAÇÕES */}
            {activeTab === 'settings' && (
              <div className="glass-panel p-6 rounded-2xl border border-white/10 max-w-4xl space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-base font-bold text-white">Configurações da Plataforma Movimento Growth</h2>
                  <p className="text-xs text-slate-400">Parâmetros da unidade Academia Movimento em Planaltina-DF</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-2">
                    <span className="text-[10px] uppercase font-mono text-slate-400">Empresa</span>
                    <div className="font-bold text-white text-sm">Academia Movimento</div>
                    <div className="text-slate-300">Planaltina - Distrito Federal</div>
                    <div className="text-emerald-400 font-mono">Instagram: @ac.movimentopl</div>
                    <div className="text-slate-400">Mais de 30 anos de atuação • ~12,8 mil seguidores</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-2">
                    <span className="text-[10px] uppercase font-mono text-slate-400">Status da Conexão</span>
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true"></span>
                      WhatsApp Business API Conectada
                    </div>
                    <div className="text-slate-300">Instância: AM-PLANALTINA-PROD</div>
                    <div className="text-slate-400">Latência: 42ms • Criptografia de ponta a ponta</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-3 text-xs">
                  <span className="text-[10px] uppercase font-mono text-slate-400">Conformidade e Transparência</span>
                  <p className="text-slate-300 leading-relaxed">
                    Esta demonstração foi desenvolvida por <strong>Davi Anderson</strong>. O sistema opera com dados sintéticos locais para ilustrar a capacidade de retenção, follow-up de aulas experimentais e recuperação de matrículas.
                  </p>
                </div>
              </div>
            )}

          </div>
        </main>

      </div>

      {/* WHATSAPP SIMULATOR MODAL */}
      <WhatsAppSimulatorModal
        lead={selectedLeadForWhatsApp}
        onClose={() => setSelectedLeadForWhatsApp(null)}
        onStatusChange={(leadId, newStatus) => {
          handleUpdateLeadStatus(leadId, newStatus);
        }}
      />

      {/* ADD LEAD MODAL */}
      <AddLeadModal
        isOpen={isAddLeadModalOpen}
        onClose={() => setIsAddLeadModalOpen(false)}
        onAddLead={handleAddLead}
      />

    </div>
  );
}
