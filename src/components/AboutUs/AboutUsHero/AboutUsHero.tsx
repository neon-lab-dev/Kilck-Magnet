"use client";
import Container from '@/components/Reusable/Container/Container'
import Image from 'next/image'
import React from 'react'
import { IMAGES } from '../../../../public/assets'
import {motion } from 'framer-motion'

const AboutUsHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
     <div className="relative h-[300px] 2xl:h-[470px] overflow-hidden bg-neutral-35 font-Satoshi">
      <motion.div
        className="pt-20 2xl:pt-[112px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Container>
          <motion.h1
            className="heading-xl text-white text-center"
            variants={itemVariants}
          >
           About Us
          </motion.h1>
          <motion.p
            className="text-neutral-50 description mt-2 2xl:mt-5 text-center"
            variants={itemVariants}
          >
              So, who are we exactly?
          </motion.p>
        </Container>
      </motion.div>
     
      <Image
        src={IMAGES.heroGradient}
        alt=""
        className="bottom-0 absolute left-0 right-0 w-full"
      />
    </div>
  )
}

export default AboutUsHero