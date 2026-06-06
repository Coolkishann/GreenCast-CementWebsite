'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Filter, ShieldCheck, Sparkles, Zap, Brush, Layers } from 'lucide-react';
import SubpageBanner from '@/components/SubpageBanner';

const products = [
  {
    id: 'ready-mix-plaster',
    name: 'Ready Mix Plaster (RMP)',
    category: 'plaster-mortar',
    grade: 'Premium Plaster',
    whiteness: 'M15 Spec',
    strength: 'M15 Grade',
    desc: 'Pre-mixed cement-based plaster designed for high-quality interior and exterior wall coating, offering excellent workability, coverage, and crack resistance.',
    image: '/green-cast-bag.png',
    icon: <Layers className="w-5 h-5" />
  },
  {
    id: 'polymer-mortar',
    name: 'Polymer Mortar (Repair Mortar)',
    category: 'plaster-mortar',
    grade: 'Structural Repair',
    whiteness: '36 N/mm²',
    strength: '36.0 N/mm²',
    desc: 'Dual shrinkage compensated, crack-resistant high performance repair mortar. Easy to apply in complex vertical & overhead column profiles without primer.',
    image: '/green-cast-bag.png',
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    id: 'micro-concrete',
    name: 'Micro Concrete',
    category: 'concrete-grout',
    grade: 'Flowable Grout',
    whiteness: '55 N/mm²',
    strength: '55.0 N/mm²',
    desc: 'Chloride-free, flowable repair micro concrete with excellent base concrete bonding and long working times for reinstatement of large structural sections.',
    image: '/green-cast-bag.png',
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: 'tile-adhesives',
    name: 'Range of Tile Adhesives',
    category: 'adhesives-fillers',
    grade: 'Multiple Variants',
    whiteness: 'IS 15477 Spec',
    strength: 'High Bond',
    desc: 'Single component, high adhesive bond strength tile adhesive. Available variants: TILE FIX GC1, TILE FIX GC2, TILE FIX GC3, and STONE AND HEAVY TILES ADHESIVES.',
    image: '/green-cast-bag.png',
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    id: 'grouting-material',
    name: 'Grouting Material',
    category: 'concrete-grout',
    grade: 'Fluid Anchor',
    whiteness: '60 N/mm²',
    strength: '60.0 N/mm²',
    desc: 'High-flow, non-shrink grouting compound designed for anchoring structural steel, anchor bolts, machinery bases, and general concrete void filling.',
    image: '/green-cast-bag.png',
    icon: <Brush className="w-5 h-5" />
  },
  {
    id: 'block-jointing-mortar',
    name: 'Block Jointing Mortar (BJM)',
    category: 'plaster-mortar',
    grade: 'Thin Joint Mortar',
    whiteness: 'Self-Curing',
    strength: 'High Adhesion',
    desc: 'Self-curing thin-joint mortar for AAC block masonry. Seamless structure prevents water seepage and percolation. Coverage up to 160 sq ft per 40kg bag.',
    image: '/green-cast-bag.png',
    icon: <Layers className="w-5 h-5" />
  },
  {
    id: 'crack-filler-powder',
    name: 'Crack Filler Powder',
    category: 'adhesives-fillers',
    grade: 'Patching Compound',
    whiteness: 'Waterproof',
    strength: 'Non-Shrink',
    desc: 'Water-resistant, non-shrink crack filler powder requiring only water. Perfect for patching and sealing interior and exterior plaster and concrete joint cracks.',
    image: '/green-cast-bag.png',
    icon: <ShieldCheck className="w-5 h-5" />
  }
];

export default function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = [
    { name: 'All Collection', value: 'all' },
    { name: 'Plaster & Mortars', value: 'plaster-mortar' },
    { name: 'Concrete & Grout', value: 'concrete-grout' },
    { name: 'Adhesives & Fillers', value: 'adhesives-fillers' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Header section with premium dark green SubpageBanner */}
      <SubpageBanner
        title="Dry Mix Mortar Solutions"
        subtitle="Explore our advanced range of high-performance plasters, repair mortars, self-curing jointing compounds, and premium tile adhesives."
        category="Our Collection"
        breadcrumbs={[{ name: 'Products' }]}
        bgImage="/products_bg.png"
      />

      {/* Catalog & Filters */}
      <section className="py-16 px-6 md:px-16 max-w-[1280px] mx-auto w-full">
        {/* Filtering Tabs */}
        <div className="flex flex-wrap items-center gap-4 mb-16 border-b border-outline-variant/10 pb-6 w-full">
          <div className="flex items-center gap-2 text-on-surface-variant mr-4">
            <Filter className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wider">Filters:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer ${activeCategory === cat.value
                    ? 'bg-secondary text-on-secondary shadow-md shadow-secondary/15'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container border border-outline-variant/10'
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid (Simplified transparent large cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p, idx) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col bg-transparent overflow-hidden"
              >
                {/* Product Image */}
                <div className="aspect-[4/3] w-full border border-outline-variant/10 rounded-3xl relative overflow-hidden mb-6 bg-zinc-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                </div>

                {/* Info Area (Spacious transparent details layout) */}
                <div className="flex flex-col flex-grow px-2">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-secondary/10 text-secondary border border-secondary/20">
                      {p.grade}
                    </span>
                    <span className="text-[10px] text-on-surface-variant/80 font-bold uppercase tracking-wider flex items-center gap-1">
                      {p.strength}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-on-surface mb-2 group-hover:text-secondary transition-colors duration-300">
                    {p.name}
                  </h3>

                  <span className="text-[10px] uppercase font-bold text-on-surface-variant/70 tracking-widest mb-6 block">
                    Formula category / {p.category}
                  </span>

                  <Link
                    href={`/products/${p.id}`}
                    className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest hover:translate-x-2 transition-transform duration-300 mt-auto"
                  >
                    View Specifications
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
