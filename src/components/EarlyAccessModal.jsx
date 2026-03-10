import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function EarlyAccessModal({ isOpen, onClose }) {
    const overlayRef = useRef(null);
    const modalRef = useRef(null);
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        useCases: '',
        source: ''
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' });
            gsap.fromTo(modalRef.current, { y: 50, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.5)', delay: 0.1 });
        } else {
            document.body.style.overflow = 'unset';
            setStatus('idle');
            setFormData({ name: '', email: '', useCases: '', source: '' });
        }
    }, [isOpen]);

    const handleClose = () => {
        gsap.to(modalRef.current, { y: 20, opacity: 0, scale: 0.95, duration: 0.3, ease: 'power2.in' });
        gsap.to(overlayRef.current, {
            opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: () => {
                onClose();
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Submission failed');
            setStatus('success');
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    if (!isOpen) return null;

    return (
        <div ref={overlayRef} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-void/80 backdrop-blur-sm">
            <div
                ref={modalRef}
                className="relative w-full max-w-lg bg-graphite/40 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden"
            >
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-plasma/20 rounded-full blur-[80px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>

                <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 text-ghost/50 hover:text-ghost transition-colors p-2 rounded-full hover:bg-white/5"
                >
                    <X size={20} />
                </button>

                {status === 'success' ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                            <CheckCircle2 className="text-green-400" size={32} />
                        </div>
                        <h3 className="font-sans font-bold text-3xl text-ghost">Access Requested</h3>
                        <p className="font-mono text-sm text-ghost/70 max-w-xs leading-relaxed">
                            Thank you, {formData.name.split(' ')[0]}. Your identity has been logged into the Voxkalpa mainframe. We transmit transmission details soon.
                        </p>
                        <button
                            onClick={handleClose}
                            className="mt-6 px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-mono text-sm text-ghost transition-colors"
                        >
                            Return to Interface
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="mb-8 relative z-10">
                            <h2 className="font-sans font-bold text-3xl sm:text-4xl tracking-tight text-ghost mb-2">Request Access</h2>
                            <p className="font-mono text-xs sm:text-sm text-ghost/60">Initialize connection sequence with Voxkalpa AI Labs.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="name" className="font-mono text-xs text-plasma uppercase tracking-widest pl-1">Identifier</label>
                                <input
                                    required
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-[#05050A] border border-white/10 focus:border-plasma/50 rounded-xl px-4 py-3 text-sm text-ghost outline-none transition-colors placeholder:text-ghost/20 font-sans"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email" className="font-mono text-xs text-plasma uppercase tracking-widest pl-1">Comm_Link</label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="work@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#05050A] border border-white/10 focus:border-plasma/50 rounded-xl px-4 py-3 text-sm text-ghost outline-none transition-colors placeholder:text-ghost/20 font-sans"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="useCases" className="font-mono text-xs text-plasma uppercase tracking-widest pl-1">Execution_Parameters</label>
                                <textarea
                                    required
                                    id="useCases"
                                    name="useCases"
                                    rows="3"
                                    placeholder="How do you plan to utilize generative 3D environments?"
                                    value={formData.useCases}
                                    onChange={handleChange}
                                    className="w-full bg-[#05050A] border border-white/10 focus:border-plasma/50 rounded-xl px-4 py-3 text-sm text-ghost outline-none transition-colors placeholder:text-ghost/20 font-sans resize-none"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5 mb-2">
                                <label htmlFor="source" className="font-mono text-xs text-plasma uppercase tracking-widest pl-1">Origin_Vector</label>
                                <select
                                    required
                                    id="source"
                                    name="source"
                                    value={formData.source}
                                    onChange={handleChange}
                                    className="w-full bg-[#05050A] border border-white/10 focus:border-plasma/50 rounded-xl px-4 py-3 text-sm text-ghost outline-none transition-colors appearance-none font-sans"
                                    style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%237B61FF\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                                >
                                    <option value="" disabled className="bg-void text-ghost/50">Select acquisition source...</option>
                                    <option value="twitter" className="bg-void">Twitter / X</option>
                                    <option value="linkedin" className="bg-void">LinkedIn</option>
                                    <option value="referral" className="bg-void">Peer Referral</option>
                                    <option value="search" className="bg-void">Search Protocol</option>
                                    <option value="other" className="bg-void">Other</option>
                                </select>
                            </div>

                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3 text-sm">
                                    <AlertCircle size={16} />
                                    <span>Transmission failed. Please verify connection and try again.</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-plasma hover:bg-plasma/80 text-void font-bold px-6 py-4 rounded-xl flex items-center justify-center transition-colors shadow-[0_0_20px_rgba(123,97,255,0.2)] disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                            >
                                {status === 'loading' ? (
                                    <Loader2 className="animate-spin" size={20} />
                                ) : (
                                    "Transmit Request"
                                )}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
