import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Car, User, Dog, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ProductsShowcase } from '@/components/sections/ProductsShowcase';
import { Product } from '@/components/ui/ProductCard';

const gpsProducts: Product[] = [
    {
        id: 'gps-pet-dog',
        name: 'GPS pour chien PET PRO',
        image: '/gps-pet-dog.png',
        category: 'GPS Animaux',
        tags: ['GPS', 'PERSO']
    },
    {
        id: 'gps-pet-cat',
        name: 'GPS pour chat PET MINI',
        image: '/gps-pet-cat.png',
        category: 'GPS Animaux',
        tags: ['GPS', 'PERSO']
    },
    {
        id: 'gps-elder',
        name: 'GPS pour enfants | GPS KIDS TRACK',
        image: '/gps-elder.png',
        category: 'GPS Personnes',
        tags: ['GPS', 'PERSO']
    },
    {
        id: 'gps-marine',
        name: 'GPS pour les bateaux | GPS MARINE PRO',
        image: '/gps-marine.png',
        category: 'GPS Marine',
        tags: ['BATEAU', 'GPS']
    },
    {
        id: 'gps-transport',
        name: 'GPS Véhicule | TRANSPORT PRO',
        image: '/gps-transport-pro.png',
        category: 'GPS Véhicules',
        tags: ['VÉHICULE', 'GPS']
    },
];

const SolutionsGps = () => {
    const navigate = useNavigate();

    const sections = [
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
            bg: "bg-blue-500/10"
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
            bg: "bg-emerald-500/10"
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
            bg: "bg-orange-500/10"
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
                        Solutions <span className="text-gradient">GPS</span>
                    </motion.h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Une gamme complète de traceurs pour garder un œil sur ce qui compte vraiment pour vous.
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

            {/* Products Showcase */}
            <ProductsShowcase
                title="Nos Produits GPS"
                subtitle="Découvrez notre gamme"
                products={gpsProducts}
                accentColor="text-blue-500"
            />

            {/* CTA Section */}
            <div className="bg-[#0A1628] py-20 text-center">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-white mb-8">Besoin d'une solution sur mesure ?</h2>
                    <Button
                        onClick={() => navigate('/contact')}
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-lg px-8 py-6 rounded-xl hover:shadow-lg transition-all"
                    >
                        Contactez notre équipe commerciale
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SolutionsGps;
