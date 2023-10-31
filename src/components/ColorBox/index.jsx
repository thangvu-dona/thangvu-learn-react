import React, { useState } from 'react';
import './styles.scss';

const getRandomColor = () => {
  const COLOR_RANGE = ['deeppink', 'green', 'yellow', 'black', 'blue'];
  const randomIndex = Math.trunc(Math.random() * 5);

  return COLOR_RANGE[randomIndex];
};

function ColorBox() {
  // declare initColor outside useState() will call every re-render (not need) -> change into callback function
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('current_color') || 'deeppink';
    console.log(initColor);
    return initColor;
  });

  const handleBoxClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);

    // create local variable to save a current color
    localStorage.setItem('current_color', newColor);
  }

  return (
    <div>
      <h2>Change Color of Box</h2>
      <div
        className='color-box'
        style={{ backgroundColor: color }}
        onClick={handleBoxClick}
      >
      </div>
    </div>
  );
}

export default ColorBox;