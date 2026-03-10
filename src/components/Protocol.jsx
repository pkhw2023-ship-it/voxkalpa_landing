import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const StepOneAnim = () => (
    <svg className="w-[150%] md:w-[120%] h-auto max-h-full animate-[spin_30s_linear_infinite] opacity-60" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#7B61FF" strokeWidth="0.3" strokeDasharray="1 3" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="#7B61FF" strokeWidth="0.5" strokeDasharray="6 2" className="animate-[spin_15s_linear_infinite_reverse]" style={{ transformOrigin: 'center' }} />
        <circle cx="50" cy="50" r="25" fill="none" stroke="#7B61FF" strokeWidth="1" />
        <circle cx="50" cy="50" r="10" fill="none" stroke="#7B61FF" strokeWidth="0.5" strokeDasharray="2 2" />
    </svg>
);

const StepTwoAnim = () => (
    <div className="w-full h-full relative overflow-hidden bg-[radial-gradient(rgba(123,97,255,0.4)_1px,transparent_1px)] [background-size:20px_20px] opacity-70">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-plasma shadow-[0_0_20px_#7B61FF] animate-[scan_3s_ease-in-out_infinite]" />
        <style>{`
      @keyframes scan {
        0%, 100% { top: 0%; opacity: 0; }
        10%, 90% { opacity: 1; }
        50% { top: 100%; }
      }
    `}</style>
    </div>
);

const StepThreeAnim = () => (
    <svg className="w-[120%] md:w-full h-full opacity-70" viewBox="0 0 200 100" preserveAspectRatio="none">
        <path
            d="M0,50 L50,50 L60,30 L70,80 L80,20 L90,60 L100,50 L200,50"
            fill="none"
            stroke="#7B61FF"
            strokeWidth="2"
            className="animate-[dash_2s_linear_infinite]"
            strokeDasharray="200"
            strokeDashoffset="200"
            style={{ filter: 'drop-shadow(0 0 10px rgba(123,97,255,0.8))' }}
        />
        <style>{`
      @keyframes dash {
        to { stroke-dashoffset: 0; }
      }
    `}</style>
    </svg>
);

const cards = [
    { id: '01', title: 'Data Ingestion', desc: 'Securely map and store massive point cloud files into our proprietary void-layer schema.', Anim: StepOneAnim },
    { id: '02', title: 'Algorithmic Curation', desc: 'Our ML models automatically classify, tag, and structure raw voxel data for immediate access.', Anim: StepTwoAnim },
    { id: '03', title: 'Dynamic Deployment', desc: 'Stream optimized 3D environments instantly into your production pipeline with zero latency.', Anim: StepThreeAnim }
];

export default function Protocol() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const cardElements = gsap.utils.toArray('.protocol-card');
            cardElements.forEach((card, index) => {
                if (index === cardElements.length - 1) return; // Last card doesn't scale down
                const nextCard = cardElements[index + 1];

                gsap.to(card, {
                    scale: 0.9,
                    filter: 'blur(15px)',
                    opacity: 0.3,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: nextCard,
                        start: 'top bottom',
                        end: 'top top',
                        scrub: true
                    }
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="protocol" className="relative w-full bg-void pb-32">
            {cards.map((card, i) => (
                <div key={card.id} className="protocol-card sticky top-0 h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-hidden mx-auto">
                    {/* Card Surface */}
                    <div className="relative w-full max-w-[80rem] h-full max-h-[85vh] bg-graphite/80 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-8 md:p-20 flex flex-col md:flex-row shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                        {/* Visuals */}
                        <div className="absolute inset-0 z-0 flex items-center justify-center md:justify-end pr-0 md:pr-20 opacity-20 md:opacity-100 mix-blend-screen pointer-events-none">
                            <div className="w-full h-full md:w-1/2 aspect-square flex items-center justify-center">
                                <card.Anim />
                            </div>
                        </div>
                        {/* Content */}
                        <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center gap-6 md:gap-8 h-full text-ghost">
                            <span className="font-mono text-plasma text-lg md:text-xl tracking-widest font-bold">[{card.id}]</span>
                            <h2 className="font-sans font-bold text-5xl sm:text-6xl md:text-8xl tracking-tighter leading-[0.9]">{card.title}</h2>
                            <p className="font-mono text-ghost/70 text-base md:text-lg max-w-sm md:max-w-md leading-relaxed mt-4">{card.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
