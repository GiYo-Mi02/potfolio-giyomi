import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import BentoGrid from "@/components/portfolio/BentoGrid";
import PlaySection from "@/components/portfolio/PlaySection";
import Footer from "@/components/portfolio/Footer";
import GrainOverlay from "@/components/portfolio/GrainOverlay";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-neutral-100">
      <GrainOverlay />
      <Navbar />
      <Hero />
      <BentoGrid />
      <PlaySection />
      <Footer />
    </main>
  );
}
