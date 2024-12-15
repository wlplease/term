import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Resume: React.FC = () => {
  return (
    <>
      <Head>
        <title>Hacker Talent Not Found - NullShift</title>
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-900 text-green-400 font-mono">
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
          <h1 className="text-4xl mb-6">404: Hacker Talent Not Found</h1>
          <p className="mb-4">
            It seems like you&apos;re trying to find my resume. Unfortunately,
            it&apos;s currently locked in a quantum safe.
          </p>
          <p className="mb-4">Here&apos;s what you can do instead:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="text-yellow-300">Run this command:</span>
              <code className="bg-black p-1 rounded">
                sudo find-talent --resume jeff
              </code>
            </li>
            <li>
              Use this top-secret email to reach out:
              <a
                href="mailto:nullshiftxyz@gmail.com"
                className="text-blue-500 underline hover:text-blue-700"
              >
                nullshiftxyz@gmail.com
              </a>
            </li>
            <li>
              Decode this Base64 clue:
              <code className="bg-black p-1 rounded">
                Q29ubmVjdCB0byB0aGUgVGVybWluYWw=
              </code>
            </li>
          </ul>
          <p className="mt-6">
            While you&apos;re here, why not explore some fun projects or{' '}
            <Link
              href="/connect"
              className="text-blue-500 underline hover:text-blue-700"
            >
              connect
            </Link>{' '}
            with me?
          </p>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2025 NullShift. All Rights Reserved.</p>
          <Link
            href="/terms"
            className="text-light-yellow dark:text-dark-yellow underline hover:text-yellow-600"
          >
            Terms & Conditions
          </Link>
        </footer>
      </div>
    </>
  );
};

export default Resume;
