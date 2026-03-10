import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#05050A] rounded-t-[3rem] md:rounded-t-[4rem] text-ghost/80 pt-24 pb-12 px-6 md:px-16 mt-0 relative z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <div className="max-w-[90rem] mx-auto flex flex-col gap-20">
                <div className="flex flex-col lg:flex-row justify-between gap-16">
                    <div className="flex flex-col gap-6 max-w-md">
                        <h3 className="font-sans font-bold text-3xl tracking-tight text-ghost">
                            Voxkalpa<span className="text-plasma">.</span>
                        </h3>
                        <p className="font-mono text-sm leading-relaxed text-ghost/50">
                            A 3D solutions provider and content generator pushing the boundaries of voxel technology.
                        </p>
                        <div className="flex items-center gap-3 mt-6 px-4 py-2 border border-plasma/30 rounded-full w-max bg-void shadow-inner shadow-black/50">
                            <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-[#22c55e] uppercase">System Operational</span>
                        </div>
                    </div>

                    <div className="flex gap-16 md:gap-32 font-mono text-sm">
                        <div className="flex flex-col gap-5">
                            <span className="text-ghost font-bold mb-2 font-sans text-lg tracking-tight">Navigation</span>
                            <a href="#features" className="hover-lift hover:text-plasma transition-colors text-ghost/60">Solutions</a>
                            <a href="#philosophy" className="hover-lift hover:text-plasma transition-colors text-ghost/60">Philosophy</a>
                            <a href="#protocol" className="hover-lift hover:text-plasma transition-colors text-ghost/60">Protocol</a>
                        </div>
                        <div className="flex flex-col gap-5">
                            <span className="text-ghost font-bold mb-2 font-sans text-lg tracking-tight">Legal</span>
                            <a href="#" className="hover-lift hover:text-plasma transition-colors text-ghost/60">Privacy</a>
                            <a href="#" className="hover-lift hover:text-plasma transition-colors text-ghost/60">Terms</a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-ghost/40">
                    <span>&copy; {new Date().getFullYear()} Voxkalpa AI Labs. All rights reserved.</span>
                    <span>Designed with Vapor Clinic Preset</span>
                </div>
            </div>
        </footer>
    );
}
