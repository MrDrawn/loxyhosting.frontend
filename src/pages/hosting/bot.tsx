import type {NextPage} from 'next';

import Head from 'next/head';
import Navbar from '@components/Navbar';
import Header from '@components/Hosting/Bot/Header';
import Locations from '@components/Hosting/Bot/Locations';
import Plans from '@components/Hosting/Bot/Plans';
import Panel from '@components/Hosting/Bot/Panel';
import Faqs from '@components/Hosting/Bot/Faqs';
import Support from '@components/Support';
import Footer from '@components/Footer';

const Bots: NextPage = () => {
  return (
    <>
      <Head>
        <title>{process.env.name} — Hospedagem de Bots</title>
      </Head>
      <Navbar />
      <Header />
      <Locations />
      <Plans />
      <Panel />
      <Faqs />
      <Support />
      <Footer />
    </>
  );
};

export default Bots;
