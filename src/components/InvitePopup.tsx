import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sun } from "lucide-react";

export const InvitePopup = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/10 backdrop-blur-sm"
        onClick={() => setVisible(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="glow-card p-10 md:p-14 max-w-md mx-6 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Sun size={28} className="text-accent" />
          </div>
          <h3 className="text-2xl md:text-3xl text-foreground mb-3 font-bold" style={{ fontFamily: 'Outfit' }}>
            Bem-vindo ao<br />Riviera Transfer
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Transporte executivo com alma de verão. Frota premium, conforto refrescante
            e a experiência que o litoral merece.
          </p>
          <button onClick={() => setVisible(false)} className="summer-btn-coral w-full">
            Explorar ☀️
          </button>
          <button onClick={() => setVisible(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
            <X size={18} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
