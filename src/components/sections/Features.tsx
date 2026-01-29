import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Locate, 
  MapPinned, 
  AlertTriangle, 
  ShieldAlert, 
  Power, 
  Bell,
  Route,
  Gauge,
  Fuel,
  FileText,
  Users,
  Headphones
} from 'lucide-react';

const features = [
  {
    icon: Locate,
    title: 'Localisation Précise',
    description: 'GPS haute précision avec marge d\'erreur < 5 mètres',
  },
  {
    icon: MapPinned,
    title: 'Géofencing',
    description: 'Créez des zones virtuelles avec alertes automatiques',
  },
  {
    icon: AlertTriangle,
    title: 'Alerte Excès de Vitesse',
    description: 'Notifications instantanées en cas de survitesse',
  },
  {
    icon: ShieldAlert,
    title: 'Détection d\'Accident',
    description: 'Capteurs de choc avec alertes automatiques',
  },
  {
    icon: Power,
    title: 'Immobilisation Moteur',
    description: 'Coupez le moteur à distance en cas de vol',
  },
  {
    icon: Bell,
    title: 'Notifications Push',
    description: 'Alertes en temps réel sur mobile et email',
  },
  {
    icon: Route,
    title: 'Optimisation Trajets',
    description: 'Calculez les itinéraires les plus économiques',
  },
  {
    icon: Gauge,
    title: 'Analyse de Conduite',
    description: 'Score de conduite et recommandations',
  },
  {
    icon: Fuel,
    title: 'Suivi Carburant',
    description: 'Contrôlez la consommation en temps réel',
  },
  {
    icon: FileText,
    title: 'Rapports Automatiques',
    description: 'Rapports personnalisés par email',
  },
  {
    icon: Users,
    title: 'Multi-Utilisateurs',
    description: 'Accès hiérarchisé pour votre équipe',
  },
  {
    icon: Headphones,
    title: 'Support 24/7',
    description: 'Assistance technique disponible en continu',
  },
];

export const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-30" />
      
      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Fonctionnalités
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Tout ce Dont Vous Avez <span className="text-gradient-accent">Besoin</span>
          </h2>
          <p className="text-white/70 text-lg">
            Une suite complète d'outils puissants pour une gestion optimale de vos véhicules.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass rounded-2xl p-5 text-center group hover:bg-white/15 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold mb-2 text-sm lg:text-base">
                {feature.title}
              </h3>
              <p className="text-white/60 text-xs lg:text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
