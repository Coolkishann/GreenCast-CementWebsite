'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { X, Phone } from 'lucide-react';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
  pathname: string;
}

export default function NavigationDrawer({ isOpen, onClose, navLinks, pathname }: NavigationDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] md:hidden"
      />
      
      {/* Drawer Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 h-full w-[80%] max-w-[320px] bg-surface z-[70] shadow-2xl flex flex-col py-8 px-6 md:hidden"
      >
        <div className="flex justify-between items-center pb-8 border-b border-outline-variant/10">
          <span className="font-bold text-xl tracking-tight text-on-surface">GREEN CAST</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-surface-container rounded-full transition-colors flex items-center justify-center"
          >
            <X className="w-5 h-5 text-on-surface" />
          </button>
        </div>
        
        <nav className="flex flex-col gap-3 mt-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-semibold text-lg transition-all ${
                  isActive
                    ? 'bg-secondary-container text-on-secondary-container'
                    : 'text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="mt-auto">
          <a
            href="tel:+918369770601"
            onClick={onClose}
            className="w-full text-center flex items-center justify-center gap-2 bg-secondary text-on-secondary py-4 rounded-xl font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            <span>Call +91 83697 70601</span>
          </a>
        </div>
      </motion.div>
    </>
  );
}
