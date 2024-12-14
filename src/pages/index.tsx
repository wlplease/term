import Head from 'next/head';
import React from 'react';
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

  return (
    <>
      <Head>
        <title>{config.title}</title>
      </Head>

      {/* Header */}
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
        {/* Left Link */}
        <Link href="/" className="text-white text-lg font-bold">
          nullshift.xyz
        </Link>

        {/* Right Button */}
        <Link
          href="/page"
          className="bg-light-yellow dark:bg-dark-yellow text-black py-2 px-4 rounded hover:bg-yellow-600 transition"
        >
          Go to Page
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 NullShift. All Rights Reserved.</p>
        <Link href="/terms" className="text-light-yellow dark:text-dark-yellow underline hover:text-yellow-600">
          Terms & Conditions
        </Link>
      </footer>
    </>
  );
};

export default IndexPage;
