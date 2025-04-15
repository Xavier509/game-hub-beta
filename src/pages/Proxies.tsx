
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PROXIES = [
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

const Proxies = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid gap-4">
        {PROXIES.map((proxy) => (
          <Card key={proxy.id} className="bg-gray-800/50 border-purple-500/20 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{proxy.name}</h3>
                <p className="text-gray-400">{proxy.url}</p>
              </div>
              <Badge 
                className={proxy.status === 'online' ? 'bg-green-500' : 'bg-red-500'}
              >
                {proxy.status}
              </Badge>
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              View Links
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Proxies;
