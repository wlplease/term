import dashboard from './dashboard';
import config from '../../../config.json';

export const dashboardCmd = async (): Promise<string> => {
  return await dashboard();
};

export const help = async (): Promise<string> => {
  const commands = [
    'about',
    'banner',
    'base',
    'bing',
    'cd',
    'dashboardCmd',
    'date',
    'disclaimer',
    'discord',
    'donate',
    'echo',
    'emacs',
    'email',
    'github',
    'google',
    'help',
    'linkedin',
    'ls',
    'projects',
    'quote',
    'readme',
    'reddit',
    'repo',
    'resume',
    'root',
    'sudo',
    'sudo root',
    'twitter',
    'vi',
    'vim',
    'whoami',
  ];
  const commandsPerRow = 7;
  const formattedCommands = commands.reduce((acc, cmd, idx) => {
    acc += cmd + (idx % commandsPerRow === commandsPerRow - 1 ? '\n' : ' ');
    return acc;
  }, '');
  return `
Available Commands:
${formattedCommands}

[tab]: Autocomplete
[ctrl+l] or clear: Clear the terminal
Type dashboardCmd for a system summary
Type about for an introduction to NullShift
`;
};

export const repo = async (): Promise<string> => {
  window.open(config.repo, '_blank');
  return 'Opening GitHub repository';
};

export const about = async (): Promise<string> => {
  return `
Welcome to NullShift

Hi, I am Jeff. NullShift.xyz is a space to share my journey, tools, and ideas

Connect With Me:
GitHub: https://github.com/${config.social.github}
LinkedIn: https://linkedin.com/in/${config.social.linkedin}
Contact: nullshiftxyz@gmail.com
`;
};

export const disclaimer = async (): Promise<string> => {
  return `
Welcome to NullShift

This site is for fun and educational purposes only. 
It is not financial advice or professional guidance. 
Dive in, explore, and enjoy the journey of learning and discovery!
`;
};

export const resume = async (): Promise<string> => {
  window.open('/resume', '_blank');
  return 'Opening resume';
};

export const donate = async (): Promise<string> => {
  return `
Support NullShift:
CashApp: https://cash.app/${config.donate_urls.cashapp}
Ethereum: https://etherscan.io/address/${config.donate_urls.ethereum}
`;
};

export const email = async (): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}`;
};

export const github = async (): Promise<string> => {
  window.open(`https://github.com/${config.social.github}`, '_blank');
  return 'Opening GitHub';
};

export const linkedin = async (): Promise<string> => {
  window.open(
    `https://www.linkedin.com/in/${config.social.linkedin}`,
    '_blank',
  );
  return 'Opening LinkedIn';
};

export const twitter = async (): Promise<string> => {
  window.open(`https://twitter.com/${config.social.twitter}`, '_blank');
  return 'Opening Twitter';
};

export const discord = async (): Promise<string> => {
  window.open(config.social.discord, '_blank');
  return 'Opening Discord';
};

export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`, '_blank');
  return `Searching Google for ${args.join(' ')}`;
};

export const reddit = async (args: string[]): Promise<string> => {
  const query = args.length > 0 ? args.join(' ') : 'bitcoin';
  window.open(`https://www.reddit.com/search/?q=${query}`, '_blank');
  return `Searching Reddit for ${query}`;
};

export const bing = async (): Promise<string> => {
  return 'Where are you using Bing? Top advantage: integrated AI';
};

export const base = async (): Promise<string> => {
  return 'Base chain is connected. Explore the possibilities';
};

export const projects = async (): Promise<string> => {
  return `
NullShift Projects:
Exploring and building on blockchain technologies, 
AI-driven agents, and NFT smart contracts. Dive into innovation and creativity.
`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (): Promise<string> => {
  return config.ps1_username;
};

export const ls = async (): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (): Promise<string> => {
  return 'No directories found. Try donate to help expand this system';
};

export const date = async (): Promise<string> => {
  return new Date().toString();
};

export const vi = async (): Promise<string> => {
  return 'Woah, try vim instead';
};

export const vim = async (): Promise<string> => {
  return 'Vim So outdated. Try nvim';
};

export const nvim = async (): Promise<string> => {
  return 'nvim Too fancy. Use emacs';
};

export const emacs = async (): Promise<string> => {
  return 'You know what Just use VSCode';
};

export const sudo = async (): Promise<string> => {
  return 'Permission denied';
};

export const root = async (): Promise<string> => {
  return 'Access denied. You need elevated permissions to use root.';
};

export const banner = (): string => {
  return `
 _   _ _   _ _     _     ____  _   _ ___ _____ _____ 
| \\ | | | | | |   | |   / ___|| | | |_ _|  ___|_   _|
|  \\| | | | | |   | |   \\___ \\| |_| || || |_    | |  
| |\\  | |_| | |___| |___ ___) |  _  || ||  _|   | |  
|_| \\_|\\___/|_____|_____|____/|_| |_|___|_|     |_|  

Type help to see the list of available commands
Type dashboardCmd for a system summary
Type about for an introduction to NullShift
Type repo to visit the GitHub repository
Type projects to explore featured projects
`;
};
