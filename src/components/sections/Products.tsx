import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Truck,
  Heart,
  PawPrint,
  Baby,
  Anchor,
  Eye,
  LogIn
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    name: 'GPS Transport Pro',
    description: 'Complete fleet management and truck tracking solution',
    category: 'Vehicle',
    icon: Truck,
    categoryColor: 'bg-blue-100 text-blue-700',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'GPS Elder',
    description: 'Real-time location tracking for seniors safety',
    category: 'Person',
    icon: Heart,
    categoryColor: 'bg-rose-100 text-rose-700',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'GPS Pet Pro',
    description: 'Never lose track of your furry friends',
    category: 'Pet',
    icon: PawPrint,
    categoryColor: 'bg-orange-100 text-orange-700',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'GPS Kids Track',
    description: 'Peace of mind for your children\'s safety',
    category: 'Person',
    icon: Baby,
    categoryColor: 'bg-purple-100 text-purple-700',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'GPS Marine Pro',
    description: 'Advanced tracking for boats and marine vessels',
    category: 'Marine',
    icon: Anchor,
    categoryColor: 'bg-cyan-100 text-cyan-700',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80',
  },
];

export const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleLoginClick = (productName: string) => {
    console.log(`Login to ${productName} dashboard`);
  };

  const handleViewDetails = (productName: string) => {
    console.log(`View details for ${productName}`);
  };

  return (
    <section id="products" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Recommended GPS Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Recommended <span className="text-gradient">GPS Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the tracking solution that fits your needs — all managed from one dashboard.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden border border-border/50 transition-all duration-300 hover:shadow-xl hover:border-accent/30 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute top-4 right-4">
                    <Badge className={`${product.categoryColor} border-0 shadow-md`}>
                      {product.category}
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <product.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    {product.description}
                  </p>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="flex-1 border-border hover:bg-muted hover:text-foreground"
                      onClick={() => handleViewDetails(product.name)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View details
                    </Button>
                    <Button
                      className="flex-1 btn-accent"
                      onClick={() => handleLoginClick(product.name)}
                    >
                      <LogIn className="w-4 h-4 mr-2" />
                      Login
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            All products are managed through a single, unified dashboard for seamless tracking across all devices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
