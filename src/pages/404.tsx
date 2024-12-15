import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | NullShift</title>
      </Head>

      {/* Header */}
      <Header />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-8 text-center">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </h2>
        <Link href="/">
          <span className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-600 transition-all duration-300 cursor-pointer">
            Go Back to Home
          </span>
        </Link>
      </div>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        .min-h-screen {
          min-height: 100vh;
        }

        h1 {
          font-size: 4rem;
          line-height: 1.2;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 3rem;
          }

          h2 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2.5rem;
          }

          h2 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  );
};

export default NotFoundPage;
