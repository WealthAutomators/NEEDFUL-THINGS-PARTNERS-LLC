"use client";

import Image from "next/image";
import Link from "next/link";
import { needfulEditCopy, needfulEditSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";

export function NeedfulEdit() {
  const products = getProductsBySlugs(needfulEditSlugs);
  const [first, ...rest] = products;

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent">{needfulEditCopy.kicker}</p>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight md:text-5xl">
              {needfulEditCopy.title}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">{needfulEditCopy.description}</p>
            <div className="relative mt-8 aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src={needfulEditCopy.image}
                alt="The Needful Edit"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <Button asChild className="mt-6">
              <Link href="/shop?collection=needful-edit">Shop the edit</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-7">
            {first && (
              <div className="col-span-2">
                <ProductCard product={first} />
              </div>
            )}
            {rest.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
