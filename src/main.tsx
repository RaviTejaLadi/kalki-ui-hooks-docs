import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from './components/theme/ThemeProvider.tsx';
import { ToastContainer, ToastProvider } from 'kalki-ui-toast';

createRoot(document.getElementById('root')!).render(
  <ToastProvider>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
      <ToastContainer position="top-center" showClose={false} />
    </ThemeProvider>
  </ToastProvider>
);
