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

      <div className="min-h-screen flex flex-col bg-gray-900 text-white overflow-x-hidden">
        <main className="flex-grow container mx-auto p-4 md:p-8 bg-black text-green-400 font-mono shadow-lg rounded-md max-w-4xl">
          {/* Header Section */}
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
            tuned for exciting updates, secret projects, and more!
          </motion.p>

          {/* Crypto Mysteries Section */}
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
              {[
                {
                  title: 'Who is Satoshi Nakamoto?',
                  description:
                    "The identity of Bitcoin's creator remains a mystery to this day.",
                  link: 'https://www.coindesk.com/learn/who-is-satoshi-nakamoto-the-creator-of-bitcoin/',
                },
                {
                  title: 'The Mt. Gox Hack',
                  description:
                    'One of the biggest crypto hacks in history. Billions of dollars worth of Bitcoin were lost.',
                  link: 'https://www.investopedia.com/terms/m/mt-gox.asp',
                },
                {
                  title: 'The Rise of NFTs',
                  description:
                    'Explore how NFTs went from niche interest to global phenomenon.',
                  link: 'https://www.theverge.com/22310188/nft-explainer-what-is-blockchain-crypto-art-faq',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-black p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-yellow-400">
                    {item.title}
                  </h3>
                  <p className="text-white mb-4">{item.description}</p>
                  <Link href={item.link} passHref>
                    <a
                      className="text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Coming Soon Section */}
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
              Stay tuned for live events, airdrops, and new NullShift Club
              content.
            </p>

            {[
              'Mint Your NFT for Club Access - Coming Soon!',
              'Live Events - Coming Soon!',
              'Airdrop $J3ff3R - Coming Soon!',
            ].map((item, index) => (
              <div key={index} className="text-center mb-8">
                <span className="inline-block bg-gray-600 text-black font-bold py-3 px-6 rounded transition-all duration-300">
                  {item}
                </span>
              </div>
            ))}
          </motion.section>
        </main>
      </div>
    </>
  );
};

export default SecretFiles;
