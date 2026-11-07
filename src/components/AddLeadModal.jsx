import React, { useState } from 'react';
import { X, UserPlus, Sparkles, Check } from 'lucide-react';

export default function AddLeadModal({ isOpen, onClose, onAddLead }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Musculação Livre',
    plan: 'Plano Anual Movimento VIP',
    origin: 'Instagram @ac.movimentopl',
    status: 'Novo interessado',
    notes: 'Interessado em conhecer a unidade de Planaltina-DF.'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const newLead = {
      id: "lead-" + Date.now(),
      name: formData.name,
      phone: formData.phone,
      interest: formData.interest,
      plan: formData.plan,
      origin: formData.origin,
      firstContact: new Date().toISOString().split('T')[0],
      status: formData.status,
      nextAction: "Realizar primeiro atendimento e qualificar",
      lastInteraction: "Hoje às " + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      daysInactive: 0,
      recoveryStage: "Novo contato",
      notes: formData.notes
    };

    onAddLead(newLead);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#0e1626] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#172338] px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <UserPlus className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Registrar Novo Interessado</h3>
              <p className="text-xs text-slate-400">Inserir contato no funil comercial Movimento Growth</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-sm">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Nome Completo *
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Vanessa de Souza"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-emerald-400 text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Telefone / WhatsApp *
              </label>
              <input
                type="text"
                required
                placeholder="(61) 99999-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-emerald-400 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Origem do Contato
              </label>
              <select
                value={formData.origin}
                onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-emerald-400 text-sm"
              >
                <option value="Instagram @ac.movimentopl">Instagram @ac.movimentopl</option>
                <option value="WhatsApp Recepção">WhatsApp Recepção</option>
                <option value="Indicação de Aluno">Indicação de Aluno</option>
                <option value="Passante / Balcão Planaltina">Passante / Balcão Planaltina</option>
                <option value="Google Meu Negócio">Google Meu Negócio</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Interesse Principal
              </label>
              <select
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-emerald-400 text-sm"
              >
                <option value="Musculação Livre">Musculação Livre</option>
                <option value="Natação Adulto">Natação Adulto</option>
                <option value="Natação Infantil">Natação Infantil</option>
                <option value="Hidroginástica">Hidroginástica</option>
                <option value="Combo Musculação + Natação">Combo Musculação + Natação</option>
                <option value="Funcional & CrossMov">Funcional & CrossMov</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Status Inicial
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-emerald-400 text-sm"
              >
                <option value="Novo interessado">Novo interessado</option>
                <option value="Aguardando resposta">Aguardando resposta</option>
                <option value="Aula experimental agendada">Aula experimental agendada</option>
                <option value="Aula realizada">Aula realizada</option>
                <option value="Em negociação">Em negociação</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Observações
            </label>
            <textarea
              rows={2}
              placeholder="Ex: Quer treinar de manhã, prefere turmas de 07h..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-emerald-400 text-sm resize-none"
            />
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 text-xs font-semibold transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20 active:scale-95 flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Salvar Contato</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
