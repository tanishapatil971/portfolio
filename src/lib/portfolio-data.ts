export const resumeFileName = "Tanisha_Patil_CV.pdf";

export const projects = [
  {
    title: "StartupOS",
    type: "AI & Machine Learning",
    label: "FLAGSHIP / AI PLATFORM",
    url: "https://startupos-ochre.vercel.app/",
    summary:
      "An AI-powered command center for startup analysis, risk and opportunity diagnostics, and actionable recommendations.",
    architecture: [
      "Insight engine",
      "Risk diagnostics",
      "Recommendation layer",
      "Decision workspace",
    ],
    stack: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Analysis",
      "Web Platform",
    ],
    featured: true,
  },
  {
    title: "Muhurta Yatra",
    type: "Web & Client Work",
    label: "CLIENT / CONSULTANCY",
    url: "https://www.muhurtayatra.com/",
    summary:
      "A responsive booking and digital presence platform shaped around customer engagement, clear navigation, and business-led UX.",
    architecture: [
      "Custom scheduling",
      "Responsive journeys",
      "Conversion UX",
      "Client delivery",
    ],
    stack: [
      "Web Development",
      "Calendar Booking",
      "Responsive UI",
      "UX Optimization",
    ],
    featured: false,
  },
] as const;

export const credentials = [
  {
    title: "Oracle Cloud Infrastructure 2025",
    subtitle: "Certified Foundations Associate",
    issuer: "Oracle",
    id: "Credential details available on request",
    verification: "Professional cloud foundations credential",
    tone: "cyan",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    subtitle: "IBM SkillsBuild",
    issuer: "IBM SkillsBuild",
    id: "Credential details available on request",
    verification: "Verified AI fundamentals coursework",
    tone: "violet",
  },
  {
    title: "Database Management System",
    subtitle: "NPTEL · IIT Kharagpur",
    issuer: "NPTEL / IIT Kharagpur",
    id: "Credential details available on request",
    verification: "Completed database systems certification",
    tone: "cyan",
  },
  {
    title: "MHT-CET (PCM) 2024",
    subtitle: "98.93 percentile",
    issuer: "State Common Entrance Test Cell, Maharashtra",
    id: "2024 academic milestone",
    verification: "98.93 percentile in PCM",
    tone: "violet",
  },
] as const;

export const skillGroups = [
  {
    title: "AI & ML",
    skills: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Data Analysis",
      "Model Development",
      "Streamlit",
    ],
  },
  {
    title: "Web & App",
    skills: ["React.js", "TypeScript", "HTML5", "CSS3", "Flutter"],
  },
  { title: "Languages", skills: ["Python", "C++", "Java", "SQL"] },
  {
    title: "Databases & Tools",
    skills: ["MySQL", "MongoDB", "Git", "GitHub", "Android Studio"],
  },
] as const;
