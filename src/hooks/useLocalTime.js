import { useEffect, useState } from 'react';

const formatter = new Intl.DateTimeFormat('pt-BR', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'America/Sao_Paulo',
});

// Horário atual em Presidente Prudente, atualizado a cada 15s.
export const useLocalTime = () => {
  const [time, setTime] = useState(() => formatter.format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatter.format(new Date())), 15000);
    return () => clearInterval(id);
  }, []);

  return time;
};
