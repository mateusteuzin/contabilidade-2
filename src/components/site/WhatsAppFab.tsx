import { WHATSAPP_URL } from "./Header";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-gold transition-transform duration-300 hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-8 w-8"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B8962E" />
          </linearGradient>
        </defs>

        {/* Fundo dourado */}
        <circle cx="12" cy="12" r="12" fill="url(#goldGradient)" />

        {/* Logo WhatsApp */}
        <path
          fill="#ffffff"
          d="M17.5 14.3c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2s-.8.9-1 1.1c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6s-.7-1.6-1-2.2c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.3 2.2 3.4 5.4 4.8.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4z"
        />
      </svg>

      {/* Animação ping */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-yellow-400/40"></span>
    </a>
  );
}