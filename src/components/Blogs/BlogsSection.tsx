/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { IMAGES } from "../../../public/assets";
import BlogsCards from "./BlogsCards";
import Container from "../Reusable/Container/Container";
import { motion } from "framer-motion";

const blogsData = [
  {
    _id : "1",
    title: "The Rise of AI in Web Development",
    description:
      "AI is transforming the way we build and design websites, making development faster and smarter iudn idbnj isdbvv ...",
    image: IMAGES.dummyBlogImage,
  },
  {
    _id : "2",
    title: "Design Trends for 2025",
    description:
      "Explore the top upcoming design trends in UI/UX and how they will influence your next project ksdjfvhu kjsdbv aidufvbkjv ...",
    image: IMAGES.dummyBlogImage,
  },
  {
    _id : "3",
    title: "Scaling a Next.js App for Millions of Users",
    description:
      "From server optimization to caching strategies, learn how to scale efficiently kjdfnvudf kjsdbviub iaubdvui ...",
    image: IMAGES.dummyBlogImage,
  },
  {
    _id : "4",
    title: "Scaling a Next.js App for Millions of Users",
    description:
      "From server optimization to caching strategies, learn how to scale  kjdbvu efficiently...",
    image: IMAGES.dummyBlogImage,
  },
  {
    _id : "5",
    title: "Scaling a Next.js App for Millions of Users",
    description:
      "From server optimization to caching strategies, learn how to scale  kjdbvu efficiently...",
    image: IMAGES.dummyBlogImage,
  },
  {
    _id : "6",
    title: "Scaling a Next.js App for Millions of Users",
    description:
      "From server optimization to caching strategies, learn how to scale  kjdbvu efficiently...",
    image: IMAGES.dummyBlogImage,
  },
];

  const containerVariants:any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants:any = {
    hidden: { opacity: 0, y: 100, scale: 0.8,  },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };


const BlogsSection = () => {

  return (
    <Container>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 my-24">
      {blogsData.map((blog) => (
        <BlogsCards
          key={blog._id}
          id={blog._id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
        />
      ))}
    </div> */}
    <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 my-24"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.1 }}
          >
            {blogsData.map((blog) => (
              <motion.div key={blog._id} variants={cardVariants}>
                <BlogsCards
                  id={blog._id}
                  title={blog.title}
                  description={blog.description}
                  image={blog.image}
                />
              </motion.div>
            ))}
          </motion.div>
    </Container>
    
  );
};

export default BlogsSection;
