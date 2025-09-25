import React from "react";
import cn from "@/shared/lib/cn";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "sm" | "md" | "lg";
type VariantStyle = {
  default: string;
  disabled: string;
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const sizeClassMap: Record<ButtonSize, string> = {
  sm: "text-base w-[335px] h-[50px]",
  md: "text-base w-[440px] h-[55px]",
  lg: "text-lg w-[640px] h-[65px]",
};

const variantClassMap: Record<ButtonVariant, VariantStyle> = {
  primary: {
    default: "bg-linear-to-r from-[#5097fa] to-[#5363ff] text-[#F1F1F5]",
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
  size = "sm",
  disabled = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseClasses = "font-semibold leading-none rounded-lg";

  const mergedClasses = cn(
    baseClasses,
    sizeClassMap[size],
    disabled
      ? [variantClassMap[variant].disabled, "cursor-not-allowed"]
      : [variantClassMap[variant].default, "cursor-pointer"],
    className,
  );

  return (
    <button className={mergedClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
