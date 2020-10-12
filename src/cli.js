import promptly from 'promptly';

export const greetings = async () => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};
