"use client";
import React, { useEffect } from "react";
import useLoaded from "@/hooks/use-loaded";
import Hero from "@/components/section/hero";
import Welcome from "@/components/section/welcome";
import AboutUs from "@/components/section/about-us";
import { cn } from "@/lib/utils";
import Navigation from "@/components/section/navigation";
import ArtWork from "@/components/section/artwork";
import Service from "@/components/section/service";

const Page = () => {
  const { loaded, load } = useLoaded();

  useEffect(() => {
    const loadTimer = setTimeout(load, 500);
    return () => {
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <>
      {!loaded && <Welcome />}
      <main className={cn("size-full", !loaded && "overflow-hidden")}>
        <Navigation />
        <Hero />
        <div
          className="overflow-hidden w-full relative z-20 flex flex-col items-center gap-16 md:gap-24 lg:gap-32 py-20
        bg-white border-t-2 shadow-[0_0_60px_16px_rgba(0,0,0,0.08)]"
        >
          <AboutUs />
          <ArtWork />
          <Service />
          <div className="mt-12 h-screen section-container"></div>
        </div>
      </main>
    </>
  );
};

export default Page;
