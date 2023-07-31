import React, { useState } from 'react';
import Form from './components/Form';
import PhoneScreen from './components/PhoneScreen';

const App = () => {
  const [tooltipData, setTooltipData] = useState(null);

  const handleUpdateTooltip = (data) => {
    setTooltipData(data);
  };

  return (
    <div>
      <Form onUpdateTooltip={handleUpdateTooltip} />
      <PhoneScreen tooltipData={tooltipData} />
    </div>
  );
};

export default App;
