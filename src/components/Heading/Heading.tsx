import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';

const heading = tv({
  base: 'w-max text-2xl font-semibold md:text-3xl',

  variants: {
    color: {
      white: 'text-white',
      black: 'text-black',
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
    as: {
      h1: 'text-3xl md:text-4xl',
      h2: 'text-2xl md:text-3xl',
      h3: 'text-xl md:text-2xl',
      h4: 'text-lg md:text-xl',
      h5: 'text-base md:text-lg',
      h6: 'text-sm md:text-base',
    },
  },

  defaultVariants: {
    color: 'white',
    lineLeft: false,
    lineBottomPrimary: false,
    lineBottomSecondary: false,
    as: 'h2',
  },
});

export type HeadingProps = {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof heading>;

export const Heading: FC<HeadingProps> = ({
  children,
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
          color,
          lineLeft,
          lineBottomPrimary,
          lineBottomSecondary,
          as,
        }),
        className,
      )}
    >
      {children}
    </Element>
  );
};
