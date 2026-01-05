import { motion } from "framer-motion";
import { Facebook, MessageCircle, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const quickLinks = [
  { label: "Home", href: "/#hero" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
];

const services = [
  { label: "E-commerce Development", href: "/#services" },
  { label: "Business Websites", href: "/#services" },
  { label: "Management Systems", href: "/#services" },
  { label: "AI Solutions", href: "/#services" },
];

const legal = [
  { label: "Terms of Service", href: "/agreement-policy" },
  { label: "Privacy Policy", href: "/agreement-policy" },
  { label: "Agreement", href: "/agreement-policy" },
];

const socialLinks = [
  {
    icon: MessageCircle,
    href: "https://wa.me/254711140899",
    label: "WhatsApp",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/harrison.njogu.94/",
    label: "Facebook",
  },
  { icon: Mail, href: "mailto:harrynjogu4996@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border px-5">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link
              to="https://www.harrytechservices.com"
              className="inline-block mb-4"
            >
              <Logo className="h-10 w-10" />
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Building digital experiences that drive results. Let's turn your
              vision into reality.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="p-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    rel="noopener noreferrer"
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {legal.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border flex justify-center">
        <div className="container-custom py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {new Date().getFullYear()} . Made with{" "}
            <Heart size={14} className="text-red-500 fill-red-500" /> All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Developed by</span>
            <Link
              to="https://www.harrytechservices.com"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Logo className="h-5 w-5" showText={false} />
              <span className="font-semibold">HarryTech</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
