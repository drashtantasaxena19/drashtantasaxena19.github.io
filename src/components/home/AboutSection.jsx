import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, BarChart3, Workflow, Sparkles } from 'lucide-react';
import { profile } from '../../data/profile';

const pillars = [
    {
        icon: Code2,
        title: 'Python & Backend',
        description: 'Building reliable automation scripts, REST APIs with FastAPI, and structured data extraction workflows.'
    },
    {
        icon: BarChart3,
        title: 'Data & Analytics',
        description: 'Writing analytical SQL, data modeling in Power BI, and unearthing patterns from messy, distributed datasets.'
    },
    {
        icon: Workflow,
        title: 'Practical Execution',
        description: 'Focusing on real business utility over unnecessary complexity — from data ingestion to actionable dashboards.'
    }
];

const focusTags = [
    'Python',
    'SQL',
    'Power BI',
    'FastAPI',
    'EDA & Modeling',
    'Automation'
];

export default function AboutSection() {
    const scrollToCareer = () => {
        const element = document.getElementById('career-tracks');
        if (element) {
            const navbarOffset = 78;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section
            id="about"
            className="relative overflow-hidden border-t border-white/[0.05] bg-[#03060d] px-5 py-9 sm:px-10 sm:py-8 lg:px-10 lg:py-12"
        >
            {/* Background Atmosphere */}
            <div className="pointer-events-none absolute left-1/4 top-10 h-80 w-80 rounded-full bg-violet-600/[0.05] blur-[140px]" />
            <div className="pointer-events-none absolute right-10 bottom-10 h-72 w-72 rounded-full bg-blue-600/[0.04] blur-[140px]" />

            {/* Subtle Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.018]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
                    backgroundSize: '64px 64px'
                }}
            />

            <div className="relative mx-auto max-w-[1420px]">
                
                {/* 2-Column Bento Compact Layout */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
                    
                    {/* LEFT COLUMN: Narrative & Identity */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-5"
                    >
                        <div className="mb-3.5 flex items-center gap-2.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.95)]" />
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">
                                About Me
                            </p>
                        </div>

                        <h2 className="text-3xl font-semibold leading-[1.12] tracking-[-0.04em] text-white sm:text-4xl lg:text-[42px]">
                            I build with data,{' '}
                            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                                code
                            </span>{' '}
                            and practical intent.
                        </h2>

                        <p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-base">
                            Hi, I'm {profile.name} — a developer and data professional driven by understanding how systems work under the hood and turning raw data into clear, reliable software solutions.
                        </p>

                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/45">
                            Rather than jumping straight to complex tooling, I focus on the problem first: exploring the dataset, understanding user needs, and delivering clean, maintainable systems.
                        </p>

                        {/* Focus Pills directly integrated */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {focusTags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-xs font-medium text-white/65"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8">
                            <button
                                type="button"
                                onClick={scrollToCareer}
                                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-600 px-6 py-3 text-xs font-semibold text-white shadow-[0_10px_28px_rgba(124,58,237,0.25)] transition-all hover:opacity-95 hover:-translate-y-0.5 cursor-pointer"
                            >
                                <span>Explore Career Tracks</span>
                                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: 3 Core Pillars Stack */}
                    <div className="lg:col-span-7 space-y-3.5">
                        {pillars.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.45, delay: index * 0.08 }}
                                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-r from-white/[0.035] via-white/[0.02] to-white/[0.01] p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/35 hover:-translate-y-0.5"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300 transition-transform duration-300 group-hover:scale-105">
                                            <Icon size={20} />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-base font-semibold text-white tracking-tight">
                                                {item.title}
                                            </h3>
                                            <p className="mt-1 text-xs sm:text-sm leading-relaxed text-white/50">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Hover bottom gradient accent */}
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-violet-400/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                                </motion.div>
                            );
                        })}

                        {/* Minimal Quote Banner */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.25 }}
                            className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.015] px-5 py-3 text-xs text-white/45"
                        >
                            <span className="flex items-center gap-2">
                                <Sparkles size={13} className="text-violet-400" />
                                <span>"Data, code, and ideas for practical impact."</span>
                            </span>
                            <span className="text-white/30 hidden sm:inline">— {profile.name}</span>
                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
    );
}