import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, MapPin, Quote } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaPython } from "react-icons/fa";
import { profile } from "../../data/profile";

const ease = [0.22, 1, 0.36, 1];

function PythonLogo() {
    return (
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#101a2c]">
            <FaPython className="text-[30px] text-[#ffd43b]" />
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-blue-500/10" />
        </div>
    );
}

function PowerBILogo() {
    return (
        <div className="flex h-12 w-12 shrink-0 items-end justify-center gap-[2px] rounded-xl bg-[#19170e] pb-2.5">
            <span className="h-4 w-[6px] rounded-sm bg-[#f2c811]" />
            <span className="h-6 w-[6px] rounded-sm bg-[#f2c811]" />
            <span className="h-8 w-[6px] rounded-sm bg-[#f2c811]" />
            <span className="h-9 w-[6px] rounded-sm bg-[#f2c811]" />
        </div>
    );
}

function SQLLogo() {
    return (
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#111428]">
            <div className="absolute h-[27px] w-[29px] rounded-[50%] border-[3px] border-[#7667ff]" />
            <div className="absolute top-[14px] h-[16px] w-[29px] border-x-[3px] border-[#7667ff]" />
            <div className="absolute bottom-[8px] h-[9px] w-[29px] rounded-[50%] border-b-[3px] border-[#7667ff]" />
        </div>
    );
}

function FastAPILogo() {
    return (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0b2524]">
            <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[#009688]" aria-hidden="true">
                <path d="M12 1.5 2.5 12l9.5 10.5L21.5 12 12 1.5Zm1.2 4.8-1.1 5.1h4.1l-5.4 6.3 1.1-5.1H7.8l5.4-6.3Z" />
            </svg>
        </div>
    );
}

const skills = [
    { title: "Python", subtitle: "Data Processing", icon: <PythonLogo /> },
    { title: "Power BI", subtitle: "Data Visualization", icon: <PowerBILogo /> },
    { title: "SQL", subtitle: "Data Management", icon: <SQLLogo /> },
    { title: "FastAPI", subtitle: "Backend Development", icon: <FastAPILogo /> },
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        if (reduceMotion || !profile.roles?.length) return undefined;

        const interval = setInterval(() => {
            setRoleIndex((current) => (current + 1) % profile.roles.length);
        }, 2400);

        return () => clearInterval(interval);
    }, [reduceMotion]);

    const scrollToSection = (sectionId) => {
        const elem = document.getElementById(sectionId);

        if (elem) {
            const navbarOffset = 78;
            const elementPosition = elem.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const availabilityText =
        profile.availability || profile.status || "Open to opportunities";

    const githubUrl =
        profile.social?.github || "https://github.com/drashtantasaxena19";

    const linkedinUrl =
        profile.social?.linkedin ||
        "https://www.linkedin.com/in/drashtanta-saxena";

    const userLocation =
        profile.location ||
        profile.social?.location ||
        "Noida / Delhi NCR, India";

    const heroStats = profile.stats || [
        { label: "Domains", value: "4" },
        { label: "Projects", value: "5+" },
        { label: "Experience", value: "Real-world" },
        { label: "Status", value: "Open To Opportunities" },
    ];

    return (
        <section
            id="home"
            className="relative isolate mt-20 min-h-auto overflow-hidden bg-[#03060d] py-10 sm:py-16 lg:h-[calc(100svh-80px)] lg:min-h-[680px] lg:py-0"
        >
            <motion.div
                initial={
                    reduceMotion
                        ? false
                        : { opacity: 0, scale: 1.025 }
                }
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease }}
                className="pointer-events-none absolute inset-0"
            >
                {/* Laptop / Desktop / Tablet - ORIGINAL BACKGROUND */}
                <div
                    className="absolute inset-0 hidden bg-no-repeat sm:block"
                    style={{
                        backgroundImage:
                            "url('/assets/images/backgrounds/hero-bg.png')",
                        backgroundSize: "auto 100%",
                        backgroundPosition: "57% center",
                    }}
                />

                {/* ONLY MOBILE - MOBILE BACKGROUND */}
                <div
                    className="absolute inset-0 block bg-no-repeat sm:hidden"
                    style={{
                        backgroundImage:
                            "url('/assets/images/backgrounds/hero-mobile-bg.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                    }}
                />
            </motion.div>

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#03060d_0%,rgba(3,6,13,0.97)_25%,rgba(3,6,13,0.82)_48%,rgba(3,6,13,0.42)_72%,rgba(3,6,13,0.62)_100%)] lg:bg-[linear-gradient(90deg,#03060d_0%,rgba(3,6,13,0.96)_24%,rgba(3,6,13,0.68)_43%,rgba(3,6,13,0.12)_67%,rgba(3,6,13,0.48)_100%)]" />

            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#03060d]/75 to-transparent" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#03060d] to-transparent" />

            <motion.div
                animate={
                    reduceMotion
                        ? undefined
                        : {
                            x: [0, 18, -12, 0],
                            y: [0, -10, 8, 0],
                        }
                }
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-[43%] top-[25%] hidden h-[360px] w-[360px] rounded-full bg-violet-600/[0.08] blur-[130px] sm:block"
            />

            <div className="relative z-10 mx-auto grid h-full w-full max-w-[1420px] grid-cols-1 px-5 sm:px-8 lg:grid-cols-[44%_35%_21%] lg:px-8 xl:px-10">
                <div className="flex min-w-0 flex-col justify-center py-6 lg:pr-5 lg:py-0">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease }}
                        className="mb-4 inline-flex w-fit max-w-full items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.06] px-3.5 py-2 text-xs font-medium text-emerald-300 backdrop-blur-xl sm:mb-5 sm:px-4 sm:text-sm"
                    >
                        <span className="relative flex h-2 w-2 shrink-0">
                            {!reduceMotion && (
                                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
                            )}
                            <span className="relative h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.9)]" />
                        </span>

                        <span className="truncate">
                            {availabilityText}
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.55,
                            delay: 0.05,
                            ease,
                        }}
                        className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300 sm:mb-5 sm:text-[12px] sm:tracking-[0.3em] xl:text-[13px]"
                    >
                        Python · Analytics · BI · Data Science
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.55,
                            delay: 0.1,
                            ease,
                        }}
                        className="mb-2 text-[15px] text-white/65 sm:text-[17px] xl:text-lg"
                    >
                        Hi, I&apos;m{" "}
                        <span className="font-semibold text-white">
                            {profile.name}
                        </span>
                    </motion.p>

                    <div className="mb-3 flex h-8 items-center overflow-hidden sm:mb-4 sm:h-9">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={
                                    profile.roles?.[roleIndex] ||
                                    "Developer"
                                }
                                initial={
                                    reduceMotion
                                        ? false
                                        : {
                                            opacity: 0,
                                            y: 13,
                                            filter: "blur(3px)",
                                        }
                                }
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    filter: "blur(0px)",
                                }}
                                exit={
                                    reduceMotion
                                        ? undefined
                                        : {
                                            opacity: 0,
                                            y: -13,
                                            filter: "blur(3px)",
                                        }
                                }
                                transition={{
                                    duration: 0.34,
                                    ease,
                                }}
                                className="bg-gradient-to-r from-violet-300 via-purple-400 to-blue-400 bg-clip-text text-[19px] font-semibold text-transparent sm:text-[22px] xl:text-2xl"
                            >
                                {profile.roles?.[roleIndex] ||
                                    "Developer"}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.17,
                            ease,
                        }}
                        className="max-w-[700px] text-[clamp(2.7rem,10vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-[clamp(3.5rem,8vw,5rem)] lg:text-[clamp(3.5rem,4.5vw,5.2rem)]"
                    >
                        I turn data into
                        <span className="mt-1 block bg-gradient-to-r from-violet-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                            real-world impact.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.28,
                            ease,
                        }}
                        className="mt-5 max-w-[640px] text-[15px] leading-6 text-white/62 sm:mt-6 sm:text-[16px] sm:leading-7 xl:text-[17px] xl:leading-8"
                    >
                        I build practical Python applications,
                        insightful analytics, intelligent automation,
                        and business intelligence solutions that solve
                        real-world problems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 17 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.37,
                            ease,
                        }}
                        className="mt-6 flex w-full flex-col gap-3 sm:mt-7 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4"
                    >
                        <motion.div
                            whileHover={
                                reduceMotion
                                    ? undefined
                                    : { y: -3, scale: 1.015 }
                            }
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto"
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    scrollToSection("career-tracks")
                                }
                                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 via-purple-500 to-blue-500 px-5 py-3.5 text-[14px] font-semibold text-white shadow-[0_16px_45px_rgba(124,58,237,.3)] cursor-pointer sm:w-auto sm:px-6 sm:text-[15px]"
                            >
                                <span className="absolute inset-0 -translate-x-[130%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[130%]" />

                                <span className="relative">
                                    Explore Career Tracks
                                </span>

                                <ArrowRight
                                    size={17}
                                    className="relative shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>
                        </motion.div>

                        <motion.div
                            whileHover={
                                reduceMotion ? undefined : { y: -3 }
                            }
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto"
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    scrollToSection("freelance")
                                }
                                className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-violet-400/30 bg-[#090d16]/70 px-5 py-3.5 text-[14px] font-medium text-white/90 backdrop-blur-xl transition hover:border-violet-400/60 hover:bg-violet-500/10 hover:text-white cursor-pointer sm:w-auto sm:px-6 sm:text-[15px]"
                            >
                                <BriefcaseBusiness
                                    size={17}
                                    className="shrink-0"
                                />
                                Let&apos;s Work Together
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.46,
                            ease,
                        }}
                        className="mt-7 grid w-full max-w-[620px] grid-cols-2 gap-y-5 sm:mt-8 sm:flex sm:flex-nowrap sm:items-baseline sm:justify-start sm:gap-4 xl:gap-6"
                    >
                        {heroStats.map((stat, idx) => (
                            <div
                                key={stat.label}
                                className="flex min-w-0 items-center sm:items-baseline sm:gap-4 xl:gap-6"
                            >
                                <div className="min-w-0">
                                    <p className="truncate text-[18px] font-semibold text-white sm:text-[20px] xl:text-[22px]">
                                        {stat.value}
                                    </p>

                                    <p className="mt-0.5 truncate pr-2 text-[11px] text-white/48 sm:text-[12px]">
                                        {stat.label}
                                    </p>
                                </div>

                                {idx !== heroStats.length - 1 && (
                                    <span className="hidden h-7 w-px shrink-0 self-center bg-white/10 sm:block" />
                                )}
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.56,
                        }}
                        className="mt-6 flex max-w-[630px] flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/[0.08] pt-5 text-xs text-white/50 sm:mt-7 sm:gap-5 sm:text-sm"
                    >
                        <span className="flex min-w-0 max-w-full items-center gap-1.5">
                            <MapPin
                                size={15}
                                className="shrink-0"
                            />
                            <span className="truncate">
                                {userLocation}
                            </span>
                        </span>

                        <span className="hidden h-1 w-1 shrink-0 rounded-full bg-white/25 sm:block" />

                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 transition hover:text-white"
                        >
                            <FaGithub size={17} />
                            GitHub
                        </a>

                        <span className="hidden h-1 w-1 shrink-0 rounded-full bg-white/25 sm:block" />

                        <a
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 transition hover:text-white"
                        >
                            <FaLinkedinIn size={17} />
                            LinkedIn
                        </a>
                    </motion.div>
                </div>

                <div className="relative hidden lg:block" />

                <div className="relative hidden h-full flex-col justify-center lg:flex lg:pl-1">
                    <div className="flex flex-col gap-3">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.title}
                                initial={{
                                    opacity: 0,
                                    x: 24,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 0.58,
                                    delay:
                                        0.56 +
                                        index * 0.12,
                                    ease,
                                }}
                            >
                                <motion.div
                                    animate={
                                        reduceMotion
                                            ? undefined
                                            : {
                                                y: [
                                                    0,
                                                    -4,
                                                    0,
                                                ],
                                            }
                                    }
                                    transition={{
                                        duration:
                                            4.5 +
                                            index * 0.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="group flex w-[245px] items-center gap-4 rounded-2xl border border-blue-400/25 bg-gradient-to-r from-[#091426]/95 to-[#0b1322]/88 px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,.32)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:shadow-[0_22px_60px_rgba(80,70,255,.18)]"
                                >
                                    {skill.icon}

                                    <div className="min-w-0">
                                        <p className="text-[16px] font-semibold text-white">
                                            {skill.title}
                                        </p>

                                        <p className="mt-1 text-[10px] text-white/45">
                                            {skill.subtitle}
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 18,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.65,
                                delay: 0.95,
                                ease,
                            }}
                            className="w-[260px] rounded-2xl border border-violet-400/30 bg-gradient-to-br from-[#0a1427]/95 to-[#160c25]/92 p-4 shadow-[0_20px_60px_rgba(0,0,0,.32)] backdrop-blur-xl"
                        >
                            <Quote
                                size={22}
                                className="mb-3 fill-blue-400/20 text-blue-400"
                            />

                            <p className="text-[16px] leading-6 text-white/88">
                                Data, code and ideas for a smarter
                                tomorrow.
                            </p>

                            <p className="mt-2 text-right text-[13px] text-white/45">
                                — {profile.name}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#03060d] to-transparent lg:hidden" />
        </section>
    );
}