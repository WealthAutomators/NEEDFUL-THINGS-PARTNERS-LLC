import Link from "next/link";
import Image from "next/image";
import { promotionalBanner } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="relative min-h-[320px] overflow-hidden md:min-h-[420px]">
          <Image
            src={promotionalBanner.image}
            alt={promotionalBanner.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/35 to-transparent" />
          <div className="relative flex min-h-[320px] max-w-xl flex-col justify-center p-8 text-primary-foreground md:min-h-[420px] md:p-14">
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary-foreground/80">A second look</p>
            <h2 className="mt-3 font-serif text-4xl font-medium md:text-5xl">{promotionalBanner.title}</h2>
            <p className="mt-4 leading-relaxed text-primary-foreground/85">{promotionalBanner.description}</p>
            <Button asChild size="lg" className="mt-8 w-fit bg-card text-foreground hover:bg-parchment">
              <Link href={promotionalBanner.buttonLink}>{promotionalBanner.buttonText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
