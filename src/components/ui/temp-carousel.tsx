// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { motion, useMotionValue, animate, AnimationPlaybackControls } from "motion/react";

// export const items = [
//   "https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=880&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1539552678512-4005a33c64db?q=80&w=880&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1709983966747-58c311fa6976?q=80&w=880&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1683722319473-f851deb3fdf2?q=80&w=880&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1560790671-b76ca4de55ef?q=80&w=734&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1698774303292-7af9410c3a57?q=80&w=436&auto=format&fit=cropv",
//   "https://images.unsplash.com/photo-1643994542584-1247b5266429?q=80&w=869&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1613681230409-6423a38c43e1?q=80&w=871&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1486102515046-44130769cb25?q=80&w=435&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1610397648930-477b8c7f0943?q=80&w=430&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1546471180-335a013cb87b?q=80&w=387&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1540163502599-a3284e17072d?q=80&w=880&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1555803741-1ac759ac2f53?q=80&w=880&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1516705486637-7b01bf9b9d13?q=80&w=880&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1512045519129-eb9ceb788555?q=80&w=880&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=880&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1611582450053-0f056a82a68e?q=80&w=735&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1590872000386-4348c6393115?q=80&w=688&auto=format&fit=crop",
// ];

// export default function Carousel({
//   breakpoints = {
//     0: { slidesToShow: 2.5 },
//     768: { slidesToShow: 3 },
//     1024: { slidesToShow: 5 },
//   },
// }) {
//   const [slidesToShow, setSlidesToShow] = useState(3);
//   const [displayItems, setDisplayItems] = useState([...items, ...items]); // Dynamic item array
//   const [index, setIndex] = useState(0); // Current index for animation
//   const containerRef = useRef(null);
//   const x = useMotionValue(0);

//   const total = items.length;

//   // --- Breakpoints ---
//   useEffect(() => {
//     const updateSlidesToShow = () => {
//       const width = window.innerWidth;
//       const sorted = Object.keys(breakpoints)
//         .map(Number)
//         .sort((a, b) => b - a);
//       for (const bp of sorted) {
//         if (width >= bp) {
//           setSlidesToShow(breakpoints[bp].slidesToShow);
//           break;
//         }
//       }
//     };
//     updateSlidesToShow();
//     window.addEventListener("resize", updateSlidesToShow);
//     return () => window.removeEventListener("resize", updateSlidesToShow);
//   }, [breakpoints]);

//   // --- Compute X offset ---
//   const computeTargetX = (containerWidth, idx) => {
//     const gap = 16;
//     const slideWidth = (containerWidth - gap * (slidesToShow - 1)) / slidesToShow;
//     return -idx * (slideWidth + gap);
//   };

//   // --- Animate movement ---
//   useEffect(() => {
//     let controls;
//     if (containerRef.current) {
//       const cw = containerRef.current.offsetWidth || 1;
//       const targetX = computeTargetX(cw, index);
//       controls = animate(x, targetX, { type: "spring", stiffness: 300, damping: 30 });
//     }
//     return () => controls?.stop();
//   }, [index, slidesToShow]);

//   // --- Handle infinite scroll ---
//   useEffect(() => {
//     if (!containerRef.current) return;
//     const cw = containerRef.current.offsetWidth || 1;
//     if (index >= displayItems.length - Math.ceil(slidesToShow)) {
//       setDisplayItems((prev) => [...prev, ...items]);
//     }

//     // If moving backward and nearing the start, prepend items and adjust index
//     if (index < Math.floor(slidesToShow)) {
//       setDisplayItems((prev) => [...items, ...prev]);
//       setIndex((prev) => prev + total);
//       x.set(computeTargetX(cw, index + total));
//     }
//   }, [index, slidesToShow, total]);

//   // --- Resize observer ---
//   useEffect(() => {
//     if (!containerRef.current) return;
//     const container = containerRef.current;
//     const updatePosition = () => {
//       const cw = container.offsetWidth || 1;
//       x.set(computeTargetX(cw, index));
//     };
//     const ro = new ResizeObserver(updatePosition);
//     ro.observe(container);
//     return () => ro.disconnect();
//   }, [slidesToShow, index]);

//   const next = () => setIndex((i) => i + 1);
//   const prev = () => setIndex((i) => i - 1);

//   const activeIndex = ((index % total) + total) % total; // For pagination dots

//   return (
//     <div className="w-full lg:p-10 sm:p-4 p-2">
//       <div className="flex flex-col items-center gap-8">
//         {/* Carousel */}
//         <div className="relative w-full overflow-hidden" ref={containerRef}>
//           <motion.div className="flex gap-4" style={{ x }}>
//             {displayItems.map((url, i) => (
//               <div
//                 key={`${url}-${i}`}
//                 className="shrink-0 h-[400px] overflow-hidden relative"
//                 style={{
//                   width: `calc((100% - ${(slidesToShow - 1) * 16}px) / ${slidesToShow})`,
//                 }}
//               >
//                 <img
//                   src={url}
//                   alt=""
//                   className="w-full h-full object-cover select-none pointer-events-none"
//                   draggable={false}
//                 />
//               </div>
//             ))}
//           </motion.div>

//           {/* Buttons */}
//           <button
//             onClick={prev}
//             className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg bg-neutral-200 hover:scale-110 hover:bg-neutral-100 transition-transform z-20"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>

//           <button
//             onClick={next}
//             className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg bg-neutral-200 hover:scale-110 hover:bg-neutral-100 transition-transform z-20"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center gap-2">
//           {items.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(index - activeIndex + i)}
//               className={`h-2.5 rounded-full transition-all ${
//                 activeIndex === i ? "w-8 bg-neutral-700" : "w-2.5 bg-neutral-400 cursor-pointer"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
