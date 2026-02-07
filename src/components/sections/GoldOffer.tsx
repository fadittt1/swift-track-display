import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    Satellite,
    Wifi,
    Server,
    Wrench,
    Headphones,
    Crown,
    ArrowRight,
    Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const features = [
    {
        icon: Satellite,
        title: 'Système GPS Premium',
        description: 'Trackers professionnels haute précision'
    },
    {
        icon: Wifi,
        title: 'Abonnement Opérateur',
        description: 'Connectivité 4G illimitée incluse'
    },
    {
        icon: Server,
        title: 'Hébergement Serveur',
        description: 'Infrastructure cloud sécurisée'
    },
    {
        icon: Wrench,
        title: 'Installation Gratuite',
        description: 'Mise en service par nos experts'
    },
    {
        icon: Headphones,
        title: 'Support 24/7 Gratuit',
        description: 'Assistance technique permanente'
    },
];

export const GoldOffer = () => {
    const navigate = useNavigate();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#11141E] to-[#0A1628]">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Dot Pattern Overlay */}
            <div className="absolute inset-0 bg-dots opacity-20" />

            <div className="container-custom relative z-10" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    {/* Crown Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 mb-6 backdrop-blur-sm"
                    >
                        <Crown className="w-5 h-5 text-yellow-400" />
                        <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                            Offre Exclusive
                        </span>
                        <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
                    >
                        Offre <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500">GOLD</span> pour les Professionnels
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-white/70 mb-4"
                    >
                        Tout Inclus – Solution Complète Clé en Main
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-lg text-white/60 max-w-2xl mx-auto"
                    >
                        Découvrez notre package premium avec nouvelles fonctionnalités avancées pour optimiser votre activité professionnelle.
                    </motion.p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative h-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-2">
                                {/* Gold Accent Line */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-7 h-7 text-yellow-400" />
                                </div>

                                {/* Content */}
                                <h3 className="text-white font-display font-bold text-lg mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="text-center"
                >
                    {/* Premium Card */}
                    <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-yellow-500/10 via-amber-500/10 to-yellow-500/10 border border-yellow-500/30 backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            {/* Left: Price/Value Prop */}
                            <div className="text-left">
                                <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-2">
                                    Package Tout Inclus
                                </p>
                                <p className="text-white text-2xl font-bold mb-1">
                                    Solution Professionnelle Complète
                                </p>
                                <p className="text-white/60 text-sm">
                                    Installation + Matériel + Services + Support
                                </p>
                            </div>

                            {/* Right: CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    onClick={() => navigate('/contact')}
                                    className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black font-bold px-8 py-6 rounded-xl shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300 group"
                                >
                                    Découvrir l'Offre
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button
                                    onClick={() => navigate('/contact')}
                                    variant="outline"
                                    className="border-2 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300"
                                >
                                    Contactez-nous
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badge */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 1.3 }}
                        className="text-white/50 text-sm mt-6"
                    >
                        ✓ Sans engagement • ✓ Devis gratuit • ✓ Installation sous 48h
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};
