import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DM_Sans } from '@next/font/google';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';

import { wrapper } from '../redux/store';
import Footer from '../containers/footer';
import theme from '../theme';

const sans = DM_Sans({
  weight: ['400', '700'],
  display: 'swap',
});

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <main className={sans.className} id="app">
      <Head>
        <title>Kubefirst React Template</title>
        <link rel="shortcut icon" href="/static/k-ray.svg" />
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      </ThemeProvider>

      <Footer />
    </main>
  );
}
