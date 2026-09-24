import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MapPin, ArrowUp, Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { profile } from '../../data/profile';
import { socialLinks } from '../../data/socialLinks';

export default function Footer() {
    const location = useLocation();
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();
    const [logoError, setLogoError] = useState(false);

    const {
        email,
        whatsappRaw,
        whatsappDirectUrl,
        github: githubUrl,
        linkedin: linkedinUrl,
        location: userLocation
    } = socialLinks;

    const waDirectUrl = whatsappDirectUrl || `https://wa.me/${whatsappRaw}?text=${encodeURIComponent(
        'Hi Drashtanta, I found your portfolio and would like to connect with you.'
    )}`;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScrollNavigation = (targetId) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const elem = document.getElementById(targetId);
                if (elem) {
                    const offset = 80;
                    const pos = elem.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: pos, behavior: 'smooth' });
                }
            }, 120);
        } else {
            const elem = document.getElementById(targetId);
            if (elem) {
                const offset = 80;
                const pos = elem.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#02040a] px-5 pt-16 pb-12 sm:px-8 lg:px-10 text-zinc-400">
            {/* Background ambient lighting */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-[680px] -translate-x-1/2 rounded-full bg-violet-600/[0.06] blur-[130px]" />

            <div className="relative mx-auto max-w-[1420px]">
                {/* Upper Footer Grid */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-white/[0.07]">

                    {/* Brand & Mission (5 Cols) */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                        <div>
                            <button
                                onClick={() => handleScrollNavigation('home')}
                                className="group flex items-center gap-4 text-left focus:outline-none"
                            >
                                {/* Prominent High-Visibility Logo Box */}
                                <div className="relative flex h-13 w-13 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-violet-400/30 bg-[#070b14] shadow-[0_0_30px_rgba(124,58,237,0.22)] transition-all duration-300 group-hover:scale-105 group-hover:border-violet-400/50">
                                    {!logoError ? (
                                        <img
                                            src="/favicon.jpg"
                                            alt="Drashtanta Saxena Logo"
                                            onError={() => setLogoError(true)}
                                            className="h-20 w-20 object-contain p-0.5 transition-transform duration-300 group-hover:scale-110"
                                        />
                                    ) : (
                                        <span className="text-base font-extrabold tracking-tight text-violet-200">
                                            DS
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                                        {profile.name}
                                    </h3>
                                    <p className="mt-0.5 text-xs text-violet-300/80 font-medium">
                                        {profile.positioning || 'Developer · Analyst · Builder'}
                                    </p>
                                </div>
                            </button>

                            <p className="mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-white/55">
                                Turning raw data, Python workflows, and intuitive BI dashboards into real-world business value.
                            </p>
                        </div>

                        {/* Location & Active Status */}
                        <div className="flex flex-wrap items-center gap-4 text-xs">
                            <span className="flex items-center gap-1.5 text-white/60">
                                <MapPin size={14} className="text-violet-400" />
                                {userLocation}
                            </span>
                            <span className="h-1 w-1 rounded-full bg-white/20" />
                            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                                Open to opportunities
                            </span>
                        </div>
                    </div>

                    {/* Quick Section Navigation (3 Cols) */}
                    <div className="lg:col-span-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75 mb-4">
                            Navigation
                        </p>
                        <div className="flex flex-col gap-3 text-xs sm:text-sm font-medium text-white/55">
                            {[
                                { label: 'Home', id: 'home' },
                                { label: 'About', id: 'about' },
                                { label: 'Career Tracks', id: 'career-tracks' },
                                { label: 'Experience', id: 'experience' },
                                { label: 'Contact', id: 'contact' }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleScrollNavigation(item.id)}
                                    className="text-left transition-colors duration-200 hover:text-white focus:outline-none"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Career Tracks & Roles (2 Cols) */}
                    <div className="lg:col-span-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75 mb-4">
                            Expertise Tracks
                        </p>
                        <div className="flex flex-col gap-3 text-xs sm:text-sm font-medium text-white/55">
                            <Link to="/data-analyst" className="transition-colors hover:text-white">Data Analyst</Link>
                            <Link to="/bi-developer" className="transition-colors hover:text-white">BI Developer</Link>
                            <Link to="/python-developer" className="transition-colors hover:text-white">Python Developer</Link>
                            <Link to="/data-science" className="transition-colors hover:text-white">Data Science</Link>
                        </div>
                    </div>

                    {/* Direct Connect & Socials (2 Cols) */}
                    <div className="lg:col-span-2 flex flex-col justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75 mb-4">
                                Direct Connect
                            </p>
                            <div className="flex items-center gap-2.5">
                                <a
                                    href={waDirectUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/70 transition-all duration-300 hover:scale-105 hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-emerald-400"
                                    title="WhatsApp Message"
                                >
                                    <FaWhatsapp size={18} />
                                </a>

                                <a
                                    href={`mailto:${email}`}
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/70 transition-all duration-300 hover:scale-105 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-300"
                                    title="Send Email"
                                >
                                    <Mail size={17} />
                                </a>

                                <a
                                    href={linkedinUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/70 transition-all duration-300 hover:scale-105 hover:border-blue-400/50 hover:bg-[#0077B5]/10 hover:text-blue-400"
                                    title="LinkedIn Profile"
                                >
                                    <FaLinkedinIn size={17} />
                                </a>

                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/70 transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
                                    title="GitHub Profile"
                                >
                                    <FaGithub size={17} />
                                </a>
                            </div>
                        </div>

                        {/* Back to Top Button */}
                        <div className="mt-6 sm:mt-0">
                            <button
                                onClick={scrollToTop}
                                className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-white/70 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/[0.08] hover:text-white"
                            >
                                <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                                <span>Back to Top</span>
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Copyright & Credits */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
                    <p>© {currentYear} {profile.name}. All rights reserved.</p>
                    <p className="flex items-center gap-1.5">
                        Crafted with <Heart size={12} className="text-violet-400 fill-violet-400/30" /> using React, Tailwind & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
}