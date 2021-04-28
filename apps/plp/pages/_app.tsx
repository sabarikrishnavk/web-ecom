import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import {Header, HeaderProps}  from '@ecom/header'; 
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to plp!</title>
      </Head>
      <div className="app">
        <header className="flex">
          <Header ></Header>  
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
