import readlineSync from 'readline-sync';
import check from './utilits';

// логика всех игр
const constractGame = (task, question, correctAnswer) => {
  const maxRounds = 3;
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);

  for (let i = 0; i < maxRounds; i += 1) {
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    check(answer, correctAnswer);
  }
  console.log(`Congratulations, ${name}`);
};

export default constractGame;
