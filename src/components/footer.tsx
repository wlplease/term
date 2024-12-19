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
          * NullShift is for educational and entertainment purposes. No
          financial advice or guarantees provided. *
        </p>
        <div className="footer-links">
          <Link href="/terms">
            <span className="footer-link">Terms</span>
          </Link>
          <Link href="/disclaimer">
            <span className="footer-link">Disclaimer</span>
          </Link>
          <Link
            href="https://nullshift.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="footer-link">NullShift.xyz</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
