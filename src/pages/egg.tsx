import React from 'react';
import dynamic from 'next/dynamic';
import Header from '../components/header';
import Footer from '../components/footer';

const EggGame = dynamic(() => import('../components/egggame'), { ssr: false });

const Egg: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <EggGame />
      </main>
      <Footer />
    </>
  );
};

export default Egg;
