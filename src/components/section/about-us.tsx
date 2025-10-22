import React from "react";
import Image from "next/image";
import founder_1 from "@/app/assets/img/people/founder_1.jpg";
import indoor_view from "@/app/assets/img/indoor_view.jpg";

const shortText =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste similique blanditiis suscipit delectus distinctio cumque voluptatem iure, alias debitis, fugiat, excepturi magni.";

const extraText =
  "Assumenda, consequatur totam distinctio maiores pariatur natus ab adipisci cumque fugit nulla facilis quia reiciendis, iste voluptas odio nobis officiis harum aspernatur cum! Necessitatibus, et maiores.";

const longText = shortText + " " + extraText;

const AboutUs = () => {
  return (
    <section className="section-container relative">
      <div
        className="md:-ml-[0.1em] -mb-[0.3em] sm:-mb-[0.25em] text-[120px] sm:text-[160px] md:text-[200px] lg:text-[240px] xl:text-[280px] 
      leading-[0.75] lg:tracking-widest font-bold font-bg text-[#F5F5F5]"
      >
        LASSO
      </div>
      <div className="w-full flex max-lg:flex-col z-10 relative">
        <div className="lg:flex-1 lg:mr-12 leading-relaxed mb-8">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-[1.25em] md:mb-[2em] leading-none">
            ABOUT US
          </h2>
          <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] xl:text-[32px] gradient-text max-md:hidden">
            {longText}
          </p>
          <p className="text-[18px] sm:text-[20px] gradient-text md:hidden">{shortText}</p>
        </div>
        <div className="lg:flex-1 relative max-lg:max-w-[500px] max-lg:mx-auto">
          <div className="w-[70%] aspect-[3/4] ml-auto">
            <Image className="object-cover size-full" src={founder_1} alt="founder_1" priority />
          </div>
          <div className="w-[50%] aspect-[3/4] -mt-[35%] lg:absolute lg:bottom-0">
            <Image
              className="object-cover size-full"
              src={indoor_view}
              alt="indoor_view"
              priority
            />
          </div>
        </div>
        <p className="mt-8 text-[18px] sm:text-[20px] gradient-text md:hidden">{extraText}</p>
      </div>
    </section>
  );
};

export default AboutUs;
