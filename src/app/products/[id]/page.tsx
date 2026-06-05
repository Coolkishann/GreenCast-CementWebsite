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
  'superior-white': {
    name: 'Green Cast Superior White',
    grade: '52.5N Grade',
    whiteness: 'Hunter 94',
    strength: '58.5 MPa',
    settingTime: '110 minutes',
    desc: 'Green Cast Superior White is our flagship structural cement. Engineered for prominent load-bearing concrete panels and high-integrity architectural columns, it provides maximum light reflection and pristine visual clarity.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0jVmotF2bBiWNB4YHJmaepiBqaV16iH-Y-vQPCEpDy02OymuT4DJhSico36zYbOQhwVYo3SWl9pN1Nlp_APEyiZdJ6loa7yu2-sWfXktZBpzIHA1xHh-UAeBLPbfhVCKuDR84_9hmwiO3zpKZlXKnxOgWIWLw21Hydck-nXSbGgXcEgp5DPXIL-ls1phiPKnLkcETa85iI4Awmz_23-CYYj1qU0XxLnz82ylILb9XEGxbQ0EcL28olQ4iNwl0O8DSNCJQo2vQoas',
    certifications: ['ASTM C150 Type I', 'ISO 9001 Quality', 'ISO 14001 Eco'],
    specs: [
      { label: 'Insoluble Residue', value: '< 0.12%' },
      { label: 'Loss on Ignition (LOI)', value: '< 1.4%' },
      { label: 'Specific Surface (Blaine)', value: '410 m²/kg' },
      { label: 'Initial Setting Time', value: '110 mins' },
      { label: 'Final Setting Time', value: '175 mins' },
      { label: '2-Day Strength', value: '26.0 MPa' },
      { label: '28-Day Strength', value: '58.5 MPa' },
    ],
    applications: [
      { title: 'Futuristic Museum Facades', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUUt46qt7JmIFPdXhQYAv7aoSksSSb7fbFW8NGGBNuX2whdTXlcSq3lWwGvvU96hyUGwjBDzzcz48olEP0Hk3B0IUXVvrVJ9d8RtftieWwDH3bRLs5FWvSHbgoGz6ZNI3b1Bga8ikrgZHhBivBFmWIslKe1TOyKupSNRE1P3ngQu5zkaowzwOTwxn8DzSpoBgrdBWq63noTnXvjE1a3JxafjrfhoXd4xjMJiEPBrtLuhHI6Oup2oy9TYhhHZOyXiZcp53vKP5TSPY' },
      { title: 'Geometric Structural Facades', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtK-DixwfNv2M2Vxymq9BwVOAes57wnBvp3qeerixT07lSdu1iG7crTOrJV2R_VQujafm8YaaBLMHY-MNVH-fjpoWq5PQ63UUadZguepSg6mI06fSVmshH2RuFMeCe9dB0h0YSpawZDB_ix0j2Pumeb0tDAJo1OnNbI4Rn583shJrq3YOAD7vPmKbYSUcjgb4pYBokZR9_pnxCZVnz7eZ9kii242UzyXuXnB6ZQSmdjTGLnX949qV6J4PyEoDSVdoxH6n2nvJ7y6k' }
    ]
  },
  'decorative-white': {
    name: 'Green Cast Decorative White',
    grade: 'Ultra-Fine Finishing',
    whiteness: 'Hunter 96',
    strength: '36.2 MPa',
    settingTime: '130 minutes',
    desc: 'Formulated for interior design accents, terrazzo tile grout, and decorative overlays, Green Cast Decorative White features high reflectivity and a velvet-smooth finish that works perfectly in modern luxury spaces.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClYJ4kw1dg8xWbo59yedJlBWjYLywd2kkDUV-7phLpzn2Xu-n_VIXSljGDFuTSLZ469-HD3Lkinyj0r1ZklokgWTpjS9SMIoNZkQO95hhfGBe_jCyNL8BiQPVjw0C8QmA7Ftt9Jpn8grnMw3Y1Zi3L778L_DAOdopT8_ErppueVS0AdDqB8-jnRULkrIwddIRi5kom8VZ4EjZB5KD_lYSAMYhewwza5hMdajn4klMbHYFuFcuX5RGlVIxDeoTYTu6-pcpplxqNPJI',
    certifications: ['EN 197-1 CEM I', 'ISO 9001 Quality', 'ISO 50001 Energy'],
    specs: [
      { label: 'Insoluble Residue', value: '< 0.08%' },
      { label: 'Loss on Ignition (LOI)', value: '< 1.1%' },
      { label: 'Specific Surface (Blaine)', value: '450 m²/kg' },
      { label: 'Initial Setting Time', value: '130 mins' },
      { label: 'Final Setting Time', value: '200 mins' },
      { label: '2-Day Strength', value: '14.5 MPa' },
      { label: '28-Day Strength', value: '36.2 MPa' },
    ],
    applications: [
      { title: 'Lobby Floating Staircases', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyf22ZcOdDa0ko47Eh-p2OJsBIF1b9qYRHLeVwNQ8zPkC0Y1BWbOHkAvMdzjQd6dWY4hXgHgm0sOUcpoZh95PW5OiBnBBhNipkviMtbBaZeAWREUJDEM7Rue53-CdmXF_kppCWatQbmo59xHlSYgICmYWRENL_oSd4h3J4gpCXlys8Ojm3DM0mKIszSCQBSA002THmMWd4k3TK46Vt3iADCQNYp7fEnmYyohH2KyEMWjEPGDPsQuC6zsPCuLGtadAapAqD_-c7LNI' },
      { title: 'Polished Flooring & Interiors', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxAMpEfscc0mt6wPFAmstxHCd1MWr_t0UzRZy6uCri6pWsHbi4ncLESQ3rndKoxxGoFqSOJ2cynh6gwRdelG3KKla8NDFgPao_q9SxpLCQlL6TFr7eIOp-l247QfGdJ-fGPuVp4X6_rXs8wE4kdKNEUfbikwmQI6E3tBvw4Mh0hGiw2dq4nJlxQNw493a3L0tsfq4sd4hsz1Wb0w4ofbiGcuB369-RgkG_5XDA5enWQgFmkOuFuSG8_z3_O1NbLUVYotzQgYclWtg' }
    ]
  },
  'industrial-grade': {
    name: 'Green Cast Industrial Grade',
    grade: 'Bulk Structural Spec',
    whiteness: 'Hunter 90',
    strength: '45.0 MPa',
    settingTime: '120 minutes',
    desc: 'Cost-effective high-whiteness solution for large-scale precast plants, road curbs, glass-fiber reinforced concrete (GRC), and decorative panel facades.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2PM2bo3V6CCFsoZO1R9Y3B1W1hl9d4cnLYyk4uw94NYoz6XG7aTrXPEIuA66SqbPnYQ1Vm1LFrShV4W85C09cJ7appTJhUE6EeucPCEBCd80O0zQ5m1gI5xX66Oeic7iuJxWDof7J8r7TmRR6yI8Uf43VmUJnD3wvyodVHM3FVrpMr1LX2xhH5iemGK4ZKGG7lToxDPX2fWP3DnlRq81Z3YZ3L9IEsdECy6V_xAMcKlLQ9l-PZh1BJWwMGGNAt_mXlwPySDUVdjU',
    certifications: ['ASTM C150 Type V', 'ISO 9001 Quality', 'ISO 14001 Environmental'],
    specs: [
      { label: 'Insoluble Residue', value: '< 0.15%' },
      { label: 'Loss on Ignition (LOI)', value: '< 1.8%' },
      { label: 'Specific Surface (Blaine)', value: '380 m²/kg' },
      { label: 'Initial Setting Time', value: '120 mins' },
      { label: 'Final Setting Time', value: '185 mins' },
      { label: '2-Day Strength', value: '18.0 MPa' },
      { label: '28-Day Strength', value: '45.0 MPa' },
    ],
    applications: [
      { title: 'Architectural Pillars & Columns', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOMvJ8oARgNXeGeghYlLPrJhHW9j7tK8SZFOClYiZ4DhdDStcytAgtO3iEfhSihdLBFeMKZLrjhTvk6XzNvpRs8tkypXe8-VP_m1leZMT_n66osGfTBeODLnVwdxEwScwJ1UYyjbtJJBV_OJyapXvqGLWW24gZYHNhoro68oYEQi_tCCMwcnG8hpZhaIS_DeF1gOypjjGrali2FEgNleoPZ5Qoqoj5ZUu4j36G1LVktqOL821X8OQfkzTAbnHrMfYh86ozKN4GPaU' }
    ]
  },
  'quick-set': {
    name: 'Green Cast Quick Set',
    grade: 'Rapid Setting Spec',
    whiteness: 'Hunter 92',
    strength: '48.5 MPa',
    settingTime: '45 minutes',
    desc: 'Formulated with accelerators to reduce demolding and setting times. Perfect for fast-track architectural structures, pre-cast fabrication plants, and cold-weather construction projects.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9H37_RVHCUrwNJGralKzyOEFxfPtChkcg3A8tdiK3euaeHah1XMyqxzZCXfnGJGHQ_wegMI5CwcJtYd4MxBgjaK3ChC8p9fP80L9ogQghtKEmIz55Us_vgFooVw9uq0x1OL9u2dog4lQj6hCl1GI28QW_hE41_9qlN5rJ4DJl1x4goN4hzm6h1M3juBmQz08AScrs1RPkJ2qkYF0RNaMjJyo0tLZZwJVeessdB_KsGKtFecevUx0zzLZTu0VDOesJ_qHK_rKAPak',
    certifications: ['ASTM C150 Type III', 'ISO 9001 Quality', 'ISO 45001 Safety'],
    specs: [
      { label: 'Insoluble Residue', value: '< 0.10%' },
      { label: 'Loss on Ignition (LOI)', value: '< 1.5%' },
      { label: 'Specific Surface (Blaine)', value: '480 m²/kg' },
      { label: 'Initial Setting Time', value: '45 mins' },
      { label: 'Final Setting Time', value: '75 mins' },
      { label: '1-Day Strength', value: '22.0 MPa' },
      { label: '28-Day Strength', value: '48.5 MPa' },
    ],
    applications: [
      { title: 'Precast Architectural Panels', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtK-DixwfNv2M2Vxymq9BwVOAes57wnBvp3qeerixT07lSdu1iG7crTOrJV2R_VQujafm8YaaBLMHY-MNVH-fjpoWq5PQ63UUadZguepSg6mI06fSVmshH2RuFMeCe9dB0h0YSpawZDB_ix0j2Pumeb0tDAJo1OnNbI4Rn583shJrq3YOAD7vPmKbYSUcjgb4pYBokZR9_pnxCZVnz7eZ9kii242UzyXuXnB6ZQSmdjTGLnX949qV6J4PyEoDSVdoxH6n2nvJ7y6k' }
    ]
  },
  'sculpt-grade': {
    name: 'Green Cast Sculpt Grade',
    grade: 'Fine Molding Blend',
    whiteness: 'Hunter 98',
    strength: '25.8 MPa',
    settingTime: '140 minutes',
    desc: 'Our highest whiteness product, milled to an extremely fine grade to support complex textures, sculptures, and detailed stucco moldings without shrinking or cracking under environmental exposure.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZc8XZBBvTP25Rz0vntURDWx8Ff_s9KNjqOD9A3ddepZcQynWAUHDLbT7HFbJTQykvU7J2JU_aJfMtRA1N9QeYQAsIiQprh-VWrN9eoiAcJHFa1DC_7bSl3-4dh5i6qvU5iZvP0Xb3wwjdCagIQfU4aKwncJefLHxVNLnEHy2tss8xVcFksOyM7xIDnzUw18oGJ1NOnTroZEOxKvwp_l_1xDv2wo7tlXr5ejs5NHooYR7Z4g-99nNoji-pDxke099XwR-7SfHJorI',
    certifications: ['EN 197-1 CEM II', 'ISO 9001 Quality', 'ISO 14025 Environmental'],
    specs: [
      { label: 'Insoluble Residue', value: '< 0.05%' },
      { label: 'Loss on Ignition (LOI)', value: '< 1.0%' },
      { label: 'Specific Surface (Blaine)', value: '520 m²/kg' },
      { label: 'Initial Setting Time', value: '140 mins' },
      { label: 'Final Setting Time', value: '220 mins' },
      { label: '2-Day Strength', value: '10.2 MPa' },
      { label: '28-Day Strength', value: '25.8 MPa' },
    ],
    applications: [
      { title: 'Fine Art Concrete Sculptures', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5GKCuuxHwCoo-WwWqQlVXXdDpoV8xO4i3yQefJzfxNcnko_1bx6lat-MqVFqr3LGxUT1-uBXLkaUuMOssgTgHPSw8sGoRyRnrfGMESwOhA4hyzgdgnILha0TwrYX7WmNi5Ib471eXeuk5jjoFDr_Q6mcQn1fklpktZ7u1LJZ7EckvuME9_tX1J6OZJAdFk7DgEZO_He2xmZotkmmeryeHz4jiRtBKbiCIXb8ty3zZywpYCYaV0A0TN8rvpF1NScUR0lddSNJqDxQ' }
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
              <span className="text-[10px] uppercase font-bold text-on-surface-variant/75 block mb-1">Whiteness Value</span>
              <span className="text-xl font-bold text-secondary">{product.whiteness}</span>
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
