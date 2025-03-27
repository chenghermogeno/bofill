import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 w-full bg-[#29445f] shadow-sm">
      <div className="container flex mx-auto h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Image
            src="/bps-logo.avif"
            alt="Bofill Psychological Services Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold text-primary-foreground">
              BOFILL
            </h1>
            <p className="text-xs text-primary-foreground/80">
              PSYCHOLOGICAL SERVICES
            </p>
          </div>
        </div>
        <nav className="hidden md:flex md:items-center md:gap-6">
          {[
            "Home",
            "About Us",
            "Services",
            "Meet the Team",
            "Resources",
            "Contact Us",
          ].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              {item}
            </Link>
          ))}
        </nav>
        <Button className="hidden bg-amber-400 text-primary hover:bg-amber-500 md:flex">
          Book Appointment
        </Button>
        <button className="flex h-10 w-10 items-center justify-center rounded-md md:hidden">
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
            className="text-primary-foreground"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
