import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, LineChart, Code2, BrainCircuit } from 'lucide-react';

const tracks = [
    {
        title: 'Data Analyst',
        path: '/data-analyst',
        icon: BarChart3,
        description: 'Transform data into clear insights through analysis, visualization, and reporting.',
        tags: ['Excel', 'SQL', 'Power BI'],
        accent: 'hover:border-cyan-400/40',
        iconBox: 'border-cyan-400/25 bg-cyan-500/10 text-cyan-300'
    },
    {
        title: 'BI Developer',
        path: '/bi-developer',
        icon: LineChart,
        description: 'Build dashboards, data models and KPI systems for data-driven decisions.',
        tags: ['Power BI', 'DAX', 'SQL'],
        accent: 'hover:border-yellow-400/40',
        iconBox: 'border-yellow-400/25 bg-yellow-500/10 text-yellow-300'
    },
    {
        title: 'Python Developer',
        path: '/python-developer',
        icon: Code2,
        description: 'Develop backend systems, automation tools and scalable applications.',
        tags: ['Python', 'APIs', 'FastAPI'],
        accent: 'hover:border-violet-400/40',
        iconBox: 'border-violet-400/25 bg-violet-500/10 text-violet-300'
    },
    {
        title: 'Data Science',
        path: '/data-science',
        icon: BrainCircuit,
        description: 'Explore patterns, build predictive models and solve complex problems with data.',
        tags: ['ML', 'Deep Learning', 'Analytics'],
        accent: 'hover:border-purple-400/40',
        iconBox: 'border-purple-400/25 bg-purple-500/10 text-purple-300'
    }
];

export default function CareerTracks() {
    return (
        <section
            id="career-tracks"
            className="relative border-t border-white/[0.04] bg-[#03060d] px-5 py-12 sm:px-8 lg:px-10"
        >
            <div className="relative mx-auto max-w-[1420px]">
                <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">
                            • Career Tracks
                        </p>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                            Explore My Expertise
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <p className="max-w-xs text-xs leading-relaxed text-white/80">
                            Different problems. Different perspectives. Choose the path that matches your goals.
                        </p>

                        {/* <Link
                            to="/"
                            className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-white/80 transition-all hover:border-white/20 hover:text-white"
                        >
                            View All
                            <ArrowRight size={13} />
                        </Link> */}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {tracks.map((track) => {
                        const Icon = track.icon;

                        return (
                            <Link
                                key={track.title}
                                to={track.path}
                                className={`group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${track.accent}`}
                            >
                                <div>
                                    <div
                                        className={`mb-6 flex h-11 w-11 items-center justify-center rounded-xl border ${track.iconBox}`}
                                    >
                                        <Icon size={20} />
                                    </div>

                                    <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
                                        {track.title}
                                    </h3>

                                    <p className="mb-6 min-h-[50px] text-xs leading-relaxed text-white/55">
                                        {track.description}
                                    </p>

                                    <div className="mb-6 flex flex-wrap gap-1.5">
                                        {track.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-md border border-white/[0.06] bg-white/[0.025] px-2 py-0.5 text-[10px] font-medium text-white/60"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between border-t border-white/[0.06] pt-4 text-xs font-medium text-violet-300 transition-colors group-hover:text-white">
                                    <span>View Track</span>

                                    <ArrowRight
                                        size={13}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}