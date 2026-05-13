import Hero from "./components/Hero";
import WhyRegister from "./components/WhyRegister";
import Differentiators from "./components/Differentiators";
import Testimonials from "./components/Testimonials";
import Risks from "./components/Risks";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyRegister />
      <Differentiators />
      <Testimonials />
      <Risks />
      <Process />
      <FAQ />
      <CTA />
    </>
  );
}