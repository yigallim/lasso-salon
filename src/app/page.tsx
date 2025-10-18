"use client";
import React, { useEffect } from "react";
import useLoaded from "@/hooks/use-loaded";
import Hero from "@/components/section/hero";
import Welcome from "@/components/section/welcome";

const Page = () => {
  const { loaded, load } = useLoaded();

  useEffect(() => {
    const loadTimer = setTimeout(load, 3800);
    return () => {
      clearTimeout(loadTimer);
    };
  });

  return (
    <>
      {!loaded && <Welcome />}
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Page;
