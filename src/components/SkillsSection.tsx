import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
  Heart,
  Code,
  Zap,
  Users,
  MapPin,
  ExternalLink,
  Layers,
} from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiThreedotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiWordpress,
  SiSupabase,
  SiMongodb,
  SiPlanetscale,
  SiAirtable,
  SiAppwrite,
  SiShadcnui,
  SiPython,
} from "react-icons/si";
import { TbSql, TbRobot } from "react-icons/tb";

const technologies = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    name: "React",
    icon: SiReact,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    name: "Three.js",
    icon: SiThreedotjs,
    color: "text-foreground",
    bg: "bg-foreground/10",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    name: "Node.js Express",
    icon: SiNodedotjs,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-foreground",
    bg: "bg-foreground/10",
  },
  {
    name: "WordPress",
    icon: SiWordpress,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    name: "PlanetScale",
    icon: SiPlanetscale,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    name: "Airtable",
    icon: SiAirtable,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
  },
  {
    name: "Appwrite",
    icon: SiAppwrite,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    name: "Shadcn",
    icon: SiShadcnui,
    color: "text-foreground",
    bg: "bg-foreground/10",
  },
  {
    name: "SQL",
    icon: TbSql,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    name: "AI Agents & Automation",
    icon: TbRobot,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

const projectsShowcase = [
  {
    category: "Management Systems",
    projects: ["House Management System", "Employee Management System"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    category: "E-commerce",
    projects: ["E-commerce Clothes Website", "E-commerce Shoes website"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    category: "Business Websites",
    projects: [
      "Beauty Services Platform",
      "WiFi Services Website",
      "Real Estate Website",
      "Bakery Website",
    ],
    gradient: "from-orange-500 to-red-500",
  },
  {
    category: "Portfolios",
    projects: [
      "Marketing Portfolio",
      "Broad Services Portfolio",
      "Personal simple Portfolio",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
];

const infoCards = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description:
      "I pour my heart into every project, treating your business like my own.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Code,
    title: "Quality Code",
    description:
      "Clean, maintainable, and scalable code that stands the test of time.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Efficient workflows and agile methods ensure timely project completion.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Client-First",
    description:
      "Your success is my success. I prioritize communication and collaboration.",
    gradient: "from-violet-500 to-purple-500",
  },
];

export default function SkillsSection() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding relative overflow-hidden bg-card"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium mb-3 sm:mb-4"
          >
            Expertise
          </motion.span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 sm:mb-6 animated-gradient-text">
            Skills & Experience
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20">
          {/* Technologies Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-8">
              Technologies I Work With
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className={`${tech.bg} border border-border/50 rounded-lg sm:rounded-xl p-2 sm:p-4 flex flex-col items-center gap-1.5 sm:gap-3 hover:scale-105 hover:shadow-lg transition-all cursor-default group`}
                >
                  <tech.icon
                    className={`w-5 h-5 sm:w-8 sm:h-8 ${tech.color} group-hover:scale-110 transition-transform`}
                  />
                  <span className="text-[10px] sm:text-sm font-medium text-center leading-tight">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Freelancer Journey & Projects */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6">
              My Journey
            </h3>

            {/* Freelancer Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-6 border-l-4 border-primary"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Code size={16} className="sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold">
                    Freelance Full-Stack Developer
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin size={12} /> Nairobi, Kenya
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                I'm a passionate developer crafting digital solutions for
                businesses across industries. From management systems to
                e-commerce platforms, I bring ideas to life with clean code and
                modern design.
              </p>
            </motion.div>

            {/* Projects Showcase */}
            <h4 className="text-sm sm:text-base font-semibold mb-4 flex items-center gap-2">
              <Layers size={16} className="text-primary" />
              Projects I've Built
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {projectsShowcase.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-3 sm:p-4 hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  <div
                    className={`w-full h-1 rounded-full bg-gradient-to-r ${item.gradient} mb-3`}
                  />
                  <h5 className="text-xs sm:text-sm font-bold mb-2">
                    {item.category}
                  </h5>
                  <ul className="space-y-1">
                    {item.projects.map((project) => (
                      <li
                        key={project}
                        className="text-[10px] sm:text-xs text-muted-foreground flex items-start gap-1.5"
                      >
                        <ExternalLink
                          size={10}
                          className="mt-0.5 text-primary shrink-0"
                        />
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Info Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {infoCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="bg-card border border-border rounded-xl sm:rounded-2xl p-3 sm:p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div
                  className={`w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-2 sm:mb-4`}
                >
                  <card.icon size={18} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2">
                  {card.title}
                </h4>
                <p className="text-[10px] sm:text-sm text-muted-foreground leading-tight sm:leading-normal">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
