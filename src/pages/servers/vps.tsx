import type {NextPage} from 'next';

import Head from 'next/head';
import Navbar from '@components/Navbar';
import Header from '@components/Servers/VPS/Header';
import Locations from '@components/Servers/VPS/Locations';
import Plans from '@components/Servers/VPS/Plans';
import Panel from '@components/Servers/VPS/Panel';
import Faqs from '@components/Servers/VPS/Faqs';
import Support from '@components/Support';
import Footer from '@components/Footer';

const VPS: NextPage = () => {
  return (
    <>
      <Head>
        <title>{process.env.name} — Servidores VPS</title>
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

export default VPS;
