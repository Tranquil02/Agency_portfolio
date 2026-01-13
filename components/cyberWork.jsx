"use client";
import { useLayoutEffect } from "react";

import { useEffect, useRef } from "react";

export default function CyberWorkspace() {
  const sceneRef = useRef(null);
  const monitorRef = useRef(null);
  const phoneRef = useRef(null);
  const keyboardRef = useRef(null);
  const keyRefs = useRef([]);
  const typingLock = useRef(false);

  /* ===============================
     CONTAINER-AWARE SCALING
  =============================== */

  useLayoutEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const container = scene.parentElement;

    const DESIGN_W = 1000;
    const DESIGN_H = 700;

    const resize = () => {
      const scaleX = container.clientWidth / DESIGN_W;
      const scaleY = container.clientHeight / DESIGN_H;
      const scale = Math.min(scaleX, scaleY, 1);

      scene.dataset.scale = scale;
      scene.style.transform = `scale(${scale})`;
      console.log(scaleX, scaleY);
    };

    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);


  /* ===============================
     TRUE 3D HOVER (DEPTH + PARALLAX)
  =============================== */
  useEffect(() => {
    const scene = sceneRef.current;
    let raf;

    const onMove = (e) => {
      const rect = scene.getBoundingClientRect();
      const dx = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const dy = (e.clientY - rect.top - rect.height / 2) / rect.height;

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        scene.style.transform = `
          scale(${scene.dataset.scale})
          rotateX(${(-dy * 10).toFixed(2)}deg)
          rotateY(${(dx * 12).toFixed(2)}deg)
        `;

        monitorRef.current.style.transform = `
          translateZ(40px)
          rotateX(${(-dy * 4).toFixed(2)}deg)
          rotateY(${(dx * 6).toFixed(2)}deg)
        `;

        phoneRef.current.style.transform = `
          translateZ(90px)
          rotateY(${(dx * 10).toFixed(2)}deg)
        `;

        keyboardRef.current.style.transform = `
          rotateX(${62 + dy * 2}deg)
          translateZ(-40px)
        `;
      });
    };

    const reset = () => {
      scene.style.transform = `scale(${scene.dataset.scale})`;
      monitorRef.current.style.transform = "translateZ(40px)";
      phoneRef.current.style.transform = "translateZ(90px)";
      keyboardRef.current.style.transform = "rotateX(62deg) translateZ(-40px)";
    };

    scene.addEventListener("mousemove", onMove);
    scene.addEventListener("mouseleave", reset);

    return () => {
      scene.removeEventListener("mousemove", onMove);
      scene.removeEventListener("mouseleave", reset);
    };
  }, []);

  /* ===============================
     TYPING SIMULATION
  =============================== */
  useEffect(() => {
    const press = (el) => {
      if (!el) return;
      el.classList.add("key-active");
      setTimeout(() => el.classList.remove("key-active"), 90);
    };

    const loop = () => {
      if (!typingLock.current && Math.random() > 0.6) {
        typingLock.current = true;
        let count = 0;
        const len = 3 + Math.floor(Math.random() * 5);

        const next = () => {
          if (count < len) {
            press(keyRefs.current[Math.floor(Math.random() * keyRefs.current.length)]);
            count++;
            setTimeout(next, 80 + Math.random() * 120);
          } else {
            typingLock.current = false;
          }
        };
        next();
      }
      setTimeout(loop, 700 + Math.random() * 1200);
    };
    console.log("starting typing simulation");
    loop();
  }, []);

  /* ===============================
     REAL KEYBOARD GEOMETRY
  =============================== */
  const keyboardRows = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5],
    [1.75, 1, 1, 1, 1, 1, 1, 1, 1, 2.25],
    [2.25, 1, 1, 1, 1, 1, 1, 2.75],
    [1.5, 1.5, 6, 1.5, 1.5],
  ];

  return (
    <div className="relative flex h-full w-full items-center justify-center ">
      <div
        ref={sceneRef}
        className="cyber-scene relative flex w-full flex-col items-center origin-center"
      >

        {/* ================= MONITOR ================= */}
        <div ref={monitorRef} className="relative flex items-end justify-center z-10">
          <div className="relative w-[820px] rounded-xl bg-[#09090b] p-2 shadow-[0_0_0_2px_#1f2937,0_40px_100px_rgba(0,0,0,1)]">
            <div className="relative aspect-[21/9] overflow-hidden rounded-lg border border-white/5 bg-black">
              <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                <source src="/web.mp4" />
              </video>
            </div>
          </div>

          {/* PHONE */}
          <div
            ref={phoneRef}
            className="absolute right-[-80px] w-[130px] rounded-[2.2rem] bg-[#1a1a1e] p-1 shadow-[0_0_0_2px_#3f3f46,0_30px_70px_rgba(0,0,0,1)]"
          >
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-black">
              <div className="absolute top-2 left-1/2 h-4 w-10 -translate-x-1/2 rounded-full bg-black z-10" />
              <video autoPlay muted loop playsInline className="h-full w-full object-cover ">
                <source src="/phone.mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* ================= STAND ================= */}
        <div className="relative mt-[-6px] flex flex-col items-center">
          <div className="h-20 w-[30px] bg-linear-to-b from-slate-600 to-slate-800 z-0" />
          <div className="relative justify-center ">
            <div className="absolute top-[0px] left-[-35px] h-[8px] w-[80px] bg-slate-800" />
            {/* <div className="absolute h-[3px] w-[100px] rotate-[35deg] bg-slate-800" /> */}
            {/* <div className="absolute h-[3px] w-[100px] rotate-[-35deg] bg-slate-800" /> */}
          </div>
        </div>

        {/* ================= KEYBOARD ================= */}
        <div
          ref={keyboardRef}
          className="relative mt-6 rounded-2xl bg-[#0b1220] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
          style={{
            width: 680,
            transform: "rotateX(62deg) translateZ(-40px)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="keyboard-plate" />

          <div className="relative z-10 space-y-2">
            {keyboardRows.map((row, r) => (
              <div key={r} className="flex gap-2">
                {row.map((w, i) => (
                  <div
                    key={i}
                    ref={(el) => el && keyRefs.current.push(el)}
                    className="key"
                    style={{ flex: w }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
