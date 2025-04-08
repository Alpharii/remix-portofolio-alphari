import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "TypeScript Enthusiast",
];

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-white to-slate-100 dark:bg-gray-900 py-24 overflow-hidden md:mt-16">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none" />

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Role Badge with Typing Effect */}
          <div className="mb-4 text-xl">
              <TypingText roles={roles} />
          </div>

          {/* Animated Intro Text with StaggeredFade */}
          <div className="mb-6">
            <h1
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight"
            >Hi, I'm Muhammad Bintang Alphari</h1>
          </div>

          <p className="text-md text-muted-foreground mb-8 max-w-xl">
            Fullstack Web Developer with experience in building scalable applications using TypeScript, Golang,
            NestJS, NextJS, and RemixJS.
          </p>

          <Button asChild size="lg" className="gap-2">
            <a href="#contact">
              Contact Me <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img
            src="/profile.jpg"
            alt="Muhammad Bintang Alphari"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

import Typewriter from "typewriter-effect";

const TypingText = ({ roles }: { roles: string[] }) => {
  return (
    <Typewriter
      options={{
        strings: roles,
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
      }}
    />
  );
};
