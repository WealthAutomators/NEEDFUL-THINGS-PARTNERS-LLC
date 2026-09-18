import { company } from "@/data/company";
import { testimonials } from "@/data/testimonials";
import { PageHero, PageSection } from "@/components/ui/page-layout";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Check, Award, Heart, ShoppingBag } from "lucide-react";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${company.name}`}
        description={company.description}
        breadcrumbs={[{ label: "About Us" }]}
      />

      <Container className="pb-16">
        <div className="grid items-center gap-10 py-12 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden border border-border">
            <Image src="/banners/about.jpg" alt={`About ${company.name}`} fill className="object-cover" sizes="50vw" />
          </div>
          <PageSection title="Our Story">
            <p>
              NEEDFUL THINGS PARTNERS LLC was founded on a simple editorial idea: a modern life is
              better served by fewer, better objects. We look for things that are useful, well made,
              and a pleasure to live with — the pieces that earn a permanent place on a table, a
              shelf, or in a bag.
            </p>
            <p className="mt-4">
              From {company.address.street} in {company.address.city}, {company.address.state}, we
              edit a contemporary collection for homes that feel warm, considered, and current.
              The name is the merchandising philosophy: not more things, needful things.
            </p>
          </PageSection>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShoppingBag, title: "Edited assortment", desc: "Home, kitchen, workspace, travel, and personal pieces — chosen, not piled high." },
            { icon: Award, title: "Materials first", desc: "Linen, wood, ceramic, leather, and honest metal over novelty and noise." },
            { icon: Heart, title: "Customer first", desc: "Thirty-day returns, responsive notes, and packaging that respects the object." },
            { icon: Check, title: "Everyday beauty", desc: "Practical things that still look at home in a well-lived room." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border border-border bg-card p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center border border-border">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-serif text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <PageSection title="What Our Customers Say" className="mt-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {testimonials.map((t) => (
              <div key={t.id} className="border border-border bg-card p-6">
                <StarRating rating={t.rating} showCount={false} size="md" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/shop">Shop the collection</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
