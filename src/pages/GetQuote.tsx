import { motion } from "framer-motion";
import { Send, Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "harrynjogu4996@gmail.com",
    href: "mailto:harrynjogu4996@gmail.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254711140899",
    href: "tel:+254711140899",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/254711140899",
    gradient: "from-green-400 to-green-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    href: "#",
    gradient: "from-violet-500 to-purple-500",
  },
];

const services = [
  "E-commerce Website",
  "Management System",
  "AI Agent & Automation",
  "Service Website",
  "Restaurant Website",
  "Custom Project",
];

const budgetRanges = [
  `below Ksh. 10,000`,
  "Ksh. 10,000 - ksh. 30,000",
  "Ksh. 30,000 - ksh. 60,000",
  "Ksh. 60,000 - ksh. 90,000",
  "Ksh. 90,000 - ksh. 120,000",
  "Ksh. 120,000 - ksh. 1500,000",
  "Ksh. 150,000 - ksh. 200,000",
  "Above Ksh. 200, 000",
];

export default function GetQuote() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  // SEND EMAIL
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const params = {
        user_name: formData.name,
        user_email: formData.email,
        subject: `Inquiry for ${formData.service} - Budget ${formData.budget}`,
        message: formData.message,
      };

      const result = await emailjs.send(
        "service_tgrt2af",
        "template_jv06kbw",
        params,
        "plzUCWvqYDHykDx_K"
      );

      if (result.status !== 200 || result.text !== "OK") {
        throw new Error("Email sending failed");
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
        variant: "success",
      });
      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen px-3 bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Get a Quote
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              Let's Work <span className="gradient-text">Together</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas
              to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-card border border-border rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <item.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs md:text-base text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="text-xs md:text-base  font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Response Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 bg-gradient-to-r from-primary to-accent rounded-3xl p-6 text-white"
              >
                <h4 className="text-base md:text-xl font-bold mb-2">
                  Quick Response
                </h4>
                <p className="text-white/80 text-xs md:text-sm mb-4">
                  Need immediate assistance? Reach out directly via WhatsApp or
                  schedule a call.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/254711140899"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl transition-colors"
                  >
                    <MessageCircle size={18} />
                    <span className="font-medium">WhatsApp</span>
                  </a>
                  <a
                    href="tel:+254711140899"
                    className="flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-xl hover:bg-white/90 transition-colors"
                  >
                    <Phone size={18} />
                    <span className="font-medium">Call Now</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-card border border-border rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-8">Request a Quote</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full btn-gradient flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
