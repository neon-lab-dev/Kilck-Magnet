"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ICONS } from "../../../../public/assets";
import Container from "@/components/Reusable/Container/Container";

const Footer = () => {
  const footerLinks = [
    {
      heading: "Company",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Use", href: "/terms-and-conditions" },
        { name: "Refund Policy", href: "/refund-policy" },
        { name: "About us", href: "/about-us" },
        { name: "Contact us", href: "/contact-us" },
      ],
    },
  ];

  const importantLinks = [
    {
      label: "Jobs",
      action: () => {
        window.location.href = "/jobs";
      },
    },
    {
      label: "Internships",
      action: () => {
        window.location.href = "/internships";
      },
    },
    {
      label: "Skill Programmes",
      action: () => {
        window.location.href = "/skill-programmes";
      },
    },
    {
      label: "Courses",
      action: () => {
        window.location.href = "/courses";
      },
    },
    {
      label: "Trending Today",
      action: () => {
        const section = document.getElementById("trending-today");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Events",
      action: () => {
        const section = document.getElementById("events");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      },
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
  return (
    <div className="bg-neutral-90 font-Satoshi pt-[180px] pb-[64px]">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 ">
          {/* Left side logo and description */}
          <div className="flex flex-col gap-4 text-white w-[20%]">
            <Link
              href={"/"}
              className="text-neutral-10 font-black font-Satoshi text-2xl"
            >
              Klick Magnet
            </Link>
            <p className="text-neutral-60  ">
              Excellence decisively nay man twins impression maximum contrasted
              remarkably is perfect.
            </p>
          </div>
          {/* Right side links */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            {footerLinks?.map((item) => (
              <div key={item?.heading} className="flex flex-col gap-1">
                <span className="text-neutral-65 font-medium leading-5">
                  {item?.heading}
                </span>
                <ul className="text-neutral-65 leading-5 flex flex-col gap-4 mt-3">
                  {/* Using map to render other links */}
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

            <div className="flex flex-col gap-1">
              <span className="text-neutral-65 font-medium leading-5">
                Important
              </span>
              <div className="text-neutral-65 leading-5 flex flex-col gap-4 mt-3">
                {importantLinks.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-2 cursor-pointer"
                    onClick={item.action}
                  >
                    <span className="hover:underline">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1 max-w-[400px]">
              <span className="text-neutral-65 font-medium leading-5">
                Contact Info
              </span>
              <div className="text-neutral-65 leading-5 flex flex-col gap-4 mt-3">
                {/* Using map to render other links */}
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
        <div className="flex items-center justify-between">
          <p className="text-neutral-25">
            ©2025 Klick Magnet. All rights reserved
          </p>
          {/* Scroll to top button */}
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
