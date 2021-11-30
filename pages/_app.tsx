import type { AppProps } from 'next/app';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'antd/dist/antd.css';

import Footer from '../components/Footer';

import '../styles/globals.css';
import styles from '../styles/_app.module.scss';

dayjs.locale('zh-cn');

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default MyApp;
