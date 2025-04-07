import type { MetaFunction } from "@remix-run/node";
import { HeroSection } from "~/components/HeroSection";
import { Navbar } from "~/components/Navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "Portofolio Alpharii" },
    { name: "Portofolio Alpharii", content: "Portofolio Alpharii" },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="pt-20">
        {/* About Section */}
        <section id="about" className="py-10">
          <h1 className="text-3xl font-bold text-center">About Me</h1>
          <p className="text-center mt-4">
            Saya adalah seorang Fullstack Developer dengan pengalaman lebih dari 5 tahun.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-10">
          <h1 className="text-3xl font-bold text-center">Pengalaman</h1>
          <p className="text-center mt-4">
            Berpengalaman dalam mengembangkan aplikasi web skala besar.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-10">
          <h1 className="text-3xl font-bold text-center">Projects</h1>
          <p className="text-center mt-4">
            Beberapa proyek yang telah saya kerjakan.
          </p>
        </section>

        {/* Tech Stack Section */}
        <section id="techstack" className="py-10">
          <h1 className="text-3xl font-bold text-center">Tech Stack</h1>
          <p className="text-center mt-4">
            Teknologi yang saya kuasai: React, Node.js, TailwindCSS, etc.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-10 text-center">
          <h1 className="text-3xl font-bold">Contact Me</h1>
          <p className="mt-4">
            Jika Anda tertarik untuk bekerja sama, silakan hubungi saya melalui:
          </p>
          <div className="mt-4 space-y-2">
            <p>Email: <a href="mailto:alphari404@gmail.com" className="text-primary underline">alphari404@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-primary underline">linkedin.com/in/your-profile</a></p>
            <p>GitHub: <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-primary underline">github.com/your-profile</a></p>
          </div>
        </section>
      </main>
    </>
  );
}