import HomeIntro from "@/components/HomeIntro";
import HomeServicesOverview from "@/components/HomeServicesOverview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main id="main">
        <Hero />
        <TrustBar />
        <HomeIntro />
        <HomeServicesOverview />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
