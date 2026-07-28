import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Features from "@/components/home/Features";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Features />
      <Process />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}