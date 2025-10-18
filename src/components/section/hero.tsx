import Image from "next/image";
import hair_1 from "@/app/assets/img/people/hair_1.jpg";
import hair_2 from "@/app/assets/img/people/hair_2.jpg";
import useSmoothNavigate from "@/hooks/use-smooth-scroll";
import { cn } from "@/lib/utils";

type LinkAnchorProps = {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
};

const LinkAnchor = ({ href, label, onClick, className, style }: LinkAnchorProps) => {
  const isInternalLink = href.startsWith("#");
  const smoothScroll = useSmoothNavigate();

  const toInternalLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    if (isInternalLink) {
      e.preventDefault();
      smoothScroll(href.slice(1));
    }
  };

  return (
    <a
      onClick={toInternalLink}
      href={href}
      className={cn("cursor-pointer transition-colors inline-block", className)}
      style={style}
    >
      {label}
    </a>
  );
};

const Hero = () => {
  return (
    <div className="flex-center relative h-screen">
      <div className="h-full flex items-center duration-300 w-max relative">
        <div className="absolute flex items-center justify-between top-8 left-0 right-0 text-lg">
          <LinkAnchor href="#about" label="ABOUT US" />
          <LinkAnchor href="#team" label="OUR TEAM" />
          <LinkAnchor href="#services" label="SERVICES" />
          <LinkAnchor href="#products" label="PRODUCTS" />
          <LinkAnchor href="#artwork" label="ARTWORK" />
          <LinkAnchor className="bg-neutral-900 text-white py-4 px-5" href="#" label="BOOK NOW" />
        </div>
        <Image
          src={hair_2}
          alt="hair_2"
          width={420}
          height={380}
          priority
          className="object-cover min-w-[420px] h-[380px] mr-[-96px] mt-[80px]"
        />
        <div className="relative z-50 text-center">
          <h1 className="text-[9rem] font-semibold z-50 leading-none">
            LASSO
            <br />
            SALON
          </h1>
          <p className="mt-8 font-medium">SCALP CARE | HAIR DYE | PERMING | HAIR CARE</p>
        </div>
        <Image
          src={hair_1}
          alt="hair_1"
          width={400}
          height={440}
          priority
          className="object-cover min-w-[400px] h-[440px] -ml-[60px] -mt-[60px]"
        />
      </div>
    </div>
  );
};

export default Hero;

// const Hero = () => {
//   return (
//     <div className="flex-center relative">
//       <div className="h-screen min-w-[500px] scale-50 sm:scale-60 md:scale-75 lg:scale-100 duration-300">
//         <Image
//           src="/indoor-view.jpg"
//           alt="indoor"
//           width={550}
//           height={600}
//           priority
//           className="object-cover center-absolute w-[550px] h-[600px] max-sm:-translate-x-[calc(50%+70px)]"
//         />
//         <Image
//           src="/leafs.jpg"
//           alt="leafs"
//           width={244}
//           height={324}
//           priority
//           className="object-cover center-absolute w-[244px] h-[324px] sm:translate-x-[calc(220px)]
//            translate-x-[calc(120px)]"
//         />
//         <Image
//           src="/door.jpg"
//           alt="door"
//           width={364}
//           height={273}
//           priority
//           className="object-cover center-absolute w-[364px] h-[273px] sm:-translate-x-[calc(50%+320px)] sm:-translate-y-[calc(20px)]
//           hidden sm:block"
//         />
//       </div>
//     </div>
//   );
// };
