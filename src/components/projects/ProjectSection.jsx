import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
    Terminal,
    ArrowRight,
    Play,
    ChevronLeft,
    ChevronRight,
    X,
    Eye,
    Layers,
    ExternalLink
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects } from '../../data/projects';

const themes = {
    gold: {
        text: 'text-yellow-300',
        textStrong: 'text-yellow-400',
        hoverText: 'group-hover:text-yellow-200',
        borderHover: 'hover:border-yellow-400/50',
        shadowHover: 'hover:shadow-[0_25px_60px_rgba(234,179,8,0.2)]',
        iconBg: 'bg-yellow-950',
        iconText: 'text-yellow-300',
        ring: 'ring-yellow-500/40',
        buttonHover: 'hover:bg-yellow-600',
        glow: 'shadow-[0_0_10px_rgba(250,204,21,0.8)]',
        dot: 'bg-yellow-400',
        activeBorder: 'border-yellow-400',
        activeText: 'text-yellow-400',
        activeBg: 'bg-yellow-950',
        emptyBorder: 'border-yellow-400/20'
    },
    cyan: {
        text: 'text-cyan-300',
        textStrong: 'text-cyan-400',
        hoverText: 'group-hover:text-cyan-200',
        borderHover: 'hover:border-cyan-400/50',
        shadowHover: 'hover:shadow-[0_25px_60px_rgba(34,211,238,0.2)]',
        iconBg: 'bg-cyan-950',
        iconText: 'text-cyan-300',
        ring: 'ring-cyan-500/40',
        buttonHover: 'hover:bg-cyan-600',
        glow: 'shadow-[0_0_10px_rgba(34,211,238,0.8)]',
        dot: 'bg-cyan-400',
        activeBorder: 'border-cyan-400',
        activeText: 'text-cyan-400',
        activeBg: 'bg-cyan-950',
        emptyBorder: 'border-cyan-400/20'
    },
    violet: {
        text: 'text-violet-300',
        textStrong: 'text-violet-400',
        hoverText: 'group-hover:text-violet-200',
        borderHover: 'hover:border-violet-400/50',
        shadowHover: 'hover:shadow-[0_25px_60px_rgba(124,58,237,0.2)]',
        iconBg: 'bg-violet-950',
        iconText: 'text-violet-300',
        ring: 'ring-violet-500/40',
        buttonHover: 'hover:bg-violet-600',
        glow: 'shadow-[0_0_10px_rgba(167,139,250,0.8)]',
        dot: 'bg-violet-400',
        activeBorder: 'border-violet-400',
        activeText: 'text-violet-400',
        activeBg: 'bg-violet-950',
        emptyBorder: 'border-violet-400/20'
    },
    fuchsia: {
        text: 'text-fuchsia-300',
        textStrong: 'text-fuchsia-400',
        hoverText: 'group-hover:text-fuchsia-200',
        borderHover: 'hover:border-fuchsia-400/50',
        shadowHover: 'hover:shadow-[0_25px_60px_rgba(217,70,239,0.2)]',
        iconBg: 'bg-fuchsia-950',
        iconText: 'text-fuchsia-400',
        ring: 'ring-fuchsia-500/40',
        buttonHover: 'hover:bg-fuchsia-600',
        glow: 'shadow-[0_0_10px_rgba(232,121,249,0.8)]',
        dot: 'bg-fuchsia-400',
        activeBorder: 'border-fuchsia-400',
        activeText: 'text-fuchsia-400',
        activeBg: 'bg-fuchsia-950',
        emptyBorder: 'border-fuchsia-400/20'
    }
};

const placeholderImage = '/assets/images/projects/placeholder.jpg';

export default function ProjectSection({
    roleFilter,
    theme = 'violet',
    title = 'Featured Engineering Projects',
    subtitle = 'Explore comprehensive systems and technical implementations.'
}) {
    const accent = themes[theme] || themes.violet;

    const [selectedProject, setSelectedProject] = useState(null);
    const [activeMediaIdx, setActiveMediaIdx] = useState(0);

    const normalizedRole =
        roleFilter === 'data-science'
            ? 'data-scientist'
            : roleFilter;

    const roleProjects = useMemo(() => {
        return projects
            .filter(
                (project) =>
                    Array.isArray(project.roles) &&
                    project.roles.includes(normalizedRole)
            )
            .sort((a, b) => {
                const aOrder = a.roleOrder?.[normalizedRole] ?? 999;
                const bOrder = b.roleOrder?.[normalizedRole] ?? 999;
                return aOrder - bOrder;
            });
    }, [normalizedRole]);

    const getMediaList = (project) => {
        if (!project) return [];
        const media = [];

        if (project.video) {
            media.push({
                type: 'video',
                url: project.video,
                poster: project.image || project.images?.[0] || placeholderImage
            });
        }

        if (Array.isArray(project.images) && project.images.length > 0) {
            project.images.forEach((image) => {
                if (image) {
                    media.push({ type: 'image', url: image });
                }
            });
        } else if (project.image) {
            media.push({ type: 'image', url: project.image });
        }

        return media;
    };

    const mediaList = useMemo(() => {
        return selectedProject ? getMediaList(selectedProject) : [];
    }, [selectedProject]);

    const handleOpenGallery = (project, startIndex = 0) => {
        setSelectedProject(project);
        setActiveMediaIdx(startIndex);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseGallery = () => {
        setSelectedProject(null);
        setActiveMediaIdx(0);
        document.body.style.overflow = '';
    };

    const handleNextMedia = (event) => {
        event?.stopPropagation();
        if (mediaList.length < 2) return;
        setActiveMediaIdx((previous) => (previous + 1) % mediaList.length);
    };

    const handlePrevMedia = (event) => {
        event?.stopPropagation();
        if (mediaList.length < 2) return;
        setActiveMediaIdx((previous) => (previous - 1 + mediaList.length) % mediaList.length);
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <section id="projects" className="mt-24 scroll-mt-24">
            <div className="flex flex-col gap-5 border-b border-white/[0.07] pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] ${accent.text}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${accent.dot} ${accent.glow}`} />
                        Applied Track Work
                    </div>
                    <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">
                        {subtitle}
                    </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-white/40">
                    <Terminal size={14} className={accent.textStrong} />
                    {roleProjects.length} {roleProjects.length === 1 ? 'Project' : 'Projects'}
                </div>
            </div>

            {/* Balanced Flex Layout: perfectly centers cards and avoids awkward empty gaps */}
            <div className="mt-8 flex flex-wrap justify-center gap-8">
                {roleProjects.length > 0 ? (
                    roleProjects.map((project, index) => (
                        <div 
                            key={project.id || project.slug || index} 
                            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333333%-1.333333rem)] max-w-[430px]"
                        >
                            <GorgeousProjectCard
                                project={project}
                                projectNumber={index + 1}
                                onOpenGallery={handleOpenGallery}
                                accent={accent}
                            />
                        </div>
                    ))
                ) : (
                    <div className="w-full">
                        <EmptyProjects role={roleFilter} accent={accent} />
                    </div>
                )}
            </div>

            {selectedProject && (
                <ProjectGallery
                    project={selectedProject}
                    mediaList={mediaList}
                    activeMediaIdx={activeMediaIdx}
                    accent={accent}
                    onClose={handleCloseGallery}
                    onNext={handleNextMedia}
                    onPrev={handlePrevMedia}
                    onSelectMedia={setActiveMediaIdx}
                />
            )}
        </section>
    );
}

function ProjectGallery({
    project,
    mediaList,
    activeMediaIdx,
    accent,
    onClose,
    onNext,
    onPrev,
    onSelectMedia
}) {
    const [mediaError, setMediaError] = useState(false);
    const activeMedia = mediaList[activeMediaIdx];

    useEffect(() => {
        setMediaError(false);
    }, [activeMediaIdx, project?.id]);

    const fallbackImage = project.image || project.images?.[0] || placeholderImage;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 lg:p-10">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose} />
            <div className="relative max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-[32px] border border-white/[0.12] bg-[#070b14] p-5 shadow-2xl sm:p-8">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 z-30 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                    <X size={18} />
                </button>

                <div className="pr-12">
                    <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                        {project.title}
                    </h3>
                    <p className="mt-2 max-w-3xl text-xs leading-relaxed text-white/60 sm:text-sm">
                        {project.description}
                    </p>
                </div>

                <div className="group relative mt-6 flex min-h-[280px] max-h-[520px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/[0.1] bg-black/85">
                    {activeMedia && !mediaError ? (
                        activeMedia.type === 'video' ? (
                            <video
                                key={activeMedia.url}
                                src={activeMedia.url}
                                poster={activeMedia.poster}
                                autoPlay
                                muted
                                loop
                                playsInline
                                disablePictureInPicture
                                controlsList="nodownload nofullscreen noremoteplayback"
                                onContextMenu={(e) => e.preventDefault()}
                                onError={() => setMediaError(true)}
                                className="max-h-[520px] w-full select-none object-contain pointer-events-none"
                            />
                        ) : (
                            <img
                                key={activeMedia.url}
                                src={activeMedia.url}
                                alt={project.title}
                                onContextMenu={(e) => e.preventDefault()}
                                onError={() => setMediaError(true)}
                                className="max-h-[520px] w-full select-none object-contain"
                            />
                        )
                    ) : (
                        <img
                            src={fallbackImage}
                            alt={project.title}
                            onContextMenu={(e) => e.preventDefault()}
                            className="max-h-[520px] w-full select-none object-contain"
                        />
                    )}

                    {mediaList.length > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={onPrev}
                                className={`absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/70 text-white opacity-80 shadow-xl transition hover:scale-110 hover:opacity-100 ${accent.buttonHover}`}
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                type="button"
                                onClick={onNext}
                                className={`absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/70 text-white opacity-80 shadow-xl transition hover:scale-110 hover:opacity-100 ${accent.buttonHover}`}
                            >
                                <ChevronRight size={24} />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

function GorgeousProjectCard({ project, projectNumber, onOpenGallery, accent }) {
    const videoRef = useRef(null);
    const [videoError, setVideoError] = useState(false);
    const hasVideo = Boolean(project?.video) && !videoError;

    useEffect(() => {
        if (!hasVideo || !videoRef.current) return;
        videoRef.current.play().catch(() => {});
    }, [hasVideo]);

    const fallbackImage = project.image || project.images?.[0] || placeholderImage;

    return (
        <article
            onClick={() => onOpenGallery(project, 0)}
            className={`group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#070b14] transition-all duration-500 hover:-translate-y-2 ${accent.borderHover} ${accent.shadowHover}`}
        >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                {hasVideo ? (
                    <video
                        ref={videoRef}
                        src={project.video}
                        poster={fallbackImage}
                        muted
                        loop
                        playsInline
                        autoPlay
                        preload="metadata"
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen noremoteplayback"
                        onContextMenu={(e) => e.preventDefault()}
                        onError={() => setVideoError(true)}
                        className="h-full w-full select-none object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    />
                ) : (
                    <img
                        src={fallbackImage}
                        alt={project.title}
                        loading="lazy"
                        onContextMenu={(e) => e.preventDefault()}
                        className="h-full w-full select-none object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-black/30" />
                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-black/70 text-sm font-black text-white backdrop-blur-md">
                    #{projectNumber}
                </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                    {project.category && (
                        <span className={`text-[11px] font-mono font-semibold uppercase tracking-wider ${accent.textStrong}`}>
                            {project.category}
                        </span>
                    )}
                    <h3 className={`mt-2 text-xl font-bold tracking-tight text-white transition-colors ${accent.hoverText}`}>
                        {project.title}
                    </h3>
                    <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-white/55">
                        {project.description}
                    </p>
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-5">
                    <div className="mb-5 flex flex-wrap gap-1.5">
                        {(project.technologies || project.tags || []).slice(0, 4).map((tech) => (
                            <span key={tech} className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[11px] text-white/60">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold transition ${accent.text} group-hover:text-white`}>
                            Explore Showcase
                            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                        </span>

                        <div className="flex items-center gap-2">
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                                >
                                    <ExternalLink size={14} />
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                                >
                                    <FaGithub size={14} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

function EmptyProjects({ role, accent }) {
    return (
        <div className="col-span-full rounded-[30px] border border-dashed border-white/[0.1] bg-white/[0.02] px-6 py-16 text-center">
            <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border ${accent.emptyBorder} ${accent.iconBg} ${accent.iconText}`}>
                <Layers size={24} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-white">Projects are being curated</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-white/45">
                No projects have been assigned to the <span className="text-white/70">{role || 'selected'}</span> career track yet.
            </p>
        </div>
    );
}