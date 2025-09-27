// components/HorizontalScroller.tsx
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
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

  // Product data
  const products = [
    {
      id: 1,
      name: "Yu-Gi-Oh! x King Ice - LE Iced Millennium Puzzle Necklace",
      price: 310.14,
      image: "/placeholder-jewelry-1.jpg",
      labels: ["Limited Edition", "New arrival"],
      reviews: null
    },
    {
      id: 2,
      name: "Yu-Gi-Oh! x King Ice - Millennium Ring Necklace",
      price: 186.09,
      image: "/placeholder-jewelry-2.jpg",
      labels: ["New arrival"],
      reviews: null
    },
    {
      id: 3,
      name: "Yu-Gi-Oh! x King Ice - Yami Yugi Necklace",
      price: 232.61,
      image: "/placeholder-jewelry-3.jpg",
      labels: ["New arrival"],
      reviews: null
    },
    {
      id: 4,
      name: "Yu-Gi-Oh! x King Ice - Monster Reborn Necklace",
      price: 186.09,
      image: "/placeholder-jewelry-4.jpg",
      labels: ["New arrival"],
      reviews: { stars: 5, count: 3 }
    },
    {
      id: 5,
      name: "Yu-Gi-Oh! x King Ice - Kuriboh Necklace",
      price: 186.09,
      image: "/placeholder-jewelry-5.jpg",
      labels: ["New arrival"],
      reviews: null
    },
    {
      id: 6,
      name: "Yu-Gi-Oh! x King Ice - Dark Magician Necklace",
      price: 155.00,
      image: "/placeholder-jewelry-6.jpg",
      labels: [],
      reviews: { stars: 4, count: 1 }
    }
  ];

  return (
    <div className="relative w-full p-6">
      {/* Title / header row */}
      <div className="mb-6 flex flex-col items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <button
            aria-label="Scroll left"
            className={` ${
              atStart ? "opacity-40" : "hover:bg-gray-100"
            }`}
            onClick={() => scrollByAmount("left")}
            disabled={atStart}
          >
            <ChevronLeft/>
          </button>
          
          {/* Title */}
          <h2 className="text-2xl font-bold">ARIES</h2>
          
          {/* Right Arrow */}
          <button
            aria-label="Scroll right"
            className={`transition ${
              atEnd ? "opacity-40" : "hover:bg-gray-100"
            }`}
            onClick={() => scrollByAmount("right")}
            disabled={atEnd}
          >
            <ChevronRight />
          </button>
        </div>
        
        {/* View All Link */}
        <Link href="/" className="text-sm text-gray-600 hover:text-gray-800 underline">
          VIEW ALL
        </Link>
      </div>

      {/* Scroll track */}
      <div
        ref={trackRef}
        className="group relative flex snap-x snap-mandatory space-x-6 overflow-x-auto scroll-smooth
                   cursor-grab select-none scrollbar-none px-6 [&::-webkit-scrollbar]:hidden"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchStart={touchStart}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex w-72 flex-shrink-0 snap-start scroll-ml-6 flex-col bg-white"
          >
            {/* Product Image Container */}
            <div className="relative mb-3 aspect-square overflow-hidden rounded-lg bg-gray-100">
              {/* Placeholder for product image */}
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                <span className="text-gray-500">Product Image</span>
              </div>
              
              {/* Product Labels */}
              {product.labels && (
                <div className="absolute top-2 right-2 flex flex-col gap-1">
                  {product.labels.map((label, index) => (
                    <span
                      key={index}
                      className={`rounded px-2 py-1 text-xs font-medium ${
                        label === "Limited Edition"
                          ? "bg-yellow-500 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="flex flex-col gap-2">
              {/* Product Name */}
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                {product.name}
              </h3>
              
              {/* Reviews */}
              {product.reviews && (
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xs ${
                          i < product.reviews.stars ? "text-yellow-400" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">
                    {product.reviews.count} review{product.reviews.count !== 1 ? 's' : ''}
                  </span>
                </div>
              )}
              
              {/* Price */}
              <div className="text-lg font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
