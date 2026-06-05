'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    image: '/hero_bg_abstract.png',
    title: 'Redefining Architectural Purity',
    description: 'Crafting the foundation of sustainable modernism with ultra-white cement solutions for the visionaries of tomorrow.',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUUt46qt7JmIFPdXhQYAv7aoSksSSb7fbFW8NGGBNuX2whdTXlcSq3lWwGvvU96hyUGwjBDzzcz48olEP0Hk3B0IUXVvrVJ9d8RtftieWwDH3bRLs5FWvSHbgoGz6ZNI3b1Bga8ikrgZHhBivBFmWIslKe1TOyKupSNRE1P3ngQu5zkaowzwOTwxn8DzSpoBgrdBWq63noTnXvjE1a3JxafjrfhoXd4xjMJiEPBrtLuhHI6Oup2oy9TYhhHZOyXiZcp53vKP5TSPY',
    title: 'Precision in Every Grain',
    description: 'Uncompromising structural strength meeting pristine white aesthetics to build icons of structural serenity.',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtK-DixwfNv2M2Vxymq9BwVOAes57wnBvp3qeerixT07lSdu1iG7crTOrJV2R_VQujafm8YaaBLMHY-MNVH-fjpoWq5PQ63UUadZguepSg6mI06fSVmshH2RuFMeCe9dB0h0YSpawZDB_ix0j2Pumeb0tDAJo1OnNbI4Rn583shJrq3YOAD7vPmKbYSUcjgb4pYBokZR9_pnxCZVnz7eZ9kii242UzyXuXnB6ZQSmdjTGLnX949qV6J4PyEoDSVdoxH6n2nvJ7y6k',
    title: 'Ecological Responsibility',
    description: 'Engineered with eco-conscious production practices, aligning premium materials with environmental care.',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 },
        scale: { duration: 0.8 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          {/* Slide Image */}
          <div className="absolute inset-0 z-0 bg-black/40">
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-full object-cover object-center brightness-95 grayscale-[5%]"
            />
            {/* Soft gradient wash */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
          </div>

          {/* Slide Text Content */}
          <div className="relative z-10 h-full max-w-[1280px] mx-auto px-6 md:px-16 flex items-center">
            <div className="max-w-2xl text-on-surface">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-display-lg text-[44px] md:text-[72px] font-bold leading-[1.05] tracking-tight mb-6"
              >
                {slides[current].title.split(' ').map((word, i) => (
                  <span key={i} className={word === 'Architectural' || word === 'Purity' ? 'text-secondary font-extrabold' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-sans text-sm md:text-base text-on-surface-variant max-w-md mb-10 leading-relaxed"
              >
                {slides[current].description}
              </motion.p>

              {/* Styled Minimalist Buttons */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-6 items-center"
              >
                <Link
                  href="/products"
                  className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:opacity-95 transition-all flex items-center gap-2 active:scale-95 shadow-md shadow-secondary/15"
                >
                  Explore Collections
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/about"
                  className="font-bold text-xs uppercase tracking-widest text-on-surface hover:text-secondary transition-colors py-2"
                >
                  The Green Cast Legacy
                </Link>
              </motion.div> */}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Manual Controls */}
      <div className="absolute right-6 md:right-16 bottom-12 z-20 flex gap-3">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center bg-white/20 backdrop-blur-md text-on-surface hover:bg-secondary hover:text-on-secondary transition-all active:scale-90"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center bg-white/20 backdrop-blur-md text-on-surface hover:bg-secondary hover:text-on-secondary transition-all active:scale-90"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pills Indicators */}
      {/* <div className="absolute left-6 md:left-16 bottom-12 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`h-2.5 rounded-full transition-all duration-500 ${index === current ? 'w-10 bg-secondary' : 'w-2.5 bg-outline-variant/30 hover:bg-outline-variant/60'
              }`}
          />
        ))}
      </div> */}
    </section>
  );
}
