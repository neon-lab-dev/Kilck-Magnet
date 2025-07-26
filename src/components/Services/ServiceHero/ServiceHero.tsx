import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../../public/assets";

const ServiceHero = () => {
  return (
    <div className=" relative pb-[230px] bg-neutral-35 font-Satoshi">
      <div className="pt-[200px]">
        <Container>
          <div className="bg-neutral-40 border border-neutral-45 py-[10px] px-5 rounded-[100px] text-white font-medium leading-5 w-fit">
            SEARCH ENGINE OPTIMIZATION
          </div>

          <div className="mt-8 z-10 relative">
            <h1 className="text-[72px] font-black leading-20 text-white max-w-[790px]">
              SEO Strategies that will help you beat Your Competition.
            </h1>
            <p className="text-neutral-50 text-[28px] leading-8 mt-4 max-w-[700px]">
              By developing unique and creative branding strategies, our
              reflective design team assists firms in standing out from the
              competition.
            </p>

            <button className="bg-gradient-primary shadow-primary-button py-6 px-8 rounded-[20px] text-white text-2xl font-bold leading-5 mt-8">
              Explore more
            </button>
          </div>
        </Container>
      </div>
      <Image
        src={IMAGES.heroGradient}
        alt=""
        className="bottom-0 absolute left-0 right-0 w-full"
      />
    </div>
  );
};

export default ServiceHero;
