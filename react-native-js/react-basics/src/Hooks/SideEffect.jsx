import React, { useEffect, useState } from 'react';

const SideEffect = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
};

export default SideEffect;
