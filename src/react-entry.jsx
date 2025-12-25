// src/react-entry.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import FullscreenTool from './FullscreenTool.jsx'; 
import CustomScreen from './CustomScreen.jsx'; 
import ColorPalette from './ColorPalette.jsx'; 


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

// Find the container element
const custom = document.getElementById('customscreen-tool-container');

// If the container exists, render the React component
if (custom) {
  const root = ReactDOM.createRoot(custom);
  root.render(
    <React.StrictMode>
      <CustomScreen />
    </React.StrictMode>
  );
}

// Find the container element
const colorpalette = document.getElementById('colorpalette');

// If the container exists, render the React component
if (colorpalette) {
  const root = ReactDOM.createRoot(colorpalette);
  root.render(
    <React.StrictMode>
      <ColorPalette />
    </React.StrictMode>
  );
}
