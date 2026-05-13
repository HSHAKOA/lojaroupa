"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CartItem } from "@/types/product";

type StoreContextValue = {
  cartItems: CartItem[];
  favoriteIds: string[];
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (item: CartItem) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  toggleFavorite: (productId: string) => void;
  cartCount: number;
};

const StoreContext = createContext<StoreContextValue | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("jvision-cart");
    const savedFavorites = localStorage.getItem("jvision-favorites");
    if (savedCart) setCartItems(JSON.parse(savedCart));
    if (savedFavorites) setFavoriteIds(JSON.parse(savedFavorites));
  }, []);

  useEffect(() => {
    localStorage.setItem("jvision-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("jvision-favorites", JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const value = useMemo<StoreContextValue>(
    () => ({
      cartItems,
      favoriteIds,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      addToCart: (item) => {
        setCartItems((currentItems) => {
          const existing = currentItems.find(
            (cartItem) =>
              cartItem.productId === item.productId &&
              cartItem.size === item.size &&
              cartItem.color === item.color
          );
          if (!existing) return [...currentItems, item];
          return currentItems.map((cartItem) =>
            cartItem.productId === item.productId &&
            cartItem.size === item.size &&
            cartItem.color === item.color
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem
          );
        });
        setIsCartOpen(true);
      },
      updateQuantity: (productId, quantity) => {
        setCartItems((currentItems) =>
          currentItems
            .map((item) => (item.productId === productId ? { ...item, quantity } : item))
            .filter((item) => item.quantity > 0)
        );
      },
      removeFromCart: (productId) => {
        setCartItems((currentItems) => currentItems.filter((item) => item.productId !== productId));
      },
      toggleFavorite: (productId) => {
        setFavoriteIds((currentIds) =>
          currentIds.includes(productId) ? currentIds.filter((id) => id !== productId) : [...currentIds, productId]
        );
      },
      cartCount: cartItems.reduce((total, item) => total + item.quantity, 0)
    }),
    [cartItems, favoriteIds, isCartOpen]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside StoreProvider");
  return context;
}
