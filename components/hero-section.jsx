import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Calendar, ChevronRight } from "lucide-react";

export function Hero() {
  const images = [
    "https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg", // Use direct image URLs
    "https://images.pexels.com/photos/7176224/pexels-photo-7176224.jpeg",
    "https://images.pexels.com/photos/3958379/pexels-photo-3958379.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false); // State for fade effect

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false); // Start fade in
      }, 1000); // Duration of fade out
    }, 3000); // Change image every 9 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <>
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src={images[currentImageIndex]} // Use the current image URL
            alt="Hero Banner"
            fill
            className={`object-cover transition-opacity duration-1000 ${
              fade ? "opacity-0" : "opacity-100"
            }`} // Smooth transition
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#29445f] opacity-50" />
        <div className="container relative mx-auto z-20 px-4 py-24 md:py-32 lg:py-40 md:px-6">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-amber-400">
              RESTORE YOUR MENTAL WELLBEING
            </p>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              We Help You Restore Your{" "}
              <span className="text-amber-400">Clarity</span> and{" "}
              <span className="text-amber-400">Harmony</span>
            </h2>
            <p className="mb-8 max-w-[600px] text-lg text-white/80">
              At Bofill Psychological Services, we believe in the power of
              compassionate care and evidence-based approaches to mental health.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button className="bg-amber-400 text-primary hover:bg-amber-500">
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
              <Button
                variant="outline"
                className="bg-white text-[#29445f] hover:bg-white/10"
              >
                Discover More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0 md:py-0 lg:py-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-6 -mt-16 relative z-30 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-amber-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-amber-600"
                >
                  <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
                  <path d="m6 17 3.13-5.78c.53-.97.43-2.22-.26-3.07A2.97 2.97 0 0 1 8.5 6" />
                  <path d="m8.5 6 3.44-3.44a.59.59 0 0 1 .82.15l1.17 1.94a.59.59 0 0 1-.15.82L12.5 6.5" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Individual Therapy</h3>
              <p className="mb-4 text-muted-foreground">
                Professional guidance for individuals seeking support with
                anxiety, depression, trauma, and more.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-amber-400 p-6 shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-[#29445f]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-amber-400"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M8.3 15a1.94 1.94 0 0 0-3.6 0" />
                  <path d="M15.3 15a1.94 1.94 0 0 0-3.6 0" />
                  <path d="M9 10h.01" />
                  <path d="M15 10h.01" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-primary">
                Stress Management
              </h3>
              <p className="mb-4 text-primary">
                Learn effective techniques to manage stress, anxiety, and build
                resilience in your daily life.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-amber-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-amber-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Cognitive Therapy</h3>
              <p className="mb-4 text-muted-foreground">
                Evidence-based approaches to help change negative thought
                patterns and improve mental wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
