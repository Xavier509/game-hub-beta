import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface Message {
  content: string;
  timestamp: string;
  isUser: boolean;
}

declare global {
  interface Window {
    MindStudioSettings: any;
  }
}

const AI = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hello! How can I assist you with gaming today?",
      timestamp: new Date().toLocaleTimeString(),
      isUser: false
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // Configure MindStudio
    window.MindStudioSettings = {
      publicToken: "1b9f6ea7-56d8-43a6-aec3-f0301242af22",
      appId: "07277833-06f8-43da-bcf7-6fa7ced95d50",
      userId: "default-user",
      targetId: "mindstudio-frame",
      debugging: true,
      options: {
        autoFocus: false,
        launchVariables: {
          myVariable: "My Value"
        }
      }
    };

    // Load MindStudio script
    const script = document.createElement('script');
    script.src = "https://api.youai.ai/v1/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString(),
      isUser: true
    };

    // Simulate AI response
    const aiResponse: Message = {
      content: "I understand your question about gaming. While I'm a demo AI, I'd be happy to help you find information about games, strategies, or provide general assistance!",
      timestamp: new Date().toLocaleTimeString(),
      isUser: false
    };

    setMessages(prev => [...prev, userMessage, aiResponse]);
    setInputMessage('');
    
    toast({
      title: "Message sent",
      description: "Your message has been received!",
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      {/* MindStudio AI Frame */}
      <Card className="w-full overflow-hidden">
        <iframe
          id="mindstudio-frame"
          referrerPolicy="origin"
          className="w-full h-[600px] border border-purple-500/20 rounded-lg outline-none"
          title="AI Embed"
          frameBorder="0"
        />
      </Card>

      {/* Chat Interface */}
      <Card className="bg-gray-800/50 border-purple-500/20 min-h-[400px] flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div 
              key={index}
              className={`${
                message.isUser ? 'ml-auto bg-purple-600/50' : 'bg-gray-700/50'
              } rounded-lg p-4 max-w-[80%] mb-4`}
            >
              <p className="text-white">{message.content}</p>
              <span className="text-sm text-gray-400 block mt-2">{message.timestamp}</span>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-gray-700">
          <div className="relative">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about games, strategies, or get help..."
              className="w-full bg-gray-700/50 rounded-lg pr-12 pl-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Button 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 p-2"
              size="icon"
              onClick={handleSendMessage}
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
