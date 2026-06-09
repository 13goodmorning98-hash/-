import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx?v=grainient-bg';
import './App.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
