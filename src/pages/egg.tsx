import dynamic from 'next/dynamic';
import Header from '../components/header';
import Footer from '../components/footer';

// Dynamically import the EggGame component (client-side only, no SSR)
const EggGame = dynamic(() => import('../components/egggame'), { ssr: false });

const Egg: React.FC = () => {
  return (
    <>
      {/* Render Header component */}
      <Header />

      {/* Render EggGame component, which will only be rendered client-side */}
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <EggGame />
      </main>

      {/* Render Footer component */}
      <Footer />
    </>
  );
};

export default Egg;
