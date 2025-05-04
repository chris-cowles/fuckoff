import React from 'react';
import './Button.css';

export default function Button() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className='button'>
      <button 
      onClick={handleRefresh}
    >
      Motivate Me
    </button>
      </div>
  );
}
