import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  User, Car, MapPin, Bell, Settings, LogOut,
  Menu, X, Home, Building2, Phone, MapPinned,
  Save, Loader2, CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useProfile } from '@/hooks/useProfile';
import { useToast } from '@/hooks/use-toast';
import { Logo } from '@/components/ui/Logo';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const { profile, loading: profileLoading, updateProfile } = useProfile();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    company_name: '',
    contact_name: '',
    phone: '',
    address: '',
    vehicle_count: 0
  });

  useEffect(() => {
    if (profile && !isEditing) {
      setFormData({
        company_name: profile.company_name || '',
        contact_name: profile.contact_name || '',
        phone: profile.phone || '',
        address: profile.address || '',
        vehicle_count: profile.vehicle_count ?? 0
      });
    }
  }, [profile, isEditing]);

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  const handleSave = async () => {
    setSaving(true);
    const { error } = await updateProfile(formData);
    setSaving(false);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder les modifications",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Modifications enregistrées",
        description: "Vos informations ont été mises à jour avec succès"
      });
      setIsEditing(false);
    }
  };

  const startEditing = () => {
    setFormData({
      company_name: profile?.company_name || '',
      contact_name: profile?.contact_name || '',
      phone: profile?.phone || '',
      address: profile?.address || '',
      vehicle_count: profile?.vehicle_count || 0
    });
    setIsEditing(true);
  };

  const navItems = [
    { icon: Home, label: 'Tableau de bord', active: true },
    { icon: Car, label: 'Mes véhicules', active: false },
    { icon: MapPin, label: 'Suivi en direct', active: false },
    { icon: Bell, label: 'Alertes', active: false },
    { icon: Settings, label: 'Paramètres', active: false },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="flex items-center justify-between px-4 h-16">
          <Link to="/" className="flex items-center gap-2">
            <Logo size="sm" />
            <span className="font-display font-bold text-lg">VIEW TRACK</span>
          </Link>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 text-foreground"
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-40 h-full w-64 bg-card border-r border-border transform transition-transform duration-300 lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <Logo size="md" />
            <span className="font-display font-bold text-lg text-foreground">
              VIEW <span className="text-accent">TRACK</span>
            </span>
          </Link>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${item.active
                  ? 'bg-accent text-white'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        <div className="p-6 lg:p-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-display font-bold text-foreground mb-2">
              Bienvenue 👋
            </h1>
            <p className="text-muted-foreground">
              {user?.email}
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-card border-border">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <User className="w-5 h-5 text-accent" />
                    Mon profil
                  </CardTitle>
                  <CardDescription>
                    Gérez vos informations personnelles et d'entreprise
                  </CardDescription>
                </div>
                {!isEditing ? (
                  <Button onClick={startEditing} variant="outline">
                    Modifier
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button onClick={() => setIsEditing(false)} variant="ghost">
                      Annuler
                    </Button>
                    <Button onClick={handleSave} disabled={saving} className="btn-accent">
                      {saving ? (
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      ) : (
                        <Save className="w-4 h-4 mr-2" />
                      )}
                      Enregistrer
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                {profileLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-accent" />
                  </div>
                ) : (
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="w-4 h-4" />
                        Nom de l'entreprise
                      </Label>
                      {isEditing ? (
                        <Input
                          value={formData.company_name}
                          onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                          placeholder="Votre entreprise"
                          className="h-12"
                        />
                      ) : (
                        <p className="text-foreground font-medium py-3">
                          {profile?.company_name || <span className="text-muted-foreground italic">Non renseigné</span>}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-2 text-muted-foreground">
                        <User className="w-4 h-4" />
                        Nom du contact
                      </Label>
                      {isEditing ? (
                        <Input
                          value={formData.contact_name}
                          onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                          placeholder="Votre nom"
                          className="h-12"
                        />
                      ) : (
                        <p className="text-foreground font-medium py-3">
                          {profile?.contact_name || <span className="text-muted-foreground italic">Non renseigné</span>}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        Téléphone
                      </Label>
                      {isEditing ? (
                        <Input
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+216 XX XXX XXX"
                          className="h-12"
                        />
                      ) : (
                        <p className="text-foreground font-medium py-3">
                          {profile?.phone || <span className="text-muted-foreground italic">Non renseigné</span>}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-2 text-muted-foreground">
                        <Car className="w-4 h-4" />
                        Nombre de véhicules
                      </Label>
                      {isEditing ? (
                        <Input
                          type="number"
                          min={0}
                          value={formData.vehicle_count}
                          onChange={(e) => setFormData({ ...formData, vehicle_count: parseInt(e.target.value) || 0 })}
                          className="h-12"
                        />
                      ) : (
                        <p className="text-foreground font-medium py-3">
                          {profile?.vehicle_count || 0} véhicule(s)
                        </p>
                      )}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label className="flex items-center gap-2 text-muted-foreground">
                        <MapPinned className="w-4 h-4" />
                        Adresse
                      </Label>
                      {isEditing ? (
                        <Input
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="Votre adresse complète"
                          className="h-12"
                        />
                      ) : (
                        <p className="text-foreground font-medium py-3">
                          {profile?.address || <span className="text-muted-foreground italic">Non renseigné</span>}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 grid gap-4 md:grid-cols-3"
          >
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Car className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{profile?.vehicle_count || 0}</p>
                    <p className="text-sm text-muted-foreground">Véhicules équipés</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">En ligne</p>
                    <p className="text-sm text-muted-foreground">Suivi GPS actif</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary/10 border-secondary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Bell className="w-6 h-6 text-secondary-foreground shadow-sm" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">0</p>
                    <p className="text-sm text-foreground/70 font-medium">Alertes actives</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Getting Started */}
          {(!profile?.company_name || !profile?.contact_name) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <Card className="bg-accent/10 border-accent/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Complétez votre profil</h3>
                      <p className="text-foreground/80 text-sm mb-4">
                        Renseignez vos informations d'entreprise pour faciliter la gestion de votre compte et bénéficier d'un meilleur support.
                      </p>
                      <Button onClick={startEditing} variant="outline" size="sm" className="bg-white hover:bg-white/90">
                        Compléter maintenant
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
