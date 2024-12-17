import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const Crypto: React.FC = () => {
  return (
    <>
      <Head>
        <title>Explore Cryptocurrencies - NullShift</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Header />

      <div className="min-h-screen flex flex-col bg-gray-900 text-white overflow-x-hidden">
        <main className="flex-grow container mx-auto p-4 md:p-8 bg-black text-green-400 font-mono shadow-lg rounded-md max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Explore the World of Cryptocurrencies
          </h1>
          <p className="mb-6 leading-relaxed">
            Welcome to <span className="text-yellow-400">NullShift</span>, your
            gateway to understanding the dynamic and innovative world of
            cryptocurrencies. Whether you&apos;re a tech enthusiast, a
            blockchain newbie, or a seasoned degen, we&apos;ve got something for
            everyone!
          </p>

          <h2 className="text-2xl font-semibold mb-4">Why Crypto Matters</h2>
          <p className="mb-6 leading-relaxed">
            Cryptocurrencies are more than just digital money—they represent a
            revolution in how we think about trust, ownership, and
            decentralization. At NullShift, we believe in educating and
            empowering people to participate in this transformation. Blockchain
            technology opens up possibilities for financial freedom, creative
            innovation, and community governance.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Discover Leading Blockchains
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>Bitcoin:</strong> The OG of crypto, Bitcoin laid the
              foundation for decentralized money. Its security and simplicity
              make it the digital equivalent of gold.{' '}
              <Link href="https://en.wikipedia.org/wiki/Bitcoin">
                <span className="text-blue-400 underline hover:text-blue-600 cursor-pointer">
                  Learn more
                </span>
              </Link>
            </li>
            <li>
              <strong>Ethereum:</strong> Not just a blockchain, but a
              programmable world. Ethereum introduced smart contracts, enabling
              DeFi, NFTs, and more.{' '}
              <Link href="https://en.wikipedia.org/wiki/Ethereum">
                <span className="text-blue-400 underline hover:text-blue-600 cursor-pointer">
                  Learn more
                </span>
              </Link>
            </li>
            <li>
              <strong>Base:</strong> Coinbase&apos;s Layer 2 solution that
              bridges scalability with user-friendly applications.{' '}
              <Link href="https://www.base.org/">
                <span className="text-blue-400 underline hover:text-blue-600 cursor-pointer">
                  Learn more
                </span>
              </Link>
            </li>
            <li>
              <strong>Solana:</strong> The speedster of blockchains, Solana is
              built for high performance, low cost, and big dreams. Perfect for
              DeFi, NFTs, and mass adoption.{' '}
              <Link href="https://en.wikipedia.org/wiki/Solana_(blockchain_platform)">
                <span className="text-blue-400 underline hover:text-blue-600 cursor-pointer">
                  Learn more
                </span>
              </Link>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            How NullShift Can Help
          </h2>
          <p className="mb-6 leading-relaxed">
            At NullShift, we&apos;re not just about learning; we&apos;re about
            doing. From exploring blockchain protocols to tinkering with dApps,
            this is your space to discover and create. Whether it&apos;s minting
            your first NFT, joining a DAO, or staking your tokens, we&apos;re
            here to guide your journey.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Start Your Blockchain Journey
          </h2>
          <div className="text-center mt-8 space-y-4">
            <Link href="https://en.wikipedia.org/wiki/Bitcoin">
              <span className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded inline-block transition-all duration-300 cursor-pointer">
                Learn About Bitcoin
              </span>
            </Link>
            <Link href="https://en.wikipedia.org/wiki/Ethereum">
              <span className="bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded inline-block transition-all duration-300 cursor-pointer">
                Explore Ethereum
              </span>
            </Link>
            <Link href="https://www.base.org/">
              <span className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded inline-block transition-all duration-300 cursor-pointer">
                Discover Base
              </span>
            </Link>
            <Link href="https://en.wikipedia.org/wiki/Solana_(blockchain_platform)">
              <span className="bg-purple-500 hover:bg-purple-600 text-black font-bold py-2 px-4 rounded inline-block transition-all duration-300 cursor-pointer">
                Dive Into Solana
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
          .py-2 {
            padding: 0.5rem 1rem;
          }
          .p-4 {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Crypto;
