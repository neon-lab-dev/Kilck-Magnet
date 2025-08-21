import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { ICONS } from "../../../../public/assets";

type ButtonProps = {
  label: string;
  className?: string;
  variant?: "primary" | "secondary";
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
  isIconVisible?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  label,
  className,
  variant = "primary",
  rounded = "lg",
  isIconVisible=true,
  ...props
}: ButtonProps) => {
  // Variant styles
  const variantClasses = {
    primary: "bg-gradient-primary text-white",   //shadow-primary-button 
    secondary: "bg-white text-neutral-800 border border-neutral-300 shadow-sm",
  };

  // Rounded styles
  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <button
      {...props}
      className={twMerge(
        // base styles
        "py-2 md:py-3 2xl:py-4 px-4 2xl:px-8 text-sm md:text-base 2xl:text-2xl font-medium 2xl:font-bold flex items-center justify-center gap-2 transition-colors duration-200 w-fit overflow-hidden",
        // dynamic styles
        variantClasses[variant],
        roundedClasses[rounded],
        className
      )}
    >
      {label}
      {isIconVisible && (
        <Image src={variant === "primary" ? ICONS.rightArrowWhite : ICONS.rightArrowGray} alt="" className="size-4 md:size-5 2xl:size-6" />
      )}
    </button>
  );
};

export default Button;
