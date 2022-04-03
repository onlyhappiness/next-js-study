import { useRouter } from 'next/router';
import Link from 'next/link';

const CoffeeStore = () => {
  const router = useRouter();
  console.log('router', router);

  return (
    <div>
      Coffee Store Page {router.query.id}
      <Link href='/'>
        <a>Back to home</a>
      </Link>
      <Link href='/coffee-stote/dynamic'>
        <a>Back to Dynamic</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
