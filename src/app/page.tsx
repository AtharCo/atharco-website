import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyNoqta from "@/components/WhyNoqta";
import Team from "@/components/Team";
import Impact from "@/components/Impact";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyNoqta />
      <Impact />
      <Team />
      <ContactForm />
      <Footer />
    </main>
  );
}
