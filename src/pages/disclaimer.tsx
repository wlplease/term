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

      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
        <div className="max-w-4xl bg-black text-green-400 font-mono p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
          <p className="mb-4">
            Welcome to NullShift, a platform for blockchain enthusiasts and
            digital pioneers. Our platform, tokens, NFTs, and related utilities
            are designed for educational, experimental, and entertainment
            purposes. By using this site, participating in airdrops, or minting
            NFTs, you acknowledge and agree to the following terms:
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            1. NFT and Token Disclaimer
          </h2>
          <p className="mb-4">
            NFTs and tokens distributed within the NullShift ecosystem do not
            represent investment vehicles, securities, or financial instruments
            of any kind. The value of $J3FF3R tokens and NFTs is determined
            solely by their utility on this platform and the collective fun of
            being part of the NullShift Crew.
          </p>
          <p className="mb-4">
            Ownership of these assets grants access to exclusive on-chain
            experiences and the ability to explore blockchain’s potential.
            Ownership of NFTs or tokens does not imply any rights, claims, or
            guarantees beyond the stated utilities.
          </p>
          <p className="mb-4">
            To participate in the $J3ff3R airdrop on the Solana chain, you need
            to hold a Base Chain $J3FF3R NFT. This NFT unlocks bonuses, including{' '}
            <strong>&quot;Root Access&quot;</strong> to the expanded NullShift
            terminal, unlocking hidden features and experiences.
          </p>
          <p className="mb-4">
            Mint your $J3FF3R NFT now to join the crew:{' '}
            <Link href="/connect">
              <span className="text-blue-400 underline hover:text-blue-600 cursor-pointer">
                Mint $J3FF3R NFT
              </span>
            </Link>
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            2. Website Usage Disclaimer
          </h2>
          <p className="mb-4">
            NullShift is a community-focused platform designed for learning,
            experimentation, and community-building purposes. All content on
            this site is presented &quot;as is&quot; and is subject to change
            without notice. NullShift does not provide any guarantees or
            warranties, express or implied, about the completeness, reliability,
            or accuracy of the information on this site or associated platforms.
          </p>
          <p className="mb-4">
            Links to third-party platforms are provided for convenience.
            NullShift is not responsible for external content, policies, or
            practices. Users are encouraged to exercise caution and protect
            their wallets and personal information when interacting with
            blockchain platforms.
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            3. Limitation of Liability
          </h2>
          <p className="mb-4">
            The software, NFTs, and tokens are provided &quot;as is,&quot;
            without warranty of any kind, express or implied, including but not
            limited to the warranties of merchantability, fitness for a
            particular purpose, and non-infringement. In no event shall
            NullShift or its contributors be liable for any claim, damages, or
            other liability, arising out of or in connection with the software,
            NFTs, tokens, or the use or other dealings on this platform.
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            4. Joining the NullShift Crew
          </h2>
          <p className="mb-4">
            Joining the NullShift Crew is an opportunity to be part of an
            innovative and dynamic community of explorers. Minting your NFT
            unlocks exclusive on-chain experiences and access to upcoming
            features.
          </p>
          <p className="mt-4 text-center">
            Ready to join?{' '}
            <Link href="/connect">
              <span className="text-blue-400 underline hover:text-blue-600 cursor-pointer">
                Mint $J3FF3R NFT
              </span>
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Disclaimer;
