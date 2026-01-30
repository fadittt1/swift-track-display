import { motion, useSpring, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Car, Users, Calendar, Award } from 'lucide-react';

const stats = [
  {
    icon: Car,
    value: 7100,
    suffix: '+',
    key: 'vehicles',
  },
  {
    icon: Users,
    value: 2400,
    suffix: '+',
    key: 'clients',
  },
  {
    icon: Calendar,
    value: 10,
    suffix: '+',
    key: 'experience',
  },
  {
    icon: Award,
    value: 99,
    suffix: '%',
    key: 'satisfaction',
  },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="stat-number">
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
};

export const Stats = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stats" className="section-padding bg-muted relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            {t('stats.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            {t('stats.title')} <span className="text-gradient-accent">{t('stats.titleAccent')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('stats.description')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-6 lg:p-8 text-center group hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              {/* Counter */}
              <div className="mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <h3 className="text-foreground font-display font-bold text-lg mb-1">
                {t(`stats.items.${stat.key}.label`)}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t(`stats.items.${stat.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
