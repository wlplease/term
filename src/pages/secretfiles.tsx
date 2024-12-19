import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import { motion } from 'framer-motion';

const SecretFiles: React.FC = () => {
  return (
    <>
      <Head>
        <title>Secret Files - NullShift</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Header />

      <div className="min-h-screen flex flex-col bg-gray-900 text-white overflow-x-hidden">
        <main className="flex-grow container mx-auto p-4 md:p-8 bg-black text-green-400 font-mono shadow-lg rounded-md max-w-4xl">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to the Secret Files Area
          </motion.h1>
          <motion.p
            className="text-lg leading-relaxed text-center mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            You&apos;ve unlocked access to exclusive NullShift content. Stay
            tuned for more exciting updates, secret projects, and much more!
          </motion.p>

          <motion.section
            className="mb-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400 text-center">
              Crypto Mysteries Uncovered
            </h2>
            <p className="text-lg leading-relaxed text-center mb-6">
              Dive into the most thrilling mysteries in the world of crypto.
              Here are some of the greatest unsolved puzzles and historical
              events in the space.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-black p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold text-yellow-400">
                  Who is Satoshi Nakamoto?
                </h3>
                <p className="text-white mb-4">
                  The identity of Bitcoin&apos;s creator remains a mystery to
                  this day.
                </p>
                <Link href="https://www.coindesk.com/learn/who-is-satoshi-nakamoto-the-creator-of-bitcoin/">
                  <a className="text-blue-400 hover:underline">Learn More</a>
                </Link>
              </motion.div>

              <motion.div
                className="bg-black p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold text-yellow-400">
                  The Mt. Gox Hack
                </h3>
                <p className="text-white mb-4">
                  One of the biggest crypto hacks in history. Billions of
                  dollars worth of Bitcoin were lost.
                </p>
                <Link href="https://www.investopedia.com/terms/m/mt-gox.asp">
                  <a className="text-blue-400 hover:underline">Learn More</a>
                </Link>
              </motion.div>

              <motion.div
                className="bg-black p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold text-yellow-400">
                  The Rise of NFTs
                </h3>
                <p className="text-white mb-4">
                  Explore how NFTs went from niche interest to global
                  phenomenon.
                </p>
                <Link href="https://www.theverge.com/22310188/nft-explainer-what-is-blockchain-crypto-art-faq">
                  <a className="text-blue-400 hover:underline">Learn More</a>
                </Link>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            className="mb-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400 text-center">
              More Coming Soon!
            </h2>
            <p className="text-lg leading-relaxed text-center mb-6">
              In the meantime, stay tuned for **live events**, **airdrops**, and
              new NullShift Club content.
            </p>

            <div className="text-center mb-8">
              <span className="inline-block bg-gray-600 text-black font-bold py-3 px-6 rounded transition-all duration-300">
                Mint Your NFT for Club Access - Coming Soon!
              </span>
            </div>

            <div className="text-center mb-8">
              <span className="inline-block bg-gray-600 text-black font-bold py-3 px-6 rounded transition-all duration-300">
                Live Events - Coming Soon!
              </span>
            </div>

            <div className="text-center mb-8">
              <span className="inline-block bg-gray-600 text-black font-bold py-3 px-6 rounded transition-all duration-300">
                Airdrop $J3ff3R - Coming Soon!
              </span>
            </div>
          </motion.section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default SecretFiles;
