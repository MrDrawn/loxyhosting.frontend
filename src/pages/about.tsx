import type {NextPage} from 'next';

import Head from 'next/head';
import Navbar from '@components/Navbar';
import Header from '@components/About/Header';
import Statistics from '@components/About/Statistics';
import Features from '@components/About/Features';
import Avaliations from '@components/Avaliations';
import Support from '@components/Support';
import Footer from '@components/Footer';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>{process.env.name} - Sobre</title>
      </Head>
      <Navbar />
      <Header />
      <Statistics />
      <Features />
      <Avaliations />
      <Support />
      <Footer />
    </>
  );
};

export default About;
