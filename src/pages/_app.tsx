import React, { useEffect, useState } from 'react';
import '../styles/global.css';
import Head from 'next/head';
import Header from '../components/header';

const App = ({ Component, pageProps }: { Component: any; pageProps: any }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') === 'dark';
    setDarkMode(savedTheme);
    document.documentElement.classList.add(savedTheme ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.remove(darkMode ? 'dark' : 'light');
    document.documentElement.classList.add(newMode ? 'dark' : 'light');
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <title>NullShift</title>
      </Head>
      <div
        className={`text-light-foreground dark:text-dark-foreground min-h-screen`}
      >
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <main className="bg-light-background dark:bg-dark-background min-h-screen w-full">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
};

export default App;
