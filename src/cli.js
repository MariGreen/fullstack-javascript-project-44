import readlineSync from 'readline-sync';

const askAndGreeting = () => {
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
};

export default askAndGreeting;
