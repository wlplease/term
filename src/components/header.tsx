import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaTwitter, FaDiscord } from 'react-icons/fa';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <Link href="https://nullshift.xyz">
            <span className="logo">NullShift</span>
          </Link>
        </div>
        <div className="header-right">
          <Link href="/about">
            <span className="about-link">About</span>
          </Link>
          <Link href="https://x.com/itjeff" target="_blank" rel="noopener noreferrer">
            <span className="social-link flex items-center">
              <FaTwitter size={20} />
            </span>
          </Link>
          <Link href="https://discord.com/invite/nbnyfzqq" target="_blank" rel="noopener noreferrer">
            <span className="social-link flex items-center">
              <FaDiscord size={20} />
            </span>
          </Link>
          <div className="toggle-switch" onClick={toggleDarkMode}>
            <span className="toggle-thumb">{darkMode ? '🌙' : '☀️'}</span>
          </div>
          <Link href="/connect">
            <span className="connect-button">Mint $J3ff3R</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .header {
          background-color: #1e252e;
          color: white;
          padding: 10px 20px;
          border-bottom: 2px solid #ff8037;
          position: sticky;
          top: 0;
          z-index: 1000;
          overflow-x: hidden; /* Prevent horizontal scroll */
        }

        .header-content {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .logo:hover {
          color: #ff8037;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap; /* Wrap items on small screens */
        }

        .about-link, .social-link {
          color: white;
          font-size: 1rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .about-link:hover {
          color: #ffa726;
        }

        .social-link:hover {
          color: #5865f2; /* Discord color */
        }

        .connect-button {
          background-color: #ffcc80;
          color: black;
          padding: 8px 16px;
          border-radius: 4px;
          font-weight: bold;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .connect-button:hover {
          background-color: #ffa726;
          transform: scale(1.05);
        }

        .toggle-switch {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 20px;
          background-color: ${darkMode ? '#333' : '#ddd'};
          border-radius: 10px;
          cursor: pointer;
          padding: 2px;
          transition: background-color 0.3s ease;
        }

        .toggle-thumb {
          position: absolute;
          left: ${darkMode ? '20px' : '2px'};
          width: 16px;
          height: 16px;
          background-color: ${darkMode ? '#ffa726' : '#ffcc80'};
          border-radius: 50%;
          text-align: center;
          line-height: 16px;
          font-size: 12px;
          transition: left 0.3s ease, background-color 0.3s ease;
        }

        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }

          .header-right {
            justify-content: center;
            gap: 10px;
          }

          .logo {
            font-size: 1.25rem;
          }

          .connect-button {
            padding: 6px 12px;
            font-size: 0.875rem;
          }
        }

        @media (max-width: 480px) {
          .header-right {
            flex-direction: column;
            gap: 8px;
          }

          .about-link, .social-link {
            font-size: 0.875rem;
          }

          .connect-button {
            font-size: 0.75rem;
          }

          .toggle-switch {
            width: 35px;
            height: 18px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
