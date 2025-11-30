import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Menu from './Menu';

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

  if (currentPage === 'menu') {
    return <Menu onBack={() => setCurrentPage('home')} />;
  }

  return <Home onNavigate={setCurrentPage} />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);