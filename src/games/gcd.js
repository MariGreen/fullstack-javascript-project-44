import getRandomInclusive from '../utilits.js';
import constractGame from '../index.js';

const getTurnData = () => {
  const firstNumber = getRandomInclusive(1, 100);
  const secondNumber = getRandomInclusive(1, 10);
  const question = `${firstNumber} ${secondNumber}`;
  const dividers = [];
  let correctAnswer = 0;
  const limit = Math.min(firstNumber, secondNumber);
  if (limit === 0) {
    return [question, correctAnswer];
  } for (let i = 0; i <= limit; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      dividers.push(i);
    }
  } correctAnswer = dividers[dividers.length - 1];
  return [question, correctAnswer];
};

const setMaxDivisor = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  constractGame(task, getTurnData);
};

export default setMaxDivisor;

// найди наибольший общий делитель, логика
