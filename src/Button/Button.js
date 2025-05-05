import React from 'react';
import { useState, useEffect } from "react";
import './Button.css';

export default function Button({increment}) {
  const [count, setCount] = useState(() => {
    return Number(sessionStorage.getItem("count")) || 0;
  });

  useEffect(() => {
    sessionStorage.setItem("count", count);
  }, [count]);

  const handleRefresh = () => {
    setCount(prev => prev + increment)
    window.location.reload();
  };

  return (
    <div className='button'>
      <button
        onClick={handleRefresh}
      >
        Motivate Me
      </button>
      <p>You have wasted {count} grams of CO2</p>
    </div>
  );
}
