"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar/navbar";
import { SearchOverlay } from "@/components/navbar/search-bar";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { UtilityBar } from "@/components/navbar/utility-bar";

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <UtilityBar />
      <Navbar onSearchOpen={() => setSearchOpen(true)} onCartOpen={() => setCartOpen(true)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
