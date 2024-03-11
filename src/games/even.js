import readlineSync from 'readline-sync';
import getRandomInclusive from '../utilits.js';
import name from '../user-name.js';
// import constractGame from '../index.js';

// const check = (userAnswer, calcedValue) => {
//   if (userAnswer === calcedValue) {
//     console.log('Correct!');
//   } else {
//     console.log(`${userAnswer} is wrong answer ;(.
// Correct answer was ${calcedValue}.\n Let's try again, ${name}!`);
//   }
// };

const getTurnData = () => {
  const question = getRandomInclusive(0, 100);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const constractGame = (task) => {
  const maxRounds = 3;
  console.log(task);
  for (let i = 0; i < maxRounds; i += 1) {
    const [question, correctAnswer] = getTurnData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    // check(answer, correctAnswer);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

const isEven = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  constractGame(task, getTurnData);
};

export default isEven;

// игра чет-нечет, логика
