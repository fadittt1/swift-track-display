import { motion } from 'framer-motion';
import { ProductCard, Product } from '@/components/ui/ProductCard';

interface ProductsShowcaseProps {
  title: string;
  subtitle: string;
  products: Product[];
  accentColor?: string;
}

export const ProductsShowcase = ({ 
  title, 
  subtitle, 
  products,
  accentColor = 'text-accent'
}: ProductsShowcaseProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className={`${accentColor} font-semibold text-sm uppercase tracking-wider mb-4 block`}>
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {title}
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
