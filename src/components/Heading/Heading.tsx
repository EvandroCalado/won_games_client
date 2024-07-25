import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type HeadingProps = {
  children: ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottomPrimary?: boolean;
  lineBottomSecondary?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
};

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

  // styles
  const colorStyles = color === 'white' ? 'text-white' : 'text-black';
  const lineLeftStyles = lineLeft ? 'pl-2 border-l-4 border-l-secondary' : '';
  const lineBottomPrimaryStyles =
    lineBottomPrimary &&
    'relative after:border-b-4 after:border-b-primary after:absolute after:left-0 after:-bottom-1 after:w-1/5';
  const lineBottomSecondaryStyles =
    lineBottomSecondary &&
    'relative after:border-b-4 after:border-b-secondary after:absolute after:left-0 after:-bottom-1 after:w-1/5';
  const sizeStyles = {
    h1: 'text-3xl md:text-4xl',
    h2: 'text-2xl md:text-3xl',
    h3: 'text-xl md:text-2xl',
    h4: 'text-lg md:text-xl',
    h5: 'text-base md:text-lg',
    h6: 'text-sm md:text-base',
  };

  return (
    <Element
      className={twMerge(
        'w-max text-2xl font-semibold md:text-3xl',
        colorStyles,
        lineLeftStyles,
        lineBottomPrimaryStyles,
        lineBottomSecondaryStyles,
        sizeStyles[as],
        className,
      )}
    >
      {children}
    </Element>
  );
};
