import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Mohamed Ben Ali',
    role: 'Directeur Logistique',
    company: 'TransTunisie SARL',
    content: 'Depuis que nous utilisons VIEW TRACK SOLUTION, notre efficacité opérationnelle a augmenté de 35%. Le suivi en temps réel et les rapports détaillés nous permettent de prendre des décisions éclairées.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sonia Khemiri',
    role: 'Responsable de Flotte',
    company: 'Distribution Express',
    content: 'L\'interface est intuitive et le support client est exceptionnel. Nous avons réduit nos coûts de carburant de 20% grâce aux analyses de trajets et à l\'optimisation des itinéraires.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ahmed Mansour',
    role: 'Gérant',
    company: 'Taxi Sfax Plus',
    content: 'La fonctionnalité de géofencing est parfaite pour notre activité de taxi. Nous pouvons maintenant surveiller tous nos véhicules et assurer la sécurité de nos chauffeurs.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Fatma Bouzid',
    role: 'Directrice Générale',
    company: 'Livraison Rapide TN',
    content: 'VIEW TRACK SOLUTION a transformé notre façon de gérer les livraisons. Les alertes en temps réel et l\'historique des trajets nous ont permis d\'améliorer considérablement notre service client.',
    rating: 5,
  },
];

const clients = [
  'TransTunisie', 'Distribution Express', 'Taxi Sfax Plus', 'Livraison Rapide TN',
  'Tunisie Telecom', 'STEG', 'Délice Holding', 'Poulina Group',
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-background relative overflow-hidden">
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
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Ce que Nos <span className="text-gradient">Clients Disent</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez comment VIEW TRACK SOLUTION aide les entreprises à optimiser leur gestion de flotte.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="relative">
            {/* Main Card */}
            <div className="glass-card rounded-3xl p-8 lg:p-12">
              <Quote className="w-12 h-12 text-accent/30 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8"
              >
                "{testimonials[currentIndex].content}"
              </motion.p>

              {/* Author */}
              <motion.div
                key={`author-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-navy-light flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full w-12 h-12 border-border hover:bg-accent hover:text-white hover:border-accent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex
                        ? 'bg-accent w-8'
                        : 'bg-border hover:bg-muted-foreground'
                      }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full w-12 h-12 border-border hover:bg-accent hover:text-white hover:border-accent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-8">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border"
              >
                <Building2 className="w-5 h-5 text-muted-foreground" />
                <span className="text-foreground font-medium">{client}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
