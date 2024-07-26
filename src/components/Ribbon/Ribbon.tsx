import { FC, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const ribbon = tv({
  slots: {
    container: '',
    tail: '',
  },

  variants: {
    color: {
      primary: {
        container: 'flex items-center font-bold text-white bg-red',
        tail: 'absolute  right-0 border-b-0 border-solid border-t-[#9B4242]',
      },
      secondary: {
        container: 'flex items-center font-bold text-white bg-secondary',
        tail: 'absolute right-0 border-b-0 border-solid border-t-[#2E8379]',
      },
    },
    size: {
      sm: {
        container: 'h-6 text-xs p-2 absolute -right-2 top-2 z-10',
        tail: 'border-r-[8px] border-t-[3px] -bottom-[3px]',
      },
      md: {
        container: 'h-9 text-sm py-2 px-4 absolute -right-4 top-2 z-10',
        tail: 'border-r-[16px] border-t-[6px] -bottom-[6px]',
      },
    },
  },

  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});

export type RibbonProps = {
  children: ReactNode;
} & VariantProps<typeof ribbon>;

export const Ribbon: FC<RibbonProps> = ({ children, color, size }) => {
  const { container, tail } = ribbon({ color, size });

  return (
    <div className={container()}>
      <div className={tail()}></div>
      {children}
    </div>
  );
};
