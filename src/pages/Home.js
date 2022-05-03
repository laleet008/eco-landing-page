import React from "react";
import Description from "../components/Description";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Description />
    </Layout>
  );
};

export default Home;
