// src/react-entry.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import FullscreenTool from './FullscreenTool.jsx'; 
import FullscreenTool from './CustomScreen.jsx'; 


// Find the container element
const container = document.getElementById('fullscreen-tool-container');

// If the container exists, render the React component
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <FullscreenTool />
    </React.StrictMode>
  );
}

