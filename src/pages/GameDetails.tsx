
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';

const GAMES = [
  {
    id: 1,
    title: 'Minecraft',
    description: 'Build, explore, and survive in infinite worlds. Create amazing structures, mine for resources, and embark on adventures in this iconic sandbox game.',
    image: '/src/assets/minecraft-logo.png',
    category: 'adventure',
    url: 'https://svaaps.github.io/eaglercrafthtml/'
  },
  {
    id: 2,
    title: 'Basket Random',
    description: 'Fun basketball shooting game with random elements and unpredictable physics that will keep you entertained for hours.',
    image: 'https://play-lh.googleusercontent.com/gP8T5Z1O-ngxIloiwcBZzrzyLPYDp0R_1BDNKUDZboIRPVImeyWI8-7aExvB9gAGNKc',
    category: 'sports',
    url: 'https://basketrandom.github.io/'
  },
  {
    id: 3,
    title: 'Retro Bowl',
    description: 'Classic American football game with retro graphics. Manage your team and lead them to championship glory in this nostalgic sports experience.',
    image: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/ee9ca3764ef4289a48a1ebf457ef605441ed1f35a0f2eb12707a70d609e53686.png',
    category: 'sports',
    url: 'https://unblocked1889.github.io/retro-bowl-unblocked/'
  },
  {
    id: 4,
    title: 'Drift Hunters',
    description: 'Master the art of drifting in this realistic racing game. Customize your car and perfect your drifting techniques on various tracks.',
    image: 'https://imgs.crazygames.com/games/drift-hunters/cover-1656950639575.png?metadata=none&quality=40&width=1200&height=630&fit=crop',
    category: 'racing',
    url: 'https://gold20099.github.io/Drift-Hunters/'
  },
  {
    id: 5,
    title: 'Escape Road',
    description: 'Navigate through challenging roads and obstacles while being chased by police. Use your driving skills to escape in this thrilling pursuit game.',
    image: 'https://1games.io/data/image/game/escape-road/1024-x-768.png',
    category: 'racing',
    url: 'https://hackz00.github.io/EscapeRoad/'
  },
  {
    id: 6,
    title: 'Soccer Random',
    description: 'Unpredictable and fun soccer gameplay with random physics and hilarious situations. Score goals in this wacky football game.',
    image: '/lovable-uploads/86e173c1-437e-4e59-b4b1-015d91266e34.png',
    category: 'sports',
    url: 'https://ubg98.github.io/SoccerRandom/'
  },
  {
    id: 7,
    title: 'Impossible Quiz',
    description: 'Test your wit with impossible questions and mind-bending puzzles. Think outside the box to solve these tricky challenges.',
    image: '/lovable-uploads/c77b7a21-7d50-4bad-84a3-5bb864abdc1b.png',
    category: 'puzzle',
    url: 'https://theimpossiblequizunblocked.github.io/'
  },
  {
    id: 8,
    title: 'Cookie Clicker',
    description: 'The addictive cookie-clicking phenomenon that started the idle game genre. Build your cookie empire and unlock powerful upgrades.',
    image: '/lovable-uploads/86e173c1-437e-4e59-b4b1-015d91266e34.png',
    category: 'idle',
    url: 'https://ozh.github.io/cookieclicker/'
  },
  {
    id: 9,
    title: 'Drive Mad',
    description: 'Crazy driving challenges and stunts that will test your precision and patience. Navigate through impossible tracks with physics-based gameplay.',
    image: 'https://www.freegames.com/cdn-cgi/image/quality=78,format=auto/thumb/300x300/Drive-Mad.jpg',
    category: 'racing',
    url: 'https://bluepotato102.github.io/drive-mad/'
  },
  {
    id: 10,
    title: 'Slope',
    description: 'Fast-paced 3D ball rolling game where you control a ball down a never-ending slope. Avoid obstacles and see how far you can go.',
    image: '/src/assets/slope-1.jpg',
    category: 'action',
    url: 'https://cgolden15.github.io/Slope-Game/'
  },
  {
    id: 11,
    title: 'Polytrack',
    description: 'Minimalist racing on polygon tracks with stunning visual effects. Experience clean, geometric racing in this unique motorsport game.',
    image: '/lovable-uploads/90fe6f8a-88e0-4846-b923-a353273ae95b.png',
    category: 'racing',
    url: 'https://joe-the-chicken.github.io/polytrack/'
  },
  {
    id: 12,
    title: 'Subway Surfers',
    description: 'Endless running adventure through subway tracks. Dodge trains, collect coins, and surf through colorful urban environments.',
    image: '/src/assets/Seasonal-Characters-Subway-Surfers.jpg',
    category: 'action',
    url: 'https://eeshadutta.github.io/Subway-Surfers/'
  },
  {
    id: 13,
    title: 'Bubble Shooter',
    description: 'Classic bubble popping puzzle game. Match colors and clear the board in this timeless arcade experience.',
    image: '/src/assets/bubble-shooter.jpg',
    category: 'puzzle',
    url: 'https://kakorcal.github.io/bubble-shooter/'
  },
  {
    id: 14,
    title: '2048',
    description: 'Slide tiles to reach the 2048 number in this addictive mathematical puzzle game. Combine numbers strategically to achieve the highest score.',
    image: '/src/assets/2048-logo.png',
    category: 'puzzle',
    url: 'https://gabrielecirulli.github.io/2048/'
  },
  {
    id: 15,
    title: 'Happy Wheels',
    description: 'Physics-based obstacle course game with dark humor and creative level design. Navigate through dangerous courses with various characters.',
    image: '/src/assets/happy-wheels.png',
    category: 'action',
    url: 'https://happywheelsunblocked.github.io/HappyWheelsUnblocked.github.io/'
  },
  {
    id: 16,
    title: 'Geometry Dash',
    description: 'Rhythm-based platformer with geometric challenges. Jump and fly through danger in this music-driven action game.',
    image: '/src/assets/geometry-dash.png',
    category: 'action',
    url: 'https://open-gd.github.io/OpenGD/'
  },
  {
    id: 17,
    title: "Friday Night Funkin'",
    description: 'Rhythm game with funky beats and rap battles. Test your musical skills in this stylish and challenging music game.',
    image: '/src/assets/fnf-logo.png',
    category: 'music',
    url: 'https://funkincrew.github.io/Funkin/'
  },
  {
    id: 18,
    title: 'Tetris',
    description: 'Classic falling blocks puzzle game that defined a generation. Arrange tetrominoes to clear lines in this timeless arcade classic.',
    image: '/src/assets/tetris-logo.png',
    category: 'puzzle',
    url: 'https://cztomczak.github.io/jstetris/'
  },
  {
    id: 19,
    title: 'Super Mario Flash',
    description: 'Classic Mario platformer adventure with all your favorite power-ups and enemies. Jump through levels and save Princess Peach.',
    image: '/src/assets/mario-flash.png',
    category: 'adventure',
    url: 'https://softendo.github.io/Super-Mario-Flash/'
  },
  {
    id: 20,
    title: 'Pac Man',
    description: 'Classic arcade maze game where you eat dots while avoiding ghosts. Experience the original arcade legend that started it all.',
    image: '/src/assets/pacman-game-card.png',
    category: 'arcade',
    url: 'https://vilbeyli.github.io/Pacman/'
  },
  {
    id: 21,
    title: 'Basketball Stars',
    description: 'Two-player basketball showdown with spectacular dunks and three-point shots. Compete against friends in this exciting sports game.',
    image: '/src/assets/basketball-stars.png',
    category: 'sports',
    url: 'https://basketballstarsunblocked.github.io/BasketballStarsUnblocked.github.io/'
  },
  {
    id: 22,
    title: 'Flappy Bird',
    description: 'Navigate through pipes in this challenging arcade game that became a global phenomenon. Simple controls, endless challenge.',
    image: '/src/assets/flappy-bird.png',
    category: 'arcade',
    url: 'https://ellisonleao.github.io/clumsy-bird/'
  },
  {
    id: 23,
    title: 'Moto X3M Winter',
    description: 'Extreme motorcycle stunts in winter conditions. Perform death-defying tricks while racing through snowy obstacle courses.',
    image: '/src/assets/moto-x3m-winter.png',
    category: 'racing',
    url: 'https://broplsss.github.io/Moto-X3M-Winter/'
  },
  {
    id: 24,
    title: 'Stickman Hook',
    description: 'Swing through levels as a stickman using physics-based rope mechanics. Master the art of momentum in this addictive platformer.',
    image: '/src/assets/stickman-hook.png',
    category: 'action',
    url: 'https://gpar2023.github.io/Stickman-Hook/'
  },
  {
    id: 25,
    title: 'Helix Jump',
    description: 'Bounce down the spiral tower while avoiding colored obstacles. Time your moves perfectly in this satisfying arcade game.',
    image: '/src/assets/helix-jump.png',
    category: 'arcade',
    url: 'https://almiraolcer.github.io/Helix-Jump-By-Almi/'
  },
  {
    id: 26,
    title: 'Dino Run',
    description: 'Help the T-Rex jump over obstacles in this simple but addictive endless runner inspired by Chrome browser game.',
    image: '/src/assets/dino-run.png',
    category: 'arcade',
    url: 'https://wayou.github.io/t-rex-runner/'
  },
  {
    id: 27,
    title: 'Rooftop Snipers',
    description: 'Two-player sniper battles on rooftops. Knock your opponent off the building in this physics-based shooting game.',
    image: '/src/assets/rooftop-snipers.png',
    category: 'action',
    url: 'https://susorodni.github.io/rooftopsnipers/'
  },
  {
    id: 28,
    title: 'Escape Road 2',
    description: 'Continue the high-speed chase adventure with new vehicles and challenging escape routes. Outrun the police in this thrilling sequel.',
    image: '/src/assets/escape-road-2-game.png',
    category: 'racing',
    url: 'https://escaperoad2online.github.io/escaperoad2online.github.io/'
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
