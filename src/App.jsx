import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import DataAnalyst from './pages/careers/DataAnalyst';
import BIDeveloper from './pages/careers/BIDeveloper';
import PythonDeveloper from './pages/careers/PythonDeveloper';
import DataScience from './pages/careers/DataScience';
import ProjectDetails from './pages/project/ProjectDetails';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [pathname]);

    return null;
}

export default function App() {
    return (
        <div className="min-h-screen bg-[#03060d] text-zinc-100 selection:bg-violet-500/30 selection:text-violet-200 flex flex-col justify-between">
            <ScrollToTop />
            <Navbar />

            <div className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/data-analyst" element={<DataAnalyst />} />
                    <Route path="/bi-developer" element={<BIDeveloper />} />
                    <Route path="/python-developer" element={<PythonDeveloper />} />
                    <Route path="/data-science" element={<DataScience />} />
                    <Route path="/projects/:projectId" element={<ProjectDetails />} />
                    <Route path="/experience" element={<Experience />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
}