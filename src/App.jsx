import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';
import EarlyAccessModal from './components/EarlyAccessModal';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

function App() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <div className="relative w-full min-h-screen bg-void text-ghost selection:bg-plasma/30 selection:text-white">
            <Navbar onOpenModal={() => setIsModalOpen(true)} />
            <Hero onOpenModal={() => setIsModalOpen(true)} />
            <Features />
            <Philosophy />
            <Protocol />
            <GetStarted onOpenModal={() => setIsModalOpen(true)} />
            <Footer />
            <Analytics />

            <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

export default App;
