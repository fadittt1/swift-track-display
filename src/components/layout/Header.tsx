import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogIn } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/Logo';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

const navItems = [
    { name: 'Accueil', href: '/', type: 'route' },
    { name: 'GPS', href: '/solutions-gps', type: 'route' },
    { name: 'Domicile', href: '/security-domotics', type: 'route' },
    { name: 'Entreprises', href: '/enterprise', type: 'route' },
    { name: 'Contact', href: '/#contact', type: 'scroll' },
];

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t } = useTranslation();
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation(); // Need to import useLocation

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (href: string, type: string) => {
        setIsMobileMenuOpen(false);

        if (type === 'scroll') {
            // Extract the ID from the href (e.g., "/#services" -> "#services")
            const targetId = href.replace('/', '');

            // If we are already on the homepage, scroll
            if (location.pathname === '/' || location.pathname === '') {
                const element = document.querySelector(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Should navigate to Home then scroll (simplification: just navigate to anchor)
                // React Router doesn't handle hash scrolling automatically on navigation well without extra setup
                // But this is a decent fallback
                navigate('/');
                setTimeout(() => {
                    const element = document.querySelector(targetId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        } else {
            navigate(href);
        }
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'nav-blur shadow-md' : 'bg-transparent'
                    }`}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <a
                            href="/"
                            onClick={(e) => { e.preventDefault(); handleNavigation('/', 'scroll'); }}
                            className="flex items-center gap-4 group"
                        >
                            <div className="flex items-center justify-center">
                                <Logo size="md" />
                            </div>
                            <span className={`font-display font-bold text-lg tracking-wide transition-colors whitespace-nowrap ${isScrolled ? 'text-foreground' : 'text-white'
                                }`}>
                                VIEW <span className="text-accent underline decoration-orange-400 decoration-2 underline-offset-4">TRACK</span> SOLUTION
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={(e) => { e.preventDefault(); handleNavigation(item.href, item.type); }}
                                    className={`text-sm font-semibold transition-all duration-300 hover:text-accent relative group ${isScrolled ? 'text-foreground/80' : 'text-white/90'
                                        }`}
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                                </button>
                            ))}
                        </nav>

                        {/* Language Switcher & CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            <LanguageSwitcher isScrolled={isScrolled} />
                            <div className="w-[1px] h-6 bg-white/10 mx-2" />
                            {user ? (
                                <Button
                                    onClick={() => navigate('/dashboard')}
                                    className="btn-accent"
                                >
                                    <User className="w-4 h-4 mr-2" />
                                    {t('nav.mySpace')}
                                </Button>
                            ) : (
                                <>
                                    <Button
                                        onClick={() => window.open('https://www.Protrack365.com', '_blank')}
                                        variant="ghost"
                                        className={`transition-all duration-300 ${isScrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10 border border-white/20'}`}
                                    >
                                        <LogIn className="w-4 h-4 mr-2" />
                                        {t('nav.login')}
                                    </Button>
                                    <Button
                                        onClick={() => handleNavigation('/#contact', 'scroll')}
                                        className="btn-accent hover-glow shadow-lg"
                                    >
                                        Demander un devis
                                    </Button>
                                </>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'
                                }`}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        <div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.nav
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="absolute right-0 top-0 bottom-0 w-80 bg-card shadow-xl"
                        >
                            <div className="p-6 pt-24">
                                <div className="flex flex-col gap-2">
                                    {navItems.map((item, index) => (
                                        <motion.button
                                            key={item.name}
                                            onClick={(e) => { e.preventDefault(); handleNavigation(item.href, item.type); }}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="px-4 py-3 rounded-xl text-foreground font-medium hover:bg-muted transition-colors text-right w-full"
                                        >
                                            {item.name}
                                        </motion.button>
                                    ))}
                                </div>
                                <div className="mt-6 pt-6 border-t border-border space-y-4">
                                    <div className="flex justify-start px-4">
                                        <LanguageSwitcher isScrolled={true} />
                                    </div>
                                    {user ? (
                                        <Button
                                            onClick={() => { setIsMobileMenuOpen(false); navigate('/dashboard'); }}
                                            className="btn-accent w-full"
                                        >
                                            <User className="w-4 h-4 mr-2" />
                                            {t('nav.mySpace')}
                                        </Button>
                                    ) : (
                                        <>
                                            <Button
                                                onClick={() => { setIsMobileMenuOpen(false); window.open('https://www.Protrack365.com', '_blank'); }}
                                                variant="outline"
                                                className="w-full"
                                            >
                                                <LogIn className="w-4 h-4 mr-2" />
                                                {t('nav.login')}
                                            </Button>
                                            <Button
                                                onClick={() => handleNavigation('/#contact', 'scroll')}
                                                className="btn-accent w-full"
                                            >
                                                Demander un devis
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
