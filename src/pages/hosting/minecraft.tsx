import type {NextPage} from 'next';

import Head from 'next/head';
import Navbar from '@components/Navbar';
import Header from '@components/Hosting/Minecraft/Header';
import Locations from '@components/Hosting/Minecraft/Locations';
import Plans from '@components/Hosting/Minecraft/Plans';
import Panels from '@components/Panels';
import Support from '@components/Support';
import Footer from '@components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{process.env.name} — Hospedagem de Minecraft</title>
      </Head>
      <Navbar />
      <Header />
      <Locations />
      <Plans />
      <Panels />
      <Support />
      <Footer />
    </>
  );
};

export default Home;
