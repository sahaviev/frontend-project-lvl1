import promptly from 'promptly';

// eslint-disable-next-line import/prefer-default-export
export const greetings = async () => {
  const name = await promptly.prompt('May I have your name?: ');
  console.log(`Hello, ${name}!`);
};
