'use client';
import '../styles/Contador.css';
import React, {useState, useEffect} from 'react';

interface ContadorProps {
  fechaObjetivo: Date;
}

const Contador: React.FC<ContadorProps> = ({ fechaObjetivo }) => {
  const [tiempo, setTiempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      const ahora = new Date();
      const diferencia = fechaObjetivo.getTime() - ahora.getTime();

      if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
        const segundos = Math.floor((diferencia / 1000) % 60);

        setTiempo({ dias, horas, minutos, segundos });
      } else {
        clearInterval(intervalo);
        setTiempo({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, [fechaObjetivo]);

  return (
    <div className="contador-container">
      <div className="contador-item">
        <span className="contador-valor">{tiempo.dias}</span>
        <span className="contador-label">Days</span>
      </div>
      <div className="contador-item">
        <span className="contador-valor">{tiempo.horas}</span>
        <span className="contador-label">Hours</span>
      </div>
      <div className="contador-item">
        <span className="contador-valor">{tiempo.minutos}</span>
        <span className="contador-label">Minutes</span>
      </div>
      <div className="contador-item">
        <span className="contador-valor">{tiempo.segundos}</span>
        <span className="contador-label">Seconds</span>
      </div>
    </div>
  );
};

export default Contador;
