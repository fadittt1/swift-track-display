import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  tags: string[];
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  const navigate = useNavigate();
  const { session } = useAuth();
  const { toast } = useToast();

  const handleLoginToOrder = () => {
    if (session) {
      window.open('https://www.Protrack365.com', '_blank');
    } else {
      toast({
        title: "Connexion requise",
        description: "Veuillez vous connecter pour commander.",
        variant: "destructive",
      });
      navigate('/login');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300"
    >
      {/* Product Image */}
      <div className="relative bg-gradient-to-br from-muted/50 to-muted p-6 overflow-hidden">
        <div className="aspect-square flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-accent/10 rounded-full blur-xl" />
        <div className="absolute bottom-4 left-4 w-8 h-8 bg-primary/10 rounded-full blur-lg" />
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-accent transition-colors">
          {product.name}
        </h3>

        <button
          onClick={handleLoginToOrder}
          className="text-cyan-500 hover:text-cyan-600 text-sm font-semibold inline-block transition-colors"
        >
          Login to order
        </button>

        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={() => navigate('/contact')}
          className="w-full py-2.5 px-4 text-sm font-medium text-foreground border border-border rounded-lg hover:bg-muted hover:border-accent/50 transition-all duration-200"
        >
          Lire la suite
        </button>
      </div>
    </motion.div>
  );
};
