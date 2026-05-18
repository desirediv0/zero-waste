"use client";

import { useState } from "react";

/* ── Types ── */
type Category = { id: string; label: string; emoji: string };

const CATEGORIES: Category[] = [
    { id: "paper", label: "Paper", emoji: "📰" },
    { id: "metals", label: "Metals", emoji: "🔩" },
    { id: "ewaste", label: "E-Waste", emoji: "💻" },
    { id: "plastic", label: "Cartons / Plastics", emoji: "📦" },
    { id: "appliances", label: "Big Appliances", emoji: "❄️" },
    { id: "others", label: "Others", emoji: "♻️" },
];

const TIME_SLOTS = [
    "8:00 AM – 10:00 AM",
    "10:00 AM – 12:00 PM",
    "12:00 PM – 2:00 PM",
    "2:00 PM – 4:00 PM",
    "4:00 PM – 6:00 PM",
];

const WEIGHTS = [
    "Less than 5 kg",
    "5 – 20 kg",
    "20 – 50 kg",
    "50 – 100 kg",
    "100 kg+",
];

/* ── Step section wrapper ── */
function StepCard({ number, icon, title, children }: {
    number: number; icon: string; title: string; children: React.ReactNode;
}) {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-black shrink-0">
                    {number}
                </div>
                <span className="text-base sm:text-lg font-black text-gray-900 flex items-center gap-2">
                    <span>{icon}</span> {title}
                </span>
            </div>
            {children}
        </div>
    );
}

/* ══════════════════════════
   MAIN PAGE
══════════════════════════ */
export default function BookPickupPage() {
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const [city, setCity] = useState("");
    const [vehicle, setVehicle] = useState<"small" | "large" | "">("");
    const [date, setDate] = useState("");
    const [timeSlot, setTimeSlot] = useState("");
    const [weight, setWeight] = useState("");
    const [categories, setCategories] = useState<string[]>([]);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const toggleCat = (id: string) =>
        setCategories((prev) =>
            prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
        );

    const today = new Date().toISOString().split("T")[0];

    const canSubmit =
        phone.trim().length >= 10 &&
        name.trim() &&
        address.trim() &&
        city.trim() &&
        vehicle &&
        date &&
        timeSlot &&
        weight &&
        categories.length > 0;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!canSubmit) return;
        setStatus("loading");

        const payload = {
            name, phone, email, city, address, pincode,
            vehicle: vehicle === "small" ? "Small – Our Rider" : "Large – Our Mini Truck",
            date, timeSlot, weight,
            categories: categories
                .map((id) => CATEGORIES.find((c) => c.id === id)?.label ?? id)
                .join(", "),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            setStatus(res.ok ? "success" : "error");
        } catch {
            setStatus("error");
        }
    };

    /* ── Success screen ── */
    if (status === "success") {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-20">
                <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-10 sm:p-14 text-center max-w-md w-full">
                    <div className="text-7xl mb-5">✅</div>
                    <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">Pickup Confirmed!</h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        Thank you, <strong>{name}</strong>! Your pickup has been scheduled for
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-2xl px-5 py-4 mb-6">
                        <p className="font-black text-green-800 text-base">{date} · {timeSlot}</p>
                        <p className="text-green-700 text-sm mt-1">{address}, {city}</p>
                    </div>
                    <p className="text-gray-400 text-xs mb-6">
                        Our team will call you on <strong>{phone}</strong> to confirm.
                    </p>
                    <a href="/"
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-gray-900 text-white font-black text-sm rounded-2xl hover:bg-gray-800 transition">
                        ← Back to Home
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-16">
            <div className="max-w-2xl mx-auto px-4 sm:px-6">

                {/* Page header */}
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-1">Schedule a Pickup</h1>
                    <p className="text-gray-500 text-sm">
                        Fill in your details below. For queries, call{" "}
                        <a href="tel:+918800000000" className="text-green-700 font-bold hover:underline">
                            +91 88000 00000
                        </a>
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* ── Phone (first, prominent) ── */}
                    <div className="bg-green-700 rounded-2xl p-5 sm:p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-white text-green-700 rounded-full flex items-center justify-center text-sm font-black shrink-0">
                                📞
                            </div>
                            <span className="text-base sm:text-lg font-black text-white">Your Mobile Number</span>
                        </div>
                        <div className="flex items-center bg-white rounded-xl overflow-hidden border-2 border-green-500 focus-within:border-white transition">
                            <span className="px-4 py-3.5 text-sm font-bold text-gray-600 border-r border-gray-200 shrink-0">
                                🇮🇳 +91
                            </span>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                maxLength={10}
                                placeholder="98765 43210"
                                className="flex-1 px-4 py-3.5 text-sm font-bold text-gray-900 bg-transparent outline-none placeholder:text-gray-300"
                            />
                            {phone.length >= 10 && (
                                <span className="px-4 text-green-600 text-lg">✓</span>
                            )}
                        </div>
                    </div>

                    {/* ── Name + Email ── */}
                    <StepCard number={1} icon="👤" title="Your Details">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Full Name *</label>
                                <input
                                    value={name} onChange={(e) => setName(e.target.value)} required
                                    placeholder="Rahul Sharma"
                                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50 placeholder:text-gray-300 font-medium"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Email (optional)</label>
                                <input
                                    type="email"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    placeholder="rahul@email.com"
                                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50 placeholder:text-gray-300 font-medium"
                                />
                            </div>
                        </div>
                    </StepCard>

                    {/* ── Vehicle Type ── */}
                    <StepCard number={2} icon="🚛" title="Vehicle Type">
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { id: "small", emoji: "🛵", title: "Small", sub: "Our Rider" },
                                { id: "large", emoji: "🚛", title: "Large", sub: "Our Mini Truck" },
                            ].map((v) => (
                                <button
                                    key={v.id}
                                    type="button"
                                    onClick={() => setVehicle(v.id as "small" | "large")}
                                    className={`flex items-center gap-3 sm:gap-4 p-4 rounded-xl border-2 transition-all text-left ${vehicle === v.id
                                            ? "border-gray-900 bg-gray-50 shadow-sm"
                                            : "border-gray-200 bg-white hover:border-gray-300"
                                        }`}
                                >
                                    <span className="text-3xl sm:text-4xl shrink-0">{v.emoji}</span>
                                    <div>
                                        <p className="font-black text-gray-900 text-sm sm:text-base">{v.title}</p>
                                        <p className="text-gray-400 text-xs">{v.sub}</p>
                                    </div>
                                    {vehicle === v.id && (
                                        <span className="ml-auto w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center text-white text-[10px] shrink-0">✓</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </StepCard>

                    {/* ── Pickup Address ── */}
                    <StepCard number={3} icon="📍" title="Pickup Address">
                        <div className="space-y-3">
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Full Address *</label>
                                <textarea
                                    value={address} onChange={(e) => setAddress(e.target.value)} required rows={2}
                                    placeholder="House No., Street, Colony / Area..."
                                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50 placeholder:text-gray-300 font-medium resize-none"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">City *</label>
                                    <input
                                        value={city} onChange={(e) => setCity(e.target.value)} required
                                        placeholder="New Delhi"
                                        className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50 placeholder:text-gray-300 font-medium"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Pincode</label>
                                    <input
                                        value={pincode} onChange={(e) => setPincode(e.target.value)} maxLength={6}
                                        placeholder="110001"
                                        className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50 placeholder:text-gray-300 font-medium"
                                    />
                                </div>
                            </div>
                        </div>
                    </StepCard>

                    {/* ── Pickup Date ── */}
                    <StepCard number={4} icon="📅" title="Pickup Date">
                        <input
                            type="date"
                            value={date}
                            min={today}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            className="w-full px-4 py-3.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50 font-medium text-gray-700"
                        />
                    </StepCard>

                    {/* ── Time Slot ── */}
                    <StepCard number={5} icon="🕐" title="Time Slot">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {TIME_SLOTS.map((slot) => (
                                <button
                                    key={slot}
                                    type="button"
                                    onClick={() => setTimeSlot(slot)}
                                    className={`px-4 py-3 text-sm font-bold rounded-xl border-2 text-left transition-all ${timeSlot === slot
                                            ? "border-gray-900 bg-gray-50 text-gray-900"
                                            : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                                        }`}
                                >
                                    <span className="text-base mr-2">🕐</span>{slot}
                                </button>
                            ))}
                        </div>
                    </StepCard>

                    {/* ── Expected Weight ── */}
                    <StepCard number={6} icon="⚖️" title="Expected Weight">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {WEIGHTS.map((w) => (
                                <button
                                    key={w}
                                    type="button"
                                    onClick={() => setWeight(w)}
                                    className={`px-4 py-3 text-sm font-bold rounded-xl border-2 text-center transition-all ${weight === w
                                            ? "border-gray-900 bg-gray-50 text-gray-900"
                                            : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                                        }`}
                                >
                                    {w}
                                </button>
                            ))}
                        </div>
                    </StepCard>

                    {/* ── Categories ── */}
                    <StepCard number={7} icon="🗂️" title="Categories">
                        <p className="text-xs text-gray-400 font-medium mb-3">Select all that apply</p>
                        <div className="flex flex-wrap gap-2">
                            {CATEGORIES.map((cat) => {
                                const selected = categories.includes(cat.id);
                                return (
                                    <button
                                        key={cat.id}
                                        type="button"
                                        onClick={() => toggleCat(cat.id)}
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-sm font-bold transition-all ${selected
                                                ? "border-gray-900 bg-gray-900 text-white"
                                                : "border-gray-200 bg-white text-gray-700 hover:border-gray-400"
                                            }`}
                                    >
                                        <span className="text-base">{cat.emoji}</span>
                                        {cat.label}
                                        {selected && <span className="text-xs">✓</span>}
                                    </button>
                                );
                            })}
                        </div>
                    </StepCard>

                    {/* ── Error ── */}
                    {status === "error" && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm text-center font-semibold">
                            ⚠️ Something went wrong. Please call +91 88000 00000.
                        </div>
                    )}

                    {/* ── Submit ── */}
                    <button
                        type="submit"
                        disabled={!canSubmit || status === "loading"}
                        className={`w-full py-5 font-black text-base rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg ${canSubmit
                                ? "bg-gray-900 hover:bg-gray-800 text-white hover:-translate-y-0.5"
                                : "bg-gray-200 text-gray-400 cursor-not-allowed"
                            }`}
                    >
                        {status === "loading" ? (
                            <>
                                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Scheduling...
                            </>
                        ) : (
                            <>Confirm Pickup →</>
                        )}
                    </button>

                    <p className="text-center text-xs text-gray-400 pb-4">
                        By confirming, you agree to our{" "}
                        <a href="/terms" className="text-green-700 font-bold hover:underline">Terms & Conditions</a>
                    </p>
                </form>
            </div>
        </div>
    );
}