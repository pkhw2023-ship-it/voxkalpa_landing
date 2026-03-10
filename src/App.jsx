import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
    return (
        <div className="relative w-full min-h-screen bg-void text-ghost selection:bg-plasma/30 selection:text-white">
            <Navbar />
            <Hero />
            <Features />
            <Philosophy />
            <Protocol />
            <GetStarted />
            <Footer />
        </div>
    );
}

export default App;
