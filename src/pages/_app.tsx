import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/globals";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project started to work with typescriplt"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
