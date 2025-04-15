
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Send } from 'lucide-react';

const AI = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="bg-gray-800/50 border-purple-500/20 min-h-[600px] flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="bg-gray-700/50 rounded-lg p-4 max-w-[80%]">
            <p className="text-white">Hello! How can I assist you with gaming today?</p>
            <span className="text-sm text-gray-400 block mt-2">8:06:16 PM</span>
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-700">
          <div className="relative">
            <input
              type="text"
              placeholder="Ask about games, strategies, or get help..."
              className="w-full bg-gray-700/50 rounded-lg pr-12 pl-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Button 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 p-2"
              size="icon"
            >
              <Send size={20} />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AI;
