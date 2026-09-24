import React, { useEffect, useMemo, useState } from "react";
import {
    X,
    Download,
    FileText,
    ExternalLink,
    ArrowLeft,
    ShieldCheck,
    ChevronRight,
    BriefcaseBusiness,
    BarChart3,
    BrainCircuit,
    Code2,
    Sparkles
} from "lucide-react";
import {
    roleResumes,
    allResumesList
} from "../../data/resumes";

const trackStyles = {
    "data-analyst": {
        accent: "cyan",
        icon: BarChart3,
        text: "text-cyan-300",
        strong: "text-cyan-400",
        bg: "bg-cyan-400",
        softBg: "bg-cyan-400/10",
        border: "border-cyan-400/20",
        hoverBorder: "hover:border-cyan-400/40",
        glow: "hover:shadow-[0_20px_50px_rgba(34,211,238,0.12)]"
    },
    "bi-developer": {
        accent: "gold",
        icon: BarChart3,
        text: "text-yellow-300",
        strong: "text-yellow-400",
        bg: "bg-yellow-400",
        softBg: "bg-yellow-400/10",
        border: "border-yellow-400/20",
        hoverBorder: "hover:border-yellow-400/40",
        glow: "hover:shadow-[0_20px_50px_rgba(250,204,21,0.12)]"
    },
    "python-developer": {
        accent: "violet",
        icon: Code2,
        text: "text-violet-300",
        strong: "text-violet-400",
        bg: "bg-violet-400",
        softBg: "bg-violet-400/10",
        border: "border-violet-400/20",
        hoverBorder: "hover:border-violet-400/40",
        glow: "hover:shadow-[0_20px_50px_rgba(139,92,246,0.14)]"
    },
    "data-science": {
        accent: "fuchsia",
        icon: BrainCircuit,
        text: "text-fuchsia-300",
        strong: "text-fuchsia-400",
        bg: "bg-fuchsia-400",
        softBg: "bg-fuchsia-400/10",
        border: "border-fuchsia-400/20",
        hoverBorder: "hover:border-fuchsia-400/40",
        glow: "hover:shadow-[0_20px_50px_rgba(217,70,239,0.14)]"
    }
};

const fallbackStyle = {
    icon: FileText,
    text: "text-violet-300",
    strong: "text-violet-400",
    bg: "bg-violet-400",
    softBg: "bg-violet-400/10",
    border: "border-violet-400/20",
    hoverBorder: "hover:border-violet-400/40",
    glow: "hover:shadow-[0_20px_50px_rgba(139,92,246,0.14)]"
};

function getTrackStyle(id) {
    return trackStyles[id] || fallbackStyle;
}

export default function ResumeModal({
    isOpen,
    onClose,
    initialRole = null
}) {
    const [selectedRole, setSelectedRole] =
        useState(null);

    /*
     * IMPORTANT:
     * Every time modal opens, reset its internal state.
     *
     * Home page:
     * initialRole = null
     * => selection screen
     *
     * Role page:
     * initialRole = role key
     * => direct resume
     */
    useEffect(() => {
        if (!isOpen) {
            setSelectedRole(null);
            return;
        }

        setSelectedRole(initialRole || null);
    }, [isOpen, initialRole]);

    const activeRole =
        initialRole || selectedRole;

    const activeResume =
        activeRole
            ? roleResumes[activeRole]
            : null;

    const activeStyle = useMemo(
        () => getTrackStyle(activeRole),
        [activeRole]
    );

    const handleClose = () => {
        setSelectedRole(null);
        onClose();
    };

    const handleSelectRole = (roleId) => {
        setSelectedRole(roleId);
    };

    const handleBack = () => {
        setSelectedRole(null);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 lg:p-8">
            {/* BACKDROP */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                onClick={handleClose}
            />

            {/* MODAL */}
            <div className="relative flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-[30px] border border-white/[0.12] bg-[#060a13] shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
                {/* TOP GLOW */}
                <div
                    className={`pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 ${
                        activeStyle.bg
                    } opacity-70`}
                />

                {/* HEADER */}
                <div className="relative flex shrink-0 items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-7 sm:py-5">
                    <div className="flex min-w-0 items-center gap-3">
                        {activeResume && initialRole ? (
                            <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${activeStyle.border} ${activeStyle.softBg} ${activeStyle.text}`}
                            >
                                {React.createElement(
                                    activeStyle.icon,
                                    { size: 19 }
                                )}
                            </div>
                        ) : (
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
                                <FileText
                                    size={19}
                                />
                            </div>
                        )}

                        <div className="min-w-0">
                            <div className="flex items-center gap-2">
                                <h3 className="truncate text-base font-bold text-white sm:text-lg">
                                    {activeResume
                                        ? activeResume.title
                                        : "Professional Resume"}
                                </h3>

                                {activeResume && (
                                    <span className="hidden items-center gap-1 rounded-full border border-emerald-400/15 bg-emerald-400/[0.07] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-emerald-300 sm:inline-flex">
                                        <ShieldCheck
                                            size={10}
                                        />
                                        Verified
                                    </span>
                                )}
                            </div>

                            <p className="mt-0.5 truncate text-[11px] text-white/40 sm:text-xs">
                                {activeResume
                                    ? "Tailored professional credentials and experience"
                                    : "Select a career track to view its tailored resume"}
                            </p>
                        </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                        {activeResume &&
                            !initialRole && (
                                <button
                                    type="button"
                                    onClick={
                                        handleBack
                                    }
                                    className="hidden cursor-pointer items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[11px] font-semibold text-white/60 transition hover:border-white/15 hover:bg-white/[0.05] hover:text-white sm:inline-flex"
                                >
                                    <ArrowLeft
                                        size={13}
                                    />
                                    Tracks
                                </button>
                            )}

                        <button
                            type="button"
                            onClick={handleClose}
                            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-white/55 transition hover:bg-white/[0.08] hover:text-white"
                            aria-label="Close resume viewer"
                        >
                            <X size={17} />
                        </button>
                    </div>
                </div>

                {/* BODY */}
                <div className="min-h-0 flex-1 overflow-y-auto">
                    {!activeResume ? (
                        <ResumeSelection
                            resumes={allResumesList}
                            onSelect={handleSelectRole}
                        />
                    ) : (
                        <ResumeViewer
                            resume={activeResume}
                            style={activeStyle}
                            onBack={
                                initialRole
                                    ? null
                                    : handleBack
                            }
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

function ResumeSelection({
    resumes,
    onSelect
}) {
    return (
        <div className="p-5 sm:p-8 lg:p-10">
            {/* INTRO */}
            <div className="mx-auto max-w-2xl text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
                    <Sparkles size={21} />
                </div>

                <h4 className="mt-5 text-2xl font-black tracking-tight text-white sm:text-3xl">
                    Choose Your Career Track
                </h4>

                <p className="mx-auto mt-2 max-w-xl text-xs leading-6 text-white/45 sm:text-sm">
                    Select the professional profile you
                    want to review. Each resume is tailored
                    to its respective technical career path.
                </p>
            </div>

            {/* TRACK GRID */}
            <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2">
                {resumes.map((item) => {
                    const style =
                        getTrackStyle(item.id);

                    const Icon = style.icon;

                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() =>
                                onSelect(item.id)
                            }
                            className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 text-left transition-all duration-300 hover:-translate-y-1 ${style.hoverBorder} ${style.glow} hover:bg-white/[0.045]`}
                        >
                            {/* CARD GLOW */}
                            <div
                                className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full ${style.bg} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`}
                            />

                            <div className="relative flex items-start justify-between">
                                <div
                                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${style.border} ${style.softBg} ${style.text} transition-transform duration-300 group-hover:scale-105`}
                                >
                                    <Icon size={21} />
                                </div>

                                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-white/25 transition-all group-hover:border-white/15 group-hover:bg-white/[0.06] group-hover:text-white/70">
                                    <ChevronRight
                                        size={15}
                                    />
                                </div>
                            </div>

                            <div className="relative mt-5">
                                <div className="flex items-center gap-2">
                                    <h5
                                        className={`text-base font-bold text-white transition-colors ${style.hoverBorder.replace(
                                            "hover:border-",
                                            "group-hover:text-"
                                        )}`}
                                    >
                                        {item.title}
                                    </h5>
                                </div>

                                <p className="mt-2 text-xs leading-5 text-white/40">
                                    Tailored resume with
                                    relevant skills, projects,
                                    experience and technical
                                    focus.
                                </p>
                            </div>

                            <div className="relative mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
                                <span
                                    className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${style.text}`}
                                >
                                    View Credentials
                                </span>

                                <span className="text-[10px] font-mono text-white/25">
                                    PDF
                                </span>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* SECURITY NOTE */}
            <div className="mx-auto mt-7 flex max-w-5xl items-center justify-center gap-2 text-center text-[10px] text-white/25">
                <ShieldCheck size={12} />
                Professional documents are presented in a
                secure in-browser viewer.
            </div>
        </div>
    );
}

function ResumeViewer({
    resume,
    style,
    onBack
}) {
    return (
        <div className="p-4 sm:p-6 lg:p-8">
            {/* MOBILE BACK */}
            {onBack && (
                <button
                    type="button"
                    onClick={onBack}
                    className="mb-4 inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs font-semibold text-white/60 transition hover:bg-white/[0.06] hover:text-white sm:hidden"
                >
                    <ArrowLeft size={13} />
                    Back to Tracks
                </button>
            )}

            {/* VIEWER */}
            <div className="overflow-hidden rounded-2xl border border-white/[0.1] bg-black/70 shadow-inner">
                <div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.02] px-4 py-3">
                    <div className="flex items-center gap-2">
                        <div
                            className={`h-1.5 w-1.5 rounded-full ${style.bg}`}
                        />

                        <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/35">
                            Document Preview
                        </span>
                    </div>

                    <span className="hidden text-[10px] font-mono text-white/20 sm:block">
                        {resume.filename ||
                            "professional-resume.pdf"}
                    </span>
                </div>

                <div className="h-[62vh] min-h-[420px] w-full bg-[#10131b] sm:h-[67vh]">
                    <iframe
                        src={`${resume.url}#toolbar=0&navpanes=0&scrollbar=0`}
                        title={resume.title}
                        className="h-full w-full border-0 select-none"
                    />
                </div>
            </div>

            {/* ACTION BAR */}
            <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <div className="flex items-center gap-3">
                    <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${style.border} ${style.softBg} ${style.text}`}
                    >
                        <FileText size={15} />
                    </div>

                    <div>
                        <p className="text-xs font-semibold text-white/75">
                            {resume.title}
                        </p>

                        <p className="mt-0.5 flex items-center gap-1 text-[10px] text-white/30">
                            <ShieldCheck size={10} />
                            Official profile document
                        </p>
                    </div>
                </div>

                <a
                    href={resume.url}
                    download={resume.filename}
                    className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold text-black transition hover:-translate-y-0.5 ${style.bg}`}
                >
                    <Download size={14} />
                    Download Resume
                </a>
            </div>
        </div>
    );
}