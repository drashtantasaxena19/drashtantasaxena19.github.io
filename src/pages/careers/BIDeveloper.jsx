import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    BarChart3,
    CheckCircle2,
    Cpu,
    Database,
    Gauge,
    Layers3,
    LineChart,
    MapPin,
    PieChart,
    Sparkles
} from 'lucide-react';
import { profile } from '../../data/profile';
import { socialLinks } from '../../data/socialLinks';
import { trackPipelines } from '../../data/skills';
import ProjectSection from '../../components/projects/ProjectSection';

export default function BIDeveloper() {
    const navigate = useNavigate();

    const userLocation =
        socialLinks?.location ||
        profile?.location ||
        'Noida / Delhi NCR, India';

    const userStatus =
        profile?.status ||
        'Open to Opportunities';

    const biPipeline =
        trackPipelines?.['bi-developer'] || [];

    const skillsets = [
        {
            title: 'Power BI Dashboard Design',
            details:
                'Interactive dashboards, KPI cards, slicers, cross-filtering, drill-through and business reporting layouts',
            icon: BarChart3
        },
        {
            title: 'DAX & Calculated Measures',
            details:
                'Calculated measures, business KPIs, aggregations, time-based analysis and analytical calculations',
            icon: Gauge
        },
        {
            title: 'Data Modeling',
            details:
                'Structured fact and dimension tables, relationships, star-schema concepts and analytical data models',
            icon: Database
        },
        {
            title: 'Power Query & Transformation',
            details:
                'Data cleaning, transformation, column shaping, null handling and structured reporting workflows',
            icon: Layers3
        }
    ];

    const capabilities = [
        {
            title: 'Business Dashboards',
            text:
                'Interactive dashboards for sales, operational metrics, KPIs and business performance analysis.',
            icon: BarChart3
        },
        {
            title: 'Analytical Reporting',
            text:
                'Structured reports that organize business metrics into clear and usable analytical views.',
            icon: LineChart
        },
        {
            title: 'Data Modeling',
            text:
                'Organized analytical models using relationships, dimensions, measures and reporting-ready structures.',
            icon: Database
        },
        {
            title: 'KPI Intelligence',
            text:
                'Business-focused KPI calculations and visual reporting for monitoring important metrics.',
            icon: PieChart
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

    return (
        <main
            id="role-top"
            className="relative min-h-screen overflow-hidden bg-[#03060d] text-zinc-100 selection:bg-yellow-500/30 selection:text-yellow-200"
        >
            <div className="pointer-events-none absolute left-1/2 top-0 h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-yellow-600/[0.07] blur-[180px]" />

            <div className="relative mx-auto max-w-[1450px] px-5 pb-24 pt-28 sm:px-8 lg:px-12">

                <section className="relative overflow-hidden rounded-[32px] border border-white/[0.09] bg-white/[0.025] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-10 lg:p-14">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-500/[0.07] via-transparent to-amber-500/[0.07]" />
                    <div className="pointer-events-none absolute right-[-100px] top-[-130px] h-[360px] w-[360px] rounded-full bg-yellow-400/[0.12] blur-[100px]" />

                    <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-500/10 px-3.5 py-1 text-xs font-semibold text-yellow-300">
                                <BarChart3 size={14} />
                                Career Track
                            </div>

                            <h1 className="text-5xl font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                                BI{' '}
                                <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                                    Developer
                                </span>
                            </h1>

                            <p className="mt-6 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
                                Building interactive Business Intelligence
                                dashboards, structured data models, KPI
                                reporting systems, and analytical workflows
                                that turn business data into clear insights.
                            </p>

                            <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                {skillsets.map((skill) => {
                                    const Icon = skill.icon;

                                    return (
                                        <div
                                            key={skill.title}
                                            className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/25 hover:bg-yellow-400/[0.03]"
                                        >
                                            <div className="flex items-center gap-2 text-xs font-semibold text-white">
                                                <Icon
                                                    size={15}
                                                    className="shrink-0 text-yellow-300"
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
                                    ['Primary Tool', 'Power BI'],
                                    ['Analytics', 'DAX & Power Query'],
                                    ['Data Modeling', 'Star Schema & SQL'],
                                    ['Reporting', 'KPI & Interactive Dashboards'],
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
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-yellow-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                            BI Expertise
                        </div>

                        <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                            Business Intelligence capabilities
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base">
                            Practical BI capabilities across dashboards,
                            reporting, data modeling, analytical calculations,
                            and business-focused visualization.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {capabilities.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400/[0.03]"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.08] text-yellow-300">
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
                    roleFilter="bi-developer"
                    theme="gold"
                    title="Featured BI & Analytics Projects"
                    subtitle="Power BI dashboards, analytical reporting, and business intelligence projects focused on structured data and actionable insights."
                />

                <section id="workflow" className="mt-24 scroll-mt-24">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-yellow-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                            Execution Lifecycle
                        </div>

                        <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                            From business data to actionable insight
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base">
                            A structured BI workflow covering data preparation,
                            modeling, analytical calculations, and dashboard
                            delivery.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                        {biPipeline.length > 0 ? (
                            biPipeline.map((item, index, array) => (
                                <article
                                    key={`${item.step}-${item.title}`}
                                    className="group relative rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30"
                                >
                                    {index < array.length - 1 && (
                                        <div className="absolute right-[-13px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.08] bg-[#080d16] text-white/30 lg:flex">
                                            <ArrowRight size={12} />
                                        </div>
                                    )}

                                    <span className="font-mono text-xs font-bold text-yellow-400/80">
                                        STAGE {item.step}
                                    </span>

                                    <h3 className="mt-4 text-base font-bold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-white/45">
                                        {item.tools}
                                    </p>
                                </article>
                            ))
                        ) : (
                            [
                                {
                                    step: '01',
                                    title: 'Prepare',
                                    tools: 'Clean & transform data'
                                },
                                {
                                    step: '02',
                                    title: 'Model',
                                    tools: 'Build analytical relationships'
                                },
                                {
                                    step: '03',
                                    title: 'Analyze',
                                    tools: 'Create measures & KPIs'
                                },
                                {
                                    step: '04',
                                    title: 'Visualize',
                                    tools: 'Build interactive dashboards'
                                }
                            ].map((item, index, array) => (
                                <article
                                    key={item.step}
                                    className="group relative rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30"
                                >
                                    {index < array.length - 1 && (
                                        <div className="absolute right-[-13px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.08] bg-[#080d16] text-white/30 lg:flex">
                                            <ArrowRight size={12} />
                                        </div>
                                    )}

                                    <span className="font-mono text-xs font-bold text-yellow-400/80">
                                        STAGE {item.step}
                                    </span>

                                    <h3 className="mt-4 text-base font-bold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-white/45">
                                        {item.tools}
                                    </p>
                                </article>
                            ))
                        )}
                    </div>
                </section>

                <section className="mt-24 overflow-hidden rounded-[32px] border border-white/[0.09] bg-gradient-to-br from-yellow-950/30 via-zinc-900 to-white/[0.02] p-8 sm:p-12">
                    <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                        <div className="max-w-3xl">
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/[0.07] px-3 py-1.5 text-xs font-semibold text-yellow-300">
                                <Sparkles size={13} />
                                BI & Analytics
                            </div>

                            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                                Need dashboards, reporting, or data insights?
                            </h2>

                            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                                Open to BI development roles, data analytics
                                opportunities, dashboard projects, and
                                practical business intelligence work.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={handleContactClick}
                            className="group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-black shadow-[0_15px_40px_rgba(250,204,21,0.2)] transition hover:-translate-y-1 hover:bg-white/90"
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