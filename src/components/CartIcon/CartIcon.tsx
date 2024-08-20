import { IconShoppingCart } from '@tabler/icons-react';
import { FC } from 'react';

export type CartIconProps = {
  quantity?: number;
};

export const CartIcon: FC<CartIconProps> = ({ quantity = 0 }) => {
  return (
    <div className="relative w-max">
      {quantity > 0 && (
        <span
          aria-label="Cart items"
          className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] font-semibold text-white"
        >
          {quantity}
        </span>
      )}
      <IconShoppingCart aria-label="Shopping cart" className="text-white" />
    </div>
  );
};
