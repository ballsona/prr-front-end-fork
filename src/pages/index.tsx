import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import AsyncBoundary from '@/components/common/AsyncBoundary';

const HomeTemplate = dynamic(
  () => import('@/components/template/HomeTemplate'),
);

const Home: NextPage = () => (
  <>
    <Head>
      <title>안녕, 푸르름</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AsyncBoundary>
      <HomeTemplate />
    </AsyncBoundary>
  </>
);

export default Home;
