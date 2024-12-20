import React from 'react';
import Head from 'next/head';
import Footer from '../components/footer';

const Bitcoin: React.FC = () => {
  return (
    <>
      <Head>
        <title>Bitcoin - NullShift</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-900 text-white overflow-x-hidden">
        <main className="flex-grow container mx-auto p-4 md:p-8 bg-black text-green-400 font-mono shadow-lg rounded-md max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Bitcoin: An Ode to Satoshi
          </h1>
          {/* Page Content Here */}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Bitcoin;
