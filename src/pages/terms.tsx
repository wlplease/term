import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const TermsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions - NullShift</title>
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-lg font-bold">
              nullshift.xyz
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-8">
          <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
          <p className="mb-4">
            Welcome to NullShift! These terms and conditions outline the rules and regulations for the use of our website.
          </p>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p className="mb-4">
            By accessing this website, you agree to comply with these terms and conditions. If you disagree with any part of these terms, please do not use our website.
          </p>
          <h2 className="text-xl font-semibold mb-2">2. Usage</h2>
          <p className="mb-4">
            The content on this website is for general information and use only. It is subject to change without notice.
          </p>
          <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
          <p className="mb-4">
            The website and its content are owned by NullShift and protected by intellectual property laws.
          </p>
          <h2 className="text-xl font-semibold mb-2">4. Liability</h2>
          <p className="mb-4">
            NullShift is not responsible for any errors or omissions, or for the results obtained from the use of this information.
          </p>
          <h2 className="text-xl font-semibold mb-2">5. Contact</h2>
          <p className="mb-4">
            If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@nullshift.xyz" className="text-blue-500 underline">jeff@nullshift.xyz</a>.
          </p>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2025 NullShift. All Rights Reserved.</p>
          <Link href="/terms" className="text-light-yellow dark:text-dark-yellow underline hover:text-yellow-600">
            Terms & Conditions
          </Link>
        </footer>
      </div>
    </>
  );
};

export default TermsPage;