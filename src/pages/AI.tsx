
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

const AI = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hello! How can I assist you with gaming today?",
      timestamp: new Date().toLocaleTimeString(),
      isUser: false
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = {
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString(),
      isUser: true
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setInputMessage('');

    try {
      // Make request to Arsturn API
      const response = await fetch('https://www.arsturn.com/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'bot-gamehub',
          message: inputMessage
        })
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      
      // Add AI response
      const aiResponse: Message = {
        content: data.response || "I apologize, but I couldn't process that request. Could you try asking something else?",
        timestamp: new Date().toLocaleTimeString(),
        isUser: false
      };

      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response from AI",
      });
      
      // Add error message
      const errorResponse: Message = {
        content: "I apologize, but I'm having trouble connecting right now. Please try again later.",
        timestamp: new Date().toLocaleTimeString(),
        isUser: false
      };
      
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="bg-gray-800/50 border-purple-500/20 min-h-[600px] flex flex-col">
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
              disabled={isLoading}
            />
            <Button 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 p-2"
              size="icon"
              onClick={handleSendMessage}
              disabled={isLoading}
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
