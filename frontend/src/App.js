
import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import PaginaPrincipal from './components/PaginaPrincipal';

function App() {
 
  return (
    <Routes>
    <Route path="/:valorUrl" element={<PaginaPrincipal />} />
    <Route path="/" element={<PaginaPrincipal />} /> {/* Rota inicial */}
  </Routes>
  );
}

export default App;
