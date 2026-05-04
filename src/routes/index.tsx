import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Authority } from "@/components/site/Authority";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Process } from "@/components/site/Process";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { CtaFinal } from "@/components/site/CtaFinal";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Authority />
        <Services />
        <WhyChoose />
        <Process />
        <Pricing />
        <Stats />
        <Testimonials />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
