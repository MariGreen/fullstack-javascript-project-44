import getRandomInclusive from '../utilits.js';
import constractGame from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getTurnData = () => {
  const number = getRandomInclusive(2, 213);
  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const getPrime = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  constractGame(task, getTurnData);
};

export default getPrime;
