'use client';

import { FC, InputHTMLAttributes } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const radio = tv({
  slots: {
    labelStyles: 'cursor-pointer leading-4',
    inputStyles: [
      'cursor-pointer flex items-center justify-center appearance-none w-5 h-5 border-2 border-solid border-primary bg-transparent rounded-full transition-all duration-150 relative outline-none',
      'before:content-[""] before:w-3 before:h-3 before:bg-primary before:absolute before:top-[1.5px] before:opacity-0 before:rounded-full before:transition-all before:duration-150',
      'checked:before:opacity-100',
      'focus:ring-2 focus:ring-primary',
      'hover:ring-2 hover:ring-gray duration-150',
    ],
  },

  variants: {
    labelColor: {
      white: {
        labelStyles: 'text-white',
        inputStyles: '',
      },
      black: {
        labelStyles: 'text-black',
        inputStyles: '',
      },
    },
  },

  defaultVariants: {
    labelColor: 'white',
  },
});

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
  label?: string;
  labelFor?: string;
  onCheck?: (value?: RadioValue) => void;
  isCheked?: boolean;
  value?: RadioValue;
} & VariantProps<typeof radio> &
  InputHTMLAttributes<HTMLInputElement>;

export const Radio: FC<RadioProps> = ({
  label,
  labelFor = '',
  labelColor,
  onCheck,
  value,
  ...props
}) => {
  const { labelStyles, inputStyles } = radio({ labelColor });

  const onChange = () => {
    !!onCheck && onCheck(value);
  };

  return (
    <div className="flex items-center gap-2">
      <input
        id={labelFor}
        type="radio"
        className={inputStyles()}
        onChange={onChange}
        value={value}
        {...props}
      />
      {!!label && (
        <label htmlFor={labelFor} className={labelStyles()}>
          {label}
        </label>
      )}
    </div>
  );
};
