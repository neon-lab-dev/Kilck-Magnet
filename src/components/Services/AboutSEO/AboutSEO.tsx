import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import React from "react";
import { ICONS, IMAGES } from "../../../../public/assets";

const AboutSEO = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-between items-center py-[150px] bg-white">
          <div className="font-Satoshi flex flex-col gap-8 ">
            <div>
              <h2 className="text-primary-20 text-2xl font-black leading-8">
                Choose Klick Magnet Media for Unbeatable

              </h2>
              <h1 className="text-neutral-10 text-[48px] font-black leading-[56px] mt-2">
               What does SEO do to your business?
              </h1>
            </div>
            <p className="text-neutral-20 text-2xl leading-8">
              To help your business reach its objectives, Klick Magnet Media offers top-notch SEO services in Indian. These services incorporate relevant search phrases, flexible content ideas, and keyword integration. Continuous lead generation is made easier with SEO. 
              <br />
             When your website ranks highly in Google Search, you will receive a constant flow of customers. The only options are to focus on establishing a positive online reputation and using organic marketing strategies. Our team specializes in various types of SEO, which helps you continually receive quality leads.

            </p>
            <button className="bg-gradient-primary shadow-primary-button2 py-6 px-8 rounded-[999px] text-white text-2xl font-bold leading-5 mt-8 flex items-center gap-[10px] w-fit">
              Get in touch
              <Image src={ICONS.rightArrowWhite} alt="" className="size-6" />
            </button>
          </div>
          <Image src={IMAGES.aboutSEO} alt="" className="w-[55%]" />
        </div>
      </Container>
    </div>
  );
};

export default AboutSEO;
