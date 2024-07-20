import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Index.css';
import { App } from './App';

import './libs/i18n/i18n'
import {ThemeProvider} from './contexts/ThemeContext';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found. Failed to mount React app.");
}
