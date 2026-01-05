import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { services } from "./../lib/servicesList";

export default function ServicesSection() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding relative overflow-hidden bg-card"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4"
          >
            What I Offer
          </motion.span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 sm:mb-6 animated-gradient-text">
            Looking For These Services? Look No Further!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            From stunning websites to intelligent automation, I deliver
            solutions that drive results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card with border */}
              <div
                className={`relative h-full p-[2px] rounded-2xl sm:rounded-3xl bg-gradient-to-br ${service.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
              >
                <div className="h-full bg-card rounded-[14px] sm:rounded-[22px] p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                  {/* Animated gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Floating particles effect */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/20 group-hover:animate-pulse" />
                  <div className="absolute top-12 right-8 w-1 h-1 rounded-full bg-accent/30 group-hover:animate-pulse delay-100" />

                  {/* Icon with animated ring */}
                  <div className="relative mb-4 sm:mb-6">
                    <motion.div
                      className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl ${service.iconBg} relative z-10`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div
                        className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                      <service.icon className="w-5 h-5 sm:w-7 sm:h-7 text-foreground group-hover:text-white relative z-10 transition-colors duration-300" />
                    </motion.div>
                    {/* Animated ring */}
                    <div
                      className={`absolute inset-0 rounded-xl sm:rounded-2xl border-2 ${service.borderColor} scale-100 group-hover:scale-150 opacity-100 group-hover:opacity-0 transition-all duration-500`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm lg:text-base mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.a
                    href="projects"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link"
                    whileHover={{ x: 5 }}
                  >
                    <span className="relative">
                      Learn More
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover/link:w-full transition-all duration-300" />
                    </span>
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/link:translate-x-2"
                    />
                  </motion.a>

                  {/* Corner decoration */}
                  <div
                    className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
                  />
                </div>
              </div>

              {/* Shadow effect */}
              <div
                className={`absolute inset-0 rounded-2xl sm:rounded-3xl ${service.shadowColor} shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
