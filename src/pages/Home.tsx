import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Home = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      <section className="text-center mt-8">
        <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
          Welcome to the Future of Gaming
        </h1>
        <p className="text-xl md:text-2xl text-purple-400 font-light">
          Your gateway to endless entertainment
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <Card className="p-6 bg-gray-800/50 border-purple-500/20">
          <h2 className="font-playfair text-2xl font-bold mb-4 text-white">Featured Games</h2>
          <div className="space-y-4">
            {/* Featured games will be populated here */}
          </div>
        </Card>

        <Card className="p-6 bg-gray-800/50 border-purple-500/20">
          <h2 className="font-playfair text-2xl font-bold mb-4 text-white">Active Proxies</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-white">Interstellar</h3>
                <p className="text-sm text-gray-400">https://interstellarbynirbytes2.vercel.app/</p>
              </div>
              <Badge className="bg-green-500">Online</Badge>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-white">Shadow</h3>
                <p className="text-sm text-gray-400">https://butidontwanttacos.duia.us/</p>
              </div>
              <Badge className="bg-green-500">Online</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
