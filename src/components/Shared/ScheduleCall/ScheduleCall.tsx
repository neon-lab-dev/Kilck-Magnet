import Image from "next/image";
import React from "react";
import { ICONS, IMAGES } from "../../../../public/assets";
import Container from "@/components/Reusable/Container/Container";
import Button from "@/components/Reusable/Button/Button";

const ScheduleCall = () => {
  return (
    <Container>
      <div
      className="relative space-y-8 rounded-xl lg:rounded-[40px] p-5 lg:p-16 font-Satoshi overflow-hidden max-w-[1218px] mx-auto shadow-schedule-call z-500"
      style={{
        background: "linear-gradient(180deg, #FF6467 0%, #FB2C36 100%)"
      }}
    >
      <Image src={IMAGES.ScheduleGradient} alt="" className="absolute h-full w-full top-0 rounded-[40px] right-0 "/>
      <Image src={IMAGES.magnetBg} alt="" className="absolute h-full w-full top-0 bottom-0 -right-60 "/>
      <Image src={IMAGES.scheduleMagnet} alt="" className="hidden lg:block absolute top-10 bottom-0 right-10 2xl:right-40 "/>


      <div className="space-y-2 lg:space-y-4">
        <h2 className="heading-xl w-full lg:w-[45%] font-black text-white leading-14">
          Ready to Elevate Your Brand?
        </h2>
        <p className="text-base md:text-2xl leading-7 text-primary-30 font-medium ">
        Let’s team up and turn your vision into results.
        </p>
      </div>
      <Button label="Schedule a Call" variant="secondary" rounded="lg" />
      {/* Your content */}
    </div>
    </Container>
    
  );
};

export default ScheduleCall;
