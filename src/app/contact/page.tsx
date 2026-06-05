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
        bgImage="/contact_bg.png"
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

      {/* Regional Offices Grid Section */}
      <section className="py-24 px-6 md:px-16 border-t border-outline-variant/10 w-full bg-transparent">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest block mb-2 font-mono">Regional Presence</span>
            <h2 className="font-display font-bold text-2xl md:text-4xl tracking-tight text-on-surface">Our Regional Offices</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {/* Mumbai */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row rounded-3xl overflow-hidden border border-outline-variant/10 bg-transparent group"
            >
              <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center bg-surface-container-low/30">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2 font-mono">Registered Office</span>
                <h3 className="font-display font-bold text-xl text-on-surface mb-3">Mumbai</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed font-sans">
                  116A, 11th Floor,<br />
                  Maker Chambers VI, 220,<br />
                  Nariman Point,<br />
                  Mumbai 400 021
                </p>
              </div>
              <div className="w-full sm:w-1/2 aspect-video sm:aspect-auto sm:min-h-[200px] relative overflow-hidden bg-zinc-100">
                <img
                  src="/mumbai_office.png"
                  alt="VVF Industries Mumbai Office Skyline"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Nagpur */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row rounded-3xl overflow-hidden border border-outline-variant/10 bg-transparent group"
            >
              <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center bg-surface-container-low/30">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2 font-mono">Regional Branch</span>
                <h3 className="font-display font-bold text-xl text-on-surface mb-3">Nagpur</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed font-sans">
                  Madhu-Madhav Towers,<br />
                  Laxmi Bhuvan Square,<br />
                  Dharampeth,<br />
                  Nagpur 440 010
                </p>
              </div>
              <div className="w-full sm:w-1/2 aspect-video sm:aspect-auto sm:min-h-[200px] relative overflow-hidden bg-zinc-100">
                <img
                  src="/nagpur_office.png"
                  alt="VVF Industries Nagpur Office Deekshabhoomi"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* New Delhi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row rounded-3xl overflow-hidden border border-outline-variant/10 bg-transparent group"
            >
              <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center bg-surface-container-low/30">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2 font-mono">Regional Branch</span>
                <h3 className="font-display font-bold text-xl text-on-surface mb-3">New Delhi</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed font-sans">
                  305, Arunachal Building,<br />
                  19 Barakhamba Road,<br />
                  New Delhi 110 001
                </p>
              </div>
              <div className="w-full sm:w-1/2 aspect-video sm:aspect-auto sm:min-h-[200px] relative overflow-hidden bg-zinc-100">
                <img
                  src="/delhi_office.png"
                  alt="VVF Industries Delhi Office India Gate"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Pune */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row rounded-3xl overflow-hidden border border-outline-variant/10 bg-transparent group"
            >
              <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center bg-surface-container-low/30">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2 font-mono">Regional Branch</span>
                <h3 className="font-display font-bold text-xl text-on-surface mb-3">Pune</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed font-sans">
                  Flat No. 12, Shubham Heights,<br />
                  opposite Karve Road DMart,<br />
                  Kothrud,<br />
                  Pune 411 038
                </p>
              </div>
              <div className="w-full sm:w-1/2 aspect-video sm:aspect-auto sm:min-h-[200px] relative overflow-hidden bg-zinc-100">
                <img
                  src="/pune_office.png"
                  alt="VVF Industries Pune Office Fort Entrance"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className="bg-transparent py-20 px-6 md:px-16 w-full border-t border-outline-variant/10">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest block mb-2 font-mono">Location Map</span>
            <h2 className="font-display font-bold text-2xl md:text-4xl tracking-tight text-on-surface">Find Us on Google Maps</h2>
          </div>

          <div className="w-full aspect-[21/9] min-h-[350px] md:min-h-[450px] bg-transparent rounded-3xl border border-outline-variant/10 overflow-hidden shadow-md relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7258.051149405455!2d72.80603044426297!3d19.43190087938428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdmart%20bolinj%20virar%20west!5e1!3m2!1sen!2sin!4v1780661044303!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
