import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaTwitter, FaDiscord, FaBars } from 'react-icons/fa';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="dropdown-menu">
            <button onClick={toggleDropdown} className="menu-button">
              <FaBars size={20} />
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <Link href="/about">About</Link>
                <Link href="/resume">Resume</Link>
                <Link href="/secret">Secret</Link>
              </div>
            )}
          </div>
          <div className="toggle-switch" onClick={toggleDarkMode}>
            <span className="toggle-thumb">{darkMode ? '🌙' : '☀️'}</span>
          </div>
        </div>

        <div className="header-center">
          <Link href="/">
            <span className="logo">NullShift</span>
          </Link>
        </div>

        <div className="header-right">
          <div className="social-links">
            <Link
              href="https://x.com/itjeff"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="https://discord.com/invite/nbnyfzqq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord size={20} />
            </Link>
          </div>
          <Link href="/connect">
            <span className="connect-button">$J3ff3R</span>
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
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .header-content {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1200px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 15px;
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
          text-align: center;
          font-size: 14px;
        }

        .header-center {
          flex: 1;
          text-align: center;
        }

        .logo {
          font-size: 1.8rem;
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
          justify-content: flex-end;
          align-items: center;
          gap: 15px;
        }

        .menu-button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          transition: color 0.3s ease;
        }

        .menu-button:hover {
          color: #ffa726;
        }

        .dropdown-content {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #333;
          border: 1px solid #444;
          border-radius: 4px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          z-index: 1001;
          min-width: 150px;
        }

        .dropdown-content a {
          color: white;
          padding: 10px;
          text-decoration: none;
          transition: background 0.3s ease;
        }

        .dropdown-content a:hover {
          background-color: #444;
        }

        .social-links {
          display: flex;
          gap: 10px;
        }

        .social-links a {
          color: white;
          transition: color 0.3s ease;
        }

        .social-links a:hover {
          color: #5865f2;
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

        @media (max-width: 768px) {
          .header-content {
            gap: 10px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
