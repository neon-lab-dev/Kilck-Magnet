import React from "react";
import { ICONS, IMAGES } from "../../../public/assets";
import Image from "next/image";

const BlogsCards = () => {

  return (
    <div className="bg-white rounded-xl space-y-4  font-Satoshi">
      <Image
        src={IMAGES.dummyBlogImage}
        alt="title"
        className="rounded-xl w-full"
      />
      <div className="space-y-2">
        <h3 className="text-neutral-10 font-bold leading-6 text-xl ">This should be the title</h3>
        <p className="line-clamp-3 text-neutral-35 text-lg leading-7 ">
          Lorem ipsum dolor sit amet consectetur. Congue aenean dignissim neque
          vel magna orci pharetra. Porttitor id non sapien massa mi proin sed
          sed euhhhhhas dvja iauvbadfv adffjuivbgadjvadfvl uaeivhbaermvae
          ruifvberuih
        </p>
      </div>
      <button
        className="cursor-pointer flex justify-start items-center gap-2 text-lg font-medium leading-6 tracking-[-0.6px] text-primary-10"
        // onClick={() => router.push("/blogs")}
      >
        <span>Read more</span> <Image
        src={ICONS.rightArrow}
        alt="title"
        className="rounded-xl size-5"
      />
      </button>
    </div>
  );
};

export default BlogsCards;
