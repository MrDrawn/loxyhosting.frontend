import type {AppProps} from 'next/app';

import {ChakraProvider, useColorModeValue} from '@chakra-ui/react';

import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import AOS from 'aos';

import '@styles/globals.scss';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({Component, pageProps}: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  <style>
    {`
     .body {
        background: ${useColorModeValue('rgb(255, 255, 255)', 'rgb(45, 55, 72)')}
     } 
    `}
  </style>;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <base href="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,nofollow" />
        <meta name="author" content="Moonkode (moonkode.com)" />
        <meta name="copyright" content="Moonkode" />
        <meta name="designer" content="Moonkode (moonkode.com)" />
        <meta name="description" content={process.env.description} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={process.env.name} />
        <meta property="og:description" content={process.env.description} />
        <meta property="og:url" content={process.env.root} />
        <meta property="og:site_name" content={process.env.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={process.env.description} />
        <meta name="twitter:title" content={process.env.name} />
        <meta name="twitter:site" content={process.env.root} />
        <meta property="og:image" content="logo.png" />
        <link rel="shortcut icon" href="logo.png" />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
