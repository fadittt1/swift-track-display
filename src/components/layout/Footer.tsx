import { Navigation, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/ui/Logo';

const footerLinks = {
  services: [
    { key: 'realtime', href: '#services' },
    { key: 'geofencing', href: '#features' },
    { key: 'reports', href: '#features' },
    { key: 'fleet', href: '#services' },
  ],
  company: [
    { key: 'about', href: '#stats' },
    { key: 'clients', href: '#testimonials' },
    { key: 'careers', href: '#' },
    { key: 'blog', href: '#' },
  ],
  support: [
    { key: 'help', href: '#' },
    { key: 'docs', href: '#' },
    { key: 'privacy', href: '#' },
    { key: 'terms', href: '#' },
  ],
};

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container-custom py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-bold mb-2">
                {t('footer.newsletter.title')}
              </h3>
              <p className="text-white/70 italic">
                {t('footer.newsletter.subtitle')}
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <Input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent w-full lg:w-80"
              />
              <Button className="btn-accent shrink-0">
                <Send className="w-4 h-4 mr-2" />
                {t('footer.newsletter.submit')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <Logo size="md" />
              <span className="font-display font-bold text-xl text-white tracking-wide">
                VIEW TRACK SOLUTION
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-sm">
              {t('footer.brand.description')}
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-all duration-300 hover:scale-110 hover:shadow-glow-cyan"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">{t('footer.sections.services')}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {t(`footer.links.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">{t('footer.sections.company')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {t(`footer.links.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">{t('footer.sections.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Navigation className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/70">
                  {t('contact.info.addressContent')}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:28899594" className="text-white/70 hover:text-accent transition-colors">
                  {t('contact.info.phonePlaceholder')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:contact@viewtrack.tn" className="text-white/70 hover:text-accent transition-colors">
                  contact@viewtrack.tn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              {t('footer.bottom')}
            </p>
            <div className="flex gap-6">
              {footerLinks.support.slice(2).map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-white/50 text-sm hover:text-accent transition-colors"
                >
                  {t(`footer.links.${link.key}`)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
