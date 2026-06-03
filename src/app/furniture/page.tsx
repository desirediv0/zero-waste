"use client";

import { useState } from "react";

/* ══════════════════════════════════════
   MODAL FORM COMPONENT
══════════════════════════════════════ */
function FurnitureModal({ onClose }: { onClose: () => void }) {
    const [form, setForm] = useState({
        name: "", company: "", phone: "", email: "", city: "",
        type: "", quantity: "", action: "", message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch("/api/furniture", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            setStatus(res.ok ? "success" : "error");
        } catch {
            setStatus("error");
        }
    };

    const inp = "w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-white placeholder:text-gray-300 font-medium";

    return (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
            {/* Backdrop */}
            <div onClick={onClose} className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Modal */}
            <div className="relative z-10 bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[92svh] flex flex-col">

                {/* Header */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100 shrink-0">
                    <div>
                        <p className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-0.5">Office Furniture</p>
                        <h2 className="text-xl sm:text-2xl font-black text-gray-900">Get a Free Quote</h2>
                    </div>
                    <button onClick={onClose}
                        className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold transition text-lg">
                        ✕
                    </button>
                </div>

                {/* Form */}
                <div className="overflow-y-auto px-6 py-5 space-y-4">
                    {status === "success" ? (
                        <div className="py-12 text-center">
                            <div className="text-6xl mb-4">✅</div>
                            <h3 className="font-black text-gray-900 text-xl mb-2">Request Received!</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Our furniture team will contact you within 4 business hours to discuss your requirement.
                            </p>
                            <button onClick={onClose}
                                className="mt-6 px-6 py-3 bg-gray-900 text-white font-black text-sm rounded-2xl hover:bg-gray-800 transition">
                                Close
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={onSubmit} className="space-y-4">
                            {/* Name + Company */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Full Name *</label>
                                    <input name="name" value={form.name} onChange={onChange} required placeholder="Rahul Sharma" className={inp} />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Company / Office *</label>
                                    <input name="company" value={form.company} onChange={onChange} required placeholder="ABC Pvt Ltd" className={inp} />
                                </div>
                            </div>

                            {/* Phone + Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Phone *</label>
                                    <input name="phone" value={form.phone} onChange={onChange} required placeholder="+91 98765 43210" type="tel" className={inp} />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Email *</label>
                                    <input name="email" value={form.email} onChange={onChange} required placeholder="rahul@company.com" type="email" className={inp} />
                                </div>
                            </div>

                            {/* City */}
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">City *</label>
                                <input name="city" value={form.city} onChange={onChange} required placeholder="New Delhi" className={inp} />
                            </div>

                            {/* What do you want */}
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">I want to... *</label>
                                <select name="action" value={form.action} onChange={onChange} required className={inp + " text-gray-700"}>
                                    <option value="">Select an option</option>
                                    <option value="Sell old office furniture">♻️ Sell / Dispose old office furniture</option>
                                    <option value="Buy refurbished office furniture">🛋️ Buy refurbished office furniture</option>
                                    <option value="Both buy and sell">🔄 Both — buy & sell furniture</option>
                                </select>
                            </div>

                            {/* Furniture type + quantity */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Furniture Type *</label>
                                    <select name="type" value={form.type} onChange={onChange} required className={inp + " text-gray-700"}>
                                        <option value="">Select type</option>
                                        <option>Office Chairs</option>
                                        <option>Work Desks / Tables</option>
                                        <option>Cabinets & Storage</option>
                                        <option>Conference Table & Chairs</option>
                                        <option>Sofas & Lounge Seating</option>
                                        <option>Cubicle Partitions / Panels</option>
                                        <option>Mixed / Multiple Types</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Approx. Quantity</label>
                                    <select name="quantity" value={form.quantity} onChange={onChange} className={inp + " text-gray-700"}>
                                        <option value="">Select range</option>
                                        <option>1–10 pieces</option>
                                        <option>10–50 pieces</option>
                                        <option>50–100 pieces</option>
                                        <option>100+ pieces</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Additional Details</label>
                                <textarea name="message" value={form.message} onChange={onChange} rows={3}
                                    placeholder="Describe the condition, brand, preferred timeline, budget..."
                                    className={inp + " resize-none"} />
                            </div>

                            <button type="submit" disabled={status === "loading"}
                                className="w-full py-4 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white font-black text-sm rounded-2xl transition-all flex items-center justify-center gap-2">
                                {status === "loading" ? (
                                    <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>Sending...</>
                                ) : (
                                    <><span className="text-base">🛋️</span> Submit Request →</>
                                )}
                            </button>

                            {status === "error" && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm text-center">
                                    ⚠️ Something went wrong. Call us at +91 91726 47718.
                                </div>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ══════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════ */
const features = [
    { emoji: "🪑", title: "Office Chairs", desc: "Ergonomic, executive, and task chairs — bulk quantities available." },
    { emoji: "🖥️", title: "Work Desks & Tables", desc: "L-shaped, standing desks, conference tables, and workstations." },
    { emoji: "🗄️", title: "Cabinets & Storage", desc: "Filing cabinets, bookshelves, pedestals, and lockers." },
    { emoji: "🛋️", title: "Lounge & Reception", desc: "Sofas, reception counters, and breakout area furniture." },
    { emoji: "🏢", title: "Cubicle Systems", desc: "Full partition systems, panel boards, and modular setups." },
    { emoji: "🔄", title: "We Buy & Sell", desc: "Dispose of old furniture for value, or source quality refurbished pieces." },
];

const howItWorks = [
    { step: "01", emoji: "📝", title: "Submit Request", desc: "Fill the quick form with your requirement — takes under 2 minutes." },
    { step: "02", emoji: "📞", title: "We Call Back", desc: "Our furniture team contacts you within 4 hours to understand your needs." },
    { step: "03", emoji: "🏢", title: "Site Assessment", desc: "We visit your office at a convenient time for inspection and valuation." },
    { step: "04", emoji: "💸", title: "Deal Done", desc: "Get paid for your old furniture, or receive your refurbished pieces — hassle free." },
];

const testimonials = [
    { name: "Arpit Gupta", company: "TechCorp Noida", text: "Cleared 200+ old chairs and desks from our office in one day. Great pricing and zero hassle." },
    { name: "Sneha Joshi", company: "StartupHub Delhi", text: "Furnished our entire 50-seat office with refurbished furniture at 40% the cost of new. Excellent quality." },
    { name: "Rakesh Malhotra", company: "LogiPro Gurugram", text: "Professional team, transparent valuation, and prompt payment. Would definitely use again." },
];

export default function FurniturePage() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="bg-white overflow-x-hidden">
            {modalOpen && <FurnitureModal onClose={() => setModalOpen(false)} />}

            {/* ══════════ HERO ══════════ */}
            <section className="relative min-h-[90svh] flex flex-col items-center justify-center pt-20 pb-12 px-4 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" style={{
                    background: "radial-gradient(ellipse 100% 70% at 50% -5%, rgba(134,239,172,0.45) 0%, transparent 65%)"
                }} />

                {/* Floating furniture emojis */}
                {[
                    { e: "🪑", pos: "top-28 left-[8%]", d: "3s" },
                    { e: "🛋️", pos: "top-36 right-[10%]", d: "2.6s" },
                    { e: "🗄️", pos: "top-56 left-[5%]", d: "3.8s" },
                    { e: "🖥️", pos: "bottom-40 right-[8%]", d: "3.2s" },
                    { e: "💡", pos: "top-44 right-[6%]", d: "2.4s" },
                ].map((obj, i) => (
                    <span key={i} className={`hidden sm:block absolute select-none text-4xl ${obj.pos}`}
                        style={{ animation: `floaty ${obj.d} ease-in-out infinite` }}>
                        {obj.e}
                    </span>
                ))}

                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-[11px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6 border border-green-200">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shrink-0" />
                        Office Furniture · Buy & Sell · Pan India
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.92] tracking-tight mb-5">
                        Office Furniture,<br />
                        <span className="text-green-600">Recirculated.</span>
                    </h1>

                    <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                        We help offices sell their old furniture at fair prices and source quality
                        refurbished furniture at a fraction of new costs — sustainable, simple, and fast.
                    </p>

                    {/* Main CTA Button */}
                    <button
                        onClick={() => setModalOpen(true)}
                        className="group inline-flex items-center gap-3 px-8 py-5 sm:px-10 sm:py-6 bg-gray-900 hover:bg-gray-800 text-white font-black text-base sm:text-lg rounded-2xl transition-all shadow-2xl hover:shadow-gray-300 hover:-translate-y-1"
                    >
                        <span className="text-2xl">🛋️</span>
                        Get a Free Quote
                        <span className="group-hover:translate-x-1 transition-transform text-xl">→</span>
                    </button>

                    <p className="text-gray-400 text-xs mt-4 font-medium">
                        Free assessment · No obligation · Response within 4 hours
                    </p>

                    {/* Trust row */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
                        {["♻️ Eco-certified disposal", "⚡ Same-week pickup", "💸 Best market rates", "✅ 500+ offices served"].map((b) => (
                            <span key={b} className="text-xs font-bold bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full">
                                {b}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Hero bottom card */}
                <div className="relative z-10 w-full max-w-2xl mx-auto mt-12 px-0">
                    <div className="bg-gray-900 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                        <div className="flex-1">
                            <p className="text-green-400 text-xs font-black uppercase tracking-widest mb-1">Why recirculate?</p>
                            <h3 className="text-white font-black text-xl sm:text-2xl leading-snug mb-2">
                                Save up to 60% vs buying new
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Refurbished office furniture is rigorously cleaned, repaired, and quality-checked.
                                Offices save lakhs — and keep tonnes of furniture out of landfills.
                            </p>
                        </div>
                        <div className="text-6xl sm:text-7xl shrink-0">💰</div>
                    </div>
                </div>
            </section>

            {/* ══════════ WHAT WE HANDLE ══════════ */}
            <section className="py-14 sm:py-16 bg-gray-50 border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12 sm:mb-16">
                        <p className="text-[10px] sm:text-xs font-bold text-green-600 uppercase tracking-widest mb-3">What We Handle</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3">
                            Every type of office furniture
                        </h2>
                        <p className="text-gray-400 text-sm">We buy old, we sell refurbished — all categories covered.</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                        {features.map((f) => (
                            <div key={f.title} className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-gray-100 hover:border-green-300 hover:shadow-md hover:-translate-y-0.5 transition-all">
                                <div className="text-3xl sm:text-4xl mb-3">{f.emoji}</div>
                                <h3 className="font-black text-gray-900 text-sm sm:text-base mb-1.5 leading-tight">{f.title}</h3>
                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ HOW IT WORKS ══════════ */}
            <section className="py-14 sm:py-16 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12 sm:mb-16">
                        <p className="text-[10px] sm:text-xs font-bold text-green-600 uppercase tracking-widest mb-3">Simple Process</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
                            How it works
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {howItWorks.map((s) => (
                            <div key={s.step} className="relative">
                                <div className="relative w-20 h-20 flex items-center justify-center mb-5 mx-auto sm:mx-0">
                                    <div className="absolute inset-0 rounded-full bg-green-50" />
                                    <div className="absolute inset-3 rounded-full bg-green-100" />
                                    <div className="relative w-14 h-14 rounded-full bg-green-200 flex items-center justify-center text-2xl">
                                        {s.emoji}
                                    </div>
                                </div>
                                <p className="text-[10px] font-black text-green-500 uppercase tracking-widest mb-1 text-center sm:text-left">Step {s.step}</p>
                                <h3 className="font-black text-gray-900 text-base mb-2 text-center sm:text-left">{s.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed text-center sm:text-left">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ BUY vs SELL SPLIT ══════════ */}
            <section className="py-14 sm:py-16 bg-gray-50 border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {/* Sell */}
                        <div className="bg-gray-900 rounded-3xl p-7 sm:p-10 text-white relative overflow-hidden">
                            <div className="absolute -bottom-8 -right-8 text-[100px] opacity-10 select-none pointer-events-none">♻️</div>
                            <div className="text-4xl mb-4">♻️</div>
                            <p className="text-[10px] font-black text-green-400 uppercase tracking-widest mb-2">Got old furniture?</p>
                            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
                                Sell it to us.<br />Get paid fast.
                            </h3>
                            <ul className="space-y-2.5 mb-7">
                                {["Free site assessment and valuation", "Competitive market-rate pricing", "We handle full disassembly & pickup", "Instant payment on the same day"].map((i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                                        <span className="w-5 h-5 bg-green-700 rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-black text-white">✓</span>
                                        {i}
                                    </li>
                                ))}
                            </ul>
                            <button onClick={() => setModalOpen(true)}
                                className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-black text-sm rounded-2xl transition-all hover:-translate-y-0.5">
                                Sell Furniture →
                            </button>
                        </div>

                        {/* Buy */}
                        <div className="bg-green-700 rounded-3xl p-7 sm:p-10 text-white relative overflow-hidden">
                            <div className="absolute -bottom-8 -right-8 text-[100px] opacity-10 select-none pointer-events-none">🛋️</div>
                            <div className="text-4xl mb-4">🛋️</div>
                            <p className="text-[10px] font-black text-green-200 uppercase tracking-widest mb-2">Need furniture?</p>
                            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
                                Buy refurbished.<br />Save 40–60%.
                            </h3>
                            <ul className="space-y-2.5 mb-7">
                                {["Quality-checked and sanitized stock", "All major brands available", "Delivery and installation included", "Bulk order discounts available"].map((i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-green-100">
                                        <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-black text-white">✓</span>
                                        {i}
                                    </li>
                                ))}
                            </ul>
                            <button onClick={() => setModalOpen(true)}
                                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-green-50 text-gray-900 font-black text-sm rounded-2xl transition-all hover:-translate-y-0.5">
                                Buy Furniture →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════ TESTIMONIALS ══════════ */}
            <section className="py-14 sm:py-16 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <p className="text-[10px] sm:text-xs font-bold text-green-600 uppercase tracking-widest mb-3">Testimonials</p>
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Offices that trust us</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                        {testimonials.map((t) => (
                            <div key={t.name} className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
                                <div className="text-amber-400 text-sm mb-3">★★★★★</div>
                                <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                                <div>
                                    <p className="font-black text-gray-900 text-sm">{t.name}</p>
                                    <p className="text-gray-400 text-xs">{t.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ FINAL CTA ══════════ */}
            <section className="relative py-24 sm:py-32 text-center overflow-hidden"
                style={{ background: "linear-gradient(170deg, #16a34a 0%, #14532d 100%)" }}>
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 70%)" }} />
                <div className="relative z-10 max-w-xl mx-auto px-4">
                    <div className="text-5xl sm:text-6xl mb-5">🏢</div>
                    <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
                        Ready to clear out<br />or furnish your office?
                    </h2>
                    <p className="text-green-200 text-sm sm:text-base mb-10">
                        Get a free quote in minutes. Our team responds within 4 hours.
                    </p>
                    <button onClick={() => setModalOpen(true)}
                        className="inline-flex items-center gap-3 px-8 py-5 sm:px-10 sm:py-6 bg-white hover:bg-green-50 text-gray-900 font-black text-base sm:text-lg rounded-2xl transition-all shadow-2xl hover:-translate-y-1">
                        <span className="text-xl">🛋️</span>
                        Get a Free Quote →
                    </button>
                </div>
            </section>

            <style jsx>{`
        @keyframes floaty {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-14px) rotate(2deg); }
        }
      `}</style>
        </div>
    );
}