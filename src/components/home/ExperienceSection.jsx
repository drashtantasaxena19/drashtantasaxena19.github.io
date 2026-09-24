import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Briefcase,
    GraduationCap,
    Calendar,
    MapPin,
    CheckCircle2,
    Sparkles,
    ArrowUpRight,
    Layers,
    Milestone,
    Award
} from 'lucide-react';
import { education, experiences } from '../../data/experience';

export default function ExperienceSection() {
    const [activeTab, setActiveTab] = useState('all'); // 'all' | 'work' | 'education'

    return (
        <section
            id="experience"
            className="relative overflow-hidden border-t border-white/[0.05] bg-[#03060d] px-5 py-12 sm:px-8 lg:px-10 lg:py-14"
        >
            {/* Ambient Background Lighting */}
            <div className="pointer-events-none absolute left-1/4 top-1/4 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[170px]" />
            <div className="pointer-events-none absolute right-10 bottom-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/[0.05] blur-[180px]" />

            {/* Subtle Matrix/Grid Background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
                    backgroundSize: '64px 64px'
                }}
            />

            <div className="relative mx-auto max-w-[1420px]">
                
                {/* =========================================================
                    SECTION HEADER & INTERACTIVE FILTER
                ========================================================== */}
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16">
                    <div>
                        <div className="mb-3 flex items-center gap-2.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]" />
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">
                                Path & Milestones
                            </p>
                        </div>
                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-5xl">
                            Experience{' '}
                            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                                & Academic
                            </span>{' '}
                            Journey
                        </h2>
                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
                            The applied software engineering roles, data analytics internships, and academic degrees shaping my technical capability.
                        </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="inline-flex rounded-2xl border border-white/[0.08] bg-white/[0.02] p-1.5 backdrop-blur-xl shrink-0">
                        {[
                            { id: 'all', label: 'All Journey', icon: Layers },
                            { id: 'work', label: 'Experience', icon: Briefcase },
                            { id: 'education', label: 'Education', icon: GraduationCap }
                        ].map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-all duration-300 ${
                                        isActive ? 'text-white' : 'text-white/50 hover:text-white'
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-exp-tab"
                                            className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/50 to-indigo-600/40 border border-violet-400/30 shadow-[0_0_20px_rgba(124,58,237,0.25)]"
                                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <Icon size={14} className="relative z-10" />
                                    <span className="relative z-10">{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* =========================================================
                    DYNAMIC TIMELINE ROADMAP
                ========================================================== */}
                <div className="relative">
                    {/* Vertical Connecting Line (Desktop) */}
                    <div className="pointer-events-none absolute left-[22px] top-4 bottom-8 w-[2px] bg-gradient-to-b from-violet-500/60 via-purple-500/30 to-blue-500/10 hidden md:block" />

                    <div className="space-y-10">

                        {/* WORK EXPERIENCES */}
                        {(activeTab === 'all' || activeTab === 'work') && (
                            <div className="space-y-8">
                                <div className="flex items-center gap-3 md:pl-14">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-400/25 bg-violet-500/10 text-violet-300 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                                        <Briefcase size={15} />
                                    </div>
                                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                                        Professional Engineering & Internships
                                    </h3>
                                </div>

                                {experiences.map((exp, index) => {
                                    const isCurrent = exp.period.includes('Present');
                                    return (
                                        <motion.div
                                            key={exp.id}
                                            initial={{ opacity: 0, y: 24 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.15 }}
                                            transition={{ duration: 0.5, delay: index * 0.08 }}
                                            className="relative md:pl-14"
                                        >
                                            {/* Glowing Timeline Marker Node */}
                                            <div className="absolute left-[13px] top-8 -translate-x-1/2 hidden md:flex items-center justify-center">
                                                <span className="relative flex h-5 w-5 items-center justify-center">
                                                    {isCurrent && (
                                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
                                                    )}
                                                    <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-[#03060d] bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,1)]" />
                                                </span>
                                            </div>

                                            {/* Experience Card */}
                                            <div className="group relative overflow-hidden rounded-[26px] border border-white/[0.08] bg-gradient-to-b from-white/[0.035] to-white/[0.012] p-7 sm:p-9 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:-translate-y-1">
                                                
                                                {/* Ambient Card Glow on Hover */}
                                                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/[0.04] blur-3xl transition-all duration-500 group-hover:bg-violet-500/[0.12]" />

                                                {/* Card Header Row */}
                                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                                    <div>
                                                        <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                                                            <span className="rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1 text-[11px] font-semibold text-violet-300">
                                                                {exp.type}
                                                            </span>

                                                            {isCurrent && (
                                                                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                                                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                                                    Active Role
                                                                </span>
                                                            )}
                                                        </div>

                                                        <h4 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                                                            {exp.role}
                                                        </h4>

                                                        <p className="mt-1 text-sm font-medium text-white/75">
                                                            {exp.company}
                                                        </p>

                                                        <p className="mt-1 text-xs text-white/45">
                                                            {exp.focus}
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 sm:flex-col sm:items-end sm:gap-1.5">
                                                        <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-white/70">
                                                            <Calendar size={12} className="text-violet-400" />
                                                            {exp.period}
                                                        </span>
                                                        <span className="inline-flex items-center gap-1.5 text-[11px] text-white/40">
                                                            <MapPin size={12} className="text-violet-400" />
                                                            {exp.location}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Bullet Highlights */}
                                                <div className="mt-6 space-y-2.5 border-t border-white/[0.06] pt-5">
                                                    {exp.highlights.map((point, idx) => (
                                                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm leading-6 text-white/65">
                                                            <CheckCircle2 size={15} className="mt-1 shrink-0 text-violet-400" />
                                                            <span>{point}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Tech Tags */}
                                                <div className="mt-6 flex flex-wrap gap-1.5 pt-2">
                                                    {exp.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[11px] font-medium text-white/65 transition-colors group-hover:border-violet-400/20 group-hover:text-white"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Bottom Border Shimmer */}
                                                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-violet-400/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        )}

                        {/* ACADEMIC DEGREES / EDUCATION */}
                        {(activeTab === 'all' || activeTab === 'education') && (
                            <div className="space-y-8 pt-4">
                                <div className="flex items-center gap-3 md:pl-14">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-400/25 bg-blue-500/10 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                        <GraduationCap size={15} />
                                    </div>
                                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                                        Academic Education & Foundations
                                    </h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:pl-14">
                                    {education.map((edu, idx) => (
                                        <motion.div
                                            key={edu.degree}
                                            initial={{ opacity: 0, y: 22 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-white/[0.08] bg-gradient-to-b from-white/[0.035] to-white/[0.012] p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/40 hover:-translate-y-1"
                                        >
                                            {/* Corner Academic Accent */}
                                            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/[0.05] blur-3xl transition-all duration-500 group-hover:bg-blue-500/[0.12]" />

                                            <div>
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold text-blue-300">
                                                        <Calendar size={11} /> {edu.period}
                                                    </span>

                                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.2)]">
                                                        <Award size={13} /> {edu.score}
                                                    </span>
                                                </div>

                                                <h4 className="text-lg sm:text-xl font-semibold text-white tracking-tight leading-snug">
                                                    {edu.degree}
                                                </h4>

                                                <p className="mt-2 text-sm text-white/70 font-medium">
                                                    {edu.institution}
                                                </p>

                                                <p className="mt-1 flex items-center gap-1 text-xs text-white/40">
                                                    <MapPin size={12} className="text-blue-400" />
                                                    {edu.location}
                                                </p>
                                            </div>

                                            {/* <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                                                <span className="text-[11px] font-medium text-white/40 uppercase tracking-wider">
                                                    Verified Academic Record
                                                </span>
                                                <span className="h-2 w-2 rounded-full bg-blue-400/60" />
                                            </div> */}

                                            {/* Bottom Blue Shimmer */}
                                            {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-blue-400/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" /> */}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                {/* =========================================================
                    CAREER SUMMARY FOOTER CARD
                ========================================================== */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="relative mt-16 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-r from-violet-600/[0.08] via-white/[0.02] to-blue-600/[0.06] p-7 sm:p-9"
                >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles size={14} className="text-violet-400" />
                                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
                                    Continuous Momentum
                                </span>
                            </div>
                            <h4 className="text-xl font-medium text-white sm:text-2xl">
                                From academic theory to production pipelines and real-time platforms.
                            </h4>
                            <p className="mt-1 text-xs text-white/50 max-w-2xl">
                                Actively building, analyzing, and delivering high-value solutions across data science and full-stack backend systems.
                            </p>
                        </div>

                        <a
                            href="/assets/resumes/Drashtanta_Saxena_PD_Resume.pdf"
                            download
                            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(124,58,237,0.3)] transition-all hover:opacity-95 hover:-translate-y-0.5"
                        >
                            Download Full Resume
                            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}