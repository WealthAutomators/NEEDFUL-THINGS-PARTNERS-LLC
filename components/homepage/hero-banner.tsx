"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroSlides } from "@/data/homepage";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const slide = heroSlides[0];

  return (
    <section className="relative min-h-[78vh] overflow-hidden md:min-h-[88vh]">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <Image
          src={slide.image}
          alt={slide.alt ?? slide.headline}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/25 to-foreground/10" />
      <div className="relative mx-auto flex min-h-[78vh] max-w-[1440px] items-end px-4 pb-14 sm:px-6 md:min-h-[88vh] md:pb-20 lg:px-8">
        <motion.div
          className="max-w-2xl text-primary-foreground"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary-foreground/80">
            Contemporary lifestyle
          </p>
          <h1 className="mt-4 font-serif text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            {slide.headline}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            {slide.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-card text-foreground hover:bg-parchment">
              <Link href={slide.ctaLink}>{slide.ctaText}</Link>
            </Button>
            {slide.secondaryCtaText && slide.secondaryCtaLink && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
              >
                <Link href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
