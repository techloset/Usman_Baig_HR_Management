"use client";
import React from "react";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import store from "../libs/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <SessionProvider>{children}</SessionProvider>
    </Provider>
  );
}
