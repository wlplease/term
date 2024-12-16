import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import { useRouter } from 'next/router';

const About: React.FC = () => {
  const [password, setPassword] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if the password is "nullshift" spelled backwards
    if (password === 'tfihsllun') {
      setAccessGranted(true);
      // Redirect to the secret files page
      router.push('/secretfiles');
    } else {
      setErrorMessage('Incorrect password. Please try again.');
      setPassword(''); // Clear password field after incorrect attempt
    }
  };

  return (
    <>
      <Head>
        <title>About Us - NullShift</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Header />

      <div className="min-h-screen flex flex-col bg-gray-900 text-white overflow-x-hidden">
        <main className="flex-grow container mx-auto p-4 md:p-8 bg-black text-green-400 font-mono shadow-lg rounded-md max-w-4xl">
          {!accessGranted ? (
            <>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400 text-center">
                Welcome to NullShift.xyz
              </h1>

              <p className="mb-6 text-lg leading-relaxed text-justify">
                NullShift.xyz is the hub for innovation in blockchain,
                cryptocurrency, NFTs, and decentralized technologies. Our
                mission is to explore the frontiers of tech, experimenting with
                decentralized systems and engaging with the latest in digital
                assets.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
                  Our Passion for Technology
                </h2>
                <p className="mb-4 leading-relaxed">
                  At NullShift, we love the potential of blockchain technology.
                  From Bitcoin to Ethereum, and Solana to NFTs, we embrace the
                  future of decentralized technologies and the communities they
                  create.
                </p>
                <p className="mb-4 leading-relaxed">
                  Cryptocurrencies like Bitcoin and Ethereum have revolutionized
                  finance. Solana and other blockchains are pushing the
                  boundaries of speed, scalability, and interoperability. We&apos;re
                  passionate about exploring and experimenting with these
                  technologies in real-time.
                </p>
                <p className="mb-4 leading-relaxed">
                  Whether it&apos;s building decentralized applications (dApps),
                  creating NFTs, or contributing to the blockchain ecosystem,
                  NullShift is here to learn and grow with the technology that
                  is reshaping our world.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
                  Enter the Password to Unlock More
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                  To continue exploring the inner workings of NullShift.xyz and
                  access our secret content, please enter the password below:
                </p>

                <form
                  onSubmit={handlePasswordSubmit}
                  className="flex flex-col items-center space-y-4"
                >
                  <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="p-2 bg-gray-800 text-white rounded-md w-1/2 sm:w-1/3"
                    required
                  />
                  {errorMessage && (
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                  )}
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded transition-all duration-300"
                  >
                    Enter
                  </button>
                </form>
              </section>
            </>
          ) : (
            <div className="text-center mt-8">
              <h2 className="text-3xl text-yellow-400">
                Welcome to the Secret Files Area
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                You have unlocked access to our exclusive content. Explore the
                secrets of NullShift.xyz.
              </p>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default About;
