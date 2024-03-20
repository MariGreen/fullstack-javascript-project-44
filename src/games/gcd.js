import getRandomInclusive from '../utilits.js';
import constractGame from '../index.js';

const getTurnData = () => {
  const firstNumber = Math.abs(getRandomInclusive(-100, 100));
  const secondNumber = Math.abs(getRandomInclusive(-10, 10));
  const question = `${firstNumber} ${secondNumber}`;
  const dividers = [];
  let correctAnswer;
  const limit = Math.min(firstNumber, secondNumber);
  if (limit === 0) {
    correctAnswer = firstNumber || secondNumber;
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
