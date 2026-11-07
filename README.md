# Academia Movimento • Movimento Growth

Plataforma demonstrativa SaaS de **Inteligência Comercial, Captação, Recuperação de Matrículas e Reativação de Alunos** concebida sob medida para a **Academia Movimento** (Planaltina-DF • Mais de 30 anos de atuação • @ac.movimentopl).

---

> **Aviso de Transparência:**  
> Projeto demonstrativo desenvolvido por **Davi Anderson**. Esta apresentação é conceitual e não representa uma plataforma oficial da Academia Movimento. Todos os dados de alunos, telefones e métricas financeiras são estritamente fictícios para fins de demonstração tecnológica.

---

## 🚀 Tecnologias Utilizadas

- **React 19** + **Vite 8**: Arquitetura moderna, componentização limpa e inicialização ultrarrápida.
- **Tailwind CSS v4** + `@tailwindcss/vite`: Design esportivo, premium, paleta escura (grafite/slate) com realces vibrantes em verde-esmeralda/limão (`#10b981`), azul atlético e detalhes em laranja/coral alinhados ao emblema da Academia Movimento.
- **Lucide React**: Ícones consistentes e profissionais.
- **Chart.js** + **react-chartjs-2**: Gráficos analíticos interativos (evolução de interessados, canais de captação, taxa de presença e recuperação de matrículas).
- **Canvas Confetti**: Micro-interações e feedback visual de conversão e reativação.
- **LocalStorage API**: Persistência no navegador de contatos, alterações de status, réguas de automação e agendamentos.

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm (versão 9 ou superior)

### Passo a Passo

1. **Instalar as dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar no navegador:**
   Abra a URL indicada no terminal (geralmente [http://localhost:5173/](http://localhost:5173/) ou [http://localhost:5174/](http://localhost:5174/)).

4. **Gerar a versão de produção (opcional):**
   ```bash
   npm run build
   npm run preview
   ```

---

## 📦 Estrutura dos Ambientes

1. **Landing Page Comercial:**
   - Hero com proposta de valor focada em conversão e permanência de alunos.
   - Seção *Oportunidades que não podem ser perdidas* (abordagem construtiva de mercado).
   - Seção *Como funciona* (4 etapas: Captação, Acompanhamento, Recuperação e Conversão).
   - Seção *Recursos da plataforma* com cards interativos.
   - Vitrine dos planos da Academia Movimento (Musculação, Natação Infantil/Adulto, Hidroginástica, Combo e Anual VIP).
   - Seção com fotografias esportivas de alta resolução e credenciamento dos 30 anos de referência em Planaltina.
   - Botão direto para alternar instantaneamente para o Dashboard.

2. **Dashboard Movimento Growth:**
   - **Visão Geral:** 6 indicadores-chave (KPIs) fictícios e 4 gráficos dinâmicos.
   - **Gestão de Interessados:** Tabela com busca em tempo real, filtros por modalidade e status, alteração dinâmica e cadastro de novos contatos.
   - **Aulas Experimentais:** Agendamentos, confirmações, controle de faltas (*no-show*) e gatilho de acompanhamento.
   - **Matrículas:** Acompanhamento de contratos fechados e simulação de links de pagamento via WhatsApp.
   - **Recuperação de Interessados:** Gestão de contatos inativos com o simulador de mensagem pelo WhatsApp com o texto solicitado:
     > *"Olá! Tudo bem? Você demonstrou interesse em conhecer nossos planos e gostaríamos de saber se ainda podemos ajudar. Nossa equipe está à disposição para tirar suas dúvidas!"*
   - **Reativação de Ex-Alunos:** Segmentação por meses de ausência (60 a 180 dias) e disparo simulado de campanhas de retorno.
   - **Campanhas:** Ações promocionais sazonais (Verão, Desafio 30 Dias, Retorno sem Matrícula).
   - **Conversas:** Interface integrada em tempo real no estilo WhatsApp Web com histórico, status de envio e tags de automação.
   - **Relatórios Comerciais:** Análise de funil, taxas de conversão e comparecimento em experimentais.
   - **Automações:** Configuração de intervalos, gatilhos, mensagens e conformidade com a LGPD (opt-out).
   - **Configurações:** Perfil da unidade Planaltina-DF e status simulado da conexão com a API oficial do WhatsApp.
