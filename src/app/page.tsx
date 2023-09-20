import { Metadata } from "next";
import { Hero } from "../components/Hero";

export const metadata: Metadata = {
  title: "Markus Heinemann - DevOps & Software Architecture Specialist",
  description:
    "Personal website of Markus Heinemann, a dedicated software developer with expertise in infrastructure automation, DevOps, and software architecture. Explore projects, insights, and get in touch.",
};

const Home = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
