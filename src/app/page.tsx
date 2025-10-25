"use client";
import React, { useEffect } from "react";
import useLoaded from "@/hooks/use-loaded";
import useSidebar from "@/hooks/use-sidebar";
import Hero from "@/components/section/hero";
import Welcome from "@/components/section/welcome";
import AboutUs from "@/components/section/about-us";
import Navigation from "@/components/section/navigation";
import ArtWork from "@/components/section/artwork";
import Service from "@/components/section/service";
import Location from "@/components/section/location";
import Product from "@/components/section/product";
import Footer from "@/components/section/footer";
import { cn } from "@/lib/utils";

const Page = () => {
  const { loaded, load } = useLoaded();
  // const { open } = useSidebar();

  useEffect(() => {
    const loadTimer = setTimeout(load, 3000);
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
          className="overflow-hidden w-full relative z-20 flex flex-col items-center gap-24 md:gap-32 pt-20
        bg-white border-t-2 shadow-[0_0_60px_16px_rgba(0,0,0,0.08)]"
        >
          <AboutUs />
          <ArtWork />
          <Service />
          <Product />
          <Location />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Page;
