import getRandomInclusive from '../utilits.js';
import constractGame from '../index.js';

const getTurnData = () => {
  const question = getRandomInclusive(0, 100);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const isEven = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  constractGame(task, getTurnData);
};

export default isEven;

// игра чет-нечет, логика
