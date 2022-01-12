import type {NextPage} from 'next';

import Head from 'next/head';
import Navbar from '@components/Navbar';
import Header from '@components/Header';
import Features from '@components/Features';
import FeaturesServices from '@components/FeaturesServices';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{process.env.name} - Qualidade e preço acessível</title>
      </Head>
      <Navbar />
      <Header />
      <Features />
      <FeaturesServices />
    </>
  );
};

export default Home;
