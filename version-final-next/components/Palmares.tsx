import React from 'react';
import '../styles/Palmares.css';
import Image from 'next/image';

// import champions from '../assets/championstrofeo.png';
// import laliga from '../assets/trofeoliga.png';
// import copadelrey from '../assets/copareyy.png';
// import champions24 from '../assets/campeonchampions.jpg';
// import mundialclubes from '../assets/mundialdeclubes.png';
// import supercopaeuro from '../assets/supercopa.png';
// import eurocopa from '../assets/eurocopa.png';
// import Copaliga from '../assets/CopaLiga.webp';
// import pequeña from '../assets/PequeñaCopaMundo.webp';
// import latinas from '../assets/latinas.png';
// import CopaIberoamericana from '../assets/CopaIberoamericana.webp';
// import regionales from '../assets/regionaless.png';
// import manco from '../assets/Trofeos-Mancomunados_220Thumb.jpeg';
// import siglo from '../assets/mejor-club-del-siglo-xx-1.webp';
// import ligacampeon from '../assets/ligacampeon.jpg';
// import coparey from '../assets/copareycelebracion.webp';
// import supercopaimg from '../assets/supercopacele.jpg';
// import mundialcele from '../assets/mundialclubes.jpg';
// import supercopaeuroimg from '../assets/supercopa.webp';
// import eufa from '../assets/tumblr_norou9zHVF1t52aheo1_1280.jpg';
// import copadeligaimg from '../assets/copadelaliga.webp';
// import peq from '../assets/pequeña.webp';
// import latinaimgagen from '../assets/copalitinaa.jpg';
// import ibero from '../assets/inter.webp';
// import regionimg from '../assets/regionalesimg.jpg';
// import manconul from '../assets/mancomu.webp';



const dataTrofeos = [
  { id: 1, title: "Champions League", image: "/assets/championstrofeo.png", number: "15", years: "1956, 1957, 1958, 1959, 1960, 1966, 1998, 2000, 2002, 2014, 2016, 2017, 2018, 2022", rightImage: "/assets/campeonchampions.jpg" },
  { id: 2, title: "La Liga", image: "/assets/trofeoliga.png", number: "36", years: "1931-32, 1932-33, 1953-54, 1954-55, 1956-57, 1957-58, 1960-61, 1961-62, 1962-63, 1963-64, 1964-65, 1966-67, 1967-68, 1968-69, 1971-72, 1974-75, 1975-76, 1977-78, 1978-79, 1979-80, 1985-86, 1986-87, 1987-88, 1988-89, 1989-90, 1994-95, 1996-97, 2000-01, 2002-03, 2006-07, 2007-08, 2011-12, 2016-17, 2019-20, 2021-22, 2023-24", rightImage: "/assets/ligacampeon.jpg" },
  { id: 3, title: "Copa del Rey", image: "/assets/copareyy.png", number: "20", years: "1904-05, 1905-06, 1906-07, 1907-08, 1916-17, 1933-34, 1935-36, 1945-46, 1946-47, 1961-62, 1969-70, 1973-74, 1974-75, 1979-80, 1981-82, 1988-89, 1992-93, 2010-11, 2013-14, 2022-23", rightImage: "/assets/copareycelebracion.webp" },
  { id: 4, title: "Supercopa de España", image: "/assets/copareyy.png", number: "13", years: "1988, 1989, 1990, 1993, 1997, 2001, 2003, 2008, 2012, 2017, 2020, 2022, 2024", rightImage: "/assets/supercopacele.jpg" },
  { id: 5, title: "Mundial de Clubes", image: "/assets/mundialdeclubes.png", number: "13", years: "2014, 2016, 2017, 2018, 2024", rightImage: "/assets/mundialclubes.jpg" },
  { id: 6, title: "Supercopa de Europa", image: "/assets/supercopa.png", number: "6", years: "2002, 2014, 2016, 2017, 2022, 2024", rightImage: "/assets/supercopa.webp" },
  { id: 7, title: "Copas de la UEFA", image: "/assets/eurocopa.png", number: "2", years: "1984-85, 1985-86", rightImage: "/assets/tumblr_norou9zHVF1t52aheo1_1280.jpg" },
  { id: 8, title: "Copa de la Liga", image: "/assets/CopaLiga.webp", number: "1", years: "1984-85", rightImage: "/assets/copadelaliga.webp" },
  { id: 9, title: "Pequeñas Copas del Mundo", image: "/assets/PequeñaCopaMundo.webp", number: "2", years: "1952-1956", rightImage: "/assets/pequeña.webp" },
  { id: 10, title: "Copas Latinas", image: "/assets/latinas.png", number: "2", years: "1955-1957", rightImage: "/assets/copalitinaa.jpg" },
  { id: 11, title: "Copa Iberoamericana", image: "/assets/CopaIberoamericana.webp", number: "1", years: "1994", rightImage: "/assets/inter.webp" },
  { id: 12, title: "Campeonatos Regionales", image: "/assets/regionaless.png", number: "18", years: "1903-04, 1904-05, 1905-06, 1906-07, 1907-08, 1912-13, 1915-16, 1916-17, 1917-18, 1919-20, 1921-22, 1922-23, 1923-24, 1925-26, 1926-27, 1928-29, 1929-30, 1930-31", rightImage: "/assets/regionalesimg.jpg" },
  { id: 13, title: "Trofeos Mancomunados", image: "/assets/Trofeos-Mancomunados_220Thumb.jpeg", number: "5", years: "1931-32, 1932-33, 1933-34, 1934-35, 1935-36", rightImage: "/assets/mancomu.webp" },
  { id: 14, title: "Club del siglo", image: "/assets/mejor-club-del-siglo-xx-1.webp", number: "1", years: "11 diciembre 2000", rightImage: "/assets/mejor-club-del-siglo-xx-1.webp" },
];

const Palmares = () => {
  return (
    <section className="palmares-seccion">
      <h2>Palmarés</h2>
      <div className="trofeos-lista">
        {dataTrofeos.map((trofeo) => (
          <div className="trofeo-item" key={trofeo.id}>
            <div className="trofeo-columna-izq" style={{ position: 'relative', width: '300px', height: '300px' }}>
              <Image src={trofeo.image} alt={trofeo.title} fill style={{ objectFit: 'contain' }} />
            </div>
            <div className="trofeo-numero">
              <h1>{trofeo.number}</h1>
              <h3>{trofeo.title}</h3>
            </div>
            <p className="trofeo-años">{trofeo.years}</p>
            <div className="imagen-lado-der" style={{ position: 'relative', width: '250px', height: '300px' }}>
              <Image src={trofeo.rightImage} alt={`${trofeo.title} detalle`} fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Palmares;

