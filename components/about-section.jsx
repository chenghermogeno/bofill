import Image from "next/image";
import { Check } from "lucide-react";

export function About() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-amber-400">
                WHO WE ARE
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Journeying towards Happiness, Hand in Hand with Bofill
              </h2>
              <p className="text-muted-foreground">
                At Bofill Psychological Services, we're dedicated to helping you
                navigate life's challenges and find your path to emotional
                well-being and happiness.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-semibold">
                    Instant access to our practitioners availability
                  </h3>
                  <p className="text-muted-foreground">
                    Our online booking system allows you to see real-time
                    availability and schedule appointments that work for your
                    schedule.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-semibold">
                    Free initial phone consultation with Therapist
                  </h3>
                  <p className="text-muted-foreground">
                    Speak directly with one of our therapists to determine if
                    our services are the right fit for your needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-semibold">
                    Same day and evening appointments available
                  </h3>
                  <p className="text-muted-foreground">
                    We understand that mental health needs don't always fit into
                    a 9-5 schedule, so we offer flexible appointment times.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 z-10 rounded-lg"></div>
            <Image
              src="https://images.pexels.com/photos/23496500/pexels-photo-23496500/free-photo-of-a-woman-sitting-on-a-couch-talking-to-a-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="happy client in therapy"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
