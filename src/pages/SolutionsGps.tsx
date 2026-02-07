import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, User, Dog, CheckCircle, ArrowRight, ShieldCheck, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

import gpsVehicleBox from '@/assets/gps-vehicle-box.png';
import gpsVehicleHero from '@/assets/gps-vehicle-hero.png';
import gpsAnimalBox from '@/assets/gps-animal-box.png';
import gpsPersonBox from '@/assets/gps-person-box.png';
import gpsAnimalBoxCat from '@/assets/gps-animal-box-cat.png';
import gpsAnimalHero from '@/assets/gps-animal-hero.png';
import gpsPersonHero from '@/assets/gps-person-hero.png';

const SolutionsGps = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('vehicles');

    type Section = {
        id: string;
        title: string;
        icon: any;
        description: string;
        features: string[];
        color: string;
        bg: string;
        borderColor?: string;
        heroImage?: string;
        benefits?: { icon: any; text: string }[];
        products: { name: string; price: string; image: any }[];
    };

    const sections: Section[] = [
        {
            id: 'vehicles',
            title: 'GPS Véhicules',
            icon: Car,
            description: "Surveillez et optimisez l'utilisation de vos véhicules personnels ou professionnels.",
            features: [
                "Localisation en temps réel",
                "Historique des trajets",
                "Alertes de vitesse et de mouvement",
                "Arrêt moteur à distance",
                "Gestion de flotte simplifiée"
            ],
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            heroImage: gpsVehicleHero,
            borderColor: "border-blue-500/20",
            benefits: [
                { icon: ShieldCheck, text: "Sécurité Antivol" },
                { icon: CreditCard, text: "Économies Carburant" },
                { icon: CheckCircle, text: "Maintenance Prédictive" }
            ],
            products: [
                { name: "Traceur OBD-II", price: "À partir de 49€", image: gpsVehicleBox },
                { name: "Boîtier Magnétique", price: "À partir de 89€", image: gpsVehicleBox },
                { name: "Traceur Pro Filaire", price: "Sur devis", image: gpsVehicleBox }
            ]
        },
        {
            id: 'people',
            title: 'GPS Personnes',
            icon: User,
            description: "Assurez la sécurité de vos proches (enfants, seniors) avec nos traceurs discrets et fiables.",
            features: [
                "Bouton SOS d'urgence",
                "Zones de sécurité (Geofencing)",
                "Communication bidirectionnelle",
                "Autonomie longue durée",
                "Design discret et léger"
            ],
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
            heroImage: gpsPersonHero,
            borderColor: "border-emerald-500/20",
            benefits: [
                { icon: ShieldCheck, text: "Tranquillité d'esprit" },
                { icon: CreditCard, text: "Sans engagement" },
                { icon: CheckCircle, text: "Facile à utiliser" }
            ],
            products: [
                { name: "Montre Connectée SOS", price: "À partir de 69€", image: gpsPersonBox },
                { name: "Pendentif Senior", price: "À partir de 59€", image: gpsPersonBox },
                { name: "Mini Traceur Sac", price: "À partir de 49€", image: gpsPersonBox }
            ]
        },
        {
            id: 'animals',
            title: 'GPS Animaux',
            icon: Dog,
            description: "Ne perdez plus jamais votre compagnon à quatre pattes grâce à nos colliers connectés.",
            features: [
                "Suivi sans limite de distance",
                "Étanche et robuste",
                "Moniteur d'activité et de sommeil",
                "Alerte de fugue",
                "Léger pour chats et chiens"
            ],
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            heroImage: gpsAnimalHero,
            borderColor: "border-orange-500/20",
            benefits: [
                { icon: ShieldCheck, text: "Retrouvailles Rapides" },
                { icon: CreditCard, text: "Abonnement Flexible" },
                { icon: CheckCircle, text: "Résistant à l'eau" }
            ],
            products: [
                { name: "Collier Chien Robuste", price: "À partir de 79€", image: gpsAnimalBoxCat },
                { name: "Collier Chat Léger", price: "À partir de 69€", image: gpsAnimalBoxCat },
                { name: "Module Universel", price: "À partir de 59€", image: gpsAnimalBoxCat }
            ]
        }
    ];


    const activeSection = sections.find(s => s.id === activeTab) || sections[0];

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
                        Solutions <span className="text-gradient">GPS</span>
                    </motion.h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Choisissez la solution de tracking adaptée à vos besoins.
                    </p>
                </div>
            </div>

            <main className="flex-grow container-custom py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Navigation */}
                    <div className="w-full lg:w-1/4">
                        <div className="sticky top-24 bg-card border border-border rounded-2xl p-4 space-y-2 shadow-sm">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveTab(section.id)}
                                    className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-200 text-left ${activeTab === section.id
                                        ? `${section.bg} ${section.color} font-medium ring-1 ring-inset ${section.borderColor}`
                                        : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                                        }`}
                                >
                                    <section.icon className="w-6 h-6" />
                                    <span className="text-lg">{section.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="w-full lg:w-3/4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-card rounded-3xl border border-border overflow-hidden shadow-sm"
                            >
                                {/* Hero Image for Section */}
                                <div className={`aspect-video md:aspect-[21/9] ${activeSection.bg} relative flex items-center justify-center border-b border-border/50 overflow-hidden`}>
                                    {activeSection.heroImage ? (
                                        <img
                                            src={activeSection.heroImage}
                                            alt={activeSection.title}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    ) : (
                                        <activeSection.icon className={`w-32 h-32 ${activeSection.color} opacity-20`} />
                                    )}

                                    <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-black/40 backdrop-blur-xl px-8 py-4 rounded-full border border-white/10 shadow-2xl transition-transform hover:scale-105">
                                        <h2 className="text-xl md:text-2xl font-display font-medium text-white tracking-wide">
                                            {activeSection.title}
                                        </h2>
                                    </div>
                                </div>

                                <div className="p-8 md:p-12">
                                    {/* Description & Benefits */}
                                    <div className="mb-12">
                                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                            {activeSection.description}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {activeSection.benefits && activeSection.benefits.map((benefit, idx) => (
                                                <div key={idx} className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-xl border border-border/50">
                                                    <div className={`w-12 h-12 rounded-full ${activeSection.bg} flex items-center justify-center mb-3`}>
                                                        <benefit.icon className={`w-6 h-6 ${activeSection.color}`} />
                                                    </div>
                                                    <span className="font-semibold text-foreground">{benefit.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>


                                    {/* Products Grid (Reusing new card design from previous step) */}
                                    <div className="mb-20">
                                        <h3 className="text-2xl font-bold mb-10 text-center md:text-left">Produits Recommandés</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                                            {activeSection.products.map((product, idx) => (
                                                <div key={idx} className="flex flex-col group cursor-pointer">
                                                    {/* Floating Image - No container, no border, no background */}
                                                    <div className="mb-6 relative flex items-center justify-center h-64 md:h-72 overflow-hidden rounded-2xl">
                                                        {typeof product.image === 'string' ? (
                                                            <img
                                                                src={product.image}
                                                                alt={product.name}
                                                                className="w-full h-full object-contain drop-shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                                                            />
                                                        ) : (
                                                            <product.image className={`w-32 h-32 ${activeSection.color} drop-shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2`} />
                                                        )}
                                                    </div>

                                                    {/* Content */}
                                                    <div className="flex flex-col items-center md:items-start space-y-3 text-center md:text-left">

                                                        <h4 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                                                            {product.name}
                                                        </h4>

                                                        <button
                                                            onClick={() => navigate('/login')}
                                                            className="text-sm text-muted-foreground hover:text-accent transition-all duration-300 flex items-center gap-1 group/btn"
                                                        >
                                                            Login to dashboard <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                                                        </button>

                                                        <span className={`text-xs font-semibold ${activeSection.color} opacity-80 uppercase tracking-widest px-3 py-1 rounded-full bg-current/10`}>
                                                            {activeSection.title}
                                                        </span>

                                                        <div className="pt-4 w-full">
                                                            <Button
                                                                variant="ghost"
                                                                className="w-full md:w-auto px-6 border border-border hover:bg-accent hover:text-accent-foreground rounded-full"
                                                                onClick={() => navigate('/contact')}
                                                            >
                                                                Lire la suite
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Features List */}
                                    <div className="mb-12">
                                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                            Fonctionnalités Clés
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {activeSection.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                                    <CheckCircle className={`w-5 h-5 ${activeSection.color} flex-shrink-0`} />
                                                    <span className="text-foreground/80">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>


                                    {/* Actions */}
                                    <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
                                        <Button
                                            onClick={() => navigate('/contact')}
                                            className={`flex-1 text-lg py-6 ${activeSection.bg.replace('/10', '')} hover:opacity-90 text-white`}
                                        >
                                            Demander un devis
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </main>

            {/* CTA Section */}
            <div className="bg-[#0A1628] py-20 text-center">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-white mb-8">Besoin d'aide pour choisir ?</h2>
                    <Button
                        onClick={() => navigate('/contact')}
                        className="bg-transparent border-2 border-white/20 text-white text-lg px-8 py-6 rounded-xl hover:bg-white/10 transition-all"
                    >
                        Parler à un conseiller
                    </Button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SolutionsGps;
