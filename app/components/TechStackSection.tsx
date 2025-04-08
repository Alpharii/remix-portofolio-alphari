import { Code2, Terminal, Layers, Database, GitBranch, Server } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";

const techStack = [
  {
    icon: <Code2 size={24} className="text-primary" />,
    title: "Frontend Development",
    description: "React, Next.js, Remix.js, Vue.js, Tailwind, Zustand, Zod, Shadcn, Figma",
  },
  {
    icon: <Terminal size={24} className="text-primary" />,
    title: "Backend Development",
    description: "Node.js, Bun.js, NestJS, Express.js, Golang, GoFiber, Gin",
  },
  {
    icon: <Database size={24} className="text-primary" />,
    title: "Databases",
    description: "PostgreSQL, MySQL, MongoDB, Prisma, GORM",
  },
  {
    icon: <GitBranch size={24} className="text-primary" />,
    title: "Version Control & DevOps",
    description: "Git, GitHub, Linux, Docker, Nginx, GCP",
  },
  {
    icon: <Server size={24} className="text-primary" />,
    title: "APIs & Integrations",
    description: "RESTful APIs, JWT, Midtrans, Raja Ongkir",
  },
  {
    icon: <Layers size={24} className="text-primary" />,
    title: "Blockchain & Smart Contracts",
    description: "Solidity, Hardhat, Ether.js, MetaMask",
  },
];

export default function TechStackSection() {
  return (
    <section id="techstack" className="py-16 bg-gradient-to-b from-white to-slate-100">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
        My Tech Stack
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {techStack.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl rounded-2xl overflow-hidden border border-primary/20">
              <CardHeader className="flex items-center justify-center">
                {tech.icon}
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-lg font-semibold text-primary">
                  {tech.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-700 mt-2">
                  {tech.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}