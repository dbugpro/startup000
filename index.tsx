import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Menu from './Menu';
import Admin from './Admin';
import Login from './Login';
import UserManagement from './UserManagement';
import Dashboard from './Dashboard';
import Analytics from './Analytics';
import Settings from './Settings';
import Profile from './Profile';

const Home = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-100 selection:bg-brand-500 selection:text-white">
      <div className="w-full max-w-lg px-4 text-center">
        <h1 className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
          repository
        </h1>
        <p className="mt-4 text-lg text-slate-400 font-medium tracking-wide">
          <span 
            onClick={() => onNavigate('menu')} 
            className="cursor-pointer hover:text-slate-200 transition-colors"
          >
            startup000
          </span>
        </p>
      </div>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('admin'); // Redirect to admin after login or back to menu? 'admin' seems appropriate
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('menu');
  };

  const navigateTo = (page: string) => {
    setCurrentPage(page);
  };

  const goBackToMenu = () => setCurrentPage('menu');

  // Router Logic
  switch (currentPage) {
    case 'menu':
      return (
        <Menu 
          onBack={() => setCurrentPage('home')} 
          onNavigate={navigateTo}
          isAuthenticated={isAuthenticated}
          onLogout={handleLogout}
        />
      );
    case 'admin':
      return (
        <Admin 
          onBack={goBackToMenu} 
          isAuthenticated={isAuthenticated} 
          onLogin={handleLogin}
        />
      );
    case 'login':
      return (
        <Login 
          onLogin={() => {
            setIsAuthenticated(true);
            setCurrentPage('menu');
          }} 
          onBack={goBackToMenu} 
        />
      );
    case 'users':
      return isAuthenticated ? <UserManagement onBack={goBackToMenu} /> : <Login onLogin={() => {setIsAuthenticated(true); setCurrentPage('users')}} onBack={goBackToMenu} />;
    case 'dashboard':
      return isAuthenticated ? <Dashboard onBack={goBackToMenu} /> : <Login onLogin={() => {setIsAuthenticated(true); setCurrentPage('dashboard')}} onBack={goBackToMenu} />;
    case 'analytics':
      return isAuthenticated ? <Analytics onBack={goBackToMenu} /> : <Login onLogin={() => {setIsAuthenticated(true); setCurrentPage('analytics')}} onBack={goBackToMenu} />;
    case 'settings':
      return <Settings onBack={goBackToMenu} />;
    case 'profile':
      return isAuthenticated ? <Profile onBack={goBackToMenu} /> : <Login onLogin={() => {setIsAuthenticated(true); setCurrentPage('profile')}} onBack={goBackToMenu} />;
    case 'home':
    default:
      return <Home onNavigate={navigateTo} />;
  }
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);