/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { ICONS } from "../../../../public/assets";
import Counter from "./Counter";
import Button from "@/components/Reusable/Button/Button";

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

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <div className="bg-gradient-primary container-padding min-h-[900px] overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-10 2xl:gap-20">
          {/* Left side content */}
          <motion.div
            className="w-full lg:w-[40%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-primary-25 text-lg 2xl:text-2xl font-black leading-8"
              variants={itemVariants}
            >
              METRICS
            </motion.h2>
            <motion.h1
              className="text-white heading-xl mt-2"
              variants={itemVariants}
            >
              Our Numbers Speak for Themselves
            </motion.h1>
            <motion.p
              className="text-primary-30 description mt-2"
              variants={itemVariants}
            >
              We don’t just promise results, we deliver them. Here’s a quick
              look at the impact we’ve made.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button label="Schedule a Call" variant="secondary" rounded="full" className="mt-4" />
            </motion.div>
          </motion.div>

          {/* Right side metrics */}
          <motion.div
            className="grid grid-cols-2 gap-5 2xl:gap-9 w-full lg:w-[60%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {metrics?.map((metric, index) => (
              <motion.div
                key={index}
                className="border border-primary-20 px-3 2xl:px-6 py-3 2xl:py-5 flex flex-col lg:flex-row items-center gap-6 rounded-[18px]"
                variants={itemVariants}
              >
                <Image src={metric?.icon} alt="" className="size-10 2xl:size-[64px]" />
                <div>
                  <h1 className="text-white text-[48px] font-black leading-[56px] mt-2 flex items-center">
                    <Counter
                      value={String(metric.value)}
                      className="text-white heading-xl"
                    />
                    {metric.suffix}
                  </h1>
                  <p className="text-primary-30 description">
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