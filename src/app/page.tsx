"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const stats = [
  { value: "5,000+", label: "Happy Households", emoji: "🏠" },
  { value: "1M+ Kg", label: "Waste Recycled", emoji: "♻️" },
  { value: "₹85 Lakh+", label: "Paid to Users", emoji: "💰" },
  { value: "500K Kg", label: "CO₂ Offset", emoji: "🌿" },
];


const reviews = [
  { name: "Pooja", text: "Pickup was on time and staff behaved politely. Price was exactly as shown — no hidden charges. Smooth and convenient." },
  { name: "Preeti Verma", text: "Hassle free experience. Home pickup is very convenient and a great initiative to save the environment. Will recommend!" },
  { name: "Mridul Sah", text: "Excellent service with timely pickup and fair pricing. Staff is polite and professional. Highly recommended." },
  { name: "Sheeba Bhatnagar", text: "Quick and easy. The team is super helpful and polite. I much prefer ZeroWaste Asia over local dealers." },
];

export default function HomePage() {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    setShowDialog(true);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">

      {/* ══════════ WELCOME DIALOG ══════════ */}
      {showDialog && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}>
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-8 text-center relative">
            {/* Logo / icon */}
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">
              ♻️
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-1">Welcome to ZeroWaste Asia</h2>
            <p className="text-gray-500 text-sm mb-7">What would you like to do today?</p>

            <div className="flex flex-col gap-3">
              {/* Buy */}
              <Link
                href="/furniture"
                onClick={() => setShowDialog(false)}
                className="flex items-center gap-4 px-5 py-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all group"
              >
                <span className="text-2xl">🛋️</span>
                <div className="text-left">
                  <p className="font-black text-base leading-tight">Buy</p>
                  <p className="text-gray-400 text-xs font-medium">Refurbished Furniture</p>
                </div>
                <span className="ml-auto text-gray-500 group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              {/* Sell */}
              <button
                onClick={() => setShowDialog(false)}
                className="flex items-center gap-4 px-5 py-4 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition-all group"
              >
                <span className="text-2xl">💰</span>
                <div className="text-left">
                  <p className="font-black text-base leading-tight">Sell</p>
                  <p className="text-green-200 text-xs font-medium">Your Scrap</p>
                </div>
                <span className="ml-auto text-green-300 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-20 pb-10 overflow-hidden px-4">
        {/* Green glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 100% 60% at 50% -5%, rgba(134,239,172,0.55) 0%, transparent 65%)"
        }} />

        {/* Floating emojis */}
        <span className="hidden sm:block absolute top-24 left-[6%]  text-4xl select-none" style={{ animation: "floaty 3s ease-in-out infinite" }}>♻️</span>
        <span className="hidden sm:block absolute top-32 right-[8%] text-3xl select-none" style={{ animation: "floaty 2.6s ease-in-out infinite" }}>📰</span>
        <span className="hidden sm:block absolute top-56 left-[4%]  text-3xl select-none" style={{ animation: "floaty 3.8s ease-in-out infinite" }}>🔩</span>
        <span className="hidden sm:block absolute bottom-48 left-[10%] text-3xl select-none" style={{ animation: "floaty 2.9s ease-in-out infinite" }}>💰</span>
        <span className="hidden sm:block absolute bottom-40 right-[6%] text-3xl select-none" style={{ animation: "floaty 3.3s ease-in-out infinite" }}>💰</span>
        <span className="hidden sm:block absolute top-44 right-[5%] text-3xl select-none" style={{ animation: "floaty 2.4s ease-in-out infinite" }}>🖥️</span>

        {/* Badge */}
        <div className="relative z-10 inline-flex items-center gap-2 bg-green-100 text-green-800 text-[11px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6 border border-green-200">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shrink-0" />
          Trusted by 5,000+ households across Delhi NCR
        </div>

        {/* Headline */}
        <div className="relative z-10 text-center max-w-[340px] sm:max-w-2xl lg:max-w-4xl mx-auto">
          <h1 className="text-[2.6rem] leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tight mb-5">
            Sell Your<br />
            <span className="text-green-600">Scrap.</span>{" "}
            Get<br className="sm:hidden" />{" "}
            <span className="hidden sm:inline">Get </span>Paid{" "}
            <span style={{ WebkitTextStroke: "2px #16a34a", color: "transparent" }}>
              Instantly.
            </span>
          </h1>

          <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-10 leading-relaxed">
            Schedule → We Collect → You Get Paid
            <br />
            <span className="text-xs sm:text-sm text-gray-400">
              Free doorstep pickup · Digital weighing · Instant payment
            </span>
          </p>

          {/* ── BIG CTA BUTTONS ── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
            <Link
              href="/book-pickup"
              className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 sm:px-10 sm:py-6 bg-gray-900 hover:bg-gray-800 text-white font-black text-base sm:text-lg rounded-2xl transition-all shadow-2xl hover:shadow-gray-300 hover:-translate-y-1 active:scale-95"
            >
              <span className="text-xl sm:text-2xl">📦</span>
              Schedule Free Pickup
              <span className="group-hover:translate-x-1.5 transition-transform text-lg">→</span>
            </Link>
            <Link
              href="/scrap-rates"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 sm:px-10 sm:py-6 bg-white hover:bg-green-50 text-gray-900 font-bold text-base sm:text-lg rounded-2xl transition-all border-2 border-gray-200 hover:border-green-500 hover:-translate-y-1 active:scale-95"
            >
              <span className="text-xl sm:text-2xl">💸</span>
              View Scrap Rates
            </Link>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="text-amber-400 text-base">★★★★★</span>
            <span className="text-xs sm:text-sm text-gray-400 font-semibold">4.8 rating · 50k+ pickups done</span>
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10 w-full max-w-xl lg:max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-3 sm:p-5 text-center border border-gray-100 shadow-sm">
                <div className="text-xl sm:text-3xl mb-1">{s.emoji}</div>
                <div className="text-base sm:text-2xl font-black text-gray-900">{s.value}</div>
                <div className="text-[10px] sm:text-xs text-gray-500 font-medium mt-0.5 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Weighing card */}
        <div className="relative z-10 w-full max-w-xl mx-auto mt-5">
          <div className="rounded-3xl p-5 flex items-center gap-4 bg-gradient-to-br from-green-200 to-green-300">
            <div className="flex-1 min-w-0">
              <div className="w-8 h-8 bg-green-700 rounded-xl flex items-center justify-center text-white font-black text-sm mb-2 shrink-0">+</div>
              <h3 className="text-lg sm:text-xl font-black text-green-900 leading-snug">
                100% weighing accuracy guaranteed
              </h3>
              <p className="text-green-800 text-xs mt-1 leading-snug">
                Powered by ZeroWaste Asia&apos;s Smart Digital Weighing Scales
              </p>
            </div>
            <div className="text-5xl sm:text-7xl shrink-0">⚖️</div>
          </div>
        </div>
      </section>

      {/* ══════════ 3 STEPS ══════════ */}

      {/* ══════════ 3 STEPS ══════════ */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-[10px] sm:text-xs font-bold text-green-600 uppercase tracking-widest mb-3">Simple Process</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 leading-tight">
            Best Value in <span className="text-green-600">3 simple steps</span>
          </h2>
          <p className="text-gray-400 text-sm mb-12 sm:mb-16">From booking to payment in one seamless experience</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {[
              { emoji: "📦", step: "01", title: "Schedule Pickup", desc: "Book in 2 minutes. Choose your time slot. We confirm within 2 hours." },
              { emoji: "🚛", step: "02", title: "We Collect at Door", desc: "Our trained, verified crew arrives at your home with digital weighing scales." },
              { emoji: "💵", step: "03", title: "Instant Payment", desc: "Get paid via UPI or cash before our crew even leaves your doorstep." },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center mb-5">
                  <div className="absolute inset-0 rounded-full bg-green-50" />
                  <div className="absolute inset-4 rounded-full bg-green-100" />
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-200 flex items-center justify-center text-3xl sm:text-4xl shadow-inner">
                    {s.emoji}
                  </div>
                </div>
                <span className="text-[10px] font-black text-green-500 uppercase tracking-widest mb-1">Step {s.step}</span>
                <h3 className="font-black text-gray-900 text-base sm:text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ RECYCLABLES ══════════ */}
      <section className="py-14 sm:py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-[10px] sm:text-xs font-bold text-green-600 uppercase tracking-widest mb-3">What We Buy</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-2">Recyclables we pick</h2>
            <p className="text-gray-400 text-sm">Paper · Plastic · Metals · E-Waste · Appliances · Vehicles</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
            {[
              { emoji: "📰", label: "Paper & Books", rate: "₹12–15/kg" },
              { emoji: "🧴", label: "Plastic", rate: "₹8/kg" },
              { emoji: "🔩", label: "Metal & Iron", rate: "₹25–505/kg" },
              { emoji: "💻", label: "E-Waste", rate: "₹150–500/unit" },
              { emoji: "🚗", label: "Vehicle Scrap", rate: "₹1,800–20,000" },
              { emoji: "❄️", label: "Appliances", rate: "₹350–5,600" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-100 hover:border-green-300 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{item.emoji}</div>
                <p className="font-black text-gray-900 text-sm sm:text-base leading-tight">{item.label}</p>
                <p className="text-green-600 text-xs sm:text-sm font-bold mt-1">{item.rate}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/scrap-rates"
              className="inline-flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-gray-900 hover:bg-gray-800 text-white font-black text-sm rounded-2xl transition-all hover:-translate-y-0.5">
              See Full Price List →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ HOUSEHOLDS & BUSINESSES ══════════ */}
      <section className="py-14 sm:py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-green-700 leading-snug px-2">
              Households &amp; Businesses have different needs — we cater to each of them
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 bg-green-50 rounded-3xl p-6 sm:p-8 border border-green-100">
              <div className="w-36 h-36 sm:w-44 sm:h-44 bg-white rounded-3xl flex items-center justify-center text-7xl sm:text-8xl shrink-0 shadow-sm">🏠</div>
              <div className="flex-1 w-full">
                <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-2">For Households</p>
                <h3 className="font-black text-gray-900 text-xl sm:text-2xl mb-4">Clean your home, earn money</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {["On-Demand Doorstep Pickups", "Accurate Digital Weighing", "Safety — Trained & Verified Staff", "Instant Payment via UPI or Cash"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-xs sm:text-sm text-gray-700 font-medium">
                      <span className="w-5 h-5 bg-green-200 text-green-800 rounded-full flex items-center justify-center text-[10px] shrink-0 font-black">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row-reverse items-center gap-6 sm:gap-8 bg-teal-50 rounded-3xl p-6 sm:p-8 border border-teal-100">
              <div className="w-36 h-36 sm:w-44 sm:h-44 bg-white rounded-3xl flex items-center justify-center text-7xl sm:text-8xl shrink-0 shadow-sm">🏢</div>
              <div className="flex-1 w-full">
                <p className="text-[10px] font-bold text-teal-600 uppercase tracking-widest mb-2">For Businesses</p>
                <h3 className="font-black text-gray-900 text-xl sm:text-2xl mb-4">Compliant, large-scale collections</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {["Formal Payments & GST Documentation", "Sustainability Reports for CSR", "Competitive Bulk Pricing", "Scheduled Recurring Pickups"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-xs sm:text-sm text-gray-700 font-medium">
                      <span className="w-5 h-5 bg-teal-200 text-teal-800 rounded-full flex items-center justify-center text-[10px] shrink-0 font-black">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ BIG CTA BANNER (replaces form) ══════════ */}
      <section className="py-14 sm:py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-900 rounded-3xl p-8 sm:p-14 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-white/5 pointer-events-none" />

            {/* Left text */}
            <div className="relative z-10 flex-1 text-center lg:text-left">
              <p className="text-[10px] font-black text-green-400 uppercase tracking-widest mb-3">Free Pickup</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                Book Your<br />Free Pickup<br />
                <span className="text-green-400">Today.</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
                No minimum quantity. We collect everything from newspapers to washing machines.
              </p>
              {/* Features */}
              <div className="mt-6 space-y-3">
                {[
                  { emoji: "⚡", title: "2-hour confirmation" },
                  { emoji: "⚖️", title: "Digital weighing, transparent pricing" },
                  { emoji: "💸", title: "Instant UPI or cash payout" },
                ].map((f) => (
                  <div key={f.title} className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-8 h-8 bg-green-900/60 rounded-xl flex items-center justify-center text-base shrink-0">{f.emoji}</div>
                    <span className="text-gray-300 text-sm font-medium">{f.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — big button */}
            <div className="relative z-10 flex flex-col items-center gap-4 w-full lg:w-auto">
              <Link
                href="/book-pickup"
                className="group w-full lg:w-auto flex items-center justify-center gap-3 px-10 py-6 bg-green-500 hover:bg-green-400 text-gray-900 font-black text-lg sm:text-xl rounded-2xl transition-all shadow-2xl shadow-green-900/40 hover:-translate-y-1 active:scale-95 whitespace-nowrap"
              >
                <span className="text-2xl">📦</span>
                Schedule Free Pickup
                <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </Link>
              <p className="text-gray-500 text-xs text-center">
                Free assessment · No obligation · 2-hour response
              </p>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-sm">★★★★★</span>
                <span className="text-gray-500 text-xs">4.8 · 50k+ pickups</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ REVIEWS ══════════ */}
      <section className="py-14 sm:py-16 bg-green-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2">
              Loved by thousands of green heroes.
            </h2>
            <p className="text-green-300 text-sm">Contribute to making your environment vibrant and sustainable.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-green-700/50 rounded-2xl p-5 border border-green-600">
                <div className="text-amber-400 text-sm mb-3">★★★★★</div>
                <p className="text-green-100 text-sm leading-relaxed mb-4">{r.text}</p>
                <p className="text-white text-xs font-black">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="relative py-14 sm:py-16 text-center overflow-hidden"
        style={{ background: "linear-gradient(170deg, #16a34a 0%, #15803d 40%, #14532d 100%)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-5">
            Let&apos;s fix the<br />environment<br />together.
          </h2>
          <p className="text-green-200 text-sm sm:text-base mb-10">Schedule your first pickup today</p>
          <Link
            href="/book-pickup"
            className="inline-flex items-center gap-3 px-8 py-5 sm:px-10 sm:py-6 bg-white hover:bg-green-50 text-gray-900 font-black text-base sm:text-lg rounded-2xl transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
          >
            <span className="text-xl sm:text-2xl">📦</span>
            Schedule Free Pickup →
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes floaty {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%       { transform: translateY(-14px) rotate(2deg); }
        }
      `}</style>
    </div>
  );
}