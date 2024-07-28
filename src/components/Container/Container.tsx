import { FC } from 'react';

export type ContainerProps = {
  children: string;
};

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-7xl px-4">{children}</div>;
};
