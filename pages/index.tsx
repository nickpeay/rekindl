import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Button from '../components/ui/button';
import Hero from '../components/ui/hero';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rekindl21</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.hero}>
        {/* <div className={styles.bgImage}>
          <img src='/img/hero.png' alt='Rekindl21' />
        </div> */}
        <Hero>
          <div>
            <img src='/img/hero1.jpg' alt='' />
            <img src='/img/hero2.jpg' alt='' />
            <img src='/img/hero3.jpg' alt='' />
            <img src='/img/hero4.jpg' alt='' />
            <img src='/img/hero5.jpg' alt='' />
          </div>
        </Hero>
        <h1>
          Enrich your life by
          <br />
          <span>Rekindl</span>ing relationships.
        </h1>
        <Button>
          <Link href='about'>
            <a>Start here</a>
          </Link>
        </Button>
      </div>

      <div className={styles.hero2}>
        <div></div>
        <div>
          <h2>
            In just 21 days,
            <br />
            make connecting a habit.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sit amet erat porttitor, eleifend odio auctor, gravida tellus. Nunc
            sollicitudin ex odio, vitae pulvinar nulla suscipit vitae.
            Suspendisse et rutrum mi. Pellentesque rutrum ac dolor ut porta.
            Quisque et mollis purus. Duis semper porttitor finibus.
          </p>
          <Button>
            <Link href='about'>
              <a>Learn how</a>
            </Link>
          </Button>
        </div>
      </div>

      <div className={styles.hero3}>
        <h2>Form a deeper connection with Rekindl21.</h2>
        <Button>
          <Link href='about'>
            <a>Start now</a>
          </Link>
        </Button>
      </div>

      <div className={styles.contact}>
        <div>
          <form action=''>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <textarea
              name='Message'
              id=''
              cols={30}
              rows={10}
              placeholder='Message'></textarea>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
