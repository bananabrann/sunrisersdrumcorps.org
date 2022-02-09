import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero/hero";
import Footer from "../components/footer/footer";
import Layout from "../components/layout";
import WaveSep from "../components/waveSep/waveSep";
import Stats from "../components/hero/stats/stats";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sunrisers - Home</title>
      </Head>

      <Hero>
        <p>hi</p>
      </Hero>

      <WaveSep className="" />

      <Stats />

      <Footer />
    </Layout>
  );
}
