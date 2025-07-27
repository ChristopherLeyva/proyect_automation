import { useState, useEffect } from 'react';

export default function Chart() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(prev => [...prev.slice(-9), Math.floor(Math.random() * 100)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="chart">
      <h3>📊 Actividad reciente</h3>
      <div className="bars">
        {points.map((value, index) => (
          <div
            key={index}
            className="bar"
            style={{ height: `${value}%` }}
          ></div>
        ))}
      </div>
    </section>
  );
}
