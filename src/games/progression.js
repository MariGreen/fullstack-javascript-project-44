import getRandomInclusive from '../utilits.js';
import constractGame from '../index.js';

const getTurnData = () => {
  const numberRow = [];
  let question = '';
  const start = getRandomInclusive(1, 100);
  const rowLong = getRandomInclusive(5, 10);
  const step = getRandomInclusive(2, 9);
  const randomIndex = getRandomInclusive(0, rowLong - 1);
  const correctAnswer = start + step * randomIndex;
  for (let i = start; numberRow.length < rowLong; i += step) {
    numberRow.push(i.toString());
  } numberRow.splice(randomIndex, 1, '..');
  question = numberRow.join(' ');
  return [question, correctAnswer];
};

const getNumberRow = () => {
  const task = 'What number is missing in the progression?';
  constractGame(task, getTurnData);
};

export default getNumberRow;
