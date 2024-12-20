import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';

const Ethereum: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ethereum - NullShift</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-900 text-white overflow-x-hidden">
        <main className="flex-grow container mx-auto p-4 md:p-8 bg-black text-green-400 font-mono shadow-lg rounded-md max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Ethereum: The World Computer
          </h1>

          <p className="mb-6 leading-relaxed">
            In 2015, a young genius named <strong>Vitalik Buterin</strong>{' '}
            introduced the world to{' '}
            <span className="text-blue-400">Ethereum</span>. Building on
            Bitcoin&apos;s foundation, Ethereum expanded the blockchain&apos;s
            capabilities, allowing for decentralized applications and smart
            contracts. It is often referred to as the &quot;World
            Computer.&quot;
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            What Makes Ethereum Special?
          </h2>
          <p className="mb-4 leading-relaxed">
            Ethereum isn&apos;t just a currency; it&apos;s a platform. Its
            revolutionary addition of <strong>smart contracts</strong> allows
            developers to create decentralized applications (DApps) that operate
            without intermediaries. These contracts are self-executing, with the
            terms directly written into code.
          </p>
          <p className="mb-6 leading-relaxed">
            From decentralized finance (DeFi) platforms to non-fungible tokens
            (NFTs), Ethereum has unlocked a world of possibilities.
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            A Vision of Decentralization
          </h2>
          <p className="mb-4 leading-relaxed">
            Vitalik&apos;s vision for Ethereum was rooted in decentralization
            and openness. The platform is maintained by a global community of
            developers and powered by thousands of nodes worldwide. It aims to
            democratize access to technology and empower individuals.
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            Ethereum&apos;s Evolution
          </h2>
          <p className="mb-4 leading-relaxed">
            Ethereum is constantly evolving. The recent upgrade to Ethereum 2.0
            introduced proof-of-stake (PoS), enhancing scalability, security,
            and sustainability. This marks a significant step towards
            Ethereum&apos;s vision of a global, decentralized network.
          </p>
          <p className="mb-6 leading-relaxed">
            The Ethereum community&apos;s relentless innovation ensures it
            remains at the forefront of blockchain technology.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Learn More</h2>
          <p className="mb-4 leading-relaxed">
            To dive deeper into Ethereum&apos;s groundbreaking technology,
            explore the
            <strong> Ethereum whitepaper</strong>, written by Vitalik Buterin.
            It outlines the platform&apos;s purpose, architecture, and
            potential:
          </p>
          <div className="text-center mb-6">
            <Link
              href="https://ethereum.org/en/whitepaper/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bg-blue-400 text-black font-bold py-3 px-6 rounded-full inline-block hover:bg-blue-600 transition-all duration-300 cursor-pointer">
                Read the Ethereum Whitepaper
              </span>
            </Link>
          </div>

          <h2 className="text-2xl font-semibold mb-3">An Ode to Vitalik</h2>
          <p className="mb-6 leading-relaxed">
            Vitalik Buterin&apos;s vision extended beyond just technology; it
            was a call to rethink trust, ownership, and community. Ethereum
            embodies his belief that decentralization can solve some of the
            world&apos;s most pressing challenges. Today, Ethereum continues to
            thrive as a beacon of innovation and inclusivity.
          </p>

          <div className="text-center">
            <p className="mb-4">
              Ready to explore Ethereum&apos;s potential? Join the{' '}
              <span className="text-yellow-400">NullShift</span> Crew and embark
              on your blockchain journey.
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

export default Ethereum;
