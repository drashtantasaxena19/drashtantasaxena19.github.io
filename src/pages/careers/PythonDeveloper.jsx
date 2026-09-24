import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Code2,
    Cpu,
    Database,
    Globe2,
    Layers3,
    MapPin,
    Server,
    Sparkles,
    Terminal,
    Workflow,
    Zap
} from 'lucide-react';
import { profile } from '../../data/profile';
import { socialLinks } from '../../data/socialLinks';
import { trackPipelines } from '../../data/skills';
import ProjectSection from '../../components/projects/ProjectSection';

export default function PythonDeveloper() {
    const navigate = useNavigate();

    const userLocation =
        socialLinks?.location ||
        profile?.location ||
        'Noida / Delhi NCR, India';

    const userStatus =
        profile?.status ||
        'Open to Opportunities';

    const pythonPipeline =
        trackPipelines?.['python-developer'] || [];

    const skillsets = [
        {
            title: 'Python Backend Development',
            details:
                'Python-based backend logic, application services, automation workflows and data-processing utilities.',
            icon: Code2
        },
        {
            title: 'FastAPI & REST APIs',
            details:
                'API-driven backend services, request handling, validation and application integration.',
            icon: Globe2
        },
        {
            title: 'Database Integration',
            details:
                'Database-backed application workflows and structured persistence for backend systems.',
            icon: Database
        },
        {
            title: 'Automation & AI Workflows',
            details:
                'Python automation, analytical processing and AI-oriented workflows for practical applications.',
            icon: Workflow
        }
    ];

    const capabilities = [
        {
            title: 'Python Applications',
            text:
                'Build practical Python applications around backend logic, data processing and automation.',
            icon: Code2
        },
        {
            title: 'API Development',
            text:
                'Develop REST-oriented backend services using Python frameworks and structured application logic.',
            icon: Server
        },
        {
            title: 'Data Processing',
            text:
                'Process, transform and organize structured data using Python and analytical libraries.',
            icon: Database
        },
        {
            title: 'AI & ML Integration',
            text:
                'Connect machine learning and AI capabilities with practical Python applications and workflows.',
            icon: Cpu
        }
    ];

    const stack = [
        'Python',
        'FastAPI',
        'Flask',
        'REST APIs',
        'MongoDB Atlas',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'React',
        'Machine Learning'
    ];

    const fallbackPipeline = [
        {
            step: '01',
            title: 'Design',
            tools: 'Requirements & application architecture'
        },
        {
            step: '02',
            title: 'Build',
            tools: 'Python backend & application logic'
        },
        {
            step: '03',
            title: 'Integrate',
            tools: 'APIs, databases & data workflows'
        },
        {
            step: '04',
            title: 'Refine',
            tools: 'Testing, validation & iteration'
        }
    ];

    const pipeline =
        pythonPipeline.length > 0
            ? pythonPipeline
            : fallbackPipeline;

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

    return (
        <main
            id="role-top"
            className="relative min-h-screen overflow-hidden bg-[#03060d] text-zinc-100 selection:bg-violet-500/30 selection:text-violet-200"
        >
            <div className="pointer-events-none absolute left-1/2 top-0 h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[180px]" />

            <div className="relative mx-auto max-w-[1450px] px-5 pb-24 pt-28 sm:px-8 lg:px-12">

                <section className="relative overflow-hidden rounded-[32px] border border-white/[0.09] bg-white/[0.025] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-10 lg:p-14">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-blue-500/[0.07]" />
                    <div className="pointer-events-none absolute right-[-100px] top-[-130px] h-[360px] w-[360px] rounded-full bg-violet-400/[0.12] blur-[100px]" />

                    <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold text-violet-300">
                                <Terminal size={14} />
                                Career Track
                            </div>

                            <h1 className="text-5xl font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                                Python{' '}
                                <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                                    Developer
                                </span>
                            </h1>

                            <p className="mt-6 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
                                Developing backend systems, automation tools,
                                APIs, data-processing workflows and practical
                                Python applications across software and
                                AI-oriented use cases.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-2">
                                {stack.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-violet-400/15 bg-violet-400/[0.06] px-3 py-1.5 text-xs font-medium text-violet-200/80"
                                    >
                                        {item}
                                    </span>
                                ))}
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
                                    ['Backend', 'FastAPI & Flask'],
                                    ['APIs', 'REST APIs'],
                                    ['Database', 'MongoDB Atlas'],
                                    ['Focus', 'Automation & AI Applications'],
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

                            <div className="mt-5 flex items-center gap-2 rounded-2xl border border-violet-400/15 bg-violet-400/[0.05] px-4 py-3 text-xs text-white/55">
                                <MapPin
                                    size={14}
                                    className="shrink-0 text-violet-400"
                                />
                                {userLocation}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="expertise" className="mt-24 scroll-mt-24">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                            Core Expertise
                        </div>

                        <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                            Python engineering capabilities
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base">
                            Backend development, API engineering, automation,
                            data processing and AI-oriented application
                            development.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {skillsets.map((skill) => {
                            const Icon = skill.icon;

                            return (
                                <article
                                    key={skill.title}
                                    className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-400/[0.03]"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/[0.08] text-violet-300">
                                        <Icon size={20} />
                                    </div>

                                    <h3 className="mt-5 text-lg font-bold text-white">
                                        {skill.title}
                                    </h3>

                                    <p className="mt-2 text-xs leading-6 text-white/50">
                                        {skill.details}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section className="mt-16">
                    <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
                        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
                                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                                    Engineering Stack
                                </div>

                                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                                    Tools used across Python projects
                                </h2>
                            </div>

                            <Zap
                                size={30}
                                className="hidden text-violet-400/60 sm:block"
                            />
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {stack.map((item) => (
                                <span
                                    key={item}
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3.5 py-2 text-xs font-medium text-white/65 transition hover:border-violet-400/25 hover:text-violet-200"
                                >
                                    <CheckCircle2
                                        size={13}
                                        className="text-violet-400"
                                    />
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                <ProjectSection
                    roleFilter="python-developer"
                    theme="violet"
                    title="Featured Python & Engineering Projects"
                    subtitle="Python, backend, automation, AI and application projects built around practical software workflows."
                />

                <section id="workflow" className="mt-24 scroll-mt-24">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                            Execution Lifecycle
                        </div>

                        <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                            From application idea to working system
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base">
                            A structured engineering workflow connecting
                            backend logic, APIs, databases, automation and
                            application integration.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                        {pipeline.map((item, index, array) => (
                            <article
                                key={`${item.step}-${item.title}`}
                                className="group relative rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30"
                            >
                                {index < array.length - 1 && (
                                    <div className="absolute right-[-13px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.08] bg-[#080d16] text-white/30 lg:flex">
                                        <ArrowRight size={12} />
                                    </div>
                                )}

                                <span className="font-mono text-xs font-bold text-violet-400/80">
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

                <section className="mt-24">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                            Development Focus
                        </div>

                        <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                            What I build with Python
                        </h2>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {capabilities.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/[0.08] text-violet-300">
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

                <section className="mt-24 overflow-hidden rounded-[32px] border border-white/[0.09] bg-gradient-to-br from-violet-950/30 via-zinc-900 to-white/[0.02] p-8 sm:p-12">
                    <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                        <div className="max-w-3xl">
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-3 py-1.5 text-xs font-semibold text-violet-300">
                                <Sparkles size={13} />
                                Python Development
                            </div>

                            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                                Need Python, APIs, automation, or backend development?
                            </h2>

                            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                                Open to Python development, backend engineering,
                                automation, API development and AI-oriented
                                application opportunities.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={handleContactClick}
                            className="group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-500 to-blue-500 px-7 py-4 text-sm font-bold text-white shadow-[0_15px_40px_rgba(124,58,237,0.3)] transition hover:-translate-y-1"
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