import Image from "next/image";
import { Award, Users, HeartHandshake } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="relative">
            <div className="absolute inset-0 z-10 rounded-lg"></div>
            <Image
              src="https://images.pexels.com/photos/7176288/pexels-photo-7176288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="happy client in therapy"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="space-y-8">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-amber-400">
                WHY CHOOSE US
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Navigating Life's Challenges, Guided by Bofill.
              </h2>
              <p className="text-muted-foreground">
                Our team of experienced professionals is dedicated to providing
                compassionate, evidence-based care tailored to your unique needs
                and circumstances.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-amber-400">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Years Experience
                  </h3>
                  <p className="text-muted-foreground">
                    Our team brings decades of combined experience in various
                    psychological approaches and therapeutic techniques.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-amber-400">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Professional Staff
                  </h3>
                  <p className="text-muted-foreground">
                    Our psychologists and therapists are licensed, vetted
                    professionals with specialized training in various areas of
                    mental health.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-amber-400">
                  <HeartHandshake className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    24/7 Premium Support
                  </h3>
                  <p className="text-muted-foreground">
                    We're committed to being there when you need us, with
                    resources and support available around the clock.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
