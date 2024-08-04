import { Footer, Menu } from '@/components';
import { FC, ReactNode } from 'react';

export type BaseProps = {
  children: ReactNode;
};

export const Base: FC<BaseProps> = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
};
