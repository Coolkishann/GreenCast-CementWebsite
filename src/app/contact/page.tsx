'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Navigation } from 'lucide-react';
import SubpageBanner from '@/components/SubpageBanner';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    projectScale: 'Under 10,000 sq ft',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        projectScale: 'Under 10,000 sq ft',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col w-full bg-transparent">
      {/* Subpage Banner Header */}
      <SubpageBanner
        title="Project Specification"
        subtitle="Specify your technical cement requirements. Our engineering team responds to all material calculations and consultation queries within 24 hours."
        category="Consultations"
        breadcrumbs={[{ name: 'Contact' }]}
      />

      {/* Main Form and Office Details Grid - Transparent layout */}
      <section className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 w-full bg-transparent">
        {/* Inquiry Form */}
        <div className="lg:col-span-7 flex flex-col bg-transparent p-8 md:p-12 rounded-2xl border border-outline-variant/10 shadow-sm relative">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-on-surface mb-8">Technical Inquiry Form</h2>
          
          <AnimatePresence mode="wait">
            {formSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-16 flex flex-col items-center gap-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-lg shadow-secondary/10">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-on-surface mb-2 font-display">Message Transmitted</h3>
                  <p className="text-sm text-on-surface-variant max-w-sm leading-relaxed mx-auto">
                    Your material specification query has been logged. An engineer will follow up shortly.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 w-full"
              >
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                  <div className="relative flex flex-col">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Arthur Pendragon"
                      className="ghost-input py-2 text-sm text-on-surface focus:outline-none bg-transparent"
                    />
                  </div>
                  <div className="relative flex flex-col">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                      Architectural Firm / Company
                    </label>
                    <input
                      required
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Vance Architects"
                      className="ghost-input py-2 text-sm text-on-surface focus:outline-none bg-transparent"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                  <div className="relative flex flex-col">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                      Contact Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. architect@vance.com"
                      className="ghost-input py-2 text-sm text-on-surface focus:outline-none bg-transparent"
                    />
                  </div>
                  <div className="relative flex flex-col">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                      Project Scale (Estimated)
                    </label>
                    <select
                      name="projectScale"
                      value={formData.projectScale}
                      onChange={handleChange}
                      className="ghost-input py-2 text-sm text-on-surface focus:outline-none bg-transparent cursor-pointer"
                    >
                      <option>Under 10,000 sq ft</option>
                      <option>10,000 - 50,000 sq ft</option>
                      <option>Over 50,000 sq ft</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="relative flex flex-col font-sans">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                    Material Specification Requirements
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details on whiteness grades, expected compressive strengths, or environmental targets..."
                    className="ghost-input py-2 text-sm text-on-surface focus:outline-none bg-transparent resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full mt-4 bg-secondary-container hover:bg-secondary text-on-secondary-container hover:text-on-secondary py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow hover:shadow-lg hover:shadow-secondary/15"
                >
                  Send Consultation Inquiry
                  <Send className="w-4 h-4" />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Office Details */}
        <div className="lg:col-span-5 flex flex-col gap-8 bg-transparent">
          <div className="flex flex-col gap-3">
            <span className="text-secondary font-semibold text-xs uppercase tracking-widest">Office Locations</span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-on-surface">Headquarters Details</h2>
          </div>

          <div className="flex flex-col gap-6">
            {/* HQ Address */}
            <div className="flex items-start gap-4 p-5 bg-transparent rounded-2xl border border-outline-variant/10 shadow-sm">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-on-surface-variant/80 mb-1 font-mono">Physical Address</span>
                <span className="text-sm font-semibold text-on-surface">VVF Industries</span>
                <span className="text-xs text-on-surface-variant/90">Chikhli, Gujarat, India</span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-5 bg-transparent rounded-2xl border border-outline-variant/10 shadow-sm">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-on-surface-variant/80 mb-1 font-mono">Technical Consultation Line</span>
                <span className="text-sm font-semibold text-on-surface">+91 83697 70601</span>
                <span className="text-xs text-on-surface-variant/90 font-sans">Mon - Sat, 9:00 AM - 6:00 PM IST</span>
              </div>
            </div>

            {/* Operating hours */}
            <div className="flex items-start gap-4 p-5 bg-transparent rounded-2xl border border-outline-variant/10 shadow-sm">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-on-surface-variant/80 mb-1 font-mono">Plant Operating Hours</span>
                <span className="text-sm font-semibold text-on-surface">24/7 Continuous Calcination</span>
                <span className="text-xs text-on-surface-variant/90 font-sans">Deliveries Scheduled: Mon - Sat, 6:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styled Interactive Map Dashboard */}
      <section className="bg-transparent py-20 px-6 md:px-16 w-full border-t border-outline-variant/10">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="mb-12 flex justify-between items-end flex-wrap gap-4">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest block mb-2">Facility Map</span>
              <h2 className="font-display font-bold text-2xl md:text-4xl tracking-tight text-on-surface">Distribution & Production Centres</h2>
            </div>
            <div className="flex gap-3 bg-transparent p-1.5 rounded-xl border border-outline-variant/15 text-xs font-semibold text-on-surface">
              <span className="px-3 py-1.5 rounded-lg bg-secondary/10 text-secondary flex items-center gap-1.5 font-mono">
                <Navigation className="w-3.5 h-3.5" /> Corporate HQ
              </span>
              <span className="px-3 py-1.5 text-on-surface-variant flex items-center gap-1.5 font-mono">
                <Clock className="w-3.5 h-3.5" /> Refinement Plant
              </span>
            </div>
          </div>

          {/* Styled SVG Map Canvas */}
          <div className="w-full aspect-[21/9] min-h-[300px] bg-transparent rounded-3xl border border-outline-variant/10 shadow-inner relative overflow-hidden flex items-center justify-center p-8 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]">
            {/* Mock Map Markings & Gridlines */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
              <div className="w-[80%] h-[80%] border border-dashed border-outline/30 rounded-full" />
              <div className="w-[50%] h-[50%] border border-dashed border-outline/30 rounded-full" />
            </div>

            {/* Location 1: Corporate HQ */}
            <div className="absolute left-[30%] top-[40%] z-10 flex flex-col items-center">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-lg shadow-secondary/30 relative cursor-pointer"
                title="VVF Industries HQ"
              >
                <div className="absolute inset-0 rounded-full bg-secondary/30 animate-ping" />
                <Navigation className="w-2.5 h-2.5 transform rotate-45" />
              </motion.div>
              <div className="mt-2 glass-card py-1.5 px-3 rounded-lg text-[10px] font-bold text-on-surface uppercase tracking-wider text-center shadow-md">
                VVF Industries HQ
              </div>
            </div>

            {/* Location 2: Calcination Plant */}
            <div className="absolute right-[35%] bottom-[35%] z-10 flex flex-col items-center">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: 0.7 }}
                className="w-5 h-5 rounded-full bg-emerald-700 text-on-secondary flex items-center justify-center shadow-lg shadow-emerald-700/30 relative cursor-pointer"
                title="Chikhli Manufacturing Facility"
              >
                <div className="absolute inset-0 rounded-full bg-emerald-700/30 animate-ping" />
                <div className="w-2 h-2 rounded-full bg-white" />
              </motion.div>
              <div className="mt-2 glass-card py-1.5 px-3 rounded-lg text-[10px] font-bold text-on-surface uppercase tracking-wider text-center shadow-md">
                Chikhli Manufacturing Facility
              </div>
            </div>

            {/* Geographical details box */}
            <div className="absolute bottom-6 left-6 z-10 glass-card p-4 rounded-xl hidden md:block max-w-xs shadow-lg font-sans">
              <span className="text-[9px] uppercase font-bold text-secondary tracking-widest block mb-1 font-mono">Geographical Focus</span>
              <p className="text-[11px] text-on-surface-variant leading-relaxed">
                Supply chain hubs are strategically located for express coastal freight shipping and direct rail networks, ensuring prompt batch distribution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
