'use client';

import { FC, ReactNode, useState } from 'react';

export type DropdownProps = {
  title: ReactNode;
  children: ReactNode;
};

export const Dropdown: FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-max">
      <div
        className="relative flex cursor-pointer items-center text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </div>
      <div
        aria-hidden={!isOpen}
        className={`${isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-5 opacity-0'} absolute right-0 z-50 -mr-4 mt-4 flex flex-col bg-white text-black shadow-xl transition-[opacity,transform] duration-300 before:absolute before:-top-3 before:right-4 before:border-b-[12px] before:border-l-[12px] before:border-r-[12px] before:border-b-white before:border-l-transparent before:border-r-transparent before:content-['']`}
      >
        {children}
      </div>
    </div>
  );
};
