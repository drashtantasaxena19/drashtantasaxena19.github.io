import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { skillCategories, pipelineStages } from '../../data/skills';

export default function SkillsSection() {
    const [selectedTab, setSelectedTab] = useState('all');

    const categories = skillCategories || [];
    const stages = pipelineStages || [];

    const filteredCategories = selectedTab === 'all'
        ? categories
        : categories.filter((cat) => cat.id === selectedTab);

    return (
        <section
            id="skills"
            className="relative overflow-hidden border-t border-white/[0.05] bg-[#03060d] px-5 py-12 sm:px-5 lg:px-10 lg:py-16"
        >
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute left-1/3 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/[0.06] blur-[170px]" />
            <div className="pointer-events-none absolute right-10 bottom-1/3 h-[450px] w-[450px] rounded-full bg-blue-600/[0.05] blur-[160px]" />

            {/* Subtle Grid Pattern */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.018]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
                    backgroundSize: '64px 64px'
                }}
            />

            <div className="relative mx-auto max-w-[1420px]">

                {/* =========================================================
                    HEADER & INTERACTIVE FILTER PILLS
                ========================================================== */}
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16">
                    <div>
                        <div className="mb-3 flex items-center gap-2.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]" />
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">
                                Technical Proficiencies
                            </p>
                        </div>
                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-5xl">
                            Core Skills{' '}
                            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                                & Applied
                            </span>{' '}
                            Capabilities
                        </h2>
                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
                            Battle-tested tooling and technologies used across full-stack backend development, predictive intelligence, and corporate data pipelines.
                        </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="inline-flex flex-wrap rounded-2xl border border-white/[0.08] bg-white/[0.02] p-1.5 backdrop-blur-xl shrink-0 gap-1">
                        <button
                            type="button"
                            onClick={() => setSelectedTab('all')}
                            className={`relative rounded-xl px-4 py-2 text-xs font-medium transition-all duration-300 ${selectedTab === 'all' ? 'text-white' : 'text-white/50 hover:text-white'
                                }`}
                        >
                            {selectedTab === 'all' && (
                                <motion.div
                                    layoutId="active-skill-tab"
                                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/50 to-indigo-600/40 border border-violet-400/30 shadow-[0_0_20px_rgba(124,58,237,0.25)]"
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">All Skills</span>
                        </button>

                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                type="button"
                                onClick={() => setSelectedTab(cat.id)}
                                className={`relative rounded-xl px-4 py-2 text-xs font-medium transition-all duration-300 ${selectedTab === cat.id ? 'text-white' : 'text-white/50 hover:text-white'
                                    }`}
                            >
                                {selectedTab === cat.id && (
                                    <motion.div
                                        layoutId="active-skill-tab"
                                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/50 to-indigo-600/40 border border-violet-400/30 shadow-[0_0_20px_rgba(124,58,237,0.25)]"
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{cat.category.split(' ')[0]}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* =========================================================
                    SKILLS CARDS GRID
                ========================================================== */}
                <motion.div
                    layout
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredCategories.map((group, idx) => {
                            const Icon = group.icon;
                            return (
                                <motion.div
                                    key={group.category}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.45, delay: idx * 0.07 }}
                                    whileHover={{ y: -6 }}
                                    className={`group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-white/[0.08] bg-gradient-to-b from-white/[0.035] to-white/[0.012] p-7 backdrop-blur-xl transition-all duration-300 ${group.borderGlow}`}
                                >
                                    {/* Corner Radial Accent Glow */}
                                    <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${group.glowColor} blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-100 opacity-60`} />

                                    <div>
                                        {/* Icon & Category Header */}
                                        <div className="flex items-center justify-between mb-5">
                                            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${group.badgeBg} shadow-inner`}>
                                                <Icon size={22} />
                                            </div>
                                            <span className="text-[11px] font-mono font-medium text-white/30 uppercase tracking-wider">
                                                0{idx + 1}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-semibold text-white tracking-tight leading-snug">
                                            {group.category}
                                        </h3>

                                        <p className="mt-2 text-xs leading-relaxed text-white/45 min-h-[38px]">
                                            {group.description}
                                        </p>

                                        {/* Divider */}
                                        <div className="my-5 h-px w-full bg-white/[0.06]" />

                                        {/* Skills Chips */}
                                        <div className="flex flex-wrap gap-2">
                                            {group.skills.map((skill) => {
                                                const isPrimary = group.primarySkills?.includes(skill);
                                                return (
                                                    <span
                                                        key={skill}
                                                        className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium transition-all duration-200 ${isPrimary
                                                                ? 'border border-violet-400/30 bg-violet-500/[0.08] text-white shadow-[0_0_12px_rgba(124,58,237,0.1)] group-hover:border-violet-400/50'
                                                                : 'border border-white/[0.07] bg-white/[0.025] text-white/70 hover:border-white/20 hover:bg-white/[0.05] hover:text-white'
                                                            }`}
                                                    >
                                                        {isPrimary && (
                                                            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                                                        )}
                                                        {skill}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Bottom Animated Hover Beam */}
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-violet-400/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* =========================================================
                    ARCHITECTURE FLOW BANNER (Pipeline Storytelling)
                ========================================================== */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="relative mt-14 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-r from-violet-600/[0.08] via-white/[0.02] to-blue-600/[0.06] p-7 sm:p-8"
                >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-violet-400/25 bg-violet-500/10 text-violet-300">
                                <Cpu size={22} />
                            </div>
                            <div>
                                <h4 className="text-base font-semibold text-white tracking-tight">
                                    Integrated End-to-End Pipeline
                                </h4>
                                <p className="mt-0.5 text-xs text-white/50">
                                    How these tools connect in real-world production environments:
                                </p>
                            </div>
                        </div>

                        {/* Pipeline Stage Chips */}
                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-white/60">
                            {stages.map((stage, sIdx) => (
                                <React.Fragment key={stage.step}>
                                    <span className={`rounded-lg border px-3 py-1.5 ${sIdx === stages.length - 1
                                            ? 'border-violet-400/25 bg-violet-500/10 text-violet-300 font-semibold'
                                            : 'border-white/[0.08] bg-white/[0.03] text-white/80'
                                        }`}>
                                        {stage.step}. {stage.title} ({stage.tools})
                                    </span>
                                    {sIdx !== stages.length - 1 && (
                                        <span className="text-violet-400">→</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}