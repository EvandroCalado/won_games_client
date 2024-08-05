import { cn } from '@/utils/cn';
import { FC, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const ribbon = tv({
  slots: {
    container: 'flex items-center font-bold text-white',
    tail: 'max-md:hidden absolute right-0 border-solid',
  },

  variants: {
    color: {
      primary: {
        container: 'bg-red',
        tail: 'border-t-[#9B4242] border-r-transparent',
      },
      secondary: {
        container: 'bg-secondary',
        tail: 'border-t-[#2E8379] border-r-transparent',
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
  className?: string;
} & VariantProps<typeof ribbon>;

export const Ribbon: FC<RibbonProps> = ({
  children,
  color,
  size,
  className,
}) => {
  const { container, tail } = ribbon({ color, size });

  return (
    <div className={cn(container(), className)}>
      <span className={tail()}></span>
      {children}
    </div>
  );
};
