// harryBotData.ts - Store all your business information here
// This data will be sent to Gemini AI to help it respond accurately to clients

export const harryBotData = {
  // BASIC INFORMATION
  businessName: "HarryTech Services",
  owner: "Edwin Gichuhi Njogu",
  location: "Nairobi, Kenya",
  email: "harrynjogu4996@gmail.com",
  personalEmail: "Edwinnjogu4996@gmail.com",
  phone: "+254796697954",
  whatsapp: "+254711140899",
  website: "https://www.harrytechservices.com",
  linkedin: "https://www.linkedin.com/in/edwin-njogu-2814b021b",
  github: "https://github.com/Sherrydon4996",

  // WEBSITE DEVELOPMENT PRICING
  websitePricing: [
    {
      name: "Personal Portfolio",
      range: "KES 15,000 - 40,000",
      features: [
        "3-5 pages",
        "Responsive design",
        "Contact form",
        "SEO basics",
      ],
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
  ],

  // AI & AUTOMATION PRICING
  aiPricing: [
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
  ],

  // COMPLETED PROJECTS
  projects: [
    {
      id: 1,
      title: "House Management System",
      description:
        "Comprehensive system for managing residential properties and rentals.",
      category: "Management Systems",
      technologies: [
        "React",
        "JavaScript",
        "TypeScript",
        "Express.js",
        "Shadcn",
        "Tailwind CSS",
        "Turso",
      ],
    },
    {
      id: 2,
      title: "E-commerce Clothes Website",
      description:
        "Online store specializing in clothing and apparel with secure checkout.",
      category: "E-commerce",
      technologies: ["React", "JavaScript", "Express.js", "Supabase"],
    },
    {
      id: 3,
      title: "Beauty Services Website",
      description:
        "Platform for hair styling, manicure, and pedicure services with booking features.",
      category: "Service Business",
      technologies: ["Next.js", "React", "JavaScript"],
    },
    {
      id: 4,
      title: "WiFi Services Website",
      description:
        "Site offering internet and WiFi services with plan comparisons and sign-ups.",
      category: "Service Business",
      technologies: ["Next.js", "React", "JavaScript"],
    },
    {
      id: 5,
      title: "Bakery Website",
      description:
        "Online showcase for a bakery featuring cakes, bread, and ordering options.",
      category: "Food & Beverage",
      technologies: ["React", "Tailwind CSS", "TypeScript", "JavaScript"],
    },
    {
      id: 6,
      title: "Simple Personal Portfolio",
      description:
        "Minimalist website showcasing personal projects and skills.",
      category: "Portfolio",
      technologies: ["React", "JavaScript"],
    },
    {
      id: 7,
      title: "Broad Services Portfolio",
      description:
        "Portfolio highlighting a wide range of professional services.",
      category: "Portfolio",
      technologies: [
        "React",
        "Tailwind CSS",
        "TypeScript",
        "JavaScript",
        "Shadcn",
      ],
    },
    {
      id: 8,
      title: "Marketing Portfolio",
      description: "Showcase of marketing projects, campaigns, and strategies.",
      category: "Portfolio",
      technologies: [
        "React",
        "Tailwind CSS",
        "TypeScript",
        "JavaScript",
        "Shadcn",
      ],
    },
    {
      id: 9,
      title: "Real Estate Website",
      description:
        "Platform for property listings, searches, and real estate management.",
      category: "Real Estate",
      technologies: ["React", "JavaScript", "Next.js"],
    },
  ],

  // PAYMENT POLICIES
  paymentStructure: {
    deposit: {
      percentage: "40%",
      timing: "Project Initiation",
      details: [
        "Required before any work begins",
        "Secures your project slot in schedule",
        "Covers initial planning, research, and resource allocation",
        "Non-refundable once work has commenced",
      ],
    },
    milestone: {
      percentage: "40%",
      timing: "90% Completion",
      details: [
        "Due when project reaches 90% completion",
        "Client review period begins at this stage",
        "Includes up to 2 rounds of revisions within scope",
        "Must be cleared before final development phase",
      ],
    },
    final: {
      percentage: "20%",
      timing: "Completion & Handover",
      details: [
        "Due upon final approval and before handover",
        "All source files, credentials, and assets transferred",
        "Training session included (if applicable)",
        "30-day post-launch support begins",
      ],
    },
  },

  // CRITICAL POLICIES
  policies: {
    projectStalling: {
      title: "Project Stalling & Non-Payment",
      rules: [
        "Projects will be immediately stalled if payment milestones are not met",
        "No further work will be done until outstanding payments are cleared",
        "Projects will NOT be handed over until full payment is received",
        "After 30 days of non-payment, the project may be terminated",
        "All work completed remains property of HarryTech until full payment",
      ],
      latePayment: {
        "7+ days late": "Work paused, daily late fee of 2% may apply",
        "30+ days late": "Project terminated, work may be repurposed",
        "Legal action": "May be pursued for significant outstanding amounts",
      },
    },
    clientResponsibilities: {
      required: [
        "Text content, company information, and descriptions",
        "High-quality images, logos, and brand assets",
        "Product information (for e-commerce projects)",
        "Any specific design preferences or references",
      ],
      additionalCharges: {
        contentSourcing: "KES 5,000 - 50,000 depending on scope",
        imageSourcing: "KES 500 - 2,000 per premium image",
        copywriting: "KES 3,000 - 15,000 per page",
      },
    },
    timeline: {
      estimates:
        "Timelines are estimates based on project scope and complexity",
      clientDelays: "Client response delays will extend the project timeline",
      revisionTime: "Each revision round allows 48-72 hours for feedback",
      unresponsive:
        "Unresponsive clients (7+ days) may have projects deprioritized",
    },
    revisions: {
      included:
        "2 rounds of revisions for Basic & Professional packages, 3 for Enterprise",
      additionalCost: "KES 5,000 - 15,000 per additional round",
      majorChanges: "Major structural changes quoted separately",
    },
    refunds: {
      deposit: "Non-refundable once work has begun",
      cancellation: {
        "0-25% complete": "40% of total project cost",
        "26-50% complete": "60% of total project cost",
        "51-90% complete": "80% of total project cost",
        "91-100% complete": "Full payment required",
      },
    },
  },

  // EXPERIENCE & CREDENTIALS
  experience: {
    yearsOfExperience: "2+ years",
    projectsCompleted: "9+ production websites",
    specialization: "Full Stack Development with React, Next.js, and Node.js",
    education: "Bachelor of Commerce in Accounting, Self-taught Developer",
    certifications: [
      "Responsive Web Design - freeCodeCamp",
      "JavaScript Algorithms - freeCodeCamp",
      "Frontend Development Libraries - freeCodeCamp",
      "Backend Development and APIs - freeCodeCamp",
    ],
  },

  // TECHNOLOGIES USED
  technologies: {
    frontend: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Shadcn/ui",
      "Three.js",
    ],
    backend: ["Node.js", "Express.js", "Python", "Flask", "RESTful APIs"],
    databases: ["MongoDB", "Supabase", "Airtable", "Appwrite", "Turso (MySQL)"],
    tools: [
      "Git",
      "GitHub",
      "WordPress",
      "Vercel",
      "Netlify",
      "Visual Studio Code",
    ],
  },

  // WORKING HOURS & AVAILABILITY
  availability: {
    workingHours:
      "Monday - Friday: 8:00 AM - 6:00 PM EAT, Saturday: 9:00 AM - 2:00 PM EAT",
    responseTime: "Within 2-4 hours during business hours",
    currentlyAvailable: "Yes, accepting new projects",
    leadTime: "New projects can start within 3-5 days",
  },

  // FREQUENTLY ASKED QUESTIONS
  faqs: [
    {
      question: "How long does it take to build a website?",
      answer:
        "Simple websites take 1-2 weeks, e-commerce sites take 3-4 weeks, and complex systems take 4-6 weeks.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "I accept M-Pesa, Bank Transfer (local and international), and PayPal.",
    },
    {
      question: "Do you provide hosting?",
      answer:
        "Yes, I can help set up hosting on platforms like Vercel, Netlify, or traditional hosting providers.",
    },
    {
      question: "Can you maintain my existing website?",
      answer:
        "Yes, I offer maintenance services for websites built with React, Next.js, WordPress, and other platforms.",
    },
    {
      question: "Do you work with clients outside Kenya?",
      answer:
        "Yes, I work with clients globally. All communication is remote via WhatsApp, email, and video calls.",
    },
    {
      question: "What if I need content created?",
      answer:
        "Content creation (copywriting, images) is available as an add-on service. Fees range from KES 5,000-50,000 depending on scope.",
    },
    {
      question: "What happens if I don't pay on time?",
      answer:
        "Projects will be immediately stalled if payment milestones are not met. After 30 days of non-payment, the project may be terminated.",
    },
  ],
};

// Helper function to convert data to a readable format for AI
export const getFormattedDataForAI = (): string => {
  return `
HARRYTECH SERVICES - COMPLETE BUSINESS INFORMATION

═══════════════════════════════════════════════════════════════
CONTACT INFORMATION
═══════════════════════════════════════════════════════════════
Business: ${harryBotData.businessName}
Owner: ${harryBotData.owner}
Location: ${harryBotData.location}
Primary Email: ${harryBotData.email}
Phone: ${harryBotData.phone}
WhatsApp: ${harryBotData.whatsapp} (Preferred for quick quotes)
Website: ${harryBotData.website}

═══════════════════════════════════════════════════════════════
WEBSITE DEVELOPMENT PRICING
═══════════════════════════════════════════════════════════════
${harryBotData.websitePricing
  .map(
    (p) => `
${p.name}: ${p.range}
Features: ${p.features.join(", ")}
`
  )
  .join("")}

═══════════════════════════════════════════════════════════════
AI & AUTOMATION SERVICES PRICING
═══════════════════════════════════════════════════════════════
${harryBotData.aiPricing
  .map(
    (p) => `
${p.name}: ${p.range}
Features: ${p.features.join(", ")}
`
  )
  .join("")}

═══════════════════════════════════════════════════════════════
PAYMENT STRUCTURE (CRITICAL - MUST FOLLOW)
═══════════════════════════════════════════════════════════════
1. DEPOSIT (${harryBotData.paymentStructure.deposit.percentage}): ${
    harryBotData.paymentStructure.deposit.timing
  }
   ${harryBotData.paymentStructure.deposit.details
     .map((d) => `   • ${d}`)
     .join("\n")}

2. MILESTONE (${harryBotData.paymentStructure.milestone.percentage}): ${
    harryBotData.paymentStructure.milestone.timing
  }
   ${harryBotData.paymentStructure.milestone.details
     .map((d) => `   • ${d}`)
     .join("\n")}

3. FINAL (${harryBotData.paymentStructure.final.percentage}): ${
    harryBotData.paymentStructure.final.timing
  }
   ${harryBotData.paymentStructure.final.details
     .map((d) => `   • ${d}`)
     .join("\n")}

═══════════════════════════════════════════════════════════════
CRITICAL POLICIES - NON-NEGOTIABLE
═══════════════════════════════════════════════════════════════

⚠️ PROJECT STALLING & NON-PAYMENT:
${harryBotData.policies.projectStalling.rules.map((r) => `• ${r}`).join("\n")}

Late Payment Consequences:
• ${harryBotData.policies.projectStalling.latePayment["7+ days late"]}
• ${harryBotData.policies.projectStalling.latePayment["30+ days late"]}

CLIENT RESPONSIBILITIES:
Required Materials:
${harryBotData.policies.clientResponsibilities.required
  .map((r) => `• ${r}`)
  .join("\n")}

Additional Charges for Content Creation:
• Content Sourcing: ${
    harryBotData.policies.clientResponsibilities.additionalCharges
      .contentSourcing
  }
• Image Sourcing: ${
    harryBotData.policies.clientResponsibilities.additionalCharges.imageSourcing
  }
• Copywriting: ${
    harryBotData.policies.clientResponsibilities.additionalCharges.copywriting
  }

REVISION POLICY:
• Included: ${harryBotData.policies.revisions.included}
• Additional Revisions: ${harryBotData.policies.revisions.additionalCost}
• Major Changes: ${harryBotData.policies.revisions.majorChanges}

REFUND POLICY:
• Deposits: ${harryBotData.policies.refunds.deposit}
Cancellation Charges:
${Object.entries(harryBotData.policies.refunds.cancellation)
  .map(([k, v]) => `• ${k}: ${v}`)
  .join("\n")}

═══════════════════════════════════════════════════════════════
COMPLETED PROJECTS (Portfolio)
═══════════════════════════════════════════════════════════════
${harryBotData.projects
  .map(
    (p) => `
${p.id}. ${p.title} (${p.category})
   ${p.description}
   Tech Stack: ${p.technologies.join(", ")}
`
  )
  .join("")}

═══════════════════════════════════════════════════════════════
EXPERIENCE & EXPERTISE
═══════════════════════════════════════════════════════════════
• Experience: ${harryBotData.experience.yearsOfExperience}
• Projects Completed: ${harryBotData.experience.projectsCompleted}
• Specialization: ${harryBotData.experience.specialization}
• Education: ${harryBotData.experience.education}

Technologies:
• Frontend: ${harryBotData.technologies.frontend.join(", ")}
• Backend: ${harryBotData.technologies.backend.join(", ")}
• Databases: ${harryBotData.technologies.databases.join(", ")}

═══════════════════════════════════════════════════════════════
AVAILABILITY & WORKING HOURS
═══════════════════════════════════════════════════════════════
• Hours: ${harryBotData.availability.workingHours}
• Response Time: ${harryBotData.availability.responseTime}
• Currently Available: ${harryBotData.availability.currentlyAvailable}
• New Project Lead Time: ${harryBotData.availability.leadTime}

═══════════════════════════════════════════════════════════════
FREQUENTLY ASKED QUESTIONS
═══════════════════════════════════════════════════════════════
${harryBotData.faqs
  .map(
    (faq, i) => `${i + 1}. ${faq.question}
   ${faq.answer}`
  )
  .join("\n\n")}

═══════════════════════════════════════════════════════════════
NEXT STEPS FOR CLIENTS
═══════════════════════════════════════════════════════════════
For detailed quotes and to start your project:
1. Contact via WhatsApp: ${harryBotData.whatsapp} (Fastest response)
2. Send email: ${harryBotData.email}
3. Include: Project type, timeline, budget, and requirements
`;
};
