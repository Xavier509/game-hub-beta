
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Gamepad2, Bot, Link as LinkIcon } from 'lucide-react';

const NavBar = () => {
  const location = useLocation();
  
  const getTabStyle = (path: string) => {
    const isActive = location.pathname === path;
    return `flex items-center gap-2 px-6 py-2 rounded-lg transition-all ${
      isActive 
        ? 'bg-purple-600 text-white' 
        : 'text-gray-300 hover:bg-gray-800'
    }`;
  };

  return (
    <nav className="flex flex-col items-center w-full gap-6">
      <div className="text-logo font-italic">
        <span className="text-purple-500">Game</span>
        <span className="text-white">Hub</span>
      </div>
      
      <div className="w-full max-w-2xl">
        <input
          type="text"
          placeholder="Search games, proxies..."
          className="w-full px-4 py-3 bg-gray-800/50 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex gap-2 p-1 bg-gray-800/30 rounded-lg">
        <Link to="/" className={getTabStyle('/')}>
          <Home size={20} /> Home
        </Link>
        <Link to="/games" className={getTabStyle('/games')}>
          <Gamepad2 size={20} /> Games
        </Link>
        <Link to="/ai" className={getTabStyle('/ai')}>
          <Bot size={20} /> AI
        </Link>
        <Link to="/proxies" className={getTabStyle('/proxies')}>
          <LinkIcon size={20} /> Proxies
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
