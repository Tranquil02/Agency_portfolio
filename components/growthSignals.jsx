"use client";

import { useEffect, useState } from "react";

export default function GrowthSignals() {
  const [visibleStep, setVisibleStep] = useState(-1);

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisibleStep(0), 1000), // Live visitors
      setTimeout(() => setVisibleStep(1), 2200), // Earnings
      setTimeout(() => setVisibleStep(2), 3400), // Customers
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      {/* LIVE VISITORS */}
      <SignalWrapper
        show={visibleStep >= 0}
        position="right"
        top="top-[120px]"
      >
        <LiveVisitors />
      </SignalWrapper>

      {/* EARNINGS */}
      <SignalWrapper
        show={visibleStep >= 1}
        position="left"
        bottom="bottom-[160px]"
      >
        <Earnings />
      </SignalWrapper>

      {/* CUSTOMERS */}
      <SignalWrapper
        show={visibleStep >= 2}
        position="right"
        bottom="bottom-[40px]"
      >
        <Customers />
      </SignalWrapper>
    </>
  );
}

/* ----------------------------------
   Shared animated wrapper
---------------------------------- */
function SignalWrapper({
  children,
  show,
  position,
  top,
  bottom,
}) {
  const side =
    position === "right"
      ? "right-[-40px] translate-x-6"
      : "left-[-40px] -translate-x-6";

  return (
    <div
      className={`absolute ${side} ${top || ""} ${bottom || ""}
        transition-all duration-700 ease-out
        ${show ? "opacity-100 translate-x-0" : "opacity-0"}
      `}
    >
      {children}
    </div>
  );
}

/* ----------------------------------
   Cards
---------------------------------- */

function LiveVisitors() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const target = 1204;
    const step = Math.ceil(target / 40);

    const i = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(i);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(i);
  }, []);

  return (
    <Card>
      <p className="flex items-center gap-2 text-sm text-white/60">
        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        Live Visitors
      </p>
      <p className="mt-1 text-3xl font-bold text-white">
        {count.toLocaleString()}
      </p>
      <Bars />
    </Card>
  );
}

function Earnings() {
  return (
    <Card>
      <p className="text-sm text-white/60">Earnings · Today</p>
      <p className="mt-1 text-3xl font-bold text-white">$124.50</p>
    </Card>
  );
}

function Customers() {
  return (
    <Card>
      <p className="text-sm text-white/60">New Customers</p>
      <p className="mt-1 text-3xl font-bold text-white">+38</p>
    </Card>
  );
}

/* ----------------------------------
   UI atoms
---------------------------------- */

function Card({ children }) {
  return (
    <div className="w-[180px] rounded-xl border border-white/10 bg-[#0b0f14] px-5 py-4 shadow-xl">
      {children}
    </div>
  );
}

function Bars() {
  return (
    <div className="mt-2 flex gap-1">
      <div className="h-2 w-4 rounded bg-green-600" />
      <div className="h-2 w-6 rounded bg-green-600" />
      <div className="h-2 w-3 rounded bg-green-600" />
      <div className="h-2 w-5 rounded bg-green-600" />
    </div>
  );
}
