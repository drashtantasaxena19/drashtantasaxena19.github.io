import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences, education } from '../data/experience';

export default function Experience() {
    return (
        <div className="relative min-h-screen bg-[#03060d] px-5 pt-32 pb-24 sm:px-8 lg:px-12 text-zinc-100">
            <div className="pointer-events-none absolute left-1/2 top-20 h-[450px] w-[850px] -translate-x-1/2 rounded-full bg-violet-600/[0.06] blur-[160px]" />

            <div className="relative mx-auto max-w-[1200px]">
                <Link
                    to="/"
                    className="group mb-8 inline-flex items-center gap-2 text-xs font-semibold text-white/60 transition-colors hover:text-white"
                >
                    <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-1" />
                    Back to Home
                </Link>

                <header className="mb-14">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">
                        • Career & Education
                    </p>
                    <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                        Experience & Journey
                    </h1>
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60">
                        A chronological timeline of hands-on software development, analytical workflows, technical internships, and academic foundations.
                    </p>
                </header>

                {/* Work Experience Section */}
                <section className="mb-20">
                    <div className="mb-8 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/25 bg-violet-500/10 text-violet-300">
                            <Briefcase size={18} />
                        </div>
                        <h2 className="text-2xl font-semibold tracking-tight text-white">
                            Professional Experience & Training
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                                className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-violet-400/40"
                            >
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <span className="inline-flex rounded-md border border-violet-400/20 bg-violet-500/10 px-2.5 py-0.5 text-[11px] font-medium text-violet-300">
                                            {exp.type}
                                        </span>
                                        <h3 className="mt-2 text-xl font-semibold text-white">
                                            {exp.role}
                                        </h3>
                                        <p className="text-sm font-medium text-white/70">
                                            {exp.company}
                                        </p>
                                        <p className="mt-1 text-xs text-white/45">
                                            {exp.focus}
                                        </p>
                                    </div>

                                    <div className="flex flex-row flex-wrap gap-4 text-xs text-white/50 sm:flex-col sm:items-end sm:gap-1.5">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={13} className="text-violet-400" />
                                            {exp.period}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <MapPin size={13} className="text-violet-400" />
                                            {exp.location}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-2 border-t border-white/[0.06] pt-5">
                                    {exp.highlights.map((point, idx) => (
                                        <div key={idx} className="flex items-start gap-2.5 text-xs leading-5 text-white/70">
                                            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-violet-400" />
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 flex flex-wrap gap-1.5">
                                    {exp.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-white/65"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-violet-400/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section>
                    <div className="mb-8 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/10 text-blue-300">
                            <GraduationCap size={18} />
                        </div>
                        <h2 className="text-2xl font-semibold tracking-tight text-white">
                            Academic Background
                        </h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {education.map((edu, idx) => (
                            <div
                                key={idx}
                                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-md"
                            >
                                <div className="flex items-center justify-between text-xs text-white/50 mb-2">
                                    <span>{edu.period}</span>
                                    <span className="font-semibold text-violet-300">{edu.score}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white">
                                    {edu.degree}
                                </h3>
                                <p className="mt-1 text-xs text-white/65">
                                    {edu.institution}
                                </p>
                                <p className="mt-1 text-[11px] text-white/40">
                                    {edu.location}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}