import React, { useState } from 'react'; 
import logorealMadrid from '../logos/realmadrid.png';
import logoBarcelona from '../logos/barcelona.png';
import logoalaves from '../logos/alaves.png';
import logoathletic from '../logos/athletic.png';
import logoatetico from '../logos/atlmadrid.png';
import logobetis from '../logos/betis.png';
import logocelta from '../logos/celta.png';
import logoelche from '../logos/elche.png';
import logoespanyol from '../logos/alaves.png';
import logogetafe from '../logos/getafe.png';
import logosevilla from '../logos/sevilla.png';
import logoosasuna from '../logos/osasuna.png';
import logorayo from '../logos/rayovallecano.png';
import logooveido from '../logos/realoviedo.png';
import logorealsociedad from '../logos/realsociedad.png';
import logovalencia from '../logos/valencia.png';
import logomallorca from '../logos/mallorca.png';
import logogirona from '../logos/girona.png';
import logolevante from '../logos/levante.png';
import logovillareal from '../logos/villarreal.png'
// champions

import logoajax from '../logos/ajax.png';
import logoarsenal from '../logos/arsenal.png';
import logoatalanta from '../logos/atalanta.png'
import logobayerleverkusen from '../logos/bayerleverkusen.png';
import logobayern from '../logos/bayernmunchen.png'
import logobenfica from '../logos/benfica.png';
import logobodoglimt from '../logos/bodo_glimt.png';
import logoborussiadortmund from '../logos/borussiadortmund.png';
import logochelsea from '../logos/chelsea.png';
import logoclubbrujas from '../logos/clubbrujas.png';
import logofrankfurt from '../logos/eintrachtfrankfurt.png'
import logofccopenhagen from '../logos/fc_copenhague.png'
import logogalatasaray from '../logos/galatasaray.png';
import logointer from '../logos/inter.png';
import logojuventus from '../logos/juventus.png';
import logokairatalmaty from '../logos/kairat_almaty.png';
import logoliverpool from '../logos/liverpool.png';
import logomancity from '../logos/manchestercity.png';
import logomonaco from '../logos/monaco.png';
import logonapoli from '../logos/napoli.png';
import logonewcastle from '../logos/newcastle.png';
import logomarsella from '../logos/olimpiquemarsella.png'
import logoolympiacos from '../logos/olympiacos.png';
import logopafos from '../logos/pafos.png';
import logopsg from '../logos/psg.png';
import logopsv from '../logos/psv.png';
import logoqarabag from '../logos/qarabag.png';
import logoslaviapraga from '../logos/slavia_praga.png';
import logosporting from '../logos/sporting.png';
import logotottenham from '../logos/tottenham.png';
import logounionsaintgilloise from '../logos/union_saint_gilloise.png';


import './Tabla.css';




const Tabla = () => {
  const [activeTab, setActiveTab] = useState('total');

  const dataTotal = [
    {
      position: 1,
      team: 'REAL MADRID',
      logo: logorealMadrid,
      points: 12,
      played: 4,
      won: 4,
      drawn: 0,
      lost: 0,
      goalsFor: 8,
      goalsAgainst: 2,
      goalDifference: 6,
    },
    {
      position: 2,
      team: 'FC BARCELONA',
      logo: logoBarcelona,
      points: 10,
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 13,
      goalsAgainst: 3,
      goalDifference: 10,
    },
    {
      position: 3,
      team: 'RCD Espanyol',
      logo: logoespanyol,
      points: 9,
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 13,
      goalsAgainst: 3,
      goalDifference: 10,
    },
    {
      position: 4,
      team: 'Getafe',
      logo: logogetafe,
      points: 9,
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 13,
      goalsAgainst: 3,
      goalDifference: 10,
    },
    {
      position: 5,
      team: 'Athletic',
      logo: logoathletic,
      points: 9,
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 13,
      goalsAgainst: 3,
      goalDifference: 10,
    },
    {
      position: 6,
      team: 'Villareal',
      logo: logovillareal,
      points: 7,
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 13,
      goalsAgainst: 3,
      goalDifference: 10,
    },
    {
      position: 7,
      team: 'alaves',
      logo: logoalaves,
      points: 7,
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 13,
      goalsAgainst: 3,
      goalDifference: 10,
    },
    {
      position: 8,
      team: 'Elche',
      logo: logoelche,
      points: 6,
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 13,
      goalsAgainst: 3,
      goalDifference: 10,
    },
    {
      position: 9,
      team: 'osasuna',
      logo: logoosasuna,
      points: 6,
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 13,
      goalsAgainst: 3,
      goalDifference: 10,
    },
    {
      position: 10,
      team: 'Betis',
      logo: logobetis,
      points: 6,
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 13,
      goalsAgainst: 3,
      goalDifference: 10,
    },
    {
      position: 11,
      team: 'Atletico Madrid',
      logo: logoatetico,
      points: 5,
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 13,
      goalsAgainst: 3,
      goalDifference: 10,
    },
    {
      position: 12,
      team: 'Sevilla',
      logo: logosevilla,
      points: 4,
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 13,
      goalsAgainst: 3,
      goalDifference: 10,
    },
    {
      position: 13,
      team: 'Rayo Vallecano',
      logo: logorayo,
      points: 4,
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 13,
      goalsAgainst: 3,
      goalDifference: 10,
    },
    {
      position: 14,
      team: 'Celta de Vigo',
      logo: logocelta,
      points: 4,
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 13,
      goalsAgainst: 3,
      goalDifference: 10,
    },
    {
      position: 15,
      team: 'Valencia',
      logo: logovalencia,
      points: 4,
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 13,
      goalsAgainst: 3,
      goalDifference: 10,
    },
    {
      position: 16,
      team: 'Real Oviedo',
      logo: logooveido,
      points: 3,
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 13,
      goalsAgainst: 3,
      goalDifference: 10,
    },
    {
      position: 17,
      team: 'Real Sociedad',
      logo: logorealsociedad,
      points: 2,
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 13,
      goalsAgainst: 3,
      goalDifference: 10,
    },
    {
      position: 18,
      team: 'Levante',
      logo: logolevante,
      points: 1,
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 13,
      goalsAgainst: 3,
      goalDifference: 10,
    },
    {
      position: 19,
      team: 'R.C.D. Mallorca',
      logo: logomallorca,
      points: 1,
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 13,
      goalsAgainst: 3,
      goalDifference: 10,
    },
    {
      position: 20,
      team: 'Girona',
      logo: logogirona,
      points: 1,
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
      goalsFor: 13,
      goalsAgainst: 3,
      goalDifference: 10,
    },

  ];
  const dataChampions = [
     {
      position: 1,
      team: 'ajax',
      logo: logoajax,
      points: 0,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
    },
     {
      position: 2,
      team: 'arsenal',
      logo: logoarsenal,
      points: 0,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
    },
     {
      position: 3,
      team: 'Atalanta',
      logo: logoatalanta,
      points: 0,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
    },
     {
      position: 4,
      team: 'Athletic Club',
      logo: logoathletic,
      points: 0,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
    },
     {
      position: 5,
      team: 'Atlético de Madrid',
      logo: logoatetico,
      points: 0,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
    },
        { position: 6, team: 'Barcelona', logo: logoBarcelona, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 7, team: 'Bayer Leverkusen', logo: logobayerleverkusen, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 8, team: 'Bayern Munich', logo: logobayern, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 9, team: 'Benfica', logo: logobenfica, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 10, team: 'Bodo/Glimt', logo: logobodoglimt, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 11, team: 'Borussia Dortmund', logo: logoborussiadortmund, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 12, team: 'Chelsea', logo: logochelsea, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 13, team: 'Club Brujas', logo: logoclubbrujas, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 14, team: 'Eintracht Frankfurt', logo: logofrankfurt, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 15, team: 'FC Copenhagen', logo: logofccopenhagen, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 16, team: 'Galatasaray', logo: logogalatasaray, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 17, team: 'Inter', logo: logointer, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 18, team: 'Juventus', logo: logojuventus, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 19, team: 'Kairat Almaty', logo: logokairatalmaty, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 20, team: 'Liverpool', logo: logoliverpool, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 21, team: 'Manchester City', logo: logomancity, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 22, team: 'Monaco', logo: logomonaco, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 23, team: 'Napoli', logo: logonapoli, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 24, team: 'Newcastle', logo: logonewcastle, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 25, team: 'Olympiquemarseille', logo: logomarsella, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 26, team: 'Olympiacos', logo: logoolympiacos, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 27, team: 'Pafos', logo: logopafos, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 28, team: 'PSG', logo: logopsg, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 29, team: 'PSV', logo: logopsv, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 30, team: 'Qarabag', logo: logoqarabag, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 31, team: 'Real Madrid', logo: logorealMadrid, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 32, team: 'Slavia Praga', logo: logoslaviapraga, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 33, team: 'Sporting', logo: logosporting, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 34, team: 'Tottenham', logo: logotottenham, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 35, team: 'Union Saint Gilloise', logo: logounionsaintgilloise, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
        { position: 36, team: 'Villarreal', logo: logovillareal, points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 },
  ]
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
                <img src={item.logo} alt={`${item.team} logo`} className="team-logo" />
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