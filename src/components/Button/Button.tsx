import { cn } from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  FC,
  ReactNode,
} from 'react';

const button = cva('flex items-center justify-center gap-2 rounded w-max', {
  variants: {
    variant: {
      primary:
        'bg-gradient-to-b from-red to-primary p-2 text-white duration-150 hover:bg-gradient-to-b hover:from-red/95 hover:to-primary/95 active:bg-gradient-to-b active:from-red/80 active:to-primary/80',
      ghost: 'p-2 duration-150 text-primary hover:bg-lightBg active:bg-white',
    },
    size: {
      sm: 'text-xs h-7 px-4 [&>svg]:w-4 [&>svg]:h-4',
      md: 'text-sm h-10 px-8 [&>svg]:w-5 [&>svg]:h-5',
      lg: 'text-base h-12 px-12 [&>svg]:w-6 [&>svg]:h-6',
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});

type ButtonTypes =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = {
  icon?: ReactNode;
  as?: ElementType;
} & ButtonTypes &
  VariantProps<typeof button>;

export const Button: FC<ButtonProps> = ({
  children,
  variant,
  size,
  icon,
  as = 'button',
  className,
  ...props
}) => {
  const Element = as;

  return (
    <Element className={cn(button({ className, size, variant }))} {...props}>
      {!!icon && icon}
      {!!children && children}
    </Element>
  );
};
