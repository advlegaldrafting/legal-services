import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Scale, Menu, X, Clock, Award } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="bg-slate-950 px-4 py-1.5 text-xs border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium text-amber-400">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              Established Since 2007 &bull; 19+ Years Practice
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-amber-500" />
              RTB-088, Royal Tower Market Basement, Shipra Suncity, Indirapuram
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3 h-3 text-slate-400" />
              Mon - Sat: 10:00 AM - 8:00 PM
            </span>
            <a
              href="tel:09958814407"
              className="text-amber-400 font-semibold hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              09958814407
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 transition-all">
            <Scale className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-lg sm:text-xl font-bold tracking-wide text-white">
                Suresh Chand
              </span>
              <span className="text-xs bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded font-medium">
                Advocate
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Deeds Drafting, Registration & Real Estate Legal Services &bull; Ghaziabad
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-200">
          <a href="#services" className="hover:text-amber-400 transition-colors">Legal Services (22+)</a>
          <a href="#calculator" className="hover:text-amber-400 transition-colors">Stamp Duty Guide</a>
          <a href="#clients" className="hover:text-amber-400 transition-colors">Client Segments</a>
          <a href="#areas" className="hover:text-amber-400 transition-colors">Areas Covered</a>
          <a href="#office" className="hover:text-amber-400 transition-colors">Office & Timings</a>
        </nav>

        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://wa.me/919958814407?text=Hello%20Advocate%20Suresh%20Chand%2C%20I%20need%20legal%20assistance%20regarding%20property%20deeds%20drafting%20%2F%20registration%20in%20Ghaziabad."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            WhatsApp
          </a>
          <a
            href="tel:09958814407"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow-sm transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-amber-400 py-1">
              All Legal Services (22+ Deeds & Solutions)
            </a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-amber-400 py-1">
              Stamp Duty & Registration Calculator
            </a>
            <a href="#clients" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-amber-400 py-1">
              Clients (Individuals, Builders, Banks, Corporates)
            </a>
            <a href="#areas" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-amber-400 py-1">
              Areas Served in Ghaziabad & NCR
            </a>
            <a href="#inquiry" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-amber-400 py-1">
              Book Consultation
            </a>
            <a href="#office" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-amber-400 py-1">
              Office at Shipra Suncity, Indirapuram
            </a>
          </div>
          <div className="pt-3 border-t border-slate-800 flex gap-2">
            <a
              href="https://wa.me/919958814407"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 rounded-lg text-xs font-semibold bg-emerald-600 text-white"
            >
              WhatsApp Consultation
            </a>
            <a
              href="tel:09958814407"
              className="flex-1 text-center py-2.5 rounded-lg text-xs font-semibold bg-amber-500 text-slate-950 font-bold"
            >
              Call 09958814407
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
