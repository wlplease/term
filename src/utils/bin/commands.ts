import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort();
  const commandsPerRow = 7;
  const formattedCommands = commands.reduce((acc, cmd, idx) => {
    acc += cmd + (idx % commandsPerRow === commandsPerRow - 1 ? '\n' : ' ');
    return acc;
  }, '');

  return `
Welcome! Here are some of the available commands for starter users:
${formattedCommands}

[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.
Type 'dashboard' to display a summary.
`;
};

// Redirection Commands
export const repo = async (): Promise<string> => {
  window.open(config.repo);
  return 'Opening Github repository...';
};

// About
export const about = async (): Promise<string> => {
  return `
Hi, I am ${config.name}.
Welcome to my AI website!

More about me:
- 'dashboard': short summary.
- 'resume': my latest resume.
- 'readme': my Github readme.
- 'twitter': my X profile.
- 'discord': join the crew.
- 'email': message me.
- [ctrl+l]/'clear': clear the terminal screen.
`;
};

export const resume = async (): Promise<string> => {
  window.open(config.resume_url);
  return 'Opening resume...';
};

// Donate
export const donate = async (): Promise<string> => {
  return `
Thank you for your interest in supporting my work. Here are some options:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">Paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">Patreon</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="https://cash.app/${config.donate_urls.cashapp}" target="_blank">CashApp</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="https://etherscan.io/address/${config.donate_urls.ethereum}" target="_blank">Ethereum</a></u>
`;
};

// Contact
export const email = async (): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Opening Github...';
};

export const linkedin = async (): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return 'Opening LinkedIn...';
};

export const twitter = async (): Promise<string> => {
  window.open(`https://twitter.com/${config.social.twitter}/`);
  return 'Opening Twitter...';
};

export const discord = async (): Promise<string> => {
  window.open(`https://discord.com/invite/nbnyfzqq`);
  return 'Opening Discord...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching Google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching DuckDuckGo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Searching Bing for ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching Reddit for ${args.join(' ')}...`;
};

// Typical Linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (): Promise<string> => {
  return `Unfortunately, I cannot afford more directories.
If you want to help, type 'donate'.`;
};

export const date = async (): Promise<string> => {
  return new Date().toString();
};

export const vi = async (): Promise<string> => {
  return `Woah, you still use 'vi'? Just try 'vim'.`;
};

export const vim = async (): Promise<string> => {
  return `'vim' is so outdated. How about 'nvim'?`;
};

export const nvim = async (): Promise<string> => {
  return `'nvim'? Too fancy. Why not 'emacs'?`;
};

export const emacs = async (): Promise<string> => {
  return `You know what? Just use VSCode.`;
};

export const sudo = async (): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=V3iBBnApeZA', '_blank');
  return `Permission denied: with little power comes... no responsibility?`;
};

// Banner
export const banner = (): string => {
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
  [ctrl+l]/'clear': Clear the terminal screen.
  `;
};

export const dashboard = async (): Promise<string> => {
  return `
Dashboard Summary:
- 'about': Learn more about NullShift.
- 'resume': Access my latest resume.
- 'donate': Support my work.
- 'help': See the list of available commands.
- [ctrl+l]/'clear': Clear the terminal screen.
`;
};
