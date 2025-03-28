"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Hero } from "@/components/hero-section";
import { About } from "@/components/about-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { StatsSection } from "@/components/stats-section";
import { TrustSection } from "@/components/trust-section";
import { TreatmentOptions } from "@/components/treatment-options";
import { ArticlesSection } from "@/components/articles-section";
import { FirstStep } from "@/components/first-step";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <TreatmentOptions />
        <StatsSection />
        <WhyChooseUs />
        <TrustSection />
        <ArticlesSection />
        <FirstStep />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
