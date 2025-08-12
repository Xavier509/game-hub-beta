
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const GAMES = [
  {
    id: 1,
    title: 'Minecraft',
    description: 'Build, explore, and survive in infinite worlds',
    image: '/src/assets/minecraft-logo.png',
    category: 'adventure',
    url: 'https://svaaps.github.io/eaglercrafthtml/'
  },
  {
    id: 2,
    title: 'Basket Random',
    description: 'Fun basketball shooting game with random elements',
    image: 'https://play-lh.googleusercontent.com/gP8T5Z1O-ngxIloiwcBZzrzyLPYDp0R_1BDNKUDZboIRPVImeyWI8-7aExvB9gAGNKc',
    category: 'sports',
    url: 'https://basketrandom.github.io/'
  },
  {
    id: 3,
    title: 'Retro Bowl',
    description: 'Classic American football game with retro graphics',
    image: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/ee9ca3764ef4289a48a1ebf457ef605441ed1f35a0f2eb12707a70d609e53686.png',
    category: 'sports',
    url: 'https://unblocked1889.github.io/retro-bowl-unblocked/'
  },
  {
    id: 4,
    title: 'Drift Hunters',
    description: 'Master the art of drifting in this realistic racing game',
    image: 'https://imgs.crazygames.com/games/drift-hunters/cover-1656950639575.png?metadata=none&quality=40&width=1200&height=630&fit=crop',
    category: 'racing',
    url: 'https://gold20099.github.io/Drift-Hunters/'
  },
  {
    id: 5,
    title: 'Escape Road',
    description: 'Navigate through challenging roads and obstacles',
    image: 'https://1games.io/data/image/game/escape-road/1024-x-768.png',
    category: 'racing',
    url: 'https://hackz00.github.io/EscapeRoad/'
  },
  {
    id: 6,
    title: 'Soccer Random',
    description: 'Unpredictable and fun soccer gameplay',
    image: '/lovable-uploads/86e173c1-437e-4e59-b4b1-015d91266e34.png',
    category: 'sports',
    url: 'https://ubg98.github.io/SoccerRandom/'
  },
  {
    id: 7,
    title: 'Impossible Quiz',
    description: 'Test your wit with impossible questions',
    image: '/lovable-uploads/c77b7a21-7d50-4bad-84a3-5bb864abdc1b.png',
    category: 'puzzle',
    url: 'https://theimpossiblequizunblocked.github.io/'
  },
  {
    id: 8,
    title: 'Cookie Clicker',
    description: 'The addictive cookie-clicking phenomenon',
    image: '/lovable-uploads/86e173c1-437e-4e59-b4b1-015d91266e34.png',
    category: 'idle',
    url: 'https://ozh.github.io/cookieclicker/'
  },
  {
    id: 9,
    title: 'Drive Mad',
    description: 'Crazy driving challenges and stunts',
    image: 'https://www.freegames.com/cdn-cgi/image/quality=78,format=auto/thumb/300x300/Drive-Mad.jpg',
    category: 'racing',
    url: 'https://bluepotato102.github.io/drive-mad/'
  },
  {
    id: 10,
    title: 'Slope',
    description: 'Fast-paced 3D ball rolling game',
    image: '/src/assets/slope-1.jpg',
    category: 'action',
    url: 'https://cgolden15.github.io/Slope-Game/'
  },
  {
    id: 11,
    title: 'Polytrack',
    description: 'Minimalist racing on polygon tracks',
    image: '/lovable-uploads/90fe6f8a-88e0-4846-b923-a353273ae95b.png',
    category: 'racing',
    url: 'https://joe-the-chicken.github.io/polytrack/'
  },
  {
    id: 12,
    title: 'Subway Surfers',
    description: 'Endless running adventure through subway tracks',
    image: '/src/assets/Seasonal-Characters-Subway-Surfers.jpg',
    category: 'action',
    url: 'https://eeshadutta.github.io/Subway-Surfers/'
  },
  {
    id: 13,
    title: 'Bubble Shooter',
    description: 'Classic bubble popping puzzle game',
    image: '/src/assets/bubble-shooter.jpg',
    category: 'puzzle',
    url: 'https://kakorcal.github.io/bubble-shooter/'
  },
  {
    id: 14,
    title: '2048',
    description: 'Slide tiles to reach the 2048 number',
    image: '/src/assets/2048-logo.png',
    category: 'puzzle',
    url: 'https://gabrielecirulli.github.io/2048/'
  },
  {
    id: 15,
    title: 'Happy Wheels',
    description: 'Physics-based obstacle course game',
    image: '/src/assets/happy-wheels.png',
    category: 'action',
    url: 'https://happywheelsunblocked.github.io/HappyWheelsUnblocked.github.io/'
  },
  {
    id: 16,
    title: 'Geometry Dash',
    description: 'Rhythm-based platformer with geometric challenges',
    image: '/src/assets/geometry-dash.png',
    category: 'action',
    url: 'https://open-gd.github.io/OpenGD/'
  },
  {
    id: 17,
    title: "Friday Night Funkin'",
    description: 'Rhythm game with funky beats and rap battles',
    image: '/src/assets/fnf-logo.png',
    category: 'music',
    url: 'https://funkincrew.github.io/Funkin/'
  },
  {
    id: 18,
    title: 'Tetris',
    description: 'Classic falling blocks puzzle game',
    image: '/src/assets/tetris-logo.png',
    category: 'puzzle',
    url: 'https://cztomczak.github.io/jstetris/'
  },
  {
    id: 19,
    title: 'Super Mario Flash',
    description: 'Classic Mario platformer adventure',
    image: '/src/assets/mario-flash.png',
    category: 'adventure',
    url: 'https://softendo.github.io/Super-Mario-Flash/'
  },
  {
    id: 20,
    title: 'Pac Man',
    description: 'Classic arcade maze game',
    image: '/src/assets/pacman-game-card.png',
    category: 'arcade',
    url: 'https://vilbeyli.github.io/Pacman/'
  },
  {
    id: 21,
    title: 'Basketball Stars',
    description: 'Two-player basketball showdown',
    image: '/src/assets/basketball-stars.png',
    category: 'sports',
    url: 'https://basketballstarsunblocked.github.io/BasketballStarsUnblocked.github.io/'
  },
  {
    id: 22,
    title: 'Flappy Bird',
    description: 'Navigate through pipes in this challenging arcade game',
    image: '/src/assets/flappy-bird.png',
    category: 'arcade',
    url: 'https://ellisonleao.github.io/clumsy-bird/'
  },
  {
    id: 23,
    title: 'Moto X3M Winter',
    description: 'Extreme motorcycle stunts in winter conditions',
    image: '/src/assets/moto-x3m-winter.png',
    category: 'racing',
    url: 'https://broplsss.github.io/Moto-X3M-Winter/'
  },
  {
    id: 24,
    title: 'Stickman Hook',
    description: 'Swing through levels as a stickman',
    image: '/src/assets/stickman-hook.png',
    category: 'action',
    url: 'https://gpar2023.github.io/Stickman-Hook/'
  },
  {
    id: 25,
    title: 'Helix Jump',
    description: 'Bounce down the spiral tower',
    image: '/src/assets/helix-jump.png',
    category: 'arcade',
    url: 'https://almiraolcer.github.io/Helix-Jump-By-Almi/'
  },
  {
    id: 26,
    title: 'Dino Run',
    description: 'Help the T-Rex jump over obstacles',
    image: '/src/assets/dino-run.png',
    category: 'arcade',
    url: 'https://wayou.github.io/t-rex-runner/'
  },
  {
    id: 27,
    title: 'Rooftop Snipers',
    description: 'Two-player sniper battles on rooftops',
    image: '/src/assets/rooftop-snipers.png',
    category: 'action',
    url: 'https://susorodni.github.io/rooftopsnipers/'
  },
  {
    id: 28,
    title: 'Escape Road 2',
    description: 'Continue the high-speed chase adventure',
    image: '/src/assets/escape-road-2-game.png',
    category: 'racing',
    url: 'https://escaperoad2online.github.io/escaperoad2online.github.io/'
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
          <option>Music</option>
          <option>Arcade</option>
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
