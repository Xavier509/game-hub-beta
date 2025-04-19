
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Bot, Send } from 'lucide-react';

const MindStudioAI = () => {
  const [apiKey, setApiKey] = useState('');
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter your MindStudio AI API key",
        variant: "destructive",
      });
      return;
    }

    if (!prompt.trim()) {
      toast({
        title: "Prompt Required",
        description: "Please enter a prompt",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('https://api.mindstudio.ai/v1/generation/text-completion', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt,
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from MindStudio AI');
      }

      const data = await response.json();
      setResponse(data.choices[0].text);
      toast({
        title: "Success",
        description: "Got response from MindStudio AI",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response from MindStudio AI. Please check your API key and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="bg-gray-800/50 border-purple-500/20 p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="password"
              placeholder="Enter your MindStudio AI API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="bg-gray-700/50 text-white placeholder-gray-400"
            />
            <p className="text-xs text-gray-400 mt-1">
              Your API key will not be stored permanently
            </p>
          </div>
          
          <div className="space-y-2">
            <Textarea
              placeholder="Enter your prompt..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[100px] bg-gray-700/50 text-white placeholder-gray-400"
            />
            <Button 
              type="submit" 
              className="w-full bg-purple-600 hover:bg-purple-700"
              disabled={isLoading}
            >
              {isLoading ? (
                <Bot className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              {isLoading ? 'Processing...' : 'Send'}
            </Button>
          </div>
        </form>

        {response && (
          <div className="mt-6 p-4 bg-gray-700/50 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Response:</h3>
            <p className="text-gray-200 whitespace-pre-wrap">{response}</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default MindStudioAI;
