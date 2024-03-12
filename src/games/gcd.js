import getRandomInclusive from '../utilits.js';
import constractGame from '../index.js';

const getTurnData = () => {
  const firstNumber = getRandomInclusive(-100, 100);
  const secondNumber = getRandomInclusive(-100, 100);
  const question = `${firstNumber} and ${secondNumber}`;
  const dividers = [];
  const limit = Math.min(Math.abs(firstNumber), Math.abs(secondNumber));
  let correctAnswer = 0;
  for (let i = 0; i <= limit; i += 1) {
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
