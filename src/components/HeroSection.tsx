import { allHeroImages, audios, files } from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion";
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
export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  // Image carousel effect
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 11000);
    return () => clearInterval(imageInterval);
  }, []);
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
      className="min-h-screen flex items-center relative overflow-hidden pt-24"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/5 to-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>
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
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
              Available for Freelance
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-black leading-tight mb-3 sm:mb-4 animated-gradient-text"
            >
              Hi, I'm Edwin Njogu
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4"
            >
              Full-Stack & AI Developer
            </motion.p>
            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="h-6 sm:h-8 mb-3 sm:mb-4"
            >
              <span className="text-sm sm:text-base md:text-lg lg:text-xl text-primary font-medium">
                {displayText}
                <motion.span
                  className="inline-block w-0.5 h-4 sm:h-6 bg-primary ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-base sm:text-xl lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-lg"
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
              {/* Download CV Button - Updated with href and download */}
              <motion.a
                href={files.cv}
                download={files.cv}
                className="btn-gradient flex items-center gap-2 sm:gap-3 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download
                  size={16}
                  className="sm:w-5 sm:h-5 group-hover:animate-bounce"
                />
                <span className="relative z-10">Download CV</span>
              </motion.a>
              {/* View Projects Button */}
              <motion.a
                href="#projects"
                className="flex items-center gap-2 sm:gap-3 px-4 py-2.5 sm:px-6 sm:py-3 lg:py-4 rounded-xl border-2 border-foreground/20 bg-card hover:border-foreground/40 transition-all group text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Projects</span>
                <ArrowRight
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform"
                />
              </motion.a>
              {/* Audio Button */}
              <motion.button
                onClick={toggleAudio}
                className="flex items-center gap-2 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3 lg:py-4 rounded-xl border-2 border-primary/20 bg-card hover:border-primary/40 transition-all"
                whileHover={{ scale: 1.02 }}
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
                      className="absolute -inset-2 rounded-full bg-primary/20"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.span
                      key={i}
                      className={`w-1 bg-primary rounded-full ${
                        isPlaying ? "wave-bar" : ""
                      }`}
                      style={{
                        height: isPlaying
                          ? `${Math.random() * 16 + 8}px`
                          : "4px",
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
                    className={`glass-card p-3 rounded-full ${social.color} hover:text-white transition-all`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Profile Image Carousel - Large and responsive */}
              <motion.div
                className="relative z-10 overflow-hidden"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={heroImages[currentImageIndex].src}
                    alt={heroImages[currentImageIndex].alt}
                    loading="eager"
                    fetchPriority="high"
                    className="w-[400px] h-auto sm:w-[380px] md:w-[420px] lg:w-[480px] xl:w-[560px] object-contain drop-shadow-2xl"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </AnimatePresence>
                {/* Tags positioned on the person */}
                <motion.div
                  className="absolute top-2 sm:top-4 -left-2 sm:-left-6 glass-card px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-lg z-20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
                  transition={{
                    delay: 0.5,
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-xs sm:text-sm font-semibold text-primary">
                    Developer
                  </span>
                </motion.div>
                <motion.div
                  className="absolute top-12 sm:top-16 -right-2 sm:-right-8 glass-card px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-lg z-20"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0, y: [0, 5, 0] }}
                  transition={{
                    delay: 0.7,
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-xs sm:text-sm font-semibold text-accent">
                    AI Expert
                  </span>
                </motion.div>
                <motion.div
                  className="absolute top-1/3 -left-4 sm:-left-12 glass-card px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-lg z-20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
                  transition={{
                    delay: 0.9,
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-xs sm:text-sm font-semibold">
                    React.js
                  </span>
                </motion.div>
                <motion.div
                  className="absolute top-1/2 -right-4 sm:-right-10 glass-card px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-lg z-20"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
                  transition={{
                    delay: 1.1,
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-xs sm:text-sm font-semibold">
                    Node.js
                  </span>
                </motion.div>
              </motion.div>
              {/* Floating Stats Elements */}
              <motion.div
                className="absolute -top-2 right-0 sm:-right-4 glass-card px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-lg z-20"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-lg sm:text-xl">🚀</span>
                <span className="ml-1.5 sm:ml-2 font-semibold text-xs sm:text-sm">
                  2+ Years
                </span>
              </motion.div>
              <motion.div
                className="absolute bottom-8 sm:bottom-12 -left-4 sm:-left-8 glass-card px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-lg z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <span className="text-lg sm:text-xl">💼</span>
                <span className="ml-1.5 sm:ml-2 font-semibold text-xs sm:text-sm">
                  10+ Projects
                </span>
              </motion.div>
              <motion.div
                className="absolute bottom-1/3 -right-4 sm:-right-12 glass-card px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-lg z-20"
                animate={{ x: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <span className="text-lg sm:text-xl">⭐</span>
                <span className="ml-1.5 sm:ml-2 font-semibold text-xs sm:text-sm">
                  100% Quality
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
