import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects } from '../../data/projects';

export default function ProjectDetails() {
    const { projectId } = useParams();
    const project = projects.find((p) => p.id === projectId);

    if (!project) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#03060d] px-6 text-center">
                <h1 className="text-2xl font-bold text-white">Project Not Found</h1>
                <p className="mt-2 text-sm text-white/50">The requested project case study does not exist.</p>
                <Link
                    to="/"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-semibold text-black transition-all hover:bg-white/90"
                >
                    <ArrowLeft size={14} /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-[#03060d] px-5 pt-32 pb-24 sm:px-8 lg:px-12 text-zinc-100">
            <div className="pointer-events-none absolute left-1/2 top-20 h-[450px] w-[850px] -translate-x-1/2 rounded-full bg-violet-600/[0.06] blur-[160px]" />

            <div className="relative mx-auto max-w-4xl">
                <Link
                    to={-1}
                    className="group mb-8 inline-flex items-center gap-2 text-xs font-semibold text-white/60 transition-colors hover:text-white"
                >
                    <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-1" />
                    Back
                </Link>

                <div className="overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-md">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-violet-300">
                            {project.category}
                        </span>
                        <div className="flex items-center gap-3">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-white/20 hover:text-white"
                                >
                                    <FaGithub size={14} /> Code
                                </a>
                            )}
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-white/20 hover:text-white"
                                >
                                    <ExternalLink size={14} /> Live View
                                </a>
                            )}
                        </div>
                    </div>

                    <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                        {project.title}
                    </h1>
                    <p className="mt-2 text-sm text-white/50">{project.tagline}</p>

                    <div className="my-8 h-px bg-white/[0.07]" />

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                                Overview
                            </h2>
                            <p className="mt-3 text-sm leading-7 text-white/70">
                                {project.description}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                                Technical Highlights & Implementation
                            </h2>
                            <div className="mt-4 space-y-3">
                                {project.highlights.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.015] p-4 text-xs leading-6 text-white/75"
                                    >
                                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-violet-400" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                                Tech Stack
                            </h2>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-lg border border-white/[0.1] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/70"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}