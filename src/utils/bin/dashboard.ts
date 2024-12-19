import config from '../../../config.json';

const dashboard = async (): Promise<string> => {
  const userInfo = {
    name: config.name || 'NullShift User',
    hostname: config.ps1_hostname || 'nullshift',
    email: 'nullshiftxyz@gmail.com',
    resume: '/resume',
    repo: config.repo || 'Not available',
    github: config.social.github
      ? `https://github.com/${config.social.github}`
      : 'Not available',
    linkedin: config.social.linkedin
      ? `https://linkedin.com/in/${config.social.linkedin}`
      : 'Not available',
    cashapp: config.donate_urls.cashapp
      ? `https://cash.app/${config.donate_urls.cashapp}`
      : 'Not available',
    ethereum: config.donate_urls.ethereum
      ? `https://etherscan.io/address/${config.donate_urls.ethereum}`
      : 'Not available',
  };

  return `
╔═══════════════════════════════════════════════════╗
║                NULLSHIFT AI TERMINAL              ║
║         Innovate | Explore | Connect Today        ║
╚═══════════════════════════════════════════════════╝

 ABOUT
    Name: ${userInfo.name}
    Hostname: ${userInfo.hostname}
    Mission: Empowering tech enthusiasts with tools, insights, and innovation.

🛠️ FEATURES
   - Real-time Blockchain Insights and Trends.
   - AI-Driven Tools for Developers and Explorers.
   - Personal Projects, Tools, and Future Innovations.

 TERMINAL COMMANDS
   - help: View available commands.
   - about: Learn about NullShift.
   - dashboard: Display the dashboard summary.
   - repo: Visit the GitHub repository.
   - resume: Open Jeffs latest resume.
   - clear: Clear the terminal screen.

 CONTACT
    Email: ${userInfo.email}
    GitHub: ${userInfo.github}
    LinkedIn: ${userInfo.linkedin}

 DONATE & SUPPORT
    CashApp: ${userInfo.cashapp}
    Ethereum: ${userInfo.ethereum}

╔═══════════════════════════════════════════════════╗
║       Stay Curious | Build Boldly | Innovate      ║
║              NullShift.xyz | Explore Now          ║
╚═══════════════════════════════════════════════════╝
`;
};

export default dashboard;
