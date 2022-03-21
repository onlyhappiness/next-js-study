// TODO: 만약 React라면?
// react helmet을 통해 head를 관리
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Seo from '../components/Seo';

export default function Home({ results }) {
  const router = useRouter();

  // const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

  // console.log('어디서 나옴?', results);

  return (
    <div className='container'>
      <Seo title='Home' />
      {/* {!movies && <h4>Loading..</h4>} */}
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className='movie'
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// TODO: Server-Side-Rendering
// 이 함수는 object를 return
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();

  return {
    props: {
      results,
    },
  };
}
