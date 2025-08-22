"use client";

import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";

const HowWeWork = () => {
  const pathname = usePathname();
  const workProcess = [
    {
      icon: ICONS.planning,
      title: "Planning",
      description:
        "Understanding what you want out of your site and how you plan to implement it.",
    },
    {
      icon: ICONS.design,
      title: "Design",
      description:
        "We will create a beautiful, affordable website design for your creative marketing project.",
    },
    {
      icon: ICONS.development,
      title: "Development",
      description:
        "We develop content management systems for clients who need more than just the basics.",
    },
    {
      icon: ICONS.launch,
      title: "Launch",
      description:
        "After successful testing the product is delivered/deployed to the customer for their use.",
    },
    {
      icon: ICONS.maintenance,
      title: "Maintenance",
      description:
        "It is an important step which makes sure that your site works with efficiency all the time.",
    },
  ];

  const leftContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const leftItemVariants: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const rightItemVariants: Variants = {
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
    <div
      className={`container-padding relative font-Satoshi ${
        pathname === "/" ? "mt-[2150px] md:mt-[1100px]" : "mt-0"
      }`}
    >
      <Image
        src={IMAGES.hoeItWorksLines}
        alt=""
        className="absolute -top-32 left-0 -z-10"
      />
      <Container>
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Left Side (Sticky Content) */}
          <div className="lg:sticky top-12 lg:top-[120px] w-full lg:w-[40%] h-fit overflow-hidden">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={leftContainerVariants}
            >
              <motion.h1
                className="text-neutral-10 heading-xl mt-2"
                variants={leftItemVariants}
              >
                How We <span className="text-primary-15">Work.</span>
              </motion.h1>
              <motion.p
                className="text-neutral-20 description max-w-[670px] mt-4"
                variants={leftItemVariants}
              >
                Give your brand a boost with our digital marketing agency We get
                you a customer not just a traffic.
              </motion.p>
            </motion.div>
          </div>

          {/* Right Side (Scrolling Content) */}
          <div className="w-full lg:w-[60%]">
            <div className="flex flex-col gap-10 lg:gap-24 relative">
              <div className="border-l-2 border-dashed border-neutral-55 h-[730px] md:h-[560px] lg:h-[800px] absolute top-16 left-10 z-0"></div>

              {workProcess?.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-6 z-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={rightItemVariants}
                >
                  <Image src={item?.icon} alt="" className="rounded-full" />
                  <div>
                    <h1 className="text-neutral-10 text-xl lg:text-[28px] font-bold leading-10">
                      {item?.title}
                    </h1>
                    <p className="text-neutral-20 description mt-2 max-w-[600px]">
                      {item?.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="bg-[#fff2f2] rounded-[999px] p-1 lg:p-3 flex items-center justify-center h-fit w-fit lg:w-full mt-10 2xl:mt-24"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={rightItemVariants}
            >
              <div className="bg-[#ffe6e6] rounded-[999px] p-1 lg:p-3 flex items-center justify-center h-fit w-full">
                <button className="bg-gradient-primary shadow-primary-button2 py-3 lg:py-4 px-4 2xl:px-8 rounded-[999px] text-white font-bold leading-5 flex items-center justify-center gap-[10px] w-full mx-auto text-sm lg:text-xl 2xl:text-2xl">
                  Let’s get started
                  <Image
                    src={ICONS.rightArrowWhite}
                    alt=""
                    className="size-6"
                  />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowWeWork;
