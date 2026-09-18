"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import { getEffectivePrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, subtotal, itemCount } = useCart();
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <button className="absolute inset-0 bg-foreground/40" aria-label="Close cart" onClick={onClose} />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-background shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <p className="font-serif text-2xl">Your cart</p>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </p>
          </div>
          <button onClick={onClose} aria-label="Close cart" className="text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">Your cart is currently empty.</p>
              <Button asChild className="mt-6" onClick={onClose}>
                <Link href="/shop">Continue shopping</Link>
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.product.id} className="flex gap-4 border-b border-border pb-4">
                  <Link href={`/product/${item.product.slug}`} onClick={onClose} className="relative h-20 w-20 shrink-0 overflow-hidden border border-border">
                    <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" sizes="80px" />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <Link href={`/product/${item.product.slug}`} onClick={onClose} className="text-sm font-medium hover:text-accent">
                      {item.product.name}
                    </Link>
                    <p className="mt-1 text-sm">{formatPrice(getEffectivePrice(item.product))}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <QuantitySelector
                        quantity={item.quantity}
                        onChange={(q) => updateQuantity(item.product.id, q)}
                      />
                      <button
                        className="text-xs uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {items.length > 0 && (
          <div className="border-t border-border px-5 py-5">
            <p className="text-xs text-muted-foreground">
              {remaining > 0
                ? `${formatPrice(remaining)} away from complimentary shipping.`
                : "Complimentary shipping applied."}
            </p>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>
            <div className="mt-4 grid gap-2">
              <Button asChild onClick={onClose}>
                <Link href="/checkout">Checkout</Link>
              </Button>
              <Button asChild variant="secondary" onClick={onClose}>
                <Link href="/cart">View cart</Link>
              </Button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
