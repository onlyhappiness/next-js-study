import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

function article({ article }) {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default article;
