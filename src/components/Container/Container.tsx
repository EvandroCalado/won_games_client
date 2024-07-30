import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={twMerge('mx-auto max-w-7xl px-4 py-8', className)}>
      {children}
    </div>
  );
};
