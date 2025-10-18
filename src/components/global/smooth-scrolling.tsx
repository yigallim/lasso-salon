import React from "react";
import ReactLenis from "lenis/react";

type SmoothScrollingProps = {
  children: React.ReactNode;
};

const SmoothScrolling = ({ children }: SmoothScrollingProps) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScrolling;
