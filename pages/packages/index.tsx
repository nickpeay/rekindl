import { NextPage } from 'next';
import clientPromise from '../../lib/mongodb';

interface rekidl21Package {
  _id: string;
  title: string;
  description: string;
  cost: number;
}

const Packages: NextPage = ({ packages }) => {
  return (
    <div>
      <h1>Packages</h1>
      <div>
        <ul>
          {packages.map((pack: rekidl21Package) => (
            <li key={pack._id}>
              <h2>{pack.title}</h2>
              <h3>{pack.description}</h3>
              <p>Cost: ${pack.cost}</p>
            </li>
          ))}
        </ul>
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
