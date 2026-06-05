'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Send, CheckCircle2, ArrowUpRight, Award, Compass, Database, Phone, MessageSquare } from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const featuredProducts = [
    {
      id: 'superior-white',
      name: 'Green Cast Superior White',
      grade: '52.5N Grade',
      desc: 'Our flagship structural white cement, engineered for load-bearing architectural panels and highly reflective concrete elements.',
      image: '/alba_superior_bag.png',
      accent: 'text-emerald-800'
    },
    {
      id: 'eco-cement',
      name: 'Green Cast Eco-Cement',
      grade: 'Sustainable Choice',
      desc: 'Formulated to reduce carbon emissions by 30% while maintaining the pristine white aesthetic demanded by modern designers.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPAfrhmcHITRVCFTjdrYoLSRUYIihbqZs0d1irkthc2ZiY6YFrSaw7yPBNhCBgB4DmASDciUMFa2h05F-M6fIscojPXzCF4d6m6QUt41SrfdATUxe9_5xxpKd31OkPohfSRxrCDegnfirN7ZcadNTU1B2AeOaAPQupubg8wIaeZaBTi4QgCPvyuRKgJ696vk4MYO6ZUuI1pmgK8WSx_PROisF6E10GdhyY9QsFLqFmLYKqbDwV9e5zdOXBEyWSZeA1EwlaPI_sEIA',
      accent: 'text-teal-800'
    },
    {
      id: 'architectural-pro',
      name: 'Green Cast Architectural Pro',
      grade: 'Ultra-Fine Grade',
      desc: 'An ultra-fine cement blend designed for intricate decorative moldings, precast elements, and polished interior surfaces.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZp0QmLcxFNVbAF4TrZ_efI5PeYpqiHKVU2Y8dMC8jQqSh747ZAr1GAZNIt8i3Jm9PHWmsKiMSwrwvc8ChxApUxlZu2Wye3b1AlJhCwr1HicCTFCFfkni6s29S_OwMDn3w1qwPB3m_nrFb6okXa6ZIXGVmz0J_Pxk9Xr2PBRiZKedQtVSlruvwSDkoudprrfGdK4YPOfDj4Di4bml8hMO9PTU-m2ZC_BvyoQq5NLcchgKQV6busPS-gmFPkTTOdCnnM8EKcCg3sfs',
      accent: 'text-blue-800'
    }
  ];

  const clientLogos = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCj20ezQ_1PeO66LKhDjdByOWHPhlEDoeyTrwUzRYQ4B1ZISvq15xZmzBLgkbWolRW0JTRYRh9GrwoOYDYs-roD3ZXFkneDW8V6DKEf9wP9EAiqmFDEK2w6jsogryAhrpyCnpb5NZBa4CaKbXcE7EkstNkEr-3UyGQHmQ71dsEqSwnoszgalxNfyrfO_f9hdUntGG396nBVMIr5FHSiWG6NLzg1F8LOhyhw5qCkS-Hstl1r3Wrv5Q-dyIDrRobsIiw2bUsvNjYViuY',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ2ruuspBZ3AkubBWwq5QU9E8iVhWvDaKwVx52J3gDOM_lwPOH6KZgINh5qRu0zIfqFyUIV_cx5MjWTG0ntYyrUC34Sav-MJk4KsLz1oBblmz1aBEWkDDNzHrdPZePpv0arjZGxVeSheGaJ6SLi-XjfdHaCXWJUDpK17mcV34xheeJR2Evj3j1HI10_SGGE7PZEBBgqk7DY8X-g0KhMlyK4zO8WfWVxZSxy-ID-90TZrA-tw1w8HPN2J-VqWT6M69C475IRhMcK9o',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDhRea_LFLBFXdx7HlsRGLaQhM-vgWg5AN2kj72hyutBLYLvFCziMjXWDcAUL1i8VuALsd18LktiI7vBSzZFgUcKZYSgj9l3N5IbC0KkJKh9HgIOD7WRc96XzTsPqhndDgIIFln1EPFKlCAJMF2lpYTLjD9AMI4xHOClFZEt5jhy1pfEBj0quu4j0Yb6GX4PfrLfjOxzb1iTcydjb-uxqzCV2d_MZXxX9bvM4qQX6Mtyc3I6HG6No5PN3S4P6VFTZhBccYZ4z9VaDE',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAxeTBuei_WHQY074ft6McujAvC9sK4pcibGV7jNcvLTMgvWibB2NfMWaV_bClt0_hCKFiH85qlpMRNuKgCXCXmkCiOBPEx2sU4qusKeHLOiNRYC-rDMxgkSs0S256FftPOT4NN50gdbO5hU67F1e3hamI2sz7qavTUHWvlpk-26ci6bT3r7WPjaAV1uR7MJDpKxuAgkbaal534kPZbLr7DO2loZr5BNnZY9fxnQyIptS10buVI2ibWvvyj539ffDC68xqSND_9KG8',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB1UY8n3pDvCLOXvssStbTGtcza8zOYhOxXGcjLyp4176uGONd658Han5e6L2eG7-gG5wliuIdex0e2nv5qFbse3JF849hRdlmU_npEuah_DGX_bpxHH1jwEtzvKdi8cki4IVSoDHpilrTRofoZr0x9T2rE3gC0hKTL8FnODlIIhOx6pgbDGG1ucFANm3TTPlVm-QxqApvcSp5zp_9P1kBEv140NFJhoyIStifVWR8HNTY7P2eB1tYhEsEfx6o_dHAQ97BVgIj6ZTM',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCzivRJGbgAjnXlA5DsIkEcCtcWHIb_UFwMGG6OlnTOzRaBdiZAUTfIVmi0yEVXgGEoxw44xF3peti3-0hO4X0klumt-JuMY3Obe1Mkc6xaJdx9_xSpNkdi_zkyZ2sniKRIMKHopdA0SuzHX_rTf1itT65BcleM1POn1tz5_eTTVjdgIN7XMnbP3D2vvGGl5l_uIRiu_pGae9kj0rbEg5Y_cHVBHylPLH1opaYr_czPbuToz_8h4RLZknhCwIi_EEyIOTnZXlqOZ_U'
  ];

  const testimonials = [
    {
      quote: "Green Cast White Cement completely transformed our approach to facade light reflection. The purity is unmatched, giving concrete panels a radiant glow that shifts organically with the sun.",
      author: "Marcus Vance",
      role: "Principal, Studio Vance Architects",
      project: "The Quartz Pavilion"
    },
    {
      quote: "The 30% reduction in carbon footprint allowed our residential projects to hit strict sustainability guidelines without sacrificing the clean, bright white aesthetics.",
      author: "Elena Rostova",
      role: "Lead Architect, Rostova Design Group",
      project: "The Eco-Villa Series"
    },
    {
      quote: "Its compressive structural hydration allowed us to cast complex curves seamlessly. The ultra-fine particle sizing completely eliminated surface micro-cracking.",
      author: "Dr. Aaron Chen",
      role: "Engineering Director, Chen Partners",
      project: "Metropolitan Art Center"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Client Logos Marquee - Repositioned beneath Hero section with larger height */}
      <section className="py-16 bg-surface-container-low border-b border-outline-variant/10 overflow-hidden w-full">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 w-full text-center">
          <span className="text-secondary font-bold text-[10px] uppercase tracking-widest block mb-10">
            Trusted by Visionary Firms
          </span>

          <div className="relative w-full flex items-center justify-center overflow-hidden py-2">
            <div className="flex gap-16 md:gap-28 items-center animate-marquee whitespace-nowrap min-w-full">
              {clientLogos.concat(clientLogos).map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`Partner Logo ${idx + 1}`}
                  className="h-16 md:h-20 w-auto object-contain opacity-55 hover:opacity-100 transition-opacity duration-300 select-none pointer-events-none"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Summary Section (Fully transparent layout) */}
      <section className="py-28 px-6 md:px-16 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full bg-transparent">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <span className="text-secondary font-semibold text-xs uppercase tracking-widest flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> The Green Cast Standard
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight tracking-tight text-on-surface">
            Crafted for Serenity
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
            Green Cast White Cement represents the pinnacle of purity in building materials. Since our inception, we have focused on a single mission: to provide architects and designers with the most pristine, high-performance white cement in the industry.
          </p>
          <p className="text-xs text-on-surface-variant/80 leading-relaxed font-sans">
            Our ecological manufacturing process ensures that beauty never comes at the cost of the environment. Each grain is engineered for maximum reflectivity and structural integrity, laying down the baseline for sustainable modernism.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest hover:translate-x-2 transition-transform duration-300 mt-2"
          >
            Discover our Heritage
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 relative"
        >
          {/* Main Architectural Texture Image */}
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl relative bg-zinc-100 border border-outline-variant/10">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJIzpS712LssZqri6B_sppCAbxOIrbrM2Iq4emUsei_1vhp7ahwhWMyF649AMK7v_OVqMjtO1bkiU8jrFzAyl00L3r431FiQEwQV2qYbJVauGl99-0-q8l6qoA_gIEjUn6ZxiEmt-WHPFk2WY0DYMIrc4p6J-ksOv6fP-CwP-47-DdvvIUk8e4HAzbx_KL4BRdAq6EiBTvSNaptqGyO8CWahh98cjKgtaQJKDIgUpHrznQ_VnWAtmCT-RklHvsP-HBbErgpVALAAk"
              alt="Premium architectural white concrete close-up"
            />
            <div className="absolute inset-0 bg-secondary/5 mix-blend-multiply" />
          </div>

          {/* Floating Glassmorphic Badge */}
          <div className="absolute -bottom-6 -left-6 glass-card p-6 md:p-8 rounded-2xl hidden sm:block shadow-lg border border-outline-variant/15">
            <div className="text-secondary font-display font-bold text-4xl md:text-5xl leading-none mb-1">
              99.2%
            </div>
            <div className="font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest font-mono">
              Purity Grade
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Concrete Installations Section */}
      <section className="py-24 border-t border-outline-variant/10 w-full bg-transparent">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 w-full mb-12 flex flex-col gap-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest">01 / PROJECTS</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-on-surface">Concrete Installations</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-[1280px] mx-auto px-6 md:px-16 pb-12">
          {/* Left Main Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden group border border-outline-variant/15"
          >
            <img
              src="/bento_driveway.png"
              alt="Residential Driveway Installation"
              className="w-full h-full object-cover group-hover:scale-103 duration-700 transition-transform brightness-[85%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8 text-white z-10 flex justify-between items-end gap-6">
              <div className="flex flex-col gap-2 max-w-lg">
                <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
                  Residential Driveway Installation
                </h3>
                <p className="text-xs text-white/80 leading-relaxed font-sans">
                  A clean and durable driveway designed to enhance curb appeal and withstand heavy use.
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center flex-shrink-0 cursor-pointer shadow-lg shadow-secondary/30 hover:scale-110 duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

          {/* Right Cards Stack (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between h-full">
            {/* Top Wide Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative h-[212px] md:h-[262px] rounded-3xl overflow-hidden group border border-outline-variant/15"
            >
              <img
                src="/bento_smoothing.png"
                alt="Precision Slab Levelling"
                className="w-full h-full object-cover group-hover:scale-103 duration-700 transition-transform brightness-[85%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white z-10 flex justify-between items-end gap-6">
                <div className="flex flex-col gap-1 max-w-md">
                  <h4 className="font-display font-bold text-lg md:text-xl uppercase tracking-tight">Precision Slab Levelling</h4>
                  <p className="text-[10px] text-white/80 font-sans">Professional surface levelling and reinforcement overlays.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center flex-shrink-0 cursor-pointer shadow-lg">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Bottom Row Two Cards */}
            <div className="grid grid-cols-2 gap-6 h-[212px] md:h-[262px]">
              {/* Bottom Left Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="relative rounded-3xl overflow-hidden group border border-outline-variant/15"
              >
                <img
                  src="/bento_pouring.png"
                  alt="Foundation Pours"
                  className="w-full h-full object-cover group-hover:scale-103 duration-700 transition-transform brightness-[85%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white z-10 flex justify-between items-end gap-3">
                  <div className="flex flex-col gap-0.5">
                    <h4 className="font-display font-bold text-sm uppercase tracking-tight">Foundation Pours</h4>
                    <p className="text-[9px] text-white/70 font-sans">High-strength pours.</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-secondary text-white flex items-center justify-center flex-shrink-0 cursor-pointer">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>

              {/* Bottom Right Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="relative rounded-3xl overflow-hidden group border border-outline-variant/15"
              >
                <img
                  src="/bento_trowel.png"
                  alt="Polished Concrete"
                  className="w-full h-full object-cover group-hover:scale-103 duration-700 transition-transform brightness-[85%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white z-10 flex justify-between items-end gap-3">
                  <div className="flex flex-col gap-0.5">
                    <h4 className="font-display font-bold text-sm uppercase tracking-tight">Polished Concrete</h4>
                    <p className="text-[9px] text-white/70 font-sans">Smooth finishes.</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-secondary text-white flex items-center justify-center flex-shrink-0 cursor-pointer">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Featured Products Showcase (Transparent cards with less info) */}
      <section className="py-28 px-6 md:px-16 w-full bg-transparent border-t border-outline-variant/10">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="flex justify-between items-end mb-16 w-full">
            <div>
              <span className="text-secondary font-semibold text-xs uppercase tracking-widest block mb-2">Our Solutions</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-on-surface">The White Collection</h2>
            </div>
            <Link
              href="/products"
              className="hidden sm:flex items-center gap-1.5 bg-secondary text-on-secondary px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-md shadow-secondary/10"
            >
              All Products
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Cards with transparent background, no solid blocks, and less text info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {featuredProducts.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group flex flex-col bg-transparent overflow-hidden"
              >
                {/* Product Image in a radial container */}
                <div className="aspect-[4/3] w-full p-6 flex items-center justify-center bg-radial from-white to-surface-container border border-outline-variant/10 rounded-2xl relative overflow-hidden mb-6">
                  <img
                    className="max-h-[85%] max-w-[85%] object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 z-10"
                    src={p.image}
                    alt={p.name}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border border-outline-variant/20 bg-surface/85 backdrop-blur-sm text-on-surface">
                      {p.grade}
                    </span>
                  </div>
                  <div className="absolute w-40 h-40 rounded-full bg-secondary/5 blur-2xl" />
                </div>

                {/* Product Info (Minimal metadata) */}
                <div className="flex flex-col flex-grow px-2">
                  <h3 className="font-display font-bold text-xl md:text-2xl mb-1 text-on-surface group-hover:text-secondary transition-colors duration-300">
                    {p.name}
                  </h3>
                  <span className="text-[10px] uppercase font-bold text-on-surface-variant/75 tracking-wider mb-4 block">
                    Collection / {p.id === 'eco-cement' ? 'Sustainable' : 'Structural'}
                  </span>

                  <Link
                    key={p.id}
                    href={`/products/${p.id}`}
                    className="inline-flex items-center gap-1.5 text-secondary font-bold text-xs uppercase tracking-widest hover:translate-x-2 transition-transform duration-300 mt-auto"
                  >
                    View Specifications
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all w-full justify-center"
            >
              All Products
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Quote Section */}
      <section className="py-24 border-t border-outline-variant/10 w-full bg-surface-container-low/50">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 w-full flex flex-col items-center">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-3">02 / AUDITS</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-on-surface mb-16 text-center">
            Architectural Feedback
          </h2>

          <div className="max-w-3xl w-full text-center relative px-4 min-h-[220px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-6"
              >
                <div className="flex justify-center text-secondary/35">
                  <MessageSquare className="w-12 h-12 stroke-[1.5]" />
                </div>
                <p className="font-display text-lg md:text-2xl font-medium tracking-tight text-on-surface leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <span className="font-bold text-sm text-on-surface">{testimonials[activeTestimonial].author}</span>
                  <span className="text-xs text-on-surface-variant font-mono font-medium">{testimonials[activeTestimonial].role} / {testimonials[activeTestimonial].project}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quote Indicators */}
            <div className="flex justify-center gap-3 mt-12 w-full">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === activeTestimonial ? 'w-8 bg-secondary' : 'w-2 bg-outline-variant/40 hover:bg-outline-variant/70'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Full-Width Banner-Style CTA Section with Background Image */}
      <section className="relative py-32 px-6 md:px-16 w-full overflow-hidden text-center text-white border-t border-outline-variant/10">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/cta_concrete_bg.png"
            alt="Concrete Project Banner"
            className="w-full h-full object-cover object-center brightness-[35%] contrast-[110%]"
          />
          {/* Ambient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#191c1d]/60 via-transparent to-[#191c1d]/85" />
        </div>

        {/* Content Details */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest font-mono">03 / CONTACT</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight uppercase leading-[1.1] max-w-3xl">
            Start Your Concrete Project With Confidence!
          </h2>

          {/* Inline Bullet Points */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs md:text-sm font-semibold uppercase tracking-wider text-white/95 font-sans">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Free Consultation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Transparent Pricing
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Concrete Specialists
            </span>
          </div>

          {/* Action buttons matching specifications layout */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full justify-center">
            {/* Get a Free Estimate Orange Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-secondary hover:bg-[#ee6300] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-secondary/20"
            >
              <span>Get a Free Estimate</span>
              <div className="w-6 h-6 rounded-full bg-white text-secondary flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
