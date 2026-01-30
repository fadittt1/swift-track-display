import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import {
  MapPin,
  Truck,
  Shield,
  BarChart3,
  Smartphone,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: MapPin,
    key: 'realtime',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Truck,
    key: 'fleet',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Shield,
    key: 'security',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: BarChart3,
    key: 'reports',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Smartphone,
    key: 'mobile',
    color: 'from-rose-500 to-red-500',
  },
  {
    icon: Clock,
    key: 'history',
    color: 'from-indigo-500 to-blue-500',
  },
];

export const Services = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            {t('services.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 text-center">
            {t('services.title')} <span className="text-gradient">{t('services.titleAccent')}</span>
          </h2>
          <p className="text-muted-foreground text-lg text-center">
            {t('services.description')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card group cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {t(`services.items.${service.key}.title`)}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t(`services.items.${service.key}.description`)}
              </p>

              {/* Link */}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToContact(); }}
                className="inline-flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all"
              >
                {t('services.learnMore')}
                <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
              </a>
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
            onClick={scrollToContact}
            className="btn-accent text-lg px-8 py-6"
          >
            {t('services.ctaDevis')}
            <ArrowRight className="ml-2 w-5 h-5 font-bold" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
