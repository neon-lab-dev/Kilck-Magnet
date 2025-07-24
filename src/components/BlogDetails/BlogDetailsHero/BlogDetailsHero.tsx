import Container from "@/components/Reusable/Container/Container";
import React from "react";
import { ICONS, IMAGES } from "../../../../public/assets";
import Image from "next/image";

const BlogDetailsHero = () => {
  const title =
    "Streamlining Infrastructure Inspections: The Power of AI and Docked Drones";

  return (
    <div className="mt-12 font-Satoshi">
      <Container>
        {/* Breadcrumb */}
        <div className="flex flex-row gap-2 items-center font-medium leading-5 tracking-[-0.5px] mb-2">
          <h5 className="text-neutral-80">Blogs</h5>
          <Image src={ICONS.rightArrowGray} alt="arrow icon" className="w-1 h-2" />
          <p className="text-neutral-75">{title}</p>
        </div>

        {/* Blog Title */}
        <h2 className="text-neutral-80 text-[28px] leading-8 font-medium tracking-[-0.05px] mb-2">
          {title}
        </h2>
        <p className="text-neutral-75 text-lg leading-[22px] mb-8 ">
            Discover how docked drones and AI-powered solutions are transforming infrastructure inspections. Learn about automated workflows, cost-effective operations, and enhanced precision in our webinar recap with gNext.
        </p>
        {/* Blog Image */}
        <Image
          src={IMAGES.dummyBlogImage}
          alt={title}
          className="w-full object-cover rounded-lg"
        />
      </Container>
    </div>
  );
};

export default BlogDetailsHero;
