import React from 'react';
import Navbar from '../components/Navbar';
import Noticias from '../components/Noticias';
import Contador from '../components/Contador';
import Tabla from '../components/Tabla';
import Estadio from '../components/Estadio';
import Palmares from '../components/Palmares';

// import imagenprincipal from './assets/estadio.avif';
import '../app/globals.css';

const fechaPartido = new Date('2025-09-20T08:30:00');

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className="imagen-principal"
        style={{ backgroundImage: `url("/assets/estadio.avif")` }}
      >
        <h1 className='titulo-principal'>REAL MADRID</h1>
        <h5 className='subtitulo-principal'>Próximo partido</h5>
        <Contador fechaObjetivo={fechaPartido} />
      </div>
      <Noticias />
      <Tabla />
      <Estadio />
    </>
  );
}

