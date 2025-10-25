"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { easeExpo } from "@/lib/motion-config";
import { cn } from "@/lib/utils";
import useScrolled from "@/hooks/use-scrolled";
import useLoaded from "@/hooks/use-loaded";
import useSmoothNavigate from "@/hooks/use-smooth-navigate";
import useSidebar from "@/hooks/use-sidebar";

export const INSTAGRAM = {
  label: "Instagram",
  href: "https://www.instagram.com/lassosalon/",
};
export const FACEBOOK = {
  label: "Facebook",
  href: "https://www.facebook.com/Lassohair/",
};

const links = [INSTAGRAM, FACEBOOK];

type LinkTagProps = {
  href: string;
  label: string;
};

const LinkTag = ({ href, label }: LinkTagProps) => {
  return (
    <a
      className="py-2 px-3 text-neutral-300 font-medium border border-neutral-400 rounded-full"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
};

type LinkAnchorProps = {
  href: string;
  label: string;
  onClick: () => void;
};

const LinkAnchor = ({ href, label, onClick }: LinkAnchorProps) => {
  const isInternalLink = href.startsWith("#");
  const smoothScroll = useSmoothNavigate();

  const toInternalLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick();
    if (isInternalLink) {
      e.preventDefault();
      smoothScroll(href.slice(1));
    }
  };

  return (
    <a onClick={toInternalLink} href={href} className="text-neutral-300">
      {label}
    </a>
  );
};

const sidebar: Variants = {
  open: {
    x: "0%",
    opacity: 1,
    transition: {
      ease: easeExpo,
      duration: 1.2,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      opacity: {
        duration: 0.2,
      },
    },
    transitionEnd: {
      x: "100%",
    },
  },
  initial: {
    x: "100%",
    opacity: 0,
  },
};

const mask: Variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
};

const navItems = [
  {
    label: "About Us",
    href: "#about-us",
  },
  {
    label: "Artwork",
    href: "#artwork",
  },
  {
    label: "Service",
    href: "#service",
  },
  {
    label: "Product",
    href: "#product",
  },
];

const Navigation = () => {
  const { open, closeSidebar, toggleSidebar } = useSidebar();
  const [key, setKey] = useState(0);
  const { scrolled } = useScrolled();
  const { loaded } = useLoaded();

  const handleToggle = () => {
    toggleSidebar();
    setKey((prevKey) => prevKey + 1);
  };

  const handleLinkAnchorClick = () => {
    closeSidebar();
  };

  return (
    <>
      <motion.button
        className={cn(
          "z-[60] fixed flex-center flex-col rounded-full bg-neutral-300 ease-expo",
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
            open ? "rotate-45" : "-translate-y-1"
          )}
        />
        <div
          className={cn(
            "duration-300 h-[0.125rem] w-[2rem] bg-neutral-600 absolute ease-expo",
            open ? "-rotate-45" : "translate-y-1"
          )}
        />
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            key={`mask-${key}`}
            className="bg-neutral-900/50 fixed inset-0 z-40"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mask}
            onClick={handleToggle}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <div
            key={`sidebar-${key}`}
            className="z-50 fixed top-2 bottom-2 right-0 pl-2 max-w-[32rem] md:max-w-[33.5rem] lg:max-w-[36rem] w-full"
          >
            <motion.nav
              className="z-50 size-full rounded-l-xl bg-[#1C1C1C] relative overflow-hidden"
              variants={sidebar}
              animate="open"
              exit="closed"
              initial="initial"
            >
              <div className="z-40 relative size-full py-16 px-8 sm:px-12 md:px-16 flex flex-col justify-between overflow-hidden">
                <div>
                  <h4 className="text-neutral-400 font-semibold mb-4 text-lg">NAVIGATION</h4>
                  <ul className="text-5xl md:text-6xl font-bold space-y-4 leading-none">
                    {navItems.map((item) => (
                      <li key={item.label}>
                        <LinkAnchor
                          onClick={handleLinkAnchorClick}
                          href={item.href}
                          label={item.label}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-md">
                  <div className="leading-normal font-semibold">
                    <h4 className="text-neutral-400 font-semibold text-lg">CONTACT US</h4>
                    <p className="text-neutral-200 font-mono text-lg">lassohairstudio@gmail.com</p>
                    <p className="text-neutral-200 font-mono text-lg">012-577 2257</p>
                  </div>
                  <div className="space-x-3 flex mt-8">
                    {links.map((link, index) => (
                      <LinkTag key={index} href={link.href} label={link.label} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute rounded-full h-[24rem] w-[24rem] md:h-[32rem] md:w-[32rem] bg-neutral-500/20 z-0 -right-[8%] top-[14%] md:top-[18%] translate-x-[45%] -translate-y-[40%]"></div>
              <div className="absolute rounded-full h-[26rem] w-[26rem] md:h-[36rem] md:w-[36rem] bg-neutral-800/90 z-0 right-0 top-0 translate-x-[45%] -translate-y-[40%]"></div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
