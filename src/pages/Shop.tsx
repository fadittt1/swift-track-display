import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center pt-24 pb-16 container-custom text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mb-8">
                    <ShoppingBag className="w-12 h-12 text-accent" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Boutique en ligne</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-12">
                    Notre boutique en ligne est en cours de construction. Vous pourrez bientôt commander nos produits directement ici.
                </p>
                <div className="flex gap-4">
                    <Button onClick={() => navigate('/contact')} className="btn-accent px-8 py-6 text-lg">
                        Nous contacter pour commander
                    </Button>
                    <Button onClick={() => navigate('/')} variant="outline" className="px-8 py-6 text-lg">
                        Retour à l'accueil
                    </Button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Shop;
