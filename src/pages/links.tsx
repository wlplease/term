import Head from 'next/head';
import React from 'react';
import Link from 'next/link';

const LinksPage: React.FC = () => {
  const links = [
    { name: 'NullShift', url: 'https://nullshift.xyz' },
    { name: 'GitHub', url: 'https://github.com/wlplease/term' },
    { name: 'Next.js Documentation', url: 'https://nextjs.org/docs' },
    { name: 'React Official Website', url: 'https://reactjs.org/' },
    { name: 'TailwindCSS Documentation', url: 'https://tailwindcss.com/' },
  ];

  return (
    <>
      <Head>
        <title>Links - NullShift</title>
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
        <h1 className="text-2xl font-bold mb-4">Useful Links</h1>
        <ul className="list-disc pl-5 space-y-2">
          {links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
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

export default LinksPage;
