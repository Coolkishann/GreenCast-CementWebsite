'use client';

import { motion } from 'framer-motion';
import { Sparkles, Building, Handshake, Compass, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import SubpageBanner from '@/components/SubpageBanner';

const caseStudies = [
  {
    title: 'The Quartz Pavilion',
    partner: 'Studio Vance Architects',
    material: 'Green Cast Ready Mix Plaster',
    desc: 'Designed as a monolith of strength, the Quartz Pavilion features massive precast concrete sections. Studio Vance required a high-performance material to prevent thermal absorption while preserving a clinical, durable structural facade. Green Cast Ready Mix Plaster delivered the necessary structural rating and bonding capacity.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnrpoqBfRJcXjIxLGzoTKVTiJT1zmZcJASgeXpPOLW_2SlNp_ytyltIbJalE3FPVj_w56rxwxy66jsYR1srH7MrkZ6_RR27nKvZ0wWPO0L4FmSG2MPnS5qdEJEBB7qTU43s8rql1hxYih8XRtyKxz9Hi_bG3qtLFhmxSQo19CYjKfCC5KzQh6HMKVvNh1UObOXUx4YqevI54jHMWbGS9b9lCEhHiE_eZgnFOi7WVf1J_3zkNFG6YpsH4wOSLrluaq6RIiH0RjwygE',
    stats: [
      { label: 'Surface Area', value: '45,000 sq ft' },
      { label: 'Bonding Rating', value: 'High Adhesion' },
      { label: 'Compressive Rating', value: '58 MPa' }
    ]
  },
  {
    title: 'The Eco-Villa Series',
    partner: 'Rostova Design Group',
    material: 'Green Cast Micro Concrete',
    desc: 'Nestled in a dense forest context, this luxury residential series aims for absolute ecological integration. Rostova Group sought a structural solution with a low carbon footprint that would not compromise the visual serenity of the minimalist concrete forms. Using Green Cast Micro Concrete, the project reduced structural emissions by 30% while maintaining clean surfaces.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADcKVMu4BbB69oLYVmFd-9OMWUKBRSwKTyf7RJyHtJagtqDh3lG-UBuXjYnAeN98ZtPOo2ifzsMIHveer0QHoRLfQlOufPDIlLM9Y-JjAuUq3eQ4cZZ66d6u1_NDOpbTxBWhVFXwJQJ09tSKNI9vp4pZ9JoxsnUq55GkAUm47Z-BNdFZ5oMFOilLZQO7gm8GM2XbLWUq2SXisB7Kesn6h2AjZ_vMlXwI2QIKs_Nrg0f_ij7IMKrNoCL5Bq0ecW1SQcrw-PTMqLYo8',
    stats: [
      { label: 'CO2 Reduction', value: '30% Less' },
      { label: 'LEED Contribution', value: 'Gold Target' },
      { label: 'Hydration Class', value: 'Low Heat' }
    ]
  },
  {
    title: 'Metropolitan Art Center',
    partner: 'Chen & Partners Engineers',
    material: 'Green Cast Polymer Mortar',
    desc: 'Characterized by complex double-curved structural shells, the Art Center required a customized repair mortar. Chen & Partners relied on Green Cast Polymer Mortar for its structural polymer profile, permitting smooth anchoring over reinforcement meshes. The resulting facade displays seamless flowing curves that resist micro-cracking and water absorption.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH1mG9JNUd6lQ8RQpNCkbXA3cnFBigqoORlqHOrAxDmttWRS15JDq8yIC7NyXGZ2TbuADS6yjQctw__dsTIH-AlyElGL66dCpTje6tNQwCcgx9qRIa1l6lPVBYSIv727UhEK2XfAdqWIUDJAwgO5xR844VQxHhWK_apuZ9oVHOq6AfJE0PWMFSP6AF4iPKA56Ws3dshPqG-vz2EvCy0jiZ6ISFNJJDMH3pPlkyxf85ca6Ie4CWgZmINdU23YSlJbcqXWEnx11oZOw',
    stats: [
      { label: 'Curvature Radius', value: '1.8m min' },
      { label: 'Bond strength', value: '> 2.0 N/mm²' },
      { label: 'Tensile Capacity', value: 'High Flexural' }
    ]
  }
];

export default function Clients() {
  return (
    <div className="flex flex-col w-full bg-transparent">
      {/* Header section with premium dark SubpageBanner */}
      <SubpageBanner
        title="Visionary Collaborations"
        subtitle="Partnering with global architectural leaders and structural engineering firms to build the landmarks of tomorrow."
        category="Our Network"
        breadcrumbs={[{ name: 'Clients' }]}
        bgImage="/clients_bg.png"
      />

      {/* Partnership Record Summary (Transparent cards) */}
      <section className="py-20 px-6 md:px-16 max-w-[1280px] mx-auto w-full bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-center md:text-left">
          <div className="flex flex-col gap-3 p-6 bg-transparent rounded-2xl border border-outline-variant/10">
            <div className="p-3 bg-secondary/10 rounded-xl text-secondary w-fit mx-auto md:mx-0">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-on-surface">Collaborative Innovation</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed font-sans">
              We work directly with design studios to develop customized chemical formulas, adapting setting curves and grain dimensions to spec requirements.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-6 bg-transparent rounded-2xl border border-outline-variant/10">
            <div className="p-3 bg-secondary/10 rounded-xl text-secondary w-fit mx-auto md:mx-0">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-on-surface">Global Scale Coverage</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed font-sans">
              From museum complexes to low-emission residential districts, our supply chains guarantee grade-consistent clinker distribution across multiple continents.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-6 bg-transparent rounded-2xl border border-outline-variant/10">
            <div className="p-3 bg-secondary/10 rounded-xl text-secondary w-fit mx-auto md:mx-0">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-on-surface">Certified Benchmarks</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed font-sans">
              Every shipment is audited to ensure exact compliance with international ASTM, EN, and ISO structural standards, securing building approvals.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Showcase - Transparent container */}
      <section className="py-16 bg-transparent border-t border-outline-variant/10 w-full">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 w-full flex flex-col gap-24">
          <div className="text-center max-w-xl mx-auto mb-4">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest block mb-2">Featured Projects</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-on-surface">Case Studies in Purity</h2>
          </div>

          {caseStudies.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={project.title} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                {/* Image panel */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-6 aspect-video rounded-3xl overflow-hidden shadow-xl border border-outline-variant/10 bg-zinc-100 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[5%] hover:grayscale-0 transition-all duration-700 brightness-95"
                  />
                </motion.div>

                {/* Content details */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-6 flex flex-col gap-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-secondary/10 text-secondary border border-secondary/20">
                      {project.material}
                    </span>
                    <span className="text-xs font-semibold text-on-surface-variant/80 uppercase tracking-wider font-mono">
                      with {project.partner}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-on-surface">
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Project specific stats */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-outline-variant/10 mt-2">
                    {project.stats.map((s) => (
                      <div key={s.label}>
                        <span className="text-[10px] uppercase font-bold text-on-surface-variant/75 block mb-0.5 font-mono">{s.label}</span>
                        <span className="text-sm font-semibold text-on-surface">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Architects Marquee Callout */}
      <section className="py-24 px-6 md:px-16 bg-transparent border-t border-outline-variant/10 text-center w-full">
        <div className="max-w-[1280px] mx-auto w-full">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest block mb-4">Partner Network</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-on-surface mb-8">
            Let's Construct Serenity Together
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto leading-relaxed text-sm md:text-base mb-10 font-sans">
            We collaborate with developers and architectural offices from initial structural sketches to sample specifications and bulk batch deliveries.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-secondary/15 active:scale-95"
          >
            Start Partner Inquiry
            <ArrowUpRight className="w-4.5 h-4.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
