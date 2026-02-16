import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { services } from "./../lib/servicesList";

export default function ServicesSection() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [cardOrder, setCardOrder] = useState<string[]>(
    services.map((s) => s.title),
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Continuous card swapping animation - living system
  const swapCards = useCallback(() => {
    if (expandedId || isPaused) return;

    setCardOrder((prev) => {
      const newOrder = [...prev];
      // Create organic movement patterns
      const swapIndex1 = Math.floor(Math.random() * newOrder.length);
      let swapIndex2 = Math.floor(Math.random() * newOrder.length);
      while (swapIndex2 === swapIndex1) {
        swapIndex2 = Math.floor(Math.random() * newOrder.length);
      }
      [newOrder[swapIndex1], newOrder[swapIndex2]] = [
        newOrder[swapIndex2],
        newOrder[swapIndex1],
      ];
      return newOrder;
    });

    setActiveIndex((prev) => (prev + 1) % services.length);
  }, [expandedId, isPaused]);

  useEffect(() => {
    const interval = setInterval(swapCards, 3500);
    return () => clearInterval(interval);
  }, [swapCards]);

  const handleExpand = (title: string) => {
    setExpandedId(title);
    setIsPaused(true);
  };

  const handleCollapse = () => {
    setExpandedId(null);
    setTimeout(() => setIsPaused(false), 600);
  };

  const expandedService = services.find((s) => s.title === expandedId);
  const currentHue = expandedService
    ? expandedService.gradient.includes("primary")
      ? 217
      : expandedService.gradient.includes("accent")
        ? 20
        : 250
    : 200;

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding relative overflow-hidden bg-card"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          animate={{
            background: expandedService
              ? `hsl(${currentHue} 50% 35% / 0.1)`
              : "hsl(var(--primary) / 0.05)",
          }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
          animate={{
            background: "hsl(var(--accent) / 0.05)",
          }}
        />
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

        <LayoutGroup>
          <AnimatePresence mode="wait">
            {expandedId ? (
              // Expanded state - sidebar + content
              <motion.div
                key="expanded"
                className="flex flex-col lg:flex-row gap-4 sm:gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Left sidebar menu - compressed cards as icons */}
                <motion.div
                  className="flex flex-row lg:flex-col gap-2 lg:w-52 xl:w-60 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0"
                  layout
                >
                  {services.map((service) => {
                    const isExpanded = service.title === expandedId;
                    return (
                      <motion.button
                        key={service.title}
                        layoutId={`card-${service.title}`}
                        onClick={() => setExpandedId(service.title)}
                        className={`relative flex items-center gap-3 px-4 py-3 rounded-xl sm:rounded-2xl text-left whitespace-nowrap lg:whitespace-normal transition-all duration-300 ${
                          isExpanded ? "shadow-lg" : "shadow-sm"
                        }`}
                        animate={{
                          backgroundColor: isExpanded
                            ? "hsl(var(--primary))"
                            : "hsl(var(--card))",
                          color: isExpanded
                            ? "hsl(var(--primary-foreground))"
                            : "hsl(var(--foreground))",
                          borderColor: isExpanded
                            ? "hsl(var(--primary))"
                            : "hsl(var(--border))",
                        }}
                        style={{
                          border: "1px solid",
                        }}
                        whileHover={{
                          x: !isExpanded ? 4 : 0,
                          scale: !isExpanded ? 1.02 : 1,
                        }}
                      >
                        <motion.div
                          className={`p-2 rounded-lg ${service.iconBg}`}
                          animate={{
                            backgroundColor: isExpanded
                              ? "hsl(var(--primary-foreground) / 0.2)"
                              : undefined,
                          }}
                        >
                          <service.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.div>
                        <span className="font-body text-xs sm:text-sm font-medium hidden lg:block">
                          {service.title}
                        </span>
                      </motion.button>
                    );
                  })}
                </motion.div>

                {/* Expanded content - your current "Learn More" content */}
                <AnimatePresence mode="wait">
                  {expandedService && (
                    <motion.div
                      key={expandedService.title}
                      layoutId={`content-${expandedService.title}`}
                      className="flex-1 relative"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div
                        className={`relative h-full p-[2px] rounded-2xl sm:rounded-3xl bg-gradient-to-br ${expandedService.gradient}`}
                      >
                        <div className="h-full bg-card rounded-[14px] sm:rounded-[22px] p-6 sm:p-8 lg:p-10 relative overflow-hidden">
                          {/* Close button */}
                          <button
                            onClick={handleCollapse}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-2.5 rounded-full bg-muted hover:bg-muted/80 transition-colors z-10"
                          >
                            <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                          </button>

                          {/* Animated gradient background */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${expandedService.gradient} opacity-5`}
                          />

                          {/* Floating particles effect */}
                          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/20 animate-pulse" />
                          <div className="absolute top-12 right-8 w-1 h-1 rounded-full bg-accent/30 animate-pulse delay-100" />

                          {/* Icon with animated ring */}
                          <div className="relative mb-6 sm:mb-8">
                            <motion.div
                              className={`inline-flex p-4 sm:p-5 rounded-xl sm:rounded-2xl ${expandedService.iconBg} relative z-10`}
                              initial={{ scale: 0.8, rotate: -10 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div
                                className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${expandedService.gradient} opacity-100`}
                              />
                              <expandedService.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10" />
                            </motion.div>
                          </div>

                          {/* Content */}
                          <motion.h3
                            className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-primary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            {expandedService.title}
                          </motion.h3>

                          <motion.p
                            className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            {expandedService.description}
                          </motion.p>

                          {/* Additional features/highlights if you have them in your data */}
                          {expandedService.features && (
                            <motion.div
                              className="space-y-3 mb-8"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              {expandedService.features.map(
                                (feature: string, index: number) => (
                                  <motion.div
                                    key={feature}
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + index * 0.08 }}
                                  >
                                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                                    <span className="text-foreground text-sm sm:text-base">
                                      {feature}
                                    </span>
                                  </motion.div>
                                ),
                              )}
                            </motion.div>
                          )}

                          {/* Action button */}
                          <motion.a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300"
                            style={{
                              background: `linear-gradient(to-br, ${expandedService.gradient})`,
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="text-white">View Projects</span>
                            <ArrowRight size={18} className="text-white" />
                          </motion.a>

                          {/* Corner decoration */}
                          <div
                            className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${expandedService.gradient} rounded-full opacity-10 blur-2xl`}
                          />
                        </div>
                      </div>

                      {/* Shadow effect */}
                      <div
                        className={`absolute inset-0 rounded-2xl sm:rounded-3xl ${expandedService.shadowColor} shadow-2xl opacity-100 -z-10 blur-xl`}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              // Grid state with switching animation
              <motion.div
                key="grid"
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => {
                  setIsPaused(false);
                  setHoveredCard(null);
                }}
              >
                {cardOrder.map((title, index) => {
                  const service = services.find((s) => s.title === title)!;
                  const isActive = index === activeIndex % cardOrder.length;
                  const isHovered = hoveredCard === service.title;
                  const cardIndex = services.findIndex(
                    (s) => s.title === title,
                  );

                  return (
                    <motion.div
                      key={service.title}
                      layoutId={`card-${service.title}`}
                      initial={{ opacity: 0, y: 40 }}
                      animate={
                        isVisible
                          ? {
                              opacity: 1,
                              y: 0,
                              scale: isHovered ? 1.02 : isActive ? 1.005 : 1,
                            }
                          : {}
                      }
                      transition={{
                        opacity: { duration: 0.5, delay: cardIndex * 0.1 },
                        y: { duration: 0.5, delay: cardIndex * 0.1 },
                        scale: { duration: 0.3 },
                        layout: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
                      }}
                      className="group relative"
                      layout
                      onMouseEnter={() => setHoveredCard(service.title)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Card with border */}
                      <div
                        className={`relative h-full p-[2px] rounded-2xl sm:rounded-3xl bg-gradient-to-br ${service.gradient} ${
                          isHovered || isActive ? "opacity-100" : "opacity-50"
                        } transition-opacity duration-500`}
                      >
                        <div className="h-full bg-card rounded-[14px] sm:rounded-[22px] p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                          {/* Animated gradient background on hover */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} ${
                              isHovered ? "opacity-5" : "opacity-0"
                            } transition-opacity duration-500`}
                          />

                          {/* Floating particles effect */}
                          <div
                            className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/20 ${
                              isHovered ? "animate-pulse" : ""
                            }`}
                          />
                          <div
                            className={`absolute top-12 right-8 w-1 h-1 rounded-full bg-accent/30 ${
                              isHovered ? "animate-pulse" : ""
                            } delay-100`}
                          />

                          {/* Icon with animated ring */}
                          <div className="relative mb-4 sm:mb-6">
                            <motion.div
                              className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl ${service.iconBg} relative z-10`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div
                                className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} ${
                                  isHovered ? "opacity-100" : "opacity-0"
                                } transition-opacity duration-300`}
                              />
                              <service.icon
                                className={`w-5 h-5 sm:w-7 sm:h-7 relative z-10 transition-colors duration-300 ${
                                  isHovered ? "text-white" : "text-foreground"
                                }`}
                              />
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
                          <motion.button
                            onClick={() => handleExpand(service.title)}
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
                          </motion.button>

                          {/* Corner decoration */}
                          <div
                            className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full ${
                              isHovered ? "opacity-10" : "opacity-0"
                            } blur-2xl transition-opacity duration-500`}
                          />
                        </div>
                      </div>

                      {/* Shadow effect */}
                      <div
                        className={`absolute inset-0 rounded-2xl sm:rounded-3xl ${service.shadowColor} shadow-2xl ${
                          isHovered ? "opacity-100" : "opacity-0"
                        } transition-opacity duration-500 -z-10 blur-xl`}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </section>
  );
}
