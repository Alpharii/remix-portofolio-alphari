import { FileText, ShoppingCart, ShieldCheck, HardDrive } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const projects = [
  {
    icon: <FileText size={20} />,
    title: "Blogging Web App",
    description: "Fullstack blogging platform using NestJS and Remix.",
    bullets: [
      "Built with TypeScript, NestJS (backend), and Remix (frontend).",
      "Implemented blog creation, commenting, user profiles.",
      "PostgreSQL as relational DB, Zustand for state, Multer for uploads."
    ],
    images: ["/blog-1.png", "/blog-2.png", "/blog-3.png"]
  },
  {
    icon: <ShoppingCart size={20} />,
    title: "GadgetSpot E-commerce",
    description: "Scalable e-commerce platform with payment integration.",
    bullets: [
      "Built with NestJS and Remix.",
      "Features: Auth, Midtrans payment, Raja Ongkir shipping.",
      "PostgreSQL + Prisma + GCP deployment."
    ],
    images: ["/gadgets-1.png", "/gadgets-2.png", "/gadgets-3.png", "/gadgets-4.png", "/gadgets-5.png"]
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "RBAC Backend System",
    description: "Role-Based Access Control system using Golang.",
    bullets: [
      "CRUD system for Admin/User roles.",
      "JWT auth, PostgreSQL, GoFiber, GORM.",
      "Secure & high-perf backend."
    ],
    images: ["/rbac-1.png", "/rbac-2.png"]
  },
  {
    icon: <HardDrive size={20} />,
    title: "Solidity Smart Contract",
    description: "Basic decentralized application using Solidity and React.",
    bullets: [
      "Smart contract (Solidity + Hardhat).",
      "React frontend to interact with the contract.",
      "Token transfer, ownership verification.",
      "Deployed to testnet (Goerli/Sepolia)."
    ],
    images: ["/dapp-1.png", "/dapp-2.png", "/dapp-3.png", "/dapp-4.png"]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-white to-slate-100">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight px-4">
        My Projects
      </h1>
      {/* Main Swiper for Cards */}
      <Swiper
        spaceBetween={20} // Adjusted space for mobile
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 }, // Mobile layout
          768: { slidesPerView: 2, spaceBetween: 30 }, // Tablet layout
          1024: { slidesPerView: 3, spaceBetween: 30 } // Desktop layout
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" // Added responsive padding
      >
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 + i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl rounded-2xl overflow-hidden border border-primary/20 h-full">
                {/* Image Carousel inside Card */}
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  className="h-48 w-full"
                  modules={[Pagination, Autoplay]}
                >
                  {project.images.map((src, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={src}
                        alt={`${project.title} - Slide ${idx + 1}`}
                        className="object-cover w-full h-48"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold text-primary">
                    {project.icon}
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
                    {project.bullets.map((text, idx) => (
                      <li key={idx}>{text}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}