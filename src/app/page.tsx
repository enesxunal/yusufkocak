import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Therapy from "@/components/Therapy";
import FAQ from "@/components/FAQ";
import BookingSection from "@/components/BookingSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Therapy />
        <BookingSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
