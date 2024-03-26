import getRandomInclusive from '../utilits.js';
import constractGame from '../index.js';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  } return getGcd(num2 % num1, num1);
};

const getTurnData = () => {
  const firstNumber = Math.abs(getRandomInclusive(-100, 100));
  const secondNumber = Math.abs(getRandomInclusive(-10, 10));
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGcd(firstNumber, secondNumber);
  return [question, correctAnswer];
};

const setMaxDivisor = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  constractGame(task, getTurnData);
};

export default setMaxDivisor;
