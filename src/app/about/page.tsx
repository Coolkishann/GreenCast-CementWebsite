'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShieldCheck, Check, Award, Layers, Landmark, Factory, Target, Eye, Compass, Gavel, Lightbulb, Leaf, Handshake, Globe, ArrowRight } from 'lucide-react';
import SubpageBanner from '@/components/SubpageBanner';

export default function About() {
  const [activeProductIdx, setActiveProductIdx] = useState(0);

  const productsList = [
    {
      name: 'Ready Mix Plaster',
      image: '/rmp_about.png',
      desc: 'High-performance ready mix plaster for smooth, durable wall finishes.'
    },
    {
      name: 'Micro Concrete',
      image: '/micro_about.png',
      desc: 'High early strength flowable micro concrete for repairs and structural reinstatement.'
    },
    {
      name: 'Polymer (Repair) Mortar',
      image: '/polymer_about.png',
      desc: 'Dual shrinkage compensated mortar for overhead and structural concrete repairs.'
    },
    {
      name: 'All types of Tile Adhesives',
      image: '/tile_about.png',
      desc: 'Single component polymer-modified adhesives for tiles, stone, and heavy slabs.'
    },
    {
      name: 'Block Jointing Mortar',
      image: '/bjm_about.png',
      desc: 'Thin jointing mortar for high-strength bonding of AAC, clay, and fly ash blocks.'
    },
    {
      name: 'Crack Filler Powder',
      image: '/crack_about.png',
      desc: 'Water-resistant, non-shrink filler for patching structural and cosmetic cracks.'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Using Pure River Sand',
      desc: 'Formulating superior cement products using only pure river sand for maximum strength and bond consistency.'
    },
    {
      title: 'Experienced Technical & Support Team',
      desc: 'Our specialized support and R&D engineers assist builders and consultants throughout the project lifecycle.'
    },
    // {
    //   title: 'Proven Track Record',
    //   desc: 'Known for absolute reliability and high product performance in infrastructure development.'
    // },
    {
      title: 'Competitive Pricing & Timely Delivery',
      desc: 'Balancing cost efficiency with consistent supply chain speed and timely on-site fulfillment.'
    },
    {
      title: 'Sustainability & Innovation',
      desc: 'A strong corporate commitment to eco-friendly production practices and resource efficiency.'
    }
  ];

  const timelineSteps = [
    {
      year: '1996',
      title: 'The Paint Legacy',
      desc: 'Arihant Paints is founded by Mr. Hirenkumar Vasantlal Fofaliya in Bandra, Mumbai, establishing partnerships with major paint brands.'
    },
    {
      year: '2016',
      title: 'Manufacturing Debut',
      desc: 'Ventured into dry mortar and Ready Mix Plaster manufacturing under the Amar Build Care4 (ABC4) brand.'
    },
    {
      year: '2024',
      title: 'VVF Industries & Green Cast',
      desc: 'Launched a state-of-the-art manufacturing plant in Chikhli, Gujarat, producing dry mixes under the flagship Green Cast brand.'
    }
  ];

  return (
    <div className="flex flex-col w-full bg-transparent">
      {/* Page Header */}
      <SubpageBanner
        title="About Us"
        subtitle="Our journey to excellence in dry mortar solutions"
        category="VVF Industries"
        breadcrumbs={[{ name: 'About' }]}
        bgImage="/about_bg.png"
      />

      {/* Narrative Section */}
      <section className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest flex items-center gap-2 font-mono">
            <Landmark className="w-4 h-4" /> Our Story
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-on-surface leading-tight">
            Building a Legacy of Construction Excellence
          </h2>
          <p className="text-on-surface-variant leading-relaxed text-sm md:text-base font-sans">
            Founded in 1996 by Mr. Hirenkumar Vasantlal Fofaliya, Arihant Paints began as a modest paint distribution business in Bandra, Mumbai. Joined later by his brother Mr. Vipul Fofaliya, the company quickly gained momentum, partnering with major paint brands and serving builders, consultants, and applicators across the region.
          </p>
          <p className="text-on-surface-variant/90 leading-relaxed text-sm md:text-base font-sans">
            In 2016, Mr. Fofaliya ventured into manufacturing with Amar Build Care4 (ABC4), a dry mortar and Ready Mix Plaster brand. With a growing client base and commitment to quality, he envisioned a platform to deliver these products on a larger scale.
          </p>
          <p className="text-on-surface-variant/80 leading-relaxed text-sm md:text-base font-sans">
            Thus, in 2024, VVF Industries was born — a state-of-the-art manufacturing facility in Chikhli, Gujarat under the flagship brand Green Cast. The mission was simple: to deliver top-quality dry mortar products through a wide channel partner network and uphold a legacy of construction excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-outline-variant/10 bg-zinc-100"
        >
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJIzpS712LssZqri6B_sppCAbxOIrbrM2Iq4emUsei_1vhp7ahwhWMyF649AMK7v_OVqMjtO1bkiU8jrFzAyl00L3r431FiQEwQV2qYbJVauGl99-0-q8l6qoA_gIEjUn6ZxiEmt-WHPFk2WY0DYMIrc4p6J-ksOv6fP-CwP-47-DdvvIUk8e4HAzbx_KL4BRdAq6EiBTvSNaptqGyO8CWahh98cjKgtaQJKDIgUpHrznQ_VnWAtmCT-RklHvsP-HBbErgpVALAAk"
            alt="VVF Industries state of the art facility facade"
          />
        </motion.div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-6 md:px-16 border-t border-outline-variant/10 w-full bg-transparent">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest flex items-center gap-2 font-mono">
                <Award className="w-4 h-4" /> Our Founder
              </span>
              <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-on-surface">
                Hirenkumar V. Fofaliya
              </h2>
              <p className="text-lg text-secondary font-medium italic font-sans leading-relaxed">
                "A visionary entrepreneur dedicated to revolutionizing the cementitious and dry mix mortar industry with a customer-first approach and a passion for innovation."
              </p>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-sans">
                Under his guidance, VVF Industries has transitioned from a localized paint distribution network into an advanced dry mortar manufacturer. His vision of combining ecological responsibility ("Go Green, Build Green") with structural strength continues to define the Green Cast research & development department.
              </p>
            </motion.div>

            {/* Right side portrait mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-outline-variant/10 bg-surface-container relative"
            >
              <img
                className="w-full h-full object-cover grayscale brightness-95"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0FYhhjtaYwdvl0-E00H27QyxNOHsujjbdFQlEHcC3lbj-plKc47VxCx0vcD-Ro6Iav4oA8IME-JVh-ii5qnKVcsGxmjC6mWYzWZiLuH088QUbt1RoJqQFWSyqb8D-Nw1dg40xw89RhK1Eq8kA1HcnTKRfCcD_5DOgm4i5LsYPaqCq8ZijdfCAjZGJg4aGaGuJR7H3mLg38oVfh1GjewbQ8t6l7UlGGkB3m-5zQlruAY5gFGg16vRLyWuDiTEIlw9LgJj6pLjalxg"
                alt="Hirenkumar V. Fofaliya"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-secondary-container font-mono block mb-1">Founder & Visionary</span>
                <span className="text-sm font-bold">VVF Industries</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline of Journey */}
      <section className="py-24 px-6 md:px-16 border-t border-outline-variant/10 w-full bg-transparent">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest block mb-3 font-mono">Our Journey</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-on-surface">
              Milestones of Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full relative">
            {timelineSteps.map((step, idx) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col bg-transparent group"
              >
                {/* Large typographic year display */}
                <span className="font-display font-black text-6xl md:text-7xl text-secondary/15 group-hover:text-secondary transition-colors duration-500 mb-2 block font-mono">
                  {step.year}
                </span>

                {/* Thin custom horizontal rule */}
                <div className="h-[2px] w-full bg-outline-variant/20 mb-6 group-hover:bg-secondary transition-colors duration-500" />

                <h3 className="font-display font-bold text-xl text-on-surface mb-3 group-hover:text-secondary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-xs text-on-surface-variant/90 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-6 md:px-16 border-t border-outline-variant/10 w-full bg-transparent">
        <div className="max-w-[1280px] mx-auto w-full">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-2 font-mono">
              <Layers className="w-4 h-4" /> What We Do
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-on-surface mt-2 mb-4">
              Cementitious Dry Mix Products
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed font-sans">
              Green Cast specializes in the manufacturing of high-quality cementitious dry mix products designed for long-lasting structural applications.
            </p>
          </motion.div>

          {/* 6 Grid items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {productsList.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-transparent flex flex-col w-full"
              >
                {/* Product Image */}
                <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-100 relative mb-5">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold tracking-wider font-mono">
                    0{idx + 1}
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex flex-col gap-1.5 px-1">
                  <h3 className="font-display font-bold text-lg text-on-surface group-hover:text-secondary transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed font-sans font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Green Cast? Section */}
      <section className="py-24 px-6 md:px-16 border-t border-outline-variant/10 w-full bg-transparent">
        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Why Choose Us Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-outline-variant/10 bg-zinc-100 lg:order-1 order-2"
          >
            <img
              className="w-full h-full object-cover"
              src="/bento_driveway.png"
              alt="Clean finished concrete pavement installation"
            />
          </motion.div>

          {/* Right: Why Choose Us Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6 lg:order-2 order-1"
          >
            <div className="flex flex-col gap-3">
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest flex items-center gap-2 font-mono">
                <ShieldCheck className="w-4 h-4" /> Why Choose Us
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-on-surface">
                We Believe in Quality Production
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed font-sans">
                We are bound to give quality materials that will help to make quality construction. Some highlights of our commitment include:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              {whyChooseUs.map((pillar, idx) => (
                <div key={pillar.title} className="flex flex-col bg-transparent group">
                  <span className="font-display font-black text-5xl md:text-6xl text-secondary/15 group-hover:text-secondary transition-colors duration-500 mb-1 block font-mono">
                    0{idx + 1}
                  </span>
                  <div className="h-[1px] w-full bg-outline-variant/20 mb-3 group-hover:bg-secondary transition-colors duration-500" />
                  <h4 className="font-bold text-sm md:text-base text-on-surface mb-1.5 group-hover:text-secondary transition-colors duration-300 font-sans">
                    {pillar.title}
                  </h4>
                  <p className="text-xs md:text-sm text-on-surface-variant/90 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Manufacturing & Infrastructure Section */}
      {/* <section className="py-24 px-6 md:px-16 border-t border-outline-variant/10 w-full bg-transparent">
        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">


          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest flex items-center gap-2 font-mono">
              <Factory className="w-4 h-4" /> Infrastructure
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-on-surface">
              Manufacturing & Laboratory Excellence
            </h2>
            <p className="text-sm text-on-surface-variant leading-relaxed font-sans">
              Our state-of-the-art manufacturing plant is located in Chikhli (Gujarat). The facility is equipped with modern machinery and a dedicated quality control laboratory to ensure absolute consistency and grade-purity in every batch.
            </p>
            
            <div className="flex flex-col gap-4 mt-4 p-6 rounded-2xl bg-secondary/5 border border-secondary/10">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-2 font-mono">
                <Award className="w-5 h-5" /> Certified Quality Management
              </span>
              <p className="text-xs text-on-surface-variant/90 leading-relaxed font-sans">
                VVF Industries is certified as an ISO 9001:2015 | 14001:2015 | 45001:2018 compliant company, adhering to the highest standards of quality, environmental responsibility, and occupational safety.
              </p>
              <div className="flex flex-wrap gap-2.5 mt-2">
                {['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'].map((cert) => (
                  <span key={cert} className="text-[10px] font-bold uppercase tracking-wider bg-secondary/15 text-secondary px-3 py-1 rounded-full border border-secondary/20">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          >
            <div className="p-6 rounded-2xl border border-outline-variant/10 bg-transparent flex flex-col gap-3">
              <span className="font-display font-black text-3xl text-secondary/20 block font-mono">01</span>
              <h4 className="font-bold text-sm text-on-surface font-sans">Automated Production Lines</h4>
              <p className="text-xs text-on-surface-variant/90 leading-relaxed font-sans">
                Fully computerized batching and dry-mixing systems eliminate manual formulation errors.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl border border-outline-variant/10 bg-transparent flex flex-col gap-3">
              <span className="font-display font-black text-3xl text-secondary/20 block font-mono">02</span>
              <h4 className="font-bold text-sm text-on-surface font-sans">In-House QC & R&D</h4>
              <p className="text-xs text-on-surface-variant/90 leading-relaxed font-sans">
                Our resident chemists verify initial setting curves, hydration speeds, and compression strength on every run.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-outline-variant/10 bg-transparent flex flex-col gap-3">
              <span className="font-display font-black text-3xl text-secondary/20 block font-mono">03</span>
              <h4 className="font-bold text-sm text-on-surface font-sans">Chikhli Gujarat Facility</h4>
              <p className="text-xs text-on-surface-variant/90 leading-relaxed font-sans">
                Logistically positioned to access pure raw aggregates and distribute products efficiently.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-outline-variant/10 bg-transparent flex flex-col gap-3">
              <span className="font-display font-black text-3xl text-secondary/20 block font-mono">04</span>
              <h4 className="font-bold text-sm text-on-surface font-sans">Tailored Durability</h4>
              <p className="text-xs text-on-surface-variant/90 leading-relaxed font-sans">
                Designed to deliver outstanding structural longevity for buildings, infrastructure, and specialized applicators.
              </p>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Vision Section */}
      <section className="py-24 px-6 md:px-16 border-t border-outline-variant/10 w-full bg-transparent">
        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Vision Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest flex items-center gap-2 font-mono">
              <Eye className="w-4 h-4" /> Our Vision
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-on-surface leading-tight">
              "To provide quality material for quality construction."
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed font-sans">
              We envision a future where every structure is built on a foundation of superior materials, reflecting strength, precision, and sustainability. By consistently delivering high-quality dry mix mortar solutions, we aim to be the preferred partner for builders and developers who refuse to compromise on excellence.
            </p>
            <div className="w-fit">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/15 font-mono">
                Go Green, Build Green
              </span>
            </div>
          </motion.div>

          {/* Right: Vision Illustration Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 aspect-video rounded-3xl overflow-hidden shadow-xl border border-outline-variant/10 bg-zinc-100"
          >
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtK-DixwfNv2M2Vxymq9BwVOAes57wnBvp3qeerixT07lSdu1iG7crTOrJV2R_VQujafm8YaaBLMHY-MNVH-fjpoWq5PQ63UUadZguepSg6mI06fSVmshH2RuFMeCe9dB0h0YSpawZDB_ix0j2Pumeb0tDAJo1OnNbI4Rn583shJrq3YOAD7vPmKbYSUcjgb4pYBokZR9_pnxCZVnz7eZ9kii242UzyXuXnB6ZQSmdjTGLnX949qV6J4PyEoDSVdoxH6n2nvJ7y6k"
              alt="Sustainable modern architecture showing concrete facade"
            />
          </motion.div>
        </div>
      </section>          {/* Core Values Section */}
      <section className="bg-surface-container-low py-24 border-t border-outline-variant/10 w-full overflow-hidden">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <h2 className="font-display font-bold text-3xl md:text-5xl text-on-surface">Our Core Values</h2>
            <p className="text-on-surface-variant text-sm md:text-base font-sans font-medium">The principles driving our excellence.</p>
          </motion.div>
        </div>

        <div className="px-6 md:px-16 max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              title: 'Quality',
              desc: 'Excellence in every product we deliver.',
              icon: ShieldCheck
            },
            {
              title: 'Integrity',
              desc: 'Honesty and transparency in all operations.',
              icon: Gavel
            },
            {
              title: 'Innovation',
              desc: 'Pioneering new technologies for the industry.',
              icon: Lightbulb
            },
            {
              title: 'Sustainability',
              desc: 'Eco-friendly practices for a greener future.',
              icon: Leaf
            },
            {
              title: 'Customer Focus',
              desc: 'Building long-term, trusted relationships.',
              icon: Handshake
            }
          ].map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
                className="bg-white border border-outline-variant/15 p-8 rounded-2xl text-center flex flex-col items-center group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(1,110,33,0.08)] hover:border-secondary/35 transition-all duration-500 relative overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-secondary/40 via-secondary to-secondary/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                
                <div className="w-14 h-14 bg-secondary/5 text-secondary border border-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-sm uppercase mb-3 tracking-wider text-on-surface group-hover:text-secondary transition-colors duration-300">{val.title}</h3>
                <p className="text-on-surface-variant/90 text-xs md:text-sm leading-relaxed font-sans font-medium">{val.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 md:px-16 border-t border-outline-variant/10 w-full bg-transparent">
        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Mission Illustration Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 aspect-video rounded-3xl overflow-hidden shadow-xl border border-outline-variant/10 bg-zinc-100 lg:order-1 order-2"
          >
            <img
              className="w-full h-full object-cover"
              src="/bento_pouring.png"
              alt="Pouring high quality dry concrete mix"
            />
          </motion.div>

          {/* Right: Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col gap-6 lg:order-2 order-1"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest flex items-center gap-2 font-mono">
              <Target className="w-4 h-4" /> Our Mission
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-on-surface leading-tight">
              "To manufacture and deliver superior cement based solutions that meet the evolving needs of our clients."
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed font-sans">
              Our mission is to manufacture and deliver superior cement-based solutions that meet the evolving needs of our clients, providing quality materials to make quality construction a standard. By combining automated manufacturing processes with a dedicated quality control laboratory, we ensure durability, setting consistency, and top-tier performance for all structural applications.
            </p>
          </motion.div>
        </div>
      </section>

   

      {/* Certifications Section */}
      <section className="bg-surface-container-low py-24 border-t border-outline-variant/10 w-full">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2 mb-16 text-center"
          >
            <h2 className="font-display font-bold text-3xl md:text-5xl text-on-surface">Our Certifications</h2>
            <p className="text-on-surface-variant text-sm md:text-base font-sans font-medium">Adhering to global standards of quality, environmental responsibility, and safety.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'ISO 9001:2015',
                desc: 'Quality Management Systems',
                detail: 'Ensures our dry mix production lines utilize rigorous batch-level audits, standardized moisture limits, and consistent hydration ratios for peak strength.',
                icon: Award
              },
              {
                title: 'ISO 14001:2015',
                desc: 'Environmental Management',
                detail: 'Guarantees that VVF manufacturing processes adhere to sustainable eco-friendly raw aggregate sourcing, waste recycling, and carbon footprint reduction.',
                icon: Globe
              },
              {
                title: 'ISO 45001:2018',
                desc: 'Occupational Health & Safety',
                detail: 'Validates our factory operations in Chikhli for providing state-of-the-art occupational health controls, safety systems, and automated machinery shields.',
                icon: ShieldCheck
              }
            ].map((cert, idx) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white p-8 md:p-10 rounded-3xl border border-outline-variant/15 flex flex-col text-left group hover:shadow-[0_20px_40px_-15px_rgba(1,110,33,0.06)] hover:border-secondary/25 transition-all duration-500 relative"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-secondary/5 text-secondary rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-lg text-on-surface group-hover:text-secondary transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] text-secondary font-bold uppercase tracking-wider">
                        {cert.desc}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-on-surface-variant/90 leading-relaxed font-sans font-medium">
                    {cert.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-transparent py-20 w-full">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center md:text-left"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-on-surface">Visionary Leadership</h2>
            <p className="text-on-surface-variant text-sm md:text-base font-sans mt-2">The architects of our corporate strategy.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Julian Thorne',
                role: 'Chief Executive Officer',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0FYhhjtaYwdvl0-E00H27QyxNOHsujjbdFQlEHcC3lbj-plKc47VxCx0vcD-Ro6Iav4oA8IME-JVh-ii5qnKVcsGxmjC6mWYzWZiLuH088QUbt1RoJqQFWSyqb8D-Nw1dg40xw89RhK1Eq8kA1HcnTKRfCcD_5DOgm4i5LsYPaqCq8ZijdfCAjZGJg4aGaGuJR7H3mLg38oVfh1GjewbQ8t6l7UlGGkB3m-5zQlruAY5gFGg16vRLyWuDiTEIlw9LgJj6pLjalxg'
              },
              {
                name: 'Elena Rossi',
                role: 'Head of Design',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChBgwy4UUbGgiplNU9WF8idPF9aYOTlVjiSYn1ytvRX4skiBNJJjAA_57mS6jEiuFD_aUBw45n1ecFYmD5i7BYyeAJuWC8RuFeNKmHvpRhVsgsw524sB7vnA1SNYjf4JM0pBcCDI7E4wLxHlfHkTRzi-t5PhXbU2j_Wcc5GsLDsw1Ml98mlYr5Klk_h3L1wSugYtI7xcOvmW9XDPIpJKXNjtApSvrnAPHTDAyFJCEs91g0zemosW24frW58wymREa9IOBKrbple6g'
              },
              {
                name: 'Dr. Marcus Chen',
                role: 'R&D Director',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYmIvbQ2KRQYyxftrtjVjtjbH_9ahyT5T5wJiCSAJGy5SpsnQAPQX7rt7vQ2HwXbu4DtUeyEqp32feCPdTIqSGAs3KPL609R2WncGWzLjh8mQNIHQV9tljN83JN7QvWybiMcLCR_13GGrIqDbyZbTJiwmKgbmx8MRa-f914aHUyosXqfUhCpStaKZ-KfWWXkiue4harLxyb-JbnLjfeMH3C924XDWyzDTviwTU8HAWAX8ezbAWbJfdlfIcrmnQ4gefFwVArvWBVt8'
              },
              {
                name: 'Sarah Lin',
                role: 'Sustainability Lead',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4c0iZGDxC5DXNL6SuQng1wGwwIq3ZOy_43VNJ0GSC8d4pknO7VzapQRv8Q5IYfiSdykCBu4Lj3Gz-BvqC_eAh-Z8occ24pwG54B-XYBwvHQNF3m-kzql0MVubVQXxSLlb1pEhZ993j63M46XrzQ_CMAaZQd_-I7n-dh0leTFgTqj_kWTKVqBuYiAbt1EaK43JbX_YOX7o37A3My_vRFSyUmcF5e4yggqXvmF7BqS0PK9oQ5pv0rigWqDuP05dkDI_T1zzHJzx9Ik'
              }
            ].map((leader, idx) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group hover:-translate-y-2 transition-all duration-300 text-center md:text-left"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 bg-surface-container shadow-sm group-hover:shadow-xl transition-all duration-300">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    src={leader.image}
                    alt={leader.name}
                  />
                </div>
                <h4 className="font-display font-bold text-sm uppercase text-on-surface tracking-wider">{leader.name}</h4>
                <p className="text-secondary font-sans text-xs uppercase mt-1">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
