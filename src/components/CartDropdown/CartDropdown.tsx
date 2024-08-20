import { FC } from 'react';
import { CartIcon } from '../CartIcon';
import { CartList } from '../CartList';
import { Dropdown } from '../Dropdown';
import { GameItemProps } from '../GameItem';

export type CartDropdownProps = {
  items?: GameItemProps[];
  total?: number;
};

export const CartDropdown: FC<CartDropdownProps> = ({ items, total }) => {
  return (
    <div>
      <Dropdown title={<CartIcon quantity={items?.length} />}>
        <CartList items={items} total={total} hasButton className="w-[560px]" />
      </Dropdown>
    </div>
  );
};
