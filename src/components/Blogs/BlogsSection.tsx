"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ICONS, IMAGES } from "../../../public/assets";
import BlogsCards from "./BlogsCards";
import Container from "../Reusable/Container/Container";

const blogsData = [
  {
    id: 1,
    title: "The Rise of AI in Web Development",
    description:
      "AI is transforming the way we build and design websites, making development faster and smarter iudn idbnj isdbvv ...",
    image: IMAGES.dummyBlogImage,
  },
  {
    id: 2,
    title: "Design Trends for 2025",
    description:
      "Explore the top upcoming design trends in UI/UX and how they will influence your next project ksdjfvhu kjsdbv aidufvbkjv ...",
    image: IMAGES.dummyBlogImage,
  },
  {
    id: 3,
    title: "Scaling a Next.js App for Millions of Users",
    description:
      "From server optimization to caching strategies, learn how to scale efficiently kjdfnvudf kjsdbviub iaubdvui ...",
    image: IMAGES.dummyBlogImage,
  },
  {
    id: 4,
    title: "Scaling a Next.js App for Millions of Users",
    description:
      "From server optimization to caching strategies, learn how to scale  kjdbvu efficiently...",
    image: IMAGES.dummyBlogImage,
  },
];

const BlogsSection = () => {
  const router = useRouter();

  return (
    <Container>
        <div className="grid grid-cols-4 gap-16">
      {blogsData.map((blog) => (
        <BlogsCards
          key={blog.id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          icon={ICONS.rightArrow}
          onClick={() => router.push(`/blogs/${blog.id}`)}
        />
      ))}
    </div>
    </Container>
    
  );
};

export default BlogsSection;
