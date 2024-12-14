import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const LinksPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === 'nullshiftrules') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 shadow-md rounded">
          <h1 className="text-2xl font-bold mb-4">Enter Password</h1>
          <input
            type="password"
            className="border p-2 w-full mb-4"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleLogin}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Links - NullShift</title>
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
          <h1 className="text-2xl font-bold mb-4">Useful Links</h1>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <Link href="https://nullshift.xyz" className="text-blue-500 underline hover:text-blue-700">
                NullShift.xyz
              </Link>
            </li>
            <li className="mb-2">
              <Link href="https://github.com" className="text-blue-500 underline hover:text-blue-700">
                GitHub
              </Link>
            </li>
            <li className="mb-2">
              <Link href="https://nextjs.org" className="text-blue-500 underline hover:text-blue-700">
                Next.js Documentation
              </Link>
            </li>
            <li className="mb-2">
              <Link href="https://reactjs.org" className="text-blue-500 underline hover:text-blue-700">
                React Official Website
              </Link>
            </li>
            <li className="mb-2">
              <Link href="https://tailwindcss.com" className="text-blue-500 underline hover:text-blue-700">
                TailwindCSS Documentation
              </Link>
            </li>
          </ul>
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

export default LinksPage;
