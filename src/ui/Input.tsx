"use client";

import { input } from "framer-motion/client";
import { forwardRef, type InputHTMLAttributes } from "react";


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const baseClasses = "w-full px-4 py-2 rounded-lg border transition-colors bg-input";
    const variantClasses = {
      primary: "bg-surface border-default text-primary focus:border-primary",
      secondary: "bg-background border-subtle text-secondary focus:border-secondary",
    };

    return (
      <input
        ref={ref}
        className="bg-white"
        placeholder="Email"
      />
    );
  }
);

Input.displayName = "Input"; // Para debugging en React DevTools

export default Input;