'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface SubpageBannerProps {
  title: string;
  subtitle: string;
  category: string;
  breadcrumbs?: { name: string; href?: string }[];
  bgImage?: string;
}

export default function SubpageBanner({ title, subtitle, category, breadcrumbs, bgImage }: SubpageBannerProps) {
  return (
    <section className="relative text-on-secondary overflow-hidden w-full h-[90vh] flex items-center justify-center border-b border-white/5">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage || "/hero_bg_abstract.png"}
          alt="Banner Background"
          className="w-full h-full object-cover object-center brightness-[80%] opacity-70"
        />
        {/* Soft gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#191c1d]/80" />
      </div>

      {/* Background abstract texture grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10" /> */}

      {/* Radial soft lighting wash */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(153,248,153,0.1),transparent_50%)] pointer-events-none z-10" /> */}

      <div className="max-w-[1280px] mx-auto px-6 md:px-16 w-full flex flex-col items-center justify-center text-center relative z-20">
        {/* Title & Subtitle */}
        <div className="max-w-3xl flex flex-col gap-4 items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-on-secondary text-center"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base text-on-secondary/80 leading-relaxed font-sans max-w-xl text-center mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>

      {/* Sleek bottom alignment bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" /> */}
    </section>
  );
}
