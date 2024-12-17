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
<span style="color: #00c2ff; font-weight: bold;">
  ╔═══════════════════════════════════════════════════╗
  ║                NULLSHIFT AI TERMINAL             ║
  ║         Innovate | Explore | Connect Today       ║
  ╚═══════════════════════════════════════════════════╝
</span>

<strong> ABOUT</strong>
    Name: ${userInfo.name}
    Hostname: ${userInfo.hostname}
    Mission: Empowering tech enthusiasts with tools, insights, and innovation.

<strong>🛠️ FEATURES</strong>
   - Real-time Blockchain Insights and Trends.
   - AI-Driven Tools for Developers and Explorers.
   - Personal Projects, Tools, and Future Innovations.

<strong> TERMINAL COMMANDS</strong>
   - <span style="color: #80dfff;">help</span>: View available commands.
   - <span style="color: #80dfff;">about</span>: Learn about NullShift.
   - <span style="color: #80dfff;">dashboard</span>: Display the dashboard summary.
   - <span style="color: #80dfff;">repo</span>: Visit the GitHub repository.
   - <span style="color: #80dfff;">resume</span>: Open Jeff's latest resume.
   - <span style="color: #80dfff;">clear</span>: Clear the terminal screen.

<strong> CONTACT</strong>
    Email: ${userInfo.email}
    GitHub: ${userInfo.github}
    LinkedIn: ${userInfo.linkedin}

<strong> DONATE & SUPPORT</strong>
    CashApp: ${userInfo.cashapp}
    Ethereum: ${userInfo.ethereum}

<span style="color: #00c2ff; font-weight: bold;">
  ╔═══════════════════════════════════════════════════╗
  ║       Stay Curious | Build Boldly | Innovate      ║
  ║              NullShift.xyz | Explore Now          ║
  ╚═══════════════════════════════════════════════════╝
</span>
`;
};

export default dashboard;
