import { formatPrice } from '@/utils/format-price';
import { FC } from 'react';
import { GameItem, GameItemProps } from '../GameItem';

export type CartListProps = {
  items: GameItemProps[];
  total: number;
};

export const CartList: FC<CartListProps> = ({ items, total }) => {
  return (
    <div className="flex h-full flex-col justify-between self-start bg-white">
      {items.map((item, index) => (
        <GameItem key={item.title + index} {...item} />
      ))}

      <div className="flex justify-between bg-lightGray p-5 text-sm text-black md:p-2 md:text-base">
        Total:{' '}
        <span className="font-semibold text-primary">{formatPrice(total)}</span>
      </div>
    </div>
  );
};
