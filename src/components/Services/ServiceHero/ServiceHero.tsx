"use client";

import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../../public/assets";
import { motion, Variants } from "framer-motion";

const ServiceHero = () => {

  // A single, reusable variant for elements that will slide up and fade in.
  // It accepts a `custom` prop to control the animation delay.
  const slideUpVariants: Variants = {
    hidden: { y: 20, opacity: 0 }, // Start 20px below and invisible
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2, // Creates a staggered sequence
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    // Added overflow-hidden to the parent to contain the animation
    <div className=" relative pb-[230px] bg-neutral-35 font-Satoshi overflow-hidden">
      <div className="pt-[200px]">
        <Container>
          <motion.div
            className="bg-neutral-40 border border-neutral-45 py-[10px] px-5 rounded-[100px] text-white font-medium leading-5 w-fit"
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0} // First in the animation sequence
          >
            SEARCH ENGINE OPTIMIZATION
          </motion.div>

          <div className="mt-8 z-10 relative">
            <motion.h1
              className="text-[72px] font-black leading-20 text-white max-w-[790px]"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1} // Second in the animation sequence
            >
              SEO Strategies that will help you beat Your Competition.
            </motion.h1>
            <motion.p
              className="text-neutral-50 text-[28px] leading-8 mt-4 max-w-[700px]"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2} // Third in the animation sequence
            >
              By developing unique and creative branding strategies, our
              reflective design team assists firms in standing out from the
              competition.
            </motion.p>

            <motion.button
              className="bg-gradient-primary shadow-primary-button py-6 px-8 rounded-[20px] text-white text-2xl font-bold leading-5 mt-8"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3} // Fourth in the animation sequence
            >
              Explore more
            </motion.button>
          </div>
        </Container>
      </div>
      <Image
        src={IMAGES.heroGradient}
        alt=""
        className="bottom-0 absolute left-0 right-0 w-full"
      />
    </div>
  );
};

export default ServiceHero;