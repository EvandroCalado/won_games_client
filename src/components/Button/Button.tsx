import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children?: ReactNode;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  children,
  fullWidth = false,
  size = 'md',
  icon,
  ...props
}) => {
  const sizeButton = {
    sm: `text-xs h-7 ${icon && !children ? 'px-2' : 'px-4'}`,
    md: `text-sm h-10 ${icon && !children ? 'px-2' : 'px-8'}`,
    lg: `text-base h-12 ${icon && !children ? 'px-2' : 'px-12'}`,
  };
  const fullWidthButton = fullWidth ? 'w-full' : '';
  const sizeIcon = {
    sm: '[&>svg]:w-4 [&>svg]:h-4',
    md: '[&>svg]:w-5 [&>svg]:h-5',
    lg: '[&>svg]:w-6 [&>svg]:h-6',
  };

  return (
    <button
      className={twMerge(
        'flex items-center justify-center gap-2 rounded bg-gradient-to-b from-red to-primary p-2 font-semibold text-white',
        fullWidthButton,
        sizeButton[size],
        sizeIcon[size],
      )}
      {...props}
    >
      {!!icon && icon}
      {!!children && children}
    </button>
  );
};
