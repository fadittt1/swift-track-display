import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  services: [
    { name: 'Suivi en Temps Réel', href: '#services' },
    { name: 'Géofencing', href: '#features' },
    { name: 'Rapports & Analyses', href: '#features' },
    { name: 'Gestion de Flotte', href: '#services' },
  ],
  company: [
    { name: 'À Propos', href: '#stats' },
    { name: 'Nos Clients', href: '#testimonials' },
    { name: 'Carrières', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  support: [
    { name: 'Centre d\'Aide', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Politique de Confidentialité', href: '#' },
    { name: 'Conditions d\'Utilisation', href: '#' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container-custom py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-bold mb-2">
                Restez Informé
              </h3>
              <p className="text-white/70">
                Abonnez-vous pour recevoir nos actualités et offres spéciales.
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent w-full lg:w-80"
              />
              <Button className="btn-accent shrink-0">
                <Send className="w-4 h-4 mr-2" />
                S'abonner
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
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-emerald-light flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                GPS<span className="text-accent">Track</span>
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-sm">
              Solutions de suivi GPS professionnelles pour la gestion de flotte et la sécurité des véhicules. Plus de 10 ans d'expertise au service de nos clients.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/70">
                  123 Avenue de la Technologie<br />
                  Tunis, Tunisie
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+21612345678" className="text-white/70 hover:text-accent transition-colors">
                  +216 12 345 678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:contact@gpstrack.tn" className="text-white/70 hover:text-accent transition-colors">
                  contact@gpstrack.tn
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
              © 2024 GPSTrack. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              {footerLinks.support.slice(2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/50 text-sm hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
