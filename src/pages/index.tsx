import Head from 'next/head';
import React, { useState } from 'react';
import config from '../../config.json';
import { Input } from '../components/input';
import { useHistory } from '../components/history/hook';
import { History } from '../components/history/History';
import { banner } from '../utils/bin';
import Link from 'next/link';

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  const containerRef = React.useRef(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const [currentInput, setCurrentInput] = useState(''); // Separate state for the current input

  const init = React.useCallback(() => setHistory(banner()), []);

  React.useEffect(() => {
    init();
  }, [init]);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const availableCommands = config.commands;

    if (cmd === 'help') {
      const helpList = availableCommands
        .map((command) => `- ${command.name}: ${command.description}`)
        .join('\n');
      setHistory(`${history}\n\nAvailable commands:\n${helpList}`);
    } else if (cmd === 'clear') {
      setHistory(''); // Clears the terminal screen
    } else {
      const foundCommand = availableCommands.find((command) => command.name === cmd);
      if (foundCommand) {
        setHistory(`${history}\n\n${foundCommand.details || foundCommand.description}`);
      } else {
        setHistory(`${history}\n\nCommand '${cmd}' not recognized. Type 'help' for a list of commands.`);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim() === '') return;

    // Process the command
    setHistory(`${history}\n\n> ${currentInput}`);
    handleCommand(currentInput.trim());

    // Clear the current input
    setCurrentInput('');
  };

  return (
    <>
      <Head>
        <title>{config.title}</title>
      </Head>

      {/* Header */}
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
        {/* Left Link */}
        <Link href="https://nullshift.xyz" className="text-white text-lg font-bold hover:underline">
          nullshift.xyz
        </Link>

        {/* Right Button */}
        <Link
          href="/page"
          className="bg-light-yellow dark:bg-dark-yellow text-black py-2 px-4 rounded hover:bg-yellow-600 transition"
        >
          Connect
        </Link>
      </header>

      {/* Main Content */}
      <main className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />

          <form onSubmit={handleSubmit}>
            <span>visitor@nullshift:$ ~ </span>
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              className="bg-black text-green-400 border-none focus:outline-none"
              autoFocus
            />
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#FF80AB] text-white p-4 text-center">
        <p>&copy; 2025 NullShift. All Rights Reserved.</p>
        <Link href="/terms" className="text-light-yellow dark:text-dark-yellow underline hover:text-yellow-600">
          Terms & Conditions
        </Link>
      </footer>
    </>
  );
};

export default IndexPage;
