'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowDownToLine, Send, CheckCircle, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SubpageBanner from '@/components/SubpageBanner';

const productDb: Record<string, {
  name: string;
  grade: string;
  whiteness: string;
  strength: string;
  settingTime: string;
  desc: string;
  image: string;
  certifications: string[];
  specs: { label: string; value: string }[];
  applications: { title: string; image: string }[];
}> = {
  'ready-mix-plaster': {
    name: 'Ready Mix Plaster (RMP)',
    grade: 'Premium Plaster Grade',
    whiteness: 'N/A',
    strength: 'M15 Grade',
    settingTime: '90 minutes',
    desc: 'VVF Industries Ready Mix Plaster (RMP) is a dry pre-mixed cement-based plaster designed for high-performance interior and exterior wall coating. Made using pure river sand, Portland cement, and premium polymers, it ensures excellent workability, durability, and a highly smooth finish that saves on-site labor and time.',
    image: '/green-cast-bag.png',
    certifications: ['ISO 9001 Compliant', 'Quality Lab Verified', 'Eco-Friendly Sand Aggregate'],
    specs: [
      { label: 'Base Material', value: 'Portland Cement & Pure River Sand' },
      { label: 'Water Requirement', value: '18% - 20% by weight' },
      { label: 'Compressive Strength', value: '> 10 N/mm² (28 Days)' },
      { label: 'Application Thickness', value: '8mm - 15mm' },
      { label: 'Coverage (at 12mm)', value: '12 - 15 sq ft per 40kg bag' },
      { label: 'Pot Life', value: '90 mins' }
    ],
    applications: [
      { title: 'Exterior Brick & Block Masonry Plastering', image: '/bento_smoothing.png' },
      { title: 'Interior Smooth Wall Finishing & Ceilings', image: '/bento_trowel.png' }
    ]
  },
  'polymer-mortar': {
    name: 'Polymer Mortar (Repair Mortar)',
    grade: 'Structural Repair Grade',
    whiteness: 'N/A',
    strength: '36 N/mm²',
    settingTime: '60 minutes',
    desc: 'High-performance, dual shrinkage compensated, polymer-modified structural repair mortar. Specifically formulated for concrete reinstatement in columns, beams, and overhead locations. Highly sprayable with excellent vertical sag resistance and high adhesion without bonding primers.',
    image: '/green-cast-bag.png',
    certifications: ['EN 1504-3 Class R3', 'Dual Shrinkage Compensated', 'ISO 9001 Certified'],
    specs: [
      { label: 'Compressive Strength', value: '36 N/mm² (28 Days)' },
      { label: 'Tensile Bond Strength', value: '> 2.0 N/mm²' },
      { label: 'Fresh Wet Density', value: 'approx. 2.1 kg/litre' },
      { label: 'Minimum Application Depth', value: '12mm' },
      { label: 'Maximum Application Depth', value: '50mm' },
      { label: 'Flexural Strength', value: '> 6.0 N/mm²' }
    ],
    applications: [
      { title: 'Overhead Concrete Beam & Slab Reconstruction', image: '/bento_smoothing.png' },
      { title: 'Structural Column Repair and Jacketing', image: '/bento_pouring.png' }
    ]
  },
  'micro-concrete': {
    name: 'Micro Concrete',
    grade: 'Flowable Non-Shrink Concrete',
    whiteness: 'N/A',
    strength: '55 N/mm²',
    settingTime: '120 minutes',
    desc: 'Advanced, flowable, non-shrink, chloride-free micro concrete designed for structural reinstatement of beams, slabs, and columns where access is restricted. Its high fluid flow guarantees complete compaction without vibration while ensuring outstanding bonding to base concrete.',
    image: '/green-cast-bag.png',
    certifications: ['Chloride Free Formula', 'Zero Shrinkage Guarantee', 'ISO 9001 Quality'],
    specs: [
      { label: 'Compressive Strength (1 Day)', value: '> 20 N/mm²' },
      { label: 'Compressive Strength (28 Day)', value: '> 55 N/mm²' },
      { label: 'Flow Spread Diameter', value: '> 250mm' },
      { label: 'Water Requirement', value: '12% - 14% by weight' },
      { label: 'Young Modulus', value: '28 kN/mm²' }
    ],
    applications: [
      { title: 'Reinstatement of Large Slabs & Bridge Piers', image: '/bento_driveway.png' },
      { title: 'High-Strength Concrete Columns Jacketing', image: '/bento_pouring.png' }
    ]
  },
  'tile-adhesives': {
    name: 'Range of Tile Adhesives',
    grade: 'C1 / C2 / C3 Standards',
    whiteness: 'N/A',
    strength: 'High Bond Strength',
    settingTime: '45 minutes',
    desc: 'Our single-component, ready-to-use premium tile adhesives cover Vitrified, Ceramic, Stone, and heavy tiles installations. Formulated to provide exceptional bonding strength, excellent workability, and zero slip features. Available in variants: TILE FIX GC1, TILE FIX GC2, TILE FIX GC3, and STONE AND HEAVY TILES ADHESIVES.',
    image: '/green-cast-bag.png',
    certifications: ['IS 15477 Compliance', 'Low Shrinkage Formula', 'Single Component Ready Use'],
    specs: [
      { label: 'Available Variants', value: 'GC1, GC2, GC3, Stone & Heavy' },
      { label: 'Tensile Adhesion Strength', value: '> 1.2 N/mm²' },
      { label: 'Open Time', value: 'approx. 20 mins' },
      { label: 'Adjustability Time', value: 'approx. 15 mins' },
      { label: 'Grouting Ready Time', value: 'after 24 hours' }
    ],
    applications: [
      { title: 'Interior Vitrified Wall & Floor Tiling', image: '/bento_trowel.png' },
      { title: 'Heavy Granite & Exterior Stone Facades', image: '/bento_driveway.png' }
    ]
  },
  'grouting-material': {
    name: 'Grouting Material',
    grade: 'Non-Shrink Anchoring Grout',
    whiteness: 'N/A',
    strength: '60 N/mm²',
    settingTime: '100 minutes',
    desc: 'High-flow, non-shrink cementitious grout designed for anchor bolt grouting, structural steel plate column bases, heavy machinery foundations, and filling large concrete voids. Formulated without metallic aggregates or chlorides, ensuring non-staining durability.',
    image: '/green-cast-bag.png',
    certifications: ['ASTM C1107 Grade C', 'Non-Corrosive Formula', 'ISO 9001 Quality'],
    specs: [
      { label: 'Compressive Strength (1 Day)', value: '22 N/mm²' },
      { label: 'Compressive Strength (28 Day)', value: '60 N/mm²' },
      { label: 'Expansion Range', value: '0.2% - 2.0% volume' },
      { label: 'Water Ratio', value: '16% - 18% by weight' },
      { label: 'Yield per 25kg Bag', value: 'approx. 13.5 litres' }
    ],
    applications: [
      { title: 'Heavy Rotary Machinery Foundation Grouting', image: '/bento_smoothing.png' },
      { title: 'Structural Anchor Bolt & Precast Node Filling', image: '/bento_trowel.png' }
    ]
  },
  'block-jointing-mortar': {
    name: 'Block Jointing Mortar (BJM)',
    grade: 'Thin-Joint Adhesive Mortar',
    whiteness: 'N/A',
    strength: 'High Adhesion Strength',
    settingTime: '75 minutes',
    desc: 'Self-curing thin-joint block jointing mortar designed for AAC blocks, concrete blocks, clay bricks, and fly ash blocks. The 2-3mm joints ensure a completely seamless wall structure that eliminates water percolation, seepage, and thermal bridging.',
    image: '/green-cast-bag.png',
    certifications: ['ASTM C1660 Thin Joint Spec', 'Self-Curing Formula', 'ISO 14001 Compliant'],
    specs: [
      { label: 'Dry Density', value: 'approx. 1.6 kg/litre' },
      { label: 'Joint Thickness', value: '2mm - 3mm' },
      { label: 'AAC Wall Coverage (4")', value: '140 - 160 sq ft per 40kg bag' },
      { label: 'AAC Wall Coverage (6")', value: '85 - 90 sq ft per 40kg bag' },
      { label: 'Tensile Splitting Strength', value: '> 0.48 N/mm²' }
    ],
    applications: [
      { title: 'AAC Block Masonry Wall Installations', image: '/bento_smoothing.png' },
      { title: 'High-Rise Clay & Concrete Block Walls', image: '/bento_pouring.png' }
    ]
  },
  'crack-filler-powder': {
    name: 'Crack Filler Powder',
    grade: 'Waterproof Patching Compound',
    whiteness: 'N/A',
    strength: 'Non-Shrink Waterproof',
    settingTime: '30 minutes',
    desc: 'Easy-to-use, non-shrink, waterproofing cementitious crack filler. Excellent for sealing plaster and concrete wall joints, fissures, and surface cracks on both interior and exterior substrates. Handles wall micro-movements without debonding.',
    image: '/green-cast-bag.png',
    certifications: ['Waterproof Joint Spec', 'Zero Shrinkage Guarantee', 'ISO 9001 Quality'],
    specs: [
      { label: 'Water Mixing Ratio', value: '3:1 by volume' },
      { label: 'Full Drying Time', value: '2 - 3 hours' },
      { label: 'Maximum Crack Width', value: 'up to 5mm' },
      { label: 'Paintability', value: 'Compatible with all topcoats' },
      { label: 'Shrinkage Value', value: '0% Nil' }
    ],
    applications: [
      { title: 'Sealing Exterior Structural Plaster Cracks', image: '/bento_smoothing.png' },
      { title: 'Filling Internal Concrete Expansion Joins', image: '/bento_pouring.png' }
    ]
  }
};

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = productDb[resolvedParams.id];
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  if (!product) {
    notFound();
  }

  const handleRequestSample = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setModalOpen(false);
        setFormSubmitted(false);
        setEmail('');
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col w-full bg-transparent">
      {/* Subpage Banner Header */}
      <SubpageBanner
        title={product.name}
        subtitle={product.desc}
        category="Product Details"
        breadcrumbs={[{ name: 'Products', href: '/products' }, { name: product.name }]}
        bgImage="/products_bg.png"
      />

      {/* Main Product Showcase - Borderless and transparent */}
      <section className="py-16 px-6 md:px-16 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full bg-transparent">
        {/* Product Isolated Image */}
        <div className="lg:col-span-6 aspect-square p-12 bg-radial from-white to-surface-container rounded-3xl border border-outline-variant/10 flex items-center justify-center relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[85%] max-w-[85%] object-contain drop-shadow-2xl hover:scale-102 transition-transform duration-500 z-10"
          />
          <div className="absolute w-64 h-64 rounded-full bg-secondary/5 blur-2xl" />
        </div>

        {/* Product Details info */}
        <div className="lg:col-span-6 flex flex-col gap-8 bg-transparent">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary/10 text-secondary border border-secondary/20">
              {product.grade}
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-on-surface">
            {product.name}
          </h2>

          <p className="text-base text-on-surface-variant leading-relaxed">
            {product.desc}
          </p>

          {/* Key metrics grid */}
          <div className="grid grid-cols-3 gap-6 py-6 border-y border-outline-variant/10">
            <div>
              <span className="text-[10px] uppercase font-bold text-on-surface-variant/75 block mb-1">Product Grade</span>
              <span className="text-xl font-bold text-secondary">{product.grade}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-on-surface-variant/75 block mb-1">Setting Time</span>
              <span className="text-xl font-bold text-on-surface">{product.settingTime}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-on-surface-variant/75 block mb-1">28-day Strength</span>
              <span className="text-xl font-bold text-on-surface">{product.strength}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-md shadow-secondary/15 flex items-center gap-2 cursor-pointer"
            >
              Request Sample
            </button>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); alert("Spec sheet downloaded successfully!"); }}
              className="bg-transparent border border-secondary text-secondary px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-secondary/5 transition-all active:scale-95 flex items-center gap-2"
            >
              Download Specs
              <ArrowDownToLine className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Technical Specifications Table - Borderless and transparent */}
      <section className="py-20 px-6 md:px-16 w-full bg-transparent border-t border-outline-variant/10">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest block mb-2">Technical Data</span>
            <h2 className="font-display font-bold text-2xl md:text-4xl tracking-tight text-on-surface">Material Specifications</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
            {/* Specs Table */}
            <div className="lg:col-span-8 overflow-hidden rounded-2xl border border-outline-variant/10 bg-transparent">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-outline-variant/15 text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    <th className="px-6 py-4">Property</th>
                    <th className="px-6 py-4">Target Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10 text-on-surface-variant">
                  {product.specs.map((spec) => (
                    <tr key={spec.label} className="hover:bg-surface-container/30 transition-colors">
                      <td className="px-6 py-4 font-semibold">{spec.label}</td>
                      <td className="px-6 py-4 font-mono font-medium text-on-surface">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* QA Certifications */}
            <div className="lg:col-span-4 flex flex-col gap-6 bg-transparent p-8 rounded-2xl border border-outline-variant/10 h-fit">
              <h3 className="font-bold text-lg text-on-surface flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-secondary" /> Quality Assurance
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Green Cast Cement production follows stringent micro-monitoring guidelines to ensure color stability, consistent setting curves, and peak structural capacity.
              </p>
              <div className="flex flex-col gap-3 mt-2">
                {product.certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-3 p-3 bg-surface-container/40 rounded-xl border border-outline-variant/10 text-xs font-semibold text-on-surface">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unbound Applications Gallery */}
      <section className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto w-full border-t border-outline-variant/10 bg-transparent">
        <div className="mb-16 text-center max-w-xl mx-auto">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest block mb-3">Inspiration</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-on-surface">Unbound Applications</h2>
          <p className="text-sm text-on-surface-variant/80 mt-2">Discover how the unique whiteness and performance profile of {product.name} are manifested in global architecture.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {product.applications.map((app, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative aspect-video rounded-3xl overflow-hidden border border-outline-variant/10 bg-zinc-50"
            >
              <img
                src={app.image}
                alt={app.title}
                className="absolute inset-0 w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="text-[10px] uppercase font-bold tracking-widest text-secondary-container mb-1 block font-mono">Featured Project</span>
                <h3 className="text-lg md:text-xl font-bold tracking-tight">{app.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Request Sample Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-surface p-8 rounded-3xl border border-outline-variant/10 shadow-2xl flex flex-col z-10 text-on-surface"
            >
              <h3 className="font-bold text-2xl text-on-surface mb-2 font-display">Request Material Sample</h3>
              <p className="text-xs text-on-surface-variant mb-6 font-sans">Specify your email and project details. Our technical team will ship a sample binder container to your address.</p>

              {formSubmitted ? (
                <div className="py-8 flex flex-col items-center gap-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface font-display">Request Logged</h4>
                    <p className="text-xs text-on-surface-variant mt-1 font-sans">Sample tracking details will be emailed shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleRequestSample} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Business Email</label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. architect@firm.com"
                      className="px-4 py-3 rounded-xl border border-outline-variant/20 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-sm bg-surface-container/50"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Project Scale</label>
                    <select className="px-4 py-3 rounded-xl border border-outline-variant/20 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-sm bg-surface-container/50">
                      <option>Under 10,000 sq ft</option>
                      <option>10,000 - 50,000 sq ft</option>
                      <option>Over 50,000 sq ft</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-2 bg-secondary hover:bg-secondary/90 text-on-secondary py-3.5 rounded-xl font-semibold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-secondary/15 cursor-pointer"
                  >
                    Send Request
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
