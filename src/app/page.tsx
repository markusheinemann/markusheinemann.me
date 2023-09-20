import Head from "next/head";
import { Hero } from "../components/Hero";

const Home = () => {
  return (
    <>
      <Head>
        <meta
          name="title"
          content="Markus Heinemann - DevOps & Software Architecture Specialist"
        />
        <meta
          name="description"
          content="Personal website of Markus Heinemann, a dedicated software developer with expertise in infrastructure automation, DevOps, and software architecture. Explore projects, insights, and get in touch."
        />
        <meta
          name="keywords"
          content="Markus Heinemann, software developer, infrastructure automation, DevOps, software architecture, personal website, tech blog, sport, dresden"
        />
        <meta name="author" content="Markus Heinemann" />
      </Head>
      <Hero />
    </>
  );
};

export default Home;
