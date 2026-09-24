import React from 'react';
import { FaPython, FaDocker } from 'react-icons/fa6';
import { FaGitAlt } from 'react-icons/fa';
import { SiFastapi } from 'react-icons/si';
import { TbDatabase } from 'react-icons/tb';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { BiLogoDjango } from "react-icons/bi";

function PowerBIIcon() {
    return (
        <span className="inline-flex items-end gap-[1.5px] h-4 w-4 pb-0.5 justify-center">
            <span className="h-1.5 w-[2.5px] rounded-[1px] bg-[#f2c811]" />
            <span className="h-2.5 w-[2.5px] rounded-[1px] bg-[#f2c811]" />
            <span className="h-3.5 w-[2.5px] rounded-[1px] bg-[#f2c811]" />
            <span className="h-4 w-[2.5px] rounded-[1px] bg-[#f2c811]" />
        </span>
    );
}

const tools = [
    { name: 'Python', icon: <FaPython className="text-[#ffd43b]" /> },
    { name: 'SQL', icon: <TbDatabase className="text-[#7667ff]" /> },
    { name: 'Power BI', icon: <PowerBIIcon /> },
    { name: 'Excel', icon: <RiFileExcel2Fill className="text-[#107c41]" /> },
    { name: 'FastAPI', icon: <SiFastapi className="text-[#009688]" /> },
    { name: 'Django', icon: <BiLogoDjango className="text-[#74ed24]" /> },
    { name: 'Git', icon: <FaGitAlt className="text-[#f05032]" /> },
];

export default function TechStack() {
    return (
        <div className="border-y border-white/[0.06] bg-[#02040a] px-5 py-6 sm:px-8 lg:px-10">
            <div className="mx-auto flex max-w-[1420px] flex-wrap items-center justify-between gap-6">
                <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    Tech & Tools I Work With
                </span>

                <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                    {tools.map((tool) => (
                        <div
                            key={tool.name}
                            className="flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
                        >
                            <span className="text-lg flex items-center justify-center">{tool.icon}</span>
                            <span>{tool.name}</span>
                        </div>
                    ))}
                    <span className="text-xs font-medium text-white/30">and more...</span>
                </div>
            </div>
        </div>
    );
}