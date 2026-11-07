import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function LeadEvolutionChart() {
  const data = {
    labels: ['Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov (Atual)'],
    datasets: [
      {
        label: 'Interessados Captados',
        data: [180, 215, 240, 290, 310, 328, 342],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.12)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#10b981',
        pointBorderColor: '#fff',
        pointHoverRadius: 6,
      },
      {
        label: 'Matrículas Realizadas',
        data: [58, 72, 85, 98, 110, 118, 124],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.08)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#fff',
        pointHoverRadius: 6,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#94a3b8',
          font: { family: 'Plus Jakarta Sans', size: 12 }
        }
      },
      tooltip: {
        backgroundColor: '#0f172a',
        borderColor: '#334155',
        borderWidth: 1,
        titleColor: '#fff',
        bodyColor: '#cbd5e1',
        padding: 10
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#64748b' }
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#64748b' }
      }
    }
  };

  return <Line data={data} options={options} />;
}

export function LeadOriginChart() {
  const data = {
    labels: ['Instagram @ac.movimentopl', 'WhatsApp Recepção', 'Indicação de Aluno', 'Balcão / Presencial', 'Google Meu Negócio'],
    datasets: [
      {
        data: [138, 86, 54, 40, 24],
        backgroundColor: [
          '#10b981', // emerald
          '#2563eb', // blue
          '#f97316', // orange
          '#8b5cf6', // purple
          '#06b6d4'  // cyan
        ],
        borderColor: '#0f172a',
        borderWidth: 3
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#94a3b8',
          font: { family: 'Plus Jakarta Sans', size: 11 },
          boxWidth: 12,
          padding: 14
        }
      },
      tooltip: {
        backgroundColor: '#0f172a',
        borderColor: '#334155',
        borderWidth: 1,
        titleColor: '#fff',
        bodyColor: '#cbd5e1'
      }
    },
    cutout: '70%'
  };

  return <Doughnut data={data} options={options} />;
}

export function RecoveryComparisonChart() {
  const data = {
    labels: ['Interessados sem Fechamento', 'Em Contato de Recuperação', 'Matrículas Recuperadas', 'Ex-Alunos Reativados'],
    datasets: [
      {
        label: 'Quantidade de Pessoas',
        data: [98, 76, 38, 29],
        backgroundColor: [
          'rgba(244, 63, 94, 0.7)',
          'rgba(234, 179, 8, 0.7)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(59, 130, 246, 0.8)'
        ],
        borderRadius: 8,
        borderWidth: 0
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#0f172a',
        borderColor: '#334155',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#94a3b8', font: { size: 11 } }
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#64748b' }
      }
    }
  };

  return <Bar data={data} options={options} />;
}

export function MonthlyEnrollmentChart() {
  const data = {
    labels: ['Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro (Projetado)'],
    datasets: [
      {
        label: 'Matrículas Orgânicas',
        data: [54, 61, 68, 79, 86],
        backgroundColor: '#3b82f6',
        borderRadius: 6
      },
      {
        label: 'Matrículas Recuperadas (Movimento Growth)',
        data: [18, 24, 27, 33, 38],
        backgroundColor: '#10b981',
        borderRadius: 6
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#94a3b8',
          font: { family: 'Plus Jakarta Sans', size: 12 }
        }
      },
      tooltip: {
        backgroundColor: '#0f172a',
        borderColor: '#334155',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: { color: '#94a3b8' }
      },
      y: {
        stacked: true,
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#64748b' }
      }
    }
  };

  return <Bar data={data} options={options} />;
}
