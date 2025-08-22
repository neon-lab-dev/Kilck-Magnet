"use client";
import React from 'react'
import { IMAGES } from '../../../../public/assets';
import Container from '@/components/Reusable/Container/Container';
import BlogsCards from '@/components/Blogs/BlogsCards';

const BlogCarousal = () => {
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
    <div>
      <Container>
        <h3 className=' bg-primary-10 text-white px-2 heading-xl font-bold w-fit mb-14'>Latest blogs</h3>
        <div
      className="flex gap-8 overflow-x-auto scrollbar-none"
      style={{ scrollBehavior: "smooth" }}
    >
      {blogsData.map((blog) => (
         <BlogsCards
          key={blog._id}
          id={blog._id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          classNames='w-[300px]'
        />
      ))}
    </div>

      </Container>
    </div>
  )
}

export default BlogCarousal