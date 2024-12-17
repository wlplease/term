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
                Meet Jeff - Tech Explorer & Creator
              </h1>

              <p className="mb-6 text-lg leading-relaxed text-justify">
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
                <p className="mb-4 leading-relaxed">
                  My curiosity for technology started early. Over the years,
                  I’ve honed my skills and explored:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    **Coding and Development**: I’ve built everything from web
                    applications to interactive terminal tools.
                  </li>
                  <li>
                    **Blockchain & Crypto**: Whether analyzing on-chain data,
                    minting NFTs, or developing decentralized tools, I’m
                    constantly pushing boundaries.
                  </li>
                  <li>
                    **3D Printing and DIY Projects**: Building physical
                    creations that bring ideas to life.
                  </li>
                  <li>
                    **Drones and Gadgets**: I’m always finding ways to make tech
                    fun and experiential.
                  </li>
                </ul>
                <p className="mt-4 leading-relaxed">
                  I believe technology is about creation, exploration, and
                  community—it’s the perfect mix of art and science.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
                  More Than Tech
                </h2>
                <p className="mb-4 leading-relaxed">
                  Outside of building and coding, I’m a big advocate of
                  balancing work with life’s joys:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Exploring the outdoors and flying drones.</li>
                  <li>
                    Watching and playing sports (tennis, water sports—you name
                    it!).
                  </li>
                  <li>Traveling and experiencing different cultures.</li>
                  <li>
                    Sharing laughs and good times with friends and family.
                  </li>
                </ul>
                <p className="mt-4 leading-relaxed">
                  Life is all about finding the right balance between building,
                  creating, and enjoying the moment.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
                  Why NullShift.xyz?
                </h2>
                <p className="mb-4 leading-relaxed">
                  NullShift isn’t just another tech site. It’s a space where I
                  share my journey, projects, and ideas. Whether you’re here to
                  explore the latest blockchain tools, learn something new, or
                  just vibe with me—this place is for you.
                </p>
                <p className="leading-relaxed">
                  I believe in creating with purpose, innovating boldly, and
                  sharing knowledge to inspire others.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
                  Join the Journey
                </h2>
                <p className="mb-4 leading-relaxed">
                  Want to unlock exclusive content and dive deeper into what
                  makes NullShift.xyz special? Enter the password below to join
                  the club:
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
