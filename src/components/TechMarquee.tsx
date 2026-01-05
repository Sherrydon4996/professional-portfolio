import { motion } from "framer-motion";

const technologies = [
  { name: "HTML", color: "text-orange-500" },
  { name: "JavaScript", color: "text-yellow-400" },
  { name: "React", color: "text-cyan-400" },
  { name: "Next.js", color: "text-foreground" },
  { name: "TypeScript", color: "text-blue-500" },
  { name: "Tailwind CSS", color: "text-sky-400" },
  { name: "Shadcn", color: "text-foreground" },
  { name: "Node.js", color: "text-green-500" },
  { name: "MongoDB", color: "text-emerald-500" },
  { name: "Airtable", color: "text-teal-400" },
  { name: "Appwrite", color: "text-pink-500" },
  { name: "Supabase", color: "text-green-400" },
  { name: "Turso", color: "text-violet-400" },
  { name: "MySQL", color: "text-blue-400" },
  { name: "AI Agents", color: "text-purple-400" },
  { name: "Automations", color: "text-rose-400" },
];

export default function TechMarquee() {
  return (
    <section className="py-8 overflow-hidden bg-muted/30">
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{
            x: [0, -2000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Double the items for seamless loop */}
          {[...technologies, ...technologies, ...technologies].map(
            (tech, index) => (
              <span
                key={index}
                className={`text-2xl md:text-3xl font-bold ${tech.color} hover:scale-110 transition-transform cursor-default`}
              >
                {tech.name}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
