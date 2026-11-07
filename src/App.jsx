import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

export default function App() {
  // Current view: 'landing' or 'dashboard'
  const [currentView, setCurrentView] = useState(() => {
    const saved = localStorage.getItem('movimento_active_view');
    return saved || 'landing';
  });

  const handleOpenDashboard = () => {
    setCurrentView('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReturnToLanding = () => {
    setCurrentView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    localStorage.setItem('movimento_active_view', currentView);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 selection:bg-emerald-500 selection:text-black">
      {currentView === 'landing' ? (
        <LandingPage onOpenDashboard={handleOpenDashboard} />
      ) : (
        <Dashboard onReturnToLanding={handleReturnToLanding} />
      )}
    </div>
  );
}
