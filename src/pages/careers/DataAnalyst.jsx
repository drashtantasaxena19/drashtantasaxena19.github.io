import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    BarChart3,
    ChevronRight,
    CheckCircle2,
    Database,
    FileSpreadsheet,
    LineChart,
    MapPin,
    MessageCircle,
    Sparkles,
    Target,
    Zap
} from 'lucide-react';
import { profile } from '../../data/profile';
import { socialLinks } from '../../data/socialLinks';
import { skillCategories, trackPipelines } from '../../data/skills';
import ProjectSection from '../../components/projects/ProjectSection';

export default function DataAnalyst() {
    const navigate = useNavigate();

    const dbCategory = (skillCategories || []).find(
        (category) => category.id === 'databases'
    );

    const biCategory = (skillCategories || []).find(
        (category) => category.id === 'bi'
    );

    const tools = useMemo(() => {
        const toolSet = new Set([
            'Python',
            'SQL',
            'MySQL',
            'Power BI',
            'DAX',
            'Excel',
            'Tableau',
            'Pandas',
            'NumPy',
            ...(dbCategory?.skills || []),
            ...(biCategory?.skills || [])
        ]);

        return Array.from(toolSet).slice(0, 12);
    }, [dbCategory, biCategory]);

    const skills = [
        {
            title: 'Data Analysis & Profiling',
            description:
                'Data cleansing, exploratory analysis, distribution testing, and actionable insight discovery.',
            icon: LineChart
        },
        {
            title: 'SQL & Query Optimization',
            description:
                dbCategory?.description ||
                'Analytical SQL, multi-table joins, subqueries, CTEs, and window functions.',
            icon: Database
        },
        {
            title: 'Power BI & Dashboards',
            description:
                biCategory?.description ||
                'Interactive executive dashboards, star schema design, and DAX calculations.',
            icon: BarChart3
        },
        {
            title: 'Python Analytics Pipeline',
            description:
                'Data munging, anomaly identification, and vectorized transformations with Pandas & NumPy.',
            icon: Zap
        },
        {
            title: 'Advanced Spreadsheet Analytics',
            description:
                'Pivot models, XLOOKUP, dynamic matrices, and spreadsheet workflow automation.',
            icon: FileSpreadsheet
        },
        {
            title: 'Commercial Business Insights',
            description:
                'Translating complex analytical queries into executive decision summaries.',
            icon: Target
        }
    ];

    const userLocation =
        socialLinks?.location ||
        profile?.location ||
        'Noida / Delhi NCR, India';

    const userStatus =
        profile?.status ||
        'Open to Opportunities';

    const handleContactClick = () => {
        navigate('/');

        setTimeout(() => {
            const element = document.getElementById('contact');

            if (!element) return;

            const position =
                element.getBoundingClientRect().top +
                window.pageYOffset -
                78;

            window.scrollTo({
                top: position,
                behavior: 'smooth'
            });
        }, 120);
    };

    const analystPipeline =
        trackPipelines['data-analyst'] || [];

    return (
        <main
            id="role-top"
            className="relative min-h-screen overflow-hidden bg-[#03060d] text-zinc-100 selection:bg-cyan-400/30 selection:text-cyan-200"
        >
            <div className="pointer-events-none absolute left-1/2 top-0 h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[180px]" />

            <div className="pointer-events-none absolute right-[-180px] top-[650px] h-[500px] w-[500px] rounded-full bg-violet-600/[0.06] blur-[170px]" />

            <div className="pointer-events-none absolute left-[-180px] top-[1300px] h-[500px] w-[500px] rounded-full bg-blue-600/[0.05] blur-[170px]" />

            <div className="relative mx-auto max-w-[1450px] px-5 pb-24 pt-28 sm:px-8 lg:px-12">

                <section className="relative overflow-hidden rounded-[32px] border border-white/[0.09] bg-white/[0.025] shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.07] via-transparent to-violet-500/[0.07]" />

                    <div className="absolute right-[-100px] top-[-130px] h-[360px] w-[360px] rounded-full bg-cyan-400/[0.12] blur-[100px]" />

                    <div className="relative grid gap-12 p-7 sm:p-10 lg:grid-cols-[1.25fr_0.75fr] lg:p-14">
                        <div>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.08] px-4 py-2 text-xs font-semibold text-cyan-300">
                                <Sparkles size={14} />
                                Specialized Career Profile
                            </div>

                            <h1 className="max-w-4xl text-5xl font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                                Data{' '}
                                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                                    Analyst
                                </span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                                Transforming multi-source operational datasets
                                into meaningful diagnostics, automated
                                reporting schemas, and executive business
                                insights using Python, SQL, Power BI, and
                                analytical modeling.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-2">
                                {tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="rounded-xl border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs font-medium text-white/70 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-white"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <button
                                    type="button"
                                    onClick={handleContactClick}
                                    className="group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-bold text-black shadow-[0_15px_35px_rgba(34,211,238,0.18)] transition hover:-translate-y-1"
                                >
                                    Let&apos;s Connect
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </button>

                                <a
                                    href="#projects"
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.035] px-6 py-3.5 text-sm font-semibold text-white/75 transition hover:border-cyan-400/30 hover:bg-white/[0.06] hover:text-white"
                                >
                                    Explore Projects
                                    <ChevronRight size={16} />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-end">
                            <div className="w-full rounded-3xl border border-white/[0.08] bg-black/20 p-5">
                                <div className="mb-5 flex items-center justify-between">
                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                                        Role Snapshot
                                    </span>

                                    <span className="flex items-center gap-2 text-xs text-emerald-300">
                                        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                                        {userStatus}
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        ['Focus', 'Analytics & Insights'],
                                        ['Core Engine', 'Python + SQL'],
                                        ['Visualization', 'Power BI + DAX'],
                                        ['Methodology', 'EDA & Modeling']
                                    ].map(([label, value]) => (
                                        <div
                                            key={label}
                                            className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4"
                                        >
                                            <p className="text-[10px] uppercase tracking-wider text-white/35">
                                                {label}
                                            </p>

                                            <p className="mt-1.5 text-sm font-semibold text-white">
                                                {value}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-3 flex items-center gap-2 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-xs text-white/50">
                                    <MapPin size={14} className="text-cyan-400" />
                                    {userLocation}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="expertise" className="mt-20">
                    <SectionHeading
                        eyebrow="Core Expertise"
                        title="Skills built for real analytical work"
                        description="A focused technical stack covering the complete journey from raw records to executive intelligence."
                    />

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {skills.map((skill) => {
                            const Icon = skill.icon;

                            return (
                                <article
                                    key={skill.title}
                                    className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.04]"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300">
                                        <Icon size={20} />
                                    </div>

                                    <h3 className="mt-5 text-lg font-bold text-white">
                                        {skill.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-white/50">
                                        {skill.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <ProjectSection
                    roleFilter="data-analyst"
                    title="Data Analyst Projects"
                    theme="cyan"
                    subtitle="Selected case studies showcasing data modeling, predictive evaluation, and diagnostic reporting."
                />

                <section id="workflow" className="mt-24">
                    <SectionHeading
                        eyebrow="Structured Process"
                        title="From question to business impact"
                        description="A practical data lifecycle ensuring every analysis is grounded, verified, and actionable."
                    />

                    <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                        {analystPipeline.map((item, index, array) => (
                            <article
                                key={item.step}
                                className="group relative rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-cyan-400/25"
                            >
                                {index < array.length - 1 && (
                                    <div className="absolute right-[-13px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.08] bg-[#080d16] text-white/30 lg:flex">
                                        <ArrowRight size={12} />
                                    </div>
                                )}

                                <span className="font-mono text-xs font-semibold text-cyan-400/70">
                                    STAGE {item.step}
                                </span>

                                <h3 className="mt-4 text-base font-bold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-xs leading-5 text-white/45">
                                    {item.tools}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="mt-24 overflow-hidden rounded-[32px] border border-white/[0.09] bg-gradient-to-br from-cyan-950/40 via-violet-950/20 to-white/[0.02] p-8 sm:p-12">
                    <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                        <div className="max-w-3xl">
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-3 py-1.5 text-xs font-semibold text-cyan-300">
                                <MessageCircle size={13} />
                                Available for opportunities
                            </div>

                            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                                Looking for a Data Analyst who can turn data into decisions?
                            </h2>

                            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                                Let&apos;s discuss business analytics, executive dashboards, SQL optimization, or solving complex enterprise data challenges.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={handleContactClick}
                            className="group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 text-sm font-bold text-black shadow-[0_15px_40px_rgba(34,211,238,0.2)] transition hover:-translate-y-1"
                        >
                            Start a Conversation
                            <ArrowRight
                                size={16}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
}

function SectionHeading({ eyebrow, title, description }) {
    return (
        <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                {eyebrow}
            </div>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                {title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/45 sm:text-base">
                {description}
            </p>
        </div>
    );
}