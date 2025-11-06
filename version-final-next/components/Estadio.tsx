'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import '../styles/Estadio.css';

const Estadio = () => {
  const [esta, setEsta] = useState<'nuevo' | 'antiguo'>('nuevo');
  const [vista, setVista] = useState<'adentro' | 'afuera'>('adentro');

  const getImagen = () => {
    if (esta === 'nuevo' && vista === 'adentro') return '/assets/nuevoadentro.webp';
    if (esta === 'nuevo' && vista === 'afuera') return '/assets/nuevo.jpg';
    if (esta === 'antiguo' && vista === 'adentro') return '/assets/adentroanti.jpg';
    return '/assets/antiguo.jpg';
  };

  return (
    <div className="estadio-container">
      <div className="tabs">
        <button className={esta === 'nuevo' ? 'active' : ''} onClick={() => setEsta('nuevo')}>Nuevo</button>
        <button className={esta === 'antiguo' ? 'active' : ''} onClick={() => setEsta('antiguo')}>Antiguo</button>
      </div>

      <div className="tabs">
        <button className={vista === 'adentro' ? 'active' : ''} onClick={() => setVista('adentro')}>Adentro</button>
        <button className={vista === 'afuera' ? 'active' : ''} onClick={() => setVista('afuera')}>Afuera</button>
      </div>

      <div className="imagen-estadio" style={{ position: 'relative', width: '800px', height: '400px', margin: '20px auto' }}>
        <Image
          src={getImagen()}
          alt="Estadio"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default Estadio;
