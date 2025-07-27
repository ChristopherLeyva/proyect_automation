import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export default function LiveStats() {
  const stats = useContext(DataContext);

  return (
    <section className="stats">
      <div className="card">🌡️ Temperatura: <strong>{stats.temperature}°C</strong></div>
      <div className="card">👥 Visitantes: <strong>{stats.visitors}</strong></div>
      <div className="card">💵 Ingresos: <strong>${stats.revenue}</strong></div>
    </section>
  );
}
