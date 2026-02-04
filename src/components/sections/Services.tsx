import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  MapPin,
  Shield,
  Building2,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: MapPin,
    title: 'Solutions GPS',
    description: 'Géolocalisation précise pour véhicules, personnes et animaux. Suivi en temps réel et historiques détaillés.',
    color: 'from-blue-500 to-cyan-500',
    link: '/solutions-gps'
  },
  {
    icon: Shield,
    title: 'Sécurité & Domotique',
    description: 'Protection de votre domicile avec caméras, alarmes et systèmes domotiques intelligents.',
    color: 'from-orange-500 to-amber-500',
    link: '/security-domotics'
  },
  {
    icon: Building2,
    title: 'Solutions Entreprises',
    description: 'Gestion de flotte, sécurisation de locaux et solutions sur mesure pour les professionnels.',
    color: 'from-purple-500 to-indigo-500',
    link: '/enterprise'
  },
];

export const Services = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-50" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nos Domaines d'Activité
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 text-center">
            Des Solutions <span className="text-gradient">Complètes</span>
          </h2>
          <p className="text-muted-foreground text-lg text-center">
            Nous offrons une gamme complète de technologies pour sécuriser et optimiser ce qui compte le plus pour vous.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card group cursor-pointer h-full flex flex-col"
              onClick={() => navigate(service.link)}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Link */}
              <div className="flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all mt-auto">
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            onClick={() => navigate('/contact')}
            className="btn-accent text-lg px-8 py-6"
          >
            Demander un devis gratuit
            <ArrowRight className="ml-2 w-5 h-5 font-bold" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
