import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Suppress benign WebSocket closing errors in iframe sandbox environment
window.addEventListener('unhandledrejection', (event) => {
  const reason = event.reason;
  if (
    reason === 'WebSocket closed without opened.' ||
    (typeof reason === 'string' && reason.includes('WebSocket')) ||
    (reason && typeof reason === 'object' && 'message' in reason && String(reason.message).includes('WebSocket'))
  ) {
    event.preventDefault();
    event.stopPropagation();
  }
});

window.addEventListener('error', (event) => {
  if (
    event.message &&
    (event.message.includes('WebSocket') || event.message.includes('vite'))
  ) {
    event.preventDefault();
    event.stopPropagation();
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

