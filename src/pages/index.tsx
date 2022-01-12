import type {NextPage} from 'next';

import Head from 'next/head';
import Navbar from '@components/Navbar';
import Header from '@components/Header';
import Features from '@components/Features';
import Panels from '@components/Panels';
import Support from '@components/Support';
import Footer from '@components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{process.env.name} - Qualidade e preço acessível</title>
      </Head>
      <Navbar />
      <Header />
      <Features />
      <Panels />
      <Support />
      <Footer />
    </>
  );
};

export default Home;
