// Your component file path
"use client";

import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { ICONS } from "../../../../public/assets";
import Counter from "./Counter";

const OurMetrics = () => {
  const metrics = [
    {
      icon: ICONS.experience,
      value: 6,
      suffix: "+",
      description: "Years in business",
    },
    {
      icon: ICONS.globalPartners,
      value: 50,
      suffix: "+",
      description: "Global Partners",
    },
    {
      icon: ICONS.projects,
      value: 30,
      suffix: "+",
      description: "Ongoing Projects",
    },
    {
      icon: ICONS.clients,
      value: 98,
      suffix: "%",
      description: "Client Satisfaction Rate",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // The 'y' value has been increased for a more prominent slide
  const itemVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6, // Slightly increased duration for a smoother feel
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-gradient-primary py-[150px] min-h-[900px] overflow-hidden">
      <Container>
        <div className="flex items-center gap-20">
          {/* Left side content */}
          <motion.div
            className="w-[40%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-primary-25 text-2xl font-black leading-8"
              variants={itemVariants}
            >
              METRICS
            </motion.h2>
            <motion.h1
              className="text-white text-[48px] font-black leading-[56px] mt-2"
              variants={itemVariants}
            >
              Our Numbers Speak for Themselves
            </motion.h1>
            <motion.p
              className="text-primary-30 text-2xl leading-7 mt-2"
              variants={itemVariants}
            >
              We don’t just promise results, we deliver them. Here’s a quick
              look at the impact we’ve made.
            </motion.p>
            <motion.div variants={itemVariants}>
              <button className="bg-white shadow-secondary-button py-6 px-8 rounded-[999px] text-primary-10 text-xl font-bold leading-6 mt-8 flex items-center gap-[10px] w-fit">
                Schedule a Call
                <Image src={ICONS.rightArrow} alt="" className="size-6" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right side metrics */}
          <motion.div
            className="grid grid-cols-2 gap-9 w-[60%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {metrics?.map((metric, index) => (
              <motion.div
                key={index}
                className="border border-primary-20 px-6 py-5 flex items-center gap-6 rounded-[18px]"
                variants={itemVariants}
              >
                <Image src={metric?.icon} alt="" className="size-[64px]" />
                <div>
                  <h1 className="text-white text-[48px] font-black leading-[56px] mt-2 flex items-center">
                    <Counter
                      value={metric.value}
                      className="text-white text-[48px] font-black leading-[56px]"
                    />
                    {metric.suffix}
                  </h1>
                  <p className="text-primary-30 text-2xl leading-7">
                    {metric?.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default OurMetrics;