import { NextPage } from 'next';
import Hero from '../components/ui/hero';

import styles from '../styles/Home.module.scss';

const About: NextPage = () => {
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
        <h1>About</h1>
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

        <p>
          Facilisis gravida neque convallis a cras semper auctor neque.
          Suspendisse interdum consectetur libero id faucibus nisl tincidunt.
          Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Egestas
          pretium aenean pharetra magna ac placerat vestibulum lectus mauris. A
          diam sollicitudin tempor id. Quisque sagittis purus sit amet volutpat
          consequat. Rutrum quisque non tellus orci ac auctor augue mauris.
          Risus quis varius quam quisque id diam vel quam elementum. Velit
          aliquet sagittis id consectetur. Urna porttitor rhoncus dolor purus
          non enim. In fermentum et sollicitudin ac. Enim diam vulputate ut
          pharetra sit amet aliquam id. Egestas sed sed risus pretium quam
          vulputate. Consectetur lorem donec massa sapien faucibus et molestie.
          Phasellus vestibulum lorem sed risus ultricies tristique nulla. Vitae
          semper quis lectus nulla at volutpat diam ut venenatis.
        </p>

        <p>
          Feugiat in ante metus dictum at tempor commodo ullamcorper. Blandit
          turpis cursus in hac habitasse platea dictumst quisque sagittis. Orci
          phasellus egestas tellus rutrum tellus pellentesque. Congue mauris
          rhoncus aenean vel. Mi quis hendrerit dolor magna eget est lorem.
          Tincidunt vitae semper quis lectus nulla at volutpat diam. Est velit
          egestas dui id ornare arcu odio. A diam maecenas sed enim ut sem. Quam
          lacus suspendisse faucibus interdum posuere lorem ipsum. Aliquam ut
          porttitor leo a diam sollicitudin tempor id. Faucibus et molestie ac
          feugiat sed. Feugiat scelerisque varius morbi enim nunc faucibus a
          pellentesque. In fermentum et sollicitudin ac orci phasellus egestas.
        </p>
      </div>
    </div>
  );
};

export default About;
