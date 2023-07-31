import React, { useState } from 'react';
import './form.css';

const Form = ({ onUpdateTooltip }) => {
  const [selectedButton, setSelectedButton] = useState('');
  const [tooltipText, setTooltipText] = useState('');
  const [textSize, setTextSize] = useState('');
  const [textPadding, setTextPadding] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [cornerRadius, setCornerRadius] = useState('');
  const [tooltipWidth, setTooltipWidth] = useState('');
  const [arrowWidth, setArrowWidth] = useState('');
  const [arrowHeight, setArrowHeight] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const tooltipData = {
      selectedButton,
      tooltipText,
      fontSize: textSize,
      padding: textPadding,
      backgroundColor,
      borderRadius: cornerRadius,
      width: tooltipWidth,
      arrowWidth,
      arrowHeight,
    };
    onUpdateTooltip(tooltipData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Target Element:
        <select value={selectedButton} onChange={(e) => setSelectedButton(e.target.value)}>
          <option value="">Select a button</option>
          <option value="button1">Button 1</option>
          <option value="button2">Button 2</option>
          <option value="button3">Button 3</option>
          <option value="button4">Button 4</option>
          <option value="button5">Button 5</option>
        </select>
      </label>
      <br />
      <label>
        Tooltip Text:
        <input type="text" value={tooltipText} onChange={(e) => setTooltipText(e.target.value)} />
      </label>
      <br />
      <label>
        Text Size:
        <input type="text" value={textSize} onChange={(e) => setTextSize(e.target.value)} />
      </label>
      <br />
      <label>
        Text Padding:
        <input type="text" value={textPadding} onChange={(e) => setTextPadding(e.target.value)} />
      </label>
      <br />
      <label>
        Background Color:
        <input type="text" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
      </label>
      <br />
      <label>
        Radius of Corner:
        <input type="text" value={cornerRadius} onChange={(e) => setCornerRadius(e.target.value)} />
      </label>
      <br />
      <label>
        Tooltip Width:
        <input type="text" value={tooltipWidth} onChange={(e) => setTooltipWidth(e.target.value)} />
      </label>
      <br />
      <label>
        Tooltip Arrow Width:
        <input type="text" value={arrowWidth} onChange={(e) => setArrowWidth(e.target.value)} />
      </label>
      <br />
      <label>
        Tooltip Arrow Height:
        <input type="text" value={arrowHeight} onChange={(e) => setArrowHeight(e.target.value)} />
      </label>
      <br />
      <button type="submit">Update Tooltip</button>
    </form>
  );
};

export default Form;
