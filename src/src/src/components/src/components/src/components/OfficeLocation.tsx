import React from 'react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Navigation, Shield, ExternalLink } from 'lucide-react';

export const OfficeLocation: React.FC = () => {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Royal+Tower+Market+Shipra+Suncity+Indirapuram+Ghaziabad';

  return (
    <section id="office" className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            Head Legal Chambers
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Chambers at Shipra Suncity, Indirapuram
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Conveniently situated in the Royal Tower Market Basement, serving all residential societies of Indirapuram, Vaishali, Vasundhara, and surrounding Ghaziabad.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 bg-slate-800/80 border border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Advocate Office Location
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">
                  Suresh Chand Advocate
                </h3>
                <p className="text-xs text-slate-400">
                  Practicing Advocate &bull; Established Since 2007
                </p>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/80 border border-slate-700/80">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Physical Address:
                  </h4>
                  <p className="text-sm text-slate-100 font-medium mt-1 leading-relaxed">
                    <strong>Office at-RTB-088</strong>, Royal Tower Market Basement,<br />
                    Shipra Suncity, Indirapuram, Ghaziabad,<br />
                    Uttar Pradesh – 201014
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 space-y-1">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">
                    Calling & WhatsApp:
                  </span>
                  <a href="tel:09958814407" className="text-base font-bold text-amber-400 font-mono">
                    09958814407
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 space-y-1">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">
                    Email Inquiries:
                  </span>
                  <a href="mailto:advlegaldrafting@gmail.com" className="text-xs font-bold text-slate-200 break-all">
                    advlegaldrafting@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/80 border border-slate-700/80">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <div className="font-semibold text-slate-200">Chamber Timings:</div>
                  <p className="text-slate-300"><strong>Mon – Sat:</strong> 10:00 AM – 08:00 PM</p>
                  <p className="text-slate-400"><strong>Sunday:</strong> 10:30 AM – 02:30 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
              >
                <Navigation className="w-4 h-4" />
                Get Directions on Google Maps
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              <a
                href="https://wa.me/919958814407"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Message
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-800/80 border border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="relative w-full h-64 rounded-xl overflow-hidden bg-slate-950 border border-slate-700 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center mx-auto text-amber-400 animate-pulse mb-3">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-heading text-lg font-bold text-white">
                RTB-088, Royal Tower Market
              </h4>
              <p className="text-xs text-slate-300 mt-1">Shipra Suncity, Indirapuram, Ghaziabad</p>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-center">
              <div className="p-2 bg-slate-900/60 rounded border border-slate-700 font-bold text-white">Shipra Suncity</div>
              <div className="p-2 bg-slate-900/60 rounded border border-slate-700 font-bold text-white">Vaishali/Vasundhara</div>
              <div className="p-2 bg-slate-900/60 rounded border border-slate-700 font-bold text-white">Ghaziabad Tehsil</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
