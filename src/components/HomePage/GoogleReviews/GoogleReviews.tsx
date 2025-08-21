/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { ICONS } from "../../../../public/assets";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const GoogleReviews = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Egestas lobortis condimentum sed venenatis massa aliquet. Augue imperdiet fermentum vitae aliquet nibh in cum tincidunt sodales. Mi natoque mauris.",
    },
    {
      name: "Priya Singh",
      rating: 5,
      review:
        "Augue imperdiet fermentum vitae aliquet nibh in cum tincidunt sodales. Mi natoque mauris. Lorem ipsum dolor sit amet consectetur. Egestas lobortis condimentum sed venenatis massa aliquet.",
    },
    {
      name: "Amit Kumar",
      rating: 5,
      review:
        "Mi natoque mauris. Egestas lobortis condimentum sed venenatis massa aliquet. Augue imperdiet fermentum vitae aliquet nibh in cum tincidunt sodales. Lorem ipsum dolor sit amet consectetur.",
    },
    {
      name: "Rahul Sharma",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Egestas lobortis condimentum sed venenatis massa aliquet. Augue imperdiet fermentum vitae aliquet nibh in cum tincidunt sodales. Mi natoque mauris.",
    },
    {
      name: "Priya Singh",
      rating: 5,
      review:
        "Augue imperdiet fermentum vitae aliquet nibh in cum tincidunt sodales. Mi natoque mauris. Lorem ipsum dolor sit amet consectetur. Egestas lobortis condimentum sed venenatis massa aliquet.",
    },
    {
      name: "Amit Kumar",
      rating: 5,
      review:
        "Mi natoque mauris. Egestas lobortis condimentum sed venenatis massa aliquet. Augue imperdiet fermentum vitae aliquet nibh in cum tincidunt sodales. Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  const sectionSlideUpVariant:any = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="bg-neutral-65 py-10 2xl:py-[96px] font-Satoshi"
      initial="hidden"
      whileInView="visible"
      variants={sectionSlideUpVariant}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h1 className="text-white text-center heading-xl font-black leading-[56px]">
        Our Google Reviews
      </h1>

      <Marquee gradient={false} speed={50} className="mt-12">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-neutral-10 p-6 mr-6 w-[320px] rounded-[10px]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[6px]">
                <div className="size-10 rounded-full bg-primary-35 text-primary-10 flex items-center justify-center text-xl font-bold">
                  {review.name.charAt(0)}
                </div>
                <h1 className="text-white font-bold">{review?.name}</h1>
              </div>
              <Image src={ICONS.google} alt="Google" className="size-6" />
            </div>
            <div className="flex items-center gap-2 mt-[10px]">
              <Image src={ICONS.starts} alt="Star rating" />
              <p className="text-white text-sm">2 months ago</p>
            </div>
            <p className="text-white text-sm mt-[10px]">{review?.review}</p>
          </div>
        ))}
      </Marquee>
    </motion.div>
  );
};

export default GoogleReviews;