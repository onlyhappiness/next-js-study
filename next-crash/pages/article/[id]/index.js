import React from 'react';
import { useRouter } from 'next/router';

function article() {
  const router = useRouter();
  const { id } = router.query;

  return <div>This is an article {id}</div>;
}

export default article;
