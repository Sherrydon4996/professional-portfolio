import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Heart, Coffee, Code, Lightbulb } from "lucide-react";
import { useState } from "react";
import { aboutImages } from "@/assets/assets";

const highlights = [
  { icon: Code, value: "10+", label: "Projects Completed" },
  { icon: Coffee, value: "5000+", label: "Cups of Coffee" },
  { icon: Heart, value: "100%", label: "Client Satisfaction" },
  { icon: Lightbulb, value: "3+", label: "Years Experience" },
];

export default function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding relative overflow-hidden bg-card"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[hsl(180,70%,45%)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="glass-card p-8 rounded-3xl">
                <img
                  src={aboutImages.codes_image}
                  alt="Person working on laptop"
                  className="w-full h-auto rounded-2xl object-cover aspect-square"
                />
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-6 -right-6 glass-card px-6 py-4 rounded-2xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <p className="text-3xl font-black gradient-text">3+</p>
                <p className="text-sm text-muted-foreground">Years Exp.</p>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 glass-card px-6 py-4 rounded-2xl shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <p className="text-3xl font-black gradient-accent-text">10+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-[hsl(180,70%,45%)]/10 text-[hsl(180,70%,45%)] text-sm font-medium mb-4"
            >
              About Me
            </motion.span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 animated-gradient-text">
              My Journey
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg mb-8">
              <p>
                I'm a passionate fullStack developer with almost 3 years of
                experience crafting innovative digital solutions that solve real
                world problems. My journey into technology began during my
                Bachelor of Commerce in Accounting, which I completed over four
                years, graduating in 2020. While pursuing my degree, I often
                wandered into the computer lab, mesmerized by fellow students
                performing what seemed like magic on their screens, wielding
                lines of code to bring ideas to life. This sparked an insatiable
                curiosity, prompting me to dive into research and
                self-experimentation with programming, even as I balanced my
                accounting studies.
              </p>
              {showMore && (
                <>
                  <p>
                    Upon graduation, I fully committed to tech, teaching myself
                    through a wealth of online resources and platforms. Starting
                    with Python, I progressed to mastering JavaScript, React,
                    Node.js, WordPress, and beyond, honing my skills through
                    hands-on projects. Today, as a thriving freelance full-stack
                    developer, I've successfully delivered diverse projects from
                    sleek websites to robust enterprise applications. I
                    prioritize clean, maintainable code and stay ahead of
                    industry trends to ensure every solution is efficient and
                    future-proof.
                  </p>
                  <p>
                    Outside of coding, I explore emerging technologies,
                    contribute to open-source initiatives, and mentor aspiring
                    developers in the community. I'm always eager for the next
                    challenge, ready to turn visions into impactful realities.
                  </p>
                </>
              )}
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-primary hover:underline font-medium"
              >
                {showMore ? "Read less" : "Read more"}
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 glass-card rounded-2xl"
                >
                  <item.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-black">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
