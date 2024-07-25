import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  FC,
  ReactNode,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';

type ButtonTypes =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = {
  icon?: ReactNode;
  as?: ElementType;
  className?: string;
} & ButtonTypes &
  VariantProps<typeof button>;

const button = tv({
  base: `flex items-center justify-center gap-2 `,

  variants: {
    as: {
      button:
        'rounded bg-gradient-to-b from-red to-primary p-2 text-white duration-150 hover:bg-gradient-to-b hover:from-red/95 hover:to-primary/95 active:bg-gradient-to-b active:from-red/80 active:to-primary/80',
      a: 'text-primary underline inline-block hover:text-primary/80 duration-150',
    },
    size: {
      sm: 'text-xs h-7 px-4 [&>svg]:w-4 [&>svg]:h-4',
      md: 'text-sm h-10 px-8 [&>svg]:w-5 [&>svg]:h-5',
      lg: 'text-base h-12 px-12 [&>svg]:w-6 [&>svg]:h-6',
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const Button: FC<ButtonProps> = ({
  children,
  size,
  icon,
  as = 'button',
  className,
  ...props
}) => {
  const Element = as;

  return (
    <Element className={twMerge(button({ size, as }), className)} {...props}>
      {!!icon && icon}
      {!!children && children}
    </Element>
  );
};
