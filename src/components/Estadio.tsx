import React, { useState } from 'react';
import antiguoAfuera from '../assets/antiguo.jpg';
import antiguoAdentro from '../assets/adentroanti.jpg';
import nuevoAfuera from '../assets/nuevo.jpg';
import nuevoAdentro from '../assets/nuevoadentro.webp';
import './Estadio.css';

const Estadio = () => {
  const [esta, setesta] = useState<'nuevo' | 'antiguo'>('nuevo');
  const [vista, setVista] = useState<'adentro' | 'afuera'>('adentro');

  const getImagen = () => {
    if (esta === 'nuevo' && vista === 'adentro') return nuevoAdentro;
    if (esta === 'nuevo' && vista === 'afuera') return nuevoAfuera;
    if (esta === 'antiguo' && vista === 'adentro') return antiguoAdentro;
    return antiguoAfuera;
  };

  return (
    <div className="estadio-container"> 
      <div className="tabs">

        {/* Barra Nuevo/Antiguo */}
        <button 
          className={`barra-button ${esta === 'nuevo' ? 'active' : ''}`}
          onClick={() => setesta('nuevo')}> Nuevo
        </button>

        <button 
          className={`barra-button ${esta === 'antiguo' ? 'active' : ''}`}
          onClick={() => setesta('antiguo')}> Antiguo
        </button>

      </div>

      <div className="tabs" style={{ marginTop: '10px' }}>

        {/* Barra Adentro/Afuera */}
        <button 
          className={`barra-button ${vista === 'adentro' ? 'active' : ''}`}
          onClick={() => setVista('adentro')}> Adentro
        </button>

        <button 
          className={`barra-button ${vista === 'afuera' ? 'active' : ''}`}
          onClick={() => setVista('afuera')}> Afuera
        </button>

      </div>
      <div className="imagen-estadio">
        <img src={getImagen()} alt="Estadio" />
      </div>

    </div>
  );
};

export default Estadio;
