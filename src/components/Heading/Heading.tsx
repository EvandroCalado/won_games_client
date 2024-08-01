import { ElementType, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';

const heading = tv({
  base: 'text-2xl md:text-3xl',

  variants: {
    size: {
      sm: 'text-sm md:text-base',
      md: 'text-base md:text-lg',
      lg: 'text-lg md:text-xl',
      xl: 'text-xl md:text-2xl',
      '2xl': 'text-2xl md:text-3xl',
      '3xl': 'text-3xl md:text-4xl',
      '4xl': 'text-4xl md:text-5xl',
      '5xl': 'text-5xl md:text-6xl',
      '6xl': 'text-6xl md:text-7xl',
      '7xl': 'text-7xl md:text-8xl',
      '8xl': 'text-8xl md:text-9xl',
      '9xl': 'text-9xl md:text-10xl',
    },
    color: {
      white: 'text-white font-semibold',
      black: 'text-white md:text-black font-semibold block',
    },
    lineLeft: {
      true: 'pl-2 border-l-4 border-l-secondary',
    },
    lineBottomPrimary: {
      true: 'relative after:border-b-4 after:border-b-primary after:absolute after:left-0 after:-bottom-1 after:w-1/5',
    },
    lineBottomSecondary: {
      true: 'relative after:border-b-4 after:border-b-secondary after:absolute after:left-0 after:-bottom-1 after:w-1/5',
    },
  },

  defaultVariants: {
    size: '2xl',
    color: 'white',
    lineLeft: false,
    lineBottomPrimary: false,
    lineBottomSecondary: false,
  },
});

export type HeadingProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
} & VariantProps<typeof heading>;

export const Heading: FC<HeadingProps> = ({
  children,
  size,
  color = 'white',
  lineLeft = false,
  lineBottomPrimary = false,
  lineBottomSecondary = false,
  as = 'h2',
  className,
}) => {
  // transform as a element component
  const Element = as;

  return (
    <Element
      className={twMerge(
        heading({
          size,
          color,
          lineLeft,
          lineBottomPrimary,
          lineBottomSecondary,
        }),
        className,
      )}
    >
      {children}
    </Element>
  );
};
