import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const Resume: React.FC = () => {
  return (
    <>
      <Header />

      <Head>
        <title>Hacker Talent Not Found - NullShift</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-900 text-green-400 font-mono px-4">
        <main className="flex-grow container mx-auto p-8 bg-black text-green-400 shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold mb-6">404: Hacker Talent Not Found</h1>
          <p className="mb-4">
            It seems like you&apos;re trying to find my resume. Unfortunately,
            it&apos;s currently locked in a quantum safe.
          </p>
          <p className="mb-4">Here&apos;s what you can do instead:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="text-yellow-300">Run this command:</span>
              <code className="bg-black p-1 rounded ml-2">
                sudo find-talent --resume jeff
              </code>
            </li>
            <li>
              Use this top-secret email to reach out:{' '}
              <Link href="mailto:nullshiftxyz@gmail.com">
                <span className="text-blue-500 underline hover:text-blue-700 cursor-pointer">
                  nullshiftxyz@gmail.com
                </span>
              </Link>
            </li>
            <li>
              Decode this Base64 clue:{' '}
              <code className="bg-black p-1 rounded">
                Q29ubmVjdCB0byB0aGUgVGVybWluYWw=
              </code>
            </li>
          </ul>
          <p className="mt-6">
            While you&apos;re here, why not explore some fun projects or{' '}
            <Link href="/connect">
              <span className="text-blue-500 underline hover:text-blue-700 cursor-pointer">
                connect
              </span>
            </Link>{' '}
            with me?
          </p>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Resume;
