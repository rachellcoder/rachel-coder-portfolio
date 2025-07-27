import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root");
if (!root) {
  console.error("Root element not found");
} else {
  console.log("App is starting...");
  createRoot(root).render(<App />);
}
