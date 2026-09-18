"use client";

import { useState } from "react";
import { bestSellerTabs, homepageBestsellerSlugs } from "@/data/homepage";
import { getBestsellerProducts, getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/product/product-card";
import { Carousel } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function BestSellers() {
  const [activeTab, setActiveTab] = useState("all");
  const curatedBestsellers = getProductsBySlugs(homepageBestsellerSlugs);
  const bestsellers = getBestsellerProducts();

  const filtered =
    activeTab === "all"
      ? curatedBestsellers
      : bestsellers.filter((p) => p.categorySlug === activeTab).slice(0, 8);

  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionHeading
          kicker="Most lived with"
          title="Best Sellers"
          viewMoreLink="/best-sellers"
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {bestSellerTabs.map((tab) => (
            <button
              key={tab.slug}
              onClick={() => setActiveTab(tab.slug)}
              className={cn(
                "rounded-sm border px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] transition-colors",
                activeTab === tab.slug
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-transparent text-muted-foreground hover:border-primary hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <Carousel slidesToShow={4} className="px-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
