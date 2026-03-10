import React, { useLayoutEffect, useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer2 } from 'lucide-react';

function DiagnosticShuffler() {
    const [items, setItems] = useState([
        { id: 1, title: 'Asset Polycount Validation', status: 'Optimal' },
        { id: 2, title: 'Bake Texture Maps', status: 'Processing...' },
        { id: 3, title: 'Hierarchy Restructuring', status: 'Pending' }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setItems(prev => {
                const newArr = [...prev];
                const last = newArr.pop();
                newArr.unshift(last);
                return newArr;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-64 w-full flex flex-col items-center justify-center pointer-events-none">
            {items.map((item, i) => {
                const isFirst = i === 0;

                return (
                    <div
                        key={item.id}
                        className="absolute w-[100%] bg-void border border-plasma/20 rounded-2xl p-4 shadow-xl flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                        style={{
                            transform: `translateY(${i * 24}px) scale(${1 - i * 0.05})`,
                            opacity: 1 - i * 0.3,
                            zIndex: 10 - i
                        }}
                    >
                        <div className="flex flex-col gap-1">
                            <span className="font-mono text-xs text-plasma">TASK_ID_{item.id}</span>
                            <span className="font-sans font-semibold text-sm text-ghost">{item.title}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${isFirst ? 'bg-plasma animate-pulse shadow-[0_0_10px_rgba(123,97,255,0.8)]' : 'bg-void border border-plasma'}`}></div>
                            <span className="font-mono text-[10px] text-ghost/60 hidden sm:block">{item.status}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

function TelemetryTypewriter() {
    const [text, setText] = useState('');
    const fullText = "GENERATING_VOXEL_CLOUD...\n>> SEED: 0x9A4F2B\n>> DENSITY: HIGH\n>> RENDER: ACTIVE\n[SUCCESS] SCENE COMPILED.";

    useEffect(() => {
        let i = 0;
        let timeout;
        const type = () => {
            setText(fullText.substring(0, i));
            i++;
            if (i <= fullText.length) {
                timeout = setTimeout(type, 30 + Math.random() * 30);
            } else {
                timeout = setTimeout(() => {
                    i = 0;
                    type();
                }, 4000);
            }
        };
        timeout = setTimeout(type, 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="h-72 w-full bg-[#05050A] rounded-2xl border border-white/5 flex flex-col font-mono text-xs md:text-sm relative overflow-hidden shadow-inner shadow-black/50 group">
            <div className="absolute inset-0 z-0">
                <video
                    src="/media/bunny.mp4"
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover opacity-30 mix-blend-screen grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent pointer-events-none"></div>
            </div>
            <div className="relative z-10 p-6 flex flex-col h-full w-full">
                <div className="flex items-center gap-2 mb-4 w-full border-b border-white/10 pb-3">
                    <div className="w-2 h-2 rounded-full bg-plasma animate-pulse shadow-[0_0_8px_rgba(123,97,255,1)]"></div>
                    <span className="text-[10px] text-ghost/70 tracking-wider font-bold">LIVE METRICS</span>
                </div>
                <div className="text-plasma whitespace-pre-wrap flex-1 leading-relaxed drop-shadow-md">
                    {text}<span className="inline-block w-2.5 h-3.5 bg-plasma animate-pulse ml-1 align-middle"></span>
                </div>
            </div>
        </div>
    );
}

function CursorProtocol() {
    const container = useRef(null);
    const cursorRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
            tl.to(cursorRef.current, { x: 90, y: 35, duration: 1.2, ease: 'power2.inOut' })
                .to(cursorRef.current, { scale: 0.8, duration: 0.15, yoyo: true, repeat: 1 })
                .to('.day-cell-3', { backgroundColor: '#7B61FF', borderColor: '#7B61FF', color: '#0A0A14', duration: 0.3 }, "-=0.15")
                .to(cursorRef.current, { x: 190, y: 130, duration: 1.2, ease: 'power2.inOut' }, "+=0.8")
                .to(cursorRef.current, { scale: 0.8, duration: 0.15, yoyo: true, repeat: 1 })
                .to('.save-btn', { scale: 0.95, duration: 0.15, yoyo: true, repeat: 1, backgroundColor: '#7B61FF', color: '#0A0A14' }, "-=0.15")
                .to('.save-btn', { backgroundColor: 'transparent', color: '#7B61FF', duration: 0.3 }, "+=0.2")
                .to(cursorRef.current, { opacity: 0, duration: 0.3 })
                .set(cursorRef.current, { x: 0, y: 0 })
                .set('.day-cell-3', { backgroundColor: 'transparent', borderColor: 'rgba(123,97,255,0.2)', color: '#F0EFF4' })
                .to(cursorRef.current, { opacity: 1, duration: 0.3 }, "+=0.5");

        }, container);
        return () => ctx.revert();
    }, []);

    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <div ref={container} className="h-64 w-full relative flex flex-col items-center justify-center border border-white/5 rounded-2xl bg-[#05050A] p-6 shadow-inner py-8">
            <div className="grid grid-cols-7 gap-1 sm:gap-2 w-full mb-10">
                {days.map((d, i) => (
                    <div key={i} className={`day-cell-${i} flex items-center justify-center aspect-square rounded-lg border border-plasma/20 text-xs font-mono transition-colors text-ghost/70`}>
                        {d}
                    </div>
                ))}
            </div>
            <div className="save-btn px-6 py-2.5 border border-plasma text-plasma rounded-full text-[10px] sm:text-xs font-mono tracking-widest self-end mr-2 sm:mr-4 transition-colors">
                SAVE_STATE
            </div>
            <div ref={cursorRef} className="absolute top-8 left-8 text-ghost z-10 w-6 h-6 drop-shadow-lg pointer-events-none">
                <MousePointer2 size={24} fill="#F0EFF4" className="-rotate-12" />
            </div>
        </div>
    );
}

export default function Features() {
    const container = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 75%',
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} id="features" className="py-32 px-6 md:px-16 w-full max-w-[90rem] mx-auto z-10 relative bg-void">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Card 1 */}
                <div className="feature-card bg-graphite/30 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-10 border border-white/5 shadow-2xl flex flex-col gap-10">
                    <div className="flex-1 w-full">
                        <DiagnosticShuffler />
                    </div>
                    <div className="mt-auto">
                        <h3 className="font-sans font-bold text-2xl text-ghost mb-3 tracking-tight">Intelligent Asset Organization</h3>
                        <p className="font-mono text-sm text-ghost/60 leading-relaxed">Seamlessly manage and structure complex 3D assets with automated diagnostic pipelines.</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="feature-card bg-graphite/30 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-10 border border-white/5 shadow-2xl flex flex-col gap-10">
                    <div className="flex-1 w-full">
                        <TelemetryTypewriter />
                    </div>
                    <div className="mt-auto">
                        <h3 className="font-sans font-bold text-2xl text-ghost mb-3 tracking-tight">Generative Morph Interpolation</h3>
                        <p className="font-mono text-sm text-ghost/60 leading-relaxed">Real-time mesh evolution and volumetric transformations calculated instantaneously via our proprietary physics compiler.</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="feature-card bg-graphite/30 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-10 border border-white/5 shadow-2xl flex flex-col gap-10">
                    <div className="flex-1 w-full flex items-center justify-center">
                        <CursorProtocol />
                    </div>
                    <div className="mt-auto">
                        <h3 className="font-sans font-bold text-2xl text-ghost mb-3 tracking-tight">Dynamic Scene Interaction</h3>
                        <p className="font-mono text-sm text-ghost/60 leading-relaxed">Develop and organize complex interactions within 3D environments synchronously.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
