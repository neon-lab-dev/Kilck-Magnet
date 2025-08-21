/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import { motion, Variants } from "framer-motion";

const rowVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Hero = () => {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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

  return (
    <div className=" relative pb-[175px] bg-neutral-35 font-Satoshi overflow-hidden">
      <div className="pt-[200px]">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <div className="bg-neutral-40 border border-neutral-45 py-[10px] px-5 rounded-[100px] text-white font-medium leading-5 w-fit">
                Built for Ambitious Brands. Designed for Results.
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-between relative z-10"
              variants={rowVariants}
            >
              <motion.div variants={itemVariants}>
                <h1 className="text-[72px] font-black leading-20 text-white max-w-[900px]">
                  Turn Clicks into Clients. Build a Brand That Performs.
                </h1>
                <p className="text-neutral-50 text-[28px] leading-8 mt-4 max-w-[700px]">
                  We help ambitious businesses grow smarter with stunning
                  design, strategic marketing, and conversion-obsessed
                  execution, all under one roof.
                </p>
                <button className="bg-gradient-primary shadow-primary-button py-6 px-8 rounded-[20px] text-white text-2xl font-bold leading-5 mt-8">
                  Explore more
                </button>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Image src={IMAGES.heroImage} alt="" className="" />
              </motion.div>
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
