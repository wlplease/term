import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const Connect: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [agreedToDisclaimer, setAgreedToDisclaimer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleDisclaimerAgree = () => {
    setAgreedToDisclaimer(true);
  };

  return (
    <>
      <Head>
        <title>
          Join the NullShift Crew - AI Agent Minting for Root Access
        </title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Header />

      <div className="min-h-screen flex flex-col bg-gray-900 text-white overflow-x-hidden">
        {/* Introduction Section */}
        <main className="flex-grow container mx-auto p-4 md:p-8 bg-black text-green-400 font-mono shadow-lg rounded-md max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400 text-center">
            Welcome to the $J3ff3R Airdrop and NullShift Crew
          </h1>

          <p className="mb-6 text-lg leading-relaxed text-justify">
            Welcome to the{' '}
            <span className="text-yellow-400 font-bold">NullShift Crew</span>!
            Our community thrives on blockchain-powered innovation, learning,
            and on-chain fun.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
              The $J3FF3R NFT Club
            </h2>
            <p className="mb-4 leading-relaxed">
              The{' '}
              <span className="text-yellow-400 font-bold">
                $J3FF3R NFT Club
              </span>{' '}
              is a collection of NFTs designed for blockchain enthusiasts
              seeking an exclusive on-chain learning and experimental
              experience. Holding a $J3FF3R NFT grants you access to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Exclusive NullShift Club access.</li>
              <li>Future airdropped tokens as the club grows.</li>
              <li>Opportunities to contribute to on-chain experiments.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
              No Pools or Speculation
            </h2>
            <p className="mb-4 leading-relaxed">
              The{' '}
              <span className="text-yellow-400 font-bold">
                $J3FF3R ecosystem
              </span>{' '}
              is focused entirely on learning, community, and exploration. There
              are:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>No value promises or guarantees for NFTs or tokens.</li>
              <li>No speculative liquidity pools or financial incentives.</li>
            </ul>
            <p className="leading-relaxed">
              This is about learning on-chain principles while having fun in a
              community setting.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
              Community Ownership
            </h2>
            <p className="mb-4 leading-relaxed">
              The{' '}
              <span className="text-yellow-400 font-bold">
                $J3FF3R community
              </span>{' '}
              collectively owns and controls the future of the ecosystem,
              including all liquidity, if the community decides to add it. There
              is:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>No owner control or creation privileges.</li>
              <li>
                Full decentralization from inception, with all decisions left to
                the community.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
              Our Vision
            </h2>
            <p className="leading-relaxed">
              NullShift and the $J3FF3R ecosystem aim to build a vibrant,
              innovative, and self-sustaining community. Together, we’ll explore
              the limits of blockchain technology while ensuring fair and
              inclusive participation for all.
            </p>
          </section>

          {/* Airdrop & Connect Section */}
          <div className="w-full max-w-xl bg-black text-green-400 font-mono p-6 md:p-8 rounded-lg shadow-2xl animate-fade-in mx-4 mt-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-wide text-yellow-400 mb-6">
                Join the $J3ff3R Airdrop - AI Agent Root Access
              </h1>
            </div>

            <div className="p-4 md:p-6 text-center">
              <p className="text-lg mb-6 leading-relaxed">
                Join the{' '}
                <span className="text-yellow-400 font-bold">
                  NullShift Crew
                </span>{' '}
                and mint your exclusive{' '}
                <span className="text-yellow-400">$J3FF3R</span> NFT to gain
                root access for upcoming AI agent features!
              </p>

              {showMessage ? (
                <p className="mb-6 animate-blink text-lg">
                  🚀 Ready to unlock the AI agent capabilities?
                </p>
              ) : (
                <p className="mb-6 text-lg">Loading your mission brief...</p>
              )}

              {!agreedToDisclaimer ? (
                <>
                  <p className="text-sm mb-4 text-yellow-400 leading-relaxed">
                    Before proceeding, please review and agree to the{' '}
                    <Link href="/disclaimer">
                      <span className="text-blue-500 underline hover:text-blue-700 cursor-pointer">
                        Disclaimer
                      </span>
                    </Link>{' '}
                    regarding NFTs and token usage.
                  </p>
                  <button
                    onClick={handleDisclaimerAgree}
                    className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-6 rounded-full transition-all duration-300"
                  >
                    I Agree
                  </button>
                </>
              ) : (
                <>
                  <p className="text-sm mb-6 text-yellow-400 leading-relaxed">
                    To qualify for the upcoming AI agent features, you need to
                    mint a Base Chain{' '}
                    <span className="text-yellow-400 font-bold">
                      `$J3FF3R` NFT
                    </span>
                    . Mint yours below:
                  </p>
                  <div className="space-y-4">
                    <Link href="https://opensea.io/assets/base/0xca6dbfdb25a2d24247c89b4d79010753d193a0c5/1/">
                      <span className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-3 px-6 rounded-full inline-block transition-all duration-300 cursor-pointer">
                        Mint $J3FF3R NFT
                      </span>
                    </Link>

                    <Link href="https://cform.coinlist.co/forms/dfe96034-09ed-4ca4-afa6-438305522df5">
                      <span className="bg-green-500 hover:bg-green-700 text-black font-bold py-3 px-6 rounded-full inline-block transition-all duration-300 cursor-pointer">
                        Claim $J3ff3R Tokens
                      </span>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mt-6 text-center space-y-4">
            <Link href="/terms">
              <span className="hover:underline text-blue-400 cursor-pointer">
                View Terms and Conditions
              </span>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold mb-4 text-yellow-400">
              Curious About Crypto?
            </h2>
            <p className="mb-4 leading-relaxed">
              Dive deeper into the world of blockchain technology and explore
              our pages dedicated to Bitcoin, Ethereum, Solana, and more.
            </p>
            <Link href="/crypto">
              <span className="bg-blue-500 hover:bg-blue-600 text-black font-bold py-3 px-6 rounded transition-all duration-300 cursor-pointer">
                Learn More About Crypto
              </span>
            </Link>
          </div>
        </main>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
          }
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-blink {
          animation: blink 1.5s infinite;
        }

        @media (max-width: 768px) {
          .text-lg {
            font-size: 1rem;
          }

          .text-3xl {
            font-size: 1.75rem;
          }

          .py-3 {
            padding: 0.5rem 1.5rem;
          }

          .p-6 {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Connect;
