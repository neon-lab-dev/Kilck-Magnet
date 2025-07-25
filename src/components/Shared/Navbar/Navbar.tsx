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
    </div>
  );
};

export default Navbar;
