import { HeroBanner } from "@/components/homepage/hero-banner";
import { CategoryCarousel } from "@/components/homepage/category-carousel";
import { FeaturedCollection } from "@/components/homepage/featured-collection";
import { NeedfulEdit } from "@/components/homepage/needful-edit";
import { NewArrivals } from "@/components/homepage/new-arrivals";
import { EverydayLiving } from "@/components/homepage/everyday-living";
import { EntertainGather } from "@/components/homepage/entertain-gather";
import { BestSellers } from "@/components/homepage/best-sellers";
import { WeekendOutdoor } from "@/components/homepage/weekend-outdoor";
import { PromotionalBanner } from "@/components/homepage/promotional-banner";
import { PromoStrip } from "@/components/homepage/promo-strip";
import { AboutSection } from "@/components/homepage/about-section";
import { Newsletter } from "@/components/homepage/newsletter";
import { FeaturesRow } from "@/components/homepage/features-row";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturesRow />
      <CategoryCarousel />
      <FeaturedCollection />
      <NeedfulEdit />
      <NewArrivals />
      <EverydayLiving />
      <EntertainGather />
      <BestSellers />
      <WeekendOutdoor />
      <PromotionalBanner />
      <PromoStrip />
      <AboutSection />
      <Newsletter />
    </>
  );
}
