import whatsAppLogo from "@/assets/whatsapp-logo.svg";
import { WHATSAPP_URL } from "./Header";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full gradient-gold text-navy-deep shadow-gold transition-transform duration-300 hover:scale-110"
    >
      <img src={whatsAppLogo} alt="Logo WhatsApp" className="h-6 w-6" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-gold/40" />
    </a>
  );
}

