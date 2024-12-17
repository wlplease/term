import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import config from '../../config.json';
import { Input } from '../components/input';
import { useHistory } from '../components/history/hook';
import { History } from '../components/history/History';
import { banner } from '../utils/bin';
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

  const commands: {
    [key: string]: (args?: string[]) => Promise<string> | string;
  } = {
    help: async () =>
      'Available commands: help, about, dashboard, clear, contact, github, linkedin, date, echo [text]',
    about: async () => await (await fetch('/about')).text(),
    dashboard: async () =>
      `Welcome ${
        userName || 'visitor'
      }! Use available tools for insights, tech exploration, and community updates.`,
    clear: async () => {
      setLines([]);
      return '';
    },
    contact: async () => `Email: nullshiftxyz@gmail.com`,
    github: async () =>
      `GitHub: https://github.com/${config.social.github || ''}`,
    linkedin: async () =>
      `LinkedIn: https://linkedin.com/in/${config.social.linkedin || ''}`,
    date: async () => new Date().toString(),
    echo: async (args: string[]) =>
      args.join(' ') || 'Echo requires some text.',
  };

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
      addToQueue(`Loading your personalized terminal...`);
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
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-3xl bg-black text-green-400 font-mono p-6 rounded-lg shadow-lg">
          <div
            ref={containerRef}
            className="overflow-y-auto h-96 border-2 border-gray-800 rounded-lg p-4 terminal"
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
      <style jsx>{`
        .terminal {
          font-family: 'Hack', monospace;
          line-height: 1.4;
          color: #0f0;
          background-color: #000;
        }

        .blinking-cursor {
          display: inline-block;
          width: 8px;
          height: 1em;
          background-color: #0f0;
          margin-left: 4px;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .input-line {
          display: flex;
          align-items: center;
        }

        .prompt {
          color: #0f0;
          margin-right: 4px;
        }

        .input-field {
          background: transparent;
          border: none;
          outline: none;
          color: #0f0;
          font-family: 'Hack', monospace;
          caret-color: #0f0;
          flex-grow: 1;
        }

        .h-96 {
          height: 24rem;
        }
      `}</style>
    </>
  );
};

export default Index;
