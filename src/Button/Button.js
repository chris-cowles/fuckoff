import React from 'react';
import './Button.css';

export default function Button() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <button 
      onClick={handleRefresh}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Motivate Me
    </button>
  );
}
