import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

import Banner from '../components/banner/banner';
import Card from '../components/card/card';

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log('Hi banner');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Coffe Connoissueur</h1>
        <Banner
          buttonText='View stores nearby'
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image src='/static/hero-image.png' width={700} height={400} />
        </div>

        <Card
          name='bread Coffee'
          imgUrl='/static/hero-image.png'
          href='/coffee-store/bread-coffee'
        />
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
