import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [stats, setStats] = useState({
    temperature: 0,
    visitors: 0,
    revenue: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        temperature: (Math.random() * 10 + 20).toFixed(1),
        visitors: Math.floor(Math.random() * 1000),
        revenue: (Math.random() * 5000).toFixed(2)
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DataContext.Provider value={stats}>
      {children}
    </DataContext.Provider>
  );
}
