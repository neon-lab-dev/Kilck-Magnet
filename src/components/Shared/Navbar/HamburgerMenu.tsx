import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ICONS } from "../../../../public/assets";
import Image from "next/image";
import Link from "next/link";
import { navlinks } from "./navlinks";

const HamburgerMenu = () => {
  const pathname = usePathname();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const closestDropdown = target.closest(".hamburgerMenu");
      if (isHamburgerOpen && closestDropdown === null) {
        setIsHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isHamburgerOpen]);

  return (
    <div className="relative hamburgerMenu flex lg:hidden">
      <button onClick={toggleHamburgerMenu}>
        <Image src={ICONS.menu} alt="menu-icon" className="size-7" />
      </button>

      {/* Background Overlay */}
      <div
        onClick={toggleHamburgerMenu}
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
          isHamburgerOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Side Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 bg-neutral-10 py-8 p-5 w-[300px] overflow-y-auto transition-all duration-300 transform flex flex-col items-start justify-between ${
          isHamburgerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-10 w-full">
          {/* Header */}
          <div className="flex justify-between items-center gap-5 w-full border-b border-neutral-20 pb-4">
            <Link
              href={"/"}
              className="text-white font-extrabold font-Satoshi text-2xl"
            >
              Klick Magnet
            </Link>
            <button onClick={toggleHamburgerMenu}>
              <Image src={ICONS.cross} alt="cross-icon" className="size-6" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-5">
            {navlinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={toggleHamburgerMenu}
                className={`text-lg font-semibold transition ${
                  pathname === link.path
                    ? "text-white"
                    : "text-neutral-25"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href={"/"}
          className="text-white font-medium p-[10px] rounded-lg w-full text-center bg-primary-10"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
