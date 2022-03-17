import { useRouter } from 'next/router';
import Seo from '../../components/Seo';

export default function Detail({ params }) {
  const router = useRouter();

  // TODO: 이렇게 해줘야 에러가 없어짐
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
