'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Filter, ShieldCheck, Sparkles, Zap, Brush, Layers } from 'lucide-react';
import SubpageBanner from '@/components/SubpageBanner';

const products = [
  {
    id: 'superior-white',
    name: 'Green Cast Superior White',
    category: 'construction',
    grade: '52.5N Grade',
    whiteness: 'Hunter 94',
    strength: '52.5 MPa',
    desc: 'Our flagship ultra-high purity cement, specifically engineered for load-bearing architectural concrete, iconic monuments, and white structural columns.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0jVmotF2bBiWNB4YHJmaepiBqaV16iH-Y-vQPCEpDy02OymuT4DJhSico36zYbOQhwVYo3SWl9pN1Nlp_APEyiZdJ6loa7yu2-sWfXktZBpzIHA1xHh-UAeBLPbfhVCKuDR84_9hmwiO3zpKZlXKnxOgWIWLw21Hydck-nXSbGgXcEgp5DPXIL-ls1phiPKnLkcETa85iI4Awmz_23-CYYj1qU0XxLnz82ylILb9XEGxbQ0EcL28olQ4iNwl0O8DSNCJQo2vQoas',
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    id: 'decorative-white',
    name: 'Green Cast Decorative White',
    category: 'decorative',
    grade: 'Ultra-Fine Finishing',
    whiteness: 'Hunter 96',
    strength: '32.5 MPa',
    desc: 'An ultra-fine clinker blend designed for interior design applications, including terrazzo tiles, polished floors, white plasters, and architectural joints.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClYJ4kw1dg8xWbo59yedJlBWjYLywd2kkDUV-7phLpzn2Xu-n_VIXSljGDFuTSLZ469-HD3Lkinyj0r1ZklokgWTpjS9SMIoNZkQO95hhfGBe_jCyNL8BiQPVjw0C8QmA7Ftt9Jpn8grnMw3Y1Zi3L778L_DAOdopT8_ErppueVS0AdDqB8-jnRULkrIwddIRi5kom8VZ4EjZB5KD_lYSAMYhewwza5hMdajn4klMbHYFuFcuX5RGlVIxDeoTYTu6-pcpplxqNPJI',
    icon: <Brush className="w-5 h-5" />
  },
  {
    id: 'industrial-grade',
    name: 'Green Cast Industrial Grade',
    category: 'industrial',
    grade: 'Bulk Structural Spec',
    whiteness: 'Hunter 90',
    strength: '42.5 MPa',
    desc: 'Cost-effective high-whiteness solution for large-scale precast plants, road curbs, glass-fiber reinforced concrete (GRC), and decorative panel facades.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2PM2bo3V6CCFsoZO1R9Y3B1W1hl9d4cnLYyk4uw94NYoz6XG7aTrXPEIuA66SqbPnYQ1Vm1LFrShV4W85C09cJ7appTJhUE6EeucPCEBCd80O0zQ5m1gI5xX66Oeic7iuJxWDof7J8r7TmRR6yI8Uf43VmUJnD3wvyodVHM3FVrpMr1LX2xhH5iemGK4ZKGG7lToxDPX2fWP3DnlRq81Z3YZ3L9IEsdECy6V_xAMcKlLQ9l-PZh1BJWwMGGNAt_mXlwPySDUVdjU',
    icon: <Layers className="w-5 h-5" />
  },
  {
    id: 'quick-set',
    name: 'Green Cast Quick Set',
    category: 'construction',
    grade: 'Rapid Setting Spec',
    whiteness: 'Hunter 92',
    strength: '42.5R Grade',
    desc: 'Formulated with accelerators to reduce demolding and setting times. Perfect for fast-track architectural structures and cold-weather construction projects.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9H37_RVHCUrwNJGralKzyOEFxfPtChkcg3A8tdiK3euaeHah1XMyqxzZCXfnGJGHQ_wegMI5CwcJtYd4MxBgjaK3ChC8p9fP80L9ogQghtKEmIz55Us_vgFooVw9uq0x1OL9u2dog4lQj6hCl1GI28QW_hE41_9qlN5rJ4DJl1x4goN4hzm6h1M3juBmQz08AScrs1RPkJ2qkYF0RNaMjJyo0tLZZwJVeessdB_KsGKtFecevUx0zzLZTu0VDOesJ_qHK_rKAPak',
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: 'sculpt-grade',
    name: 'Green Cast Sculpt Grade',
    category: 'decorative',
    grade: 'Fine Molding Blend',
    whiteness: 'Hunter 98',
    strength: '22.5 MPa',
    desc: 'Our highest whiteness product, milled to an extremely fine grade to support complex textures, sculptures, and detailed stucco moldings without shrinking.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZc8XZBBvTP25Rz0vntURDWx8Ff_s9KNjqOD9A3ddepZcQynWAUHDLbT7HFbJTQykvU7J2JU_aJfMtRA1N9QeYQAsIiQprh-VWrN9eoiAcJHFa1DC_7bSl3-4dh5i6qvU5iZvP0Xb3wwjdCagIQfU4aKwncJefLHxVNLnEHy2tss8xVcFksOyM7xIDnzUw18oGJ1NOnTroZEOxKvwp_l_1xDv2wo7tlXr5ejs5NHooYR7Z4g-99nNoji-pDxke099XwR-7SfHJorI',
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
    { name: 'Construction', value: 'construction' },
    { name: 'Decorative Finish', value: 'decorative' },
    { name: 'Industrial Use', value: 'industrial' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Header section with premium dark green SubpageBanner */}
      <SubpageBanner
        title="The White Collection"
        subtitle="Discover our premium range of high-purity, structural white cement products. Engineered for architects and developers who demand both form and function."
        category="Our Solutions"
        breadcrumbs={[{ name: 'Products' }]}
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
                className={`px-5 py-2.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.value
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
                {/* Product Image inside a radial-gradient custom background card */}
                <div className="aspect-[4/3] w-full p-8 flex items-center justify-center bg-radial from-white to-surface-container border border-outline-variant/10 rounded-3xl relative overflow-hidden mb-6">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="max-h-[85%] max-w-[85%] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 z-10"
                  />
                  {/* Subtle decorative background circle */}
                  <div className="absolute w-48 h-48 rounded-full bg-secondary/5 blur-2xl group-hover:bg-secondary/10 transition-colors duration-500" />
                </div>

                {/* Info Area (Spacious transparent details layout) */}
                <div className="flex flex-col flex-grow px-2">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-secondary/10 text-secondary border border-secondary/20">
                      {p.grade}
                    </span>
                    <span className="text-[10px] text-on-surface-variant/80 font-semibold uppercase tracking-wider flex items-center gap-1">
                      {p.whiteness}
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
