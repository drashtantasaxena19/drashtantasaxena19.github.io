import React from 'react';
import Hero from '../components/home/Hero';
import CareerTracks from '../components/home/CareerTracks';
import FreelanceSection from '../components/home/FreelanceSection';
import TechStack from '../components/home/TechStack';
import AboutSection from '../components/home/AboutSection';
import ExperienceSection from '../components/home/ExperienceSection';
import SkillsSection from '../components/home/SkillsSection';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
    return (
        <main className="min-h-screen bg-[#03060d]">
            <div id="home">
                <Hero />
            </div>
            
            <div id="about">
                <AboutSection />
            </div>

            <div id="career-tracks">
                <CareerTracks />
            </div>

            <div id="freelance">
                <FreelanceSection />
            </div>

            <TechStack />


            <div id="experience">
                <ExperienceSection />
            </div>

            <div id="skills">
                <SkillsSection />
            </div>

            <div id="contact">
                <ContactSection />
            </div>
        </main>
    );
}