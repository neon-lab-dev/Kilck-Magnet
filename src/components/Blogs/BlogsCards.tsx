"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { ICONS } from "../../../public/assets";
import Link from "next/link";

type BlogsCardsProps = {
  id: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  buttonLabel?: string;
  classNames?: string;
};

const BlogsCards: React.FC<BlogsCardsProps> = ({
  id,
  title,
  description,
  image,
  buttonLabel = "Read more",
  classNames,
}) => {
  return (
    <div
      className={`bg-white rounded-xl flex flex-col justify-between space-y-4 font-Satoshi flex-shrink-0 ${classNames} `}
    >
      <div>
        <Image src={image} alt={title} className="rounded-xl w-full" />
        <div className="space-y-2 mt-5">
          <h3 className="text-neutral-10 font-bold leading-6 text-xl">
            {title}
          </h3>
          <p className="line-clamp-3 text-neutral-70 text-lg leading-7">
            {description}
          </p>
        </div>
      </div>

      <Link
        href={`/blogs/${id}`}
        className="cursor-pointer flex justify-start items-center gap-2 text-lg font-medium leading-6 tracking-[-0.6px] text-primary-10 w-fit"
      >
        <span>{buttonLabel}</span>
        <Image src={ICONS.rightArrow} alt="icon" className="size-5" />
      </Link>
    </div>
  );
};

export default BlogsCards;
