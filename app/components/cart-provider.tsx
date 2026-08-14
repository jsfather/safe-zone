"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = {
  id: string;
  productSlug: string;
  productName: string;
  colorId: string;
  colorName: string;
  size: string;
  fulfillment: "delivery" | "pickup";
  price: number;
  image: string;
  imageAlt: string;
  colorSwatch: string;
  quantity: number;
};

type NewCartItem = Omit<CartItem, "id" | "quantity">;

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  total: number;
  ready: boolean;
  addItem: (item: NewCartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

const CART_STORAGE_KEY = "safe-zone-cart-v2";
const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      try {
        const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);
        if (savedCart) {
          setItems(JSON.parse(savedCart) as CartItem[]);
        }
      } catch {
        window.localStorage.removeItem(CART_STORAGE_KEY);
      } finally {
        setReady(true);
      }
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const persist = useCallback((nextItems: CartItem[]) => {
    setItems(nextItems);
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(nextItems));
  }, []);

  const addItem = useCallback(
    (item: NewCartItem) => {
      const id = `${item.productSlug}:${item.colorId}:${item.size}:${item.fulfillment}`;
      const existingItem = items.find((cartItem) => cartItem.id === id);

      if (existingItem) {
        persist(
          items.map((cartItem) =>
            cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
          ),
        );
        return;
      }

      persist([...items, { ...item, id, quantity: 1 }]);
    },
    [items, persist],
  );

  const removeItem = useCallback(
    (id: string) => persist(items.filter((item) => item.id !== id)),
    [items, persist],
  );

  const updateQuantity = useCallback(
    (id: string, quantity: number) => {
      if (quantity < 1) {
        removeItem(id);
        return;
      }

      persist(items.map((item) => (item.id === id ? { ...item, quantity } : item)));
    },
    [items, persist, removeItem],
  );

  const clearCart = useCallback(() => persist([]), [persist]);

  const value = useMemo(
    () => ({
      items,
      itemCount: items.reduce((count, item) => count + item.quantity, 0),
      total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      ready,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [items, ready, addItem, removeItem, updateQuantity, clearCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
