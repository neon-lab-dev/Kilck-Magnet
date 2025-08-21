/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import { motion, Variants } from "framer-motion";
import Button from "@/components/Reusable/Button/Button";

const Hero = () => {
  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const rowVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="relative pb-[175px] bg-neutral-35 font-Satoshi overflow-hidden">
      <div className="pt-20 lg:pt-28 2xl:pt-[200px]">
        <Container>
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8"
            variants={rowVariants}
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-[28px] md:text-[48px] 2xl:text-[72px] font-black leading-10 md:leading-[56px] lg:leading-[68px] 2xl:leading-[80px] text-white max-w-[900px]">
                Turn Clicks into Clients. Build a Brand That Performs.
              </h1>
              <p className="text-neutral-50 text-sm md:text-base 2xl:text-[20px] leading-5 md:leading-7 mt-4 max-w-[700px]">
                We help ambitious businesses grow smarter with stunning design,
                strategic marketing, and conversion-obsessed execution, all
                under one roof.
              </p>
              <Button label="Explore More" className="mt-8" />
            </motion.div>

            <motion.div variants={itemVariants} className="flex-shrink-0">
              <Image
                src={IMAGES.heroImage}
                alt=""
                className="w-full h-auto max-w-full md:max-w-[400px] 2xl:max-w-[500px]"
              />
            </motion.div>
          </motion.div>
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

export default Hero;
