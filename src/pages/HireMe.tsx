import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  Calendar,
  ArrowRight,
  Mail,
  X,
  Send,
  User,
  Phone,
  FileText,
  Clock,
  Code,
  Briefcase,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const benefits = [
  "High-quality, clean code",
  "User-centric design approach",
  "Fast turnaround times",
  "Clear communication",
  "Post-launch support",
  "SEO optimization included",
];
const techStack = ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"];
const allTechnologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML/CSS",
  "Node.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Supabase",
  "Appwrite",
  "WordPress",
  "Shopify",
  "Airtable",
  "PlanetScale",
  "shadcn/ui",
  "AI Agents",
  "Automation",
  "Tutor",
  "Express.js",
  "REST API",
  "GraphQL",
];
const projectTypes = [
  "Website Development",
  "E-commerce Store",
  "Web Application",
  "School Assignment/Project",
  "Portfolio/Personal Site",
  "Business Website",
  "Landing Page",
  "AI Integration",
  "Automation System",
  "Other",
];

export default function HireMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectName: "",
    projectType: "",
    proposedPayment: "",
    startDate: "",
    deadline: "",
    technologies: [] as string[],
    description: "",
  });

  const handleTechToggle = (tech: string) =>
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.includes(tech)
        ? prev.technologies.filter((t) => t !== tech)
        : [...prev.technologies, tech],
    }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `🚀 *New Project Proposal*\n\n👤 *Client:* ${
      formData.name
    }\n📧 *Email:* ${formData.email}\n📱 *Phone:* ${
      formData.phone
    }\n\n📋 *Project:* ${formData.projectName}\n📁 *Type:* ${
      formData.projectType
    }\n💰 *Proposed Budget:* KES ${
      formData.proposedPayment
    }\n📅 *Start Date:* ${formData.startDate}\n⏰ *Deadline:* ${
      formData.deadline || "Flexible"
    }\n\n🛠 *Technologies:* ${
      formData.technologies.join(", ") || "To be discussed"
    }\n\n📝 *Description:*\n${formData.description}`;
    window.open(
      `https://wa.me/254711140899?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    toast({
      title: "Proposal Sent!",
      description: "Your project proposal has been sent via WhatsApp.",
    });
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                Let's Build{" "}
                <span className="gradient-text">Something Great</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I am currently available for freelance projects and full-time
                opportunities. Whether you need a new website, a complex web
                application, or a design system, I'm here to help.
              </p>
              <div className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => setIsFormOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full"
                  >
                    Propose a Project <ArrowRight size={18} />
                  </Button>
                </motion.div>
                <motion.a
                  href="mailto:harrynjogu4996@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card text-foreground font-semibold rounded-full hover:bg-muted transition-colors"
                >
                  <Mail size={18} /> Email Me
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:sticky lg:top-32"
            >
              <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <div>
                    <p className="font-semibold">Available for Work</p>
                    <p className="text-sm text-muted-foreground">
                      Response time: &lt; 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-6 pb-6 border-b border-border">
                  <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-semibold">Next Available Slot</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(
                        Date.now() + 7 * 24 * 60 * 60 * 1000
                      ).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-3">Preferred Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-muted text-sm rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsFormOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card border border-border rounded-3xl p-6 md:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Propose a Project</h2>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <User className="w-4 h-4" /> Your Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Mail className="w-4 h-4" /> Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <Phone className="w-4 h-4" /> Phone Number *
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+254 700 000 000"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Briefcase className="w-4 h-4" /> Project Name *
                    </label>
                    <Input
                      required
                      value={formData.projectName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectName: e.target.value,
                        })
                      }
                      placeholder="My Awesome Project"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <FileText className="w-4 h-4" /> Project Type *
                    </label>
                    <select
                      required
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectType: e.target.value,
                        })
                      }
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                    >
                      <option value="">Select type...</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      💰 Budget (KES) *
                    </label>
                    <Input
                      type="number"
                      required
                      value={formData.proposedPayment}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          proposedPayment: e.target.value,
                        })
                      }
                      placeholder="50000"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Calendar className="w-4 h-4" /> Start Date *
                    </label>
                    <Input
                      type="date"
                      required
                      value={formData.startDate}
                      onChange={(e) =>
                        setFormData({ ...formData, startDate: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Clock className="w-4 h-4" /> Deadline
                    </label>
                    <Input
                      type="date"
                      value={formData.deadline}
                      onChange={(e) =>
                        setFormData({ ...formData, deadline: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-3">
                    <Code className="w-4 h-4" /> Technologies
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {allTechnologies.map((tech) => (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => handleTechToggle(tech)}
                        className={`px-3 py-1.5 text-sm rounded-full border transition-all ${
                          formData.technologies.includes(tech)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-muted border-border hover:border-primary/50"
                        }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    📝 Project Description *
                  </label>
                  <Textarea
                    required
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Describe your project..."
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Send className="w-4 h-4" /> Send Proposal via WhatsApp
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
