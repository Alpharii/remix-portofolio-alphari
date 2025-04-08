import { Briefcase, Code2, MapPin, Mail } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-8 md:py-16 bg-gradient-to-b from-white to-slate-100">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
        About Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {/* Profile Card with Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-2xl rounded-3xl overflow-hidden border border-primary/20">
            <img
              src="/about-1.jpg"
              alt="Profile"
              width={800}
              height={400}
              className="w-full h-64 object-cover brightness-90 hover:brightness-100 transition-all duration-300"
            />
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-semibold text-primary">
                <MapPin size={20} />
                Palembang, South Sumatra
              </CardTitle>
              <CardDescription className="flex items-center gap-2 text-sm text-gray-600">
                <Mail size={16} />
                <a href="mailto:alphari404@gmail.com" className="text-primary underline">
                  alphari404@gmail.com
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 leading-relaxed">
                I am a Fullstack Web Developer based in Palembang, South Sumatra. Experienced building scalable web applications, I specialize in modern technologies
                such as TypeScript, Golang, NestJS, NextJS, and RemixJS. And now im continue learning Web3 and DAPP. My passion lies in crafting
                efficient, user-friendly solutions that drive real-world impact.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* What I Offer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-2xl rounded-3xl border border-primary/20">
            <img
              src="/about-2.jpg"
              alt="What I Offer"
              width={800}
              height={400}
              className="w-full h-64 object-cover brightness-90 hover:brightness-100 transition-all duration-300"
            />
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Briefcase size={20} />
                What I Offer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-gray-700 text-sm">
                <li className="flex items-start gap-3">
                  <Code2 className="text-primary mt-1" size={18} />
                  <span>
                    Development of robust <strong>internal management systems</strong> tailored for
                    large enterprises, ensuring operational efficiency and scalability.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                <Code2 className="text-primary mt-1" size={18} />
                <span>
                    Fullstack TypeScript development expertise, using frameworks like <strong>NestJS</strong> and <strong>NextJs</strong> to
                    build web applications.
                </span>
                </li>
                <li className="flex items-start gap-3">
                <Code2 className="text-primary mt-1" size={18} />
                <span>
                    Built basic smart contracts using <strong>Solidity</strong> and handled deployment and testing with <strong>Hardhat</strong> on local and testnet environments such as Sepolia and Etherium testnet.
                </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}