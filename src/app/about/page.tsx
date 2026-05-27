import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us – ZeroWaste Asia",
    description: "Learn about ZeroWaste Asia's mission, vision, values, and the team building South Asia's most trusted recycling platform.",
};

const stats = [
    { value: "5,000+", label: "Happy Households", emoji: "🏠" },
    { value: "1M+ Kg", label: "Waste Recycled", emoji: "♻️" },
    { value: "₹85 Lakh+", label: "Paid to Users", emoji: "💰" },
    { value: "500K Kg", label: "CO₂ Offset", emoji: "🌿" },
    { value: "2,500+", label: "Collector Families", emoji: "👷" },
    { value: "3+ Years", label: "Of Operations", emoji: "🗓️" },
];

const values = [
    { icon: "🌍", title: "Planet First", desc: "Every decision prioritizes environmental impact over profit. Our operations are carbon-neutral by design." },
    { icon: "✅", title: "Verified Trust", desc: "All collector partners undergo strict background checks and are rated by the community for accountability." },
    { icon: "🤝", title: "Community Driven", desc: "2,500+ collector families earn dignified income through our platform. We exist to serve and enable livelihoods." },
    { icon: "⚖️", title: "Fair Economics", desc: "Live market-rate pricing ensures you always get the best value — no middlemen, no undercutting." },
];

const team = [
    { name: "Hemendra Choubey", role: "Founder & Director", emoji: "👨‍💼", color: "bg-green-100" },
    { name: "Ravi Choubey", role: "Head of Operation", emoji: "👨‍💼", color: "bg-teal-100" },
];

const timeline = [
    { year: "2026", title: "Founded in Gurgaon", desc: "ZeroWaste Asia launched in Gurgaon with a single mission: make recycling easy, fair, and accessible to every Indian household." },
    { year: "2026", title: "₹85 Lakh+ Paid to Users", desc: "Crossed a landmark — over ₹85 lakh paid back to households for their recyclables. 500K kg CO₂ offset." },
    { year: "2026", title: "5,000+ Households", desc: "Serving 5,000+ homes across Delhi NCR with verified collectors and certified recycling partners." },
];

export default function AboutPage() {
    return (
        <div className="bg-white overflow-x-hidden">

            {/* ══════════ HERO ══════════ */}
            <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden px-4">
                {/* Green glow */}
                <div className="absolute inset-0 pointer-events-none" style={{
                    background: "radial-gradient(ellipse 100% 70% at 50% -10%, rgba(134,239,172,0.5) 0%, transparent 65%)"
                }} />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-[11px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6 sm:mb-8 border border-green-200">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shrink-0" />
                        Founded 2026 · Gurgaon, India
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.95] tracking-tight mb-6">
                        We&apos;re Building a<br />
                        <span className="text-green-600">Zero-Waste</span><br />
                        <span style={{ WebkitTextStroke: "2px #16a34a", color: "transparent" }}>Future.</span>
                    </h1>

                    <p className="text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                        ZerowasteAsia started in 2022 with a simple belief: recycling should be
                        easy, rewarding, and accessible to everyone. We&apos;re on a mission to
                        make the circular economy a reality across Asia&apos;s cities.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link href="/#book-pickup"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 sm:px-8 sm:py-5 bg-gray-900 hover:bg-gray-800 text-white font-black text-sm sm:text-base rounded-2xl transition-all shadow-xl hover:-translate-y-0.5">
                            <span className="text-lg">📦</span> Schedule Free Pickup →
                        </Link>
                        <Link href="/scrap-rates"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 sm:px-8 sm:py-5 bg-white text-gray-900 font-bold text-sm sm:text-base rounded-2xl transition-all border-2 border-gray-200 hover:border-green-400 hover:-translate-y-0.5">
                            View Scrap Rates
                        </Link>
                    </div>
                </div>
            </section>

            {/* ══════════ MISSION & VISION ══════════ */}
            <section className="py-14 sm:py-16 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-gray-900 rounded-3xl p-7 sm:p-10 text-white relative overflow-hidden">
                            <div className="absolute -bottom-8 -right-8 text-[120px] opacity-10 select-none">🎯</div>
                            <div className="text-4xl mb-5">🎯</div>
                            <p className="text-[10px] sm:text-xs font-bold text-green-400 uppercase tracking-widest mb-3">Our Mission</p>
                            <h2 className="text-2xl sm:text-3xl font-black mb-4 leading-tight">
                                Transform Waste Into Economic Value
                            </h2>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                To build South Asia&apos;s most trusted platform that transforms household waste
                                into economic value — making recycling effortless, transparent, and profitable
                                for every Indian household while creating dignified livelihoods for collector
                                communities.
                            </p>
                        </div>

                        <div className="bg-green-700 rounded-3xl p-7 sm:p-10 text-white relative overflow-hidden">
                            <div className="absolute -bottom-8 -right-8 text-[120px] opacity-10 select-none">🔭</div>
                            <div className="text-4xl mb-5">🔭</div>
                            <p className="text-[10px] sm:text-xs font-bold text-green-200 uppercase tracking-widest mb-3">Our Vision</p>
                            <h2 className="text-2xl sm:text-3xl font-black mb-4 leading-tight">
                                Zero Waste to Landfill — Across Asia
                            </h2>
                            <p className="text-green-100 text-sm sm:text-base leading-relaxed">
                                A future where zero waste goes to landfill — where every household participates
                                in a circular economy, every collector is digitally empowered, and Asia leads
                                the world in sustainable urban living.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════ STATS ══════════ */}
            <section className="py-14 sm:py-16 bg-gray-50 border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12 sm:mb-16">
                        <p className="text-[10px] sm:text-xs font-bold text-green-600 uppercase tracking-widest mb-3">By the Numbers</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3">
                            Our Impact in Numbers
                        </h2>
                        <p className="text-gray-400 text-sm">Every number represents a real household, a real pickup, a real difference.</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
                        {stats.map((s) => (
                            <div key={s.label} className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-center border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                                <div className="text-3xl sm:text-4xl mb-3">{s.emoji}</div>
                                <div className="text-2xl sm:text-3xl font-black text-green-700 mb-1">{s.value}</div>
                                <div className="text-gray-500 text-xs sm:text-sm leading-tight">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ TIMELINE ══════════ */}
            <section className="py-14 sm:py-16 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12 sm:mb-16">
                        <p className="text-[10px] sm:text-xs font-bold text-green-600 uppercase tracking-widest mb-3">Our Journey</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">From Idea to Impact</h2>
                    </div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-0.5 bg-green-100 sm:-translate-x-px" />

                        <div className="space-y-8 sm:space-y-0">
                            {timeline.map((item, i) => (
                                <div key={item.year} className={`relative flex items-start gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} sm:mb-12`}>
                                    {/* Dot */}
                                    <div className="relative z-10 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-black text-xs shrink-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-6 shadow-md">
                                        {i + 1}
                                    </div>
                                    {/* Content */}
                                    <div className={`flex-1 sm:w-[calc(50%-3rem)] ${i % 2 === 0 ? "sm:pr-16 sm:text-right" : "sm:pl-16 sm:ml-auto sm:text-left"}`}>
                                        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                                            <span className="inline-block text-xs font-black text-green-600 bg-green-100 px-3 py-1 rounded-full mb-3">
                                                {item.year}
                                            </span>
                                            <h3 className="font-black text-gray-900 text-base sm:text-lg mb-2">{item.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                    {/* Empty half for alternating layout */}
                                    <div className="hidden sm:block sm:w-[calc(50%-3rem)]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════ VALUES ══════════ */}
            <section className="py-14 sm:py-16 bg-gray-50 border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12 sm:mb-16">
                        <p className="text-[10px] sm:text-xs font-bold text-green-600 uppercase tracking-widest mb-3">💚 What We Stand For</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3">Our Core Values</h2>
                        <p className="text-gray-400 text-sm">The principles that guide every decision we make.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        {values.map((v, i) => (
                            <div key={v.title} className={`rounded-3xl p-7 sm:p-8 border ${i === 0 ? "bg-gray-900 border-gray-800 text-white" : i === 1 ? "bg-green-600 border-green-700 text-white" : "bg-white border-gray-100"} hover:-translate-y-0.5 hover:shadow-lg transition-all`}>
                                <div className="text-4xl mb-4">{v.icon}</div>
                                <h3 className={`font-black text-xl mb-3 ${i < 2 ? "text-white" : "text-gray-900"}`}>{v.title}</h3>
                                <p className={`text-sm leading-relaxed ${i === 0 ? "text-gray-300" : i === 1 ? "text-green-100" : "text-gray-500"}`}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ TEAM ══════════ */}
            <section className="py-14 sm:py-16 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12 sm:mb-16">
                        <p className="text-[10px] sm:text-xs font-bold text-green-600 uppercase tracking-widest mb-3">👥 The Team</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3">The Humans Behind the Mission</h2>
                        <p className="text-gray-400 text-sm">A passionate team of environmentalists, technologists, and community builders.</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
                        {team.map((t) => (
                            <div key={t.name} className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-center border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                                <div className={`w-16 h-16 sm:w-20 sm:h-20 ${t.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 text-4xl sm:text-5xl`}>
                                    {t.emoji}
                                </div>
                                <h3 className="font-black text-gray-900 text-sm sm:text-base leading-tight">{t.name}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-snug">{t.role}</p>
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
                    <div className="text-5xl sm:text-6xl mb-6">🌿</div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-5">
                        Ready to Make<br />a Difference?
                    </h2>
                    <p className="text-green-200 text-sm sm:text-base mb-10">
                        Join 50,000+ households who are already earning from their waste while helping the planet.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link href="/#book-pickup"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 sm:px-8 sm:py-5 bg-white hover:bg-green-50 text-gray-900 font-black text-sm sm:text-base rounded-2xl transition-all shadow-2xl hover:-translate-y-1">
                            <span className="text-lg">📦</span> Schedule Free Pickup →
                        </Link>
                        <Link href="/scrap-rates"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 sm:px-8 sm:py-5 border-2 border-white/50 hover:border-white text-white font-bold text-sm sm:text-base rounded-2xl transition-all hover:bg-white/10">
                            View Scrap Rates
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}