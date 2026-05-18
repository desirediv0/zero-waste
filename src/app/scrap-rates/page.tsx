"use client";

import { useState } from "react";
import Link from "next/link";

type Item = { name: string; price: string; unit: string; category: string; emoji: string };

const categories = ["All", "IT E-Waste", "Large Appliances", "Normal Recyclables", "Vehicle Scrap", "Small Appliances"];

const categoryMeta: Record<string, { emoji: string; color: string; bg: string; border: string }> = {
    "IT E-Waste": { emoji: "💻", color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-200" },
    "Large Appliances": { emoji: "❄️", color: "text-orange-700", bg: "bg-orange-50", border: "border-orange-200" },
    "Normal Recyclables": { emoji: "♻️", color: "text-green-700", bg: "bg-green-50", border: "border-green-200" },
    "Vehicle Scrap": { emoji: "🚗", color: "text-purple-700", bg: "bg-purple-50", border: "border-purple-200" },
    "Small Appliances": { emoji: "🔌", color: "text-teal-700", bg: "bg-teal-50", border: "border-teal-200" },
};

const items: Item[] = [
    // IT E-Waste
    { name: "CRT Monitor", price: "₹150", unit: "per unit", category: "IT E-Waste", emoji: "🖥️" },
    { name: "Printer / Scanner / Fax", price: "₹20", unit: "per kg", category: "IT E-Waste", emoji: "🖨️" },
    { name: "CRT TV", price: "₹200", unit: "per unit", category: "IT E-Waste", emoji: "📺" },
    { name: "Laptop", price: "₹500", unit: "per unit", category: "IT E-Waste", emoji: "💻" },
    { name: "Computer CPU", price: "₹400", unit: "per unit", category: "IT E-Waste", emoji: "🖥️" },
    { name: "Tablet", price: "₹40", unit: "per unit", category: "IT E-Waste", emoji: "📱" },
    // Large Appliances
    { name: "Semi Auto Washing Machine", price: "₹800", unit: "per unit", category: "Large Appliances", emoji: "🫧" },
    { name: "Window / Split AC (2 Ton)", price: "₹5,600", unit: "per unit", category: "Large Appliances", emoji: "❄️" },
    { name: "Geyser", price: "₹20", unit: "per kg", category: "Large Appliances", emoji: "🚿" },
    { name: "Split AC (1.5 Ton)", price: "₹4,500", unit: "per unit", category: "Large Appliances", emoji: "❄️" },
    { name: "Gym Equipments", price: "₹20", unit: "per kg", category: "Large Appliances", emoji: "🏋️" },
    { name: "Inverter Battery", price: "₹81", unit: "per kg", category: "Large Appliances", emoji: "🔋" },
    { name: "Single Door Fridge", price: "₹1,100", unit: "per unit", category: "Large Appliances", emoji: "🧊" },
    { name: "Double Door Fridge", price: "₹1,350", unit: "per unit", category: "Large Appliances", emoji: "🧊" },
    // Normal Recyclables
    { name: "Copper", price: "₹505", unit: "per kg", category: "Normal Recyclables", emoji: "🔶" },
    { name: "Aluminium", price: "₹112", unit: "per kg", category: "Normal Recyclables", emoji: "🪙" },
    { name: "Newspaper", price: "₹15", unit: "per kg", category: "Normal Recyclables", emoji: "📰" },
    { name: "Books", price: "₹12", unit: "per kg", category: "Normal Recyclables", emoji: "📚" },
    { name: "Plastic", price: "₹8", unit: "per kg", category: "Normal Recyclables", emoji: "🧴" },
    { name: "Iron", price: "₹25", unit: "per kg", category: "Normal Recyclables", emoji: "⚙️" },
    { name: "Brass", price: "₹325", unit: "per kg", category: "Normal Recyclables", emoji: "🔩" },
    { name: "Steel", price: "₹42", unit: "per kg", category: "Normal Recyclables", emoji: "🪛" },
    // Vehicle Scrap
    { name: "Bike", price: "₹2,500", unit: "per unit", category: "Vehicle Scrap", emoji: "🏍️" },
    { name: "Scooty / Scooter", price: "₹1,800", unit: "per unit", category: "Vehicle Scrap", emoji: "🛵" },
    { name: "Car", price: "₹20,000", unit: "per unit", category: "Vehicle Scrap", emoji: "🚗" },
    // Small Appliances
    { name: "Ceiling Fan", price: "₹35", unit: "per kg", category: "Small Appliances", emoji: "💨" },
    { name: "Microwave", price: "₹350", unit: "per unit", category: "Small Appliances", emoji: "📦" },
    { name: "UPS", price: "₹180", unit: "per unit", category: "Small Appliances", emoji: "🔌" },
];

const highlights = [
    { label: "Copper", price: "₹505/kg", emoji: "🔶", trend: "▲ 2.1%", up: true },
    { label: "Laptop", price: "₹500/unit", emoji: "💻", trend: "▲ 1.8%", up: true },
    { label: "AC 1.5T", price: "₹4,500/unit", emoji: "❄️", trend: "─ Stable", up: false },
    { label: "Brass", price: "₹325/kg", emoji: "🔩", trend: "▲ 1.4%", up: true },
];

export default function ScrapRatesPage() {
    const [active, setActive] = useState("All");
    const [search, setSearch] = useState("");

    const filtered = items.filter((item) => {
        const matchCat = active === "All" || item.category === active;
        const matchSearch = search === "" || item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    const counts = categories.reduce((acc, cat) => {
        acc[cat] = cat === "All" ? items.length : items.filter((i) => i.category === cat).length;
        return acc;
    }, {} as Record<string, number>);

    return (
        <div className="bg-white overflow-x-hidden">

            {/* ══════════ HERO ══════════ */}
            <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 overflow-hidden px-4">
                <div className="absolute inset-0 pointer-events-none" style={{
                    background: "radial-gradient(ellipse 100% 60% at 50% -5%, rgba(134,239,172,0.5) 0%, transparent 65%)"
                }} />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-[11px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-5 sm:mb-7 border border-green-200">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shrink-0" />
                        Scrap Pricing v4.28 · Live Market Rates
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight mb-4">
                        Live Scrap Rates
                    </h1>
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-8 max-w-xl mx-auto">
                        Trade your recyclables at precision-guaranteed market rates with instant payouts.
                    </p>

                    {/* Trust badges */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
                        {["✅ Certified", "⚡ Fast Payout", "🌿 Eco-Credit", "⚖️ Digital Weighing"].map((b) => (
                            <span key={b} className="text-xs font-bold bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full">
                                {b}
                            </span>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="max-w-md mx-auto relative">
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search: Copper, AC, Laptop, Iron..."
                            className="w-full pl-11 pr-4 py-3.5 sm:py-4 text-sm border border-gray-200 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm font-medium placeholder:text-gray-300"
                        />
                    </div>
                </div>
            </section>

            {/* ══════════ RATE HIGHLIGHTS ══════════ */}
            <section className="pb-8 sm:pb-12 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {highlights.map((h) => (
                            <div key={h.label} className="bg-gray-900 rounded-2xl sm:rounded-3xl p-4 sm:p-5 text-white">
                                <div className="text-2xl sm:text-3xl mb-2">{h.emoji}</div>
                                <p className="text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">{h.label}</p>
                                <p className="text-lg sm:text-xl font-black mt-1">{h.price}</p>
                                <p className={`text-xs font-bold mt-1 ${h.up ? "text-green-400" : "text-gray-400"}`}>{h.trend}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ FILTER TABS ══════════ */}
            <div className="sticky top-14 sm:top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 overflow-x-auto">
                    <div className="flex gap-2 py-3 min-w-max">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold rounded-full transition-all whitespace-nowrap ${active === cat
                                        ? "bg-gray-900 text-white shadow-sm"
                                        : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700"
                                    }`}
                            >
                                {cat !== "All" && <span>{categoryMeta[cat]?.emoji}</span>}
                                {cat}
                                <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-full ${active === cat ? "bg-white/20 text-white" : "bg-gray-200 text-gray-500"}`}>
                                    {counts[cat]}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ══════════ ITEMS GRID ══════════ */}
            <section className="py-10 sm:py-14 bg-gray-50 min-h-[50vh]">
                <div className="max-w-6xl mx-auto px-4">

                    {/* Category header */}
                    {active !== "All" && (
                        <div className="flex items-center gap-3 mb-6 sm:mb-8">
                            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xl ${categoryMeta[active]?.bg} ${categoryMeta[active]?.border} border`}>
                                {categoryMeta[active]?.emoji}
                            </div>
                            <div>
                                <h2 className="font-black text-gray-900 text-lg sm:text-xl">{active}</h2>
                                <p className="text-gray-400 text-xs">{counts[active]} items · Verified rates</p>
                            </div>
                        </div>
                    )}

                    {filtered.length === 0 ? (
                        <div className="text-center py-24 text-gray-400">
                            <div className="text-5xl sm:text-6xl mb-4">🔍</div>
                            <p className="font-black text-gray-700 text-lg">No results for &quot;{search}&quot;</p>
                            <p className="text-sm mt-2">Try searching for Copper, AC, Laptop, or Iron</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                            {filtered.map((item) => {
                                const meta = categoryMeta[item.category];
                                return (
                                    <div key={`${item.category}-${item.name}`}
                                        className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                                        <div className="text-2xl sm:text-3xl mb-3">{item.emoji}</div>
                                        <span className={`inline-block text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border mb-2 ${meta?.bg} ${meta?.color} ${meta?.border}`}>
                                            {item.category}
                                        </span>
                                        <h3 className="font-black text-gray-900 text-sm sm:text-base leading-tight mb-1">{item.name}</h3>
                                        <p className="text-green-700 font-black text-lg sm:text-xl">{item.price}</p>
                                        <p className="text-gray-400 text-[10px] sm:text-xs">{item.unit}</p>
                                        <Link href="/#book-pickup"
                                            className="block mt-3 text-center text-[10px] sm:text-xs font-bold py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-xl transition">
                                            Book Pickup →
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* ══════════ CTA ══════════ */}
            <section className="py-14 sm:py-20 bg-gray-900 text-center px-4">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
                        Ready to sell your scrap<br />at today&apos;s best rates?
                    </h2>
                    <p className="text-gray-400 text-sm mb-8">
                        Free doorstep pickup · Verified rates · Instant UPI payment
                    </p>
                    <Link href="/#book-pickup"
                        className="inline-flex items-center gap-2 px-6 py-4 sm:px-8 sm:py-5 bg-green-600 hover:bg-green-700 text-white font-black text-sm sm:text-base rounded-2xl transition-all shadow-lg hover:-translate-y-0.5">
                        <span className="text-lg">📦</span> Schedule Free Pickup →
                    </Link>
                </div>
            </section>
        </div>
    );
}