import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us – ZeroWaste india",
    description: "Learn about ZeroWaste india's mission, vision, values, and the team building South Asia's most trusted recycling platform.",
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
    { year: "2026", title: "Founded in Gurgaon", desc: "ZeroWaste india was founded in Gurgaon with a single mission: make recycling easy, fair, and accessible to every Indian household." },
    { year: "2026", title: "Scaled to 03 Cities", desc: "Expanding our operations rapidly to cover three major cities in the Delhi NCR region." },
    { year: "2026", title: "1,000+ Households Reached", desc: "Reached 1,000+ households across Gurgaon, Delhi and Noida with 200+ verified collectors." },
];

export default function AboutPage() {
    return (
        <div className="bg-white overflow-x-hidden">

            {/* ══════════ HERO ══════════ */}
            {/* <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden px-4">
                Green glow
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
                        zerowasteindia started in 2022 with a simple belief: recycling should be
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
            </section> */}



            {/* <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden px-4 bg-gradient-to-br from-white via-green-50/70 to-emerald-50">

                Background glow effects
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "radial-gradient(ellipse 100% 65% at 50% 0%, rgba(134,239,172,0.35) 0%, transparent 70%)"
                    }}
                />
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-200/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 -left-20 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-5xl mx-auto text-center">

                    Badge
                    <div className="inline-flex items-center gap-2 bg-white text-green-800 text-[11px] sm:text-xs font-bold px-4 py-2 rounded-full mb-7 sm:mb-9 border border-green-200 shadow-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shrink-0" />
                        Founded 2026 · Gurgaon, India
                    </div>

                    Main Heading
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.02] tracking-tight mb-8">
                        We&apos;re Building a
                        <br />
                        <span className="text-green-600">Zero-Waste</span>
                        <br />
                        <span
                            style={{
                                WebkitTextStroke: "2px #16a34a",
                                color: "transparent"
                            }}
                        >
                            Future.
                        </span>
                    </h1>

                    Updated Description
                    <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
                        <div className="relative bg-white/85 backdrop-blur-md border border-green-100 rounded-3xl px-6 py-7 sm:px-10 sm:py-9 shadow-[0_15px_50px_rgba(22,101,52,0.07)]">

                            Decorative accent
                            <div className="w-14 h-1 bg-green-500 rounded-full mx-auto mb-6" />

                            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-8 sm:leading-9 font-medium">
                                Zero Waste India is a technology-driven waste management and recycling
                                platform committed to creating a cleaner, greener and more sustainable
                                future. We connect households, businesses, corporates, scrap vendors and
                                authorised recycling partners through efficient and transparent waste
                                collection and resource recovery solutions. Our services include doorstep
                                scrap collection, corporate waste management, asset buyback, e-waste
                                management, office dismantling, bulk scrap disposal and responsible
                                recycling solutions. Through digital technology, transparent pricing,
                                organised collection networks and responsible recycling practices, we aim
                                to transform waste into valuable resources while promoting the principles
                                of a circular economy.
                            </p>

                            Bottom accent
                            <div className="flex items-center justify-center gap-2 mt-7">
                                <span className="w-8 h-px bg-green-200" />
                                <span className="text-green-600 text-xs font-black tracking-[0.2em]">
                                    RECYCLE · RECLAIM · REPEAT
                                </span>
                                <span className="w-8 h-px bg-green-200" />
                            </div>

                        </div>
                    </div>

                    CTA Buttons
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">

                        <Link
                            href="/#book-pickup"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 sm:px-8 sm:py-5 bg-green-600 hover:bg-green-700 text-white font-black text-sm sm:text-base rounded-2xl transition-all duration-300 shadow-lg shadow-green-600/20 hover:-translate-y-1"
                        >
                            <span className="text-lg">📦</span>
                            Schedule Free Pickup →
                        </Link>

                        <Link
                            href="/scrap-rates"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 sm:px-8 sm:py-5 bg-white text-gray-900 font-bold text-sm sm:text-base rounded-2xl transition-all duration-300 border border-gray-200 hover:border-green-500 hover:text-green-700 hover:-translate-y-1 shadow-sm"
                        >
                            View Scrap Rates
                        </Link>

                    </div>

                </div>
            </section> */}


            <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden px-4 bg-black">

                {/* Full Background Video - No Cropping */}
                <div className="absolute inset-0 flex items-center justify-center bg-black pointer-events-none">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-contain"
                    >
                        <source src="/videos/zero_waste1.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 pointer-events-none" />

                {/* Green Overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "radial-gradient(ellipse 100% 65% at 50% 0%, rgba(22,163,74,0.20) 0%, transparent 70%)"
                    }}
                />

                {/* Hero Content */}
                <div className="relative z-10 max-w-5xl mx-auto text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-green-300 text-[11px] sm:text-xs font-bold px-4 py-2 rounded-full mb-7 sm:mb-9 border border-green-400/30 shadow-sm">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0" />
                        Founded 2026 · Gurgaon, India
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.02] tracking-tight mb-8">
                        We&apos;re Building a
                        <br />
                        <span className="text-green-400">Zero-Waste</span>
                        <br />
                        <span
                            style={{
                                WebkitTextStroke: "2px #22c55e",
                                color: "transparent"
                            }}
                        >
                            Future.
                        </span>
                    </h1>

                    {/* Description */}
                    <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
                        <div className="relative bg-black/40 backdrop-blur-md border border-white/15 rounded-3xl px-6 py-7 sm:px-10 sm:py-9 shadow-xl">

                            <div className="w-14 h-1 bg-green-500 rounded-full mx-auto mb-6" />

                            <p className="text-gray-100 text-sm sm:text-base md:text-lg leading-8 sm:leading-9 font-medium">
                                Zero Waste India is a technology-driven waste management and recycling
                                platform committed to creating a cleaner, greener and more sustainable
                                future. We connect households, businesses, corporates, scrap vendors and
                                authorised recycling partners through efficient and transparent waste
                                collection and resource recovery solutions. Our services include doorstep
                                scrap collection, corporate waste management, asset buyback, e-waste
                                management, office dismantling, bulk scrap disposal and responsible
                                recycling solutions. Through digital technology, transparent pricing,
                                organised collection networks and responsible recycling practices, we aim
                                to transform waste into valuable resources while promoting the principles
                                of a circular economy.
                            </p>

                            <div className="flex items-center justify-center gap-2 mt-7">
                                <span className="w-8 h-px bg-green-400" />
                                <span className="text-green-400 text-xs font-black tracking-[0.2em]">
                                    RECYCLE · RECLAIM · REPEAT
                                </span>
                                <span className="w-8 h-px bg-green-400" />
                            </div>

                        </div>
                    </div>

                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                        <span
                            className="mr-4 sm:mr-6 -translate-x-3 text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none"
                            style={{
                                color: "transparent",
                                WebkitTextStroke: "2px #16c75a",
                                fontFamily: "Arial, Helvetica, sans-serif",
                                letterSpacing: "-0.06em",
                            }}
                        >
                            NATURE
                        </span>

                        <Link
                            href="/book-pickup"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 sm:px-8 sm:py-5 bg-green-600 hover:bg-green-700 text-white font-black text-sm sm:text-base rounded-2xl transition-all duration-300 shadow-lg shadow-green-600/20 hover:-translate-y-1"
                        >
                            <span className="text-lg">📦</span>
                            Schedule Free Pickup →
                        </Link>

                        <Link
                            href="/scrap-rates"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 sm:px-8 sm:py-5 bg-white text-gray-900 font-bold text-sm sm:text-base rounded-2xl transition-all duration-300 border border-gray-200 hover:border-green-500 hover:text-green-700 hover:-translate-y-1 shadow-sm"
                        >
                            View Scrap Rates
                        </Link>

                    </div>

                </div>
            </section>




            {/* ══════════ MISSION & VISION ══════════ */}
            {/* <section className="py-14 sm:py-16 bg-white border-t border-gray-100">
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
                                zero waste india to Landfill — Across Asia
                            </h2>
                            <p className="text-green-100 text-sm sm:text-base leading-relaxed">
                                A future wherezero waste india goes to landfill — where every household participates
                                in a circular economy, every collector is digitally empowered, and Asia leads
                                the world in sustainable urban living.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}



            <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-white via-green-50/60 to-white border-t border-green-100">

                {/* Background decoration */}
                <div className="absolute top-10 -left-20 w-64 h-64 bg-green-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 -right-20 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl" />

                <div className="relative max-w-6xl mx-auto px-4">

                    {/* Heading */}
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-5">
                            What Drives Us
                        </span>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
                            Our Purpose. <span className="text-green-600">Our Promise.</span>
                        </h2>

                        <p className="text-gray-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
                            Building a responsible waste management ecosystem through technology, innovation and sustainability.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Mission */}
                        <div className="group bg-gray-900 rounded-3xl p-7 sm:p-9 text-white relative overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                            <div className="absolute -right-8 -bottom-8 text-[130px] opacity-[0.07] group-hover:scale-110 transition-transform duration-500">
                                🎯
                            </div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center text-3xl mb-7">
                                    🎯
                                </div>

                                <p className="text-xs font-bold text-green-400 uppercase tracking-[0.2em] mb-3">
                                    Our Mission
                                </p>

                                <h3 className="text-2xl sm:text-3xl font-black mb-5">
                                    Simplifying Waste Management
                                </h3>

                                <p className="text-gray-300 text-sm sm:text-base leading-8">
                                    To simplify waste management through technology,
                                    encourage responsible recycling and reduce the
                                    amount of waste sent to landfills.
                                </p>

                                <div className="w-12 h-1 bg-green-500 rounded-full mt-7 group-hover:w-20 transition-all duration-300" />
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="group bg-green-700 rounded-3xl p-7 sm:p-9 text-white relative overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                            <div className="absolute -right-8 -bottom-8 text-[130px] opacity-[0.09] group-hover:scale-110 transition-transform duration-500">
                                🌍
                            </div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center text-3xl mb-7">
                                    🌍
                                </div>

                                <p className="text-xs font-bold text-green-200 uppercase tracking-[0.2em] mb-3">
                                    Our Vision
                                </p>

                                <h3 className="text-2xl sm:text-3xl font-black mb-5">
                                    A Connected Zero-Waste Ecosystem
                                </h3>

                                <p className="text-green-50 text-sm sm:text-base leading-8">
                                    To build a connected zero-waste ecosystem where
                                    every recyclable material finds its way back into
                                    the resource cycle.
                                </p>

                                <div className="w-12 h-1 bg-white rounded-full mt-7 group-hover:w-20 transition-all duration-300" />
                            </div>
                        </div>

                    </div>

                    {/* Commitment */}
                    <div className="mt-6 bg-white border border-green-100 rounded-3xl p-7 sm:p-10 text-center shadow-sm hover:shadow-lg transition-all duration-300">

                        <div className="w-14 h-14 mx-auto bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-5">
                            🌱
                        </div>

                        <p className="text-xs font-bold text-green-600 uppercase tracking-[0.2em] mb-3">
                            Our Commitment
                        </p>

                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                            Smart Collection.
                            <span className="text-green-600"> Responsible Recycling.</span>
                            <span className="block mt-2">Sustainable Future.</span>
                        </h3>

                        <div className="flex justify-center gap-2 mt-7">
                            <span className="w-8 h-1 rounded-full bg-green-300" />
                            <span className="w-8 h-1 rounded-full bg-green-500" />
                            <span className="w-8 h-1 rounded-full bg-green-700" />
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
            {/* <section className="py-14 sm:py-16 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12 sm:mb-16">
                        <p className="text-[10px] sm:text-xs font-bold text-green-600 uppercase tracking-widest mb-3">Our Journey</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">From Idea to Impact</h2>
                    </div>

                    <div className="relative">
                        Vertical line
                        <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-0.5 bg-green-100 sm:-translate-x-px" />

                        <div className="space-y-8 sm:space-y-0">
                            {timeline.map((item, i) => (
                                <div key={item.title} className={`relative flex items-start gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} sm:mb-12`}>
                                    Dot
                                    <div className="relative z-10 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-black text-xs shrink-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-6 shadow-md">
                                        {i + 1}
                                    </div>
                                    Content
                                    <div className={`flex-1 sm:w-[calc(50%-3rem)] ${i % 2 === 0 ? "sm:pr-16 sm:text-right" : "sm:pl-16 sm:ml-auto sm:text-left"}`}>
                                        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                                            <span className="inline-block text-xs font-black text-green-600 bg-green-100 px-3 py-1 rounded-full mb-3">
                                                {item.year}
                                            </span>
                                            <h3 className="font-black text-gray-900 text-base sm:text-lg mb-2">{item.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                    Empty half for alternating layout
                                    <div className="hidden sm:block sm:w-[calc(50%-3rem)]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section> */}



            <section className="py-16 sm:py-20 bg-gradient-to-b from-green-50 to-white border-t border-green-100">
                <div className="max-w-4xl mx-auto px-4">

                    {/* Heading */}
                    <div className="text-center mb-14">
                        <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-3">
                            Our Journey
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
                            From Idea to <span className="text-green-600">Impact</span>
                        </h2>

                        <p className="text-gray-500 text-sm sm:text-base mt-4">
                            Every milestone takes us closer to a sustainable future.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">

                        {/* Vertical line */}
                        <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-0.5 bg-green-200 sm:-translate-x-1/2" />

                        <div className="space-y-10 sm:space-y-0">

                            {timeline.map((item, i) => (
                                <div
                                    key={item.title}
                                    className={`relative flex items-start gap-5 sm:gap-0 ${i % 2 === 0
                                        ? "sm:flex-row"
                                        : "sm:flex-row-reverse"
                                        } sm:mb-12`}
                                >

                                    {/* Number */}
                                    <div className="relative z-10 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md animate-bounce">
                                        {i + 1}
                                    </div>

                                    {/* Content Card */}
                                    <div
                                        className={`flex-1 sm:w-[calc(50%-3rem)] ${i % 2 === 0
                                            ? "sm:pr-16 sm:text-right"
                                            : "sm:pl-16 sm:ml-auto sm:text-left"
                                            }`}
                                    >
                                        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-green-100 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">

                                            <span className="inline-block text-xs font-bold text-green-700 bg-green-100 px-4 py-1.5 rounded-full mb-3">
                                                {item.year}
                                            </span>

                                            <h3 className="font-black text-gray-900 text-lg sm:text-xl mb-3">
                                                {item.title}
                                            </h3>

                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                {item.desc}
                                            </p>

                                            <div className={`mt-5 flex ${i % 2 === 0
                                                ? "sm:justify-end"
                                                : "justify-start"
                                                }`}>
                                                <span className="w-10 h-1 bg-green-500 rounded-full transition-all duration-300 group-hover:w-16" />
                                            </div>

                                        </div>
                                    </div>

                                    {/* Empty column */}
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
            {/* <section className="py-14 sm:py-16 bg-white border-t border-gray-100">
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
            </section> */}

            {/* ══════════ TEAM ══════════ */}


            <section className="relative py-20 sm:py-24 bg-[#080b09] overflow-hidden border-t border-green-900/30">
                <div className="max-w-6xl mx-auto px-4">

                    {/* Section Heading */}
                    <div className="text-center mb-16">

                        <p className="text-xs font-bold text-green-400 uppercase tracking-[0.2em] mb-5">
                            👥 The Team
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5">
                            The Humans Behind the Mission
                        </h2>

                        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                            A passionate team of environmentalists, technologists, and community builders.
                        </p>

                    </div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

                        {team.map((t, i) => (
                            <div
                                key={t.name}
                                className="group relative bg-[#111713] rounded-2xl border border-white/10 overflow-hidden hover:border-green-500/50 transition-all duration-300"
                            >

                                {/* Green Top Border */}
                                <div className="h-1 w-full bg-gradient-to-r from-green-900 via-green-500 to-green-900" />

                                <div className="p-5 sm:p-7 text-center">

                                    {/* Profile Area */}
                                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-6">

                                        <div className="absolute inset-0 rounded-full border-2 border-green-500/30 group-hover:border-green-400 transition-colors duration-300" />

                                        <div className="absolute inset-2 rounded-full bg-[#1b2920] flex items-center justify-center text-5xl sm:text-6xl group-hover:bg-green-900/40 transition-colors duration-300">
                                            {t.emoji}
                                        </div>

                                    </div>

                                    {/* Member Details */}
                                    <h3 className="font-bold text-white text-sm sm:text-base leading-tight group-hover:text-green-400 transition-colors duration-300">
                                        {t.name}
                                    </h3>

                                    <div className="w-8 h-0.5 bg-green-500 mx-auto my-4" />

                                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                        {t.role}
                                    </p>

                                </div>

                                {/* Hover Bottom Accent */}
                                <div className="h-0.5 w-0 bg-green-500 group-hover:w-full transition-all duration-500" />

                            </div>
                        ))}

                    </div>

                    {/* Bottom Message */}
                    <div className="mt-16 text-center">
                        <p className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide">
                            ONE TEAM. ONE MISSION. A GREENER FUTURE.
                        </p>
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