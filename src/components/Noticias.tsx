import React, { useState } from 'react';
import './Noticias.css';
import noticia1Imagen from '../assets/entrenamiento noticia 1.webp';
import noticia2Imagen from '../assets/champions.webp';
import lesionar from '../assets/lesion.avif';
import victoriaa from '../assets/victoria.webp';
import KM from '../assets/KM.jpg';
import cris from '../assets/cr7.avif';

const datanoticias = [
  {
    id: 1,
    title: "Lesion de arnold",
    summary: "El jugador ingles se lesiona, estara afuera por unas semanas se pierde anfield",
    image: lesionar,
  },
  {
    id: 2,
    title: "CHAMPIONS",
    summary: "Regresa la champions league primer enfrentamiento contra el marsella",
    image: noticia2Imagen,
  },
  {
    id: 3,
    title: "Remontada",
    summary: "2-1 el madrid remonta para la victoria en el estreno de champions",
    image: victoriaa,
  },
  {
    id: 4,
    title: "Se preparan para el proximo juego",
    summary: "El equipo entrena despues de la victoria en casa para recibir al espanyol ",
    image: noticia1Imagen,
  },
  {
    id: 5,
    title: "50 goles",
    summary: "Kilian Mbappe llega a los 50 goles con el madrid en 64 partidos",
    image: KM,
  },
  {
    id: 6,
    title: "Superara a Cristiano en goles de champions",
    summary: "El frances lleva 57 goles, el portugues 140 lo lograra?",
    image: cris,
  },
];

const Noticias = () => {
  return (
    <section className='cuadros-noticias'>
      <div className='noticias-grid-container'>
        <div className='noticias-grid'>
          {datanoticias.map((noticia) => (
            <div className="noticia-item" key={noticia.id}>
              <img src={noticia.image} alt={noticia.title} />
              <h3>{noticia.title}</h3>
              <p>{noticia.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Noticias;