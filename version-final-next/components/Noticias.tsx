// import React, { useState } from 'react';
import '../styles/Noticias.css';
import Image from 'next/image';
import React from 'react';


const datanoticias = [
  {
    id: 1,
    title: "Lesion de arnold",
    summary: "El jugador ingles se lesiona, estara afuera por unas semanas se pierde anfield",
    image: "/assets/lesion.avif",
  },
  {
    id: 2,
    title: "CHAMPIONS",
    summary: "Regresa la champions league primer enfrentamiento contra el marsella",
    image: "/assets/lesion.avif",
  },
  {
    id: 3,
    title: "Remontada",
    summary: "2-1 el madrid remonta para la victoria en el estreno de champions",
    image: "/assets/champions.webp",
  },
  {
    id: 4,
    title: "Se preparan para el proximo juego",
    summary: "El equipo entrena despues de la victoria en casa para recibir al espanyol ",
    image: "/assets/victoria.webp",
  },
  {
    id: 5,
    title: "50 goles",
    summary: "Kilian Mbappe llega a los 50 goles con el madrid en 64 partidos",
    image: "/assets/KM.jpg",
  },
  {
    id: 6,
    title: "Superara a Cristiano en goles de champions",
    summary: "El frances lleva 57 goles, el portugues 140 lo lograra?",
    image: "/assets/cr7.avif",
  },
];

const Noticias = () => {
  return (
    <section className='cuadros-noticias'>
      <div className='noticias-grid-container'>
        <div className='noticias-grid'>
          {datanoticias.map((noticia) => (
            <div className="noticia-item" key={noticia.id}>
              <Image 
                src={noticia.image} 
                alt={noticia.title}
                width={100}   // ancho en px
                height={200}  // alto en px 
              />
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