import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './app/app';

// start rendering the app
const root = createRoot(document.getElementById('content-root'));
root.render(<StrictMode><App /></StrictMode>)

