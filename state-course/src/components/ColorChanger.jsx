import React, { useState } from 'react';

export default function ColorChanger() {
  const [bgColor, setBgColor] = useState('lightgreen');

  const handleClick = () => {
    setBgColor(bgColor === 'lightgreen' ? 'lightblue' : 'lightgreen'); // ternary operator
  };

  return (
    <div>
      <h2>Color Changer</h2>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: bgColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        Change me!
      </div>
      <button onClick={() => handleClick()}>Click Me</button>
    </div>
  );
}
