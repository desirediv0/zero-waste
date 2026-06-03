"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/scrap-rates", label: "Scrap Rates" },
    { href: "/furniture", label: "Furniture" },
    { href: "/terms", label: "Terms" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close menu on route change
    useEffect(() => { setMenuOpen(false); }, [pathname]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.06)] border-b border-gray-100"
                    : "bg-white/80 backdrop-blur-sm"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-[68px]">

                        {/* ── Logo ── */}
                        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
                            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-green-200 group-hover:ring-green-400 transition-all duration-200">
                                <Image
                                    src="/logo.png"
                                    alt="ZeroWaste india Logo"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-[13px] font-black text-gray-900 tracking-tight">ZEROWASTE</span>
                                <span className="text-[11px] font-black text-green-600 tracking-tight">ASIA</span>
                            </div>
                        </Link>

                        {/* ── Desktop Nav ── */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`relative px-4 py-2 text-sm font-bold rounded-xl transition-all duration-150 ${isActive
                                            ? "text-green-700 bg-green-50"
                                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                            }`}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-600 rounded-full" />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* ── Desktop CTA ── */}
                        <div className="hidden md:flex items-center gap-3">
                            <Link
                                href="/scrap-rates"
                                className="text-sm font-bold text-gray-600 hover:text-gray-900 px-4 py-2 rounded-xl hover:bg-gray-50 transition-all"
                            >
                                View Rates
                            </Link>
                            <Link
                                href="/book-pickup"
                                className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-black text-sm rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                            >
                                <span className="text-base">📦</span>
                                Book Pickup
                            </Link>
                        </div>

                        {/* ── Mobile Hamburger ── */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle navigation menu"
                            className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-xl hover:bg-gray-100 transition"
                        >
                            <span className={`block w-5 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                            <span className={`block w-5 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                            <span className={`block w-5 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                        </button>
                    </div>
                </div>
            </header>

            {/* ── Mobile Menu Drawer ── */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
            >
                {/* Backdrop */}
                <div
                    onClick={() => setMenuOpen(false)}
                    className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
                />

                {/* Drawer */}
                <div className={`absolute top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    {/* Drawer header */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                        <div className="flex items-center gap-2.5">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-green-200">
                                <Image src="/logo.png" alt="ZeroWaste india" fill className="object-cover" />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-[12px] font-black text-gray-900">ZEROWASTE</span>
                                <span className="text-[10px] font-black text-green-600">ASIA</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition"
                            aria-label="Close menu"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Nav links */}
                    <nav className="px-3 py-4 space-y-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm transition-all ${isActive
                                        ? "bg-green-50 text-green-700"
                                        : "text-gray-700 hover:bg-gray-50"
                                        }`}
                                >
                                    <span className="text-base">
                                        {link.label === "Home" ? "🏠"
                                            : link.label === "About" ? "ℹ️"
                                                : link.label === "Scrap Rates" ? "💸"
                                                    : link.label === "Furniture" ? "🛋️"
                                                        : "📋"}
                                    </span>
                                    {link.label}
                                    {isActive && <span className="ml-auto w-2 h-2 bg-green-500 rounded-full" />}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* CTA inside drawer */}
                    <div className="px-4 pt-2 space-y-3 border-t border-gray-100 mt-2">
                        <Link
                            href="/book-pickup"
                            className="flex items-center justify-center gap-2 w-full py-4 bg-gray-900 hover:bg-gray-800 text-white font-black text-sm rounded-2xl transition-all mt-4"
                        >
                            <span className="text-base">📦</span>
                            Book Free Pickup
                        </Link>
                        <div className="text-center pb-4">
                            <p className="text-[10px] text-gray-400 font-medium">📞 +91 88000 00000</p>
                            <p className="text-[10px] text-gray-400 font-medium mt-0.5">hello@zerowasteindia.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}