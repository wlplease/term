import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const Disclaimer: React.FC = () => {
  return (
    <>
      <Head>
        <title>Disclaimer - NullShift</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Header />

      <div className="min-h-screen flex flex-col bg-gray-900 text-white overflow-x-hidden">
        <main className="flex-grow container mx-auto p-4 md:p-8 bg-black text-green-400 font-mono shadow-lg rounded-md max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center">Disclaimer</h1>

          <p className="mb-6 leading-relaxed">
            Welcome to <strong>NullShift</strong>, a platform for blockchain
            enthusiasts and digital pioneers. Our platform, tokens, NFTs, and
            related utilities are designed for educational, experimental, and
            entertainment purposes. By using this site, participating in
            airdrops, or minting NFTs, you acknowledge and agree to the
            following terms:
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            1. NFT and Token Disclaimer
          </h2>
          <p className="mb-4 leading-relaxed">
            NFTs and tokens distributed within the NullShift ecosystem do not
            represent investment vehicles, securities, or financial instruments
            of any kind. The value of <strong>$J3FF3R</strong> tokens and NFTs
            is determined solely by their utility on this platform and the
            collective fun of being part of the NullShift Crew.
          </p>
          <p className="mb-4 leading-relaxed">
            Ownership of these assets grants access to exclusive on-chain
            experiences and the ability to explore blockchain’s potential.
            Ownership does not imply any rights, claims, or guarantees beyond
            the stated utilities.
          </p>
          <p className="mb-6 leading-relaxed">
            Mint your <strong>$J3FF3R NFT</strong> now to join the crew:{' '}
            <Link href="/connect">
              <span className="text-blue-400 underline hover:text-blue-600 cursor-pointer">
                Mint $J3FF3R NFT
              </span>
            </Link>
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            2. Website Usage Disclaimer
          </h2>
          <p className="mb-4 leading-relaxed">
            NullShift is a community-focused platform designed for learning,
            experimentation, and community-building purposes. All content on
            this site is presented &quot;as is&quot; and is subject to change
            without notice. NullShift provides no guarantees or warranties,
            express or implied, about the completeness, reliability, or accuracy
            of the information presented here.
          </p>
          <p className="mb-6 leading-relaxed">
            Links to third-party platforms are provided for convenience.
            NullShift is not responsible for external content, policies, or
            practices. Users are encouraged to exercise caution and protect
            their wallets and personal information when interacting with
            blockchain platforms.
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            3. Limitation of Liability
          </h2>
          <p className="mb-6 leading-relaxed">
            The software, NFTs, and tokens are provided &quot;as is,&quot;
            without warranty of any kind, express or implied, including but not
            limited to merchantability, fitness for a particular purpose, and
            non-infringement. In no event shall NullShift or its contributors be
            liable for any damages or claims arising out of the use of this
            platform.
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            4. Joining the NullShift Crew
          </h2>
          <p className="mb-6 leading-relaxed">
            Joining the NullShift Crew is an opportunity to be part of an
            innovative and dynamic community of explorers. Minting your{' '}
            <strong>$J3FF3R NFT</strong> unlocks exclusive on-chain experiences
            and access to upcoming features.
          </p>

          <div className="text-center mt-8">
            <Link href="/connect">
              <span className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-3 px-6 rounded-full inline-block transition-all duration-300 cursor-pointer">
                Mint $J3FF3R NFT
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

export default Disclaimer;
