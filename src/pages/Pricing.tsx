import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Bot, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tabs = [
  { id: "websites", label: "Websites", icon: Globe },
  { id: "apps", label: "Management Systems", icon: Smartphone },
  { id: "ai", label: "AI & Automation", icon: Bot },
];

const websitePrices = [
  {
    name: "Personal Portfolio",
    range: "KES 15,000 - 40,000",
    features: ["3-5 pages", "Responsive design", "Contact form", "SEO basics"],
  },
  {
    name: "Business Website",
    range: "KES 30,000 - 100,000",
    features: ["5-10 pages", "Custom design", "CMS integration", "Analytics"],
  },
  {
    name: "Landing Page",
    range: "KES 10,000 - 25,000",
    features: [
      "Single page",
      "High conversion",
      "A/B testing ready",
      "Fast loading",
    ],
  },
  {
    name: "Restaurant Website",
    range: "KES 30,000 - 70,000",
    features: [
      "Menu display",
      "Online reservations",
      "Location map",
      "Gallery",
    ],
  },
  {
    name: "Real Estate Website",
    range: "KES 50,000 - 150,000",
    features: [
      "Property listings",
      "Search filters",
      "Virtual tours",
      "Agent profiles",
    ],
  },
  {
    name: "E-commerce Store",
    range: "KES 50,000 - 200,000",
    features: [
      "Product catalog",
      "Payment gateway",
      "Inventory management",
      "Order tracking",
    ],
  },
  {
    name: "Hotel/Booking Website",
    range: "KES 60,000 - 150,000",
    features: [
      "Room listings",
      "Booking system",
      "Payment integration",
      "Reviews",
    ],
  },
  {
    name: "School/Education Website",
    range: "KES 40,000 - 100,000",
    features: [
      "Course listings",
      "Student portal",
      "Online payments",
      "News/Events",
    ],
  },
  {
    name: "Blog/News Portal",
    range: "KES 20,000 - 60,000",
    features: ["Article management", "Categories", "Comments", "Newsletter"],
  },
  {
    name: "NGO/Charity Website",
    range: "KES 20,000 - 70,000",
    features: [
      "Donation system",
      "Event calendar",
      "Volunteer signup",
      "Impact stories",
    ],
  },
  {
    name: "Healthcare/Clinic Website",
    range: "KES 40,000 - 100,000",
    features: [
      "Appointment booking",
      "Doctor profiles",
      "Services listing",
      "Patient portal",
    ],
  },
  {
    name: "Corporate Website",
    range: "KES 60,000 - 200,000",
    features: [
      "Multiple departments",
      "Career portal",
      "Investor relations",
      "Multi-language",
    ],
  },
  {
    name: "Church/Religious Website",
    range: "KES 25,000 - 60,000",
    features: [
      "Event calendar",
      "Sermons/Media",
      "Giving portal",
      "Community features",
    ],
  },
  {
    name: "Fitness/Gym Website",
    range: "KES 30,000 - 80,000",
    features: [
      "Class schedules",
      "Membership plans",
      "Trainer profiles",
      "Online booking",
    ],
  },
  {
    name: "Directory/Listing Website",
    range: "KES 70,000 - 180,000",
    features: [
      "Business listings",
      "Search & filters",
      "User accounts",
      "Reviews & ratings",
    ],
  },
];

const managementPrices = [
  {
    name: "Employee Management System",
    range: "KES 100,000 - 200,000",
    features: [
      "Payroll processing",
      "Attendance tracking",
      "Performance management",
      "Employee database",
    ],
  },
  {
    name: "Property Management System",
    range: "KES 120,000 - 250,000",
    features: [
      "Tenant management",
      "Rent collection",
      "Maintenance requests",
      "Financial reporting",
    ],
  },
  {
    name: "Inventory Management System",
    range: "KES 50,000 - 150,000",
    features: [
      "Stock tracking",
      "Order management",
      "Barcode integration",
      "Reports and analytics",
    ],
  },
  {
    name: "Customer Relationship Management (CRM)",
    range: "KES 100,000 - 200,000",
    features: [
      "Lead management",
      "Sales pipeline",
      "Customer support",
      "Marketing automation",
    ],
  },
  {
    name: "School Management System",
    range: "KES 300,000 - 500,000",
    features: [
      "Student records",
      "Fee management",
      "Timetable scheduling",
      "Parent portal",
    ],
  },
  {
    name: "Hospital Management System",
    range: "KES 200,000 - 500,000",
    features: [
      "Patient records",
      "Appointment scheduling",
      "Billing",
      "Inventory for medicines",
    ],
  },
  {
    name: "Supply Chain Management System",
    range: "KES 150,000 - 300,000",
    features: [
      "Vendor management",
      "Logistics tracking",
      "Procurement",
      "Demand forecasting",
    ],
  },
  {
    name: "Project Management System",
    range: "KES 50,000 - 150,000",
    features: [
      "Task assignment",
      "Time tracking",
      "Resource allocation",
      "Progress reporting",
    ],
  },
];

const aiPrices = [
  {
    name: "AI Chatbot (Basic)",
    range: "KES 30,000 - 60,000",
    features: [
      "FAQ responses",
      "Website integration",
      "24/7 availability",
      "Basic analytics",
    ],
  },
  {
    name: "AI Chatbot (Advanced)",
    range: "KES 80,000 - 180,000",
    features: [
      "Custom training",
      "Multi-language",
      "CRM integration",
      "Advanced analytics",
    ],
  },
  {
    name: "Customer Support Bot",
    range: "KES 50,000 - 120,000",
    features: [
      "Ticket management",
      "Escalation system",
      "Knowledge base",
      "Live handoff",
    ],
  },
  {
    name: "Sales/Lead Gen Bot",
    range: "KES 60,000 - 150,000",
    features: [
      "Lead qualification",
      "Appointment booking",
      "CRM sync",
      "Follow-ups",
    ],
  },
  {
    name: "WhatsApp Business Bot",
    range: "KES 40,000 - 100,000",
    features: [
      "Auto-responses",
      "Product catalog",
      "Order taking",
      "Broadcast messages",
    ],
  },
  {
    name: "Workflow Automation",
    range: "KES 50,000 - 150,000",
    features: [
      "Process automation",
      "Multi-app integration",
      "Triggers & actions",
      "Monitoring",
    ],
  },
  {
    name: "Data Entry Automation",
    range: "KES 40,000 - 100,000",
    features: [
      "Form processing",
      "Data extraction",
      "Validation",
      "Database sync",
    ],
  },
  {
    name: "Social Media Automation",
    range: "KES 35,000 - 80,000",
    features: [
      "Scheduled posting",
      "Content generation",
      "Analytics",
      "Engagement tracking",
    ],
  },
  {
    name: "Custom AI Solution",
    range: "KES 150,000+",
    features: [
      "Tailored to needs",
      "Custom models",
      "Integration",
      "Training & support",
    ],
  },
];

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeTab, setActiveTab] = useState("websites");
  const getPrices = () => {
    switch (activeTab) {
      case "websites":
        return websitePrices;
      case "apps":
        return managementPrices;
      case "ai":
        return aiPrices;
      default:
        return websitePrices;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All prices in Kenyan Shillings (KES). Final cost depends on
              specific requirements and complexity.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex p-1 bg-muted rounded-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
          <p className="text-muted-foreground mb-6">
            The price ranges vary based on the complexity of the project,
            including the number of pages, custom design elements, integrations
            with third-party services, and additional features like user
            authentication or payment systems. Simpler sites with fewer pages
            and standard features fall on the lower end, while complex,
            custom-built sites with advanced functionality are on the higher
            end.
          </p>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "ai" ? (
              <p className="text-center text-muted-foreground">
                AI & Automation solutions are priced on a custom basis. Please
                contact us for a personalized quote.
              </p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {getPrices().map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)",
                    }}
                    className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all"
                  >
                    <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                    <p className="text-2xl font-black text-primary mb-4">
                      {item.range}
                    </p>
                    <ul className="space-y-2">
                      {item.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 bg-card border border-border rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-4">Important Notes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                • Prices are estimates and may vary based on specific
                requirements
              </li>
              <li>
                • Payment structure: 40% deposit, 40% at 90% completion, 20% on
                handover
              </li>
              <li>
                • Additional features or complexity may increase the final price
              </li>
              <li>• Rush delivery available at +30% of project cost</li>
              <li>
                • Monthly maintenance packages available from KES 5,000/month
              </li>
              <li>• All projects include 30 days post-launch support</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Need a custom quote? Let's discuss your specific requirements.
            </p>
            <Link
              to="/get-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:shadow-lg transition-shadow"
            >
              Request Custom Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
