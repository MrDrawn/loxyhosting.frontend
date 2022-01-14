import type {NextPage} from 'next';

import Head from 'next/head';
import Navbar from '@components/Navbar';
import Header from '@components/Hosting/Minecraft/Header';
import Locations from '@components/Hosting/Minecraft/Locations';
import Plans from '@components/Hosting/Minecraft/Plans';
import Panel from '@components/Hosting/Minecraft/Panel';
import Faqs from '@components/Hosting/Minecraft/Faqs';
import Support from '@components/Support';
import Footer from '@components/Footer';

const Minecraft: NextPage = () => {
  return (
    <>
      <Head>
        <title>{process.env.name} — Hospedagem de Minecraft</title>
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

export default Minecraft;
