import React, { useState } from 'react';

const choices = ['Камень', 'Ножницы', 'Бумага'];

const Game = ({ onResult }) => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const getResult = (player, computer) => {
    if (player === computer) return 'draw';
    if (
      (player === 'Камень' && computer === 'Ножницы') ||
      (player === 'Ножницы' && computer === 'Бумага') ||
      (player === 'Бумага' && computer === 'Камень')
    ) {
      return 'win';
    } else {
      return 'lose';
    }
  };

  const handleClick = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);

    const gameResult = getResult(choice, computerChoice);
    setResult(gameResult);
    onResult(gameResult);
  };

  return (
    <div className="game">
      <h2>Камень, Ножницы, Бумага</h2>
      <div>
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleClick(choice)}>
            {choice}
          </button>
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div>
          <p>Вы выбрали: {playerChoice}</p>
          <p>Компьютер выбрал: {computerChoice}</p>
          <p>Результат: {result === 'win' ? 'Вы выиграли!' : result === 'lose' ? 'Вы проиграли!' : 'Ничья!'}</p>
        </div>
      )}
    </div>
  );
};

export default Game;
