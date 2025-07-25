"use client"
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import React from "react";
import { ICONS, IMAGES } from "../../../../public/assets";
import BlogsCards from "@/components/Blogs/BlogsCards";
import { useRouter } from "next/navigation";

const Articles = () => {

  const blogsData = [
    {
      _id: "1",
      title: "The Rise of AI in Web Development",
      description:
        "AI is transforming the way we build and design websites, making development faster and smarter iudn idbnj isdbvv ...",
      image: IMAGES.dummyBlogImage,
    },
    {
      _id: "2",
      title: "Design Trends for 2025",
      description:
        "Explore the top upcoming design trends in UI/UX and how they will influence your next project ksdjfvhu kjsdbv aidufvbkjv ...",
      image: IMAGES.dummyBlogImage,
    },
    {
      _id: "3",
      title: "Scaling a Next.js App for Millions of Users",
      description:
        "From server optimization to caching strategies, learn how to scale efficiently kjdfnvudf kjsdbviub iaubdvui ...",
      image: IMAGES.dummyBlogImage,
    },
  ];

  return (
    <div className="py-24 font-Satoshi">
      <Container>
        <div className="space-y-12">
          <h2 className="text-neutral-10 text-5xl font-black">
            Read Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {blogsData.map((blog) => (
              <BlogsCards
                key={blog._id}
                id={blog._id}
                title={blog.title}
                description={blog.description}
                image={blog.image}
              />
            ))}
          </div>

          <button className="bg-gradient-primary shadow-primary-button2 py-6 px-8 rounded-[999px] text-white text-2xl font-bold leading-5 mt-8 flex items-center gap-[10px] w-fit">
            Get in touch
            <Image src={ICONS.rightArrowWhite} alt="" className="size-6" />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Articles;
