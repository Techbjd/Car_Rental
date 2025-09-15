import { create } from "zustand";
import type { Car } from "../data/carsData";

interface CartItem extends Car {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  initCart: () => void;
  addToCart: (car: Car) => void;
  removeFromCart: (id: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  clearCart: () => void;
}

// Cookie helpers
const setCookie = (name: string, value: string, days: number) => {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/`;
};

const deleteCookie = (name: string) => {
  document.cookie = `${name}=;expires=${new Date(0).toUTCString()};path=/`;
};

// Persist cart in localStorage + cookies
const persistCart = (items: CartItem[]) => {
  const data = JSON.stringify(items);
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", data);
    setCookie("cart", data, 7);
  }
};

// Zustand store
export const useCartStore = create<CartState>((set, get) => ({
  items: [], // start empty
  initCart: () => {
    if (typeof window !== "undefined") {
      const stored = JSON.parse(localStorage.getItem("cart") ?? "[]");
      set({ items: stored });
    }
  },

  addToCart: (car: Car) => {
    const items = [...get().items];
    const existing = items.find((item) => item.id === car.id);
    if (existing) existing.quantity += 1;
    else items.push({ ...car, quantity: 1 });
    persistCart(items);
    set({ items });
  },

  removeFromCart: (id: number) => {
    const items = get().items.filter((item) => item.id !== id);
    persistCart(items);
    set({ items });
  },

  increment: (id: number) => {
    const items = get().items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    persistCart(items);
    set({ items });
  },

  decrement: (id: number) => {
    let items = get().items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
    items = items.filter((item) => item.quantity > 0);
    persistCart(items);
    set({ items });
  },

  clearCart: () => {
    persistCart([]);
    deleteCookie("cart");
    set({ items: [] });
  },
}));
