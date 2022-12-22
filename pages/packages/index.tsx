import { NextPage } from 'next';
import clientPromise from '../../lib/mongodb';

import Card from '../../components/ui/card';

import styles from './Packages.module.scss';

interface rekidl21Package {
  _id: string;
  title: string;
  description: string;
  cost: number;
}

const Packages: NextPage = ({ packages }: any) => {
  return (
    <div className='container'>
      <div className='row'>
        <section className={styles.section}>
          <h1>Rekindl21 Packages</h1>
          <div>
            <div>
              {packages.map((pack: rekidl21Package) => (
                // <li key={pack._id}>

                // </li>
                <Card id={pack._id} pack={pack} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db('rekindl21');

    const packages = await db.collection('packages').find({}).toArray();

    return {
      props: {
        packages: JSON.parse(JSON.stringify(packages)),
      },
    };
  } catch (e) {
    console.error(e);
  }
}

export default Packages;
