import { allHeroImages, audios, files } from "@/assets/assets";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Download,
  Play,
  Pause,
  Facebook,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const heroImages = [
  {
    src: allHeroImages[0],
    alt: "Edwin Njogu - Full-Stack Developer",
  },
  {
    src: allHeroImages[1],
    alt: "Professional developer working on laptop",
  },
  {
    src: allHeroImages[2],
    alt: "African entrepreneur working on laptop",
  },
];

const socialLinks = [
  {
    icon: MessageCircle,
    href: "https://wa.me/254711140899",
    label: "WhatsApp",
    color: "hover:bg-green-500",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/harrison.njogu.94/",
    label: "Facebook",
    color: "hover:bg-blue-600",
  },
];

const typingTexts = [
  "I turn ideas into revenue",
  "I build scalable web apps",
  "I create AI automations",
  "I design stunning UIs",
];

// Color themes for each typing text
const textColors = [
  { hue: 200, text: "I turn ideas into revenue" },
  { hue: 280, text: "I build scalable web apps" },
  { hue: 35, text: "I create AI automations" },
  { hue: 160, text: "I design stunning UIs" },
];

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isDark, setIsDark] = useState(false); // Light mode by default
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentHue = textColors[currentTextIndex].hue;

  // Parallax mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms for different layers
  const bgX = useTransform(smoothX, [-500, 500], [20, -20]);
  const bgY = useTransform(smoothY, [-500, 500], [15, -15]);
  const midX = useTransform(smoothX, [-500, 500], [-10, 10]);
  const midY = useTransform(smoothY, [-500, 500], [-8, 8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Theme toggle effect
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Update CSS custom property for accent color
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--accent-hue",
      String(currentHue),
    );
  }, [currentHue]);

  // Preload images to prevent flickering
  useEffect(() => {
    const imagePromises = heroImages.map((img) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = img.src;
        image.onload = resolve;
        image.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true));
  }, []);

  // Image carousel effect
  useEffect(() => {
    if (!imagesLoaded) return;

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 11000);

    return () => clearInterval(imageInterval);
  }, [imagesLoaded]);

  // Typing effect
  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  // Handle audio ended event
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => {
        setIsPlaying(false);
      };
      audio.addEventListener("ended", handleEnded);
      return () => {
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 noise-overlay"
    >
      {/* Animated gradient backdrop - responds to cursor */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          x: bgX,
          y: bgY,
        }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: `
              radial-gradient(ellipse 100% 80% at 30% 20%, hsl(${currentHue} 70% 40% / 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 80% 60% at 70% 80%, hsl(${currentHue + 40} 60% 35% / 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 60% 50% at 50% 50%, hsl(${currentHue - 20} 50% 30% / 0.08) 0%, transparent 60%)
            `,
          }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      {/* Floating ambient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ x: midX, y: midY }}
        animate={{
          background: `radial-gradient(circle, hsl(${currentHue} 60% 50% / 0.4) 0%, transparent 70%)`,
          scale: [1, 1.2, 1],
        }}
        transition={{
          background: { duration: 1 },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-15 pointer-events-none"
        animate={{
          background: `radial-gradient(circle, hsl(${currentHue + 60} 50% 45% / 0.3) 0%, transparent 70%)`,
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          background: { duration: 1 },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <div className="container-custom px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
              style={{
                background: `hsl(${currentHue} 60% 50% / 0.15)`,
                color: `hsl(${currentHue} 70% 50%)`,
              }}
            >
              <motion.span
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                animate={{
                  backgroundColor: `hsl(${currentHue} 70% 55%)`,
                }}
                transition={{ duration: 0.8 }}
                style={{
                  boxShadow: `0 0 10px hsl(${currentHue} 70% 55%)`,
                }}
              />
              Available for Freelance
            </motion.div>

            {/* Rainbow headline text - Letter by letter animation */}
            <div className="overflow-hidden mb-3 sm:mb-4">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-black leading-tight tracking-tight">
                {"I'm Edwin Njogu".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block rainbow-text"
                    initial={{
                      y: 100,
                      opacity: 0,
                      filter: "blur(12px)",
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.1, 0.25, 1],
                      delay: 0.2 + index * 0.03,
                    }}
                    style={{
                      animationDelay: `${index * 0.05}s`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4"
            >
              Full-Stack & AI Developer
            </motion.p>

            {/* Typing Animation with dynamic color */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="h-6 sm:h-8 mb-3 sm:mb-4"
            >
              <motion.span
                className="text-sm sm:text-base md:text-lg lg:text-xl font-medium"
                animate={{
                  color: `hsl(${currentHue} 70% 50%)`,
                }}
                transition={{ duration: 0.8 }}
              >
                {displayText}
                <motion.span
                  className="inline-block w-0.5 h-4 sm:h-6 ml-1"
                  animate={{
                    opacity: [1, 0, 1],
                    backgroundColor: `hsl(${currentHue} 70% 50%)`,
                  }}
                  transition={{
                    opacity: { duration: 0.8, repeat: Infinity },
                    backgroundColor: { duration: 0.8 },
                  }}
                />
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-base sm:text-xl lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-lg font-body"
            >
              Transforming businesses through cutting-edge web solutions and
              intelligent automation. Let's build something extraordinary
              together.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-10"
            >
              <motion.a
                href={files.cv}
                download={files.cv}
                className="flex items-center gap-2 sm:gap-3 px-5 py-2.5 rounded-full font-body text-sm font-medium group"
                animate={{
                  background: `linear-gradient(135deg, hsl(${currentHue} 70% 50%) 0%, hsl(${currentHue + 30} 60% 45%) 100%)`,
                  color: isDark ? "hsl(30 12% 6%)" : "hsl(40 20% 98%)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 8px 24px hsl(${currentHue} 60% 40% / 0.4)`,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <Download
                  size={16}
                  className="sm:w-5 sm:h-5 group-hover:animate-bounce"
                />
                <span className="relative z-10">Download CV</span>
              </motion.a>

              <motion.a
                href="#projects"
                className="flex items-center gap-2 sm:gap-3 px-4 py-2.5 sm:px-6 rounded-full border-2 font-body text-sm sm:text-base font-medium transition-all group"
                animate={{
                  borderColor: `hsl(${currentHue} 50% 50% / 0.3)`,
                  color: "hsl(var(--foreground))",
                }}
                style={{
                  background: "hsl(var(--background) / 0.8)",
                  backdropFilter: "blur(10px)",
                }}
                whileHover={{
                  scale: 1.02,
                  borderColor: `hsl(${currentHue} 60% 55% / 0.5)`,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Projects</span>
                <ArrowRight
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform"
                />
              </motion.a>

              <motion.button
                onClick={toggleAudio}
                className="flex items-center gap-2 sm:gap-3 px-3 py-2.5 sm:px-4 rounded-full border-2 transition-all"
                animate={{
                  borderColor: `hsl(${currentHue} 50% 50% / 0.3)`,
                  color: "hsl(var(--foreground))",
                }}
                style={{
                  background: "hsl(var(--background) / 0.8)",
                  backdropFilter: "blur(10px)",
                }}
                whileHover={{
                  scale: 1.02,
                  borderColor: `hsl(${currentHue} 60% 55% / 0.5)`,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative">
                  {isPlaying ? (
                    <Pause size={16} className="sm:w-5 sm:h-5" />
                  ) : (
                    <Play size={16} className="sm:w-5 sm:h-5" />
                  )}
                  {isPlaying && (
                    <motion.span
                      className="absolute -inset-2 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                        backgroundColor: `hsl(${currentHue} 60% 50% / 0.3)`,
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1 rounded-full"
                      animate={{
                        backgroundColor: `hsl(${currentHue} 70% 55%)`,
                        height: isPlaying
                          ? `${Math.random() * 16 + 8}px`
                          : "4px",
                      }}
                      transition={{
                        backgroundColor: { duration: 0.8 },
                        height: isPlaying
                          ? {
                              duration: 0.5,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }
                          : {},
                      }}
                    />
                  ))}
                </div>
              </motion.button>
              <audio ref={audioRef} src={audios.hero} />
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    rel="noopener noreferrer"
                    target="_blank"
                    href={social.href}
                    className={`p-3 rounded-full ${social.color} hover:text-white transition-all`}
                    style={{
                      background: "hsl(var(--background) / 0.8)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid hsl(var(--border) / 0.5)",
                    }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image Carousel with Modern Design */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{ perspective: 1200 }}
            >
              {/* Dynamic glow backdrop */}
              <motion.div
                className="absolute inset-0 opacity-40"
                animate={{
                  background: `radial-gradient(ellipse 60% 60% at 50% 50%, hsl(${currentHue} 80% 50% / 0.3) 0%, transparent 70%)`,
                }}
                transition={{ duration: 1.2 }}
                style={{ filter: "blur(60px)" }}
              />

              <div className="relative z-10">
                <motion.div
                  className="relative w-[400px] h-[400px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] xl:w-[560px] xl:h-[560px]"
                  initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Main visual container with image */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl overflow-hidden mr-8"
                    animate={{
                      boxShadow: `
                        0 25px 80px -20px hsl(${currentHue} 70% 40% / 0.4),
                        0 0 0 1px hsl(${currentHue} 60% 60% / 0.2),
                        inset 0 1px 0 0 hsl(${currentHue} 80% 80% / 0.2)
                      `,
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Image Carousel */}
                    <AnimatePresence mode="sync" initial={false}>
                      <motion.img
                        key={currentImageIndex}
                        src={heroImages[currentImageIndex].src}
                        alt={heroImages[currentImageIndex].alt}
                        loading="eager"
                        fetchPriority="high"
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.05, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                      />
                    </AnimatePresence>

                    {/* Color overlay that syncs with role */}
                    <motion.div
                      className="absolute inset-0 mix-blend-overlay"
                      animate={{
                        background: `
                          linear-gradient(135deg, 
                            hsl(${currentHue} 60% 40% / 0.3) 0%,
                            transparent 50%,
                            hsl(${currentHue + 30} 50% 30% / 0.25) 100%
                          )
                        `,
                      }}
                      transition={{ duration: 1 }}
                    />

                    {/* Glass overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />
                  </motion.div>

                  {/* Orbiting rings */}
                  <motion.div
                    className="absolute -inset-6 rounded-3xl"
                    animate={{
                      borderColor: `hsl(${currentHue} 60% 60% / 0.3)`,
                      rotate: 360,
                    }}
                    transition={{
                      borderColor: { duration: 0.8 },
                      rotate: {
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    style={{ border: "1px solid" }}
                  />
                  <motion.div
                    className="absolute -inset-12 rounded-3xl"
                    animate={{
                      borderColor: `hsl(${currentHue} 50% 50% / 0.15)`,
                      rotate: -360,
                    }}
                    transition={{
                      borderColor: { duration: 0.8 },
                      rotate: {
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    style={{ border: "1px solid" }}
                  />
                </motion.div>

                {/* Floating accent particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      left: `${20 + (i % 4) * 20}%`,
                      top: `${15 + Math.floor(i / 4) * 50}%`,
                    }}
                    animate={{
                      backgroundColor: `hsl(${currentHue + i * 15} 70% 60%)`,
                      y: [-15, 15, -15],
                      x: [-8, 8, -8],
                      opacity: [0.4, 0.8, 0.4],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      backgroundColor: { duration: 0.8 },
                      y: {
                        duration: 3 + i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      x: {
                        duration: 4 + i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      opacity: {
                        duration: 2.5 + i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      scale: {
                        duration: 3.5 + i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full flex items-start justify-center p-2"
          style={{ border: `2px solid hsl(${currentHue} 50% 50% / 0.3)` }}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full"
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.5, 1],
              backgroundColor: `hsl(${currentHue} 60% 55%)`,
            }}
            transition={{
              y: { duration: 2, repeat: Infinity },
              opacity: { duration: 2, repeat: Infinity },
              backgroundColor: { duration: 0.8 },
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
