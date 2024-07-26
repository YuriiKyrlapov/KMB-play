import React, { useState } from 'react';
import Game from './components/Game';
import Balance from './components/Balance';
import TopUp from './components/TopUp';
import './App.css';

const App = () => {
  const [balance, setBalance] = useState(1000);

  const handleTopUp = (amount) => {
    setBalance(balance + amount);
  };

  const handleGameResult = (result) => {
    if (result === 'win') {
      setBalance(balance + 100);
    } else if (result === 'lose') {
      setBalance(balance - 100);
    }
  };

  return (
    <div className="App">
      <Balance balance={balance} />
      <Game onResult={handleGameResult} />
      <TopUp onTopUp={handleTopUp} />
    </div>
  );
};

export default App;
