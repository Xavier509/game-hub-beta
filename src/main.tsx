
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Initialize Arsturn widget configuration
window.username = "bot-gamehub";
window.widgetColor = "black";
window.widgetBackgroundColor = "#ffffff";

// Load Arsturn script
const script = document.createElement("script");
script.type = "text/javascript";
script.async = true;
script.src = "https://www.arsturn.com/widget.js";
document.head.appendChild(script);

createRoot(document.getElementById("root")!).render(<App />);
