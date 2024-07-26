import React, { useState } from 'react';

const TopUp = ({ onTopUp }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedAmount = parseInt(amount, 10);
    if (!isNaN(parsedAmount)) {
      onTopUp(parsedAmount);
      setAmount('');
    }
  };

  return (
    <div className="top-up">
      <h2>Пополнить счет</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Введите сумму"
        />
        <button type="submit">Пополнить</button>
      </form>
    </div>
  );
};

export default TopUp;
