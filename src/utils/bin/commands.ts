import * as bin from './index';
import * as apiCommands from './api_commands';
import dashboard from './dashboard';
import config from '../../../config.json';

const fetchPageContent = async (url: string): Promise<string> => {
  const response = await fetch(url);
  return response.ok ? await response.text() : 'Content unavailable.';
};

export const help = async (): Promise<string> => {
  const commands = [...Object.keys(bin), ...Object.keys(apiCommands)].sort();
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
Type dashboard for a system summary
`;
};

export const repo = async (): Promise<string> => {
  window.open(config.repo, '_blank');
  return 'Opening GitHub repository...';
};

export const about = async (): Promise<string> => {
  return `
Welcome to NullShift!

Hi, I’m Jeff — creator of NullShift.xyz. I'm a tech explorer, builder, and innovator passionate about technology, blockchain, and DIY projects. NullShift is a space to share my journey, tools, and ideas while connecting with curious minds like you.

**What I Do:**
- Coding and Development: Building interactive software and tools, like this terminal.
- Blockchain & Crypto: Exploring on-chain data, NFTs, and decentralized applications.
- 3D Printing & DIY: Bringing ideas to life through tangible projects.
- Gadgets & Drones: Merging tech with fun to explore the world in new ways.

**Beyond Tech:**
- Outdoors & Drones: Capturing life from above.
- Sports Enthusiast: From tennis to water adventures.
- Community & Travel: Sharing laughs, stories, and new experiences.

**Connect With Me:**
- GitHub: https://github.com/${config.social.github}
- LinkedIn: https://linkedin.com/in/${config.social.linkedin}
- Contact: nullshiftxyz@gmail.com

Type 'help' to explore available commands or 'dashboard' for a quick system summary.
`;
};

export const disclaimer = async (): Promise<string> => {
  return await fetchPageContent('/disclaimer');
};

export const resume = async (): Promise<string> => {
  window.open('/resume', '_blank');
  return 'Opening resume...';
};

export const donate = async (): Promise<string> => {
  return `
Support NullShift:
- CashApp: https://cash.app/${config.donate_urls.cashapp}
- Ethereum: https://etherscan.io/address/${config.donate_urls.ethereum}
`;
};

export const email = async (): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}`;
};

export const github = async (): Promise<string> => {
  window.open(`https://github.com/${config.social.github}`, '_blank');
  return 'Opening GitHub...';
};

export const linkedin = async (): Promise<string> => {
  window.open(
    `https://www.linkedin.com/in/${config.social.linkedin}`,
    '_blank',
  );
  return 'Opening LinkedIn...';
};

export const twitter = async (): Promise<string> => {
  window.open(`https://twitter.com/${config.social.twitter}`, '_blank');
  return 'Opening Twitter...';
};

export const discord = async (): Promise<string> => {
  window.open(config.social.discord, '_blank');
  return 'Opening Discord...';
};

export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`, '_blank');
  return `Searching Google for ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`, '_blank');
  return `Searching Reddit for ${args.join(' ')}...`;
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
  return `No directories found. Try donate to help expand this system.`;
};

export const date = async (): Promise<string> => {
  return new Date().toString();
};

export const vi = async (): Promise<string> => {
  return `Woah, try vim instead.`;
};

export const vim = async (): Promise<string> => {
  return `Vim? So outdated. Try nvim.`;
};

export const nvim = async (): Promise<string> => {
  return `nvim? Too fancy. Use emacs.`;
};

export const emacs = async (): Promise<string> => {
  return `You know what? Just use VSCode.`;
};

export const sudo = async (): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=V3iBBnApeZA', '_blank');
  return `Permission denied.`;
};

export const banner = (): string => {
  return `
 _   _ _   _ _     _     ____  _   _ ___ _____ _____ 
| \\ | | | | | |   | |   / ___|| | | |_ _|  ___|_   _|
|  \\| | | | | |   | |   \\___ \\| |_| || || |_    | |  
| |\\  | |_| | |___| |___ ___) |  _  || ||  _|   | |  
|_| \\_|\\___/|_____|_____|____/|_| |_|___|_|     |_|  

Type help to see the list of available commands
Type about to learn more
Type dashboard for a system summary
Type repo to visit the GitHub repository
`;
};

export const dashboardCmd = async (): Promise<string> => {
  return await dashboard();
};
