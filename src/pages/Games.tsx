
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const GAMES = [
  {
    id: 1,
    title: 'Cyber Assault',
    description: 'Fast-paced cyberpunk shooter',
    image: '/lovable-uploads/55adda84-142c-4579-bc82-d9d479615eae.png',
    category: 'action'
  },
  {
    id: 2,
    title: 'Space Explorer',
    description: 'Explore the vast universe',
    image: '/lovable-uploads/c77b7a21-7d50-4bad-84a3-5bb864abdc1b.png',
    category: 'adventure'
  },
  {
    id: 3,
    title: 'Medieval Quest',
    description: 'Epic fantasy adventure',
    image: '/lovable-uploads/86e173c1-437e-4e59-b4b1-015d91266e34.png',
    category: 'adventure'
  },
  {
    id: 4,
    title: 'Racing Evolution',
    description: 'High-speed racing simulation',
    image: '/lovable-uploads/90fe6f8a-88e0-4846-b923-a353273ae95b.png',
    category: 'racing'
  }
];

const Games = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState('All Games');

  // Update search when URL param changes
  useEffect(() => {
    const searchFromUrl = searchParams.get('search');
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
    }
  }, [searchParams]);

  const filteredGames = GAMES.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Games' || 
                           game.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <Input
          type="text"
          placeholder="Search games..."
          className="max-w-md bg-gray-800/50 text-white placeholder-gray-400 border-gray-700"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select 
          className="bg-gray-800 text-white px-4 py-2 rounded-lg"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>All Games</option>
          <option>Action</option>
          <option>Adventure</option>
          <option>Racing</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredGames.map((game) => (
          <Card 
            key={game.id} 
            className="bg-gray-800/50 border-purple-500/20 overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => navigate(`/games/${game.id}`)}
          >
            <img 
              src={game.image} 
              alt={game.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
              <p className="text-gray-400 mb-2">{game.description}</p>
              <span className="text-purple-400 text-sm">{game.category}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Games;
