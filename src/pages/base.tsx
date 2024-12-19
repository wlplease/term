import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const Base: React.FC = () => {
  return (
    <>
      <Head>
        <title>Base Blockchain - NullShift</title>
      </Head>

      <Header />

      <div className="min-h-screen flex flex-col bg-gray-900 text-white overflow-x-hidden">
        <main className="flex-grow container mx-auto p-4 md:p-8 bg-black text-green-400 font-mono shadow-lg rounded-md max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Base: The Gateway to the Onchain Future
          </h1>

          <p className="mb-6 leading-relaxed">
            <span className="text-blue-400">Base</span> blockchain, launched by
            Jesse Pollak and his innovative team at Coinbase, is an Ethereum
            Layer 2 solution designed to make on-chain life faster, cheaper, and
            more accessible. Built on the Optimism stack, Base aims to onboard
            millions of users to Web3 with a seamless and scalable blockchain
            experience.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Why Base?</h2>
          <p className="mb-4 leading-relaxed">
            Base is more than just another blockchain—it is a bridge to the
            decentralized future. By combining the power of Ethereum with
            Coinbase&apos;s user-friendly platform, Base simplifies the process
            of interacting with decentralized apps (DApps), enabling a new
            generation of users to explore Web3 without barriers.
          </p>

          <p className="mb-6 leading-relaxed">
            With low transaction fees, high throughput, and a growing ecosystem,
            Base is designed to scale Ethereum while maintaining the
            decentralization ethos.
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            The Visionary Behind Base
          </h2>
          <p className="mb-4 leading-relaxed">
            Jesse Pollak, the brains behind Base, is passionate about making
            blockchain technology accessible to everyone. With his extensive
            experience at Coinbase, Jesse understands the importance of creating
            user-friendly systems that lower the barriers to entry for Web3
            adoption.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Features of Base</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Built on Ethereum, leveraging its security and decentralization
            </li>
            <li>
              High throughput and low transaction costs for seamless DApp
              interactions
            </li>
            <li>
              Integration with Coinbase for easy onboarding and offboarding
            </li>
            <li>
              Optimism stack compatibility for interoperability with other Layer
              2 solutions
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3">Base&apos;s Ecosystem</h2>
          <p className="mb-4 leading-relaxed">
            Base is rapidly expanding its ecosystem, attracting developers and
            projects from all corners of the blockchain space. From DeFi
            platforms to NFT marketplaces, Base provides the infrastructure for
            innovation to thrive.
          </p>

          <div className="text-center mb-6">
            <Link
              href="https://base.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bg-blue-400 text-black font-bold py-3 px-6 rounded-full inline-block hover:bg-blue-600 transition-all duration-300 cursor-pointer">
                Visit Base Official Site
              </span>
            </Link>
          </div>

          <div className="text-center">
            <p className="mb-4">
              Ready to experience the future of blockchain? Join the{' '}
              <span className="text-yellow-400">NullShift</span> Crew and
              explore Base!
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

export default Base;
