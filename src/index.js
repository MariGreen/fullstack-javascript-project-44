import readlineSync from 'readline-sync';
import askAndGreeting from './cli.js';

const constractGame = (task, getTurnData) => {
  const name = askAndGreeting();
  const maxRounds = 3;
  console.log(task);
  for (let i = 0; i < maxRounds; i += 1) {
    const [question, correctAnswer] = getTurnData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    // check(answer, correctAnswer);
    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default constractGame;
