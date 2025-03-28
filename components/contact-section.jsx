import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-amber-400 sm:text-sm">
            GET IN TOUCH
          </p>
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">
            Contact Us
          </h2>
          <p className="mx-auto max-w-[700px] text-sm text-muted-foreground sm:text-base md:text-lg">
            Have questions or ready to schedule an appointment? Reach out to our
            team for prompt assistance.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-10 md:grid-cols-2">
          {/* Map Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1930.316776616582!2d120.99954224221878!3d14.619939086496158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b764c6b50915%3A0x431a91d4c82edfff!2sBofill%20Psychological%20Services%20(BPSi)%20Clinic!5e0!3m2!1sen!2sph!4v1743066989186!5m2!1sen!2sph"
                  width="100%"
                  height="250" // Adjusted for mobile
                  className="rounded-lg sm:h-[350px] md:h-[450px] lg:h-[550px]" // Dynamic height adjustment
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="rounded-lg  bg-blue-50 p-6 sm:p-8 md:p-12">
            <h3 className="mb-4 text-xl font-bold sm:text-2xl">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-background"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-sm font-medium"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Message subject"
                  className="bg-background"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
