import getRandomInclusive from '../utilits.js';
import constractGame from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getTurnData = () => {
  const start = getRandomInclusive(1, 100);
  const rowLong = getRandomInclusive(5, 10);
  const step = getRandomInclusive(2, 9);
  const randomIndex = getRandomInclusive(0, rowLong - 1);
  const progression = generateProgression(start, step, rowLong);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const getNumberRow = () => {
  const task = 'What number is missing in the progression?';
  constractGame(task, getTurnData);
};

export default getNumberRow;
