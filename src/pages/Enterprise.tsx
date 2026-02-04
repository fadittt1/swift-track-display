import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Building2, Truck, Network, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Enterprise = () => {
    const navigate = useNavigate();

    const sections = [
        {
            id: 'fleet',
            title: 'Gestion de Flotte',
            icon: Truck,
            description: "Optimisez la logistique et réduisez les coûts opérationnels de votre flotte de véhicules.",
            features: [
                "Suivi en temps réel de tous les véhicules",
                "Rapports détaillés de consommation et trajets",
                "Optimisation des itinéraires",
                "Maintenance prédictive",
                "Identification des conducteurs"
            ],
            color: "text-blue-600",
            bg: "bg-blue-600/10"
        },
        {
            id: 'premises',
            title: 'Sécurité des Locaux',
            icon: Building2,
            description: "Sécurisez vos bureaux, entrepôts et sites industriels avec nos solutions intégrées.",
            features: [
                "Contrôle d'accès biométrique et badge",
                "Vidéosurveillance périmétrique",
                "Alarmes anti-intrusion connectées",
                "Détection incendie et inondation",
                "Centralisation de la sécurité"
            ],
            color: "text-indigo-600",
            bg: "bg-indigo-600/10"
        },
        {
            id: 'integration',
            title: 'Intégration & API',
            icon: Network,
            description: "Connectez nos données de tracking à vos systèmes d'information existants (ERP, CRM).",
            features: [
                "API RESTful complète",
                "Webhooks en temps réel",
                "Support technique dédié",
                "Documentation développeur",
                "Solutions sur mesure"
            ],
            color: "text-violet-600",
            bg: "bg-violet-600/10"
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
                        Solutions <span className="text-gradient">Entreprises</span>
                    </motion.h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Des outils puissants pour piloter votre activité et sécuriser vos actifs.
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
                            <div className="flex gap-4">
                                <Button
                                    onClick={() => navigate('/contact')}
                                    className="btn-accent"
                                >
                                    Demander une démo
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
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
                    <h2 className="text-3xl font-bold text-white mb-8">Optimisez votre gestion dès aujourd'hui</h2>
                    <Button
                        onClick={() => navigate('/contact')}
                        className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-lg px-8 py-6 rounded-xl hover:shadow-lg transition-all"
                    >
                        Parler à un expert B2B
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Enterprise;
