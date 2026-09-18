"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { shopLifestyle } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function CategoryCarousel() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          kicker="Shop what you need"
          title="An edited map of the house"
          subtitle="Move through the rooms of a well-lived life — home, kitchen, desk, weekend, and the small personal things in between."
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {shopLifestyle.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <Link href={item.href} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <p className="font-serif text-2xl text-primary-foreground">{item.label}</p>
                    <p className="mt-1 text-xs text-primary-foreground/80">{item.caption}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
