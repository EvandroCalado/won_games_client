'use client';

import { FC, InputHTMLAttributes, useState } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const checkbox = tv({
  slots: {
    containerStyles: 'flex items-center gap-2',
    labelStyles: 'cursor-pointer leading-4',
    inputStyles: [
      'cursor-pointer flex items-center justify-center appearance-none w-5 h-5 border-2 border-solid border-gray rounded transition-all duration-150 relative outline-none before:content-[""] before:w-2 before:h-3 before:border-2 before:border-t-0 before:border-l-0 before:border-white before:rotate-45 before:absolute before:top-0 before:opacity-0 before:transition-all before:duration-150 checked:border-primary checked:bg-primary checked:before:opacity-100 focus:border-2 focus:border-primary hover:border-gray hover:border-gray/50',
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

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  onCheck?: (status: boolean) => void;
  isCheked?: boolean;
  value?: string | ReadonlyArray<string> | number;
} & VariantProps<typeof checkbox> &
  InputHTMLAttributes<HTMLInputElement>;

export const Checkbox: FC<CheckboxProps> = ({
  label,
  labelFor = '',
  labelColor,
  onCheck,
  isCheked = false,
  value,
  ...props
}) => {
  const [checked, setChecked] = useState(isCheked);

  const { containerStyles, labelStyles, inputStyles } = checkbox({
    labelColor,
  });

  const onChange = () => {
    const status = !checked;
    setChecked(status);

    !!onCheck && onCheck(status);
  };

  return (
    <div className={containerStyles()}>
      <input
        id={labelFor}
        type="checkbox"
        className={inputStyles()}
        onChange={onChange}
        checked={checked}
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
