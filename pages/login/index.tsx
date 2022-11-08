import { NextPage } from 'next';
import Button from '../../components/ui/button';

import styles from './Login.module.scss';

const Login: NextPage = () => {
  return (
    <div className='container'>
      <div className={styles.login}>
        <h1>Login</h1>

        <div className={styles.form}>
          <form action=''>
            <input type='text' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <Button>Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
