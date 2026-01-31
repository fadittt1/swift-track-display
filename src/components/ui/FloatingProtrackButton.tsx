import { ExternalLink, Sparkles } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "Visit our main website! 😊",
  "Track your fleet in real-time! 🚗",
  "Discover Protrack365! ✨",
  "Your GPS dashboard awaits! 📍",
];

export const FloatingProtrackButton = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    // Show message every 8 seconds
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
      setShowMessage(true);
      
      // Hide after 4 seconds
      setTimeout(() => setShowMessage(false), 4000);
    }, 8000);

    // Show initial message after 3 seconds
    const initialTimeout = setTimeout(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 4000);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  const handleClick = () => {
    if (user) {
      window.open('https://www.Protrack365.com', '_blank');
    } else {
      toast.error('Veuillez vous connecter pour accéder à Protrack365');
      navigate('/login');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Popup Message */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-card text-card-foreground px-4 py-2 rounded-xl shadow-lg border border-border/50 max-w-[200px] text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>{messages[currentMessage]}</span>
            </div>
            {/* Arrow pointing to button */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-card border-r border-b border-border/50 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with Pulse Animation */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        {/* Pulse ring effect */}
        <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
        <span className="absolute inset-0 rounded-full bg-accent/20 animate-pulse" />
        
        <Button
          onClick={handleClick}
          className="relative btn-accent shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-6 flex items-center gap-2 group"
          size="lg"
        >
          <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-semibold">Protrack365</span>
        </Button>
      </motion.div>
    </div>
  );
};
