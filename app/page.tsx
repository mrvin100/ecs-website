import About from "@/components/About";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Services from "@/components/Services";
import Teams from "@/components/Teams";

export default function Home() {
  return (
    <div>
      <Header />
      {/* Hero section starts */}
      <Hero />
      {/* About section starts */}
      <About />
      {/* Services section starts */}
      <Services />
      {/* Offer section starts */}
      <Offer />
      {/* Teams section starts */}
      <Teams />
      {/* Faq section starts */}
      <Faq />
      {/* Footer section starts */}
      <Footer />
    </div>
  );
}
