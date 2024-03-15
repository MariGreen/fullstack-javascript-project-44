import getRandomInclusive from '../utilits.js';
import constractGame from '../index.js';

const getTurnData = () => {
  const number = getRandomInclusive(2, 213);
  const dividors = [1];
  const question = number;
  let correctAnswer = 'no';
  if (number === 2 || number === 3) {
    correctAnswer = 'yes';
    return [question, correctAnswer];
  }
  if (number % 2 === 0) {
    return [question, correctAnswer];
  }
  for (let i = 3; i <= number; i += 1) {
    if (number % i === 0) {
      dividors.push(i);
    }
  } correctAnswer = dividors.length === 2 ? 'yes' : 'no';
  return [question, correctAnswer];
};

const isPrime = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  constractGame(task, getTurnData);
};

export default isPrime;

// найди простое число, логика
