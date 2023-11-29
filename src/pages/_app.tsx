import './globals.css'
import { AppProps } from 'next/app';
import Header from '@components/molecular/header';
import Footer from '@components/molecular/footer';
import styles from './app.module.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
