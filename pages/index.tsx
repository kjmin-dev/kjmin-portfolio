import { Fragment } from 'react';
import { type NextPage } from 'next';
import Head from 'next/head';
import HeadSection from '../components/main_sections/HeadSection';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Kyoungjun Min</title>
        <meta name="og:url" content="https://kjmin.io" />
        <meta name="og:title" content="Kyoungjun Min Website" />
        <meta name="og:description" content="Developer Kyoungun Min (kjmin)" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
      </Head>
      <HeadSection />
    </Fragment>
  );
};

export default Home;
