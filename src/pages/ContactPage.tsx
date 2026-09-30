import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { MessageCircle, Mail, Phone, MapPin, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast } = useShop();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Bespoke Order / Custom Sizing',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in your name, email, and message.');
      return;
    }
    setIsSubmitted(true);
    showToast('Your message has been received by our Quetta atelier team.');
  };

  const handleOpenWhatsApp = () => {
    const text = `Salam! I would like to connect with the Balochi Doch Atelier regarding ${formData.inquiryType}.`;
    window.open(`https://wa.me/923008392104?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-[#FAF7F2] text-[#140407] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/50 bg-[#26050A] px-3.5 py-1 text-[11px] tracking-[0.25em] font-semibold text-[#E5C158] uppercase">
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#3B0811] font-semibold tracking-wide">
            Contact the Atelier
          </h1>
          <p className="text-sm sm:text-base text-[#6E5D4E] leading-relaxed">
            Whether you desire a bespoke bridal Doch commission, require custom tailoring guidance, or wish to schedule an in-person atelier visit in Quetta or Karachi.
          </p>
        </div>

        {/* WhatsApp Highlight Box */}
        <div className="bg-[#128C7E] text-white rounded p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Chat with Us Directly on WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-white/90 mt-1">
                Message us directly for quick size help, fabric videos, and order updates.
              </p>
            </div>
          </div>

          <button
            onClick={handleOpenWhatsApp}
            className="bg-white text-[#075E54] hover:bg-[#FAF7F2] px-6 py-3 rounded font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shrink-0 shadow"
          >
            Chat on WhatsApp (+92 300 8392104)
          </button>
        </div>

        {/* Form and Atelier Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E8DFD3] rounded p-6 sm:p-10 shadow-xs space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#140407]">
                Send an Atelier Inquiry
              </h2>
              <p className="text-xs text-[#7A6B5C] mt-1">
                Our curatorial staff responds to all communications within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 bg-[#FAF2E6] border border-[#E5DACB] rounded text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#2E6B34] mx-auto" />
                <h3 className="font-serif text-xl font-bold text-[#140407]">
                  Thank You, {formData.name}
                </h3>
                <p className="text-xs text-[#6E5D4E] max-w-sm mx-auto">
                  Your inquiry regarding &ldquo;{formData.inquiryType}&rdquo; has been submitted to our senior atelier staff. We will reply to {formData.email} promptly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-semibold text-[#520D19] underline uppercase tracking-wider pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#140407] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Faiza Salam"
                      className="w-full bg-[#FAF7F2] border border-[#D5C9B8] px-3.5 py-2.5 text-xs rounded focus:outline-none focus:border-[#520D19]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#140407] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. collector@example.com"
                      className="w-full bg-[#FAF7F2] border border-[#D5C9B8] px-3.5 py-2.5 text-xs rounded focus:outline-none focus:border-[#520D19]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#140407] mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 1234567"
                      className="w-full bg-[#FAF7F2] border border-[#D5C9B8] px-3.5 py-2.5 text-xs rounded focus:outline-none focus:border-[#520D19]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#140407] mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#D5C9B8] px-3.5 py-2.5 text-xs rounded focus:outline-none focus:border-[#520D19]"
                    >
                      <option value="Bespoke Order / Custom Sizing">Bespoke Order / Custom Sizing</option>
                      <option value="Royal Bridal Doch Consultation">Royal Bridal Doch Consultation</option>
                      <option value="Existing Order Tracking">Existing Order Tracking</option>
                      <option value="International Shipping Inquiry">International Shipping Inquiry</option>
                      <option value="Atelier Private Appointment">Atelier Private Appointment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#140407] mb-1.5">
                    Your Message / Custom Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your requested colors, measurements, event date, or inquiries..."
                    className="w-full bg-[#FAF7F2] border border-[#D5C9B8] p-3 text-xs rounded focus:outline-none focus:border-[#520D19]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-gradient text-[#140407] font-semibold text-xs tracking-wider uppercase py-3.5 rounded hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Physical Store Locations: Quetta & Karachi (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quetta Flagship Atelier */}
            <div className="bg-white border border-[#E8DFD3] rounded p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#520D19]">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="font-serif text-lg font-bold text-[#140407]">
                  Quetta Flagship Atelier & Guild
                </h3>
              </div>
              
              <p className="text-xs text-[#4A3E33] leading-relaxed">
                Zarghoon Road, Opp. Serena / Jinnah Town<br />
                Quetta, Balochistan, Pakistan
              </p>

              <div className="space-y-1.5 text-xs text-[#7A6B5C] pt-2 border-t border-[#F0E8DC]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Monday – Saturday: 10:00 AM – 7:30 PM (PKT)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>+92 81 2839210</span>
                </div>
              </div>
            </div>

            {/* Karachi Design Studio */}
            <div className="bg-white border border-[#E8DFD3] rounded p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#520D19]">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="font-serif text-lg font-bold text-[#140407]">
                  Karachi Design & Consultation Studio
                </h3>
              </div>
              
              <p className="text-xs text-[#4A3E33] leading-relaxed">
                Bukhari Commercial Area, Phase 6, D.H.A<br />
                Karachi, Sindh, Pakistan
              </p>

              <div className="space-y-1.5 text-xs text-[#7A6B5C] pt-2 border-t border-[#F0E8DC]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Tuesday – Sunday: 11:30 AM – 8:30 PM (PKT)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>+92 21 35841029</span>
                </div>
              </div>
            </div>

            {/* Direct Email */}
            <div className="bg-[#FAF2E6] border border-[#E5DACB] rounded p-5 text-xs text-[#4A3E33] flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#520D19] shrink-0" />
              <div>
                <span className="font-semibold block text-[#140407]">Curatorial & Press Inquiries:</span>
                <span className="text-[#520D19]">curator@balochidoch.com</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
