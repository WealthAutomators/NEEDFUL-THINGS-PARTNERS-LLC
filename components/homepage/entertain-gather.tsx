"use client";

import Image from "next/image";
import Link from "next/link";
import { entertainEditorial, entertainSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";

export function EntertainGather() {
  const products = getProductsBySlugs(entertainSlugs);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="relative min-h-[360px] overflow-hidden bg-muted lg:col-span-5">
            <Image
              src={entertainEditorial.image}
              alt={entertainEditorial.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground md:p-8">
              <p className="text-[11px] uppercase tracking-[0.2em] opacity-80">Kitchen · Dining · Hosting</p>
              <h2 className="mt-2 font-serif text-4xl">{entertainEditorial.title}</h2>
              <p className="mt-3 max-w-sm text-sm text-primary-foreground/85">{entertainEditorial.description}</p>
              <Button asChild size="sm" className="mt-5 bg-card text-foreground hover:bg-parchment">
                <Link href={entertainEditorial.ctaLink}>{entertainEditorial.ctaText}</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-7">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
