import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} NullShift. All Rights Reserved.
        </p>
        <div className="footer-links">
          <Link href="/terms">
            <span className="footer-link">Terms & Conditions</span>
          </Link>
          <Link href="/disclaimer">
            <span className="footer-link">Disclaimer</span>
          </Link>
          <Link href="https://nullshift.xyz" target="_blank" rel="noopener noreferrer">
            <span className="footer-link">nullshift.xyz</span>
          </Link>
          <Link href="https://x.com/itjeff" target="_blank" rel="noopener noreferrer">
            <span className="footer-link">Twitter</span>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: #1e252e;
          color: white;
          padding: 20px 0;
          text-align: center;
          border-top: 2px solid #ff8037;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .footer-text {
          margin-bottom: 10px;
          font-size: 0.875rem;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
        }

        .footer-link {
          color: #ffcc80;
          cursor: pointer;
          font-size: 0.875rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #ffa726;
        }

        @media (max-width: 768px) {
          .footer-links {
            gap: 10px;
          }

          .footer-link {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .footer-text {
            font-size: 0.75rem;
          }

          .footer-links {
            gap: 8px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
