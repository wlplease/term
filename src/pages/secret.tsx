import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import { useRouter } from 'next/router';

const Secret: React.FC = () => {
  const [level, setLevel] = useState(1);
  const [passwords, setPasswords] = useState({
    level1: '',
    level2: '',
    level3: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const router = useRouter();

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    level: number,
  ) => {
    setPasswords((prev) => ({ ...prev, [`level${level}`]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPasswords = {
      level1: 'moonlight42',
      level2: 'harderToCrack3',
      level3: 'encryptedSuperSecret987!',
    };

    if (level === 1 && passwords.level1 === correctPasswords.level1) {
      setLevel(2);
      setErrorMessage('');
    } else if (level === 2 && passwords.level2 === correctPasswords.level2) {
      setLevel(3);
      setErrorMessage('');
    } else if (level === 3 && passwords.level3 === correctPasswords.level3) {
      setAccessGranted(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Incorrect password. Try again!');
    }
  };

  const clues = {
    level1:
      'Clue 1: The first password is something that shines bright in the night sky. Think about how we feel in the dark.',
    level2:
      'Clue 2: The second password is related to the idea of difficulty, but with an additional challenge.',
    level3:
      'Clue 3: The final password involves a symbol of secrecy and protection, with numbers for extra complexity.',
  };

  return (
    <>
      <Head>
        <title>Secret - NullShift.xyz</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Header />
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-3xl bg-black text-green-400 font-mono p-6 rounded-lg shadow-lg">
          {!accessGranted ? (
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400 text-center">
                The Mystery Awaits...
              </h1>
              <p className="mb-6 text-lg leading-relaxed text-center">
                You&apos;ve stumbled upon a secret. To access the hidden world,
                you need to solve the password puzzle.
              </p>
              {level === 1 && (
                <div>
                  <p className="mb-4 text-lg">{clues.level1}</p>
                  <form
                    onSubmit={handleFormSubmit}
                    className="flex flex-col items-center space-y-4"
                  >
                    <input
                      type="text"
                      placeholder="Enter first password"
                      value={passwords.level1}
                      onChange={(e) => handlePasswordChange(e, 1)}
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
                      Submit Guess
                    </button>
                  </form>
                </div>
              )}
              {level === 2 && (
                <div>
                  <p className="mb-4 text-lg">{clues.level2}</p>
                  <form
                    onSubmit={handleFormSubmit}
                    className="flex flex-col items-center space-y-4"
                  >
                    <input
                      type="text"
                      placeholder="Enter second password"
                      value={passwords.level2}
                      onChange={(e) => handlePasswordChange(e, 2)}
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
                      Submit Guess
                    </button>
                  </form>
                </div>
              )}
              {level === 3 && (
                <div>
                  <p className="mb-4 text-lg">{clues.level3}</p>
                  <form
                    onSubmit={handleFormSubmit}
                    className="flex flex-col items-center space-y-4"
                  >
                    <input
                      type="text"
                      placeholder="Enter final password"
                      value={passwords.level3}
                      onChange={(e) => handlePasswordChange(e, 3)}
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
                      Submit Guess
                    </button>
                  </form>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center mt-8">
              <h2 className="text-3xl text-yellow-400">
                You Found the Secret!
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Congratulations! You have unlocked the final secret.
              </p>
              <p className="mt-4 text-lg text-gray-400">
                As a reward, check out this exclusive content:
              </p>
              <Link
                href="https://opensea.io/assets/base/0xca6dbfdb25a2d24247c89b4d79010753d193a0c5/2"
                className="text-yellow-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View the exclusive content on OpenSea
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Secret;
