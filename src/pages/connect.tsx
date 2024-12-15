import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Connect: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Add a slight delay for the fun effect
    const timer = setTimeout(() => setShowMessage(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Airdrop $J3ff3R - Join the Crew</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="w-[90%] max-w-lg bg-black text-green-400 font-mono p-8 rounded-lg shadow-2xl animate-fade-in">
          {/* Header */}
          <div className="bg-gray-800 text-white p-4 rounded-t-lg text-center">
            <h1 className="text-2xl font-bold tracking-wide">
              Welcome to the $J3ff3R Airdrop
            </h1>
          </div>

          {/* Content */}
          <div className="p-6 text-center">
            <p className="text-lg mb-4">
              Join the NullShift Crew and claim your exclusive{' '}
              <span className="text-yellow-400">$J3ff3R</span> tokens!
            </p>

            {showMessage ? (
              <p className="mb-6 animate-blink">
                🚀 Ready to embark on the NullShift mission?
              </p>
            ) : (
              <p className="mb-6">Loading your mission brief...</p>
            )}

            <a
              href="https://cform.coinlist.co/forms/dfe96034-09ed-4ca4-afa6-438305522df5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-700 text-black font-bold py-3 px-6 rounded-full inline-block transition-all duration-300"
            >
              Claim $J3ff3R Tokens
            </a>
          </div>

          {/* Footer */}
          <footer className="bg-gray-800 text-white p-4 rounded-b-lg text-center">
            <p className="text-sm">
              Need help? Speak with us at{' '}
              <a
                href="https://discord.gg/ay29JtN9"
                className="text-blue-400 underline hover:text-blue-600"
              >
                https://discord.gg/ay29JtN9
              </a>
            </p>
            <p className="mt-2">
              <Link href="/index">
                <span className="text-yellow-400 underline hover:text-yellow-600 cursor-pointer">
                  Return to Terminal
                </span>
              </Link>
            </p>
          </footer>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
          animation: blink 1s infinite;
        }
      `}</style>
    </>
  );
};

export default Connect; 