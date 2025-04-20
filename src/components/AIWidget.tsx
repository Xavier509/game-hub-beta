
import React from 'react';
import { MessageSquare, Minimize2, Maximize2 } from 'lucide-react';
import { useState } from 'react';

const AIWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${isExpanded ? 'w-96 h-[600px]' : 'w-14 h-14'} transition-all duration-300 ease-in-out`}>
      <div className="bg-purple-600 text-white rounded-lg shadow-lg w-full h-full flex flex-col overflow-hidden">
        {isExpanded ? (
          <>
            <div className="p-4 flex items-center justify-between bg-purple-700">
              <span className="flex items-center gap-2">
                <MessageSquare size={20} />
                AI Assistant
              </span>
              <button
                onClick={() => setIsExpanded(false)}
                className="hover:bg-purple-800 p-1 rounded"
              >
                <Minimize2 size={20} />
              </button>
            </div>
            <div className="flex-1 bg-gray-900 p-4">
              <div className="text-sm text-gray-300">
                AI chat interface will be integrated here
              </div>
            </div>
          </>
        ) : (
          <button
            onClick={() => setIsExpanded(true)}
            className="w-full h-full flex items-center justify-center hover:bg-purple-700 transition-colors"
          >
            <Maximize2 size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default AIWidget;
