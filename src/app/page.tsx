import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Noqta from "@/components/Noqta";
import Vision from "@/components/Vision";
import Team from "@/components/Team";
import Impact from "@/components/Impact";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Noqta />
      <Vision />
      <Team />
      <Impact />
      <Waitlist />
      <Footer />
    </main>
  );
}
