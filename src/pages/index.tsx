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

      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-2xl bg-black text-green-400 font-mono p-6 md:p-8 rounded-lg shadow-lg">
          <div
            ref={containerRef}
            className="overflow-y-auto h-96 border-2 border-gray-800 rounded-lg p-4"
          >
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
          <div className="mt-4 text-center">
            <p>Want to play a game and gain root access to the terminal?</p>
            <Link href="/game">
              <span className="text-yellow-400 underline hover:text-yellow-600 cursor-pointer">
                Terminal Root Access Game
              </span>
            </Link>
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

export default Index;
