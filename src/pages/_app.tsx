import React from 'react';
import '../styles/global.css';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef(null);

  const onClickAnywhere = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <div
        className="text-light-foreground dark:text-dark-foreground min-h-screen w-full"
        onClick={onClickAnywhere}
      >
        <main className="bg-light-background dark:bg-dark-background min-h-screen w-full flex flex-col">
          <Component {...pageProps} inputRef={inputRef} />
        </main>
      </div>
    </>
  );
};

export default App;
