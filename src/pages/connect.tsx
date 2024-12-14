import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Connect: React.FC = () => {
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [currentLevel, setCurrentLevel] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const commands = {
    1: {
      prompt: "Level 1: Hack into the server by typing 'connect'.",
      response: "You are now connected to the server! Proceed to level 2 by typing 'next'.",
      nextLevelCommand: 'next',
    },
    2: {
      prompt: "Level 2: Decrypt the message by typing 'decrypt'.",
      response: "Message decrypted: 'NullShift is awesome!' Proceed to level 3 by typing 'advance'.",
      nextLevelCommand: 'advance',
    },
    3: {
      prompt: "Level 3: Gain root access by typing 'sudo root'.",
      response: "Access granted. A clue appears: 'Follow the white rabbit'. Type 'rabbit' to proceed.",
      nextLevelCommand: 'rabbit',
    },
    4: {
      prompt: "Level 4: A mysterious message appears. Type 'unlock' to reveal the next clue.",
      response: "The clue says: '42 is the answer to everything'. Solve the equation: '6 x 7'.",
      nextLevelCommand: '42',
    },
    5: {
      prompt: "Level 5: You've reached a digital labyrinth. Decode 'Y29ubmVjdA==' (Base64).",
      response: "Decoded: 'connect'. Type 'connect' to escape.",
      nextLevelCommand: 'connect',
    },
    6: {
      prompt: "Level 6: You've found the Easter Egg! Type 'celebrate' to complete the game.",
      response: "Congratulations! You have uncovered the Easter Egg and completed the game!",
      nextLevelCommand: 'celebrate',
    },
  };

  const addOutput = (output: string) => {
    setTerminalOutput((prev) => [...prev, output]);
  };

  const handleCommand = (command: string) => {
    const levelCommands = commands[currentLevel];

    if (command === 'help') {
      addOutput('Available commands: help, clear, ' + (levelCommands.nextLevelCommand || 'none'));
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
      <Head>
        <title>Connect - NullShift Terminal</title>
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-lg font-bold">
              nullshift.xyz
            </Link>
          </div>
        </header>

        {/* Terminal Body */}
        <main className="flex-grow container mx-auto p-8 bg-black text-green-400 font-mono">
          {terminalOutput.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap">
              {line}
            </div>
          ))}

          {!isGameOver && (
            <form onSubmit={handleInput} className="mt-4">
              <span>$ </span>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="bg-black text-green-400 border-none focus:outline-none"
              />
            </form>
          )}

          {isGameOver && <div className="mt-4">Congratulations! You have completed the game!</div>}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2025 NullShift. All Rights Reserved.</p>
          <Link href="/terms" className="text-light-yellow dark:text-dark-yellow underline hover:text-yellow-600">
            Terms & Conditions
          </Link>
        </footer>
      </div>
    </>
  );
};

export default Connect;
