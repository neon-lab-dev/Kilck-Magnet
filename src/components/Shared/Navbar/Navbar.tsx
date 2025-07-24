"use client";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IMAGES } from "../../../../public/assets";

const Navbar = () => {
  const pathname = usePathname();
  const navlinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Us",
      path: "/about-us",
    },
    {
      label: "Blogs",
      path: "/blogs",
    },
    {
      label: "Contact Us",
      path: "/contact-us",
    },
  ];
  return (
    <div className="bg-neutral-35 font-Satoshi">
      <Container>
        <div className="flex items-center justify-between py-5">
          <Link
            href={"/"}
            className="text-white font-extrabold font-Satoshi text-2xl"
          >
            Klick Magnet
          </Link>

          <div className="flex items-center gap-5">
            {navlinks?.map((item) => (
              <Link
                key={item?.label}
                href={item?.path}
                className={`text-base font-medium leading-5 hover:underline ${
                  pathname === item?.path ? "text-white" : "text-neutral-20"
                }`}
              >
                {item?.label}
              </Link>
            ))}
            <Link
              href={"/"}
              className="text-white font-medium p-[10px] rounded-lg border border-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </Container>

    {/* Hero */}
      <div className="mt-[200px] relative pb-[380px]">
       <Container>
         <div className="bg-neutral-40 border border-neutral-45 py-[10px] px-5 rounded-[100px] text-white font-medium leading-5 w-fit">Built for Ambitious Brands. Designed for Results.</div>

        <div className="flex items-center justify-between relative">
            <div>
                <h1 className="text-[72px] font-black leading-20 text-white max-w-[900px]">Turn Clicks into Clients. Build a Brand That Performs.</h1>
                <p className="text-neutral-50 text-[28px] leading-8 mt-4 max-w-[700px]">We help ambitious businesses grow smarter with stunning design, strategic marketing, and conversion-obsessed execution, all under one roof.</p>

                <button className="bg-gradient-primary shadow-primary-button py-6 px-8 rounded-[20px] text-white text-2xl font-bold leading-5 mt-8">Explore more</button>
            </div>
            <Image src={IMAGES.heroImage} alt="" className="" />
        </div>
       </Container>
            <Image src={IMAGES.heroGradient} alt="" className="bottom-0 absolute top-20 w-full" />
      </div>
    </div>
  );
};

export default Navbar;
