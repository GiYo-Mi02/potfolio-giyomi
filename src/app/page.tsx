import DockNav from "@/components/portfolio/DockNav";
import TopNav from "@/components/portfolio/TopNav";
import LoadingScreen from "@/components/portfolio/LoadingScreen";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import TechStackLoop from "@/components/portfolio/TechStackLoop";
import BentoGrid from "@/components/portfolio/BentoGrid";
import MasonryGallery from "@/components/portfolio/MasonryGallery";
import PlaySection from "@/components/portfolio/PlaySection";
import Footer from "@/components/portfolio/Footer";
import GrainOverlay from "@/components/portfolio/GrainOverlay";
import LightPillar from "@/components/portfolio/LightPillar";
import ScrollProgress from "@/components/portfolio/ScrollProgress";

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <TopNav />
      <main id="main-content" className="relative min-h-screen bg-background text-foreground pt-16 pb-24">
        <ScrollProgress />
        <LightPillar />
        <GrainOverlay />
        <DockNav />
        <Hero />
        <About />
        <TechStackLoop />
        <BentoGrid />
        <MasonryGallery />
        <PlaySection />
        <Footer />
      </main>
    </>
  );
}
