export const socialData = {
    github: "https://github.com/drashtantasaxena19",
    linkedin: "https://www.linkedin.com/in/drashtanta-saxena",
    location: "Noida / Delhi NCR, India",
    email: "saxenadrashtanta26@gmail.com",
    whatsapp: "+91 6398549435",
    whatsappRaw: "916398549435",
    whatsappDirectUrl: "https://wa.me/916398549435?text=Hi%20Drashtanta,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
};

// Aliases for seamless imports across different components
export const social = socialData;
export const socials = socialData;
export const links = socialData;
export const contact = socialData;
export const socialLinks = socialData;

export const domains = ["PYTHON", "ANALYTICS", "BI", "DATA SCIENCE"];

export const stats = [
    { label: "Core Domains", value: "4" },
    { label: "Featured Projects", value: "5+" },
    { label: "Hands-on Practice", value: "Real-world" },
    { label: "Status", value: "Open To Opportunities" }
];

export const techCards = [
    {
        name: "Python",
        role: "Data Processing",
        description: "Data Processing & Pipeline Automation"
    },
    {
        name: "Power BI",
        role: "Data Visualization",
        description: "Interactive Dashboards & DAX Modeling"
    },
    {
        name: "SQL",
        role: "Data Management",
        description: "Analytical Queries & Relational Schemas"
    },
    {
        name: "FastAPI",
        role: "Backend Engineering",
        description: "High-performance Microservices & REST APIs"
    }
];

export const profile = {
    name: "Drashtanta Saxena",
    firstName: "Drashtanta",
    lastName: "Saxena",
    tagline: "Developer · Analyst · Builder",
    positioning: "Developer · Analyst · Builder",
    role: "Data Scientist / Python Developer",
    status: "Open to opportunities",
    domains: domains,
    roles: [
        "Data Analyst",
        "BI Developer",
        "Python Developer",
        "Data Scientist"
    ],
    skills: [
        "Python",
        "SQL",
        "Power BI",
        "FastAPI",
        "Machine Learning",
        "DAX",
        "Pandas",
        "MongoDB"
    ],
    headline: "I turn data into real-world impact.",
    headlineHighlight: "real-world impact.",
    bio: "I'm Drashtanta Saxena, a Python developer and data professional who builds practical solutions, insightful analytics, and intelligent applications that solve real business problems.",
    description: "I'm Drashtanta Saxena, a Python developer and data professional who builds practical solutions, insightful analytics, and intelligent applications that solve real business problems.",
    image: "/assets/images/profile/freelance-profile.png",
    photo: "/assets/images/profile/hero-profile.png",
    freelanceImage: "/assets/images/profile/freelance-profile.png",
    handwrittenNotes: {
        hero: ["Build", "Analyze", "Automate", "Repeat"],
        quote: "Good questions create great solutions..."
    },
    notes: ["Build", "Analyze", "Automate", "Repeat"],
    quote: {
        text: "Data, code and ideas for a smarter tomorrow.",
        author: "Drashtanta Saxena",
        subtext: "Good questions create great solutions..."
    },
    stats: stats,
    techCards: techCards,
    social: socialData,
    socials: socialData,
    links: socialData,
    contact: socialData,
    socialLinks: socialData,
    github: socialData.github,
    linkedin: socialData.linkedin,
    location: socialData.location
};

export default profile;