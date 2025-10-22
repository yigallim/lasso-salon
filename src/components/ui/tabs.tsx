"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { easeExpo } from "@/lib/motion-config";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  return (
    <>
      <div
        className={cn(
          "mb-14 sm:mb-16 md:mb-18 flex flex-row items-center justify-start [perspective:1000px] relative no-visible-scrollbar max-w-full w-full flex-wrap",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            className={cn(
              "relative px-4 py-2 rounded-full text-[15px] sm:text-base lg:text-lg",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-black dark:text-white">{tab.title}</span>
          </button>
        ))}
      </div>
      <FadeInDiv tabs={tabs} active={active} key={active.value} className={cn(contentClassName)} />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  active,
}: {
  className?: string;
  tabs: Tab[];
  active: Tab;
}) => {
  const isActive = (tab: Tab) => tab.value === active.value;

  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: idx * -20,
            zIndex: -idx,
            originY: 0,
            originX: 0.5,
          }}
          initial={{
            y: 0,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
            filter: "blur(3px)",
          }}
          animate={{
            y: isActive(tab) ? 0 : 0,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
            filter: isActive(tab) ? "blur(0px)" : "blur(3px)",
          }}
          whileTap={isActive(tab) ? { y: [0, 40, 0] } : {}}
          transition={{
            filter: { duration: 0.3, ease: easeExpo },
            opacity: { duration: 0.3, ease: easeExpo },
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
