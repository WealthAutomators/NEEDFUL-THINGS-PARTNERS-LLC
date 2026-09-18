import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

const collections = [
  {
    href: "/shop?collection=needful-edit",
    title: "The Needful Edit",
    description: "The pieces we think belong in a well-lived modern life.",
    image: "/lifestyle/needful-edit.jpg",
  },
  {
    href: "/shop?collection=entertain",
    title: "Entertain & Gather",
    description: "Kitchen, dining, drinkware, and hosting objects for the table.",
    image: "/lifestyle/entertain.jpg",
  },
  {
    href: "/shop?collection=weekend",
    title: "Weekend Living",
    description: "Outdoor living, day trips, and easy recreation.",
    image: "/lifestyle/weekend.jpg",
  },
  {
    href: "/shop?collection=everyday",
    title: "Everyday",
    description: "The useful beautiful things you reach for without thinking.",
    image: "/lifestyle/everyday-living.jpg",
  },
  {
    href: "/new-arrivals",
    title: "New Arrivals",
    description: "Recently added pieces from across the shop.",
    image: "/lifestyle/shop-home.jpg",
  },
];

export const metadata = { title: "Collections" };

export default function CollectionsPage() {
  return (
    <Container className="py-10 md:py-16">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent">Collections</p>
      <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight md:text-5xl">Shop by edit</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Rather than an endless aisle, we group objects the way a house is actually lived in.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {collections.map((collection) => (
          <Link key={collection.href} href={collection.href} className="group overflow-hidden border border-border bg-card">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h2 className="font-serif text-2xl group-hover:text-accent">{collection.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{collection.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
