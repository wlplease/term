import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} NullShift. All Rights Reserved.
        </p>
        <p className="footer-disclaimer">
          * NullShift is for educational and entertainment purposes. No financial advice or guarantees provided. *
        </p>
        <div className="footer-links">
          <Link href="/terms">
            <span className="footer-link">Terms</span>
          </Link>
          <Link href="/disclaimer">
            <span className="footer-link">Disclaimer</span>
          </Link>
          <Link href="https://nullshift.xyz" target="_blank" rel="noopener noreferrer">
            <span className="footer-link">nullshift.xyz</span>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: #1e252e;
          color: white;
          padding: 15px 0;
          text-align: center;
          border-top: 2px solid #ff8037;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .footer-text {
          margin-bottom: 5px;
          font-size: 0.875rem;
        }

        .footer-disclaimer {
          margin-bottom: 10px;
          font-size: 0.75rem;
          color: #ffcc80;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 12px;
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
            font-size: 0.8rem;
          }

          .footer-text {
            font-size: 0.8rem;
          }

          .footer-disclaimer {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 480px) {
          .footer-text {
            font-size: 0.75rem;
          }

          .footer-disclaimer {
            font-size: 0.65rem;
          }

          .footer-links {
            gap: 8px;
          }

          .footer-link {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;