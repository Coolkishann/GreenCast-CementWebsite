'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, Phone } from 'lucide-react';
import NavigationDrawer from './NavigationDrawer';
import { AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/85 backdrop-blur-md shadow-sm border-b border-outline-variant/10 py-3.5'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-16 max-w-[1280px] mx-auto w-full">
          {/* Brand Logo with Text */}
          <Link href="/" className="flex items-center gap-3 active:scale-95 duration-200">
            <Image
              src="/logo.png"
              alt="Green Cast"
              width={40}
              height={40}
              className="h-8 md:h-9 w-auto object-contain"
              priority
            />
            <span className="font-display font-extrabold text-sm md:text-base uppercase tracking-widest text-secondary mt-0.5">
              Green Cast
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-semibold text-xs uppercase tracking-widest transition-colors duration-300 relative py-1 ${
                    isActive ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-secondary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDrawerOpen(true)}
              className="md:hidden p-2 text-secondary hover:bg-surface-container rounded-full transition-colors flex items-center justify-center cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
            <a
              href="tel:0254582215"
              className="hidden md:flex items-center gap-2 bg-secondary text-on-secondary px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-md shadow-secondary/10"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(02) 5458 2215</span>
            </a>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {drawerOpen && (
          <NavigationDrawer
            isOpen={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            navLinks={navLinks}
            pathname={pathname}
          />
        )}
      </AnimatePresence>
    </>
  );
}
