'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const collections = [
    { name: 'Superior White', href: '/products/superior-white' },
    { name: 'Decorative Finish', href: '/products/decorative-white' },
    { name: 'Industrial Grade', href: '/products/industrial-grade' },
    { name: 'Quick Set', href: '/products/quick-set' },
    { name: 'Sculpt Grade', href: '/products/sculpt-grade' },
  ];

  const company = [
    { name: 'Heritage', href: '/about' },
    { name: 'Core Pillars', href: '/about#pillars' },
    { name: 'Leadership', href: '/about#leadership' },
    { name: 'Collaborations', href: '/clients' },
  ];

  const resources = [
    { name: 'Technical Spec Sheets', href: '/products' },
    { name: 'Quality Certificates', href: '/products' },
    { name: 'ASTM Standands', href: '/products' },
    { name: 'Inquiry Form', href: '/contact' },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Subscription successful!');
  };

  return (
    <footer className="bg-surface-container-high border-t border-outline-variant/15 w-full pt-20 pb-12 mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 w-full">
        {/* Main Links Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 w-full">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 w-fit active:scale-95 duration-200">
              <Image
                src="/logo.png"
                alt="Green Cast"
                width={40}
                height={40}
                className="h-8 w-auto object-contain"
              />
              <span className="font-display font-extrabold text-sm uppercase tracking-widest text-secondary mt-0.5">
                Green Cast
              </span>
            </Link>
            <p className="text-xs text-on-surface-variant/90 leading-relaxed max-w-sm">
              Green Cast is the benchmark of high-purity white cement. We engineer pristine surfaces to support green building standards and structural brilliance.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 items-center mt-2">
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

          {/* Links Column 1 */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-secondary">Collections</h4>
            <ul className="flex flex-col gap-2.5">
              {collections.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs text-on-surface-variant hover:text-secondary transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-secondary">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs text-on-surface-variant hover:text-secondary transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-secondary">Resources</h4>
            <ul className="flex flex-col gap-2.5">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs text-on-surface-variant hover:text-secondary transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-secondary">Inquiries</h4>
            <p className="text-[11px] text-on-surface-variant/90 leading-relaxed mb-1">
              Subscribe to material specification audits and sustainability reports.
            </p>
            <form onSubmit={handleSubscribe} className="flex items-center relative w-full">
              <input
                required
                type="email"
                placeholder="Business Email"
                className="ghost-input py-2 pr-8 text-xs text-on-surface focus:outline-none bg-transparent w-full border-b-2 border-outline-variant/30"
              />
              <button
                type="submit"
                className="absolute right-0 p-1.5 text-secondary hover:text-secondary/80 transition-colors flex items-center justify-center cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-outline-variant/15 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-semibold text-on-surface-variant/75 uppercase tracking-wider w-full">
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
