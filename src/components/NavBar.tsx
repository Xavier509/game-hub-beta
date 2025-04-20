
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Gamepad2, Link as LinkIcon, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      
      toast({
        title: "Searching all sections",
        description: `Showing results for "${searchQuery}"`,
      });
    }
  };

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
      <div className="text-logo font-playfair font-bold italic">
        <span className="text-purple-500">Game</span>
        <span className="text-white">Hub</span>
      </div>
      
      <form onSubmit={handleSearch} className="w-full max-w-2xl relative">
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search games, proxies..."
          className="w-full px-4 py-3 bg-gray-800/50 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
        >
          <Search size={20} />
        </button>
      </form>

      <div className="flex gap-2 p-1 bg-gray-800/30 rounded-lg">
        <Link to="/" className={getTabStyle('/')}>
          <Home size={20} /> Home
        </Link>
        <Link to="/games" className={getTabStyle('/games')}>
          <Gamepad2 size={20} /> Games
        </Link>
        <Link to="/proxies" className={getTabStyle('/proxies')}>
          <LinkIcon size={20} /> Proxies
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

