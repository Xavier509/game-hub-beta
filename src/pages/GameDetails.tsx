import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';

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
    image: '/lovable-uploads/90fe6f8a-88e0-4846-b923-a353273ae95b.png',
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

const GameDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
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
        {game.url ? (
          <iframe
            src={game.url}
            title={game.title}
            className="w-full h-[600px] border-0"
            allowFullScreen
          />
        ) : (
          <>
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
          </>
        )}
      </Card>
    </div>
  );
};

export default GameDetails;
