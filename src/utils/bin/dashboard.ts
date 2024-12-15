import config from '../../../config.json';

const dashboard = async (args: string[]): Promise<string> => {
  // NullShift ASCII Art Version
  if (config.ascii === 'nullshift') {
    return `                                                  
             @@@@@@@@@@@@@                   dashboard: dashboard summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name || 'NullShift User'}
  @@                               @@       ﰩ ${config.ps1_hostname || 'nullshift'}
 @@                         @@@     @@       <u><a href="${config.resume_url || '#'}" target="_blank" rel="noopener noreferrer">resume</a></u>
@@        @@@                        @@     爵 <u><a href="${config.repo || '#'}" target="_blank" rel="noopener noreferrer">Github repo</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <u><a href="mailto:${config.email || 'info@nullshift.xyz'}" target="_blank" rel="noopener noreferrer">${config.email || 'info@nullshift.xyz'}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github || ''}" target="_blank" rel="noopener noreferrer">github.com/${config.social.github || ''}</a></u>
   @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin || ''}" target="_blank" rel="noopener noreferrer">linkedin.com/in/${config.social.linkedin || ''}</a></u>
     @@@                        @@@         -----------
        @@@                  @@@ @@          DONATE 
         @|  @@@@@@@@@@@@@@@@   @@           <u><a href="${config.donate_urls.paypal || '#'}" target="_blank" rel="noopener noreferrer">${config.donate_urls.paypal || '#'}</a></u>
         @|                      @@          <u><a href="${config.donate_urls.patreon || '#'}" target="_blank" rel="noopener noreferrer">${config.donate_urls.patreon || '#'}</a></u>

`;
  } else {
    // Default ASCII Art Version
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  dashboard
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name || 'NullShift User'}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url || '#'}" target="_blank" rel="noopener noreferrer">resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.repo || '#'}" target="_blank" rel="noopener noreferrer">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓        > NULLSHIFT       ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${config.email || 'info@nullshift.xyz'}" target="_blank" rel="noopener noreferrer">${config.email || 'info@nullshift.xyz'}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github || ''}" target="_blank" rel="noopener noreferrer">github.com/${config.social.github || ''}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/${config.social.linkedin || ''}" target="_blank" rel="noopener noreferrer">linkedin.com/in/${config.social.linkedin || ''}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             DONATE 
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                <u><a href="${config.donate_urls.paypal || '#'}" target="_blank" rel="noopener noreferrer">${config.donate_urls.paypal || '#'}</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                   <u><a href="${config.donate_urls.patreon || '#'}" target="_blank" rel="noopener noreferrer">${config.donate_urls.patreon || '#'}</a></u>

`;
  }
};

export default dashboard;
