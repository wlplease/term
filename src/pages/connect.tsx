import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const ConnectPage: React.FC = () => {
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [currentLevel, setCurrentLevel] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

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
      if (levelCommands.nextLevelCommand === null) {
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

    addOutput(`> ${inputValue}`);
    handleCommand(inputValue.trim());
    setInputValue('');
  };

  useEffect(() => {
    addOutput(commands[currentLevel].prompt);
  }, [currentLevel]);

  return (
    <>
      <Head>
        <title>Connect - NullShift Terminal</title>
      </Head>

      <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col">
        {/* Terminal Header */}
        <header className="bg-gray-900 text-white p-4 text-center text-xl">
          NullShift Terminal Interface
        </header>

        {/* Terminal Body */}
        <main className="flex-grow p-4 overflow-y-auto">
          {terminalOutput.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap">
              {line}
            </div>
          ))}

          {!isGameOver && (
            <form onSubmit={handleInput} className="mt-4">
              <span>$ </span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="bg-black text-green-400 border-none focus:outline-none"
                autoFocus
              />
            </form>
          )}

          {isGameOver && <div className="mt-4">Congratulations! You have completed the game!</div>}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white p-4 text-center">
          &copy; 2025 NullShift. All Rights Reserved.
        </footer>
      </div>
    </>
  );
};

export default ConnectPage;
