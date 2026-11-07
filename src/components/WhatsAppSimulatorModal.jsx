import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCheck, 
  Phone, 
  Video, 
  MoreVertical, 
  Smile, 
  Paperclip, 
  Sparkles, 
  Bot, 
  ShieldCheck, 
  User, 
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WhatsAppSimulatorModal({ lead, onClose, onStatusChange }) {
  if (!lead) return null;

  const defaultMessage = "Olá! Tudo bem? Você demonstrou interesse em conhecer nossos planos e gostaríamos de saber se ainda podemos ajudar. Nossa equipe está à disposição para tirar suas dúvidas!";

  const [inputMessage, setInputMessage] = useState(defaultMessage);
  const [messages, setMessages] = useState([
    {
      id: "w1",
      sender: "lead",
      text: `Olá! Gostaria de saber mais informações sobre os horários e valores para ${lead.interest || 'planos de treino'}.`,
      time: "Ontem 15:30",
      status: "read"
    },
    {
      id: "w2",
      sender: "staff",
      text: `Olá, ${lead.name.split(' ')[0]}! Tudo bem? Temos planos a partir de R$ 99,90/mês e modalidades completas com piscina aquecida e musculação. Você prefere treinar pela manhã ou noite?`,
      time: "Ontem 15:35",
      status: "read"
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [sentRecovery, setSentRecovery] = useState(false);

  const handleSendMessage = (textToSend) => {
    const messageText = textToSend || inputMessage;
    if (!messageText.trim()) return;

    const newMessage = {
      id: "msg-" + Date.now(),
      sender: "bot",
      text: messageText,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      status: "delivered",
      isAutomated: true
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage("");
    setSentRecovery(true);

    // Simulate lead reading and typing back after 1.4s
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const leadReply = {
        id: "reply-" + Date.now(),
        sender: "lead",
        text: `Oi! Desculpe a correria do trabalho ontem. Tenho muito interesse sim! Como faço para agendar minha aula experimental gratuita amanhã?`,
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        status: "read"
      };
      setMessages(prev => [...prev, leadReply]);

      if (onStatusChange) {
        onStatusChange(lead.id, "Aula experimental agendada");
      }

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    }, 1500);
  };

  const handleUseOfficialTemplate = () => {
    setInputMessage(defaultMessage);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#0e1626] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[650px] max-h-[90vh]">
        
        {/* WhatsApp Header */}
        <div className="bg-[#172338] px-4 py-3 flex items-center justify-between border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow">
              {lead.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#172338]"></span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span id="whatsapp-modal-title" className="font-bold text-white text-sm">{lead.name}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {lead.status}
                </span>
              </div>
              <div className="text-[11px] text-slate-400 flex items-center gap-2">
                <span>{lead.phone}</span>
                <span>•</span>
                <span className="text-emerald-400 font-medium">{lead.plan || lead.interest}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-300">
            <button 
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Fechar simulador de conversa"
              title="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Informative alert banner */}
        <div className="bg-emerald-950/40 border-b border-emerald-500/20 px-4 py-2 flex items-center justify-between text-xs text-emerald-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Simulador de Mensagens WhatsApp • Instância Academia Movimento</span>
          </div>
          <span className="text-[10px] text-slate-400">Consentimento LGPD Ativo</span>
        </div>

        {/* Chat message body with WhatsApp background pattern feel */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0a0f1d] relative">
          
          <div className="flex justify-center my-2">
            <span className="text-[11px] text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full border border-white/5">
              Simulação de conversa oficial vinculada à recepção
            </span>
          </div>

          {messages.map((m) => {
            const isMe = m.sender === 'bot' || m.sender === 'staff';
            return (
              <div key={m.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-md ${
                    isMe 
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-br-none' 
                      : 'bg-slate-800/90 text-slate-100 rounded-bl-none border border-white/5'
                  }`}
                >
                  {m.isAutomated && (
                    <div className="flex items-center gap-1 text-[10px] text-emerald-200 font-mono mb-1 uppercase tracking-wider">
                      <Bot className="w-3 h-3" /> Régua Movimento Growth
                    </div>
                  )}
                  <p className="leading-relaxed whitespace-pre-wrap">{m.text}</p>
                  <div className="mt-1 flex items-center justify-end gap-1 text-[10px] opacity-75">
                    <span>{m.time}</span>
                    {isMe && <CheckCheck className="w-3.5 h-3.5 text-sky-200" />}
                  </div>
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-slate-800/90 rounded-2xl px-4 py-2 text-xs text-slate-400 rounded-bl-none flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                <span>{lead.name.split(' ')[0]} está digitando...</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick template selector bar */}
        <div className="bg-[#121c2e] p-2.5 border-t border-white/10 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-[11px] text-slate-400 font-medium whitespace-nowrap flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-emerald-400" /> Modelos Rápidos:
          </span>
          <button
            onClick={handleUseOfficialTemplate}
            className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-emerald-300 font-medium text-xs whitespace-nowrap border border-white/5 transition-colors cursor-pointer"
          >
            Acompanhamento Padrão
          </button>
          <button
            onClick={() => setInputMessage(`Oi ${lead.name.split(' ')[0]}! Notamos seu interesse no plano ${lead.plan || 'da Academia Movimento'}. Conseguimos isentar sua matrícula se você fechar esta semana. Gostaria de aproveitar?`)}
            className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs whitespace-nowrap border border-white/5 transition-colors cursor-pointer"
          >
            Oferta Isenção de Matrícula
          </button>
          <button
            onClick={() => setInputMessage(`Olá ${lead.name.split(' ')[0]}, tudo bem? Temos horários abertos para sua aula experimental na piscina semiolímpica aquecida. Vamos agendar para amanhã?`)}
            className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs whitespace-nowrap border border-white/5 transition-colors cursor-pointer"
          >
            Convite Aula de Natação
          </button>
        </div>

        {/* Message Input Box */}
        <div className="bg-[#172338] p-3 border-t border-white/10 flex items-end gap-2 flex-shrink-0">
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder="Digite sua mensagem de acompanhamento..."
            aria-label="Mensagem de acompanhamento"
            rows={2}
            className="flex-1 bg-slate-900/90 text-white rounded-xl px-3.5 py-2 text-sm border border-white/10 focus:outline-none focus:border-emerald-400 resize-none"
          />

          <button
            onClick={() => handleSendMessage()}
            disabled={!inputMessage.trim()}
            className="p-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold transition-all shadow-lg shadow-emerald-500/20 active:scale-95 cursor-pointer flex-shrink-0"
            aria-label="Enviar mensagem simulada"
            title="Enviar mensagem simulada"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

        {/* Footer info note */}
        <div className="bg-[#0b101c] px-4 py-1.5 text-center text-[10px] text-slate-500 border-t border-white/5">
          Ambiente de simulação segura local • Não dispara mensagens reais no WhatsApp do destinatário.
        </div>

      </div>
    </div>
  );
}
