"use client";
import React from 'react'
import { IMAGES } from '../../../../public/assets';
import Container from '@/components/Reusable/Container/Container';
import BlogsCards from '@/components/Blogs/BlogsCards';
import { useRouter } from "next/navigation";

const BlogCarousal = () => {
    const router = useRouter();
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
    {
      id: 5,
      title: "The Rise of AI in Web Development",
      description:
        "AI is transforming the way we build and design websites, making development faster and smarter iudn idbnj isdbvv ...",
      image: IMAGES.dummyBlogImage,
    },
    {
      id: 5,
      title: "Design Trends for 2025",
      description:
        "Explore the top upcoming design trends in UI/UX and how they will influence your next project ksdjfvhu kjsdbv aidufvbkjv ...",
      image: IMAGES.dummyBlogImage,
    },
    {
      id: 7,
      title: "Scaling a Next.js App for Millions of Users",
      description:
        "From server optimization to caching strategies, learn how to scale efficiently kjdfnvudf kjsdbviub iaubdvui ...",
      image: IMAGES.dummyBlogImage,
    },
    {
      id: 8,
      title: "Scaling a Next.js App for Millions of Users",
      description:
        "From server optimization to caching strategies, learn how to scale  kjdbvu efficiently...",
      image: IMAGES.dummyBlogImage,
    },
  ];
  return (
    <div>
      <Container>
        <div
      className="flex gap-8 overflow-x-auto scrollbar-none p-4"
      style={{ scrollBehavior: "smooth" }}
    >
      {blogsData.map((blog) => (
         <BlogsCards
          key={blog.id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          onClick={() => router.push(`/blogs/${blog.id}`)}
          classNames='w-[300px]'
        />
      ))}
    </div>

      </Container>
    </div>
  )
}

export default BlogCarousal