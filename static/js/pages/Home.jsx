import React from "react";
import Hero from "../components/home/Hero";
import Project from "../components/home/Project";
import Faq from "../components/home/Faq";
import Why from "../components/home/Why";
import Sectiune2 from "../components/home/Sectiune2";
import Services2 from "../components/home/Services2";
const Home = () => {
  return (
    <>
      <Hero />
      <Sectiune2 />
      {/* <TitleWithPar id="0" key={"0"} /> */}
      <Project />
      <Services2 />
      {/* <Services /> */}
      <Why />
      <Faq />
      {/* <Faq2 /> */}
    </>
  );
};

export default Home;
