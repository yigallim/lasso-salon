"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { easeExpo } from "@/lib/motion-config";
import { cn } from "@/lib/utils";
import useScrolled from "@/hooks/use-scrolled";
import useLoaded from "@/hooks/use-loaded";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrolled } = useScrolled();
  const { loaded } = useLoaded();

  const handleToggle = () => {
    setIsOpen((v) => !v);
  };

  return (
    <motion.button
      className={cn(
        "z-50 fixed flex-center flex-col rounded-full bg-neutral-300 ease-expo",
        "top-3 right-3 sm:top-4 sm:right-4 md:top-8 md:right-8",
        "p-[2rem] md:p-[2.25rem] hover:!scale-[85%]",
        "scale-100 md:scale-0",
        scrolled && "md:scale-100",
        loaded && "duration-300"
      )}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 2.4,
        ease: easeExpo,
      }}
      onClick={handleToggle}
    >
      <div
        className={cn(
          "duration-300 h-[0.125rem] w-[2rem] bg-neutral-600 absolute ease-expo",
          isOpen ? "rotate-45" : "-translate-y-1"
        )}
      />
      <div
        className={cn(
          "duration-300 h-[0.125rem] w-[2rem] bg-neutral-600 absolute ease-expo",
          isOpen ? "-rotate-45" : "translate-y-1"
        )}
      />
    </motion.button>
  );
};

export default Navigation;
