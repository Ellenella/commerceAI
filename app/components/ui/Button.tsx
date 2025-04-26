import { forwardRef } from "react";
import { Button as HeadlessButton } from '@headlessui/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const baseStyles = "inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = "", ...props }, ref) => {
      return (
        <HeadlessButton
          ref={ref}
          className={`${baseStyles} ${className}`}
          {...props}
        />
      );
    }
  );
  
  Button.displayName = "Button";
