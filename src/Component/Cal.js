import React, { useState } from 'react';
import buttonData from './Button'; // import the renamed button data

const Button = ({ label, onClick, type }) => {
  return (
    <button 
      className={type === 'operator' ? 'operator-btn' : ''} 
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

const Cal = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (label) => {
    if (label === '=') {
      try {
        setDisplay(eval(display).toString()); // Evaluate the expression in the display
      } catch {
        setDisplay('Error');
      }
    } else if (label === 'R') {
      setDisplay('');
    } else if (label === 'cl') {
      setDisplay(display.slice(0, -1)); // Remove the last character from the display
    } else {
      setDisplay(display + label); // Append the label to the current display
    }
  };

  return (
    <div id="calculator">
      <input id="display" value={display} readOnly />
      <div id="keys">
        {buttonData.map((button, index) => (
          <Button 
            key={index} 
            label={button.label} 
            onClick={handleClick} 
            type={button.type} 
          />
        ))}
      </div>
    </div>
  );
};

export default Cal;
