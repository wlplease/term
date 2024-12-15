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
        <title>Airdrop $J3ff3R - Join the Crew</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 overflow-x-hidden">
        <div className="w-full max-w-xl bg-black text-green-400 font-mono p-6 md:p-8 rounded-lg shadow-2xl animate-fade-in mx-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-wide text-yellow-400 mb-6">
              Welcome to the $J3ff3R Airdrop
            </h1>
          </div>

          <div className="p-4 md:p-6 text-center">
            <p className="text-lg mb-6 leading-relaxed">
              Join the <span className="text-yellow-400 font-bold">NullShift Crew</span> and claim your exclusive{' '}
              <span className="text-yellow-400">$J3ff3R</span> tokens!
            </p>

            {showMessage ? (
              <p className="mb-6 animate-blink text-lg">🚀 Ready to embark on the NullShift mission?</p>
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
                  To qualify for the Solana Chain <span className="text-blue-300 font-bold">`$Jeffer`</span> airdrop, you need to hold a Base Chain{' '}
                  <span className="text-yellow-400 font-bold">`$J3FF3R` NFT</span>. Mint yours below:
                </p>
                <div className="space-y-4">
                  <Link href="https://opensea.io/assets/base/0xca6dbfdb25a2d24247c89b4d79010753d193a0c5/1/">
                    <span
                      className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-3 px-6 rounded-full inline-block transition-all duration-300 cursor-pointer"
                    >
                      Mint $J3FF3R NFT
                    </span>
                  </Link>

                  <Link href="https://cform.coinlist.co/forms/dfe96034-09ed-4ca4-afa6-438305522df5">
                    <span
                      className="bg-green-500 hover:bg-green-700 text-black font-bold py-3 px-6 rounded-full inline-block transition-all duration-300 cursor-pointer"
                    >
                      Claim $J3ff3R Tokens
                    </span>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
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
