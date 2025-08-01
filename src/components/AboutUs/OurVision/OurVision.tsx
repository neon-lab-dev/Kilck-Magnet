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
    <div className="py-32 overflow-hidden">
      <div>
        <Container>
          <div className="flex gap-8">
            {/* left content */}
            <motion.div
              className="bg-gradient-primary w-[50%] rounded-3xl p-12 space-y-7"
              variants={leftVariants}
              initial="hidden"
              whileInView="visible" // Animate when the component is in view
              viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
            >
              <h2 className="bg-white py-3 px-10 rounded-full text-[28px] font-medium tracking-[-0.8px] w-fit shadow-vision-heading ">
                Our Vision
              </h2>
              <p className="text-[28px] leading-12 font-medium tracking-[-0.5px] text-white">
                Lorem ipsum dolor sit amet consectetur. Felis fames pharetra quisque dolor gravida nulla arcu odio. Sollicitudin libero fermentum pulvinar viverra ultricies elit odio. Sed vulputate ultricies eget adipiscing facilisis quis massa. Mattis tincidunt massa curabitur in tincidunt egestas sed convallis. Ut a convallis dui faucibus faucibus. Eget egestas lacinia enim et faucibus nisi. Gravida sed duis sit est dictumst sed quis ullamcorper..
              </p>
            </motion.div>

            {/* right image */}
            <motion.div
              className="bg-neutral-55 w-[50%] rounded-3xl border border-neutral-95 flex justify-center items-center"
              variants={rightVariants}
              initial="hidden"
              whileInView="visible" // Animate when the component is in view
              viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
            >
              <Image src={IMAGES.vision} alt="Vision" className="w-full h-full rounded-3xl" />
            </motion.div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OurVision;