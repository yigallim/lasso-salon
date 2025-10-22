"use client";
import React from "react";
import { Tabs } from "@/components/ui/tabs";

const DummyContent = () => {
  return <div></div>;
};

const tabs = [
  {
    title: "Product",
    value: "product",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-neutral-300">
        <p>Product Tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Services",
    value: "services",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-neutral-300">
        <p>Services tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Playground",
    value: "playground",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-neutral-300">
        <p>Playground tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Content",
    value: "content",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-neutral-300">
        <p>Content tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Random",
    value: "random",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-neutral-300">
        <p>Random tab</p>
        <DummyContent />
      </div>
    ),
  },
];

const Service = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="section-container relative">
        <div
          className="md:-ml-[0.1em] -mb-[0.3em] sm:-mb-[0.25em] text-[120px] sm:text-[160px] md:text-[200px] lg:text-[240px] xl:text-[280px] 
          leading-[0.75] lg:tracking-widest font-bold font-bg text-[#F5F5F5]"
        >
          SALON
        </div>
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-[1.25em] md:mb-[2em] leading-none">
          OUR SERVICES
        </h2>
        <div className="h-[20rem] md:h-[40rem]">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
};

export default Service;
