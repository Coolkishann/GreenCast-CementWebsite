'use client';

import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Check, Award, Layers, Landmark } from 'lucide-react';
import SubpageBanner from '@/components/SubpageBanner';

export default function About() {
  const productsList = [
    'Ready Mix Plaster',
    'Micro Concrete',
    'Polymer (Repair) Mortar',
    'All types of Tile Adhesives',
    'Block Jointing Mortar',
    'Crack Filler Powder'
  ];

  const whyChooseUs = [
    {
      title: '18+ Years of Experience',
      desc: 'Extensive industry knowledge and legacy of dry mix excellence since 2008 in manufacturing.'
    },
    {
      title: 'Pure River Sand Used',
      desc: 'Formulated using only pure river sand for optimal bonding, setting consistency, and durability.'
    },
    {
      title: 'Quality Guaranteed',
      desc: 'Strict quality control checks at every stage, ensuring zero compromises on material strength.'
    },
    {
      title: 'ISO Certified Facility',
      desc: 'Certified compliance with ISO 9001:2015, 14001:2015, and 45001:2018 international standards.'
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
        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: What We Do Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest flex items-center gap-2 font-mono">
                <Layers className="w-4 h-4" /> What We Do
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-on-surface">
                Cementitious Dry Mix Products
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed font-sans">
                Green Cast specializes in the manufacturing of high-quality cementitious dry mix products designed for long-lasting structural applications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              {productsList.map((item, idx) => (
                <div
                  key={item}
                  className="flex flex-col bg-transparent group"
                >
                  <span className="font-display font-black text-4xl text-secondary/15 group-hover:text-secondary transition-colors duration-500 mb-1 block font-mono">
                    0{idx + 1}
                  </span>
                  <div className="h-[1px] w-full bg-outline-variant/20 mb-3 group-hover:bg-secondary transition-colors duration-500" />
                  <span className="text-xs font-bold text-on-surface group-hover:text-secondary transition-colors duration-300 font-sans">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: What We Do Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-outline-variant/10 bg-zinc-100"
          >
            <img
              className="w-full h-full object-cover"
              src="/bento_smoothing.png"
              alt="Applying dry mix mortar smoothing facade"
            />
          </motion.div>
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
            className="lg:col-span-5 aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-outline-variant/10 bg-zinc-100 lg:order-1 order-2"
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
            className="lg:col-span-7 flex flex-col gap-6 lg:order-2 order-1"
          >
            <div className="flex flex-col gap-3">
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest flex items-center gap-2 font-mono">
                <ShieldCheck className="w-4 h-4" /> Why Choose Green Cast?
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-on-surface">
                Our Pillars of Assurance
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              {whyChooseUs.map((pillar, idx) => (
                <div key={pillar.title} className="flex flex-col bg-transparent group">
                  <span className="font-display font-black text-4xl text-secondary/15 group-hover:text-secondary transition-colors duration-500 mb-1 block font-mono">
                    0{idx + 1}
                  </span>
                  <div className="h-[1px] w-full bg-outline-variant/20 mb-3 group-hover:bg-secondary transition-colors duration-500" />
                  <h4 className="font-bold text-xs text-on-surface mb-1.5 group-hover:text-secondary transition-colors duration-300 font-sans">
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] text-on-surface-variant/90 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom tagline statement */}
      <section className="py-24 px-6 md:px-16 border-t border-outline-variant/10 w-full bg-transparent">
        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Vision Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-xl border border-outline-variant/10 bg-zinc-100"
          >
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtK-DixwfNv2M2Vxymq9BwVOAes57wnBvp3qeerixT07lSdu1iG7crTOrJV2R_VQujafm8YaaBLMHY-MNVH-fjpoWq5PQ63UUadZguepSg6mI06fSVmshH2RuFMeCe9dB0h0YSpawZDB_ix0j2Pumeb0tDAJo1OnNbI4Rn583shJrq3YOAD7vPmKbYSUcjgb4pYBokZR9_pnxCZVnz7eZ9kii242UzyXuXnB6ZQSmdjTGLnX949qV6J4PyEoDSVdoxH6n2nvJ7y6k"
              alt="Sustainable modern architecture showing concrete facade"
            />
          </motion.div>

          {/* Vision Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest font-mono">Our Vision</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-on-surface leading-tight">
              "To provide quality material for quality construction."
            </h2>
            <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-sans">
              At VVF Industries, we believe that sustainable building practices do not require compromising on material strength or structural expression. By manufacturing premium quality cementitious dry mix products under eco-conscious guidelines, we enable our partners to construct structures that are both durable and environmentally sound.
            </p>
            <div className="w-fit">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/15">
                Go Green, Build Green
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
