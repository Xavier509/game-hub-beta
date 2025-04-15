
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import GameDetails from "./pages/GameDetails";
import AI from "./pages/AI";
import Proxies from "./pages/Proxies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
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
                <Route path="/ai" element={<AI />} />
                <Route path="/proxies" element={<Proxies />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </BrowserRouter>
        </div>
      </div>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
