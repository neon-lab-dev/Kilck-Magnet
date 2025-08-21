/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { ICONS, IMAGES } from "../../../../public/assets";
import Image from "next/image";
import Container from "@/components/Reusable/Container/Container";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const OurServices = ({
  title = "How it Works",
  sectionDescription = "From strategy to execution, we offer end-to-end digital services that help your brand grow faster and smarter.",
}) => {
  const services = [
    {
      icon: IMAGES.websiteDesign,
      title: "Website Designing",
      description:
        "We offer creative web design and development services with years of experience. As well as other parts of the world. We have a team of experts...",
    },
    {
      icon: IMAGES.graphicsDesign,
      title: "Graphic Designing",
      description:
        "Empower influencers with high-quality, engaging content that resonates with their followers and amplifies your brand message.",
    },
    {
      icon: IMAGES.socialMediaMarketing,
      title: "Social Media Marketing",
      description:
        "From strategy to execution, we handle everything—ensuring your influencer campaigns run seamlessly and successfully.",
    },
    {
      icon: IMAGES.seo,
      title: "Search Engine Optimization",
      description:
        "Track, analyze, and optimize your campaigns with real-time insights to maximize ROI and engagement.",
    },
    {
      icon: IMAGES.ecommerceMarketing,
      title: "E-Commerce Marketing",
      description:
        "Expand your brand’s influence with localized content, reaching diverse audiences across cities and regions.",
    },
    {
      icon: IMAGES.contentMarketing,
      title: "Content Marketing",
      description:
        "Run 100+ content variations at once to identify the top-performing creatives for better ROI.",
    },
    {
      icon: IMAGES.emailMarketing,
      title: "Email & Mobile Marketing",
      description:
        "Deliver hyper-focused content to the right audience, ensuring higher visibility and meaningful interactions.",
    },
    {
      icon: IMAGES.threeDVisualization,
      title: "3D Walkthrough & Visualization",
      description:
        "Tap into consumer trust—80% of buyers make a purchase based on an influencer’s recommendation.",
    },
  ];

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
    hidden: { y: 80, opacity: 0 },
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
    <div className="w-full font-Satoshi relative pb-20 overflow-hidden">
      <div className="relative w-full h-[1300px]">
        <div className="h-[648px] absolute w-full flex items-center justify-center">
          <Image src={IMAGES.ourService} alt="" className="w-full h-[648px]" />
          <div className="flex flex-col items-center justify-center z-50 absolute top-40 right-0 left-0">
            {/* Animated Header */}
            <motion.div
              className="text-center mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={containerVariants}
            >
              <motion.h1
                className="font-black text-[64px] leading-[72px] text-center text-white"
                variants={itemVariants}
              >
                {title}
              </motion.h1>
              <motion.p
                className="text-neutral-50 text-[28px] leading-8 max-w-[698px] mx-auto mt-4 font-normal"
                variants={itemVariants}
              >
                {sectionDescription}
              </motion.p>
            </motion.div>
          </div>
        </div>

        <div className="absolute w-full mx-auto top-[450px]">
          <Container>
            {/* Animated Service Cards Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
            >
              {services.map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <ServiceCard {...feature} />
                </motion.div>
              ))}
            </motion.div>

            {/* Animated Button */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="flex justify-center mt-10"
            >
              <button className="bg-gradient-primary shadow-primary-button2 py-6 px-8 rounded-[999px] text-white text-2xl font-bold leading-5 flex items-center gap-[10px] w-fit">
                Get to know more
                <Image src={ICONS.rightArrowWhite} alt="" className="size-6" />
              </button>
            </motion.div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
