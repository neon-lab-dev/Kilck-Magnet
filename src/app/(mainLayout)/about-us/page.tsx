import OurVision from "@/components/AboutUs/OurVision/OurVision";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import PageHero from "@/components/Reusable/PageHero/PageHero";
import Counter from "@/components/Shared/Counter/Counter";
import FAQ from "@/components/Shared/FAQ/FAQ";
import React from "react";

const page = () => {
  return (
    <div>
      <PageHero title="About Us" description="So, who are we exactly?" />
      <AboutUs />
      <Counter/>
      <OurVision/>
      <FAQ/>
    </div>
  );
};

export default page;
