"use client";

import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../../public/assets";
import { motion, Variants } from "framer-motion";
import Button from "@/components/Reusable/Button/Button";

const ServiceHero = () => {
  const slideUpVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className=" relative pb-32 2xl:pb-[230px] bg-neutral-35 font-Satoshi overflow-hidden">
      <div className="pt-20 lg:pt-28 2xl:pt-[200px]">
        <Container>
          <motion.div
             className="bg-neutral-40 border border-neutral-45 py-2 md:py-[10px] px-3 md:px-5 rounded-[100px] text-white text-xs xl:text-base font-normal xl:font-medium leading-5 w-fit"
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            SEARCH ENGINE OPTIMIZATION
          </motion.div>

          <div className="mt-8 z-10 relative">
            <motion.h1
              className="heading-2xl text-white max-w-[790px]"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              SEO Strategies that will help you beat Your Competition.
            </motion.h1>
            <motion.p
              className="text-neutral-50 text-sm md:text-base 2xl:text-[20px] leading-5 md:leading-7 mt-4 max-w-[700px]"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              By developing unique and creative branding strategies, our
              reflective design team assists firms in standing out from the
              competition.
            </motion.p>
            <Button label="Explore More" className="mt-8" isIconVisible={false} />
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