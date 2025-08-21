"use client";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";

const AboutUs = () => {

  return (
    <Container>
      <div className="flex justify-between items-center gap-10 py-[150px] bg-white overflow-x-hidden">
        <div
          className="font-Satoshi flex flex-col gap-8 w-[60%]"
        >
          <div>
            <h2 className="text-primary-20 text-2xl font-black leading-8">
              ABOUT US
            </h2>
            <h1 className="text-neutral-10 text-[48px] font-black leading-[56px] mt-2">
              Built by Dreamers. Backed by Data.{" "}
              <span className="text-primary-15">Driven by Results.</span>
            </h1>
          </div>
          <p className="text-neutral-20 text-2xl leading-8">
            We’re a tight-knit team of creators, strategists, and
            problem-solvers obsessed with helping brands grow. From bold ideas
            to flawless execution, we blend design, tech, and marketing to craft
            digital experiences that don’t just look good, they work.
            <br />
            We don’t do templates. We don’t do average. We build what your
            competitors wish they had.
          </p>
          <button className="bg-gradient-primary shadow-primary-button2 py-6 px-8 rounded-[999px] text-white text-2xl font-bold leading-5 mt-8 flex items-center gap-[10px] w-fit">
            Get in touch
            <Image src={ICONS.rightArrowWhite} alt="" className="size-6" />
          </button>
        </div>

        {/* RIGHT SIDE: Image*/}
        <div
        className="w-[40%]"
        >
          <Image src={IMAGES.aboutUs} alt="" className="" />
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;