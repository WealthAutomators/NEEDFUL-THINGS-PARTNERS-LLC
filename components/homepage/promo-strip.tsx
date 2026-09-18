import Link from "next/link";
import { promoStrip } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function PromoStrip() {
  return (
    <section className="border-y border-border bg-muted/70 py-10 md:py-12">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="font-serif text-3xl font-medium md:text-4xl">{promoStrip.title}</h2>
          <p className="mt-2 text-muted-foreground">{promoStrip.description}</p>
        </div>
        <Button asChild size="lg">
          <Link href={promoStrip.buttonLink}>{promoStrip.buttonText}</Link>
        </Button>
      </Container>
    </section>
  );
}
