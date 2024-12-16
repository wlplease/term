import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const Bitcoin: React.FC = () => {
  return (
    <>
      <Head>
        <title>Bitcoin - NullShift</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Header />

      <div className="min-h-screen flex flex-col bg-gray-900 text-white overflow-x-hidden">
        <main className="flex-grow container mx-auto p-4 md:p-8 bg-black text-green-400 font-mono shadow-lg rounded-md max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Bitcoin: An Ode to Satoshi
          </h1>

          <p className="mb-6 leading-relaxed">
            In 2008, a mysterious figure named <strong>Satoshi Nakamoto</strong>{' '}
            gave the world a gift:
            <span className="text-yellow-400"> Bitcoin</span>. A decentralized
            digital currency, Bitcoin revolutionized the way we think about
            money, trust, and freedom.
          </p>

          <h2 className="text-2xl font-semibold mb-3">The Genesis Block</h2>
          <p className="mb-4 leading-relaxed">
            The Bitcoin journey began with the mining of the{' '}
            <strong>Genesis Block</strong>, the first block of the Bitcoin
            blockchain, on January 3, 2009. Embedded in this block was the
            cryptic message:{' '}
            <em>
              &quot;The Times 03/Jan/2009 Chancellor on brink of second bailout
              for banks.&quot;
            </em>
          </p>
          <p className="mb-6 leading-relaxed">
            This was more than a timestamp; it was a declaration of
            Bitcoin&apos;s purpose: a decentralized financial system, free from
            the control of banks and governments.
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            Bitcoin&apos;s Core Principles
          </h2>
          <p className="mb-4 leading-relaxed">
            Bitcoin operates on three core principles:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>
              Decentralization: No central authority controls the network.
            </li>
            <li>
              Immutability: Transactions, once confirmed, cannot be altered.
            </li>
            <li>Transparency: The blockchain is open for anyone to verify.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3">Why Bitcoin Matters</h2>
          <p className="mb-6 leading-relaxed">
            Bitcoin is more than digital money. It&apos;s a movement. It
            represents the potential for financial independence, freedom from
            oppressive systems, and the democratization of wealth. It is a
            symbol of resilience, born in the aftermath of the 2008 financial
            crisis.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Satoshi&apos;s Vision</h2>
          <p className="mb-6 leading-relaxed">
            Satoshi Nakamoto&apos;s identity remains a mystery, but their vision
            lives on through the Bitcoin protocol and its thriving global
            community. Satoshi&apos;s invention is a technological marvel and a
            philosophical statement: a call to rethink how we exchange value in
            a digital age.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Learn More</h2>
          <p className="mb-6 leading-relaxed">
            To truly understand Bitcoin, start with its foundation: the{' '}
            <strong>whitepaper</strong>. This 9-page document explains how
            Bitcoin works and why it was created. You can read the full
            whitepaper here:
          </p>
          <div className="text-center">
            <Link
              href="https://bitcoin.org/bitcoin.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-full inline-block hover:bg-yellow-600 transition-all duration-300 cursor-pointer">
                Read the Bitcoin Whitepaper
              </span>
            </Link>
          </div>

          <div className="text-center mt-8">
            <p className="mb-4">
              Ready to explore more? Join the{' '}
              <span className="text-yellow-400">NullShift</span>
              Crew and start your blockchain journey.
            </p>
            <Link href="/connect">
              <span className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-3 px-6 rounded-full inline-block transition-all duration-300 cursor-pointer">
                Join the Crew
              </span>
            </Link>
          </div>
        </main>
      </div>

      <Footer />

      <style jsx>{`
        @media (max-width: 768px) {
          .text-3xl {
            font-size: 1.75rem;
          }
          .text-2xl {
            font-size: 1.5rem;
          }
          .py-3 {
            padding: 0.5rem 1.5rem;
          }
          .p-4 {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Bitcoin;
