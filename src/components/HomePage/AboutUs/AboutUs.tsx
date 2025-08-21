"use client";
import { motion } from "framer-motion";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";

const AboutUs = () => {
  // Variant for the left-side content (sliding in from the left)
  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.95], // A nice easing curve for a smooth, impactful effect
      },
    },
  };

  // Variant for the right-side image (sliding in from the right)
  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2, // A slight delay to make the entrance more dynamic
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  };

  return (
    <Container>
      {/* The main flex container. We add overflow-x-hidden to the parent
          to prevent horizontal scrollbars during the animation. */}
      <div className="flex justify-between items-center py-[150px] bg-white overflow-x-hidden">
        {/*
          LEFT SIDE: Text content animation
          - motion.div: The element to be animated.
          - variants: Links to our pre-defined animation states.
          - initial="hidden": Sets the starting state of the animation.
          - whileInView="visible": Triggers the "visible" state when the element enters the viewport.
          - viewport={{ once: true, amount: 0.5 }}: Ensures the animation runs only once when 50% of the element is visible.
        */}
        <motion.div
          className="font-Satoshi flex flex-col gap-8"
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div>
            <h2 className="text-primary-20 text-2xl font-black leading-8">
              ABOUT US
            </h2>
            <h1 className="text-neutral-10 text-[48px] font-black leading-[56px] mt-2">
              Built by Dreamers. Backed by Data.{" "}
              <span className="text-primary-15">Driven by Results.</span>
            </h1>
          </div>
          <p className="text-neutral-20 text-2xl leading-8">
            We’re a tight-knit team of creators, strategists, and
            problem-solvers obsessed with helping brands grow. From bold ideas
            to flawless execution, we blend design, tech, and marketing to craft
            digital experiences that don’t just look good, they work.
            <br />
            We don’t do templates. We don’t do average. We build what your
            competitors wish they had.
          </p>
          <button className="bg-gradient-primary shadow-primary-button2 py-6 px-8 rounded-[999px] text-white text-2xl font-bold leading-5 mt-8 flex items-center gap-[10px] w-fit">
            Get in touch
            <Image src={ICONS.rightArrowWhite} alt="" className="size-6" />
          </button>
        </motion.div>

        {/* RIGHT SIDE: Image animation */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image src={IMAGES.aboutUs} alt="" className="" />
        </motion.div>
      </div>
    </Container>
  );
};

export default AboutUs;