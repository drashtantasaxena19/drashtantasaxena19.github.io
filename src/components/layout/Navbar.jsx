import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    BriefcaseBusiness,
    Menu,
    X,
    ArrowUpRight,
    FileText
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { profile } from "../../data/profile";
import ResumeModal from "./ResumeModal";

const homeNavItems = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Career Tracks", target: "career-tracks" },
    { label: "Experience", target: "experience" },
    { label: "Contact", target: "contact" }
];

const roleConfigs = {
    "/data-analyst": {
        label: "Data Analyst",
        accent: "cyan",
        roleKey: "data-analyst"
    },
    "/bi-developer": {
        label: "BI Developer",
        accent: "gold",
        roleKey: "bi-developer"
    },
    "/python-developer": {
        label: "Python Developer",
        accent: "violet",
        roleKey: "python-developer"
    },
    "/data-science": {
        label: "Data Science",
        accent: "fuchsia",
        roleKey: "data-science"
    }
};

const roleItems = [
    { label: "Overview", target: "role-top" },
    { label: "Expertise", target: "expertise" },
    { label: "Projects", target: "projects" },
    { label: "Workflow", target: "workflow" },
    { label: "Contact", target: "contact" }
];

const accentStyles = {
    cyan: {
        text: "text-cyan-300",
        strong: "text-cyan-400",
        bg: "bg-cyan-400",
        softBg: "bg-cyan-400/10",
        softBorder: "border-cyan-400/20",
        hover: "hover:text-cyan-300",
        glow: "shadow-[0_0_24px_rgba(34,211,238,0.14)]"
    },
    gold: {
        text: "text-yellow-300",
        strong: "text-yellow-400",
        bg: "bg-yellow-400",
        softBg: "bg-yellow-400/10",
        softBorder: "border-yellow-400/20",
        hover: "hover:text-yellow-300",
        glow: "shadow-[0_0_24px_rgba(250,204,21,0.14)]"
    },
    violet: {
        text: "text-violet-300",
        strong: "text-violet-400",
        bg: "bg-violet-400",
        softBg: "bg-violet-400/10",
        softBorder: "border-violet-400/20",
        hover: "hover:text-violet-300",
        glow: "shadow-[0_0_24px_rgba(139,92,246,0.14)]"
    },
    fuchsia: {
        text: "text-fuchsia-300",
        strong: "text-fuchsia-400",
        bg: "bg-fuchsia-400",
        softBg: "bg-fuchsia-400/10",
        softBorder: "border-fuchsia-400/20",
        hover: "hover:text-fuchsia-300",
        glow: "shadow-[0_0_24px_rgba(217,70,239,0.14)]"
    }
};

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [logoError, setLogoError] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    const isManualScrolling = useRef(false);

    const location = useLocation();
    const navigate = useNavigate();

    const isHome = location.pathname === "/";
    const roleConfig = roleConfigs[location.pathname];

    const navItems = roleConfig
        ? roleItems
        : homeNavItems;

    const accent =
        accentStyles[roleConfig?.accent || "violet"];

    const logo =
        profile?.logo ||
        "/assets/images/logo.png";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 18);
        };

        handleScroll();

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setActiveSection(
            navItems[0]?.target || "home"
        );
    }, [location.pathname]);

    useEffect(() => {
        const sectionIds = navItems.map(
            (item) => item.target
        );

        const sectionElements = sectionIds
            .map((id) =>
                document.getElementById(id)
            )
            .filter(Boolean);

        if (!sectionElements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (isManualScrolling.current) {
                    return;
                }

                const visibleEntries =
                    entries.filter(
                        (entry) =>
                            entry.isIntersecting
                    );

                if (visibleEntries.length) {
                    setActiveSection(
                        visibleEntries[0].target.id
                    );
                }
            },
            {
                root: null,
                rootMargin:
                    "-25% 0px -55% 0px",
                threshold: 0
            }
        );

        sectionElements.forEach((element) => {
            observer.observe(element);
        });

        const handleTopScroll = () => {
            if (
                window.scrollY < 120 &&
                !isManualScrolling.current
            ) {
                setActiveSection(
                    navItems[0]?.target ||
                    "home"
                );
            }
        };

        window.addEventListener(
            "scroll",
            handleTopScroll,
            { passive: true }
        );

        return () => {
            observer.disconnect();

            window.removeEventListener(
                "scroll",
                handleTopScroll
            );
        };
    }, [location.pathname, navItems]);

    const scrollToTarget = (targetId) => {
        const element =
            document.getElementById(targetId);

        if (!element) return;

        isManualScrolling.current = true;
        setActiveSection(targetId);

        const navbarOffset = 82;

        const position =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            navbarOffset;

        window.scrollTo({
            top: Math.max(0, position),
            behavior: "smooth"
        });

        window.setTimeout(() => {
            isManualScrolling.current = false;
        }, 900);
    };

    const handleNavClick = (targetId) => {
        setMobileOpen(false);

        if (!isHome) {
            if (targetId === "contact") {
                navigate("/");

                window.setTimeout(() => {
                    scrollToTarget("contact");
                }, 180);

                return;
            }

            scrollToTarget(targetId);
            return;
        }

        scrollToTarget(targetId);
    };

    const handleLogoClick = () => {
        setMobileOpen(false);

        if (isHome) {
            scrollToTarget("home");
            return;
        }

        navigate("/");
    };

    const handleFreelanceClick = () => {
        handleNavClick("contact");
    };

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
                    scrolled
                        ? "border-b border-white/[0.08] bg-[#03060d]/82 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
                        : "bg-transparent"
                }`}
            >
                <div className="mx-auto flex h-[76px] max-w-[1450px] items-center justify-between px-5 sm:px-8 lg:px-10">
                    <button
                        type="button"
                        onClick={handleLogoClick}
                        className="group flex min-w-0 cursor-pointer items-center gap-3"
                    >
                        {!logoError ? (
                            <img
                                src={logo}
                                alt={
                                    profile?.name ||
                                    "Drashtanta Saxena"
                                }
                                onError={() =>
                                    setLogoError(true)
                                }
                                className="h-9 w-auto max-w-[150px] object-contain transition duration-300 group-hover:scale-[1.04]"
                            />
                        ) : (
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-400/25 bg-violet-500/10 text-sm font-black text-violet-300">
                                D
                            </div>
                        )}

                        <div className="hidden min-w-0 text-left sm:block">
                            <p className="truncate text-sm font-bold tracking-tight text-white">
                                {profile?.name ||
                                    "Drashtanta Saxena"}
                            </p>

                            <div className="mt-0.5 flex items-center gap-1.5">
                                <span
                                    className={`h-1 w-1 rounded-full ${
                                        roleConfig
                                            ? accent.bg
                                            : "bg-white/30"
                                    }`}
                                />

                                <p
                                    className={`text-[9px] font-semibold uppercase tracking-[0.2em] ${
                                        roleConfig
                                            ? accent.text
                                            : "text-white/35"
                                    }`}
                                >
                                    {roleConfig?.label ||
                                        "portfolio"}
                                </p>
                            </div>
                        </div>
                    </button>

                    <nav className="hidden items-center gap-1 lg:flex">
                        {navItems.map((item) => {
                            const isActive =
                                activeSection ===
                                item.target;

                            return (
                                <button
                                    key={item.target}
                                    type="button"
                                    onClick={() =>
                                        handleNavClick(
                                            item.target
                                        )
                                    }
                                    className={`group relative cursor-pointer rounded-xl px-3.5 py-2.5 text-xs font-medium transition-all duration-300 ${
                                        isActive
                                            ? roleConfig
                                                ? `${accent.text} ${accent.softBg}`
                                                : "bg-violet-500/10 text-violet-300"
                                            : "text-white/50 hover:bg-white/[0.035] hover:text-white"
                                    }`}
                                >
                                    {item.label}

                                    <span
                                        className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full transition-all duration-300 ${
                                            isActive
                                                ? `w-5 ${
                                                      roleConfig
                                                          ? accent.bg
                                                          : "bg-violet-400"
                                                  }`
                                                : "w-0 bg-white/40 group-hover:w-2"
                                        }`}
                                    />
                                </button>
                            );
                        })}
                    </nav>

                    <div className="hidden items-center gap-2 lg:flex">
                        <button
                            type="button"
                            onClick={() =>
                                setIsResumeOpen(true)
                            }
                            className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3.5 text-xs font-medium text-white/60 transition hover:border-white/15 hover:bg-white/[0.05] hover:text-white"
                        >
                            <FileText size={13} />
                            Resume
                        </button>

                        <button
                            type="button"
                            onClick={
                                handleFreelanceClick
                            }
                            className={`inline-flex h-9 cursor-pointer items-center gap-2 rounded-xl px-4 text-xs font-bold text-black transition duration-300 hover:-translate-y-0.5 ${
                                roleConfig
                                    ? `${accent.bg} ${accent.glow}`
                                    : "bg-white shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                            }`}
                        >
                            <BriefcaseBusiness
                                size={13}
                            />
                            Let&apos;s Talk
                        </button>
                    </div>

                    <button
                        type="button"
                        onClick={() =>
                            setMobileOpen(
                                (previous) =>
                                    !previous
                            )
                        }
                        className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-white transition hover:bg-white/[0.07] lg:hidden ${
                            mobileOpen
                                ? accent.softBg
                                : ""
                        }`}
                        aria-label={
                            mobileOpen
                                ? "Close navigation"
                                : "Open navigation"
                        }
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? (
                            <X size={19} />
                        ) : (
                            <Menu size={19} />
                        )}
                    </button>
                </div>

                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                height: 0
                            }}
                            animate={{
                                opacity: 1,
                                height: "auto"
                            }}
                            exit={{
                                opacity: 0,
                                height: 0
                            }}
                            transition={{
                                duration: 0.22,
                                ease: "easeOut"
                            }}
                            className="overflow-hidden border-t border-white/[0.07] bg-[#03060d]/96 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl lg:hidden"
                        >
                            <div className="mx-auto max-w-[1450px] px-5 pb-5 pt-3 sm:px-8">
                                <div className="mb-3 flex items-center justify-between border-b border-white/[0.06] px-1 pb-3">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                                            Navigation
                                        </p>

                                        {roleConfig && (
                                            <p
                                                className={`mt-1 text-xs font-medium ${accent.text}`}
                                            >
                                                {
                                                    roleConfig.label
                                                }
                                            </p>
                                        )}
                                    </div>

                                    <span className="text-[10px] font-mono text-white/20">
                                        MENU
                                    </span>
                                </div>

                                <div className="flex flex-col gap-1">
                                    {navItems.map(
                                        (item) => {
                                            const isActive =
                                                activeSection ===
                                                item.target;

                                            return (
                                                <button
                                                    key={
                                                        item.target
                                                    }
                                                    type="button"
                                                    onClick={() =>
                                                        handleNavClick(
                                                            item.target
                                                        )
                                                    }
                                                    className={`flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                                                        isActive
                                                            ? roleConfig
                                                                ? `${accent.text} ${accent.softBg}`
                                                                : "bg-violet-500/10 text-violet-300"
                                                            : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                                                    }`}
                                                >
                                                    <span className="flex items-center gap-2.5">
                                                        {isActive && (
                                                            <span
                                                                className={`h-1.5 w-1.5 rounded-full ${
                                                                    roleConfig
                                                                        ? accent.bg
                                                                        : "bg-violet-400"
                                                                }`}
                                                            />
                                                        )}

                                                        {
                                                            item.label
                                                        }
                                                    </span>

                                                    <ArrowUpRight
                                                        size={
                                                            14
                                                        }
                                                        className={
                                                            isActive
                                                                ? "opacity-70"
                                                                : "opacity-25"
                                                        }
                                                    />
                                                </button>
                                            );
                                        }
                                    )}

                                    <div className="my-2 h-px bg-white/[0.06]" />

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setMobileOpen(
                                                false
                                            );
                                            setIsResumeOpen(
                                                true
                                            );
                                        }}
                                        className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm font-medium text-white/65 transition hover:bg-white/[0.05] hover:text-white"
                                    >
                                        <FileText
                                            size={14}
                                        />
                                        View Resume
                                    </button>

                                    <button
                                        type="button"
                                        onClick={
                                            handleFreelanceClick
                                        }
                                        className={`mt-1 flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-black transition ${
                                            roleConfig
                                                ? `${accent.bg} ${accent.glow}`
                                                : "bg-white"
                                        }`}
                                    >
                                        <BriefcaseBusiness
                                            size={15}
                                        />
                                        Let&apos;s Talk
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <ResumeModal
                isOpen={isResumeOpen}
                onClose={() =>
                    setIsResumeOpen(false)
                }
                initialRole={
                    roleConfig?.roleKey || null
                }
            />
        </>
    );
}