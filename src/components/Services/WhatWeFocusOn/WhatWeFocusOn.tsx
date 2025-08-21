import Container from "@/components/Reusable/Container/Container";
import React from "react";
import { ICONS } from "../../../../public/assets";
import Image from "next/image";

const WhatWeFocusOn = () => {
  return (
    <div className="container-padding font-Satoshi">
      <Container>
        <h2 className="text-neutral-10 text-center heading-xl mb-9 ">
          What we <span className="text-primary-10">focus on?</span>
        </h2>
        <div className="w-max-[1200px] flex flex-col lg:flex-row border border-neutral-100 rounded-[20px] mt-8 lg:mt-16">
          <div className="p-7 space-y-7 text-neutral-10 flex-[40%] bg-gradient-secondary rounded-t-[20px] rounded-bl-none lg:rounded-tl-[20px] lg:rounded-bl-[20px] lg:rounded-t-none">
            <Image
              src={ICONS.target}
              alt=""
              className="size-[64px] bg-white p-[9px] flex justify-center items-center rounded-full"
            />
            <h2 className="mb-4 text-2xl font-bold leading-8 tracking-[-0.7px]">
              Keyword Targeting
            </h2>
            <p className="leading-6 tracking-[-0.5px]">
              We don’t guess. We dig deep and find what your audience is
              actually searching for—so your site shows up when it matters.
            </p>
          </div>
          <div className="p-7 space-y-7 text-neutral-70 flex-[30%] border-r border-r-neutral-100">
            <Image
              src={ICONS.setting}
              alt=""
              className="size-[64px] bg-what-we-focus-1 p-[9px] flex justify-center items-center rounded-full"
            />
            <h2 className="mb-4 text-2xl  font-bold leading-8 tracking-[-0.7px]">
              Content Optimization
            </h2>
            <p className="leading-6 tracking-[-0.5px]">
             Blogs, pages, and meta stuff all written to impress both Google and humans. Traffic goes up, bounce rate goes down.s
            </p>
          </div>
          <div className="p-7 space-y-7 text-neutral-70  flex-[30%]">
            <Image
              src={ICONS.tool}
              alt=""
              className="size-[64px] bg-what-we-focus-2 p-[9px] flex justify-center items-center rounded-full"
            />
            <h2 className="mb-4 text-2xl font-bold leading-8 tracking-[-0.7px]">
              Technical Fixes
            </h2>{" "}
            <p className="leading-6 tracking-[-0.5px]">
             Site speed, mobile-friendliness, crawl errors—all fixed without making you feel like you need a tech degree.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatWeFocusOn;
