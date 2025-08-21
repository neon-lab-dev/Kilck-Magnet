/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";

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

  const imageVariants: any = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative pb-[205px] bg-neutral-35 font-Satoshi">
      <div className="pt-[200px]">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="bg-neutral-40 border border-neutral-45 py-[10px] px-5 rounded-[100px] text-white font-medium leading-5 w-fit"
            >
              Built for Ambitious Brands. Designed for Results.
            </motion.div>

            <div className="flex items-center justify-between relative z-10">
              <div>
                <motion.h1
                  variants={itemVariants}
                  className="text-[72px] font-black leading-20 text-white max-w-[900px]"
                >
                  Turn Clicks into Clients. Build a Brand That Performs.
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-neutral-50 text-[28px] leading-8 mt-4 max-w-[700px]"
                >
                  We help ambitious businesses grow smarter with stunning design,
                  strategic marketing, and conversion-obsessed execution, all
                  under one roof.
                </motion.p>

                <motion.div variants={itemVariants}>
                  <button className="bg-gradient-primary shadow-primary-button py-6 px-8 rounded-[20px] text-white text-2xl font-bold leading-5 mt-8">
                    Explore more
                  </button>
                </motion.div>
              </div>

              <motion.div variants={imageVariants}>
                <Image src={IMAGES.heroImage} alt="" />
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </div>

      <Image
        src={IMAGES.heroGradient}
        alt=""
        className="bottom-0 absolute top-20 w-full"
      />
    </div>
  );
};

export default Hero;
