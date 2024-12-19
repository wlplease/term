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
        {/* Left Section */}
        <div className="header-left">
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
          <div className="toggle-switch" onClick={toggleDarkMode}>
            <span className="toggle-thumb">{darkMode ? '🌙' : '☀️'}</span>
          </div>
        </div>

        {/* Center Section */}
        <div className="header-center">
          <Link href="/">
            <span className="logo">NullShift</span>
          </Link>
        </div>

        {/* Right Section */}
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
    </header>
  );
};

export default Header;
