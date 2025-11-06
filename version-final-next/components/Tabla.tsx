'use client';
import React, { useState } from 'react'; 
// import logorealMadrid from '../assets/logos/realmadrid.png';
// import logoBarcelona from '../assets/logos/barcelona.png';
// import logoalaves from '../assets/logos/alaves.png';
// import logoathletic from '../assets/logos/athletic.png';
// import logoatetico from '../assets/logos/atlmadrid.png';
// import logobetis from '../assets/logos/betis.png';
// import logocelta from '../assets/logos/celta.png';
// import logoelche from '../assets/logos/elche.png';
// import logoespanyol from '../assets/logos/alaves.png';
// import logogetafe from '../assets/logos/getafe.png';
// import logosevilla from '../assets/logos/sevilla.png';
// import logoosasuna from '../assets/logos/osasuna.png';
// import logorayo from '../assets/logos/rayovallecano.png';
// import logooveido from '../assets/logos/realoviedo.png';
// import logorealsociedad from '../assets/logos/realsociedad.png';
// import logovalencia from '../assets/logos/valencia.png';
// import logomallorca from '../assets/logos/mallorca.png';
// import logogirona from '../assets/logos/girona.png';
// import logolevante from '../assets/logos/levante.png';
// import logovillareal from '../assets/logos/villarreal.png'
// champions

// import logoajax from '../assets/logos/ajax.png'
// import logoarsenal from '../assets/logos/arsenal.png';
// import logoatalanta from '../assets/logos/atalanta.png'
// import logobayerleverkusen from '../assets/logos/bayerleverkusen.png';
// import logobayern from '../assets/logos/bayernmunchen.png'
// import logobenfica from '../assets/logos/benfica.png';
// import logobodoglimt from '../assets/logos/bodo_glimt.png';
// import logoborussiadortmund from '../assets/logos/borussiadortmund.png';
// import logochelsea from '../assets/logos/chelsea.png';
// import logoclubbrujas from '../assets/logos/clubbrujas.png';
// import logofrankfurt from '../assets/logos/eintrachtfrankfurt.png'
// import logofccopenhagen from '../assets/logos/fc_copenhague.png'
// import logogalatasaray from '../assets/logos/galatasaray.png';
// import logointer from '../assets/logos/inter.png';
// import logojuventus from '../assets/logos/juventus.png';
// import logokairatalmaty from '../assets/logos/kairat_almaty.png';
// import logoliverpool from '../assets/logos/liverpool.png';
// import logomancity from '../assets/logos/manchestercity.png';
// import logomonaco from '../assets/logos/monaco.png';
// import logonapoli from '../assets/logos/napoli.png';
// import logonewcastle from '../assets/logos/newcastle.png';
// import logomarsella from '../assets/logos/olimpiquemarsella.png'
// import logoolympiacos from '../assets/logos/olympiacos.png';
// import logopafos from '../assets/logos/pafos.png';
// import logopsg from '../assets/logos/psg.png';
// import logopsv from '../assets/logos/psv.png';
// import logoqarabag from '../assets/logos/qarabag.png';
// import logoslaviapraga from '../assets/logos/slavia_praga.png';
// import logosporting from '../assets/logos/sporting.png';
// import logotottenham from '../assets/logos/tottenham.png';
// import logounionsaintgilloise from '../assets/logos/union_saint_gilloise.png';


import '../styles/Tabla.css';
import Image from 'next/image';



const Tabla = () => {
  const [activeTab, setActiveTab] = useState('total');

  const dataTotal = [
        { position: 1, team: 'REAL MADRID', logo: '/logos/realmadrid.png', points: 12, played: 4, won: 4, drawn: 0, lost: 0, goalsFor: 8, goalsAgainst: 2, goalDifference: 6},
        { position: 2, team: 'FC BARCELONA', logo: '/logos/barcelona.png', points: 10, played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10},
        { position: 3, team: 'RCD Espanyol', logo: '/logos/espanyol.png', points: 9, played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10 },
        { position: 4, team: 'Getafe', logo: '/logos/getafe.png', points: 9, played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10 },
        { position: 5, team: 'Athletic', logo: '/logos/athletic.png', points: 9, played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10 },
        { position: 6, team: 'Villareal', logo: '/logos/villarreal.png', points: 7, played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10 },
        { position: 7, team: 'alaves', logo: '/logos/alaves.png', points: 7, played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10 },
        { position: 8, team: 'Elche', logo: '/logos/elche.png', points: 6, played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10 },
        { position: 9, team: 'osasuna', logo: '/logos/osasuna.png', points: 6, played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10 },
        { position: 10, team: 'Betis', logo: '/logos/betis.png', points: 6, played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10 },
        { position: 11, team: 'Atletico Madrid', logo: '/logos/atlmadrid.png', points: 5, played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10 },
        { position: 12, team: 'Sevilla', logo: '/logos/sevilla.png', points: 4, played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10 },
        { position: 13, team: 'Rayo Vallecano', logo: '/logos/rayovallecano.png', points: 4, played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10 },
        { position: 14, team: 'Celta de Vigo', logo: '/logos/celta.png', points: 4, played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10 },
        { position: 15, team: 'Valencia', logo: '/logos/valencia.png', points: 4, played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10 },
        { position: 16, team: 'Real Oviedo', logo: '/logos/realoviedo.png', points: 3, played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10 },
        { position: 17, team: 'Real Sociedad', logo: '/logos/realsociedad.png', points: 2, played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10 },
        { position: 18, team: 'Levante', logo: '/logos/levante.png', points: 1, played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10 },
        { position: 19, team: 'RCD Mallorca', logo: '/logos/mallorca.png', points: 1, played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10 },
        { position: 20, team: 'Girona', logo: '/logos/girona.png', points: 1, played: 4, won: 3, drawn: 1, lost: 0, goalsFor: 13, goalsAgainst: 3, goalDifference: 10 },
  ];
const dataChampions = [
  { position: 1, team: 'Ajax', logo: '/logos/ajax.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 2, team: 'Arsenal', logo: '/logos/arsenal.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 3, team: 'Atalanta', logo: '/logos/atalanta.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 4, team: 'Athletic Club', logo: '/logos/athletic.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 5, team: 'Atlético de Madrid', logo: '/logos/atlmadrid.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 6, team: 'Barcelona', logo: '/logos/barcelona.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 7, team: 'Bayer Leverkusen', logo: '/logos/bayerleverkusen.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 8, team: 'Bayern Munich', logo: '/logos/bayernmunchen.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 9, team: 'Benfica', logo: '/logos/benfica.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 10, team: 'Bodo/Glimt', logo: '/logos/bodo_glimt.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 11, team: 'Borussia Dortmund', logo: '/logos/borussiadortmund.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 12, team: 'Chelsea', logo: '/logos/chelsea.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 13, team: 'Club Brujas', logo: '/logos/clubbrujas.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 14, team: 'Eintracht Frankfurt', logo: '/logos/eintrachtfrankfurt.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 15, team: 'FC Copenhagen', logo: '/logos/fc_copenhague.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 16, team: 'Galatasaray', logo: '/logos/galatasaray.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 17, team: 'Inter', logo: '/logos/inter.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 18, team: 'Juventus', logo: '/logos/juventus.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 19, team: 'Kairat Almaty', logo: '/logos/kairat_almaty.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 20, team: 'Liverpool', logo: '/logos/liverpool.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 21, team: 'Manchester City', logo: '/logos/manchestercity.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 22, team: 'Monaco', logo: '/logos/monaco.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 23, team: 'Napoli', logo: '/logos/napoli.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 24, team: 'Newcastle', logo: '/logos/newcastle.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 25, team: 'Olympique Marseille', logo: '/logos/olimpiquemarsella.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 26, team: 'Olympiacos', logo: '/logos/olympiacos.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 27, team: 'Pafos', logo: '/logos/pafos.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 28, team: 'PSG', logo: '/logos/psg.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 29, team: 'PSV', logo: '/logos/psv.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 30, team: 'Qarabag', logo: '/logos/qarabag.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 31, team: 'Real Madrid', logo: '/logos/realmadrid.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 32, team: 'Slavia Praga', logo: '/logos/slavia_praga.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 33, team: 'Sporting', logo: '/logos/sporting.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 34, team: 'Tottenham', logo: '/logos/tottenham.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 35, team: 'Union Saint Gilloise', logo: '/logos/union_saint_gilloise.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  { position: 36, team: 'Villarreal', logo: '/logos/villarreal.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const datamostrada =activeTab === 'total' ? dataTotal : dataChampions;
  return (
    <div className="table-container">
      <div className="tabs">
        <button 
          className={`barra-button ${activeTab === 'total' ? 'active' : ''}`}
          onClick={() => handleTabClick('total')}>Partidos totales
        </button>

        <button 
          className={`barra-button ${activeTab === 'champions' ? 'active' : ''}`}
          onClick={() => handleTabClick('champions')}>champions
        </button>
        {/* por si queiro otro  */}
        {/* <button 
          className={`tab-button ${activeTab === '' ? 'active' : ''}`}
          onClick={() => handleTabClick('away')}>
          
        </button> */}
      </div>

      <table className="info-table">
        <thead>
          <tr>
            <th>POSICIÓN</th>
            <th>EQUIPO</th>
            <th>PUNTOS</th>
            <th>PJ</th>
            <th>PG</th>
            <th>PE</th>
            <th>PP</th>
            <th>GF</th>
            <th>GC</th>
            <th>DG</th>
          </tr>
        </thead>
        <tbody>
          {datamostrada.map((item, index) => (
            <tr key={index}>
              <td>{item.position}</td>
              <td>
                <Image src={item.logo} alt={`${item.team} logo`} className="team-logo" width={20} height={20} />
                {item.team}
              </td>
              <td>{item.points}</td>
              <td>{item.played}</td>
              <td>{item.won}</td>
              <td>{item.drawn}</td>
              <td>{item.lost}</td>
              <td>{item.goalsFor}</td>
              <td>{item.goalsAgainst}</td>
              <td>{item.goalDifference}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;