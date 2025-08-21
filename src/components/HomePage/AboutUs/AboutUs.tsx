"use client";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import Button from "@/components/Reusable/Button/Button";

const AboutUs = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 container-padding bg-white overflow-x-hidden">
        <div className="font-Satoshi flex flex-col gap-5 2xl:gap-8 w-full lg:w-[60%]">
          <div>
            <h2 className="text-primary-20 text-lg 2xl:text-2xl font-black leading-8">
              ABOUT US
            </h2>
            <h1 className="text-neutral-10 heading-xl mt-2">
              Built by Dreamers. Backed by Data.{" "}
              <span className="text-primary-15">Driven by Results.</span>
            </h1>
          </div>
          <p className="text-neutral-20 description">
            We’re a tight-knit team of creators, strategists, and
            problem-solvers obsessed with helping brands grow. From bold ideas
            to flawless execution, we blend design, tech, and marketing to craft
            digital experiences that don’t just look good, they work.
            <br />
            We don’t do templates. We don’t do average. We build what your
            competitors wish they had.
          </p>
          <Button label="Get in Touch" variant="primary" rounded="full" />
        </div>

        {/* RIGHT SIDE: Image*/}
        <div className="w-full lg:w-[40%]">
          <Image src={IMAGES.aboutUs} alt="" className="" />
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
