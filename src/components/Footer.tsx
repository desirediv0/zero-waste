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
                                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-green-800 group-hover:ring-green-600 transition-all">
                                    <Image src="/logo.png" alt="ZeroWaste india" fill className="object-cover" />
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-[13px] font-black text-white tracking-tight">ZEROWASTE</span>
                                    <span className="text-[11px] font-black text-green-500 tracking-tight">INDIA</span>
                                </div>
                            </Link>
                            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
                                Building South Asia&apos;s most trusted recycling platform — turning household waste into economic value while protecting our planet.
                            </p>
                            {/* Social icons */}

                            <div className="flex gap-3">

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/zerowastei?psln=Y2VjYm90ZmgwdXJ1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                        <rect x="3" y="3" width="18" height="18" rx="5" />
                                        <circle cx="12" cy="12" r="4" />
                                        <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
                                    </svg>
                                </a>

                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/share/18uxHv1rwS/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-blue-600 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.6V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.2v3h2.8v8h3.5z" />
                                    </svg>
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/919266057770"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp"
                                    className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-green-600 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.04 2a9.85 9.85 0 0 0-8.45 14.92L2 22l5.22-1.37A9.96 9.96 0 0 0 12.04 22 10 10 0 0 0 12.04 2zm0 18.2c-1.5 0-2.97-.4-4.25-1.17l-.3-.18-3.1.81.83-3.02-.2-.31a8.2 8.2 0 1 1 7.02 3.87zm4.5-6.14c-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.57.12-.17.25-.65.81-.8.98-.14.17-.3.19-.55.06-.25-.12-1.06-.39-2.02-1.24-.75-.67-1.26-1.49-1.4-1.74-.15-.25-.02-.38.1-.5.1-.1.25-.3.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.57-1.37-.78-1.87-.2-.48-.42-.41-.57-.42h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.12.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.48-.61 1.69-1.2.21-.58.21-1.08.15-1.19-.06-.1-.23-.17-.48-.29z" />
                                    </svg>
                                </a>

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
                                    <p className="text-sm text-gray-500 font-medium leading-snug">Gurugram, India</p>
                                </li>
                                <li>
                                    <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Support Hours</p>
                                    <p className="text-sm text-gray-500 font-medium">10AM – 7PM · Mon–Sat</p>
                                </li>
                                <li>
                                    <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Phone</p>
                                    <a href="tel:+919266057770" className="text-sm text-gray-400 hover:text-green-400 font-black transition-colors">
                                        +91 92660 57770
                                    </a>
                                </li>
                                <li>
                                    <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Email</p>
                                    <a
                                        href="mailto:Hello@zerowaste-india.com"
                                        className="text-sm text-gray-400 hover:text-green-400 font-medium transition-colors break-all"
                                    >
                                        Hello@zerowaste-india.com
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