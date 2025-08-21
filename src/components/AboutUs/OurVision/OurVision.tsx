/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Container from "@/components/Reusable/Container/Container";
import React from "react";
import { IMAGES } from "../../../../public/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const OurVision = () => {
  const leftVariants :any= {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const rightVariants:any = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <div className="pt-10 2xl:pt-32 overflow-hidden">
      <div>
        <Container>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
            {/* left content */}
            <motion.div
              className="bg-gradient-primary w-full lg:w-[50%] rounded-3xl p-5 lg:p-7 2xl:p-12 space-y-4 lg:space-y-7"
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="bg-white py-2 2xl:py-3 px-5 2xl:px-10 rounded-full text-base 2xl:text-[28px] font-medium tracking-[-0.8px] w-fit shadow-vision-heading ">
                Our Vision
              </h2>
              <p className="description leading-12 font-medium tracking-[-0.5px] text-white">
                Lorem ipsum dolor sit amet consectetur. Felis fames pharetra quisque dolor gravida nulla arcu odio. Sollicitudin libero fermentum pulvinar viverra ultricies elit odio. Sed vulputate ultricies eget adipiscing facilisis quis massa. Mattis tincidunt massa curabitur in tincidunt egestas sed convallis. Ut a convallis dui faucibus faucibus. Eget egestas lacinia enim et faucibus nisi. Gravida sed duis sit est dictumst sed quis ullamcorper..
              </p>
            </motion.div>

            {/* right image */}
            <motion.div
              className="bg-neutral-55 w-full lg:w-[50%] rounded-3xl border border-neutral-95 flex justify-center items-center"
              variants={rightVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image src={IMAGES.vision} alt="Vision" className="w-full h-full max-w-[400px] rounded-3xl" />
            </motion.div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OurVision;