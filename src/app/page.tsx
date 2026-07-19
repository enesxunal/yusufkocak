import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Therapy from "@/components/Therapy";
import Contact from "@/components/Contact";
import NavyFooter from "@/components/NavyFooter";
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
        <Contact />
      </main>
      <NavyFooter />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
