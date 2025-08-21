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
    <div className="relative pb-32 2xl:pb-[175px] bg-neutral-35 font-Satoshi overflow-hidden">
      <div className="pt-20 lg:pt-28 2xl:pt-[200px]">
        <Container>
          <motion.div
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between relative z-10 gap-8"
            variants={rowVariants}
          >
           
            <motion.div variants={itemVariants}>
               <motion.div variants={itemVariants}> <div className="bg-neutral-40 border border-neutral-45 py-2 md:py-[10px] px-3 md:px-5 rounded-[100px] text-white text-xs xl:text-base font-normal xl:font-medium leading-5 w-fit"> Built for Ambitious Brands. Designed for Results. </div> </motion.div>
              <h1 className="heading-2xl text-white max-w-[700px] 2xl:max-w-[900px] mt-4">
                Turn Clicks into Clients. Build a Brand That Performs.
              </h1>
              <p className="text-neutral-50 text-sm md:text-base 2xl:text-[20px] leading-5 md:leading-7 mt-4 max-w-[700px]">
                We help ambitious businesses grow smarter with stunning design,
                strategic marketing, and conversion-obsessed execution, all
                under one roof.
              </p>
              <Button label="Explore More" className="mt-8" isIconVisible={false} />
            </motion.div>

            <motion.div variants={itemVariants} className="">
              <Image
                src={IMAGES.heroImage}
                alt=""
                className="w-full h-auto max-w-full md:max-w-[400px] xl:max-w-[500px]"
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
