import React from 'react';
import Link from 'next/link';
import { FaTwitter } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link href="https://nullshift.xyz">
          <a className="logo">NullShift</a>
        </Link>
      </div>
      <div className="header-right">
        <Link href="https://x.com/itjeff">
          <a className="social-link">
            <FaTwitter size={20} />
          </a>
        </Link>
        <Link href="/connect">
          <a className="connect-button">Connect</a>
        </Link>
      </div>
      <style jsx>{`
        .header {
          background-color: #1e252e;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          border-bottom: 2px solid #ff8037;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .logo:hover {
          color: #ff8037;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .social-link {
          color: white;
          transition: color 0.2s ease;
        }

        .social-link:hover {
          color: #1da1f2;
        }

        .connect-button {
          background-color: #ffcc80;
          color: black;
          padding: 8px 16px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .connect-button:hover {
          background-color: #ffa726;
          transform: scale(1.05);
        }
      `}</style>
    </header>
  );
};

export default Header;
