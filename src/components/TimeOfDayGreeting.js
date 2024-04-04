import React, { useState, useEffect } from 'react';

const TimeOfDayGreeting = () => {
  const [timeOfDayGreeting, setTimeOfDayGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setTimeOfDayGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setTimeOfDayGreeting('Good Afternoon');
    } else {
      setTimeOfDayGreeting('Good Evening');
    }
  }, []);

  return <h1>{timeOfDayGreeting} Michael</h1>;
};

export default TimeOfDayGreeting;
