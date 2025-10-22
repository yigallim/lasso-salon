"use client";
import React from "react";
import { Tabs } from "@/components/ui/tabs";

interface ServiceItem {
  title: string;
  desc: string;
  price: string;
}

interface ServiceTabProps {
  items: ServiceItem[];
}

export const ServiceTab: React.FC<ServiceTabProps> = ({ items }) => {
  return (
    <div className="w-full bg-neutral-100 shadow-[0_6px_12px_4px_rgba(0,0,0,0.08)] text-neutral-800 px-6 md:px-10 py-10">
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 sm:gap-y-8 text-[15px] md:text-base leading-relaxed">
        {items.map(({ title, desc, price }, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-200 pb-2"
          >
            <div>
              <h3 className="font-medium text-lg">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
            <span className="font-medium text-right">{price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const tabs = [
  {
    title: "Basics",
    value: "basics",
    content: (
      <ServiceTab
        items={[
          { title: "ARTISTIC DIRECTOR", desc: "Gents Cut with wash & style", price: "168" },
          { title: "CREATIVE DIRECTOR", desc: "Gents Cut with wash & style", price: "130" },
          { title: "ARTISTIC STYLIST", desc: "Gents Cut with wash & style", price: "80" },
          { title: "CREATIVE STYLIST", desc: "Gents Cut with wash & style", price: "60" },
          { title: "UP-STYLE", desc: "Up Style", price: "150++" },
          {
            title: "WASH & BLOW",
            desc: "Shampoo & Blow Dry with Iron or Curling Tong Setting",
            price: "70++",
          },
          { title: "ARTISTIC DIRECTOR", desc: "Ladies Cut with wash & style", price: "198" },
          { title: "CREATIVE DIRECTOR", desc: "Ladies Cut with wash & style", price: "160" },
          { title: "ARTISTIC STYLIST", desc: "Ladies Cut with wash & style", price: "100" },
          { title: "CREATIVE STYLIST", desc: "Ladies Cut with wash & style", price: "80" },
          { title: "MAKE UP", desc: "Reservation Before One Week", price: "150++" },
        ]}
      />
    ),
  },
  {
    title: "Color",
    value: "color",
    content: (
      <ServiceTab
        items={[
          { title: "COLOR - RR", desc: "Regrowth (Root Retouch)", price: "240++" },
          { title: "COLOR - Multi Tone", desc: "Multi-tone", price: "340++" },
          { title: "COLOR - Dual Tone", desc: "Dual-tone", price: "320++" },
          { title: "COLOR - Bleaching", desc: "Color bath / Pre-lightening", price: "260++" },
          { title: "COLOR Base", desc: "Permanent", price: "280++" },
        ]}
      />
    ),
  },
  {
    title: "Texturize",
    value: "texturize",
    content: (
      <ServiceTab
        items={[
          { title: "TEXTURIZE - Relaxer", desc: "Relaxer", price: "380++" },
          { title: "TEXTURIZE - Wave", desc: "Wave with Point Section Relaxing", price: "480++" },
          { title: "TEXTURIZE - Perm", desc: "Perm", price: "360++" },
          {
            title: "TEXTURIZE - Technique Perm",
            desc: "Signature Spiral / Technique Perm",
            price: "580++",
          },
        ]}
      />
    ),
  },
  {
    title: "Treatments",
    value: "treatments",
    content: (
      <ServiceTab
        items={[
          {
            title: "SCALP TREATMENT",
            desc: "Detox / Exfoliate / Soothing / Revitalizing / Balance",
            price: "240++",
          },
          { title: "SCALP TREATMENT", desc: "Gua Sha", price: "280++" },
          {
            title: "HAIR TREATMENT",
            desc: "Hydration / Repairing / Anti-Aging / Strengthening / Restructure",
            price: "240++",
          },
          { title: "HAIR TREATMENT", desc: "Keratin / Exclusive Kera-Sea", price: "580++" },
        ]}
      />
    ),
  },
];

const Service = () => {
  return (
    <section className="section-container">
      <div
        className="md:-ml-[0.1em] -mb-[0.3em] sm:-mb-[0.25em] text-[120px] sm:text-[160px] md:text-[200px] lg:text-[240px] xl:text-[280px] 
          leading-[0.75] lg:tracking-widest font-bold font-bg text-[#F5F5F5]"
      >
        SALON
      </div>
      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-[1.25em] md:mb-[2em] leading-none">
        OUR SERVICES
      </h2>
      <Tabs tabs={tabs} />
    </section>
  );
};

export default Service;
