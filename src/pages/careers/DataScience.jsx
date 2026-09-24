import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    BrainCircuit,
    CheckCircle2,
    Cpu,
    Database,
    LineChart,
    MapPin,
    Network,
    Sparkles
} from 'lucide-react';
import { profile } from '../../data/profile';
import { socialLinks } from '../../data/socialLinks';
import { trackPipelines } from '../../data/skills';
import ProjectSection from '../../components/projects/ProjectSection';

export default function DataScience() {
    const navigate = useNavigate();

    const userLocation =
        socialLinks?.location ||
        profile?.location ||
        'Noida / Delhi NCR, India';

    const userStatus =
        profile?.status ||
        'Open to Opportunities';

    const dataSciencePipeline =
        trackPipelines?.['data-science'] || [];

    const skillsets = [
        {
            title: 'Python & Data Analysis',
            details:
                'Python-based data processing, exploration, transformation and analytical workflows.',
            icon: LineChart
        },
        {
            title: 'Machine Learning',
            details:
                'Applied machine learning workflows for classification, prediction and analytical applications.',
            icon: BrainCircuit
        },
        {
            title: 'Data Preparation',
            details:
                'Structured data cleaning, transformation, feature preparation and exploratory analysis.',
            icon: Database
        },
        {
            title: 'AI Application Development',
            details:
                'Combining analytical, machine learning and application development concepts into practical systems.',
            icon: Network
        }
    ];

    const capabilities = [
        {
            title: 'Exploratory Data Analysis',
            text:
                'Explore datasets, identify patterns, prepare structured analysis and communicate findings.',
            icon: LineChart
        },
        {
            title: 'Machine Learning',
            text:
                'Develop practical ML workflows for classification and prediction-oriented applications.',
            icon: BrainCircuit
        },
        {
            title: 'Data Processing',
            text:
                'Use Python-based processing workflows to clean, transform and organize data.',
            icon: Database
        },
        {
            title: 'AI & Analytics Applications',
            text:
                'Connect data science techniques with real applications, APIs and analytical interfaces.',
            icon: Cpu
        }
    ];

    const handleContactClick = () => {
        navigate('/');

        setTimeout(() => {
            const element = document.getElementById('contact');

            if (!element) return;

            const navbarOffset = 78;
            const position =
                element.getBoundingClientRect().top +
                window.pageYOffset -
                navbarOffset;

            window.scrollTo({
                top: position,
                behavior: 'smooth'
            });
        }, 120);
    };

    const fallbackPipeline = [
        {
            step: '01',
            title: 'Collect',
            tools: 'Data sources & datasets'
        },
        {
            step: '02',
            title: 'Prepare',
            tools: 'Python & data processing'
        },
        {
            step: '03',
            title: 'Analyze',
            tools: 'EDA & machine learning'
        },
        {
            step: '04',
            title: 'Apply',
            tools: 'Models, APIs & applications'
        }
    ];

    const pipeline =
        dataSciencePipeline.length > 0
            ? dataSciencePipeline
            : fallbackPipeline;

    return (
        <main
            id="role-top"
            className="relative min-h-screen overflow-hidden bg-[#03060d] text-zinc-100 selection:bg-fuchsia-500/30 selection:text-fuchsia-200"
        >
            <div className="pointer-events-none absolute left-1/2 top-0 h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-fuchsia-600/[0.07] blur-[180px]" />

            <div className="relative mx-auto max-w-[1450px] px-5 pb-24 pt-28 sm:px-8 lg:px-12">

                <section className="relative overflow-hidden rounded-[32px] border border-white/[0.09] bg-white/[0.025] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-10 lg:p-14">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-500/[0.07] via-transparent to-purple-500/[0.07]" />
                    <div className="pointer-events-none absolute right-[-100px] top-[-130px] h-[360px] w-[360px] rounded-full bg-fuchsia-400/[0.12] blur-[100px]" />

                    <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/25 bg-fuchsia-500/10 px-3.5 py-1 text-xs font-semibold text-fuchsia-300">
                                <BrainCircuit size={14} />
                                Career Track
                            </div>

                            <h1 className="text-5xl font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                                Data{' '}
                                <span className="bg-gradient-to-r from-fuchsia-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Science
                                </span>
                            </h1>

                            <p className="mt-6 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
                                Applying Python, data analysis, machine
                                learning, and AI-oriented workflows to build
                                practical analytical and intelligent
                                applications.
                            </p>

                            <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                {skillsets.map((skill) => {
                                    const Icon = skill.icon;

                                    return (
                                        <div
                                            key={skill.title}
                                            className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-400/25 hover:bg-fuchsia-400/[0.03]"
                                        >
                                            <div className="flex items-center gap-2 text-xs font-semibold text-white">
                                                <Icon
                                                    size={15}
                                                    className="shrink-0 text-fuchsia-300"
                                                />
                                                {skill.title}
                                            </div>

                                            <p className="mt-1 text-[11px] leading-5 text-white/50">
                                                {skill.details}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/[0.08] bg-black/30 p-6 backdrop-blur-md">
                            <div className="mb-4 flex items-center justify-between gap-4">
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                                    Track Overview
                                </span>

                                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-300">
                                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                                    {userStatus}
                                </span>
                            </div>

                            <div className="space-y-3 text-xs">
                                {[
                                    ['Primary Language', 'Python'],
                                    ['Core Focus', 'Data Science & ML'],
                                    ['Libraries', 'Pandas, NumPy, Scikit-learn'],
                                    ['Application Layer', 'APIs & Data Applications'],
                                    ['Location', userLocation]
                                ].map(([label, value]) => (
                                    <div
                                        key={label}
                                        className="flex justify-between gap-5 border-b border-white/[0.06] pb-2 last:border-0"
                                    >
                                        <span className="text-white/40">
                                            {label}
                                        </span>

                                        <span className="text-right font-semibold text-white">
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="expertise" className="mt-24 scroll-mt-24">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                            Data Science Expertise
                        </div>

                        <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                            Data, models, and intelligent applications
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base">
                            A practical combination of data preparation,
                            analytical workflows, machine learning and
                            application development.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {capabilities.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/30 hover:bg-fuchsia-400/[0.03]"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/[0.08] text-fuchsia-300">
                                        <Icon size={20} />
                                    </div>

                                    <h3 className="mt-5 text-lg font-bold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-xs leading-6 text-white/50">
                                        {item.text}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <ProjectSection
                    roleFilter="data-scientist"
                    theme="fuchsia"
                    title="Featured Data Science Projects"
                    subtitle="Machine learning, analytical applications, AI workflows, and data-driven projects."
                />

                <section id="workflow" className="mt-24 scroll-mt-24">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                            Data Science Workflow
                        </div>

                        <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                            From raw data to applied intelligence
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base">
                            A structured workflow connecting data preparation,
                            analysis, modeling and practical application.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                        {pipeline.map((item, index, array) => (
                            <article
                                key={`${item.step}-${item.title}`}
                                className="group relative rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-400/30"
                            >
                                {index < array.length - 1 && (
                                    <div className="absolute right-[-13px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.08] bg-[#080d16] text-white/30 lg:flex">
                                        <ArrowRight size={12} />
                                    </div>
                                )}

                                <span className="font-mono text-xs font-bold text-fuchsia-400/80">
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

                <section className="mt-24 overflow-hidden rounded-[32px] border border-white/[0.09] bg-gradient-to-br from-fuchsia-950/30 via-zinc-900 to-white/[0.02] p-8 sm:p-12">
                    <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                        <div className="max-w-3xl">
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/[0.07] px-3 py-1.5 text-xs font-semibold text-fuchsia-300">
                                <Sparkles size={13} />
                                Data Science & AI
                            </div>

                            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                                Looking for data-driven development?
                            </h2>

                            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                                Open to data science, machine learning,
                                analytical applications and AI-oriented
                                development opportunities.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={handleContactClick}
                            className="group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 via-purple-500 to-pink-500 px-7 py-4 text-sm font-bold text-white shadow-[0_15px_40px_rgba(217,70,239,0.25)] transition hover:-translate-y-1"
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