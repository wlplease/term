import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaTwitter, FaDiscord, FaBars } from 'react-icons/fa';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark',
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button onClick={toggleDropdown} className="menu-button">
            <FaBars size={20} />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link href="/about">
                <span className="dropdown-item">About</span>
              </Link>
              <Link href="/resume">
                <span className="dropdown-item">Resume</span>
              </Link>
              <Link href="/secret">
                <span className="dropdown-item">Secret</span>
              </Link>
            </div>
          )}
          <button onClick={toggleDarkMode} className="toggle-switch">
            {darkMode ? '🌙 Dark' : '☀️ Light'}
          </button>
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
    </header>
  );
};

export default Header;
