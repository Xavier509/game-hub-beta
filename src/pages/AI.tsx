//import React, { useEffect } from 'react';
//import { Card } from '@/components/ui/card';


//declare global {
//  interface Window {
//    username: string;
//    widgetColor: string;
//    widgetBackgroundColor: string;
//  }
//}

//const AI = () => {
//  useEffect(() => {
//    // Configure Arsturn widget
//    window.username = "bot-gamehub";
//    window.widgetColor = "black";
    window.widgetBackgroundColor = "#ffffff";

//    // Load Arsturn script
//    const script = document.createElement("script");
//    script.type = "text/javascript";
//    script.async = true;
//    script.src = "https://www.arsturn.com/widget.js";
//    document.head.appendChild(script);

//    return () => {
//      // Cleanup script when component unmounts
//      if (script && document.head.contains(script)) {
//        document.head.removeChild(script);
//      }
//    };
//  }, []);

//  return (
//    <div className="max-w-4xl mx-auto p-4">
//      <Card className="bg-gray-800/50 border-purple-500/20 min-h-[600px]">
//        {/* Arsturn widget will be injected here */}
//      </Card>
//    </div>
//  );
//};

//#export default AI;
