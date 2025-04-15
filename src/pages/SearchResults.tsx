
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Gamepad2, Link as LinkIcon } from 'lucide-react';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // Temporary data - in a real app, this would come from an API
  const allGames = [
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

  const allProxies = [
    {
      id: 'alpha',
      name: 'GameProxy Alpha',
      url: 'https://proxy-alpha.gamehub.com',
      status: 'online'
    },
    {
      id: 'beta',
      name: 'GameProxy Beta',
      url: 'https://proxy-beta.gamehub.com',
      status: 'online'
    },
    {
      id: 'delta',
      name: 'GameProxy Delta',
      url: 'https://proxy-delta.gamehub.com',
      status: 'offline'
    }
  ];

  const filteredGames = allGames.filter(game => 
    game.title.toLowerCase().includes(query.toLowerCase()) ||
    game.description.toLowerCase().includes(query.toLowerCase()) ||
    game.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProxies = allProxies.filter(proxy => 
    proxy.name.toLowerCase().includes(query.toLowerCase()) ||
    proxy.url.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-white">
        Search Results for "{query}"
      </h1>

      {(filteredGames.length === 0 && filteredProxies.length === 0) && (
        <p className="text-gray-400">No results found for "{query}"</p>
      )}

      {filteredGames.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
            <Gamepad2 size={20} />
            Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGames.map(game => (
              <Link to={`/games/${game.id}`} key={game.id}>
                <Card className="bg-gray-800/50 border-purple-500/20 overflow-hidden cursor-pointer hover:bg-gray-800/70 transition-colors">
                  <img 
                    src={game.image} 
                    alt={game.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white">{game.title}</h3>
                    <p className="text-gray-400">{game.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

      {filteredProxies.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
            <LinkIcon size={20} />
            Proxies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProxies.map(proxy => (
              <a 
                href={proxy.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={proxy.id}
              >
                <Card className="bg-gray-800/50 border-purple-500/20 p-4 cursor-pointer hover:bg-gray-800/70 transition-colors">
                  <h3 className="text-lg font-bold text-white">{proxy.name}</h3>
                  <p className="text-gray-400">{proxy.url}</p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
