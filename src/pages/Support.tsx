import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { HelpCircle, FileText, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Support = () => {
    const contactMethods = [
        {
            icon: Phone,
            title: "Support Téléphonique",
            info: "+33 1 23 45 67 89",
            desc: "Du lundi au vendredi, 9h-18h",
            bg: "bg-blue-500/10",
            color: "text-blue-500"
        },
        {
            icon: Mail,
            title: "Email",
            info: "support@viewtrack.com",
            desc: "Réponse sous 24h ouvrées",
            bg: "bg-purple-500/10",
            color: "text-purple-500"
        },
        {
            icon: MessageSquare,
            title: "Chat en direct",
            info: "Via votre espace client",
            desc: "Support prioritaire pour les abonnés",
            bg: "bg-green-500/10",
            color: "text-green-500"
        }
    ];

    const faqs = [
        {
            q: "Comment installer mon traceur GPS ?",
            a: "Tous nos traceurs sont livrés avec un guide de démarrage rapide. Vous pouvez également consulter nos tutoriels vidéo dans votre espace client."
        },
        {
            q: "Quelle est la durée de garantie ?",
            a: "Tous nos équipements sont garantis 2 ans pièces et main d'œuvre."
        },
        {
            q: "L'abonnement est-il obligatoire ?",
            a: "Oui, un abonnement est nécessaire pour couvrir les frais de communication carte SIM (incluse) et l'accès à la plateforme."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <div className="pt-32 pb-16 bg-[#0A1628] text-white">
                <div className="container-custom text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display font-bold mb-6"
                    >
                        Centre de <span className="text-gradient">Support</span>
                    </motion.h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Nous sommes là pour vous aider. Trouvez des réponses ou contactez-nous.
                    </p>
                </div>
            </div>

            <main className="flex-grow container-custom py-16">
                {/* Contact Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card p-8 rounded-2xl border border-border shadow-sm text-center hover:shadow-md transition-shadow"
                        >
                            <div className={`w-16 h-16 mx-auto rounded-full ${method.bg} flex items-center justify-center mb-6`}>
                                <method.icon className={`w-8 h-8 ${method.color}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                            <p className="text-lg font-medium text-foreground mb-1">{method.info}</p>
                            <p className="text-sm text-muted-foreground">{method.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <HelpCircle className="w-8 h-8 text-accent" />
                        <h2 className="text-3xl font-bold font-display">Questions Fréquentes</h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                                className="bg-muted/50 p-6 rounded-xl border border-border"
                            >
                                <h3 className="text-lg font-bold mb-2 flex items-start gap-2">
                                    <span className="text-accent">Q.</span> {faq.q}
                                </h3>
                                <p className="text-muted-foreground ml-6">
                                    {faq.a}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button variant="outline" className="gap-2">
                            <FileText className="w-4 h-4" />
                            Voir toute la documentation
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Support;
