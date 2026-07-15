import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Header from "../Header";
import Footer from "../Footer";
import OpenAccount from "./OpenAccount";

export default function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
}
