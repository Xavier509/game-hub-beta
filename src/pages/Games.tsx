
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
  },
  {
    id: 5,
    title: 'Basket Random',
    description: 'Fun basketball shooting game with random elements',
    image: '/lovable-uploads/86e173c1-437e-4e59-b4b1-015d91266e34.png',
    category: 'sports',
    url: 'https://basketrandom.github.io/'
  },
  {
    id: 6,
    title: 'Retro Bowl',
    description: 'Classic American football game with retro graphics',
    image: '/lovable-uploads/55adda84-142c-4579-bc82-d9d479615eae.png',
    category: 'sports',
    url: 'https://unblocked1889.github.io/retro-bowl-unblocked/'
  },
  {
    id: 7,
    title: 'Drift Hunters',
    description: 'Master the art of drifting in this realistic racing game',
    image: '/lovable-uploads/90fe6f8a-88e0-4846-b923-a353273ae95b.png',
    category: 'racing',
    url: 'https://ad-freegames.github.io/drift-hunters/'
  },
  {
    id: 8,
    title: 'Escape Road',
    description: 'Navigate through challenging roads and obstacles',
    image: '/lovable-uploads/90fe6f8a-88e0-4846-b923-a353273ae95b.png',
    category: 'racing',
    url: 'https://escaperoad.world.site/'
  },
  {
    id: 9,
    title: 'Soccer Random',
    description: 'Unpredictable and fun soccer gameplay',
    image: '/lovable-uploads/86e173c1-437e-4e59-b4b1-015d91266e34.png',
    category: 'sports',
    url: 'https://ubg98.github.io/SoccerRandom/'
  },
  {
    id: 10,
    title: 'Impossible Quiz',
    description: 'Test your wit with impossible questions',
    image: '/lovable-uploads/c77b7a21-7d50-4bad-84a3-5bb864abdc1b.png',
    category: 'puzzle',
    url: 'https://theimpossiblequizunblocked.github.io/'
  },
  {
    id: 11,
    title: 'Cookie Clicker',
    description: 'The addictive cookie-clicking phenomenon',
    image: '/lovable-uploads/86e173c1-437e-4e59-b4b1-015d91266e34.png',
    category: 'idle',
    url: 'https://ozh.github.io/cookieclicker/'
  },
  {
    id: 12,
    title: 'Drive Mad',
    description: 'Crazy driving challenges and stunts',
    image: 'https://www.freegames.com/cdn-cgi/image/quality=78,format=auto/thumb/300x300/Drive-Mad.jpg',
    category: 'racing',
    url: 'https://bluepotato102.github.io/drive-mad/'
  },
  {
    id: 13,
    title: 'Slope',
    description: 'Fast-paced 3D ball rolling game',
    image: '/lovable-uploads/90fe6f8a-88e0-4846-b923-a353273ae95b.png',
    category: 'action',
    url: 'https://cgolden15.github.io/Slope-Game/'
  },
  {
    id: 14,
    title: 'Polytrack',
    description: 'Minimalist racing on polygon tracks',
    image: '/lovable-uploads/90fe6f8a-88e0-4846-b923-a353273ae95b.png',
    category: 'racing',
    url: 'https://joe-the-chicken.github.io/polytrack/'
  }
];

const Games = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState('All Games');

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
          <option>Sports</option>
          <option>Puzzle</option>
          <option>Idle</option>
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
