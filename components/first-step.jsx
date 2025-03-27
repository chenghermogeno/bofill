import { Button } from "./ui/button";
import { Calendar } from "lucide-react";
import { Input } from "./ui/input";

export function FirstStep() {
  return (
    <section className="bg-blue-50 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Ready to take the first step?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-2xl">
                Schedule a consultation with one of our experienced
                psychologists today.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button className="bg-amber-400 text-primary hover:bg-amber-500">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button variant="outline">Contact Us</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-lg bg-white p-15">
              <div className="mb-6 text-center">
                <h3 className="text-3xl font-bold">Get Free Resources</h3>
                <p className="text-sm text-muted-foreground">
                  Sign up for our newsletter to receive helpful resources and
                  updates
                </p>
              </div>
              <form className="space-y-5">
                <div className="space-y-3">
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <Button type="submit" className="w-full bg-[#29445f]">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
