import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Philosophy() {
    const container = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax text
            gsap.to('.phil-bg', {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // Reveal text
            gsap.from('.phil-text-1', {
                scrollTrigger: { trigger: container.current, start: 'top 60%' },
                y: 40, opacity: 0, duration: 1.2, ease: 'power3.out'
            });

            gsap.from('.phil-text-2 span', {
                scrollTrigger: { trigger: '.phil-text-2', start: 'top 70%' },
                y: 60, opacity: 0, duration: 1.4, stagger: 0.15, ease: 'power3.out'
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} id="philosophy" className="relative w-full py-40 md:py-60 overflow-hidden bg-[#05050A]">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2670&auto=format&fit=crop"
                    alt="Organic neon texture"
                    className="phil-bg w-full h-[140%] object-cover opacity-[0.07] grayscale mix-blend-screen -top-[20%] absolute"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void"></div>
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16 flex flex-col gap-12 md:gap-20">
                <p className="phil-text-1 font-sans font-bold tracking-tight text-lg sm:text-xl md:text-3xl text-ghost/40 max-w-3xl">
                    Most 3D pipelines focus on: Static Asset Management.
                </p>
                <h2 className="phil-text-2 flex flex-col gap-1 md:gap-4">
                    <span className="font-sans font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-ghost tracking-tighter block">We focus on:</span>
                    <span className="font-serif italic text-5xl sm:text-6xl md:text-[8rem] lg:text-[9rem] leading-[0.85] text-plasma block pr-4">Dynamic</span>
                    <span className="font-serif italic text-5xl sm:text-6xl md:text-[8rem] lg:text-[9rem] leading-[0.85] text-plasma block pr-4">Environments.</span>
                </h2>
            </div>
        </section>
    );
}
