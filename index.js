// Correct import syntax for franc
import { franc } from 'franc';
import readline from 'readline'; 
import langs from 'langs';
import colors from 'colors';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for input
rl.question('Type or paste in any language: '.blue, (input) => {
  // Use the franc package to detect the language
  const langCode = franc(input);

  if (langCode === 'und') {
    console.log('Sorry, we could not figure out the language.'.red);
  } else {
    const language = langs.where('3', langCode);
    if (language) {
      console.log(`Detected language is: ${language.name}`.green);
    } else {
      console.log('Sorry, we could not map the language code.'.red);
    }
  }

  // Close the readline interface
  rl.close();
});
