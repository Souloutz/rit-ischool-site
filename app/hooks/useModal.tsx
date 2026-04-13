"use client";

import { AnimatePresence, motion } from "motion/react";
import { createContext, type ReactNode, useContext, useState } from "react";

type ModalInstance = {
  content: ReactNode;
};

interface ModalContextType {
  pushModal: (content: ReactNode) => void;
  popModal: () => void;
  clearModals: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export default function ModalProvider({
  children
}: {
  children: ReactNode
}) {
  const [stack, setStack] = useState<ModalInstance[]>([]);

  const pushModal = (content: ReactNode) => {
    setStack((prev) => [...prev, { content }]);
  };

  const popModal = () => setStack((prev) => prev.slice(0, -1));
  const clearModals = () => setStack([]);

  return (
    <ModalContext value={{ pushModal, popModal, clearModals }}>
      {children}

      <AnimatePresence>
        {stack.map((modal, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            style={{ zIndex: 100 + index }}
          >
            {/* The actual modal content wrapper */}
            <div className="relative bg-card border border-border rounded-xl shadow-2xl max-w-3xl w-full">
               {modal.content}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </ModalContext>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  
  if (context === undefined)
    throw new Error("useModal must be used within a ThemeProvider");

  return context;
}