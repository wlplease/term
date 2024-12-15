import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us - NullShift</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Header />

      <div className="min-h-screen flex flex-col bg-gray-900 text-white overflow-x-hidden">
        <main className="flex-grow container mx-auto p-4 md:p-8 bg-black text-green-400 font-mono shadow-lg rounded-md max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">About NullShift</h1>

          <p className="mb-4">
            Welcome to the NullShift Crew! Our community thrives on blockchain-powered innovation, learning, and on-chain fun.
          </p>

          <h2 className="text-2xl font-semibold mb-4">The $J3FF3R NFT Club</h2>
          <p className="mb-4">
            The $J3FF3R NFT Club is a collection of NFTs designed for blockchain enthusiasts seeking an exclusive on-chain learning and experimental experience. Holding a $J3FF3R NFT grants you access to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Exclusive NullShift Club access.</li>
            <li>Future airdropped tokens as the club grows.</li>
            <li>Opportunities to contribute to on-chain experiments.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">No Pools or Speculation</h2>
          <p className="mb-4">
            The $J3FF3R ecosystem is focused entirely on learning, community, and exploration. There are:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>No value promises or guarantees for NFTs or tokens.</li>
            <li>No speculative liquidity pools or financial incentives.</li>
          </ul>
          <p className="mb-4">
            This is about learning on-chain principles while having fun in a community setting.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Community Ownership</h2>
          <p className="mb-4">
            The $J3FF3R community collectively owns and controls the future of the ecosystem, including all liquidity, if the community decides to add it. There is:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>No owner control or creation privileges.</li>
            <li>Full decentralization from inception, with all decisions left to the community.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-4">
            NullShift and the $J3FF3R ecosystem aim to build a vibrant, innovative, and self-sustaining community. Together, we’ll explore the limits of blockchain technology while ensuring fair and inclusive participation for all.
          </p>

          <div className="mt-6 text-center">
            <Link href="/connect">
              <span className="hover:underline text-yellow-400 cursor-pointer">
                Ready to join the crew? Mint your $J3FF3R NFT now!
              </span>
            </Link>
          </div>

          <div className="mt-6 text-center space-y-4">
            <Link href="/disclaimer">
              <span className="hover:underline text-blue-400 cursor-pointer">
                Read our Disclaimer
              </span>
            </Link>
            <br />
            <Link href="/terms">
              <span className="hover:underline text-blue-400 cursor-pointer">
                View Terms and Conditions
              </span>
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default About;
