
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
  return (
    <div className="p-4">
      <div className="flex justify-end mb-6">
        <select className="bg-gray-800 text-white px-4 py-2 rounded-lg">
          <option>All Games</option>
          <option>Action</option>
          <option>Adventure</option>
          <option>Racing</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {GAMES.map((game) => (
          <Card key={game.id} className="bg-gray-800/50 border-purple-500/20 overflow-hidden">
            <img 
              src={game.image} 
              alt={game.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
              <p className="text-gray-400 mb-2">{game.description}</p>
              <span className="text-purple-400 text-sm">{game.category}</span>
              <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                View Game
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Games;
