import type { Metadata } from "next";
import localFont from "next/font/local";
import SmoothScrolling from "@/components/global/smooth-scrolling";
import "./globals.css";
import { cn } from "@/lib/utils";

// const inter = localFont({
//   src: "./assets/font/inter-font-v2.woff2",
//   variable: "--font-inter",
// });
const montreal = localFont({
  src: "./assets/font/ppneuemontreal-variable.woff2",
  variable: "--font-montreal",
});

export const metadata: Metadata = {
  title: "L A S S O salon",
  description: "SCALP CARE | HAIR DYE | PERMING | HAIR CARE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={cn("font-sans", montreal.variable)}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
