import React, { useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link'; // Ensure this import is present
import config from '../../config.json';
import { Input } from '../components/input';
import { useHistory } from '../components/history/hook';
import { History } from '../components/history/History';
import { banner } from '../utils/bin';
import Header from '../components/header';
import Footer from '../components/footer';

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

      <Header />

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

      <div className="mt-4 text-center">
        <p>Want to play a game and gain root access to the terminal?</p>
        <Link
          href="/game"
          className="text-light-yellow dark:text-dark-yellow underline hover:text-yellow-600 cursor-pointer"
        >
          Terminal Root Access Game
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Index;
