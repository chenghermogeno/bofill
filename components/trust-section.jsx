import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";

export function TrustSection() {
  return (
    <section className="py-16">
      <div className="relative">
        <div className="absolute inset-0 bg-[#29445f]/80 z-10"></div>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://videos.pexels.com/video-files/5234724/5234724-hd_1920_1080_25fps.mp4"
        />
        <div className="container mx-auto relative z-20 px-4 py-16 md:py-24 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              The professional, licensed, and vetted Psychologist who you can
              trust
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Our team of experienced psychologists is committed to providing
              compassionate, evidence-based care in a safe and supportive
              environment.
            </p>
            <Button className="bg-amber-400 text-primary hover:bg-amber-500">
              Discover more
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-[#29445f] py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          {" "}
          {/* Center text */}
          <div className="mb-10">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-amber-400">
              OUR PARTNERS
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              In Collaboration With
            </h2>
            <p className="mt-2 text-white/70">
              We work with trusted organizations to provide comprehensive mental
              health services.
            </p>
          </div>
          {/* Logos Section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {" "}
            {/* Center logos in a grid */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center bg-primary-foreground/10 p-6 rounded-lg"
              >
                <div className="text-white font-semibold">
                  Partner Logo {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
