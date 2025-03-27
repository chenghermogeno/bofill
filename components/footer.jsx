import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ChevronRight,
} from "lucide-react";

export function Footer() {
  const services = [
    { name: "Depression Counseling", href: "/services/depression" },
    { name: "Couple Counseling", href: "/services/couples" },
    { name: "Child Psychotherapy", href: "/services/child" },
    { name: "Stress Management", href: "/services/stress" },
    { name: "Group Counseling", href: "/services/group" },
    { name: "Trauma Counseling", href: "/services/trauma" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Appointment", href: "/appointment" },
    { name: "Pricing plan", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
  ];

  const support = [
    { name: "Help Center", href: "/help" },
    { name: "System Status", href: "/status" },
    { name: "Ticket Support", href: "/support" },
    { name: "FAQ", href: "/faq" },
    { name: "Forum", href: "/forum" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="bg-[#29445f] text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/bps-logo.avif"
                alt="Bofill Psychological Services Logo"
                width={40}
                height={40}
                className="rounded-full bg-primary-foreground"
              />
              <h2 className="text-xl font-bold">BOFILL</h2>
            </div>
            <p className="text-primary-foreground/80">
              Providing compassionate, evidence-based psychological services to
              help you navigate life's challenges and achieve mental wellbeing.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="flex items-center text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    <ChevronRight className="mr-2 h-4 w-4 text-amber-400" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    <ChevronRight className="mr-2 h-4 w-4 text-amber-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Support</h3>
            <ul className="space-y-2">
              {support.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex items-center text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    <ChevronRight className="mr-2 h-4 w-4 text-amber-400" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 py-4 text-primary">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Bofill Psychological Services. All
            Rights Reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/terms" className="hover:underline">
              Terms of use
            </Link>
            <Link href="/cookie-policy" className="hover:underline">
              Cookie Policy
            </Link>
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
