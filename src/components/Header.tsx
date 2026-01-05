import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

import { useTheme } from "@/hooks/useTheme";
import { useActiveSection } from "@/hooks/useIntersectionObserver";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { id: "hero", label: "Home", href: "/#hero", icon: "🏠" },
  { id: "services", label: "Services", href: "/#services" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "about", label: "About", href: "/#about" },
  { id: "hire-me", label: "Hire Me", href: "/hire-me", isPage: true },
  { id: "pricing", label: "Pricing", href: "/pricing", isPage: true },
  {
    id: "policies",
    label: "Policies",
    href: "/agreement-policy",
    isPage: true,
  },
];

const sectionColors: Record<string, string> = {
  hero: "bg-slate-900/95 dark:bg-slate-900/95",
  services: "bg-primary/95",
  projects: "bg-[hsl(250,100%,60%)]/95",
  skills: "bg-accent/95",
  testimonials: "bg-[hsl(340,100%,55%)]/95",
  about: "bg-[hsl(180,70%,45%)]/95",
};

const lightModeSectionColors: Record<string, string> = {
  // hero: "bg-white/95",
  services: "bg-primary/95",
  projects: "bg-[hsl(250,100%,60%)]/95",
  skills: "bg-accent/95",
  testimonials: "bg-[hsl(340,100%,55%)]/95",
  about: "bg-[hsl(180,70%,45%)]/95",
};

const socialLinks = [
  {
    icon: GrInstagram,
    href: "https://www.instagram.com/harrytechservices/",
    label: "Instagram",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/harrison.njogu.94/",
    label: "Facebook",
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@254harryedu?lang=en",
    label: "TikTok",
  },
];

const ctaTexts = ["Get Quote", "Contact Me"];
const ctaColors = ["from-primary to-accent", "from-accent to-primary"];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [ctaIndex, setCtaIndex] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const activeSection = useActiveSection(
    navItems.filter((i) => !i.isPage).map((item) => item.id)
  );

  // CTA button text and color animation
  useEffect(() => {
    const ctaInterval = setInterval(() => {
      setCtaIndex((prev) => (prev + 1) % ctaTexts.length);
    }, 3000);
    return () => clearInterval(ctaInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (item: (typeof navItems)[0]) => {
    if (item.isPage) return;
    if (isHomePage) {
      scrollToSection(item.id);
    }
  };

  // Light mode: start light, scroll to dark; Dark mode: always dark
  const getNavBg = () => {
    if (!isHomePage) return "bg-slate-900/95";

    if (theme === "light") {
      // Light mode: white when not scrolled, colored/dark when scrolled
      if (!isScrolled) {
        return "bg-white/95";
      }
      return lightModeSectionColors[activeSection] || "bg-slate-900/95";
    }
    return sectionColors[activeSection] || sectionColors.hero;
  };

  const navBg = getNavBg();
  // Determine if we need dark text (light background)
  const isLightHeader = theme === "light" && !isScrolled && isHomePage;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Top Info Bar - Hidden on scroll */}
        <motion.div
          className={`bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white transition-all duration-300 ${
            isScrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
          }`}
        >
          <div className="container-custom px-4">
            <div className="hidden lg:flex items-center justify-center py-2 text-sm gap-8">
              {/* CTA Text */}
              <motion.span
                className="text-xs font-bold text-primary uppercase tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Let's Build Together
              </motion.span>

              {/* Social Links - Centered */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-all duration-300"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon size={14} />
                  </motion.a>
                ))}
              </div>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Main Navigation Bar */}
        <motion.div
          className={`${navBg} backdrop-blur-xl transition-all duration-500 shadow-lg`}
          layout
        >
          <div className="container-custom px-4">
            <div className="flex items-center justify-between py-2">
              {/* Logo */}
              <motion.a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  if (isHomePage) scrollToSection("hero");
                  else window.location.href = "/";
                }}
                className={`flex items-center gap-2 ${
                  isLightHeader ? "text-slate-900" : "text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black text-sm md:text-base shadow-lg">
                  HT
                </div>
                <div className="flex flex-col">
                  <span
                    className={`text-base md:text-lg font-black tracking-tight ${
                      isLightHeader ? "text-slate-900" : "text-white"
                    }`}
                  >
                    Harry<span className="text-primary">Tech</span>
                  </span>
                  <span
                    className={`text-[8px] md:text-[10px] -mt-1 ${
                      isLightHeader ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    Web Solutions
                  </span>
                </div>
              </motion.a>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center">
                <div
                  className={`flex items-center rounded-full p-1 ${
                    isLightHeader ? "bg-slate-100" : "bg-slate-800/50"
                  }`}
                >
                  {navItems.map((item, index) => {
                    const isActive = item.isPage
                      ? location.pathname === item.href
                      : isHomePage && activeSection === item.id;

                    return item.isPage ? (
                      <Link key={item.id} to={item.href}>
                        <motion.span
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 inline-block ${
                            isActive
                              ? "bg-primary text-white shadow-lg"
                              : isLightHeader
                              ? "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                              : "text-slate-300 hover:text-white hover:bg-white/10"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {index === 0 && <span className="mr-1">🏠</span>}
                          {item.label}
                        </motion.span>
                      </Link>
                    ) : (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={(e) => {
                          if (isHomePage) {
                            e.preventDefault();
                            handleNavClick(item);
                          }
                        }}
                      >
                        <motion.span
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 inline-block ${
                            isActive
                              ? "bg-primary text-white shadow-lg"
                              : isLightHeader
                              ? "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                              : "text-slate-300 hover:text-white hover:bg-white/10"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {index === 0 && <span className="mr-1">🏠</span>}
                          {item.label}
                        </motion.span>
                      </a>
                    );
                  })}
                </div>
              </nav>

              {/* Right Side Actions */}
              <div className="flex items-center gap-2 md:gap-3">
                {/* Theme Toggle - Mobile */}
                <motion.button
                  onClick={toggleTheme}
                  className={`lg:hidden p-2 rounded-full transition-colors ${
                    isLightHeader
                      ? "bg-slate-200 text-slate-700 hover:bg-slate-300"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                </motion.button>

                {/* Animated CTA Button */}
                <Link to="/get-quote">
                  <motion.span
                    className={`hidden sm:flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-full bg-gradient-to-r ${ctaColors[ctaIndex]} text-white font-semibold text-sm shadow-lg overflow-hidden relative`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={ctaIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {ctaTexts[ctaIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </motion.span>
                </Link>

                {/* Mobile Menu Button */}
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`lg:hidden p-2 rounded-full ${
                    isLightHeader
                      ? "bg-slate-200 text-slate-700"
                      : "bg-white/10 text-white"
                  }`}
                  whileTap={{ scale: 0.9 }}
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-indigo-900 backdrop-blur-xl border-t border-white/10"
            >
              <div className="container-custom px-4 py-4">
                {/* Social Links - Mobile */}
                <div className="flex items-center justify-center gap-4 mb-4 pb-4 border-b border-white/10">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    Let's Build Together
                  </span>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-all"
                      aria-label={social.label}
                    >
                      <social.icon size={14} />
                    </a>
                  ))}
                </div>

                <nav className="flex flex-col gap-1">
                  {navItems.map((item, index) =>
                    item.isPage ? (
                      <Link
                        key={item.id}
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <motion.span
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`px-4 py-3 rounded-xl font-medium transition-colors block ${
                            location.pathname === item.href
                              ? "bg-primary text-white"
                              : "text-slate-300 hover:bg-white/10"
                          }`}
                        >
                          {index === 0 && <span className="mr-2">🏠</span>}
                          {item.label}
                        </motion.span>
                      </Link>
                    ) : (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={(e) => {
                          if (isHomePage) {
                            e.preventDefault();
                            scrollToSection(item.id);
                          }
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <motion.span
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`px-4 py-3 rounded-xl font-medium transition-colors block ${
                            isHomePage && activeSection === item.id
                              ? "bg-primary text-white"
                              : "text-slate-300 hover:bg-white/10"
                          }`}
                        >
                          {index === 0 && <span className="mr-2">🏠</span>}
                          {item.label}
                        </motion.span>
                      </a>
                    )
                  )}
                </nav>

                {/* Mobile CTA */}
                <Link
                  to="/get-quote"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 px-4 py-3 rounded-xl bg-primary text-white font-semibold text-center"
                  >
                    Get a Free Quote
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "h-16" : "h-24 lg:h-28"
        }`}
      />
    </>
  );
}
