import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import CountUp from "react-countup";
import { Rocket } from "lucide-react";
import { statsImage } from "@/assets/assets";

const stats = [
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 100000, suffix: "+", label: "Lines of Code" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export default function StatsBanner() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true,
  });
  const bgImage = statsImage.image1;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      {/* Background with gradient and image overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-cyan-600">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96">
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-20">
            <polygon
              points="100,10 190,50 190,150 100,190 10,150 10,50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            <polygon
              points="100,30 170,60 170,140 100,170 30,140 30,60"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <polygon
              points="100,10 190,50 190,150 100,190 10,150 10,50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Background image overlay */}
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: bgImage,
            backgroundBlendMode: "overlay",
          }}
        />
      </div>

      <div className="container-custom relative z-10 px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 text-white mb-2">
            <Rocket className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              Be Part of My Success Story!
            </h2>
            <span className="text-xl sm:text-2xl">📌</span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-1 sm:mb-2"
                initial={{ scale: 0.5 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                }}
              >
                {isVisible ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </motion.div>
              <p className="text-xs sm:text-sm lg:text-base font-semibold text-white/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center max-w-4xl mx-auto">
            <p className="text-white text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
              I am committed to delivering{" "}
              <span className="font-bold">exceptional digital solutions</span>{" "}
              that drive success.
            </p>
            <p className="text-white/80 text-xs sm:text-sm lg:text-base">
              <span className="text-primary font-semibold">
                Join a growing list
              </span>{" "}
              of satisfied clients and
              <span className="font-semibold">
                {" "}
                build a future-proof digital presence
              </span>{" "}
              with cutting-edge technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
