
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';

const GameDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the game from our games data
  const game = GAMES.find(g => g.id === Number(id));
  
  if (!game) {
    return <div className="p-4 text-center text-white">Game not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Button 
        variant="ghost" 
        className="mb-6 text-white"
        onClick={() => navigate('/games')}
      >
        <ChevronLeft className="mr-2" size={20} />
        Back to Games
      </Button>
      
      <Card className="bg-gray-800/50 border-purple-500/20 overflow-hidden">
        <img 
          src={game.image} 
          alt={game.title} 
          className="w-full h-[300px] object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-white mb-4">{game.title}</h1>
          <p className="text-gray-400 mb-4">{game.description}</p>
          <span className="inline-block px-3 py-1 rounded-full bg-purple-600 text-white text-sm">
            {game.category}
          </span>
        </div>
      </Card>
    </div>
  );
};

// Game data
const GAMES = [
  {
    id: 1,
    title: 'Cyber Assault',
    description: 'Fast-paced cyberpunk shooter with stunning graphics and intense multiplayer battles. Dive into a futuristic world where you can customize your character and compete against players worldwide.',
    image: '/lovable-uploads/55adda84-142c-4579-bc82-d9d479615eae.png',
    category: 'action'
  },
  {
    id: 2,
    title: 'Space Explorer',
    description: 'Embark on an epic journey through the cosmos. Discover new planets, trade with alien species, and build your own space empire in this expansive space simulation game.',
    image: '/lovable-uploads/c77b7a21-7d50-4bad-84a3-5bb864abdc1b.png',
    category: 'adventure'
  },
  {
    id: 3,
    title: 'Medieval Quest',
    description: 'Experience a rich fantasy world filled with magic, dragons, and epic quests. Choose your class, master powerful spells, and become a legendary hero.',
    image: '/lovable-uploads/86e173c1-437e-4e59-b4b1-015d91266e34.png',
    category: 'adventure'
  },
  {
    id: 4,
    title: 'Racing Evolution',
    description: 'Feel the adrenaline rush in this next-gen racing simulator. Race on realistic tracks, customize your vehicles, and compete in global championships.',
    image: '/lovable-uploads/90fe6f8a-88e0-4846-b923-a353273ae95b.png',
    category: 'racing'
  }
];

export default GameDetails;
