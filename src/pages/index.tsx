import Head from 'next/head';
import React, { useEffect, useCallback } from 'react';
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

  const init = useCallback(() => {
    setHistory(banner());
  }, [setHistory]);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history, inputRef]);

  const handleCommand = (cmd: string) => {
    if (!cmd.trim()) return;

    // Match against commands from config.json
    const availableCommands = config.commands;
    const foundCommand = availableCommands.find((command) => command.name === cmd);

    if (cmd === 'help') {
      // Display the list of available commands dynamically
      const helpList = availableCommands
        .map((command) => `- ${command.name}: ${command.description}`)
        .join('\n');
      setHistory((prev) => `${prev}\n\nAvailable commands:\n${helpList}`);
    } else if (cmd === 'clear') {
      // Clear terminal history
      setHistory('');
    } else if (cmd === 'dashboard') {
      // Display a dashboard summary (example content)
      setHistory((prev) => `${prev}\n\nDashboard Summary:\nWelcome to Jeff's dashboard! Here you'll find insights, analytics, and project updates.`);
    } else if (foundCommand) {
      // Display the matched command's details or description
      setHistory((prev) => `${prev}\n\n${foundCommand.details || foundCommand.description}`);
    } else {
      // Handle unknown commands
      setHistory((prev) => `${prev}\n\nCommand '${cmd}' not recognized. Type 'help' for a list of commands.`);
    }
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
          href="/connect"
          className="bg-light-yellow dark:bg-dark-yellow text-black py-2 px-4 rounded hover:bg-yellow-600 transition"
        >
          Connect
        </Link>
      </header>

      {/* Main Content */}
      <main className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />

          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={(cmd) => {
              setCommand(cmd);
              handleCommand(cmd);
            }}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
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