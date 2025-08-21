/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import React from "react";
import { ICONS, IMAGES } from "../../../../public/assets";
import BlogsCards from "@/components/Blogs/BlogsCards";
import { motion } from "framer-motion";
import Button from "@/components/Reusable/Button/Button";

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

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
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

  const itemVariants: any = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-24 font-Satoshi overflow-hidden">
      <Container>
        <div className="space-y-7 lg:space-y-12">
          <motion.h2
            className="text-neutral-10 heading-xl"
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true }}
          >
            Read Articles
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 lg:gap-16"
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true }}
            className="w-fit"
          >
            <Button label="Get in Touch" variant="primary" rounded="full" />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Articles;
