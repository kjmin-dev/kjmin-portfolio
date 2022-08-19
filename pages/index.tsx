import { Fragment } from 'react';
import { type NextPage } from 'next';
import Head from 'next/head';
import HeadSection from '../components/sections/Head.secton';
import WorkExperienceSection from '../components/sections/WorkExperience.section';
import EducationSection from '../components/sections/Education.section';

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
      <main className="max-w-3xl m-auto px-6 py-8 sm:px-3 sm:py-6">
        <HeadSection />
        <WorkExperienceSection />
        <EducationSection />
      </main>
    </Fragment>
  );
};

export default Home;
