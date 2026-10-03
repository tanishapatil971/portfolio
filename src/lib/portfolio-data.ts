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
    title: "OCI 2025 Certified AI Foundations Associate",
    subtitle: "Oracle Certified Foundations Associate",
    issuer: "Oracle University",
    id: "328705023OCI25AICFA",
    verification: "Issued June 07, 2026 · Recognized by Oracle Corporation",
    tone: "cyan",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    subtitle: "IBM SkillsBuild",
    issuer: "IBM SkillsBuild",
    id: "PLAN-7913EE1DB030",
    verification:
      "Issued 20 Jun 2026 · System of Record: Your Learning Builder",
    tone: "violet",
  },
  {
    title: "Database Management System",
    subtitle: "NPTEL · IIT Kharagpur (Elite)",
    issuer: "NPTEL / IIT Kharagpur",
    id: "NPTEL26CS39S566204682",
    verification: "Consolidated Score: 69% (Elite) · Coursework: Jan-Mar 2026",
    tone: "cyan",
  },
  {
    title: "MHT-CET (PCM Group) 2024",
    subtitle: "98.9380769 Percentile Score",
    issuer: "State Common Entrance Test Cell, Maharashtra",
    id: "Roll No: 2417380844 | App: 241001089",
    verification: "Physics: 97.36% | Chem: 99.87% | Math: 98.14%",
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
