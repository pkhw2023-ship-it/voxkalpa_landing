import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const container = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.hero-elem', {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.08,
                ease: 'power3.out',
                delay: 0.2
            });

            gsap.from('.hero-img', {
                scale: 1.05,
                duration: 2,
                ease: 'power2.out',
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative w-full h-[100dvh] overflow-hidden flex items-end pb-24 px-6 md:px-16" id="top">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1614729939124-032f0b5609ce?q=80&w=2574&auto=format&fit=crop"
                    alt="Abstract dark water bioluminescence"
                    className="hero-img w-full h-full object-cover origin-bottom opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent"></div>
                <div className="absolute inset-0 bg-plasma/5 mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 w-full max-w-5xl flex flex-col items-start gap-4 pb-8 md:pb-16">
                <h1 className="flex flex-col gap-0 w-full">
                    <span className="hero-elem font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-ghost">
                        Voxel matrices beyond
                    </span>
                    <span className="hero-elem font-serif italic text-7xl md:text-[10rem] text-plasma leading-[0.8] mt-2 block pr-8 md:pr-0">
                        Perception.
                    </span>
                </h1>
                <p className="hero-elem font-mono text-ghost/70 max-w-lg mt-8 text-sm md:text-base leading-relaxed">
                    Voxkalpa AI Labs. A genome sequencing lab inside a Tokyo nightclub. Designing dynamic 3D interactions and intelligent asset curation.
                </p>
                <div className="hero-elem mt-10">
                    <button className="btn-magnetic bg-plasma text-void px-8 py-4 text-lg rounded-full hover:text-ghost">
                        <span className="btn-bg bg-ghost/10"></span>
                        <span className="btn-content font-bold">Request Early Access</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
