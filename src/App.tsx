
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import GameDetails from "./pages/GameDetails";
import Proxies from "./pages/Proxies";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
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
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground">
          <div className="max-w-7xl mx-auto py-4">
            <BrowserRouter>
              <NavBar />
              <main className="mt-6">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/games" element={<Games />} />
                  <Route path="/games/:id" element={<GameDetails />} />
                  <Route path="/proxies" element={<Proxies />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </BrowserRouter>
          </div>
          {/* Add persistent chat widget */}
          <div className="fixed bottom-4 right-4 z-50">
            <div id="arsturn-widget" className="w-96 h-[600px] rounded-lg shadow-xl bg-white" />
          </div>
        </div>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
