// src/App.js

import React from 'react';
import './App.css';
import UserSearch from './UserSearch';  // Importamos el componente UserSearch

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserSearch />  {/* Usamos el componente dentro de la aplicación */}
      </header>
    </div>
  );
}

export default App;
