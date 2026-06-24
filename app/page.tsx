import HomeWellness from "@/components/HomeWellness";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import PropertyManagers from "@/components/PropertyManagers";
import ServiceAreas from "@/components/ServiceAreas";
import Services from "@/components/Services";
import Snagging from "@/components/Snagging";
import SnaggingCTA from "@/components/SnaggingCTA";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import WhatsAppFab from "@/components/WhatsAppFab";
import WhyChooseUs from "@/components/WhyChooseUs";
import { JsonLd, faqSchema } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main id="main">
        <Hero />
        <TrustBar />
        <About />
        <HomeWellness />
        <Services />
        <Snagging />
        <WhyChooseUs />
        <PropertyManagers />
        <Pricing />
        <SnaggingCTA />
        <Process />
        <Testimonials />
        <ServiceAreas />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <JsonLd data={faqSchema()} />
    </>
  );
}
