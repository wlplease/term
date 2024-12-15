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

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
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

  // Initialize history with the banner
  const init = useCallback(() => setHistory(banner()), [setHistory]);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history, inputRef]);

  return (
    <>
      <Head>
        <title>{config.title}</title>
      </Head>

      {/* Header */}
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <Link href="https://nullshift.xyz">
          <span className="text-white text-lg font-bold hover:underline">
            nullshift.xyz
          </span>
        </Link>
        <Link href="/connect">
          <span className="bg-light-yellow dark:bg-dark-yellow text-black py-2 px-4 rounded hover:bg-yellow-600 transition">
            Connect
          </span>
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

        {/* Game Link */}
        <div className="mt-4 text-center">
          <p>Want to play a game and gain root access to the terminal?</p>
          <Link href="/game">
            <span className="text-light-yellow dark:text-dark-yellow underline hover:text-yellow-600">
              Game
            </span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#FF80AB] text-white p-4 text-center">
        <p>&copy; 2025 NullShift. All Rights Reserved.</p>
        <Link href="/terms">
          <span className="text-light-yellow dark:text-dark-yellow underline hover:text-yellow-600">
            Terms & Conditions
          </span>
        </Link>
      </footer>
    </>
  );
};

export default IndexPage;
