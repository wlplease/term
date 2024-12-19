import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/header';
import Footer from '../components/footer';

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
    if (password === 'tfihsllun') {
      setAccessGranted(true);
      router.push('/secretfiles');
    } else {
      setErrorMessage('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <>
      <Head>
        <title>About Jeff - NullShift.xyz</title>
        <link rel="icon" href="/assets/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        <main className="flex-grow container mx-auto px-4 py-6 md:px-8 md:py-12 bg-black text-green-400 font-mono shadow-lg rounded-md max-w-4xl">
          {!accessGranted ? (
            <>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400 text-center">
                Meet Jeff - Tech Explorer & Creator
              </h1>

              <p className="mb-6 text-lg leading-relaxed">
                Hi, I’m Jeff—a creator, builder, and lifelong learner in the
                world of technology, finance, and innovation. My journey is all
                about exploring new frontiers, from developing interactive
                software to diving deep into blockchain and crypto.
                NullShift.xyz is a reflection of my passions and a space to
                connect with like-minded enthusiasts.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
                  My Adventures in Tech
                </h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    **Coding and Development**: Building web applications and
                    interactive tools.
                  </li>
                  <li>
                    **Blockchain & Crypto**: Developing decentralized tools,
                    minting NFTs, and analyzing on-chain data.
                  </li>
                  <li>
                    **3D Printing and DIY Projects**: Creating physical
                    innovations.
                  </li>
                  <li>
                    **Drones and Gadgets**: Making tech fun and experiential.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
                  Why NullShift.xyz?
                </h2>
                <p className="mb-4 leading-relaxed">
                  NullShift isn’t just another tech site—it’s a hub of my
                  projects, explorations, and ideas for like-minded enthusiasts.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
                  Join the Journey
                </h2>
                <p className="mb-4 leading-relaxed">
                  Want exclusive access? Enter the password below:
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
                    className="p-2 bg-gray-800 text-white rounded-md w-full sm:w-1/2 md:w-1/3"
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
                Welcome to the Secret Club
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                You’ve unlocked exclusive access! Explore what’s next in Jeff’s
                world.
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
