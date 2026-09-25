import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
    ArrowRight,
    BriefcaseBusiness,
    MapPin,
    Quote,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaPython } from "react-icons/fa";
import { profile } from "../../data/profile";

const roles = [
    "Python Developer",
    "AI/ML Enthusiast",
    "Data Analyst",
    "Full-Stack Developer",
];

const stats = [
    { value: "4+", label: "Projects" },
    { value: "1+", label: "Years Learning" },
    { value: "10+", label: "Technologies" },
    { value: "100%", label: "Curiosity" },
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((current) => (current + 1) % roles.length);
        }, 2400);

        return () => clearInterval(interval);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section
            id="home"
            className="relative isolate min-h-[calc(100svh-80px)] overflow-hidden bg-black lg:h-[calc(100vh-80px)] lg:min-h-[680px]"
        >
            {/* Desktop / Tablet Background */}
            <div
                className="absolute inset-0 -z-20 hidden bg-cover bg-center bg-no-repeat sm:block"
                style={{
                    backgroundImage:
                        "url('/assets/images/backgrounds/hero-bg.png')",
                }}
            />

            {/* Mobile Background */}
            <div
                className="absolute inset-0 -z-20 block bg-cover bg-center bg-no-repeat sm:hidden"
                style={{
                    backgroundImage:
                        "url('/assets/images/backgrounds/hero-mobile-bg.png')",
                }}
            />

            {/* Background Overlay */}
            <div className="absolute inset-0 -z-10 bg-black/35 sm:bg-black/30" />

            {/* Mobile readability overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-transparent to-black/55 sm:bg-gradient-to-r sm:from-black/25 sm:via-transparent sm:to-black/20" />

            <div className="mx-auto flex min-h-[calc(100svh-80px)] max-w-[1600px] items-center px-5 py-12 sm:px-8 sm:py-16 lg:h-full lg:px-12 lg:py-10 xl:px-16">
                <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[44%_35%_21%] lg:gap-6">
                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="min-w-0"
                    >
                        {/* Availability */}
                        <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:mb-6 sm:text-sm">
                            <span
                                className={`h-2 w-2 shrink-0 rounded-full ${profile?.availability ? "bg-green-400" : "bg-gray-400"
                                    }`}
                            />
                            <span className="truncate">
                                {profile?.availability || "Open to opportunities"}
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="max-w-4xl text-[clamp(2.7rem,10vw,4.5rem)] font-bold leading-[0.98] tracking-tight text-white sm:text-[clamp(3.5rem,7vw,5.5rem)] lg:text-[clamp(4rem,5.5vw,6.5rem)]">
                            Hi, I'm{" "}
                            <span className="text-white">
                                {profile?.name || "Drashtanta Saxena"}
                            </span>
                        </h1>

                        {/* Dynamic Role */}
                        <div className="mt-5 flex min-h-[48px] items-center sm:mt-6 sm:min-h-[56px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={roles[roleIndex]}
                                    initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                                    animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                                    exit={shouldReduceMotion ? {} : { opacity: 0, y: -15 }}
                                    transition={{ duration: 0.35 }}
                                    className="flex min-w-0 items-center gap-3 text-xl font-semibold text-white sm:text-2xl lg:text-3xl"
                                >
                                    <FaPython className="shrink-0 text-2xl sm:text-3xl" />
                                    <span>{roles[roleIndex]}</span>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Description */}
                        <p className="mt-5 max-w-2xl text-sm leading-6 text-white/85 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
                            Building practical software, AI-driven solutions, and
                            data-focused products with Python, modern web technologies,
                            and intelligent automation.
                        </p>

                        {/* Location */}
                        <div className="mt-5 flex min-w-0 items-center gap-2 text-sm text-white/75 sm:mt-6">
                            <MapPin className="h-4 w-4 shrink-0" />
                            <span className="truncate">
                                {profile?.location || "India"}
                            </span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                            <button
                                type="button"
                                onClick={() => scrollToSection("career-tracks")}
                                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 sm:w-auto"
                            >
                                Explore My Work
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>

                            <button
                                type="button"
                                onClick={() => scrollToSection("freelance")}
                                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto"
                            >
                                <BriefcaseBusiness className="h-4 w-4" />
                                Let's Work Together
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
                            {profile?.github && (
                                <a
                                    href={profile.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub"
                                    className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black/20 px-3 py-2 text-sm text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/10"
                                >
                                    <FaGithub className="h-4 w-4 shrink-0" />
                                    <span>GitHub</span>
                                </a>
                            )}

                            {profile?.linkedin && (
                                <a
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                    className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black/20 px-3 py-2 text-sm text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/10"
                                >
                                    <FaLinkedinIn className="h-4 w-4 shrink-0" />
                                    <span>LinkedIn</span>
                                </a>
                            )}
                        </div>
                    </motion.div>

                    {/* CENTER STATS */}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15,
                            ease: "easeOut",
                        }}
                        className="w-full min-w-0"
                    >
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 lg:gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={
                                        shouldReduceMotion
                                            ? false
                                            : { opacity: 0, scale: 0.95 }
                                    }
                                    animate={
                                        shouldReduceMotion
                                            ? {}
                                            : { opacity: 1, scale: 1 }
                                    }
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.25 + index * 0.08,
                                    }}
                                    className="rounded-2xl border border-white/15 bg-black/25 p-4 text-center backdrop-blur-md sm:p-5"
                                >
                                    <div className="text-2xl font-bold text-white sm:text-3xl">
                                        {stat.value}
                                    </div>

                                    <div className="mt-1 text-xs text-white/65 sm:text-sm">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quote */}
                        <div className="mt-5 rounded-2xl border border-white/15 bg-black/25 p-5 backdrop-blur-md sm:mt-6 sm:p-6">
                            <Quote className="mb-3 h-5 w-5 text-white/60" />

                            <p className="text-sm leading-6 text-white/80 sm:text-base">
                                "I believe in learning by building, solving real problems,
                                and continuously improving."
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT SKILLS */}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
                        animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.25,
                            ease: "easeOut",
                        }}
                        className="hidden min-w-0 lg:block"
                    >
                        <div className="space-y-4">
                            {[
                                {
                                    title: "Python",
                                    subtitle: "Development & Data",
                                },
                                {
                                    title: "Power BI",
                                    subtitle: "Analytics & Dashboards",
                                },
                                {
                                    title: "SQL",
                                    subtitle: "Data & Databases",
                                },
                                {
                                    title: "FastAPI",
                                    subtitle: "Backend Development",
                                },
                            ].map((skill) => (
                                <div
                                    key={skill.title}
                                    className="rounded-2xl border border-white/15 bg-black/25 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-black/35"
                                >
                                    <h3 className="text-lg font-semibold text-white">
                                        {skill.title}
                                    </h3>

                                    <p className="mt-1 text-sm text-white/60">
                                        {skill.subtitle}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}