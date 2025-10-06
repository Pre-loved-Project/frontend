"use client";

import React from "react";
import cn from "@/shared/lib/cn";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
}

const variantClassMap: Record<
  ButtonVariant,
  { default: string; disabled: string }
> = {
  primary: {
    default: "bg-gradient-to-r from-[#5097fa] to-[#5363ff] text-[#F1F1F5]",
    disabled: "bg-[#353542] text-[#6E6E82]",
  },
  secondary: {
    default: "bg-transparent text-[#5097FA] border border-[#5097FA]",
    disabled: "bg-transparent text-[#6E6E82] border border-[#353542]",
  },
  tertiary: {
    default: "bg-transparent text-[#9FA6B2] border border-[#9FA6B2]",
    disabled: "bg-transparent text-[#6E6E82] border border-[#353542]",
  },
};

const Button = ({
  variant = "primary",
  disabled = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseClasses = cn(
    "font-semibold leading-none rounded-lg flex items-center justify-center transition-all duration-200",
    "w-[335px] h-[50px] text-base",
    "md:w-[440px] md:h-[55px] md:text-base",
    "xl:w-[640px] xl:h-[65px] xl:text-lg",
  );

  const variantClasses = disabled
    ? `${variantClassMap[variant].disabled} cursor-not-allowed`
    : `${variantClassMap[variant].default} cursor-pointer`;

  return (
    <button
      className={cn(baseClasses, variantClasses, className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
