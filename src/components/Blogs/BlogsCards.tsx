"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

type BlogsCardsProps = {
  title: string;
  description: string;
  image: string | StaticImageData;
  onClick?: () => void;
  buttonLabel?: string;
  icon?: string | StaticImageData;
};

const BlogsCards: React.FC<BlogsCardsProps> = ({
  title,
  description,
  image,
  onClick,
  buttonLabel = "Read more",
  icon,
}) => {
  return (
    <div className="bg-white rounded-xl space-y-4 font-Satoshi">
      <Image src={image} alt={title} className="rounded-xl w-full" />
      <div className="space-y-2">
        <h3 className="text-neutral-10 font-bold leading-6 text-xl">
          {title}
        </h3>
        <p className="line-clamp-3 text-neutral-35 text-lg leading-7">
          {description}
        </p>
      </div>
      {onClick && (
        <button
          onClick={onClick}
          className="cursor-pointer flex justify-start items-center gap-2 text-lg font-medium leading-6 tracking-[-0.6px] text-primary-10"
        >
          <span>{buttonLabel}</span>
          {icon && <Image src={icon} alt="icon" className="size-5" />}
        </button>
      )}
    </div>
  );
};

export default BlogsCards;
