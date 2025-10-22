"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate, AnimationPlaybackControls } from "motion/react";

type Product = {
  name: string;
  brand: string;
  price: number;
  image: string;
};

type BreakpointConfig = {
  slidesToShow: number;
  gap: number;
};

type ProductCarouselProps = {
  breakpoints?: Record<number, BreakpointConfig>;
  items: Product[];
};

export default function ProductCarousel({
  breakpoints = {
    0: { slidesToShow: 1.5, gap: 6 },
    500: { slidesToShow: 2, gap: 6 },
    768: { slidesToShow: 3, gap: 8 },
    1024: { slidesToShow: 5, gap: 8 },
  },
  items,
}: ProductCarouselProps) {
  const [index, setIndex] = useState(items.length); // start in middle (group 2)
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [gap, setGap] = useState(16);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const total = items.length;
  const extended = [...items, ...items, ...items]; // group1, group2, group3
  const offset = total; // middle group start index

  // --- Breakpoints ---
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      const sorted = Object.keys(breakpoints)
        .map(Number)
        .sort((a, b) => b - a);

      for (const bp of sorted) {
        if (width >= bp) {
          const bpConfig = breakpoints[bp];
          setSlidesToShow(bpConfig.slidesToShow);
          setGap(bpConfig.gap ?? 16);
          break;
        }
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, [breakpoints]);

  // --- Compute X offset ---
  const computeTargetX = (containerWidth: number, index: number) => {
    const slideWidth = (containerWidth - gap * (slidesToShow - 1)) / slidesToShow;
    const centerOffset = (slidesToShow - 1) / 2;
    return -(index - centerOffset) * (slideWidth + gap);
  };

  // --- Animate movement ---
  useEffect(() => {
    let controls: AnimationPlaybackControls | undefined;
    if (containerRef.current) {
      const cw = containerRef.current.offsetWidth || 1;
      const targetX = computeTargetX(cw, index);
      controls = animate(x, targetX, { type: "spring", stiffness: 300, damping: 30 });
    }
    return () => controls?.stop();
  }, [index, slidesToShow]);

  // --- Modulo reset for seamless looping ---
  useEffect(() => {
    const cw = containerRef.current?.offsetWidth || 1;
    const total = items.length;

    if (index >= offset + total) {
      // passed right edge → instantly wrap back
      requestAnimationFrame(() => {
        setIndex((prev) => prev - total);
        x.set(computeTargetX(cw, index - total));
      });
    } else if (index < offset) {
      // passed left edge → instantly wrap forward
      requestAnimationFrame(() => {
        setIndex((prev) => prev + total);
        x.set(computeTargetX(cw, index + total));
      });
    }
  }, [index]);

  // --- Resize observer ---
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const updatePosition = () => {
      const cw = container.offsetWidth || 1;
      x.set(computeTargetX(cw, index));
    };
    const ro = new ResizeObserver(updatePosition);
    ro.observe(container);
    return () => ro.disconnect();
  }, [slidesToShow, index, x]);

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  const activeIndex = (((index - offset) % total) + total) % total;

  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-5 md:gap-8">
        {/* Carousel */}
        <div className="relative w-full" ref={containerRef}>
          <motion.div className="flex" style={{ x, gap: `${gap}px` }}>
            {extended.map((product, i) => (
              <div
                key={i}
                className="shrink-0 flex flex-col items-center text-center bg-white"
                style={{
                  width: `calc((100% - ${(slidesToShow - 1) * gap}px) / ${slidesToShow})`,
                }}
              >
                {/* Image */}
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover select-none"
                    draggable={false}
                  />
                </div>

                {/* Info */}
                <div className="mt-4">
                  <div className="text-base font-medium text-neutral-800">{product.name}</div>
                  <div className="text-sm text-neutral-500">{product.brand}</div>
                  <div className="text-base mt-2 font-medium text-neutral-700">
                    RM {product.price.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <button
            onClick={prev}
            className="cursor-pointer absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg bg-neutral-200 hover:scale-110 hover:bg-neutral-100 transition-transform z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={next}
            className="cursor-pointer absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg bg-neutral-200 hover:scale-110 hover:bg-neutral-100 transition-transform z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-1.5 md:gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(offset + i)}
              className={`h-2 md:h-2.5 rounded-full transition-all ${
                activeIndex === i
                  ? "w-8 bg-neutral-700"
                  : "w-2 md:w-2.5 bg-neutral-400 cursor-pointer"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
