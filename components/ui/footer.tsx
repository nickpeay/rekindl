import { NextComponentType } from 'next';
import Link from 'next/link';

import styles from '../../styles/Home.module.scss';

const Footer: NextComponentType = () => {
  return (
    <footer className={styles.footer}>
      <Link href='/'>
        <img src='/img/logo.png' alt='' />
      </Link>
    </footer>
  );
};

export default Footer;
