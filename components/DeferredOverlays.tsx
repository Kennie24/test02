"use client";

import AuthOverlay from "@/components/AuthOverlay";
import MiniCart from "@/components/MiniCart";

export default function DeferredOverlays() {
  return (
    <>
      <MiniCart />
      <AuthOverlay />
    </>
  );
}
