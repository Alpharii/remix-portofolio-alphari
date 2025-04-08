import type { MetaFunction } from "@remix-run/node";
import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "~/components/Navbar";

// Lazy load components to simulate loading
const AboutSection = lazy(() => import("~/components/AboutSection"));
const ContactSection = lazy(() => import("~/components/ContactSection"));
const ExperienceSection = lazy(() => import("~/components/ExperienceSection"));
const HeroSection = lazy(() => import("~/components/HeroSection"));
const ProjectsSection = lazy(() => import("~/components/ProjectSection"));
const TechStackSection = lazy(() => import("~/components/TechStackSection"));

export const meta: MetaFunction = () => {
  return [
    { title: "Portofolio Alpharii" },
    { name: "Portofolio Alpharii", content: "Portofolio Alpharii" },
  ];
};

export default function Index() {
  return (
    <>
      {/* Navbar is not lazy-loaded because it should always be visible */}
      <Navbar />
      
      {/* Suspense for loading state */}
      <Suspense fallback={<LoadingScreen />}>
        <HeroSection />
        <main className="pt-5 md:pt-20">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <TechStackSection />
          <ContactSection />
        </main>
      </Suspense>
    </>
  );
}

// Loading Screen Component
function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-100"
    >
      <Loader2 size={48} className="animate-spin text-primary mb-4" />
      <h1 className="text-2xl font-semibold text-gray-800">Loading...</h1>
    </motion.div>
  );
}