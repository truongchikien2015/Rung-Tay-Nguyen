import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImportanceSection from "@/components/ImportanceSection";
import StatisticsSection from "@/components/StatisticsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <ImportanceSection />
        <StatisticsSection />
        <ProjectsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
