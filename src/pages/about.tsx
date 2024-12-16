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
      </Head>

      <Header />

      <div className="min-h-screen flex flex-col bg-gray-900 text-white overflow-x-hidden">
        <main className="flex-grow container mx-auto p-4 md:p-8 bg-black text-green-400 font-mono shadow-lg rounded-md max-w-4xl">
          {!accessGranted ? (
            <>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400 text-center">
                Welcome to Jeff’s World
              </h1>

              <p className="mb-6 text-lg leading-relaxed text-justify">
                Hey there! I’m Jeff, a tech enthusiast who’s passionate about
                living life to the fullest. From coding and 3D printing to flying
                drones and diving into the world of blockchain, I’m always
                exploring new adventures. Welcome to my personal corner of the
                internet—a hub for creativity, innovation, and fun!
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
                  What I’m All About
                </h2>
                <p className="mb-4 leading-relaxed">
                  I’m all about blending my love for tech and life’s simple
                  joys. Whether I’m:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Experimenting with blockchain and crypto projects.</li>
                  <li>Flying drones like a kid with a new toy.</li>
                  <li>Building cool things with 3D printing tech.</li>
                  <li>Watching sports (water or ball—you name it!).</li>
                  <li>Laughing, living, and embracing the adventure.</li>
                </ul>
                <p className="mt-4 leading-relaxed">
                  I believe life is a mix of passions, community, and good
                  vibes. NullShift.xyz is where all of that comes together!
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
                  A Love for Crypto and Beyond
                </h2>
                <p className="mb-4 leading-relaxed">
                  My journey into the crypto world has been nothing short of
                  thrilling. From diving into NFTs and decentralized apps to
                  exploring innovative blockchain projects, I’m constantly in
                  awe of the limitless possibilities. Crypto is more than tech—
                  it’s a lifestyle.
                </p>
                <p className="leading-relaxed">
                  Whether you’re here for tech insights or just want to vibe
                  with a fellow enthusiast, you’ve come to the right place.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
                  Join the Club
                </h2>
                <p className="mb-4 leading-relaxed">
                  NullShift isn’t just a website—it’s a community. Want to
                  unlock exclusive content and dive deeper into the adventure?
                  Enter the password below and join the club:
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
                Welcome to the Secret Club
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                You’ve unlocked exclusive access! Dive into the fun and see
                what’s next in Jeff’s world.
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
