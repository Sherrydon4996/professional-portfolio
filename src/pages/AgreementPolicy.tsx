import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  CreditCard,
  FileText,
  Shield,
  Users,
  XCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QRCodeDisplay from "@/components/QRCode";
import { useEffect } from "react";

const sections = [
  {
    title: "Payment Structure",
    icon: CreditCard,
    color: "text-green-500",
    content: `All projects follow a structured payment plan to ensure smooth delivery and mutual trust:

**40% Deposit (Project Initiation)**
• Required before any work begins
• Secures your project slot in my schedule
• Covers initial planning, research, and resource allocation
• Non-refundable once work has commenced

**40% Milestone Payment (90% Completion)**
• Due when the project reaches 90% completion
• Client review period begins at this stage
• Includes up to 2 rounds of revisions within scope
• Must be cleared before final development phase

**20% Final Payment (Completion & Handover)**
• Due upon final approval and before handover
• All source files, credentials, and assets transferred
• Training session included (if applicable)
• 30-day post-launch support begins`,
  },
  {
    title: "Project Stalling & Non-Payment",
    icon: XCircle,
    color: "text-red-500",
    content: `**Important Notice on Payment Compliance:**

• Projects will be **immediately stalled** if payment milestones are not met
• No further work will be done until outstanding payments are cleared
• **Projects will NOT be handed over** until full payment is received
• After 30 days of non-payment, the project may be terminated
• All work completed remains the property of HarryTech until full payment

**Late Payment Consequences:**
• 7+ days late: Work paused, daily late fee of 2% may apply
• 30+ days late: Project terminated, work may be repurposed
• Legal action may be pursued for significant outstanding amounts`,
  },
  {
    title: "Client Responsibilities",
    icon: Users,
    color: "text-blue-500",
    content: `**Content & Materials Provision:**

Clients are required to provide all necessary project materials including:
• Text content, company information, and descriptions
• High-quality images, logos, and brand assets
• Product information (for e-commerce projects)
• Any specific design preferences or references

**Additional Charges Apply When:**
• HarryTech is required to source or create content
• Stock images need to be purchased
• Professional photography/videography is needed
• Copywriting services are required
• Multiple language translations needed

**Content Sourcing Fee:** KES 5,000 - 50,000 depending on scope
**Image Sourcing:** KES 500 - 2,000 per premium image
**Copywriting:** KES 3,000 - 15,000 per page`,
  },
  {
    title: "Timeline & Delays",
    icon: Clock,
    color: "text-orange-500",
    content: `**Project Timelines:**

• Timelines are estimates based on project scope and complexity
• Client response delays will extend the project timeline
• Each revision round allows 48-72 hours for feedback
• Unresponsive clients (7+ days) may have projects deprioritized

**Client-Caused Delays:**
• Delayed feedback or content provision extends deadline
• Scope changes restart the timeline from the affected phase
• Projects paused by client for 30+ days may require reactivation fee

**Developer Delays:**
• Transparent communication on any delays
• No additional charges for developer-caused delays
• Expedited completion where possible`,
  },
  {
    title: "Revision Policy",
    icon: FileText,
    color: "text-purple-500",
    content: `**Included Revisions:**

• Basic & Professional packages: 2 rounds of revisions
• Enterprise packages: 3 rounds of revisions
• Each round allows reasonable modifications within scope

**What Counts as a Revision Round:**
• Collected feedback submitted at one time
• Changes within the agreed project scope
• Color, font, or layout adjustments

**Additional Revision Charges:**
• Beyond included rounds: KES 5,000 - 15,000 per round
• Major structural changes: Quoted separately
• New feature requests: Treated as scope expansion`,
  },
  {
    title: "Intellectual Property",
    icon: Shield,
    color: "text-cyan-500",
    content: `**Ownership Rights:**

Upon full payment:
• Client receives full ownership of custom code and designs
• All source files and assets are transferred
• Client may modify, distribute, or sell the work

**Before Full Payment:**
• HarryTech retains all rights to work produced
• No files or credentials will be shared
• Work may not be used, published, or distributed

**Third-Party Assets:**
• Licensed fonts, images, plugins remain under their licenses
• Documentation provided for all licensed assets
• Client responsible for ongoing license compliance

**Portfolio Rights:**
• HarryTech reserves the right to showcase work in portfolio
• Can be waived with written agreement and additional fee`,
  },
  {
    title: "Refund Policy",
    icon: AlertCircle,
    color: "text-amber-500",
    content: `**Deposit Refunds:**

• Deposits are **non-refundable** once work has begun
• Full refund available only if no work has commenced
• Partial refund (minus hours worked) if cancelled within 48 hours

**Cancellation Charges:**
• 0-25% complete: 40% of total project cost
• 26-50% complete: 60% of total project cost
• 51-90% complete: 80% of total project cost
• 91-100% complete: Full payment required

**Satisfaction Guarantee:**
• Up to 2 revision rounds to address concerns
• Mediation available for disputes
• Clear documentation of all agreements`,
  },
  {
    title: "Confidentiality & Privacy",
    icon: Shield,
    color: "text-emerald-500",
    content: `**Data Protection:**

• All client information handled with strict confidentiality
• Project details never shared with third parties
• Secure storage of all credentials and sensitive data
• NDA available upon request (additional fee may apply)

**Information Collected:**
• Name, email, phone number
• Business details and requirements
• Project specifications and preferences

**Data Retention:**
• Project files retained for 1 year post-completion
• Client data securely deleted upon request
• Backups maintained for support purposes only`,
  },
];

export default function AgreementPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Legal & Policies
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              Agreement & <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before engaging my services.
              Clear agreements make for successful projects.
            </p>
          </motion.div>

          {/* Quick Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-4 mb-12"
          >
            {[
              { label: "40%", desc: "Deposit to Start", icon: CreditCard },
              { label: "40%", desc: "At 90% Complete", icon: CheckCircle },
              { label: "20%", desc: "Final Handover", icon: FileText },
            ].map((item, i) => (
              <motion.div
                key={item.desc}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-black text-primary">
                    {item.label}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-muted ${section.color}`}>
                    <section.icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                <div className="text-muted-foreground whitespace-pre-line leading-relaxed prose prose-sm dark:prose-invert max-w-none">
                  {section.content.split("\n").map((line, i) => {
                    if (line.startsWith("**") && line.endsWith("**")) {
                      return (
                        <h3
                          key={i}
                          className="text-foreground font-semibold mt-4 mb-2"
                        >
                          {line.replace(/\*\*/g, "")}
                        </h3>
                      );
                    }
                    if (line.startsWith("**")) {
                      const parts = line.split("**");
                      return (
                        <p key={i}>
                          <strong className="text-foreground">
                            {parts[1]}
                          </strong>
                          {parts[2]}
                        </p>
                      );
                    }
                    if (line.startsWith("•")) {
                      return (
                        <p key={i} className="ml-4">
                          {line}
                        </p>
                      );
                    }
                    return <p key={i}>{line}</p>;
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* QR Code Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex flex-col items-center"
          >
            <h3 className="text-xl font-bold mb-4">Scan to View Portfolio</h3>
            <QRCodeDisplay url="https://www.harrytechservices.com" size={180} />
          </motion.div>

          {/* Last Updated */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center text-muted-foreground text-sm mt-12"
          >
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </motion.p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
