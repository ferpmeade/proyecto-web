import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Noticias from './components/Noticias';
import Contador from './components/Contador';
import Tabla from './components/Tabla';
import Estadio from './components/Estadio';
import Palmares from './components/Palmares';

import imagenprincipal from './assets/estadio.avif';
import './App.css';

function App() {
  const fechaPartido = new Date('2025-09-20T08:30:00');

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        {/* Página principal */}
        <Route 
          path="/" 
          element={
            <>
              <div className="imagen-principal" style={{ backgroundImage: `url(${imagenprincipal})` }}>
                <h1 className='titulo-principal'>REAL MADRID</h1>
                <h5 className='subtitulo-principal'>Próximo partido</h5>
                <Contador fechaObjetivo={fechaPartido} />
              </div>
              <Noticias />
              <Tabla />
            </>
          } 
        />


        {/* Página de tabla */}
        <Route path="/tabla" element={<Tabla />} />
        {/* pagina de estado */}
        <Route path="/estadio" element={<Estadio />} />
        {/* pagina de palmares */}
        <Route path="/palmares" element={<Palmares />} />
      </Routes>
    </div>
  );
}

export default App;