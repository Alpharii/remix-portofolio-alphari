import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default  function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-gradient-to-b from-white to-slate-100">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
        Experience & Education
      </h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">

        {/* Experience: ElNusa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-xl rounded-2xl overflow-hidden border border-primary/20">
            <img
              src="/elnusa.jpg"
              alt="PT ElNusa Petrofin"
              width={800}
              height={400}
              className="w-full h-48 object-cover brightness-90 hover:brightness-100 transition-all duration-300"
            />
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg font-semibold text-primary">
                <Briefcase size={20} />
                Fullstack Web Developer - ElNusa Petrofin (Remote)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Feb 2025 – Present</p>
              <ul className="mt-2 list-disc ml-5 space-y-2 text-sm text-gray-700">
                <li>
                  Designed and developed internal management systems for over 10,000 employees across
                  Indonesia, streamlining operational workflows and improving compliance processes.
                </li>
                <li>
                  Leveraged TypeScript, NestJS, and PostgreSQL for backend development, ensuring
                  scalability and robust performance.
                </li>
                <li>
                  Built responsive frontend interfaces using RemixJS and NextJS, enhancing user
                  experience and accessibility.
                </li>
                <li>
                  Collaborated closely with cross-functional teams in an Agile environment,
                  participating in daily stand-ups, and sprint planning.
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience: Bootcamp */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-xl rounded-2xl overflow-hidden border border-primary/20">
            <img
              src="/sanber.jpg"
              alt="Super Bootcamp Sanbercode"
              width={800}
              height={400}
              className="w-full h-48 object-cover brightness-90 hover:brightness-100 transition-all duration-300"
            />
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg font-semibold text-primary">
                <Briefcase size={20} />
                Super Bootcamp Sanbercode (Scholarship)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Dec 2024 – Jan 2025</p>
              <ul className="mt-2 list-disc ml-5 space-y-2 text-sm text-gray-700">
                <li>
                  Selected from over 850 applicants for a prestigious full scholarship, gaining
                  hands-on experience in modern web development technologies.
                </li>
                <li>
                  Mastered backend development using NestJS, Prisma, and Multer for file uploads,
                  focusing on building scalable RESTful APIs.
                </li>
                <li>
                  Developed frontend applications with RemixJS, Zustand for state management, and
                  TailwindCSS for styling.
                </li>
                <li>
                  Completed end-to-end projects, including authentication, payment integration, and
                  database optimization.
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience: Dexa Medica */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-xl rounded-2xl overflow-hidden border border-primary/20">
            <img
              src="/dexa.jpg"
              alt="PT Dexa Medica"
              width={800}
              height={400}
              className="w-full h-48 object-cover brightness-90 hover:brightness-100 transition-all duration-300"
            />
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg font-semibold text-primary">
                <Briefcase size={20} />
                Mechanical Engineer Intern - Dexa Medica Palembang
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Aug 2022 – Dec 2023</p>
              <ul className="mt-2 list-disc ml-5 space-y-2 text-sm text-gray-700">
                <li>
                  Optimized production workflows by analyzing existing processes, resulting in a
                  20% increase in operational efficiency.
                </li>
                <li>
                  Operated advanced machinery such as grinders and drill machines, ensuring precision
                  and quality in manufacturing.
                </li>
                <li>
                  Conducted quality control checks using specialized tools, maintaining high
                  standards of product reliability.
                </li>
                <li>
                  Collaborated with senior engineers to implement process improvements and reduce
                  downtime.
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education: SMKN 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-xl rounded-2xl overflow-hidden border border-primary/20">
            <img
              src="/education.jpg"
              alt="SMK Negeri 2 Palembang"
              width={800}
              height={400}
              className="w-full h-48 object-cover brightness-90 hover:brightness-100 transition-all duration-300"
            />
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg font-semibold text-primary">
                <GraduationCap size={20} />
                SMK Negeri 2 Palembang - Teknik Mekatronika
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Jul 2021 – May 2024</p>
              <ul className="mt-2 list-disc ml-5 space-y-2 text-sm text-gray-700">
                <li>
                  Achieved 5th place in the Mobile Robotics competition at LKS Nasional, showcasing
                  technical problem-solving skills.
                </li>
                <li>
                  Recognized as the Most Cohesive Team and Top 5 Finalist in the Hackidea Design App
                  competition.
                </li>
                <li>
                  Developed Arduino-based smart devices, including a healthy box and automated lamp
                  system, demonstrating practical engineering skills.
                </li>
                <li>
                  Led extracurricular activities as Head of Paskibra and Treasurer of OSIS, honing
                  leadership, communication, and organizational abilities.
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}