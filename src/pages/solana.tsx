import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const Solana: React.FC = () => {
  return (
    <>
      <Head>
        <title>Solana Blockchain - NullShift</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Header />

      <div className="min-h-screen flex flex-col bg-gray-900 text-white overflow-x-hidden">
        <main className="flex-grow container mx-auto p-4 md:p-8 bg-black text-green-400 font-mono shadow-lg rounded-md max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Solana: The High-Performance Blockchain
          </h1>

          <p className="mb-6 leading-relaxed">
            Welcome to <strong>Solana</strong>, a blockchain platform known for
            its high speed, low transaction costs, and scalability. Designed to
            support the next generation of decentralized applications (DApps),
            Solana has become the go-to platform for DeFi, NFTs, and Web3
            innovation.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            What Makes Solana Unique?
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>Unmatched Speed:</strong> Solana can handle up to 65,000
              transactions per second (TPS), making it one of the fastest
              blockchains.
            </li>
            <li>
              <strong>Low Fees:</strong> Transactions cost a fraction of a cent,
              ensuring accessibility for everyone.
            </li>
            <li>
              <strong>Scalability:</strong> Solana&apos;s architecture is
              designed to scale without compromising decentralization or
              security.
            </li>
            <li>
              <strong>Proof of History (PoH):</strong> Solana&apos;s innovative
              consensus mechanism timestamps transactions to reduce latency and
              increase throughput.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Solana&apos;s Ecosystem
          </h2>
          <p className="mb-6 leading-relaxed">
            Solana boasts a vibrant and rapidly growing ecosystem including DeFi
            platforms, NFT marketplaces, gaming projects, and more. Projects
            like Serum, Magic Eden, and Audius leverage Solana&apos;s speed and
            low costs for seamless experiences.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Why Developers Choose Solana
          </h2>
          <p className="mb-6 leading-relaxed">
            Developers are drawn to Solana for its comprehensive tools,
            high-speed transactions, support for multiple programming languages,
            and active community programs.
          </p>

          <h2 className="text-2xl font-semibold mb-4">The Solana Vision</h2>
          <p className="mb-6 leading-relaxed">
            Solana aims to be the blockchain for mass adoption, democratizing
            access to blockchain technology while empowering developers and
            users alike.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Learn More</h2>
          <p className="mb-4 leading-relaxed">
            Ready to dive deeper into Solana? Check out the official
            documentation:
          </p>
          <div className="text-center mb-6">
            <Link
              href="https://solana.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bg-blue-500 text-black font-bold py-3 px-6 rounded-full inline-block hover:bg-blue-700 transition-all duration-300 cursor-pointer">
                Visit Solana Official Site
              </span>
            </Link>
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            Join the Solana Revolution
          </h2>
          <p className="mb-6 leading-relaxed">
            Solana is not just a blockchain; it&apos;s a movement towards a more
            decentralized, scalable, and accessible Web3 future.
          </p>

          <div className="text-center">
            <p className="mb-4">
              Start your journey with Solana and the{' '}
              <span className="text-yellow-400">NullShift</span> Crew today!
            </p>
            <Link href="/connect">
              <span className="bg-green-500 hover:bg-green-700 text-black font-bold py-3 px-6 rounded-full inline-block transition-all duration-300 cursor-pointer">
                Join the Crew
              </span>
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Solana;
