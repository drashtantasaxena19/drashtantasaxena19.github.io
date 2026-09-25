import React, { useState } from "react";
import { ArrowRight, Mail, Sparkles, X, CheckCircle2, Clock, Layers, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../../data/profile";
import { freelanceServices } from "../../data/services";

export default function FreelanceSection() {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [servicesModalOpen, setServicesModalOpen] = useState(false);

    const scrollToContact = () => {
        setServicesModalOpen(false);
        const contactElement = document.getElementById("contact");
        if (contactElement) {
            const navbarOffset = 80;
            const elementPosition = contactElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const imageSrc =
        profile?.freelanceImage ||
        profile?.image ||
        "/assets/images/profile/freelance-profile.png";

    const services = freelanceServices || [];

    return (
        <section
            id="freelance"
            className="relative overflow-hidden border-t border-white/[0.05] bg-[#03060d] px-5 py-12 sm:px-8 lg:px-10"
        >
            {/* Ambient background glows */}
            <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-600/[0.055] blur-[130px]" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-blue-600/[0.045] blur-[140px]" />

            <div className="relative mx-auto max-w-[1480px]">
                {/* Section Header */}
                <div className="mb-9">
                    <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.8)]" />
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-300">
                            Freelance Services
                        </p>
                    </div>

                    <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
                        Explore{" "}
                        <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                            What I Build
                        </span>
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45 sm:text-[15px]">
                        Practical data, automation and business intelligence solutions designed around real-world problems.
                    </p>
                </div>

                {/* Main Cards Grid */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

                    {/* Left Portrait & Quote Card */}
                    <div className="group relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#070b14] lg:col-span-5 min-h-[440px] lg:h-[510px]">
                        <div className="absolute inset-0 bg-[#070b14]" />

                        <img
                            src={imageSrc}
                            alt={profile?.name || "Drashtanta Saxena"}
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                            onLoad={() => setImageLoaded(true)}
                            onError={(event) => {
                                event.currentTarget.src = "/assets/images/profile/hero-profile.png";
                                setImageLoaded(true);
                            }}
                            className={`absolute inset-0 h-full w-full object-cover object-[52%_center] transition-all duration-1000 ease-out ${imageLoaded ? "scale-100 opacity-100" : "scale-[1.02] opacity-0"
                                } group-hover:scale-[1.025]`}
                        />

                        <div className="absolute inset-0 bg-gradient-to-b from-[#03060d]/80 via-transparent to-[#03060d]/80" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#03060d]/30 via-transparent to-[#03060d]/20" />
                        <div className="absolute -bottom-24 left-1/2 h-48 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[90px] transition-opacity duration-500 group-hover:opacity-80" />

                        {/* Top Quote */}
                        <div className="relative z-10 p-7 sm:p-8 lg:p-9">
                            <span className="block font-serif text-4xl leading-none text-violet-400">“</span>
                            <p className="mt-2 max-w-[270px] font-mono text-sm italic leading-relaxed text-white/95 sm:text-base">
                                {profile?.quote?.subtext || "Good questions create great solutions..."}
                            </p>
                            <div className="mt-4 h-[2px] w-11 rounded-full bg-violet-400/70" />
                        </div>

                        {/* Bottom Tag */}
                        <div className="absolute bottom-6 left-7 z-10 flex items-center gap-2 opacity-80 sm:left-8">
                            <Sparkles size={14} className="text-violet-300" />
                            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">
                                Data • Technology • Solutions
                            </span>
                        </div>

                        <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-transparent transition-all duration-500 group-hover:border-violet-400/25" />
                    </div>

                    {/* Right Action & Capability Card */}
                    <div className="relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/[0.09] bg-gradient-to-br from-white/[0.035] via-white/[0.018] to-white/[0.01] p-7 backdrop-blur-xl sm:p-9 lg:col-span-7 lg:h-[510px] lg:p-11">
                        <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-violet-600/[0.07] blur-[120px]" />

                        <div className="relative z-10">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.8)]" />
                                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-300">
                                    Beyond Roles
                                </p>
                            </div>

                            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-[44px]">
                                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                                    Freelance
                                </span>{" "}
                                & Collaboration
                            </h2>

                            <p className="mt-5 max-w-[650px] text-sm leading-7 text-white/55 sm:text-[15px]">
                                Have a project, data challenge, or idea worth building? I work on practical solutions across data analytics, automation, dashboards and Python-based applications.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <button
                                    type="button"
                                    onClick={scrollToContact}
                                    className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-500 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(124,58,237,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(124,58,237,0.4)] active:translate-y-0"
                                >
                                    Start a Conversation
                                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                                </button>

                                {/* Trigger Modal Instead of Jump Scrolling */}
                                <button
                                    type="button"
                                    onClick={() => setServicesModalOpen(true)}
                                    className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-violet-500/[0.06] hover:text-white"
                                >
                                    <Layers size={16} className="text-violet-300 transition-transform duration-300 group-hover:scale-110" />
                                    View Detailed Services
                                </button>
                            </div>
                        </div>

                        {/* Bottom 3 Capability Chips (Clickable to open detailed view) */}
                        <div className="relative z-10 mt-10 border-t border-white/[0.07] pt-6">
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                {services.map((service) => {
                                    const Icon = service.icon;
                                    return (
                                        <button
                                            key={service.label || service.id}
                                            type="button"
                                            onClick={() => setServicesModalOpen(true)}
                                            className="group/service flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.018] px-4 py-3.5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-500/[0.035]"
                                        >
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-violet-400/15 bg-violet-500/[0.07]">
                                                <Icon size={16} className="text-violet-300 transition-transform duration-300 group-hover/service:scale-110" />
                                            </div>
                                            <span className="text-xs font-medium text-white/70 truncate">
                                                {service.label}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Inline Services Strip */}
                <div className="relative mt-6 overflow-hidden rounded-[26px] border border-white/[0.08] bg-gradient-to-r from-white/[0.025] via-white/[0.015] to-white/[0.025] px-6 py-7 sm:px-8 lg:px-10 lg:py-8">
                    <div className="pointer-events-none absolute left-1/3 top-0 h-32 w-64 rounded-full bg-violet-500/[0.035] blur-[80px]" />

                    <div className="relative grid grid-cols-1 md:grid-cols-3">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.label || service.id}
                                    className={`group/service flex items-start gap-4 ${index !== 0 ? "mt-7 border-t border-white/[0.06] pt-7 md:mt-0 md:border-l md:border-t-0 md:pl-8 md:pt-0" : ""
                                        }`}
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-violet-400/25 bg-violet-500/[0.06] transition-all duration-300 group-hover/service:border-violet-400/45 group-hover/service:bg-violet-500/[0.1]">
                                        <Icon size={19} className="text-violet-300 transition-transform duration-300 group-hover/service:scale-110" />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold text-white">
                                            {service.label}
                                        </h3>
                                        <p className="mt-1.5 max-w-[330px] text-sm leading-6 text-white/50">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* =========================================================
                DETAILED SERVICES MODAL (No jumping or odd scroll!)
            ========================================================== */}
            <AnimatePresence>
                {servicesModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setServicesModalOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />

                        {/* Modal Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.94, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.94, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="relative max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[32px] border border-white/[0.12] bg-[#070b14]/98 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:p-9"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setServicesModalOpen(false)}
                                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                                aria-label="Close modal"
                            >
                                <X size={18} />
                            </button>

                            {/* Modal Header */}
                            <div className="mb-8 pr-12">
                                <span className="rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-violet-300">
                                    Deliverables & Capabilities
                                </span>
                                <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                                    Freelance & Collaboration Scope
                                </h3>
                                <p className="mt-2 text-xs sm:text-sm text-white/50">
                                    Detailed breakdown of what I can build, automate, and deliver for your company or project.
                                </p>
                            </div>

                            {/* Detailed Service Cards Grid */}
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                                {services.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={item.id || item.label}
                                            className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:border-violet-400/30 hover:bg-white/[0.035]"
                                        >
                                            <div>
                                                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300 mb-4">
                                                    <Icon size={20} />
                                                </div>

                                                <h4 className="text-base font-semibold text-white">
                                                    {item.label}
                                                </h4>

                                                <p className="mt-2 text-xs leading-relaxed text-white/55">
                                                    {item.description}
                                                </p>

                                                {/* Deliverables Bullet List from services.js */}
                                                {item.deliverables && (
                                                    <div className="mt-4 space-y-2 border-t border-white/[0.06] pt-3">
                                                        {item.deliverables.map((d, i) => (
                                                            <div key={i} className="flex items-start gap-2 text-[11px] leading-5 text-white/70">
                                                                <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-violet-400" />
                                                                <span>{d}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            <button
                                                type="button"
                                                onClick={scrollToContact}
                                                className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] py-2.5 text-xs font-medium text-white/80 transition hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
                                            >
                                                Discuss Project
                                                <ArrowUpRight size={13} />
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Modal Bottom CTA */}
                            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-violet-400/15 bg-violet-500/[0.05] p-5">
                                <div className="flex items-center gap-3">
                                    <Clock size={17} className="text-violet-400 shrink-0" />
                                    <p className="text-xs text-white/70">
                                        Turnaround depends on scope · Replies usually within 12–24 hours
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={scrollToContact}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(124,58,237,0.3)] transition hover:opacity-95"
                                >
                                    Start a Conversation
                                    <ArrowRight size={14} />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}