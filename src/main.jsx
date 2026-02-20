import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// https://api.openweathermap.org/data/2.5/weather?lat=37.56&lon=127.978&appid=8188c95c9f11f4077d77b8e960401105

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
