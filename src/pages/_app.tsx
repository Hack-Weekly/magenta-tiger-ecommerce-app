import GlobalStyle from '@/styles/GlobalStyle';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>TigerTrade</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
