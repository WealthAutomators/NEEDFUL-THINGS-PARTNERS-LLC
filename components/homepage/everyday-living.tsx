"use client";

import Image from "next/image";
import Link from "next/link";
import { everydayEditorial, everydayLivingSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";

export function EverydayLiving() {
  const products = getProductsBySlugs(everydayLivingSlugs);

  return (
    <section className="bg-parchment/50 py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[5/4] overflow-hidden bg-muted">
            <Image
              src={everydayEditorial.image}
              alt={everydayEditorial.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent">Everyday living</p>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight md:text-5xl">
              {everydayEditorial.title}
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{everydayEditorial.description}</p>
            <Button asChild className="mt-8">
              <Link href={everydayEditorial.ctaLink}>{everydayEditorial.ctaText}</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
