import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail,
    MapPin,
    ArrowRight,
    ArrowUpRight,
    Copy,
    Check,
    Send,
    MessageSquareText,
    Sparkles,
    CheckCircle2,
    Lock
} from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { socialLinks } from '../../data/socialLinks';

export default function ContactSection() {
    const {
        email,
        whatsappRaw,
        whatsappDirectUrl,
        linkedin,
        github,
        location
    } = socialLinks;

    // Toggle between direct connect cards & form
    const [mode, setMode] = useState('direct'); // 'direct' | 'form'
    const [copied, setCopied] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2200);
        } catch (err) {
            console.error('Copy failed:', err);
        }
    };

    const handleFormChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // Form submit -> opens WhatsApp with structured query
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        const waText = encodeURIComponent(
            `Hi Drashtanta, I found your portfolio and would like to connect!\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `*Subject:* ${formData.subject || 'General Inquiry'}\n\n` +
            `*Message:*\n${formData.message}`
        );

        const waUrl = `https://wa.me/${whatsappRaw}?text=${waText}`;

        setIsSubmitted(true);
        window.open(waUrl, '_blank');

        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitted(false);
            setSubmitting(false);
        }, 5000);
    };

    const waDirectUrl = whatsappDirectUrl || `https://wa.me/${whatsappRaw}?text=${encodeURIComponent(
        'Hi Drashtanta, I found your portfolio and would like to connect with you.'
    )}`;

    return (
        <section
            id="contact"
            className="relative overflow-hidden border-t border-white/[0.05] bg-[#03060d] px-5 pt-8 pb-16 sm:px-8 sm:pt-10 sm:pb-20 lg:px-10"
        >
            {/* Ambient Lighting */}
            <div className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[160px]" />
            <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-emerald-500/[0.04] blur-[130px]" />
            <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-blue-500/[0.04] blur-[130px]" />

            {/* Matrix Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.018]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
                    backgroundSize: '64px 64px'
                }}
            />

            <div className="relative mx-auto max-w-[1420px]">
                
                {/* Header with Glowing Dot + Mode Switcher */}
                <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="mb-3 flex items-center gap-2.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.95)]" />
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">
                                Get In Touch
                            </p>
                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-5xl leading-[1.12]">
                            Have an idea or opportunity?{' '}
                            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Let’s connect.
                            </span>
                        </h2>

                        <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base max-w-xl">
                            Open for engineering roles, BI dashboards, and freelance projects. Choose your preferred way to reach out.
                        </p>
                    </div>

                    {/* Mode Switcher Pill */}
                    <div className="inline-flex rounded-2xl border border-white/[0.08] bg-white/[0.02] p-1.5 backdrop-blur-xl shrink-0 gap-1">
                        <button
                            type="button"
                            onClick={() => setMode('direct')}
                            className={`relative flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-all duration-300 ${
                                mode === 'direct' ? 'text-white' : 'text-white/50 hover:text-white'
                            }`}
                        >
                            {mode === 'direct' && (
                                <motion.div
                                    layoutId="active-contact-tab"
                                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/50 to-indigo-600/40 border border-violet-400/30 shadow-[0_0_20px_rgba(124,58,237,0.25)]"
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                            <Sparkles size={13} className="relative z-10" />
                            <span className="relative z-10">Quick Connect</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => setMode('form')}
                            className={`relative flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-all duration-300 ${
                                mode === 'form' ? 'text-white' : 'text-white/50 hover:text-white'
                            }`}
                        >
                            {mode === 'form' && (
                                <motion.div
                                    layoutId="active-contact-tab"
                                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/50 to-indigo-600/40 border border-violet-400/30 shadow-[0_0_20px_rgba(124,58,237,0.25)]"
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                            <MessageSquareText size={13} className="relative z-10" />
                            <span className="relative z-10">Fill a Form</span>
                        </button>
                    </div>
                </div>

                {/* Primary Content View Switcher */}
                <AnimatePresence mode="wait">
                    {mode === 'direct' ? (
                        /* OPTION 1: DIRECT CONNECT CARDS (WhatsApp & Email) */
                        <motion.div
                            key="direct"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.35 }}
                            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12"
                        >
                            {/* WHATSAPP CARD */}
                            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/[0.05] via-white/[0.02] to-transparent p-7 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_12px_40px_rgba(16,185,129,0.12)] lg:col-span-6">
                                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-500/[0.08] blur-3xl transition-all duration-500 group-hover:bg-emerald-500/[0.16]" />

                                <div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                                            <FaWhatsapp size={24} />
                                        </div>

                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            Instant Chat
                                        </span>
                                    </div>

                                    <div className="mt-6">
                                        <h3 className="text-xl font-semibold text-white tracking-tight sm:text-2xl">
                                            WhatsApp
                                        </h3>
                                        <p className="mt-1 text-sm font-medium text-emerald-300/90">
                                            Start a conversation
                                        </p>
                                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/50">
                                            Click to share your details directly on WhatsApp. Your message will be pre-composed for quick communication.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 pt-5 border-t border-white/[0.06]">
                                    <a
                                        href={waDirectUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-[0_10px_28px_rgba(16,185,129,0.3)] transition-all duration-300 hover:from-emerald-400 hover:to-teal-500 hover:shadow-[0_14px_35px_rgba(16,185,129,0.42)] hover:-translate-y-0.5"
                                    >
                                        <FaWhatsapp size={17} />
                                        <span>Message on WhatsApp</span>
                                        <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                                    </a>
                                </div>
                            </div>

                            {/* EMAIL CARD */}
                            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-b from-violet-500/[0.05] via-white/[0.02] to-transparent p-7 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/50 hover:shadow-[0_12px_40px_rgba(124,58,237,0.12)] lg:col-span-6">
                                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/[0.08] blur-3xl transition-all duration-500 group-hover:bg-violet-500/[0.16]" />

                                <div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-violet-300 shadow-[0_0_20px_rgba(124,58,237,0.2)]">
                                            <Mail size={22} />
                                        </div>

                                        <button
                                            type="button"
                                            onClick={handleCopyEmail}
                                            className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-white/70 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                                        >
                                            {copied ? (
                                                <>
                                                    <Check size={12} className="text-emerald-400" />
                                                    <span className="text-emerald-300">Email Copied!</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Copy size={12} />
                                                    <span>Copy Address</span>
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    <div className="mt-6">
                                        <h3 className="text-xl font-semibold text-white tracking-tight sm:text-2xl">
                                            Email
                                        </h3>
                                        <p className="mt-1 text-sm font-medium text-violet-300/90 truncate">
                                            {email}
                                        </p>
                                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/50">
                                            Prefer formal inquiries, project briefs, or job specs? Send an email and I will get back within 12-24 hours.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 pt-5 border-t border-white/[0.06]">
                                    <a
                                        href={`mailto:${email}?subject=Portfolio%20Inquiry%20-%20Drashtanta%20Saxena`}
                                        className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-600 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-[0_10px_28px_rgba(124,58,237,0.3)] transition-all duration-300 hover:opacity-95 hover:shadow-[0_14px_35px_rgba(124,58,237,0.42)] hover:-translate-y-0.5"
                                    >
                                        <Mail size={16} />
                                        <span>Send Email Directly</span>
                                        <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        /* OPTION 2: COMPACT FORM */
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.35 }}
                            className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-b from-white/[0.04] via-white/[0.02] to-white/[0.01] p-7 sm:p-9 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                        >
                            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <div>
                                    <h3 className="text-xl font-semibold text-white tracking-tight">
                                        Quick Contact Form
                                    </h3>
                                    <p className="mt-1 text-xs text-white/50">
                                        Fill in your details — your message will open in WhatsApp ready to send.
                                    </p>
                                </div>
                                
                                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 w-fit">
                                    <FaWhatsapp size={14} />
                                    <span>Opens in WhatsApp</span>
                                </div>
                            </div>

                            <form onSubmit={handleFormSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/60 mb-2">
                                            Your Name <span className="text-violet-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleFormChange}
                                            placeholder="e.g. Alex Hunter"
                                            className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-xs sm:text-sm text-white placeholder-white/25 backdrop-blur-md transition focus:border-violet-400/60 focus:bg-white/[0.05] focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/60 mb-2">
                                            Your Email <span className="text-violet-400">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleFormChange}
                                            placeholder="alex@example.com"
                                            className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-xs sm:text-sm text-white placeholder-white/25 backdrop-blur-md transition focus:border-violet-400/60 focus:bg-white/[0.05] focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/60 mb-2">
                                        Subject / Topic
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleFormChange}
                                        placeholder="Job Opportunity, Freelance Dashboard, Collaboration..."
                                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-xs sm:text-sm text-white placeholder-white/25 backdrop-blur-md transition focus:border-violet-400/60 focus:bg-white/[0.05] focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/60 mb-2">
                                        Message <span className="text-violet-400">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={3}
                                        value={formData.message}
                                        onChange={handleFormChange}
                                        placeholder="Hi Drashtanta, I came across your work and..."
                                        className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-xs sm:text-sm text-white placeholder-white/25 backdrop-blur-md transition focus:border-violet-400/60 focus:bg-white/[0.05] focus:outline-none"
                                    />
                                </div>

                                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="flex items-center gap-2 text-[11px] text-white/40">
                                        <Lock size={12} className="text-emerald-400" />
                                        <span>Your message will open directly in WhatsApp with your details pre-formatted.</span>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-[0_10px_30px_rgba(16,185,129,0.3)] transition-all hover:from-emerald-400 hover:to-teal-500 hover:-translate-y-0.5 disabled:opacity-50"
                                    >
                                        <FaWhatsapp size={16} />
                                        <span>{submitting ? 'Redirecting...' : 'Submit via WhatsApp'}</span>
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </form>

                            {isSubmitted && (
                                <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-3 text-xs text-emerald-300">
                                    <CheckCircle2 size={16} />
                                    <span>WhatsApp opened with your pre-filled inquiry.</span>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* HIGH-VISIBILITY SECONDARY ROW */}
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    
                    {/* LinkedIn */}
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#0077B5]/50 hover:bg-[#0077B5]/[0.06] hover:-translate-y-0.5"
                    >
                        <div className="flex items-center gap-3.5">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0077B5]/15 text-[#0077B5] transition-transform duration-300 group-hover:scale-110">
                                <FaLinkedinIn size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-white">LinkedIn</h4>
                                <p className="text-[11px] text-white/45">Professional Network & Posts</p>
                            </div>
                        </div>
                        <ArrowUpRight size={16} className="text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                    </a>

                    {/* GitHub */}
                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:-translate-y-0.5"
                    >
                        <div className="flex items-center gap-3.5">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition-transform duration-300 group-hover:scale-110">
                                <FaGithub size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-white">GitHub</h4>
                                <p className="text-[11px] text-white/45">Source Code & Case Studies</p>
                            </div>
                        </div>
                        <ArrowUpRight size={16} className="text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                    </a>

                    {/* Location */}
                    <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-xl">
                        <div className="flex items-center gap-3.5">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-white">Location</h4>
                                <p className="text-[11px] text-white/45">{location}</p>
                            </div>
                        </div>
                        <span className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[10px] font-medium text-white/45">
                            Remote / On-site
                        </span>
                    </div>

                </div>

                {/* Bottom Availability Status */}
                <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.05] pt-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        Available for full-time software engineering roles, data analytics, and select freelance initiatives.
                    </p>
                    <div className="flex items-center gap-2 text-white/50">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                        <span>Replies within 12–24 hours</span>
                    </div>
                </div>

            </div>
        </section>
    );
}