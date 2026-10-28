import { EnvelopeIntro } from "@/components/EnvelopeIntro";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Invitation } from "@/components/Invitation";
import { Story } from "@/components/Story";
import { Wedding } from "@/components/Wedding";
import { Schedule } from "@/components/Schedule";
import { Location } from "@/components/Location";
import { Travel } from "@/components/Travel";
import { DressCode } from "@/components/DressCode";
import { RSVP } from "@/components/RSVP";
import { FAQ } from "@/components/FAQ";
import { Registry } from "@/components/Registry";
import { Gallery } from "@/components/Gallery";
import { FinalMessage } from "@/components/FinalMessage";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FAF8F3]">
      <EnvelopeIntro />
      <Header />
      <Hero />
      <Invitation />
      <Story />
      <Wedding />
      <Schedule />
      <Location />
      <Travel />
      <DressCode />
      <RSVP />
      <FAQ />
      <Registry />
      <Gallery />
      <FinalMessage />
      <Footer />
    </main>
  );
}
