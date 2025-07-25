import AboutUsHero from "@/components/AboutUs/AboutUsHero/AboutUsHero";
import OurVision from "@/components/AboutUs/OurVision/OurVision";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import Counter from "@/components/Shared/Counter/Counter";
import FAQ from "@/components/Shared/FAQ/FAQ";
import React from "react";

const page = () => {
  return (
    <div>
      <AboutUsHero/>
      <AboutUs />
      <Counter/>
      <OurVision/>
      <FAQ/>
    </div>
  );
};

export default page;
