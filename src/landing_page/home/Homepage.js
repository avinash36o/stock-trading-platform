import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Trust from "./Trust";
import Pricing from "./Pricing";
import OpenAccount from "./OpenAccount";
import Footer from "./Footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trust />
      <Pricing />
      <OpenAccount />
      <Footer />
    </>
  );
}
