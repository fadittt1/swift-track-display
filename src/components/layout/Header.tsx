import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/Logo';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

const navItems = [
    { name: 'nav.home', href: '#hero' },
    { name: 'nav.services', href: '#services' },
    { name: 'nav.products', href: '#products' },
    { name: 'nav.stats', href: '#stats' },
    { name: 'nav.contact', href: '#contact' },
];

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t } = useTranslation();
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
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
                            href="#hero"
                            onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
                            className="flex items-center gap-4 group"
                        >
                            <div className="flex items-center justify-center">
                                <Logo size="md" />
                            </div>
                            <span className={`font-display font-bold text-xl tracking-wide transition-colors ${isScrolled ? 'text-foreground' : 'text-white'
                                }`}>
                                VIEW <span className="text-accent underline decoration-orange-400 decoration-2 underline-offset-4">TRACK</span> SOLUTION
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                                    className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? 'text-foreground/80' : 'text-white/90'
                                        }`}
                                >
                                    {t(item.name)}
                                </a>
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
                                        className={isScrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'}
                                    >
                                        <LogIn className="w-4 h-4 mr-2" />
                                        {t('nav.login')}
                                    </Button>
                                    <Button
                                        onClick={() => scrollToSection('#contact')}
                                        className="btn-accent"
                                    >
                                        {t('hero.ctaDemo')}
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
                                        <motion.a
                                            key={item.name}
                                            href={item.href}
                                            onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="px-4 py-3 rounded-xl text-foreground font-medium hover:bg-muted transition-colors text-right"
                                        >
                                            {t(item.name)}
                                        </motion.a>
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
                                                onClick={() => scrollToSection('#contact')}
                                                className="btn-accent w-full"
                                            >
                                                {t('hero.ctaDemo')}
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
