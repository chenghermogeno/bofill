import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award, Users, CheckCircle, Brain, Heart, Star } from "lucide-react";

export function TreatmentOptions() {
  const treatments = [
    {
      title: "Depression Counseling",
      description:
        "Professional support for managing depression symptoms and developing coping strategies for improved mental wellbeing.",
      image:
        "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Couple Counseling",
      description:
        "Guidance for couples seeking to improve communication, resolve conflicts, and strengthen their relationship.",
      image:
        "https://images.pexels.com/photos/4098228/pexels-photo-4098228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Child Psychotherapy",
      description:
        "Specialized therapy approaches for children dealing with emotional, behavioral, or developmental challenges.",
      image:
        "https://images.pexels.com/photos/7447259/pexels-photo-7447259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Stress Management",
      description:
        "Learn effective techniques to manage stress, anxiety, and build resilience in your daily life.",
      image:
        "https://images.pexels.com/photos/5699424/pexels-photo-5699424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Group Counseling",
      description:
        "Therapeutic group sessions providing support, connection, and shared learning experiences with others.",
      image:
        "https://images.pexels.com/photos/5711034/pexels-photo-5711034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Trauma Counseling",
      description:
        "Specialized support for processing and healing from traumatic experiences using evidence-based approaches.",
      image:
        "https://images.pexels.com/photos/8560221/pexels-photo-8560221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-amber-400">
            TREATMENT OPTIONS
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Discover Balance and Harmony with Bofill
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            We offer a comprehensive range of psychological services tailored to
            meet your unique needs and goals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg bg-background shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={treatment.image || "/placeholder.svg"}
                  alt={treatment.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-center text-xl font-bold">
                  {treatment.title}
                </h3>
                <p className="mb-4 text-center text-muted-foreground">
                  {treatment.description}
                </p>
                <div className="flex justify-center">
                  <Button className="bg-amber-400 text-primary hover:bg-amber-500">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
