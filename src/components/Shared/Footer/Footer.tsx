/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ICONS } from "../../../../public/assets";
import Container from "@/components/Reusable/Container/Container";
import ScheduleCall from "../ScheduleCall/ScheduleCall";
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = [
    {
      heading: "Resources",
      links: [
        { name: "About", href: "/about-us" },
        { name: "Blogs", href: "/blogs" },
        { name: "Contact us", href: "/contact-us" },
        { name: "Portfolio", href: "/" },
        { name: "FAQs", href: "/" },
      ],
    },
  ];
 const footerServices  = [
    {
     heading: "Our Services",
      links: [
        { name: "Web Development", href: "/" },
        { name: "Graphic Designing", href: "/" },
        { name: "Social Media Marketing", href: "/" },
        { name: "SEO", href: "/services" },
        { name: "3D Walkthrough", href: "/" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: ICONS.phoneGray,
      text: "+91-93039-20792",
      href: "tel:+91-93039-20792",
    },
    {
      icon: ICONS.emailGray,
      text: "info@klickmagnet.in",
      href: "mailto:info@klickmagnet.in",
    },
    {
      icon: ICONS.locationGray,
      text: "828,Second Floor , KLICK MAGENT DIGITAL SOLUTIONS, Kailash Vihar Main Rd, City Center, Patel Nagar, Gwalior, Madhya Pradesh 474002",
    },
    {
      icon: ICONS.locationGray,
      text: "Ichalkaranji Office - ‘Veduta Resisdency’ Flat No. A-101, KSP Group, Opp to Abhay Milk Products Sangli Road Ichalkaranji , Maharashtra - 416115",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: ICONS.facebook,
      href: "https://www.facebook.com/profile.php?id=61572524423643",
    },
    {
      name: "Instagram",
      icon: ICONS.instagram,
      href: "https://www.instagram.com/medhrplus/",
    },
    {
      name: "Linkedin",
      icon: ICONS.linkedin,
      href: "https://www.instagram.com/medhrplus/",
    },
    {
      name: "Youtube",
      icon: ICONS.youtube,
      href: "https://www.instagram.com/medhrplus/",
    },
  ];

  // Animation variant for a slight bounce effect
  const bounceVariant:any = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10, // Lower damping creates more bounce
        duration: 0.8,
      },
    },
  };

  return (
    <div className="bg-neutral-90 relative font-Satoshi pt-7 lg:pt-[180px] pb-[64px] mt-72 s">
      {/* Animated ScheduleCall Section */}
      <motion.div
        className="absolute w-full -top-72"
        initial="hidden"
        whileInView="visible"
        variants={bounceVariant}
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of it is in view
      >
        <ScheduleCall />
      </motion.div>

      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 ">
          {/* Left side logo and description */}
          <div className="flex flex-col gap-4 text-white w-full lg:w-[30%]">
            <Link
              href={"/"}
              className="text-neutral-10 font-black font-Satoshi text-2xl"
            >
              Klick Magnet
            </Link>
            <p className="text-neutral-60">
              Excellence decisively nay man twins impression maximum contrasted
              remarkably is perfect.
            </p>
          </div>
          {/* Right side links */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 w-full lg:w-[70%] justify-between">
            {footerLinks?.map((item) => (
              <div key={item?.heading} className="flex flex-col gap-1">
                <span className="text-neutral-65 font-medium leading-5">
                  {item?.heading}
                </span>
                <ul className="text-neutral-65 leading-5 flex flex-col gap-4 mt-3">
                  {item?.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="hover:underline">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {footerServices?.map((item) => (
              <div key={item?.heading} className="flex flex-col gap-1">
                <span className="text-neutral-65 font-medium leading-5">
                  {item?.heading}
                </span>
                <ul className="text-neutral-65 leading-5 flex flex-col gap-4 mt-3">
                  {item?.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="hover:underline">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col gap-1 max-w-[400px]">
              <span className="text-neutral-65 font-medium leading-5">
                Contact Info
              </span>
              <div className="text-neutral-65 leading-5 flex flex-col gap-4 mt-3">
                {contactInfo?.map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <Image src={item?.icon} alt={""} className="size-5" />
                    <a
                      href={item?.href ? item?.href : "/"}
                      target="_blank"
                      className="hover:underline"
                    >
                      {item?.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-neutral-55 w-full h-[2px] my-8" />

        {/* Copyright and scroll to top button */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-start md:items-center justify-between">
          <p className="text-neutral-25">
            ©2025 Klick Magnet. All rights reserved
          </p>
          <div className="flex items-center gap-4">
            {socialLinks?.map((item) => (
              <a
                key={item?.name}
                href={item?.href}
                target="_blank"
                className="cursor-pointer"
              >
                <Image src={item?.icon} alt={item?.name} className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;