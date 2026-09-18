"use client";

import Image from "next/image";
import Link from "next/link";
import { weekendEditorial, weekendSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import { Carousel } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export function WeekendOutdoor() {
  const products = getProductsBySlugs(weekendSlugs);

  return (
    <section className="bg-card py-16 md:py-24">
      <Container>
        <div className="mb-10 grid items-end gap-6 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent">Weekend / outdoor</p>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight md:text-5xl">
              {weekendEditorial.title}
            </h2>
          </div>
          <div>
            <p className="leading-relaxed text-muted-foreground">{weekendEditorial.description}</p>
            <Button asChild variant="link" className="mt-3 px-0 uppercase tracking-[0.14em]">
              <Link href={weekendEditorial.ctaLink}>{weekendEditorial.ctaText}</Link>
            </Button>
          </div>
        </div>
        <div className="relative mb-10 aspect-[21/8] min-h-[240px] overflow-hidden bg-muted">
          <Image
            src={weekendEditorial.image}
            alt={weekendEditorial.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <Carousel slidesToShow={4} className="px-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
