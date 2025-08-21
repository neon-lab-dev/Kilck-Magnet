"use client";
import Container from "@/components/Reusable/Container/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navlinks } from "./navlinks";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const pathname = usePathname();

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

          <div className="hidden lg:flex items-center gap-5">
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
          <HamburgerMenu/>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
