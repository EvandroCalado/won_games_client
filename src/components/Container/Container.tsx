import { cn } from '@/utils/cn';
import { FC, ReactNode } from 'react';

export type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('mx-auto max-w-7xl px-4 py-8', className)}>
      {children}
    </div>
  );
};
