import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Video, ShieldCheck, Home, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const SecurityDomotics = () => {
    const navigate = useNavigate();

    const sections = [
        {
            id: 'cameras',
            title: 'Caméras de Surveillance',
            icon: Video,
            description: "Surveillez votre propriété 24/7 avec nos caméras haute définition connectées.",
            features: [
                "Qualité d'image HD / 4K",
                "Vision nocturne infrarouge",
                "Détection de mouvement intelligente",
                "Stockage cloud ou local sécurisé",
                "Accès à distance via smartphone"
            ],
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            id: 'security',
            title: 'Sécurité Résidentielle',
            icon: ShieldCheck,
            description: "Protégez votre domicile contre les intrusions avec nos systèmes d'alarme complets.",
            features: [
                "Détecteurs d'ouverture et de mouvement",
                "Sirènes extérieures dissuasives",
                "Télésurveillance 24/7",
                "Bouton panique et anti-agression",
                "Notifications instantanées"
            ],
            color: "text-red-500",
            bg: "bg-red-500/10"
        },
        {
            id: 'domotics',
            title: 'Domotique & Smart Home',
            icon: Home,
            description: "Transformez votre maison en un espace intelligent, confortable et économe en énergie.",
            features: [
                "Contrôle de l'éclairage et du chauffage",
                "Gestion des volets roulants",
                "Scénarios personnalisés",
                "Contrôle vocal compatible (Alexa, Google)",
                "Installation et câblage professionnel"
            ],
            color: "text-purple-500",
            bg: "bg-purple-500/10"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            {/* Page Header */}
            <div className="pt-32 pb-16 bg-[#0A1628] text-white">
                <div className="container-custom text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display font-bold mb-6"
                    >
                        Sécurité & <span className="text-gradient">Domotique</span>
                    </motion.h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Protégez votre foyer et simplifiez votre quotidien avec nos solutions connectées.
                    </p>
                </div>
            </div>

            <main className="flex-grow container-custom py-16 space-y-24">
                {sections.map((section, index) => (
                    <motion.div
                        key={section.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col md:flex-row gap-12 items-center"
                    >
                        <div className={`flex-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                            <div className={`w-20 h-20 rounded-2xl ${section.bg} flex items-center justify-center mb-6`}>
                                <section.icon className={`w-10 h-10 ${section.color}`} />
                            </div>
                            <h2 className="text-3xl font-bold font-display mb-4">{section.title}</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                {section.description}
                            </p>
                            <ul className="space-y-4 mb-8">
                                {section.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <CheckCircle className={`w-5 h-5 ${section.color}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                onClick={() => navigate('/contact')}
                                className="btn-accent"
                            >
                                Demander un devis
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                        <div className={`flex-1 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                            <div className="aspect-video bg-muted rounded-3xl border border-border flex items-center justify-center text-muted-foreground">
                                {/* Placeholders for images */}
                                <div className="text-center p-8">
                                    <section.icon className="w-20 h-20 mx-auto mb-4 opacity-20" />
                                    <p>Image illustrative {section.title}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </main>

            {/* CTA Section */}
            <div className="bg-[#0A1628] py-20 text-center">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-white mb-8">Intéressé par une maison intelligente ?</h2>
                    <Button
                        onClick={() => navigate('/contact')}
                        className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-lg px-8 py-6 rounded-xl hover:shadow-lg transition-all"
                    >
                        Contactez nos experts
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SecurityDomotics;
