"use client";
import { useState } from "react";
import Link from "next/link";

const freeFeatures = [
  "Daily journey (full access)",
  "Private journal — 30 days history",
  "Basic content catalog",
  "7-day streak tracking",
  "Daily email reminders",
];

const premiumFeatures = [
  "Everything in Free",
  "Full content library",
  "Premium daily journey steps",
  "Unlimited journal history",
  "Audio content & guided practices",
  "Priority support",
];

const faqs = [
  {
    q: "Can I really journal for free, forever?",
    a: "Yes. Creating private entries is always free. Premium expands history length and unlocks premium content — it never locks the act of reflection itself.",
  },
  {
    q: "How private are my journal entries?",
    a: "Entries are encrypted before leaving your device. We store only ciphertext — no one on our team can read your entries. Ever.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from your billing settings at any moment. You retain premium access until the end of your paid period.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const monthlyPrice = 7.99;
  const annualPerMonth = 5.33;
  const displayed = annual ? annualPerMonth : monthlyPrice;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-stone-900 mb-3">Simple, honest pricing</h1>
        <p className="text-stone-500">
          The act of reflection is always free. Premium expands the experience.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className={`text-sm ${!annual ? "text-stone-800 font-medium" : "text-stone-400"}`}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${
              annual ? "bg-violet-600" : "bg-stone-300"
            }`}
            aria-label="Toggle annual billing"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                annual ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-sm ${annual ? "text-stone-800 font-medium" : "text-stone-400"}`}>
            Annual{" "}
            <span className="bg-emerald-100 text-emerald-700 text-xs px-1.5 py-0.5 rounded-full ml-1">
              Save 33%
            </span>
          </span>
        </div>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-14">
        {/* Free */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 flex flex-col">
          <h2 className="font-bold text-stone-800 text-lg mb-1">Free</h2>
          <p className="text-stone-400 text-sm mb-4">Everything you need to begin</p>
          <div className="mb-6">
            <span className="text-3xl font-bold text-stone-900">$0</span>
            <span className="text-stone-400 text-sm ml-1">forever</span>
          </div>
          <Link
            href="/journey"
            className="block w-full py-2.5 border-2 border-stone-200 text-stone-700 rounded-full text-center text-sm font-medium hover:bg-stone-50 transition-colors mb-6"
          >
            Get Started Free
          </Link>
          <ul className="space-y-2.5 flex-1">
            {freeFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-stone-600">
                <span className="text-emerald-500 flex-shrink-0 mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Premium */}
        <div className="bg-violet-600 rounded-2xl p-6 text-white relative overflow-hidden flex flex-col">
          <div className="absolute top-3 right-3 bg-amber-400 text-stone-900 text-xs font-bold px-2.5 py-1 rounded-full">
            Most popular
          </div>
          <h2 className="font-bold text-lg mb-1">Premium</h2>
          <p className="text-violet-200 text-sm mb-4">The full experience</p>
          <div className="mb-6">
            <span className="text-3xl font-bold">${displayed.toFixed(2)}</span>
            <span className="text-violet-200 text-sm ml-1">/ month</span>
            {annual && (
              <p className="text-violet-300 text-xs mt-1">
                Billed as ${(annualPerMonth * 12).toFixed(2)}/year
              </p>
            )}
          </div>
          <button className="w-full py-2.5 bg-white text-violet-700 rounded-full text-sm font-semibold hover:bg-violet-50 transition-colors mb-6">
            Start Premium
          </button>
          <ul className="space-y-2.5 flex-1">
            {premiumFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-violet-100">
                <span className="text-amber-300 flex-shrink-0 mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-lg font-bold text-stone-900 mb-4">Common questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-stone-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between px-4 py-3.5 text-left"
              >
                <span className="text-sm font-medium text-stone-800">{faq.q}</span>
                <span className="text-stone-400 flex-shrink-0 ml-3 transition-transform duration-200" style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'none' }}>
                  ↓
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-stone-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-stone-400 text-sm mt-8">
          No tricks. Cancel anytime. Private entries remain yours — always.
        </p>
      </div>
    </div>
  );
}
