import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const Game: React.FC = () => {
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [currentLevel, setCurrentLevel] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const commands = {
    1: {
      prompt: "Level 1: Hack into the server by typing 'connect'.",
      response:
        "You are now connected to the server! Proceed to level 2 by typing 'next'.",
      nextLevelCommand: 'next',
    },
    2: {
      prompt: "Level 2: Decrypt the message by typing 'decrypt'.",
      response:
        "Message decrypted: 'NullShift is awesome!' Proceed to level 3 by typing 'advance'.",
      nextLevelCommand: 'advance',
    },
    3: {
      prompt: "Level 3: Gain root access by typing 'sudo root'.",
      response:
        "Access granted. A clue appears: 'Follow the white rabbit'. Type 'rabbit' to proceed.",
      nextLevelCommand: 'rabbit',
    },
    4: {
      prompt:
        "Level 4: A mysterious message appears. Type 'unlock' to reveal the next clue.",
      response:
        "The clue says: '42 is the answer to everything'. Solve the equation: '6 x 7'.",
      nextLevelCommand: '42',
    },
    5: {
      prompt:
        "Level 5: You've reached a digital labyrinth. Decode 'Y29ubmVjdA==' (Base64).",
      response: "Decoded: 'connect'. Type 'connect' to escape.",
      nextLevelCommand: 'connect',
    },
    6: {
      prompt:
        "Level 6: You've found the Easter Egg! Type 'celebrate' to complete the game.",
      response:
        'Congratulations! You have uncovered the Easter Egg and completed the game!',
      nextLevelCommand: 'celebrate',
    },
  };

  const addOutput = (output: string) => {
    setTerminalOutput((prev) => [...prev, output]);
  };

  const handleCommand = (command: string) => {
    const levelCommands = commands[currentLevel];

    if (command === 'help') {
      addOutput(
        `Available commands: help, clear, ${
          levelCommands.nextLevelCommand || 'none'
        }`,
      );
    } else if (command === 'clear') {
      setTerminalOutput([]);
    } else if (command === levelCommands.nextLevelCommand) {
      addOutput(levelCommands.response);
      if (currentLevel === 6) {
        setIsGameOver(true);
      } else {
        setCurrentLevel((prev) => prev + 1);
      }
    } else {
      addOutput(`Command not recognized. Try 'help'.`);
    }
  };

  const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    addOutput(`$ ${inputValue}`);
    handleCommand(inputValue.trim());
    setInputValue('');
  };

  useEffect(() => {
    addOutput(commands[currentLevel].prompt);
  }, [currentLevel]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isGameOver]);

  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-x-hidden px-4">
        <div className="w-full max-w-2xl bg-black text-green-400 font-mono p-6 md:p-8 rounded-lg shadow-lg">
          <div className="bg-gray-800 text-white p-4 rounded-t-lg">
            <h1 className="text-center text-lg font-bold">
              <Link href="/">
                <span className="hover:underline cursor-pointer">
                  NullShift Terminal Interface
                </span>
              </Link>
            </h1>
          </div>

          <div className="p-4 overflow-y-auto h-96 border-2 border-gray-800 rounded-b-lg">
            {terminalOutput.map((line, index) => (
              <div key={index} className="whitespace-pre-wrap">
                {line}
              </div>
            ))}

            {!isGameOver && (
              <form onSubmit={handleInput} className="mt-4 flex">
                <span className="text-green-400">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="bg-black text-green-400 border-none flex-1 focus:outline-none ml-2"
                  placeholder="Enter command"
                />
              </form>
            )}

            {isGameOver && (
              <div className="mt-4 text-center text-green-400">
                <p>Congratulations! You have completed the game!</p>
                <Link href="https://opensea.io/assets/base/0xca6dbfdb25a2d24247c89b4d79010753d193a0c5/1/">
                  <span className="text-blue-500 underline hover:text-blue-700 cursor-pointer">
                    View the final clue on Jeffer NFT Mint
                  </span>
                </Link>
                <div className="mt-6">
                  <h3 className="text-lg font-bold mb-2 text-yellow-400">
                    ENTER FOR OUR $J3FF3R EGG TEAM ACCESS
                  </h3>
                  <Link href="/egg">
                    <img
                      src="https://img.freepik.com/premium-vector/cute-angry-half-boiled-egg-character-funny-furious-egg-cartoon-emoticon-flat-style_841552-330.jpg?semt=ais_hybrid"
                      alt="Easter Egg"
                      className="w-40 mx-auto hover:scale-105 transition-transform cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @media (max-width: 768px) {
          .text-lg {
            font-size: 1rem;
          }

          .p-6 {
            padding: 1rem;
          }

          .h-96 {
            height: 75vh;
          }
        }

        @media (max-width: 480px) {
          .text-lg {
            font-size: 0.875rem;
          }

          .p-6 {
            padding: 0.75rem;
          }

          .h-96 {
            height: 60vh;
          }
        }
      `}</style>
    </>
  );
};

export default Game;
