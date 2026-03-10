import React from 'react';

export default function GetStarted() {
    return (
        <section className="relative w-full py-40 md:py-56 px-6 flex items-center justify-center bg-void z-20 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-plasma/20 rounded-full blur-[120px]"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 sm:gap-8 max-w-4xl mx-auto">
                <h2 className="font-sans font-bold text-[clamp(2.5rem,7vw,5rem)] text-ghost tracking-tighter flex flex-col gap-2">
                    <span>Ready to transcend</span>
                    <span className="font-serif italic text-plasma font-normal text-[clamp(3rem,11vw,9rem)] leading-[0.8] block mb-4">boundaries?</span>
                </h2>
                <p className="font-mono text-ghost/70 max-w-lg mx-auto text-xs sm:text-sm md:text-base leading-relaxed px-4 sm:px-0">
                    Join the exclusive collective of digital artists and engineers shaping the future of voxel technology.
                </p>
                <button className="btn-magnetic bg-plasma text-void px-10 md:px-14 py-5 md:py-6 text-xl md:text-2xl rounded-full hover:text-ghost mt-8 shadow-[0_0_40px_rgba(123,97,255,0.4)]">
                    <span className="btn-bg bg-ghost/10"></span>
                    <span className="btn-content font-bold">Request Early Access</span>
                </button>
            </div>
        </section>
    );
}
