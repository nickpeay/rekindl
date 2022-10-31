import { NextPage } from 'next';
import Button from '../components/ui/button';

import styles from '../styles/Home.module.scss';

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Login</h1>

      <div className={styles.contact}>
        <form action=''>
          <input type='text' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
