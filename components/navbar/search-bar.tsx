"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { searchProducts } from "@/data/products";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/format";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function SearchBar() {
  return null;
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchResults = searchQuery.length > 0 ? searchProducts(searchQuery).slice(0, 6) : [];

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearchQuery("");
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      onClose();
      setSearchQuery("");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <button className="absolute inset-0 bg-foreground/35" aria-label="Close search" onClick={onClose} />
      <div className="relative mx-auto mt-16 w-full max-w-2xl px-4">
        <div className="border border-border bg-card p-4 shadow-lg sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Search</p>
            <button onClick={onClose} aria-label="Close search" className="text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
            </button>
          </div>
          <form onSubmit={handleSearchSubmit}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                ref={inputRef}
                type="search"
                placeholder="Search home, kitchen, travel, gifts..."
                className="h-12 rounded-sm border-border bg-background pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
          {searchQuery.trim().length > 0 && (
            <div className="mt-4">
              {searchResults.length > 0 ? (
                <ul>
                  {searchResults.map((product) => (
                    <li key={product.id}>
                      <Link
                        href={`/product/${product.slug}`}
                        className="flex items-center gap-3 px-1 py-2.5 transition-colors hover:bg-muted"
                        onClick={onClose}
                      >
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden border border-border">
                          <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="48px" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{product.name}</p>
                          <p className="text-xs text-muted-foreground">{formatPrice(product.salePrice ?? product.price)}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button
                      type="button"
                      className="w-full border-t border-border px-1 py-3 text-left text-sm font-medium uppercase tracking-[0.12em]"
                      onClick={() => {
                        router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
                        onClose();
                      }}
                    >
                      View all results for “{searchQuery}”
                    </button>
                  </li>
                </ul>
              ) : (
                <p className="px-1 py-4 text-sm text-muted-foreground">
                  No products found for “{searchQuery}”.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
