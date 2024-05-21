import React, { useState, useEffect } from 'react';

export default function SideEffectExample() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log('age changed');
  }, [age]);

  return (
    <div>
      <h2>Side Effect Example</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </div>
  );
}
