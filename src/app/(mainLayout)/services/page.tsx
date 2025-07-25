import GoogleReviews from "@/components/HomePage/GoogleReviews/GoogleReviews";
import OurServices from "@/components/HomePage/OurServices/OurServices";
import AboutSEO from "@/components/Services/AboutSEO/AboutSEO";
import Articles from "@/components/Services/AboutSEO/Articles/Articles";
import ContactUs from "@/components/Shared/ContactUs/ContactUs";
import Counter from "@/components/Shared/Counter/Counter";
import FAQ from "@/components/Shared/FAQ/FAQ";
import HowWeWork from "@/components/Shared/HowWeWork/HowWeWork";
import React from "react";

const page = () => {
  return (
    <div>
      <AboutSEO />
      <Counter />
      <OurServices title="Our Services"  sectionDescription="We Are Specialized in the Following Services"/>
      <HowWeWork/>
      <GoogleReviews />
      <ContactUs />
      <Articles/>
      <FAQ />
    </div>
  );
};

export default page;
