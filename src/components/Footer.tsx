'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Twitter, Award, Globe, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const collections = [
    { name: 'Ready Mix Plaster', href: '/products/ready-mix-plaster' },
    { name: 'Polymer Mortar', href: '/products/polymer-mortar' },
    { name: 'Micro Concrete', href: '/products/micro-concrete' },
    { name: 'Tile Adhesives', href: '/products/tile-adhesives' },
    { name: 'Block Jointing Mortar', href: '/products/block-jointing-mortar' },
  ];

  const company = [
    { name: 'Heritage & Story', href: '/about' },
    { name: 'Core Pillars', href: '/about#pillars' },
    { name: 'Leadership Team', href: '/about#leadership' },
    { name: 'Collaborations', href: '/clients' },
    { name: 'Get In Touch', href: '/contact' }
  ];

  return (
    <footer className="bg-surface-container-high border-t border-outline-variant/15 w-full pt-20 pb-12 mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 w-full">
        {/* Main Links Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 w-full">
          {/* Brand Info & Address Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 w-fit active:scale-95 duration-200">
              <Image
                src="/logo.png"
                alt="Green Cast Logo"
                width={40}
                height={40}
                className="h-8 w-auto object-contain"
              />
              <span className="font-display font-extrabold text-sm uppercase tracking-widest text-secondary mt-0.5">
                Green Cast
              </span>
            </Link>
            <p className="text-xs text-on-surface-variant/90 leading-relaxed max-w-sm">
              VVF Industries is a manufacturer of high-quality dry mix mortar/concrete products. Committed to building strong foundations of infrastructure, industry, and development.
            </p>
            
            {/* Contact Details */}
            <div className="flex flex-col gap-1.5 mt-2">
              <span className="text-[10px] uppercase font-bold text-secondary tracking-widest font-mono">Our Office</span>
              <p className="text-xs text-on-surface-variant/90 leading-relaxed">
                Chikhli, Gujarat, India
              </p>
              <p className="text-xs text-on-surface-variant/95 font-semibold leading-relaxed">
                Phone: <a href="tel:+918369770601" className="hover:text-secondary transition-colors font-mono">+91 83697 70601</a>
                <br />
                Email: <a href="mailto:vvfindustries@gmail.com" className="hover:text-secondary transition-colors font-mono">vvfindustries@gmail.com</a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 items-center mt-2">
              <a href="#" className="p-2.5 bg-surface rounded-full text-on-surface-variant hover:text-secondary hover:bg-secondary-container transition-all border border-outline-variant/10 shadow-sm">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-surface rounded-full text-on-surface-variant hover:text-secondary hover:bg-secondary-container transition-all border border-outline-variant/10 shadow-sm">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-surface rounded-full text-on-surface-variant hover:text-secondary hover:bg-secondary-container transition-all border border-outline-variant/10 shadow-sm">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column 1: Collections */}
          <div className="lg:col-span-3 flex flex-col gap-5 lg:pl-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-secondary">Collections</h4>
            <ul className="flex flex-col gap-3">
              {collections.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs md:text-sm text-on-surface-variant hover:text-secondary transition-colors duration-200 font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Company */}
          <div className="lg:col-span-2 flex flex-col gap-5 lg:pl-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-secondary">Company</h4>
            <ul className="flex flex-col gap-3">
              {company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs md:text-sm text-on-surface-variant hover:text-secondary transition-colors duration-200 font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications Badge Column */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-secondary">
              Certifications
            </h4>
            <div className="grid grid-cols-1 gap-3 w-full">
              {[
                { code: 'ISO 9001:2015', name: 'Quality Management System', icon: Award },
                { code: 'ISO 14001:2015', name: 'Environmental Management', icon: Globe },
                { code: 'ISO 45001:2018', name: 'Occupational Health & Safety', icon: ShieldCheck }
              ].map((badge) => {
                const IconComponent = badge.icon;
                return (
                  <div key={badge.code} className="flex items-center gap-3 p-3 bg-surface border border-secondary/15 rounded-xl hover:shadow-sm transition-shadow">
                    <IconComponent className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div>
                      <span className="block font-mono text-[9px] font-bold tracking-wider text-secondary leading-none mb-0.5">{badge.code}</span>
                      <span className="block font-sans text-[9px] font-bold text-on-surface-variant uppercase tracking-wider leading-none">{badge.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-outline-variant/15 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold text-on-surface-variant/75 uppercase tracking-wider w-full">
          <span>&copy; {new Date().getFullYear()} Green Cast Ltd. All rights reserved.</span>
          <div className="flex gap-6 items-center">
            <a href="#" className="hover:text-secondary">Privacy Spec</a>
            <a href="#" className="hover:text-secondary">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
