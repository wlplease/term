import React, { useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import config from '../../config.json';
import { Input } from '../components/input';
import { useHistory } from '../components/history/hook';
import { History } from '../components/history/History';
import { banner } from '../utils/bin';

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const Index: React.FC<IndexPageProps> = ({ inputRef }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = useCallback(() => setHistory(banner()), [setHistory]);

  useEffect(() => {
    if (history.length === 0) {
      init();
    }
  }, [init, history]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: 'smooth' });
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history, inputRef]);

  return (
    <>
      <Head>
        <title>{config.title}</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <Link
          href="https://nullshift.xyz"
          className="text-white text-lg font-bold hover:underline cursor-pointer"
        >
          nullshift.xyz
        </Link>
        <Link
          href="/connect"
          className="bg-light-yellow dark:bg-dark-yellow text-black py-2 px-4 rounded hover:bg-yellow-600 transition cursor-pointer"
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
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </main>

      {/* Game Link */}
      <div className="mt-4 text-center">
        <p>Want to play a game and gain root access to the terminal?</p>
        <Link
          href="/game"
          className="text-light-yellow dark:text-dark-yellow underline hover:text-yellow-600 cursor-pointer"
        >
          Game
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-[#FF80AB] text-white p-4 text-center">
        <p>&copy; 2025 NullShift. All Rights Reserved.</p>
        <Link
          href="/terms"
          className="text-light-yellow dark:text-dark-yellow underline hover:text-yellow-600 cursor-pointer"
        >
          Terms & Conditions
        </Link>
      </footer>
    </>
  );
};

export default Index;
