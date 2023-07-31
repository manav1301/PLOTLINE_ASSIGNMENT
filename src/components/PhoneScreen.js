import React, { useState } from 'react';
import './PhoneScreen.css';

const PhoneScreen = ({ tooltipData }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const getTooltipPosition = (button) => {
    switch (button) {
      case 'button1':
        return { top: '-65px', left: '50%', transform: 'translateX(-50%)' };
      case 'button2':
        return { top: '-65px', right: '50%', transform: 'translateX(50%)' };
      case 'button3':
        return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
      case 'button4':
        return { bottom: '-65px', left: '50%', transform: 'translateX(-50%)' };
      case 'button5':
        return { bottom: '-65px', right: '50%', transform: 'translateX(50%)' };
      default:
        return {};
    }
  };

  return (
    <div className="phone-screen-container">
      <div className="phone-screen">
        <button
          className={`button1${hoveredButton === 'button1' ? ' tooltip-active' : ''}`}
          onMouseEnter={() => handleMouseEnter('button1')}
          onMouseLeave={handleMouseLeave}
        >
          Button 1
        </button>
        <button
          className={`button2${hoveredButton === 'button2' ? ' tooltip-active' : ''}`}
          onMouseEnter={() => handleMouseEnter('button2')}
          onMouseLeave={handleMouseLeave}
        >
          Button 2
        </button>
        <button
          className={`button3${hoveredButton === 'button3' ? ' tooltip-active' : ''}`}
          onMouseEnter={() => handleMouseEnter('button3')}
          onMouseLeave={handleMouseLeave}
        >
          Button 3
        </button>
        <button
          className={`button4${hoveredButton === 'button4' ? ' tooltip-active' : ''}`}
          onMouseEnter={() => handleMouseEnter('button4')}
          onMouseLeave={handleMouseLeave}
        >
          Button 4
        </button>
        <button
          className={`button5${hoveredButton === 'button5' ? ' tooltip-active' : ''}`}
          onMouseEnter={() => handleMouseEnter('button5')}
          onMouseLeave={handleMouseLeave}
        >
          Button 5
        </button>
      </div>
      {tooltipData && hoveredButton && (
        <div
          className="tooltip"
          style={{ ...getTooltipPosition(hoveredButton), ...tooltipData }}
        >
          {tooltipData.tooltipText}
        </div>
      )}
    </div>
  );
};

export default PhoneScreen;
