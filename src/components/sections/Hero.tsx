import { motion } from 'framer-motion';
import { ArrowRight, Play, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import heroPattern from '@/assets/hero-pattern-nano.png';

const floatingIcons = [
];

export const Hero = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();




    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628]"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
                style={{ backgroundImage: `url(${heroPattern})` }}
            />

            {/* Overlay: Improved with the new deep navy tones */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#11141E]/80 via-[#11141E]/40 to-[#11141E]/90" />

            {/* Floating Icons */}
            {floatingIcons.map(({ Icon, delay, position }, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ delay: 1 + delay, duration: 0.5 }}
                    className={`absolute ${position} hidden lg:block`}
                >
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, delay }}
                        className="glass p-4 rounded-2xl"
                    >
                        <Icon className="w-8 h-8 text-white/80" />
                    </motion.div>
                </motion.div>
            ))}

            {/* Content */}
            <div className="container-custom relative z-10 pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge: Refined Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass mb-8 border border-white/10 shadow-glow-blue"
                    >
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                        <span className="text-white/95 text-xs md:text-sm font-semibold tracking-wide uppercase">
                            {t('hero.badge')}
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
                    >
                        VIEW TRACK <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">SOLUTION</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Follow Closely!
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Button
                            onClick={() => navigate('/solutions-gps')}
                            className="bg-gradient-to-r from-[#1C5F88] to-[#1E7FA6] hover:from-[#1E7FA6] hover:to-[#1C5F88] text-white text-lg px-10 py-7 rounded-2xl group transition-all duration-300 shadow-lg shadow-cyan-900/40"
                        >
                            Nos solutions
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button
                            onClick={() => navigate('/contact')}
                            variant="ghost"
                            className="border-2 border-white/20 text-white hover:bg-white/10 text-lg px-10 py-7 rounded-2xl group transition-all duration-300 backdrop-blur-sm"
                        >
                            Contact commercial
                            <ExternalLink className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/60"
                    >

                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-accent rounded-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};
