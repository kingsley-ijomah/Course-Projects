import React, { useState } from 'react';

export default function SliderExample() {
  const [sliderValue, setSliderValue] = useState(0);

  // const handleChange = (e) => {
  //   setSliderValue(e.target.value);
  // };

  return (
    <div>
      <h2>Slider Example</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => setSliderValue(e.target.value)}
      />
      <p>Slider Value: {sliderValue}</p>
    </div>
  );
}
