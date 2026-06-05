'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface SubpageBannerProps {
  title: string;
  subtitle: string;
  category: string;
  breadcrumbs?: { name: string; href?: string }[];
}

export default function SubpageBanner({ title, subtitle, category, breadcrumbs }: SubpageBannerProps) {
  return (
    <section className="relative bg-secondary text-on-secondary pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden w-full border-b border-white/5">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg_abstract.png"
          alt="Banner Background"
          className="w-full h-full object-cover object-center brightness-[25%] opacity-35"
        />
        {/* Soft gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#191c1d]/90" />
      </div>

      {/* Background abstract texture grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10" />
      
      {/* Radial soft lighting wash */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(153,248,153,0.1),transparent_50%)] pointer-events-none z-10" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-16 w-full relative z-20">
        {/* Category Badge & Breadcrumbs */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 text-secondary-container px-3 py-1 rounded-full border border-white/10">
            {category}
          </span>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-on-secondary/60">
              {breadcrumbs.map((crumb, idx) => (
                <div key={crumb.name} className="flex items-center gap-2">
                  <span>/</span>
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-on-secondary transition-colors duration-200">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-on-secondary">{crumb.name}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Title & Subtitle */}
        <div className="max-w-3xl flex flex-col gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-on-secondary"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base text-on-secondary/80 leading-relaxed font-sans max-w-xl"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>

      {/* Sleek bottom alignment bar */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
