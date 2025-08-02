'use client';

import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";
import ContactUsForm from "@/components/Shared/ContactUs/ContactUsForm";
import { motion, Variants } from "framer-motion";
const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const listVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ContactUsHero = () => {
  const socialLinks = [
    {
      icon: ICONS.instagramPrimary,
      path: "https://www.instagram.com/sicoai/",
    },
    {
      icon: ICONS.facebookPrimary,
      path: "https://www.facebook.com/sicoai/",
    },
    {
      icon: ICONS.twitterPrimary,
      path: "https://www.linkedin.com/company/sicoai/",
    },
    {
      icon: ICONS.youtubePrimary,
      path: "https://www.youtube.com/@sicoai",
    },
  ];
  return (
    <div className=" relative pb-[110px] bg-neutral-35 font-Satoshi overflow-hidden">
      <div className="pt-[100px]">
        <Container>
          {/* 3. The main animation orchestrator starts here */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h1
              className="text-[64px] font-black leading-[64px] text-white text-center"
              variants={itemVariants}
            >
              Contact Us
            </motion.h1>

            {/* The white card now orchestrates its own children's animations */}
            <motion.div
              className=" bg-white rounded-[20px] z-10 relative flex mt-[64px]"
              variants={containerVariants} // Re-using container for the two columns
            >
              {/* Left Column (Form) */}
              <motion.div
                className="w-[50%] p-9 border-r border-neutral-55"
                variants={itemVariants}
              >
                <ContactUsForm />
              </motion.div>

              {/* Right Column (Contact Details) */}
              <motion.div
                className="w-[50%] px-9 py-7 flex flex-col justify-between text-neutral-70 text-xl leading-7 font-medium"
                variants={listVariants} // This will stagger the list items inside
              >
                {/* Each contact item is now a motion.div */}
                <motion.div
                  className="flex items-center gap-4 border-b border-neutral-55 pb-7"
                  variants={itemVariants}
                >
                  <Image
                    src={ICONS.locationPrimary}
                    alt=""
                    className="size-6"
                  />
                  <p className="">
                    828,Second Floor , KLICK MAGENT DIGITAL SOLUTIONS, Kailash
                    Vihar Main Rd, City Center, Patel Nagar, Gwalior, Madhya
                    Pradesh 474002
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 border-b border-neutral-55 pb-7"
                  variants={itemVariants}
                >
                  <Image
                    src={ICONS.locationPrimary}
                    alt=""
                    className="size-6"
                  />
                  <p className="">
                    Ichalkaranji Office - ‘Veduta Resisdency’ Flat No. A-101, KSP
                    Group, Opp to Abhay Milk Products Sangli Road Ichalkaranji ,
                    Maharashtra - 4161152
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 border-b border-neutral-55 pb-7"
                  variants={itemVariants}
                >
                  <Image src={ICONS.emailPrimary} alt="" className="size-6" />
                  <a
                    href="mailto:info@klickmagnet.in"
                    target="_blank"
                    className=" hover:underline"
                  >
                    info@klickmagnet.in
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 border-b border-neutral-55 pb-7"
                  variants={itemVariants}
                >
                  <Image src={ICONS.emailPrimary} alt="" className="size-6" />
                  <div className="flex items-center gap-1">
                    <a
                      href="tel:+91-93039-20792"
                      target="_blank"
                      className=" hover:underline"
                    >
                      +91-93039-20792,
                    </a>
                    <a
                      href="tel:+91-98344-367002"
                      target="_blank"
                      className=" hover:underline"
                    >
                      +91-98344-367002
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center justify-between pb-7"
                  variants={itemVariants}
                >
                  <p className="">Get connected on our Social networks</p>
                  <div className="flex items-center gap-2">
                    {socialLinks?.map((item) => (
                      <a key={item?.path} href={item?.path} target="_blank">
                        <Image src={item?.icon} alt="" className="size-8" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
      <Image
        src={IMAGES.heroGradient}
        alt=""
        className="bottom-0 absolute left-0 right-0 w-full"
      />
    </div>
  );
};

export default ContactUsHero;