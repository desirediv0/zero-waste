# ♻️ ZeroWaste india — Building a Zero-Waste Future

[![Next.js](https://img.shields.io/badge/Next.js-14.2.32-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Nodemailer](https://img.shields.io/badge/Nodemailer-SMTP-563D7C?style=for-the-badge&logo=mail-dot-ru&logoColor=white)](https://nodemailer.com/)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)](#)

> **South Asia's most trusted green recycling platform.** Schedule free doorstep pickups, get paid instantly with 100% digital weighing scale accuracy, and earn from your household scrap while carbon-offsetting our planet. ZeroWaste india makes the circular economy a seamless reality for both households and businesses.

---

## 📖 Table of Contents
1. [🌟 Key Features](#-key-features)
2. [🎨 Premium Design & Aesthetics](#-premium-design--aesthetics)
3. [🛠️ Tech Stack](#️-tech-stack)
4. [📂 Project Structure](#-project-structure)
5. [⚙️ Environment Variables Setup](#️-environment-variables-setup)
6. [🚀 Quick Start & Installation](#-quick-start--installation)
7. [⚡ API Endpoints & Mail Templates](#-api-endpoints--mail-templates)
8. [🔄 Git & Deployment Workflow](#-git--deployment-workflow)

---

## 🌟 Key Features

### 🏠 For Households & General Users
* **Doorstep Scrap Pickups**: Schedule hassle-free bookings in under 2 minutes.
* **100% Accurate Digital Weighing**: Transparent weighing scales prevent typical local dealer manipulation.
* **Instant Digital Payouts**: Get paid directly via UPI or cash at your doorstep before the collector leaves.
* **Comprehensive Scrap Range**: We purchase Paper & Books, Plastics, Metals & Iron, E-Waste (laptops/TVs), Home Appliances, and Scrap Vehicles.

### 🏢 B2B Office Furniture Recirculation
* **Corporate Liquidation**: Seamlessly list, sell, and dissolve bulky office assets (chairs, cubicles, desks, lounger units).
* **Affordable Sourcing**: Purchase eco-certified, sanitized, and quality-refurbished office furniture at **40–60% savings** compared to brand-new units.
* **Compliance Ready**: Enjoy formal payments, GST-compliant documentation, and corporate sustainability metrics reports.

### 📈 Real-Time Price Tracking
* **Scrap Rates Calculator**: A transparent listing of live scrap rates across various categories, ensuring no hidden charges or middleman cuts.

---

## 🎨 Premium Design & Aesthetics

ZeroWaste india is styled using modern, high-end web aesthetics tailored to look extremely premium:
* **Color Palette**: Highly curated, harmonious forest greens (`#16a34a`, `#15803d`, `#14532d`), charcoal dark tones (`#111827`, `#0f1f0f`), and soft pastel green accents (`#f8fffe`, `#f0fdf4`) that represent ecology and premium quality.
* **Dynamic Animations**: Smooth, hardware-accelerated floating keyframe animations (`floaty`) that bring interactive absolute-positioned elements to life.
* **Micro-interactions**: Glassmorphism borders, card hover lift effects (`hover:-translate-y-0.5`), and responsive flex grids that render perfectly across all screen sizes (mobile viewport-safe layouts `min-h-[100svh]`).

---

## ️ Tech Stack

* **Framework**: [Next.js 14.2.32](https://nextjs.org/) (App Router & Server Actions)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS 3.4.1](https://tailwindcss.com/) & Vanilla CSS with keyframe injection
* **SMTP Mailing**: [Nodemailer 8.0.7](https://nodemailer.com/) with [Brevo SMTP Relay](https://www.brevo.com/)
* **Design Icons & Assets**: Modern system emojis and custom vector gradients

---

## 📂 Project Structure

```bash
zero-waste/
├── public/                 # Static images, assets, and branding logos
│   └── logo.png
├── src/
│   ├── app/                # Next.js App Router root directory
│   │   ├── about/          # /about page - Company timeline, mission, and team
│   │   │   └── page.tsx
│   │   ├── api/            # API Route Handlers (Dynamic Server Functions)
│   │   │   ├── contact/    # /api/contact - General & Pickup bookings route
│   │   │   │   └── route.ts
│   │   │   └── furniture/  # /api/furniture - B2B Corporate furniture route
│   │   │       └── route.ts
│   │   ├── book-pickup/    # /book-pickup page - Stepwise interactive booking portal
│   │   │   └── page.tsx
│   │   ├── fonts/          # Local optimized fonts
│   │   ├── furniture/      # /furniture page - Office furniture B2B portal
│   │   │   └── page.tsx
│   │   ├── scrap-rates/    # /scrap-rates page - Real-time scrap price catalog
│   │   │   └── page.tsx
│   │   ├── terms/          # /terms page - User agreement & guidelines
│   │   │   └── page.tsx
│   │   ├── globals.css     # Global style rules & variables
│   │   ├── layout.tsx      # Root HTML Layout, Metadata, & Header/Footer integration
│   │   └── page.tsx        # Homepage - Rich visual hero, statistics, CTA, & ratings
│   ├── components/         # Reusable global React Components
│   │   ├── ContactForm.tsx # Embedded Home screen pickup booking form
│   │   ├── Footer.tsx      # Modern, semantic multi-column footer layout
│   │   └── Header.tsx      # Sticky navigation header with responsive mobile drawer
│   └── middleware.ts
├── .env.local              # Local environment configuration (SMTP credentials)
├── tailwind.config.ts      # Tailwind compilation configurations & theme extends
├── tsconfig.json           # Strict compiler configuration for TypeScript
└── package.json            # Scripts, dependencies, and project metadata
```

---

## ⚙️ Environment Variables Setup

The application communicates with your SMTP relay (e.g., Brevo) to dispatch rich HTML emails containing order briefs. Create a `.env.local` file in the root directory:

```env
# SMTP Server Details (Brevo Relay)
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=your-smtp-username-here
SMTP_PASSWORD=your-smtp-password-here

# Sender & Recipient Configuration
FROM_EMAIL=your-verified-sender-email@domain.com
ADMIN_EMAIL=recipient-admin-email@domain.com
```

> [!IMPORTANT]
> Make sure `FROM_EMAIL` matches the sender address verified in your Brevo SMTP dashboard to avoid outgoing delivery blocks.

---

## 🚀 Quick Start & Installation

### 1. Clone & Install Dependencies
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

```bash
# Clone the repository
git clone https://github.com/desirediv0/zero-waste.git

# Navigate into the project folder
cd zero-waste

# Install NPM packages
npm install
```

### 2. Launch Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your web browser. Next.js will hot-reload your code changes instantly.

### 3. Production Build & Verification
Compile and verify the application builds perfectly:
```bash
# Build the application
npm run build

# Run in production mode
npm start
```

---

## ⚡ API Endpoints & Mail Templates

ZeroWaste india hosts robust route handlers under Next.js server runtime (`src/app/api/...`), generating beautifully structured transaction receipts:

### 1. `POST /api/contact`
Handles household and detailed pickup requests from `/book-pickup` and homepage widgets. 
* **Payload Structure**:
  ```json
  {
    "name": "Rahul Sharma",
    "phone": "9876543210",
    "email": "rahul@email.com",
    "city": "New Delhi",
    "address": "123, Green Avenue",
    "pincode": "110001",
    "vehicle": "Large – Our Mini Truck",
    "date": "2026-05-20",
    "timeSlot": "10:00 AM – 12:00 PM",
    "weight": "20 – 50 kg",
    "categories": "Paper, Metals, E-Waste"
  }
  ```
* **HTML Template Features**: Features a dark/forest-green gradient headers with responsive detail tables. It generates automated summary badges showing scheduling configurations.

### 2. `POST /api/furniture`
Dedicated to B2B corporate furniture trade inquiries.
* **Payload Structure**:
  ```json
  {
    "name": "Rahul Sharma",
    "company": "ABC Pvt Ltd",
    "phone": "9876543210",
    "email": "rahul@company.com",
    "city": "New Delhi",
    "action": "Sell old office furniture",
    "type": "Office Chairs",
    "quantity": "50-100 pieces",
    "message": "We want to sell 60 ergonomic chairs."
  }
  ```
* **HTML Template Features**: Dynamically adjusts visual highlight accents based on B2B actions (e.g. emerald green for **Selling**, teal blue for **Buying**, and violet for **Both**).

---

## 🔄 Git & Deployment Workflow

Save changes and push updates to your origin branch on GitHub:

```bash
# Check modified files
git status

# Stage all updates
git add .

# Commit changes
git commit -m "feat: implement correct Next.js App Router API routes & SMTP configurations"

# Push to primary branch
git push origin main
```

---

## 📄 License
This project is licensed under the [MIT License](LICENSE) — feel free to customize and use it for building your green initiatives! 

*Built with 💚 by the ZeroWaste india team. Let's fix our environment, one piece of scrap at a time.*
