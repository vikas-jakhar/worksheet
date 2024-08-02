import React, { useState } from 'react';
import Header from './components/Header';
import Worksheet from './components/Worksheet';

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState('Select Month');

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Header selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
      <Worksheet selectedMonth={selectedMonth} />
    </div>
  );
};

export default App;
