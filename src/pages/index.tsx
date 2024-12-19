import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import config from '../../config.json';
import { banner } from '../utils/bin';
import * as commands from '../utils/bin/commands';
import Header from '../components/header';
import Footer from '../components/footer';

const Index: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [inputActive, setInputActive] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [inputQueue, setInputQueue] = useState<string[]>([]);
  const [introState, setIntroState] = useState<'waitingForName' | 'completed'>(
    'waitingForName',
  );
  const [userName, setUserName] = useState<string | null>(null);

  const introLines = [
    'Initializing NullShift Terminal...',
    'Loading resources...',
    'Connecting to NullShift Network...',
    '',
    'Welcome to NullShift!',
    'What is your name?',
  ];

  const systemBanner = banner().split('\n');

  const addToQueue = (line: string) => {
    setInputQueue((prev) => [...prev, line]);
  };

  const typeOutLines = async () => {
    while (inputQueue.length > 0) {
      const nextLine = inputQueue.shift() as string;
      for (let i = 0; i <= nextLine.length; i++) {
        setCurrentLine(nextLine.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 25));
      }
      setLines((prev) => [...prev, nextLine]);
      setCurrentLine('');
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    setInputActive(true);
  };

  const processInput = async (input: string) => {
    const [command, ...args] = input.trim().split(' ');

    if (introState === 'waitingForName') {
      setUserName(input.trim());
      addToQueue(`Hello, ${input.trim()}!`);
      addToQueue('Loading your personalized terminal...');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setInputQueue([...systemBanner, 'Type "help" to get started.']);
      setIntroState('completed');
      return;
    }

    setLines((prev) => [...prev, `> ${input}`]);
    setInputActive(false);

    if (commands[command]) {
      const output = await commands[command](args);
      if (output) addToQueue(output);
    } else {
      addToQueue(
        `Command not found: "${command}". Type "help" for available commands.`,
      );
    }
  };

  useEffect(() => {
    setInputQueue(introLines);
  }, []);

  useEffect(() => {
    if (inputQueue.length > 0) {
      typeOutLines();
    }
  }, [inputQueue]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines, currentLine]);

  return (
    <>
      <Head>
        <title>{config.title}</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="intro-message mb-4 text-green-400 font-mono text-center text-base sm:text-lg px-2 md:px-4">
          <p>
            Hi, I am Jeff—a creator, builder, and lifelong learner in the world
            of technology, finance, and innovation. My journey is all about
            exploring new frontiers, from developing interactive software to
            diving deep into blockchain and crypto. NullShift.xyz is a
            reflection of my passions and a space to connect with like-minded
            enthusiasts.
          </p>
        </div>
        <div className="w-full max-w-3xl bg-black bg-opacity-80 text-green-400 font-mono p-4 sm:p-6 rounded-lg shadow-lg">
          <div
            ref={containerRef}
            className="terminal h-auto max-h-[60vh] md:max-h-[70vh] border-2 border-gray-800 rounded-lg p-4 overflow-y-auto"
          >
            {lines.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
            {currentLine && (
              <div>
                {currentLine}
                <span className="blinking-cursor"></span>
              </div>
            )}
            {inputActive && (
              <div className="input-line">
                <span className="prompt">&gt; </span>
                <input
                  type="text"
                  className="input-field"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      processInput(userInput);
                      setUserInput('');
                    }
                  }}
                  autoFocus
                />
                <span className="blinking-cursor"></span>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
