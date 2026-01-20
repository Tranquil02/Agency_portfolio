"use client";

import { toast } from "sonner";

export default function TestToast() {
  return (
    <button className="p-5 red cursor-pointer" onClick={() => toast.success("Sonner works!")}>
      Test Toast
    </button>
  );
}
  