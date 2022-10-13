import { NextComponentType } from 'next';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.scss';

const NavBar: NextComponentType = () => {
  return (
    <div className={styles.navbar}>
      <Link href='/'>
        <img className={styles.logo} src='/img/logo.png' alt='' />
      </Link>
      <nav className={styles.nav}>
        <ul>
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
      </nav>
    </div>
  );
};

export default NavBar;
