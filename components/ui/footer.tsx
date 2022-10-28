import { NextComponentType } from 'next';
import Link from 'next/link';

import styles from '../../styles/Home.module.scss';

const Footer: NextComponentType = () => {
  return (
    <footer className={styles.footer}>
      <Link href='/'>
        <img src='/img/logo.png' alt='' />
      </Link>
      <ul className={styles.footerNav}>
        <li>
          <Link href='about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='contact'>
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href='login'>
            <a>Sign In</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
