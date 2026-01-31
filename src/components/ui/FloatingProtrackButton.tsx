import { ExternalLink, Sparkles } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "Monitor your fleet in real-time",
  "Access the Protrack365 dashboard",
  "Advanced GPS tracking solutions",
  "Manage your assets efficiently",
];

export const FloatingProtrackButton = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    // Show message every 12 seconds for a more professional presence
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
      setShowMessage(true);

      // Hide after 5 seconds
      setTimeout(() => setShowMessage(false), 5000);
    }, 12000);

    // Show initial message after 4 seconds
    const initialTimeout = setTimeout(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
    }, 4000);

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
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {/* Popup Message */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="relative bg-[#11141E] text-white px-5 py-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 max-w-[240px] text-sm font-medium z-10"
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
              <p className="leading-tight">{messages[currentMessage]}</p>
            </div>
            {/* Arrow pointing to button */}
            <div className="absolute -bottom-1.5 right-10 w-3 h-3 bg-[#11141E] border-r border-b border-white/20 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with Pulse Animation */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
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
