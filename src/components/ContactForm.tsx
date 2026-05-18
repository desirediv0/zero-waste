"use client";

import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        items: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus("success");
                setForm({ name: "", phone: "", email: "", city: "", items: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-2xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10">
                    <span className="inline-block text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                        Free Pickup
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Book Your Scrap Pickup
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Fill in your details and we&apos;ll reach out within 2 hours to confirm your slot.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white border border-green-100 rounded-2xl shadow-xl shadow-green-50 p-8 space-y-5"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Rahul Sharma"
                                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition bg-gray-50 placeholder:text-gray-300"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                placeholder="+91 98765 43210"
                                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition bg-gray-50 placeholder:text-gray-300"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="rahul@email.com"
                                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition bg-gray-50 placeholder:text-gray-300"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                                City *
                            </label>
                            <input
                                type="text"
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                required
                                placeholder="New Delhi"
                                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition bg-gray-50 placeholder:text-gray-300"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                            Items to Sell *
                        </label>
                        <select
                            name="items"
                            value={form.items}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition bg-gray-50 text-gray-700"
                        >
                            <option value="">Select category...</option>
                            <option value="Normal Recyclables (Paper, Metal, Plastic)">
                                Normal Recyclables (Paper, Metal, Plastic)
                            </option>
                            <option value="E-Waste (Laptop, TV, Computer)">
                                E-Waste (Laptop, TV, Computer)
                            </option>
                            <option value="Large Appliances (AC, Fridge, Washing Machine)">
                                Large Appliances (AC, Fridge, Washing Machine)
                            </option>
                            <option value="Small Appliances (Fan, Microwave, UPS)">
                                Small Appliances (Fan, Microwave, UPS)
                            </option>
                            <option value="Vehicle Scrap (Bike, Car, Scooter)">
                                Vehicle Scrap (Bike, Car, Scooter)
                            </option>
                            <option value="Mixed / Multiple Categories">
                                Mixed / Multiple Categories
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                            Additional Details
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Describe your items, approximate quantity, preferred pickup time..."
                            className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition bg-gray-50 resize-none placeholder:text-gray-300"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-3.5 px-6 bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-green-200 flex items-center justify-center gap-2"
                    >
                        {status === "loading" ? (
                            <>
                                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Sending...
                            </>
                        ) : (
                            "Schedule Free Pickup →"
                        )}
                    </button>

                    {status === "success" && (
                        <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm">
                            <span className="text-xl">✅</span>
                            <span>
                                <strong>Booking received!</strong> Our team will contact you within 2 hours to
                                confirm your pickup.
                            </span>
                        </div>
                    )}
                    {status === "error" && (
                        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                            <span className="text-xl">⚠️</span>
                            <span>Something went wrong. Please try again or call us at +91 88000 00000.</span>
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}