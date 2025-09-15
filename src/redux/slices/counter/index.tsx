import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Car } from "../../../data/carsData";

interface CartItem extends Car {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}


const setCookie = (name: string, value: string, days: number) => {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/`;
};

const getCookie = (name: string) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
};
const cartCookie = getCookie("cart");
if (!cartCookie) {
  console.log("Cart cookie deleted or expired");
} else {
  console.log("Cart cookie exists:", cartCookie);
}

const deleteCookie = (name: string) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
};


const persistCart = (items: CartItem[]) => {
  const data = JSON.stringify(items);
  localStorage.setItem("cart", data);
  setCookie("cart", data, 7); // cookie expires in 7 days
};

const initialState: CartState = {
  items:
    JSON.parse(localStorage.getItem("cart") ?? "null") ??
    JSON.parse(getCookie("cart") ?? "[]"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Car>) => {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      persistCart(state.items);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      persistCart(state.items);
    },
    increment: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      persistCart(state.items);
    },
    decrement: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
      persistCart(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
      deleteCookie("cart");
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
