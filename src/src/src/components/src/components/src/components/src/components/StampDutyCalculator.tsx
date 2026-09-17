import React, { useState } from 'react';
import { UP_STAMP_DUTY_RULES, COMMON_REGISTRATION_TIPS } from '../data/stampDutyGuide';
import { Calculator, Info, IndianRupee, MessageSquare, AlertTriangle } from 'lucide-react';

export const StampDutyCalculator: React.FC = () => {
  const [propertyValue, setPropertyValue] = useState<number>(5000000);
  const [ownershipType, setOwnershipType] = useState<'male' | 'female' | 'joint' | 'bloodGift'>('male');

  const calculateFees = () => {
    const value = Math.max(0, propertyValue || 0);
    let stampDuty = 0;
    let registrationFee = Math.round(value * 0.01);
    let rebateApplied = 0;

    if (ownershipType === 'male') {
      stampDuty = Math.round(value * 0.07);
    } else if (ownershipType === 'female') {
      const baseDuty = value * 0.07;
      rebateApplied = Math.min(10000, value * 0.01);
      stampDuty = Math.round(Math.max(0, baseDuty - rebateApplied));
    } else if (ownershipType === 'joint') {
      const baseDuty = value * 0.07;
      rebateApplied = Math.min(5000, value * 0.005);
      stampDuty = Math.round(Math.max(0, baseDuty - rebateApplied));
    } else if (ownershipType === 'bloodGift') {
      stampDuty = 5000;
      registrationFee = Math.round(value * 0.01);
    }

    const totalGovtCharges = stampDuty + registrationFee;
    return { stampDuty, registrationFee, rebateApplied, totalGovtCharges };
  };

  const { stampDuty, registrationFee, rebateApplied, totalGovtCharges } = calculateFees();

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            Uttar Pradesh & Ghaziabad Registry Guide
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Stamp Duty & Registration Fee Estimator
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 bg-slate-800/80 border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <label htmlFor="property-val" className="block text-sm font-semibold text-slate-200 mb-2">
                Property Value / Circle Rate Value (₹)
              </label>
              <div className="relative">
                <IndianRupee className="w-5 h-5 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="property-val"
                  type="number"
                  step="50000"
                  min="100000"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-600 text-white font-semibold text-base focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                Ownership / Deed Category in UP
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'male', label: 'Individual Male Buyer', rate: '7% Duty + 1% Reg' },
                  { id: 'female', label: 'Individual Female Buyer', rate: '7% with up to ₹10k rebate' },
                  { id: 'joint', label: 'Joint (Male + Female)', rate: '7% with partial rebate' },
                  { id: 'bloodGift', label: 'Gift Deed (Blood Relatives)', rate: 'Flat ₹5,000 + 1% Reg' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setOwnershipType(cat.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      ownershipType === cat.id
                        ? 'bg-amber-500/15 border-amber-400 text-white ring-1 ring-amber-400'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    <div className="font-semibold text-xs sm:text-sm text-slate-100">{cat.label}</div>
                    <div className="text-[11px] text-amber-400 font-medium mt-0.5">{cat.rate}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-gradient-to-b from-slate-800 to-slate-900 border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-300">Property Valuation:</span>
                <span className="font-bold text-white font-mono">{formatINR(propertyValue)}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-300">Stamp Duty:</span>
                <span className="font-bold text-amber-400 font-mono text-base">{formatINR(stampDuty)}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-300">Registration Fee (1%):</span>
                <span className="font-bold text-white font-mono">{formatINR(registrationFee)}</span>
              </div>
              <div className="pt-2 p-4 rounded-xl bg-slate-950/80 border border-slate-700 flex items-center justify-between">
                <span className="text-xs text-slate-400 uppercase">Total Govt. Charges:</span>
                <span className="text-xl sm:text-2xl font-bold text-amber-400 font-mono">{formatINR(totalGovtCharges)}</span>
              </div>
            </div>

            <a
              href={`https://wa.me/919958814407?text=Hello%20Advocate%20Suresh%20Chand%2C%20I%20calculated%20stamp%20duty%20for%20a%20property%20valued%20at%20${encodeURIComponent(formatINR(propertyValue))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              Confirm Exact Circle Rate via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
