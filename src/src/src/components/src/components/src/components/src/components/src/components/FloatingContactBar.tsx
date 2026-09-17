import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

export const FloatingContactBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2 sm:p-3 sm:hidden shadow-2xl">
      <div className="flex items-center gap-2">
        <a
          href="tel:09958814407"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow transition-all text-center"
        >
          <Phone className="w-3.5 h-3.5" />
          Call Advocate
        </a>

        <a
          href="https://wa.me/919958814407?text=Hello%20Advocate%20Suresh%20Chand%2C%20I%20need%20legal%20guidance%20regarding%20property%20deeds%20drafting%20%2F%20registration."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow transition-all text-center"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          WhatsApp
        </a>

        <a
          href="#inquiry"
          className="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs"
          aria-label="Book Consultation"
        >
          <Calendar className="w-4 h-4 text-amber-400" />
        </a>
      </div>
    </div>
  );
};
