// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  let c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are some of the available commands for starter users:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'dashboard' to display a summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my AI website!
More about me:
'dashboard' - short summary.
'resume' - my latest resume.
'readme' - my Github readme.
'twitter' - my X.
'email' - message me.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `Thank you for your interest in supporting my work. Here are some options:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">Paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">Patreon</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="https://cash.app/${config.donate_urls.cashapp}" target="_blank">CashApp</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="https://etherscan.io/address/${config.donate_urls.ethereum}" target="_blank">Ethereum</a></u>`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Opening Github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return 'Opening LinkedIn...';
};

export const twitter = async (args: string[]): Promise<string> => {
  window.open(`https://twitter.com/${config.social.twitter}/`);
  return 'Opening Twitter...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=bitcoin${args.join(' ')}`);
  return `Searching Google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=privacy${args.join(' ')}`);
  return `Searching DuckDuckGo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=whyusebinginsteadofgoogle${args.join(' ')}`);
  return `Searching Bing for ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=doodles${args.join(' ')}`);
  return `Searching Reddit for ${args.join(' ')}...`;
};

// Typical Linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `Unfortunately, I cannot afford more directories.
If you want to help, type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `Woah, you still use 'vi'? Just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. How about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? Too fancy. Why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `You know what? Just use VSCode sers.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=V3iBBnApeZA', '_blank'); // LMAO I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
 _   _ _   _ _     _     ____  _   _ ___ _____ _____ 
| \\ | | | | | |   | |   / ___|| | | |_ _|  ___|_   _|
|  \\| | | | | |   | |   \\___ \\| |_| || || |_    | |  
| |\\  | |_| | |___| |___ ___) |  _  || ||  _|   | |  
|_| \\_|\\___/|_____|_____|____/|_| |_|___|_|     |_|  
  
  Type 'help' to see the list of available commands.
  Type 'about' to understand more.
  Type 'dashboard' to display a summary.
  Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
  `;
};
