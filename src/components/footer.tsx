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
          <Link href="/terms" passHref>
            <span className="footer-link">Terms & Conditions</span>
          </Link>
          <Link href="/disclaimer" passHref>
            <span className="footer-link">Disclaimer</span>
          </Link>
          <Link href="https://nullshift.xyz" passHref>
            <span className="footer-link">nullshift.xyz</span>
          </Link>
          <Link href="https://x.com/itjeff" passHref>
            <span
              className="footer-link"
              onClick={(e) => e.stopPropagation()} // Prevent default for external links
            >
              Twitter
            </span>
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
        }

        .footer-text {
          margin-bottom: 10px;
          font-size: 0.875rem;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .footer-link {
          color: #ffcc80;
          cursor: pointer;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #ffa726;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
