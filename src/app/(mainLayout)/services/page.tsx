import GoogleReviews from "@/components/HomePage/GoogleReviews/GoogleReviews";
import OurServices from "@/components/HomePage/OurServices/OurServices";
import AboutSEO from "@/components/Services/AboutSEO/AboutSEO";
import Articles from "@/components/Services/Articles/Articles";
import WhatWeFocusOn from "@/components/Services/WhatWeFocusOn/WhatWeFocusOn";
import WhySeoMatters from "@/components/Services/AboutSEO/WhySeoMatters/WhySeoMatters";
import OurWorks from "@/components/Services/OurWorks/OurWorks";
import ServiceHero from "@/components/Services/ServiceHero/ServiceHero";
import ContactUs from "@/components/Shared/ContactUs/ContactUs";
import Counter from "@/components/Shared/Counter/Counter";
import FAQ from "@/components/Shared/FAQ/FAQ";
import HowWeWork from "@/components/Shared/HowWeWork/HowWeWork";
import React from "react";
import HowAreWeDifferent from './../../../components/Services/HowAreWeDifferent/HowAreWeDifferent';

const page = () => {
  return (
    <div>
      <ServiceHero/>
      <AboutSEO />
      <Counter />
      <WhySeoMatters/>
      <OurServices title="Our Services"  sectionDescription="We Are Specialized in the Following Services"/>
      <HowWeWork/>
      <OurWorks/>
      <WhatWeFocusOn/>
      <HowAreWeDifferent/>
      <GoogleReviews />
      <ContactUs />
      <Articles/>
      <FAQ />
    </div>
  );
};

export default page;
