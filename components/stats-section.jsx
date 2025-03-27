import React from "react";
import Image from "next/image";
import { Award, Users, CheckCircle, Brain } from "lucide-react";

export function StatsSection() {
  return (
    <section
      className="relative py-16"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/4101137/pexels-photo-4101137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#29445f] opacity-50" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Award className="h-12 w-12 mb-4 text-amber-400" />
            <h3 className="text-4xl font-bold text-white mb-1">10+</h3>
            <p className="text-primary-foreground/80">Years Experience</p>
          </div>

          <div className="flex flex-col items-center">
            <Users className="h-12 w-12 mb-4 text-amber-400" />
            <h3 className="text-4xl font-bold text-white mb-1">560+</h3>
            <p className="text-primary-foreground/80">Happy Clients</p>
          </div>

          <div className="flex flex-col items-center">
            <CheckCircle className="h-12 w-12 mb-4 text-amber-400" />
            <h3 className="text-4xl font-bold text-white mb-1">95%</h3>
            <p className="text-primary-foreground/80">Problems Solved</p>
          </div>

          <div className="flex flex-col items-center">
            <Brain className="h-12 w-12 mb-4 text-amber-400" />
            <h3 className="text-4xl font-bold text-white mb-1">110+</h3>
            <p className="text-primary-foreground/80">Psychologists</p>
          </div>
        </div>
      </div>
    </section>
  );
}
