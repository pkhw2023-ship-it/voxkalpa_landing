import React, { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { Box } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
    const navRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useLayoutEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            ref={navRef}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-4 rounded-[3rem] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isScrolled
                ? 'w-[90%] md:w-[70%] bg-void/60 backdrop-blur-xl border border-plasma/20 text-plasma shadow-lg shadow-void/50'
                : 'w-full md:w-[80%] bg-transparent text-ghost'
                }`}
        >
            <div className="font-sans font-bold tracking-tight text-xl">
                Voxkalpa<span className="text-plasma">.</span>
            </div>
            <div className="hidden md:flex items-center gap-8 font-mono text-sm tracking-wide">
                <a href="#features" className="hover-lift hover:text-plasma transition-colors">Solutions</a>
                <a href="#philosophy" className="hover-lift hover:text-plasma transition-colors">Philosophy</a>
                <a href="#protocol" className="hover-lift hover:text-plasma transition-colors">Protocol</a>
            </div>
            <button
                onClick={onOpenModal}
                className="hidden md:block btn-magnetic px-5 py-2 text-sm font-medium border border-white/10 rounded-full hover:bg-white/5 transition-colors"
            >
                Request Early Access
            </button>
        </nav>
    );
}
