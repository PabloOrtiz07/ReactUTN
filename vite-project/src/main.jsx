// Importar las bibliotecas necesarias
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importar el componente App
import './index.css'; // Importar estilos si es necesario

// Crear el root y renderizar el componente App en el elemento root del DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
