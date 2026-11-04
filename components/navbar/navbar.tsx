"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Menu, Search, ShoppingBag, User, X, ChevronDown } from "lucide-react";
import { company } from "@/data/company";
import { navigationLinks } from "@/data/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onSearchOpen: () => void;
  onCartOpen: () => void;
}

export function Navbar({ onSearchOpen, onCartOpen }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const { itemCount, isHydrated: cartHydrated } = useCart();
  const { wishlist, isHydrated: wishlistHydrated } = useWishlist();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-md">
      <Container>
        <div className="grid h-[4.25rem] grid-cols-[auto_1fr_auto] items-center gap-4 lg:h-20">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <Link href="/" className="flex shrink-0 items-center lg:justify-self-start" aria-label={company.name}>
            <Image
              src="/logo/logo.svg"
              alt={company.name}
              width={280}
              height={48}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          <nav className="hidden justify-center lg:flex">
            <ul className="flex items-center gap-1">
              {navigationLinks.map((link) => (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 px-3 py-2 text-[13px] font-medium uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                    {link.children && <ChevronDown className="h-3.5 w-3.5" />}
                  </Link>
                  {link.children && activeDropdown === link.label && (
                    <div className="absolute left-0 top-full z-50 min-w-[240px] border border-border bg-card py-3 shadow-sm">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-0.5">
            <Button variant="ghost" size="icon" className="h-10 w-10" onClick={onSearchOpen} aria-label="Search">
              <Search className="h-[18px] w-[18px]" />
            </Button>
            <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex hidden h-10 w-10 sm:inline-flex">
              <Link href="/profile" aria-label="Account">
                <User className="h-[18px] w-[18px]" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex relative h-10 w-10">
              <Link href="/wishlist" aria-label="Wishlist">
                <Heart className="h-[18px] w-[18px]" />
                {wishlistHydrated && wishlist.length > 0 && (
                  <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-clay px-1 text-[10px] font-semibold text-white">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative h-10 w-10"
              onClick={onCartOpen}
              aria-label="Cart"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              {cartHydrated && itemCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
                  {itemCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </Container>

      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <button
          className={cn(
            "absolute inset-0 bg-foreground/40 transition-opacity",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "fixed inset-y-0 left-0 z-[70] flex h-dvh w-[min(100%,22rem)] flex-col bg-background shadow-xl transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <p className="font-serif text-xl">Needful Things</p>
            <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-6">
            <button
              className="mb-6 flex w-full items-center gap-3 border border-border bg-card px-4 py-3 text-left text-sm text-muted-foreground"
              onClick={() => {
                setMobileOpen(false);
                onSearchOpen();
              }}
            >
              <Search className="h-4 w-4" />
              Search the shop
            </button>
            <ul className="space-y-1">
              {navigationLinks.map((link) => (
                <li key={link.href} className="border-b border-border/70 py-2">
                  {link.children ? (
                    <>
                      <button
                        className="flex w-full items-center justify-between py-2 text-left text-sm font-medium uppercase tracking-[0.16em]"
                        onClick={() =>
                          setOpenMobileSection((prev) => (prev === link.label ? null : link.label))
                        }
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            openMobileSection === link.label && "rotate-180"
                          )}
                        />
                      </button>
                      {openMobileSection === link.label && (
                        <ul className="mb-2 space-y-1 pb-2 pl-1">
                          <li>
                            <Link
                              href={link.href}
                              className="block py-2 text-sm text-muted-foreground"
                              onClick={() => setMobileOpen(false)}
                            >
                              View all
                            </Link>
                          </li>
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block py-2 text-sm text-muted-foreground"
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block py-2 text-sm font-medium uppercase tracking-[0.16em]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3 text-sm">
              <Link href="/profile" className="flex items-center gap-3 py-2" onClick={() => setMobileOpen(false)}>
                <User className="h-4 w-4" /> Account
              </Link>
              <Link href="/wishlist" className="flex items-center gap-3 py-2" onClick={() => setMobileOpen(false)}>
                <Heart className="h-4 w-4" /> Wishlist
              </Link>
              <Link href="/about" className="block py-2 text-muted-foreground" onClick={() => setMobileOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="block py-2 text-muted-foreground" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
