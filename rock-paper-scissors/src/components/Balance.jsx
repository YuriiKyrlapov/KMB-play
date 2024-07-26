import React from 'react';

const Balance = ({ balance }) => {
  return (
    <div className="balance">
      <h2>Ваш баланс: {balance} ед.</h2>
    </div>
  );
};

export default Balance;
