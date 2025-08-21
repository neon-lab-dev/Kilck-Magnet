"use client";
import Image from "next/image";
import { useState } from "react";
import { ICONS } from "../../../../public/assets";
import Container from "@/components/Reusable/Container/Container";

const FAQ = () => {
  const accordingData = [
    {
      title: "What is the purpose of wireframing in design?",
      description:
        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
    },
    {
      title: "Why is user-centered design important?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      title: "What role does contrast play in graphic design?",
      description:
        "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",
    },
  ];

  const [isAccordingOpen, setIsAccordingOpen] = useState<number | null>(0);

  const handleClick = (index: number) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <Container>
      <div className="font-Satoshi flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between w-full container-padding">
        <h1 className="text-2xl md:text-[36px] font-bold leading-8 md:leading-10 text-neutral-85 max-w-[300px]">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col gap-5">
          {accordingData?.map((according, index) => (
            <article
              key={index}
              className="text-neutral-10 border-b border-neutral-55 pb-5"
            >
              <div
                className="flex cursor-pointer items-center justify-between max-w-full 2xl:max-w-[531px] w-full"
                onClick={() => handleClick(index)}
              >
                <h2 className="font-medium leading-5">{according.title}</h2>
                <Image
                  src={ICONS.downArrow}
                  alt=""
                  className={`transition-transform duration-300 ${
                    isAccordingOpen === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`grid transition-all duration-300 ease-in-out max-w-[531px] ${
                  isAccordingOpen === index
                    ? "grid-rows-[1fr] opacity-100 mt-4 mb-4"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden">{according.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FAQ;
