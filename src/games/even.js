import getRandomInclusive from '../utilits.js';
import constractGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const getTurnData = () => {
  const question = getRandomInclusive(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const getEven = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  constractGame(task, getTurnData);
};

export default getEven;
