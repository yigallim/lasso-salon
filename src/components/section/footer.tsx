import useSmoothNavigate from "@/hooks/use-smooth-navigate";
import React from "react";

const exploreLinks = [
  { name: "About Us", href: "#about-us" },
  { name: "Artwork", href: "#artwork" },
  { name: "Service", href: "#service" },
  { name: "Product", href: "#product" },
];

const followLinks = [
  { name: "Instagram", href: "https://www.instagram.com/lassosalon/" },
  { name: "Facebook", href: "https://www.facebook.com/Lassohair/" },
];

const Footer = () => {
  const smoothScroll = useSmoothNavigate();
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isInternal = href.startsWith("#");
    if (isInternal) {
      e.preventDefault();
      smoothScroll(href.slice(1));
    }
  };

  return (
    <footer className="flex flex-col justify-between items-center gap-[6vi] md:gap-[3vi] w-full text-neutral-800 bg-neutral-100 pt-12">
      {/* Main Footer Content */}
      <div className="w-full flex flex-col md:flex-row justify-between px-4 sm:px-6 md:px-8 gap-[6vi] md:gap-[8vi]">
        {/* Left Column — Navigate */}
        <div className="flex max-lg:justify-between md:gap-[8vi]">
          <div className="flex flex-col md:flex-row gap-[0.75vi] md:gap-[4vi]">
            <h4 className="uppercase tracking-wide text-[2.25vi] md:text-[1.2vi] lg:text-[0.9vi] font-semibold mt-[0.1em]">
              Explore
            </h4>
            <ul className="font-semibold text-[6vi] md:text-[3vi] lg:text-[2.7vi] leading-none space-y-[0.4em]">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block"
                    onClick={(e) => handleLinkClick(e, link.href)}
                    target={link.href.startsWith("#") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle Column — Follow Us */}
          <div className="flex flex-col md:flex-row gap-[0.75vi] md:gap-[4vi]">
            <h4 className="uppercase tracking-wide text-[2.25vi] md:text-[1.2vi] lg:text-[0.9vi] font-semibold mt-[0.1em]">
              Follow Us
            </h4>
            <ul className="font-semibold text-[6vi] md:text-[3vi] lg:text-[2.7vi] leading-none space-y-[0.4em]">
              {followLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="block" target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column — Contact */}
        <div className="flex flex-col gap-[6vi] md:gap-[2vi] md:text-right">
          <div className="space-y-[0.75vi]">
            <h4 className="uppercase tracking-wide text-[2.25vi] md:text-[1.2vi] lg:text-[0.9vi] font-semibold">
              Contact Us
            </h4>
            <p className="text-[3vi] md:text-[1.5vi] lg:text-[1.25vi] font-bold leading-snug">
              <a>lassohairstudio@gmail.com</a>
              <br />
              <a>012-577 2257</a>
            </p>
          </div>
          <div className="space-y-[0.75vi]">
            <h4 className="uppercase tracking-wide text-[2.25vi] md:text-[1.2vi] lg:text-[0.9vi] font-semibold">
              Hours
            </h4>
            <p className="text-[3vi] md:text-[1.5vi] lg:text-[1.25vi] font-bold leading-snug">
              11:15AM-07:45AM
              <br />
              Wednesday Off
            </p>
          </div>
          <div className="space-y-[0.75vi]">
            <h4 className="uppercase tracking-wide text-[2.25vi] md:text-[1.2vi] lg:text-[0.9vi] font-semibold">
              Come By
            </h4>
            <p className="text-[3vi] md:text-[1.5vi] lg:text-[1.25vi] font-bold leading-snug">
              LASSO Salon
              <br />
              20, Jalan 7/36, Bukit Seri Bintang
              <br />
              52100 Kuala Lumpur
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Brand Text */}
      <div className="pb-[1.5vi]">
        <p className="leading-[0.75] text-[25.5vi] md:text-[25.75vi] font-bg font-bold text-nowrap text-center">
          LASSO.
        </p>
        <div className="flex justify-between font-semibold text-xs sm:text-sm md:text-base mt-[0.5em] max-sm:px-2 gap-4">
          <div>© LASSO SALON 2025</div>
          <div className="text-right">KUALA LUMPUR, MALAYSIA</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
