import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const Connect: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          Join the NullShift Crew - AI Agent Minting for Root Access
        </title>
      </Head>

      <Header />

      <div className="min-h-screen flex flex-col bg-gray-900 text-white overflow-x-hidden">
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

          {/* $J3FF3R NFT Club Section */}
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
              experience.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Exclusive NullShift Club access.</li>
              <li>Future airdropped tokens as the club grows.</li>
              <li>Opportunities to contribute to on-chain experiments.</li>
            </ul>
          </section>

          {/* Airdrop & Disclaimer */}
          <div className="w-full max-w-xl bg-black text-green-400 font-mono p-6 md:p-8 rounded-lg shadow-2xl animate-fade-in mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-wide text-yellow-400 mb-6">
                Join the $J3ff3R Airdrop - AI Agent Root Access
              </h1>
            </div>

            <div className="p-4 md:p-6 text-center">
              <p className="text-sm mb-6 text-yellow-400 leading-relaxed">
                To qualify for the upcoming AI agent features, you need to mint
                a Base Chain{' '}
                <span className="text-yellow-400 font-bold">$J3FF3R</span> NFT.
                Mint yours below:
              </p>
              <Link href="https://opensea.io/assets/base/0xca6dbfdb25a2d24247c89b4d79010753d193a0c5/2/">
                <span className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-3 px-6 rounded-full inline-block transition-all duration-300 cursor-pointer">
                  Mint $J3FF3R NFT
                </span>
              </Link>
            </div>
          </div>

          {/* Learn More */}
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
    </>
  );
};

export default Connect;
