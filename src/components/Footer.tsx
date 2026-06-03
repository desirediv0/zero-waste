import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/scrap-rates", label: "Scrap Rates" },
    { href: "/furniture", label: "Office Furniture" },
    { href: "/terms", label: "Terms & Conditions" },
];

const scrapCategories = [
    { label: "IT E-Waste", href: "/scrap-rates" },
    { label: "Large Appliances", href: "/scrap-rates" },
    { label: "Normal Recyclables", href: "/scrap-rates" },
    { label: "Vehicle Scrap", href: "/scrap-rates" },
    { label: "Small Appliances", href: "/scrap-rates" },
];

const socialLinks = [
    { label: "Instagram", emoji: "📸", href: "#" },
    { label: "LinkedIn", emoji: "💼", href: "#" },
    { label: "YouTube", emoji: "▶️", href: "#" },
    { label: "WhatsApp", emoji: "💬", href: "#" },
];

export default function Footer() {
    return (
        <footer>

            {/* ── Main Footer ── */}
            <div className="bg-gray-950 text-gray-400">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                        {/* Brand column */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
                                <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-green-800 group-hover:ring-green-600 transition-all">
                                    <Image src="/logo.png" alt="ZeroWaste india" fill className="object-cover" />
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-[13px] font-black text-white tracking-tight">ZEROWASTE</span>
                                    <span className="text-[11px] font-black text-green-500 tracking-tight">ASIA</span>
                                </div>
                            </Link>
                            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
                                Building South Asia&apos;s most trusted recycling platform — turning household waste into economic value while protecting our planet.
                            </p>
                            {/* Social icons */}
                            <div className="flex gap-2">
                                {socialLinks.map((s) => (
                                    <a key={s.label} href={s.href} aria-label={s.label}
                                        className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-green-700 flex items-center justify-center text-sm transition-colors">
                                        {s.emoji}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Platform links */}
                        <div>
                            <h4 className="text-[11px] font-black text-white uppercase tracking-widest mb-5">Platform</h4>
                            <ul className="space-y-3">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href}
                                            className="text-sm text-gray-500 hover:text-green-400 transition-colors font-medium">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Scrap categories */}
                        <div>
                            <h4 className="text-[11px] font-black text-white uppercase tracking-widest mb-5">We Buy</h4>
                            <ul className="space-y-3">
                                {scrapCategories.map((cat) => (
                                    <li key={cat.label}>
                                        <Link href={cat.href}
                                            className="text-sm text-gray-500 hover:text-green-400 transition-colors font-medium">
                                            {cat.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-[11px] font-black text-white uppercase tracking-widest mb-5">Contact</h4>
                            <ul className="space-y-4">
                                <li>
                                    <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Address</p>
                                    <p className="text-sm text-gray-500 font-medium leading-snug">New Delhi, India</p>
                                </li>
                                <li>
                                    <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Support Hours</p>
                                    <p className="text-sm text-gray-500 font-medium">10AM – 7PM · Mon–Sat</p>
                                </li>
                                <li>
                                    <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Phone</p>
                                    <a href="tel:+918800000000" className="text-sm text-gray-400 hover:text-green-400 font-black transition-colors">
                                        +91 88000 00000
                                    </a>
                                </li>
                                <li>
                                    <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Email</p>
                                    <a href="mailto:hello@zerowasteindia.com"
                                        className="text-sm text-gray-400 hover:text-green-400 font-medium transition-colors break-all">
                                        hello@zerowasteindia.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* ── Bottom bar ── */}
                    <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <p className="text-xs text-gray-600 font-medium text-center sm:text-left">
                            © 2026 zerowasteindia · All rights reserved
                        </p>
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="font-medium ml-1">All systems operational</span>
                        </div>
                        <div className="flex gap-4 text-xs">
                            <Link href="/terms" className="text-gray-600 hover:text-green-400 font-medium transition-colors">Privacy</Link>
                            <Link href="/terms" className="text-gray-600 hover:text-green-400 font-medium transition-colors">Terms</Link>
                            <Link href="/about" className="text-gray-600 hover:text-green-400 font-medium transition-colors">About</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}