import type { AppProps } from 'next/app';
import Router from 'next/router';
import Layout from '../components/layout/layout';
import NProgress from 'nprogress/nprogress';

import '../styles/globals.scss';
import '../styles/nprogress.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
