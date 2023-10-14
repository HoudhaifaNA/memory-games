import { useEffect, useState } from 'react';

export default function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [timeString, setTimeString] = useState('00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 59) {
        if (minutes === 59) {
          setSeconds(0);
          setMinutes(0);
          return setHours(hours + 1);
        }
        setSeconds(0);
        return setMinutes(minutes + 1);
      }
      setSeconds(seconds + 1);
    }, 1000);

    const secondsToString = seconds.toString().padStart(2, '0');
    const minutesToString = minutes.toString().padStart(2, '0');
    const hoursToString = hours.toString().padStart(2, '0');

    const timeString = `${hoursToString}:${minutesToString}:${secondsToString}`;

    setTimeString(timeString);

    return () => clearInterval(interval);
  }, [seconds, minutes, hours]);

  function resetTimer() {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }

  return { timeString, resetTimer };
}
