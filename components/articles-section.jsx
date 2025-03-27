import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ArticlesSection() {
  const articles = [
    {
      title: "Understanding Anxiety: Causes, Symptoms, and Treatment",
      excerpt:
        "Anxiety disorders are among the most common mental health conditions. Learn about the different types, symptoms, and effective treatment approaches.",
      image:
        "https://images.pexels.com/photos/7929446/pexels-photo-7929446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "March 15, 2025",
      author: "Dr. Sarah Johnson",
      category: "Mental Health",
    },
    {
      title: "The Importance of Self-Care for Mental Wellbeing",
      excerpt:
        "Self-care isn't selfish—it's essential. Discover practical strategies to incorporate self-care into your daily routine to improve your mental health.",
      image:
        "https://images.pexels.com/photos/9065326/pexels-photo-9065326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "March 10, 2025",
      author: "Dr. Michael Chen",
      category: "Wellness",
    },
    {
      title: "Breaking the Stigma: Talking About Depression",
      excerpt:
        "Depression affects millions worldwide, yet stigma prevents many from seeking help. Learn how to recognize signs of depression and support loved ones.",
      image:
        "https://images.pexels.com/photos/6255607/pexels-photo-6255607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "March 5, 2025",
      author: "Dr. Emily Rodriguez",
      category: "Depression",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-amber-400">
            MENTAL HEALTH RESOURCES
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Latest Articles & Insights
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Stay informed with our collection of expert-written articles on
            mental health, wellness, and psychological well-being.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg bg-background shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.category}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">{article.title}</h3>
                <p className="mb-4 text-muted-foreground">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{article.author}</span>
                  <Link
                    href="#"
                    className="inline-flex items-center text-primary transition-colors hover:text-primary/80"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/articles"
            className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
