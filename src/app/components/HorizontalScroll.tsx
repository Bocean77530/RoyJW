// components/HorizontalScroller.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function HorizontalScroller() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  // show/hide arrow buttons when reaching ends
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // drag state
  const pos = useRef({ active: false, startX: 0, scrollLeft: 0 });

  // recalculates arrow visibility
  const updateEnds = () => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setAtStart(scrollLeft <= 1); // near left
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1); // near right
  };

  useEffect(() => {
    updateEnds();
    const el = trackRef.current;
    if (!el) return;

    // also update on scroll/resize
    const onScroll = () => updateEnds();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // arrow click
  const scrollByAmount = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.max(200, Math.floor(el.clientWidth * 0.85)); // responsive step
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  // mouse drag handlers
  const onMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = trackRef.current;
    if (!el) return;
    pos.current.active = true;
    pos.current.startX = e.pageX - el.offsetLeft;
    pos.current.scrollLeft = el.scrollLeft;
    el.classList.add("cursor-grabbing"); // visual feedback
  };
  const onMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    pos.current.active = false;
    trackRef.current?.classList.remove("cursor-grabbing");
  };
  const onMouseUp: React.MouseEventHandler<HTMLDivElement> = () => {
    pos.current.active = false;
    trackRef.current?.classList.remove("cursor-grabbing");
  };
  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = trackRef.current;
    if (!el || !pos.current.active) return;
    e.preventDefault(); // prevent text selection while dragging
    const x = e.pageX - el.offsetLeft;
    const walk = (x - pos.current.startX) * 1.2; // multiplier = drag speed
    el.scrollLeft = pos.current.scrollLeft - walk;
  };

  // touch drag (mobile)
  const touchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const el = trackRef.current;
    if (!el) return;
    pos.current.active = true;
    pos.current.startX = e.touches[0].clientX;
    pos.current.scrollLeft = el.scrollLeft;
  };
  const touchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const el = trackRef.current;
    if (!el || !pos.current.active) return;
    const x = e.touches[0].clientX;
    const walk = (x - pos.current.startX) * 1.2;
    el.scrollLeft = pos.current.scrollLeft - walk;
  };
  const touchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    pos.current.active = false;
  };

  // demo items
  const items = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <div className="relative mx-auto max-w-6xl p-6">
      {/* Title / header row */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-bold">Horizontal Scroll</h2>

        {/* Arrow buttons */}
        <div className="flex gap-2">
          <button
            aria-label="Scroll left"
            className={`rounded border px-3 py-1 text-sm transition ${
              atStart ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"
            }`}
            onClick={() => scrollByAmount("left")}
            disabled={atStart}
          >
            ←
          </button>
          <button
            aria-label="Scroll right"
            className={`rounded border px-3 py-1 text-sm transition ${
              atEnd ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"
            }`}
            onClick={() => scrollByAmount("right")}
            disabled={atEnd}
          >
            →
          </button>
        </div>
      </div>

      {/* Scroll track */}
      <div
        ref={trackRef}
        // layout: row items, no wrap; overflow-x to enable horizontal scrolling
        className="group relative flex snap-x snap-mandatory space-x-4 overflow-x-auto scroll-smooth
                   rounded-lg border bg-white p-4 cursor-grab select-none
                   scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchStart={touchStart}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
      >
        {items.map((n) => (
          <div
            key={n}
            // flex-shrink-0 keeps fixed card width; snap-start gives nice snapping
            className="flex h-32 w-48 flex-shrink-0 snap-start items-center justify-center rounded-md bg-blue-600 text-white"
          >
            Card {n}
          </div>
        ))}
      </div>
    </div>
  );
}
