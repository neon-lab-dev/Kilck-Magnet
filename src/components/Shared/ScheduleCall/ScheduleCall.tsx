import Image from "next/image";
import React from "react";
import { ICONS, IMAGES } from "../../../../public/assets";
import Container from "@/components/Reusable/Container/Container";

const ScheduleCall = () => {
  return (
    <Container>
      <div
      className="relative space-y-8 rounded-[40px] p-16 font-Satoshi overflow-hidden max-w-[1218px] mx-auto shadow-schedule-call"
      style={{
        background: "linear-gradient(180deg, #FF6467 0%, #FB2C36 100%)"
      }}
    >
      <Image src={IMAGES.ScheduleGradient} alt="" className="absolute h-full w-full top-0 rounded-[40px] right-0 "/>
      <Image src={IMAGES.magnetBg} alt="" className="absolute h-full w-full top-0 bottom-0 -right-60 "/>
      <Image src={IMAGES.scheduleMagnet} alt="" className="absolute top-10 bottom-0 right-40 "/>


      <div className="space-y-4">
        <h2 className="text-5xl w-[45%] font-black text-white leading-14">
          Ready to Elevate Your Brand?
        </h2>
        <p className="text-2xl  leading-7 text-primary-30 font-medium ">
        Let’s team up and turn your vision into results.
        </p>
      </div>
      <button className="bg-white shadow-secondary-button py-5 px-8 rounded-[12px] text-primary-10 text-xl font-bold leading-6 mt-8 flex items-center gap-[10px] w-fit">
        Schedule a Call
        <Image src={ICONS.rightArrow} alt="" className="size-6" />
      </button>
      {/* Your content */}
    </div>
    </Container>
    
  );
};

export default ScheduleCall;
