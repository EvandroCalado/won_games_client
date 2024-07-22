import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type HeadingProps = {
  children: ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
};

export const Heading: FC<HeadingProps> = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
}) => {
  const colorHeading = color === 'white' ? 'text-white' : 'text-black';
  const lineLeftHeading = lineLeft ? 'pl-2 border-l-4 border-l-secondary' : '';
  const lineBottomHeading = lineBottom
    ? 'relative after:border-b-4 after:border-b-primary after:absolute after:left-0 after:-bottom-1 after:w-12'
    : '';

  return (
    <h2
      className={twMerge(
        'text-2xl font-semibold md:text-3xl',
        colorHeading,
        lineLeftHeading,
        lineBottomHeading,
      )}
    >
      {children}
    </h2>
  );
};
