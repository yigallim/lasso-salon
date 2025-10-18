"use client";
import React, { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import SplitText from "@/components/ui/split-text";
import { getYear } from "@/lib/utils";

const INTRO_ANIMATION_DURATION_FACTOR = 0.75;
const SWIPE_UP_DELAY = 2 * INTRO_ANIMATION_DURATION_FACTOR;
const SWIPE_UP_DURATION = 0.84 * INTRO_ANIMATION_DURATION_FACTOR;
const SVG_LINE_DURATION = 1.6 * INTRO_ANIMATION_DURATION_FACTOR;

const Welcome = () => {
  const ref = React.useRef(null);
  const [curveValue, setCurveValue] = useState(0.74);

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 640) setCurveValue(0.9);
    else if (width >= 640 && width < 1024) setCurveValue(0.82);
    else setCurveValue(0.74);
  }, []);
  const animatedValue = useMotionValue(0);
  useEffect(() => {
    const controls = animate(animatedValue, 1, {
      delay: 0.1,
      duration: SVG_LINE_DURATION,
      ease: [0.2, 0, 0.8, 1],
    });
    return controls.stop;
  }, [animatedValue]);

  return (
    <>
      <svg className="w-0 h-0">
        <clipPath id="animated-clip" clipPathUnits="objectBoundingBox">
          <motion.path
            d="M0,0 L1,0 L1,1 Q0.5,1,0,1"
            animate={{
              d: `M0,0 L1,0 L1,1 Q0.5,${curveValue},0,1`,
            }}
            transition={{
              delay: SWIPE_UP_DELAY,
              duration: SWIPE_UP_DURATION,
              ease: "easeInOut",
            }}
          />
        </clipPath>
      </svg>
      <motion.div
        className="flex bg-black w-full h-[calc(100%+1.6rem)] overflow-hidden origin-top fixed top-0 left-0 z-[999]"
        ref={ref}
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ delay: SWIPE_UP_DELAY, duration: SWIPE_UP_DURATION, ease: "easeInOut" }}
        style={{ clipPath: "url(#animated-clip)" }}
      >
        <div className="h-full w-full grid place-items-center">
          <div className="flex flex-col">
            <SplitText
              tag="h2"
              delay={45}
              duration={{ opacity: 3, y: 1 }}
              ease="expo.out"
              from={{ opacity: 0, y: "100%" }}
              to={{ opacity: 1, y: "0%" }}
              text="Welcome"
              className="text-neutral-100 font-semibold text-7xl leading-normal"
            />
            <SplitText
              tag="h5"
              delay={45}
              duration={{ opacity: 3, y: 1 }}
              ease="expo.out"
              from={{ opacity: 0, y: "100%" }}
              to={{ opacity: 1, y: "0%" }}
              text={"© LASSO " + getYear()}
              className="text-neutral-400 heading-5 font-semibold font-sans text-3xl leading-normal"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Welcome;
