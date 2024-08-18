'use client';

import { FC, useState } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const textField = tv({
  slots: {
    labelStyles: 'text-black text-sm cursor-pointer',
    inputWapperStyles:
      'flex items-center gap-2 bg-lightGray rounded px-4 py-3 border-2 border-lightGray border-solid focus-within:ring-2 focus-within:ring-secondary [&>svg]:focus-within:text-secondary [&>svg]:text-gray',
    inputStyles: 'outline-none w-full bg-transparent',
    errorStyles: 'mt-0.5 text-xs text-red',
  },

  variants: {
    isError: {
      true: {
        labelStyles: 'text-red',
        inputWapperStyles: 'ring-red ring-2 [&>svg]:text-red',
        inputStyles: '',
      },
    },
    disabled: {
      true: {
        labelStyles: 'text-gray/20 pointer-events-none',
        inputWapperStyles:
          'pointer-events-none border-lightGray/80 bg-lightGray/80 [&>svg]:text-gray/20',
        inputStyles: 'placeholder:text-gray/20 text-gray/20',
      },
    },
    iconPosition: {
      left: {
        labelStyles: '',
        inputStyles: '',
      },
      right: {
        inputWapperStyles: '[&>svg]:order-last',
      },
    },
  },

  defaultVariants: {
    isError: false,
    disabled: false,
    iconPosition: 'left',
  },
});

export type TextFieldProps = {
  label?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  error?: string;
  onInput?: (value: string) => void;
} & VariantProps<typeof textField> &
  React.InputHTMLAttributes<HTMLInputElement>;

export const TextField: FC<TextFieldProps> = ({
  label,
  initialValue = '',
  icon,
  iconPosition,
  name,
  disabled = false,
  error,
  onInput,
  ...props
}) => {
  const [value, setValue] = useState(initialValue);

  const isError = !!error;

  const { labelStyles, inputWapperStyles, inputStyles, errorStyles } =
    textField({
      isError,
      disabled,
      iconPosition,
    });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <div>
      {!!label && (
        <label htmlFor={name} className={labelStyles()}>
          {label}
        </label>
      )}

      <div className={inputWapperStyles()}>
        {!!icon && icon}
        <input
          className={inputStyles()}
          type="text"
          onChange={onChange}
          value={value}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </div>

      {!!error && <p className={errorStyles()}>{error}</p>}
    </div>
  );
};
