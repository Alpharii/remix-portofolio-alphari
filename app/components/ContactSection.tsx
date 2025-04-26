import { Mail, Phone, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

// Import the PDF file for download
import CVFile from "~/assets/files/CV Muhammad Bintang Alphari.pdf";

export default function ContactSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CVFile; 
    link.download = "MuhammadBintangAlphari_CV.pdf"; // Name of the downloaded file
    link.click();
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-slate-100">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
        Get in Touch
      </h1>
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-xl border border-primary/20">
              <Mail size={40} className="text-primary mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-sm text-gray-600 mt-2">
                <a href="mailto:alphari404@gmail.com" className="text-primary underline">
                  alphari404@gmail.com
                </a>
              </p>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-xl border border-primary/20">
              <FileText size={40} className="text-primary mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">LinkedIn</h3>
              <p className="text-sm text-gray-600 mt-2">
                <a
                  href="https://www.linkedin.com/in/muhammadbintangalphari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  linkedin.com/in/muhammadbintangalphari
                </a>
              </p>
            </div>

            {/* GitHub */}
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-xl border border-primary/20">
              <FileText size={40} className="text-primary mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">GitHub</h3>
              <p className="text-sm text-gray-600 mt-2">
                <a
                  href="https://github.com/Alpharii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  github.com/Alpharii
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-xl border border-primary/20">
              <Phone size={40} className="text-primary mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <p className="text-sm text-gray-600 mt-2">+62 81272614537</p>
            </div>
          </div>
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-4 shadow-lg"
              onClick={handleDownloadCV} // Trigger download on click
            >
              <FileText size={20} className="mr-2" />
              Download My CV
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}