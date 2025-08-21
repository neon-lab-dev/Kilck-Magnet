import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  label: string;
  className?: string;
};

const Button = ({ label, className }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "bg-gradient-primary shadow-primary-button py-2 md:py-3 2xl:py-4 px-4 2xl:px-8 rounded-lg md:rounded-xl text-white text-sm md:text-base 2xl:text-2xl font-medium 2xl:font-bold flex items-center justify-center",
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
