import { NextPage } from 'next';
import Hero from '../components/ui/hero';
import Button from '../components/ui/button';

import styles from '../styles/Home.module.scss';

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Hero>
          <div>
            <img src='/img/hero3.jpg' alt='' />
            <img src='/img/hero4.jpg' alt='' />
            <img src='/img/hero5.jpg' alt='' />
          </div>
        </Hero>
        <h1>Contact</h1>
      </div>

      <div className={styles.row}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
          egestas purus viverra accumsan in nisl. Montes nascetur ridiculus mus
          mauris vitae ultricies leo integer malesuada. Tempor orci eu lobortis
          elementum nibh. Dis parturient montes nascetur ridiculus mus. Vitae
          proin sagittis nisl rhoncus mattis rhoncus urna. Sit amet mauris
          commodo quis imperdiet massa tincidunt. Nunc sed blandit libero
          volutpat sed. Vitae proin sagittis nisl rhoncus mattis. Sociis natoque
          penatibus et magnis dis parturient. Et odio pellentesque diam volutpat
          commodo. Sed faucibus turpis in eu mi bibendum. Ut ornare lectus sit
          amet est placerat in egestas. Risus viverra adipiscing at in tellus
          integer feugiat. Est ultricies integer quis auctor elit sed. Turpis
          cursus in hac habitasse platea dictumst. Mauris sit amet massa vitae
          tortor condimentum lacinia.
        </p>

        <div className={styles.contact}>
          <form action=''>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <textarea
              name='Message'
              id=''
              cols={30}
              rows={10}
              placeholder='Message'></textarea>
            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
