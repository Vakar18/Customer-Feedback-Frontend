import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.css"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="dark">
    <App />
    </div>
  </React.StrictMode>
);
