import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms & Conditions – ZeroWaste india",
    description: "Read ZeroWaste india's Terms and Conditions, service agreement, pricing policy, and cancellation guidelines.",
};

const sections = [
    {
        id: "acceptance",
        number: "01",
        title: "Acceptance of Terms",
        emoji: "📋",
        content: `By accessing and using zerowasteindia ("the Platform"), you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, do not use the service.

These terms apply to all users of the Platform — including households, businesses, and any commercial entities using our scrap pickup and recycling services.`,
    },
    {
        id: "services",
        number: "02",
        title: "Service Description",
        emoji: "♻️",
        content: `zerowasteindia provides a platform connecting household and commercial users with recycling partners. We facilitate the booking, tracking, and payment processes for scrap pickup and recycling.`,
        lists: [
            {
                title: "User Responsibilities",
                items: [
                    "Provide accurate pickup addresses",
                    "Ensure scrap is accessible for pickup",
                    "Follow safety guidelines for hazardous waste",
                ],
            },
            {
                title: "Prohibited Items",
                items: [
                    "Explosives or flammable materials",
                    "Bio-hazardous or medical waste",
                    "Confiscated or stolen property",
                ],
                danger: true,
            },
        ],
    },
    {
        id: "pricing",
        number: "03",
        title: "Pricing & Payments",
        emoji: "💰",
        content: `All rates shown on the Platform are estimates based on market conditions. Final pricing is determined upon physical verification by our collection partners at the time of pickup.

Payments can be made via Cash or Online methods through the Platform. We ensure transparent, fair pricing — no hidden charges or middlemen.`,
    },
    {
        id: "cancellation",
        number: "04",
        title: "Cancellation Policy",
        emoji: "📅",
        content: `Bookings may be cancelled up to 2 hours before the scheduled time window without any penalty.

Late cancellations may result in a "No-Show" fee charged to your next booking. We understand plans change — please cancel as early as possible so we can serve other users in your area.`,
    },
];

export default function TermsPage() {
    const lastRevised = "April 10, 2026";

    return (
        <div className="bg-white overflow-x-hidden">

            {/* ══════════ HERO ══════════ */}
            <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 overflow-hidden px-4">
                <div className="absolute inset-0 pointer-events-none" style={{
                    background: "radial-gradient(ellipse 100% 60% at 50% -5%, rgba(134,239,172,0.4) 0%, transparent 65%)"
                }} />

                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-[11px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6 border border-gray-200">
                        📋 Legal · Last revised {lastRevised}
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight mb-5">
                        Terms &amp;<br />
                        <span className="text-green-600">Conditions</span>
                    </h1>

                    <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                        Agreement for zerowasteindia Services. Please read these terms carefully before using our platform.
                    </p>

                    {/* Quick nav pills */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {sections.map((s) => (
                            <a key={s.id} href={`#${s.id}`}
                                className="text-xs font-bold text-gray-600 bg-white border border-gray-200 hover:border-green-400 hover:text-green-700 px-3 py-1.5 rounded-full transition-all">
                                {s.emoji} {s.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ CONTENT ══════════ */}
            <section className="py-8 sm:py-12 bg-white border-t border-gray-100">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="space-y-5 sm:space-y-6">
                        {sections.map((s) => (
                            <div key={s.id} id={s.id} className="scroll-mt-24 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                {/* Section header */}
                                <div className="flex items-center gap-4 p-6 sm:p-8 pb-0">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shrink-0">
                                        {s.emoji}
                                    </div>
                                    <div>
                                        <p className="text-[10px] sm:text-xs font-black text-green-600 uppercase tracking-widest mb-0.5">
                                            Section {s.number}
                                        </p>
                                        <h2 className="text-xl sm:text-2xl font-black text-gray-900">{s.title}</h2>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-6 sm:p-8 pt-5">
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line mb-5 last:mb-0">
                                        {s.content}
                                    </p>

                                    {s.lists && (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                                            {s.lists.map((list) => (
                                                <div key={list.title}
                                                    className={`rounded-2xl p-5 border ${list.danger ? "bg-red-50 border-red-100" : "bg-green-50 border-green-100"}`}>
                                                    <p className={`text-xs font-black uppercase tracking-widest mb-3 ${list.danger ? "text-red-600" : "text-green-700"}`}>
                                                        {list.danger ? "🚫" : "✅"} {list.title}
                                                    </p>
                                                    <ul className="space-y-2">
                                                        {list.items.map((item) => (
                                                            <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                                                                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-black ${list.danger ? "bg-red-200 text-red-700" : "bg-green-200 text-green-800"}`}>
                                                                    {list.danger ? "✕" : "✓"}
                                                                </span>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ INFO FOOTER STRIP ══════════ */}
            <section className="py-10 sm:py-14 bg-gray-50 border-t border-gray-100">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white rounded-2xl p-5 border border-gray-100 text-center shadow-sm">
                            <div className="text-3xl mb-2">🗓️</div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Last Revised</p>
                            <p className="font-black text-gray-900 text-sm">{lastRevised}</p>
                        </div>
                        <div className="bg-white rounded-2xl p-5 border border-gray-100 text-center shadow-sm">
                            <div className="text-3xl mb-2">⚖️</div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Governing Law</p>
                            <p className="font-black text-gray-900 text-sm">India · Delhi Courts</p>
                        </div>
                        <div className="bg-white rounded-2xl p-5 border border-gray-100 text-center shadow-sm">
                            <div className="text-3xl mb-2">📧</div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Legal Support</p>
                            <p className="font-black text-gray-900 text-sm">hello@zerowasteindia.com</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════ CTA ══════════ */}
            <section className="relative py-20 sm:py-28 text-center overflow-hidden"
                style={{ background: "linear-gradient(170deg, #16a34a 0%, #15803d 40%, #14532d 100%)" }}>
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 70%)" }} />
                <div className="relative z-10 max-w-xl mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                        Have questions about<br />these terms?
                    </h2>
                    <p className="text-green-200 text-sm sm:text-base mb-8">
                        Our support team is available 10AM – 7PM, Mon – Sat.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a href="mailto:hello@zerowasteindia.com"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 sm:px-7 sm:py-4 bg-white hover:bg-green-50 text-gray-900 font-black text-sm rounded-2xl transition-all shadow-xl hover:-translate-y-0.5">
                            📧 Contact Legal Support
                        </a>
                        <Link href="/#book-pickup"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 sm:px-7 sm:py-4 border-2 border-white/50 hover:border-white text-white font-bold text-sm rounded-2xl transition-all hover:bg-white/10">
                            📦 Book a Pickup
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}