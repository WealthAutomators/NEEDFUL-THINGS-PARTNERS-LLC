import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { footerLinks, paymentMethods } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image src="/logo/logo.svg" alt={company.name} width={280} height={48} className="mb-5 h-11 w-auto brightness-0 invert" />
            <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/75">{company.description}</p>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/75">
              {company.address.street}
              <br />
              {company.address.city}, {company.address.state} {company.address.zip}
            </p>
            <a href={`mailto:${company.email}`} className="mt-3 inline-block text-sm underline-offset-4 hover:underline">
              {company.email}
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em]">Shop</h3>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em]">Categories</h3>
            <ul className="space-y-2.5">
              {footerLinks.categories.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em]">Customer</h3>
            <ul className="space-y-2.5">
              {[...footerLinks.company, ...footerLinks.customerCare].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-8 text-[11px] font-semibold uppercase tracking-[0.2em]">Legal</h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <Separator className="bg-primary-foreground/15" />

      <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-sm text-primary-foreground/70">{company.copyright}</p>
        <div className="flex items-center gap-2">
          {paymentMethods.map((method) => (
            <Image
              key={method.name}
              src={method.icon}
              alt={method.name}
              width={40}
              height={28}
              className="opacity-80"
            />
          ))}
        </div>
      </Container>
    </footer>
  );
}
