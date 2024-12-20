import React, { useState } from 'react';
import Link from 'next/link';
import { FaTwitter, FaDiscord, FaBars } from 'react-icons/fa';

const Header: React.FC<{ darkMode: boolean; toggleTheme: () => void }> = ({
  darkMode,
  toggleTheme,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <header className="p-4 bg-gray-100 dark:bg-gray-900 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
      <div className="flex items-center">
        <button
          onClick={toggleDropdown}
          className="menu-button mr-4"
          aria-label="Toggle menu"
        >
          <FaBars size={20} />
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content absolute mt-2 bg-white dark:bg-gray-800 p-2 rounded shadow-md z-10">
            <Link href="/about">
              <span className="dropdown-item block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                About
              </span>
            </Link>
            <Link href="/crypto">
              <span className="dropdown-item block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                Crypto
              </span>
            </Link>
            <Link href="/disclaimer">
              <span className="dropdown-item block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                Disclaimer
              </span>
            </Link>
            <Link href="/">
              <span className="dropdown-item block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                Home
              </span>
            </Link>
            <Link href="/resume">
              <span className="dropdown-item block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                Resume
              </span>
            </Link>
            <Link href="/secret">
              <span className="dropdown-item block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                Secret
              </span>
            </Link>
            <Link href="/terms">
              <span className="dropdown-item block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                Terms
              </span>
            </Link>
          </div>
        )}
        <button
          onClick={toggleTheme}
          className="toggle-switch text-black dark:text-white text-sm font-medium"
          aria-label="Toggle dark mode"
        >
          {darkMode ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
      <div className="text-xl font-bold text-black dark:text-white">
        <Link href="/">NullShift</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link
          href="https://x.com/itjeff"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={20} className="text-black dark:text-white" />
        </Link>
        <Link
          href="https://discord.com/invite/nbnyfzqq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord size={20} className="text-black dark:text-white" />
        </Link>
        <Link href="/connect">
          <span className="connect-button p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded font-bold">
            $J3ff3R
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
