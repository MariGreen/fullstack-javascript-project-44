import readlineSync from 'readline-sync';
import name from './user-name.js';

// логика всех игр

// const check = (userAnswer, calcedValue) => {
//   if (userAnswer === calcedValue) {
//     console.log('Correct!');
//     console.log(userAnswer);
//     console.log(calcedValue);
//   } else {
//     console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${calcedValue}.\n Let's try again, ${name}!`);
//   }
// };

// const constractGame = (task, getTurnData) => {
//   const maxRounds = 3;
//   // const name = readlineSync.question('May I have your name? ');
//   // console.log(`Hello, ${name}!`);
//   console.log(task);

//   for (let i = 0; i < maxRounds; i += 1) {
//     const [question, correctAnswer] = getTurnData;
//     console.log(`Question: ${question}`);
//     const answer = readlineSync.question('Your answer: ');
//     check(answer, correctAnswer);
//   }
//   console.log(`Congratulations, ${name}`);
// };

// export default constractGame;
