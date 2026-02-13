import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { CompetitionSection } from "@/components/sections/Competition";
import { SearchRescueSection } from "@/components/sections/SearchRescue";
import { ResearchSection } from "@/components/sections/Research";
import { ContactSection } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 space-y-16 pb-10 pt-4 sm:space-y-20 sm:pt-6 lg:space-y-24">
        <HeroSection />
        <AboutSection />
        <CompetitionSection />
        <SearchRescueSection />
        <ResearchSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
