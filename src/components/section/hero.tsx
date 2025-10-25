"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { easeExpo } from "@/lib/motion-config";
import useSmoothNavigate from "@/hooks/use-smooth-navigate";
import hair_1 from "@/app/assets/img/people/hair_1.jpg";
import hair_2 from "@/app/assets/img/people/hair_2.jpg";
import useLoaded from "@/hooks/use-loaded";
import useScrolled from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

type LinkAnchorProps = {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
};

const DELAY = 1.84;

const LinkAnchor = ({ href, label, onClick, className, style }: LinkAnchorProps) => {
  const isInternalLink = href.startsWith("#");
  const smoothScroll = useSmoothNavigate();

  const toInternalLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    if (isInternalLink) {
      e.preventDefault();
      smoothScroll(href.slice(1));
    }
  };

  return (
    <motion.a
      onClick={toInternalLink}
      href={href}
      className={cn("cursor-pointer transition-colors inline-block", className)}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.4,
        ease: easeExpo,
        delay: DELAY + 0.2,
      }}
    >
      {label}
    </motion.a>
  );
};

const Hero = () => {
  const { loaded } = useLoaded();
  const { scroll, unscroll } = useScrolled();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    let wasAbove = false;
    return scrollYProgress.on("change", (latest) => {
      if (latest > 0.35 && !wasAbove) {
        scroll();
        wasAbove = true;
      } else if (latest <= 0.35 && wasAbove) {
        unscroll();
        wasAbove = false;
      }
    });
  }, [scrollYProgress]);

  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 0.93]);
  const translateY = useTransform(scrollYProgress, [0, 0.55], [0, 80]);

  const navOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const navTranslateY = useTransform(scrollYProgress, [0, 0.35], [0, -60]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: "10%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: easeExpo,
        duration: 2.0,
        delay: DELAY,
      },
    },
  };

  return (
    <section ref={ref} id="hero" className={cn(loaded ? "h-[200svh] mb-[-100svh]" : "h-full")}>
      <div className="size-full flex-center sticky top-0 h-dvh overflow-hidden">
        <div className="size-full flex-center section-container relative">
          <motion.div
            className="z-10 absolute hidden md:flex items-center justify-between top-8 left-0 right-0 text-lg"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            style={{
              opacity: navOpacity,
              y: navTranslateY,
            }}
          >
            <LinkAnchor href="#about-us" label="ABOUT US" />
            <LinkAnchor href="#artwork" label="ARTWORK" />
            <LinkAnchor href="#service" label="SERVICES" />
            <LinkAnchor href="#product" label="PRODUCTS" />
            <LinkAnchor
              className="bg-neutral-900 text-white py-4 px-5"
              href="#book"
              label="BOOK NOW"
            />
          </motion.div>
          <motion.div className="relative w-full" style={{ opacity, scale, translateY }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="relative z-10 text-center py-[100px] sm:py-[120px] xl:py-[140px]"
            >
              <h1 className="duration-300 text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[9rem] font-semibold leading-none">
                LASSO
                <br />
                SALON
              </h1>
              <p className="duration-300 mt-2 md:mt-6 r text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed">
                <span className="hidden lg:inline">
                  SCALP CARE&nbsp;|&nbsp;HAIR DYE&nbsp;|&nbsp;PERMING&nbsp;|&nbsp;HAIR CARE
                </span>
                <span className="block lg:hidden">
                  SCALP CARE&nbsp;|&nbsp;HAIR DYE
                  <br />
                  PERMING&nbsp;|&nbsp;HAIR CARE
                </span>
              </p>
            </motion.div>

            <div className="absolute inset-0 flex justify-between">
              <motion.div
                className="w-[40%] h-[50%] sm:w-[40%] sm:h-[65%] md:w-[38%] md:h-[65%] lg:w-[35%] lg:h-[80%]"
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
              >
                <Image
                  className="object-cover max-w-none size-full"
                  src={hair_2}
                  alt="hair_2"
                  priority
                />
              </motion.div>

              <motion.div
                className="mt-auto w-[40%] h-[50%] sm:w-[40%] sm:h-[65%] md:w-[38%] md:h-[65%] lg:w-[35%] lg:h-[80%]"
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
              >
                <Image
                  className="object-cover max-w-none size-full"
                  src={hair_1}
                  alt="hair_1"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
