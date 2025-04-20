
import React, { useEffect } from 'react';
import { Card } from '@/components/ui/card';

declare global {
  interface Window {
    username: string;
    widgetColor: string;
    widgetBackgroundColor: string;
  }
}

const AIWidget = () => {
  useEffect(() => {
    // Configure Arsturn widget
    window.username = "bot-gamehub";
    window.widgetColor = "black";
    window.widgetBackgroundColor = "#ffffff";

    // Load Arsturn script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://www.arsturn.com/widget.js";
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (script && document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="bg-gray-800/50 border-purple-500/20 w-[350px] h-[500px]">
        {/* Arsturn widget will be injected here */}
      </Card>
    </div>
  );
};

export default AIWidget;
