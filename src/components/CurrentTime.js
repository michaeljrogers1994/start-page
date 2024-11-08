import React, { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{currentTime.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default CurrentTime;
