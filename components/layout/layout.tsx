import Footer from '../ui/footer';
import NavBar from '../ui/navbar';
import styles from '../../styles/Home.module.scss';

const Layout = ({ children }: any) => {
  return (
    <>
      <NavBar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
