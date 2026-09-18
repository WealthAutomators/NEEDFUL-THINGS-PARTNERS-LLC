"use client";

import Link from "next/link";
import Image from "next/image";
import { featuredCollection, featuredHeroSlug, homepageFeaturedSlugs } from "@/data/homepage";
import { getProductsBySlugs, getProductBySlug } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/product/product-card";
import { formatPrice } from "@/lib/format";

export function FeaturedCollection() {
  const hero = getProductBySlug(featuredHeroSlug);
  const others = getProductsBySlugs(homepageFeaturedSlugs).filter((p) => p.slug !== featuredHeroSlug);

  return (
    <section className="bg-card py-16 md:py-24">
      <Container>
        <SectionHeading
          kicker="Featured collection"
          title={featuredCollection.title}
          subtitle={featuredCollection.description}
          viewMoreLink="/shop"
        />
        <div className="grid gap-6 lg:grid-cols-12">
          {hero && (
            <Link
              href={`/product/${hero.slug}`}
              className="group relative min-h-[420px] overflow-hidden bg-muted lg:col-span-7 lg:min-h-[640px]"
            >
              <Image
                src={hero.images[0]}
                alt={hero.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground md:p-8">
                <p className="text-[11px] uppercase tracking-[0.18em] opacity-80">{hero.category}</p>
                <h3 className="mt-2 font-serif text-3xl md:text-4xl">{hero.name}</h3>
                <p className="mt-2 max-w-md text-sm text-primary-foreground/80">{hero.description}</p>
                <p className="mt-4 text-sm">{formatPrice(hero.salePrice ?? hero.price)}</p>
                <span className="mt-5 inline-flex h-9 items-center bg-card px-4 text-xs font-medium uppercase tracking-[0.14em] text-foreground">
                  View piece
                </span>
              </div>
            </Link>
          )}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-5">
            {others.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
