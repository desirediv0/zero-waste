
"use client";

export default function WhatsAppButton() {
  const phoneNumber = "919266057770";
  const message = "Hi, I would like to know more about ZeroWaste services.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#20BA5A]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-8 w-8"
      >
        <path d="M16.04 3C8.87 3 3.03 8.83 3.03 16c0 2.29.6 4.54 1.75 6.52L3 29l6.65-1.74A13 13 0 0 0 16.04 29C23.2 29 29.04 23.17 29.04 16S23.2 3 16.04 3Zm0 23.75c-2.02 0-4-.54-5.72-1.57l-.41-.24-3.95 1.03 1.05-3.85-.27-.42A10.7 10.7 0 0 1 5.4 16c0-5.88 4.78-10.66 10.65-10.66S26.7 10.12 26.7 16s-4.78 10.75-10.66 10.75Zm5.86-8.02c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.52-.16-.74.16-.21.32-.84 1.04-1.03 1.26-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.58-1.58-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.74-1.78-1.02-2.44-.27-.65-.54-.56-.74-.57h-.63c-.21 0-.56.08-.86.4-.3.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.31c.16.22 2.26 3.45 5.48 4.83.77.33 1.37.53 1.84.68.77.25 1.47.21 2.02.13.62-.1 1.9-.78 2.17-1.52.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37Z" />
      </svg>
    </a>
  );
}
