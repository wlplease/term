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
          <h1 className="text-3xl font-bold mb-6 text-center">Explore the World of Cryptocurrencies</h1>
          <p className="mb-6 leading-relaxed">
            Welcome to <span className="text-yellow-400">NullShift</span>, your gateway to understanding the dynamic and innovative world of cryptocurrencies. From Bitcoin&apos;s revolutionary origins to Ethereum&apos;s smart contract capabilities, Base&apos;s Layer 2 solutions, and Solana&apos;s high-performance blockchain, we invite you to dive deep into the heart of Web3.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Discover Leading Blockchains</h2>
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>Bitcoin:</strong> The original cryptocurrency created by the mysterious Satoshi Nakamoto. It revolutionized finance with its decentralized approach.{' '}
              <Link href="/bitcoin">
                <span className="text-blue-400 underline hover:text-blue-600 cursor-pointer">Learn more</span>
              </Link>
            </li>
            <li>
              <strong>Ethereum:</strong> The blockchain that introduced smart contracts and decentralized applications, thanks to the vision of Vitalik Buterin.{' '}
              <Link href="/ethereum">
                <span className="text-blue-400 underline hover:text-blue-600 cursor-pointer">Learn more</span>
              </Link>
            </li>
            <li>
              <strong>Base:</strong> Coinbase&apos;s Layer 2 solution, led by Jesse Pollak, aims to bring billions of users into Web3 with its scalability and user-friendly approach.{' '}
              <Link href="/base">
                <span className="text-blue-400 underline hover:text-blue-600 cursor-pointer">Learn more</span>
              </Link>
            </li>
            <li>
              <strong>Solana:</strong> A high-performance blockchain designed for fast and low-cost transactions, ideal for DeFi and NFTs.{' '}
              <Link href="/solana">
                <span className="text-blue-400 underline hover:text-blue-600 cursor-pointer">Learn more</span>
              </Link>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Why Learn About Cryptocurrencies?</h2>
          <p className="mb-4 leading-relaxed">
            Cryptocurrencies are reshaping the world, providing new ways to think about money, data, and trust. By understanding these technologies, you can be part of the next wave of innovation and participate in building a decentralized future.
          </p>
          <p className="mb-6 leading-relaxed">
            Whether you&apos;re a developer, an investor, or just curious, exploring these blockchains will give you insights into the power and potential of decentralization.
          </p>

          <div className="text-center mt-8 space-y-4">
            <Link href="/bitcoin">
              <span className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded inline-block transition-all duration-300 cursor-pointer">
                Learn About Bitcoin
              </span>
            </Link>
            <Link href="/ethereum">
              <span className="bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded inline-block transition-all duration-300 cursor-pointer">
                Explore Ethereum
              </span>
            </Link>
            <Link href="/base">
              <span className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded inline-block transition-all duration-300 cursor-pointer">
                Discover Base
              </span>
            </Link>
            <Link href="/solana">
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