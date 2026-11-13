"use client";

import { createContext, useCallback, useContext, useMemo, useState, type PropsWithChildren } from "react";
import { shopProducts } from "@/components/shop-products";

export type CartProductDetails = {
  productId: string;
  name: string;
  image: string;
  imageAlt: string;
  size: string;
  unitPrice: number;
  variantId?: string;
};

export type CartItem = CartProductDetails & {
  key: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  addItem: (productKey: string, quantity?: number, details?: CartProductDetails) => void;
  setItemQuantity: (productKey: string, quantity: number) => void;
  removeItem: (productKey: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function getProductDetails(productKey: string): CartProductDetails | undefined {
  for (const product of shopProducts) {
    const variant = product.variants?.find((item) => `${product.id}-${item.id}` === productKey);
    if (product.id === productKey || variant) {
      return {
        productId: product.id,
        name: product.name,
        image: product.image,
        imageAlt: product.imageAlt,
        size: variant?.label ?? product.size,
        unitPrice: variant?.price ?? product.price,
        ...(variant ? { variantId: variant.id } : {}),
      };
    }
  }
  return undefined;
}

export function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((productKey: string, quantity = 1, details?: CartProductDetails) => {
    const productDetails = details ?? getProductDetails(productKey);
    const requestedQuantity = Math.floor(quantity);
    if (!productDetails || !Number.isFinite(requestedQuantity) || requestedQuantity < 1) return;

    setItems((current) => {
      const existing = current.find((item) => item.key === productKey);
      if (existing) {
        return current.map((item) => item.key === productKey
          ? { ...item, ...productDetails, quantity: Math.min(99, item.quantity + requestedQuantity) }
          : item);
      }
      return [...current, { ...productDetails, key: productKey, quantity: Math.min(99, requestedQuantity) }];
    });
  }, []);

  const setItemQuantity = useCallback((productKey: string, quantity: number) => {
    if (!Number.isFinite(quantity)) return;
    const nextQuantity = Math.floor(quantity);
    if (nextQuantity < 1) {
      setItems((current) => current.filter((item) => item.key !== productKey));
      return;
    }
    setItems((current) => current.map((item) => item.key === productKey
      ? { ...item, quantity: Math.min(99, nextQuantity) }
      : item));
  }, []);

  const removeItem = useCallback((productKey: string) => {
    setItems((current) => current.filter((item) => item.key !== productKey));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const itemCount = useMemo(() => items.reduce((total, item) => total + item.quantity, 0), [items]);
  const value = useMemo(
    () => ({ items, itemCount, addItem, setItemQuantity, removeItem, clearCart }),
    [items, itemCount, addItem, setItemQuantity, removeItem, clearCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
