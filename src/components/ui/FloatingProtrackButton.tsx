import { ExternalLink } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export const FloatingProtrackButton = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      window.open('https://www.Protrack365.com', '_blank');
    } else {
      toast.error('Veuillez vous connecter pour accéder à Protrack365');
      navigate('/login');
    }
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 btn-accent shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-6 flex items-center gap-2"
      size="lg"
    >
      <ExternalLink className="w-5 h-5" />
      <span className="font-semibold">Protrack365</span>
    </Button>
  );
};
