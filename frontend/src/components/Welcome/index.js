import React, { useState, useEffect } from 'react';
import './style.css';

const Welcome = (props) => {
  const text = "Welcome to the Nightmare's website!!!";
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setIdx(idx => (idx < text.length) ? (idx + 1) : (0));
    }, 100);
  }, []);

  return (
    <div className="welcome">
      <header>
        { text.substring(0,idx) }
      </header>
    </div>
  );
};

export default Welcome;
